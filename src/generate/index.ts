import axios from "axios";
import { basename } from "path";
import { Command } from "commander";
import { dirname } from "path";
import { streamToBuffer } from "@jorgeferrero/stream-to-buffer";
import fhirpath from "fhirpath";
import unzipStream from "unzip-stream";
import { decode } from "ini";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { IndentationText, NewLineKind, Project, SourceFile } from "ts-morph";
import { makeStructure } from "./make-structure";
import { classes, types } from "./seeds";
import Promise, { all } from "bluebird";
import { makeTypeAliases } from "./make-type-aliases";
import prettier from "prettier";
import { promises } from "dns";

function finish(status: number, outputFile: string, sourceFile: SourceFile) {
  let text = sourceFile.getFullText();
  try {
    console.log(`Formatting text...`);
    text = prettier.format(text, {
      parser: "babel-ts",
      semi: true,
      printWidth: 80,
      useTabs: false,
      endOfLine: "lf",
      trailingComma: "all",
      filepath: outputFile,
      proseWrap: "always",
      plugins: ["prettier-plugin-jsdoc"],
    });
  } catch (error: any) {
    console.error(`ERROR: Couldn't format text: ${error.message}`);
  }

  console.log(`Writing content to "${outputFile}".`);
  writeFileSync(outputFile, text);

  process.exit(status);
}

const program = new Command();
program
  .option(
    "-o,--output [output]",
    "Redirect output file (defaults to src/fhir/fhir-${version}.ts"
  )
  .option(
    "-t,--target [target]",
    "Stop when this class has been built (for debugging)",
    "All"
  )
  .option(
    "-d,--definitions [definitions]",
    "Path to full FHIR definitions (e.g. http://hl7.org/fhir/definitions.json.zip) to generate a fhir version",
    "http://hl7.org/fhir/definitions.json.zip"
  )
  .action(async (options, command) => {
    let info: { [key: string]: any } = {};
    let structures: Array<any> = [];
    let outputFile = options.outputFile;
    let target = options.target;
    let version = "unknown";
    let definitions = options.definitions;

    if (!definitions) {
      console.log(`Definitions must be provided, but got ${definitions}`);
      process.exit(1);
    }

    console.log(`Fetching ${definitions}, generating through ${target}`);

    let response = await axios({
      method: "GET",
      responseType: "stream",
      url: definitions,
    });

    await new Promise((resolve, reject) => {
      response.data
        .pipe(unzipStream.Parse())
        .on("entry", async function (entry: any) {
          const filename = basename(entry.path);
          if (filename === "version.info") {
            info = decode(
              (
                await streamToBuffer(entry as unknown as NodeJS.ReadableStream)
              ).toString()
            );

            version =
              (info.FHIR && info.FHIR.version) ||
              (info.fhir && info.fhir.version);

            if (!version) {
              console.log(info);
              throw new Error(`Couldn't extract fhir version`);
            }
            if (version.startsWith("5")) {
              version = "5";
            } else if (version.startsWith("4.3")) {
              version = "4b";
            } else if (version.startsWith("4")) {
              version = "4";
            } else if (version.startsWith("3")) {
              version = "3";
            } else if (version.startsWith("2")) {
              version = "2";
            }

            console.log(`Got version of ${version}`);
          } else if (
            filename == "profiles-types.json" ||
            filename == "profiles-resources.json"
          ) {
            console.log(`Processing ${entry.path}`);
            const bundle = JSON.parse(
              (
                await streamToBuffer(entry as unknown as NodeJS.ReadableStream)
              ).toString()
            );

            for (let structure of fhirpath.evaluate(bundle, "entry.resource")) {
              structures.push(structure);
            }
          } else {
            entry.autodrain();
            console.error(`Skipped file: ${entry.path}`);
          }
        })
        .on("end", () => resolve(undefined))
        .on("error", (err: Error) => reject(err));
    });

    if (!outputFile) {
      if (!process.env.npm_config_local_prefix) {
        throw new Error(
          `Couldn't identify source path.  Please run this command through 'npm run generate' or else specify the output file with the -o option!`
        );
      }
      outputFile = `${process.env.npm_config_local_prefix}/src/versions/fhir${version}.ts`;
    }

    if (!existsSync(dirname(outputFile))) {
      mkdirSync(dirname(outputFile));
    }

    const project = new Project({
      manipulationSettings: {
        indentationText: IndentationText.TwoSpaces,
        newLineKind: NewLineKind.LineFeed,
        useTrailingCommas: true,
      },
    });

    const sourceFile = project.createSourceFile(`fhir-${version}.ts`, {
      statements: [`// Autogenerated by src/generate.  Do not edit!`],
    });

    const ns = sourceFile.addModule({
      name: `fhir${version}`,
    });

    // Add the type.  We will be dynamically updating this as we iterate
    // through the file, but we need to do it here to make sure it's at the
    // the front of the file.
    ns.addTypeAliases(makeTypeAliases(structures));

    // Add the seeds to the front.
    await Promise.each(classes, async (seed) => {
      let sd = await fhirpath.evaluate(
        structures,
        "where(name = %name)",
        seed
      )[0];

      const name = sd.name;
      if (!sd) {
        console.log(`Warning: inferring seed class sd for ${name}`);
        sd = {
          url: `http://hl7.org/fhir/StructureDefinition/Element/${name}`,
          name,
          kind: "complex-type",
        };
        structures.push(sd);
      }

      console.log(`Building seed class ${name} (${sd.url})...`);
      await makeStructure(ns, structures, sd);
      if (name == target) {
        finish(0, outputFile, sourceFile);
      }
    });

    // Construct a list of artifacts to create attempting to ensure baseClasses are placed
    // at the top of the file.
    await Promise.each(
      fhirpath.evaluate(
        structures,
        `(  where(baseDefinition.exists() != true and abstract=true) 
          | where(abstract = true)
          | where(kind='primitive-type')
          | where(kind='complex-type')
          | where(kind='resource')
        ).distinct()`
      ),
      async function (sd) {
        console.log(`Building constructed class ${sd.name} (${sd.url})...`);
        await makeStructure(ns, structures, sd);
        if (sd.name == target) {
          finish(0, outputFile, sourceFile);
        }
      }
    );

    finish(0, outputFile, sourceFile);
    console.log(`Output ${version} to ${outputFile}`);
  })
  .parseAsync()
  .catch(console.error);
