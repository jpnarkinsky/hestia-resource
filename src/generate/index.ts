import { Command } from "commander";
import { dirname } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { loadZip } from "./loaders";
import { generate } from "./generate";

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
    "-d,--location [path | url]",
    "Path to full FHIR definitions (e.g. http://hl7.org/fhir/definitions.json.zip) to generate a fhir version",
    "http://hl7.org/fhir/definitions.json.zip"
  )
  .action(async function (options) {
    let outputFile = options.outputFile;
    let target = options.target;
    let location = options.location;

    if (!location) {
      console.log(`Definitions must be provided, but got ${location}`);
      process.exit(1);
    }

    console.log(`Fetching ${location}`);
    if (target) {
      console.log(`Will stop generation after ${target}.`);
    }

    const { structures, version } = await loadZip(location);

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

    await generate({ outputFile, target, version, structures });
  })
  .parseAsync()
  .catch(console.error);
