import { Command } from "commander";
import { dirname } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { loadZip } from "./loaders";
import { generate } from "./generate";
import urlMap from "./url-map.json" assert { type: "json" };

function prepareOutputFile(outputFile, version): string {
  if (!outputFile) {
    if (!process.env.npm_config_local_prefix) {
      throw new Error(
        `Couldn't identify source path.  Please run this command through 'npm run generate' or else specify the output file with the -o option!`
      );
    }
    outputFile = `${process.env.npm_config_local_prefix}/src/versions/fhir-${version}.ts`;
  }

  if (!existsSync(dirname(outputFile))) {
    mkdirSync(dirname(outputFile));
  }

  return outputFile;
}

const program = new Command();

program
  .command("version <fhirVersion>")
  .option(
    "-o,--outputFile [output]",
    "Redirect output file (defaults to src/fhir/fhir-${version}.ts"
  )
  .option(
    "-t,--target [target]",
    "Stop when this class has been built (for debugging)",
    "All"
  )
  .option(
    "-l,--location [path | url]",
    "Override the path or url for definitions"
  )
  .action(async function (fhirVersion, { outputFile, target, location }) {
    if (!location) {
      location = urlMap[fhirVersion];
      if (!location) {
        throw new Error(`Could not find version for ${fhirVersion}`);
      }
    }

    const { structures, version } = await loadZip(location);

    await generate({
      outputFile: prepareOutputFile(outputFile, fhirVersion),
      target,
      version: fhirVersion,
      structures,
    });
  });

program.parseAsync().catch(console.error);
