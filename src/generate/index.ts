import axios from "axios";
import { Command } from "commander";
import { dirname } from "path";
import { streamToBuffer } from "@jorgeferrero/stream-to-buffer";
import fhirpath from "fhirpath";
import unzipStream from "unzip-stream";
import { decode } from "ini";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { Project } from "ts-morph";
import { makeStructure } from "./make-structure";

const program = new Command();
program
  .argument(
    "[definitions]",
    "Path to full FHIR definitions (e.g. http://hl7.org/fhir/definitions.json.zip)",
    "http://hl7.org/fhir/definitions.json.zip"
  )
  .option(
    "--output, -o [output]",
    "Redirect output file (defaults to src/fhir/fhir-${version}.ts"
  )
  .action(async (definitions, options, command) => {
    let info: { [key: string]: any } = {};
    let structures: Array<any> = [];
    let outputFile = options.outputFile;
    let version = "unknown";

    let response = await axios({
      method: "GET",
      responseType: "stream",
      url: definitions,
    });

    await new Promise((resolve, reject) => {
      response.data
        .pipe(unzipStream.Parse())
        .on("entry", async function (entry: any) {
          if (entry.path === "version.info") {
            info = decode(
              (
                await streamToBuffer(entry as unknown as NodeJS.ReadableStream)
              ).toString()
            );

            if (info.FHIR.FhirVersion.startsWith("5")) {
              version = "5";
            } else if (info.fhir.FHIRVersion.startsWith("4.3")) {
              version = "4b";
            } else if (info.fhir.FHIRVersion.startsWith("4")) {
              version = "4";
            } else if (info.fhir.FHIRVersion.startsWith("3")) {
              version = "3";
            } else if (info.fhir.FHIRVersion.startsWith("2")) {
              version = "2";
            }

            console.log(`Got version of ${version}`);
          } else if (
            entry.path == "profiles-types.json" ||
            entry.path == "profiles-resources.json"
          ) {
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
      outputFile = `${process.env.npm_config_local_prefix}/src/fhir/fhir${version}.ts`;
    }

    if (!existsSync(dirname(outputFile))) {
      mkdirSync(dirname(outputFile));
    }

    const project = new Project({});
    const sourceFile = project.createSourceFile(`fhir-${version}.ts`, {
      statements: [`// Autogenerated by src/generate.  Do not edit!`],
    });
    const ns = sourceFile.addModule({
      name: `fhir${version}`,
    });

    // Descend the inheritance tree, and get everything in the right order.
    for (let sd of fhirpath.evaluate(
      structures,
      `
      (  where(baseDefinition.exists() != true and abstract=true) 
        | where(abstract = true)
        | where(kind='primitive-type')
        | where(kind='complex-type')
        | where(kind='resource')
      ).distinct()
      `
    )) {
      await makeStructure(ns, sd);
    }

    writeFileSync(outputFile, sourceFile.getText());
    console.log(`Output written to ${outputFile}`);
  })
  .parseAsync()
  .catch(console.error);