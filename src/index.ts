import { Command, Option } from "commander";
import generators from "./generators";
import { createWriteStream } from "fs";
import { logger } from "./Logger";
import { Configuration } from "./Configuration";
import { StructureRegistry } from "./StructureRegistry";
import { PackageRegistry } from "./PackageRegistry";
import Promise from "bluebird";

const program = new Command();

program
  .addOption(
    new Option(
      "-g,--generator-name [generator-name]",
      "Use a different generate (defaults to TypeScript)"
    )
      .choices(Object.keys(generators))
      .default("TypeScript")
  )
  .addOption(
    new Option(
      "-o,--output [output]",
      "Specify an output file (defaults to stdout)"
    ).default("-")
  )
  .addOption(
    new Option("-p,--profile [...profile]", "List of profiles to generator")
  )
  .addOption(
    new Option(
      "-e,--enable-feature [...feature]",
      "Enable features (specify multiples times for more than one"
    )
  )
  .addOption(
    new Option(
      "-d,--disable-feature [...feature]",
      "Disable feature(s) (specify multiple times for more than one"
    )
  )
  .addOption(
    new Option(
      "-P,--package [...pkg]",
      "Import the specified FHIR package (path, URL, or name)"
    )
  )
  .argument("[config-file]")
  .action(async function (
    configFile,
    { generatorName, enableFeature, disableFeature, pkg, profile, skip, output }
  ) {
    logger.info(
      `Will generate from ${configFile} with ${generatorName} to ${output}`
    );

    let config;
    if (configFile) {
      config = await Configuration.fromFile(configFile);
    } else {
      // This will generate a new, blank configuration
      config = Configuration.from();
    }

    if (generatorName) {
      config.data.generatorName = generatorName;
    }

    if (enableFeature) {
      for (let feature of enableFeature) {
        config.data.features[feature] = true;
      }
    }

    if (disableFeature) {
      for (let feature of disableFeature) {
        config.data.features[feature] = false;
      }
    }

    if (pkg) {
      config.data.packages = config.data.packages.concat(pkg).sort().uniq();
    }

    if (profile) {
      logger.info(
        `Limiting generation to the following profile: ${profile.join(", ")}`
      );
    }

    if (skip) {
      logger.info(`Skipping some structures: ${skip.join(", ")}`);
    }

    let targetStream;
    if (output == "-") {
      logger.info(`Sending output to stdout`);
      targetStream = process.stdout;
    } else {
      try {
        targetStream = createWriteStream(output);
      } catch (error: any) {
        logger.error(`Couldn't open ${output} for writing: ${error.message}`);
        process.exit(1);
      }
    }

    // If no profiles are specified, default to generating all profiles
    // in the requested packages.
    if (!profile || profile.length == 0) {
      const packageRegistry = new PackageRegistry();
      profile = (
        await Promise.map(config.data.packages, (i: string) =>
          packageRegistry.load(i)
        )
      )
        .map((i) => i.profiles())
        .flat();

      logger.info(
        `Will generate the following profiles: ${profile.join(", ")}.`
      );
    }

    const structureRegistry = new StructureRegistry();
    for (let pkg of config.data.packages) {
      await structureRegistry.addPackage(pkg);
    }

    if (!generators[config.data.generatorName]) {
      logger.error(`Unknown generator ${config.data.generatorName}`);
      process.exit(1);
    }

    const generator = new generators[config.data.generatorName](
      structureRegistry
    );

    await generator.generate(profile);
    await generator.dump(targetStream);
  });

program.parseAsync().catch(console.error);
