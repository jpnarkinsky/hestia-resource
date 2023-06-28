import { Command, Option } from "commander";
import generators from "./generators";
import { existsSync, mkdirSync } from "fs";
import { logger } from "./Logger";
import { loadFromFile, make } from "./Configuration";
import { StructureRegistry } from "./StructureRegistry";
import { PackageRegistry } from "./PackageRegistry";
import Promise from "bluebird";
import { unique } from "radash";

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
      "-o,--output-path [outputPath]",
      "Specify an output path (defaults to current working directory)"
    ).default(".")
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
      "-P,--pkg [...pkg]",
      "Import the specified FHIR package (path, URL, or name)"
    )
  )
  .argument("[config-file]")
  .action(async function (
    configFile,
    { generatorName, enableFeature, disableFeature, pkg, profile, skip, outputPath }
  ) {
    logger.info(
      `Will generate from ${configFile} with ${generatorName} to ${outputPath}`
    );

    let config;
    if (configFile) {
      config = await loadFromFile(configFile);
    } else {
      // This will generate a new, blank configuration
      config = make();
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

    if (outputPath) {
      config.data.outputPath = outputPath;
    }

    if (pkg) {
      unique((config.data.packages = config.data.packages.concat(pkg).sort()));
    }

    if (profile) {
      if (!Array.isArray(profile)) {
        profile = [profile];
      }
      logger.info(
        `Limiting generation to the following profiles: ${profile.join(", ")}`
      );
    }

    if (skip) {
      logger.info(`Skipping some structures: ${skip.join(", ")}`);
    }

    // If no profiles are specified, default to generating all profiles
    // in the requested packages.
    if (!profile || profile.length == 0) {
      // Because we don't (yet) have a structureRegistry, it
      // is necessary to manually call to PackageRegistry.  Since
      // we only load a package once, this doesn't cost us anything.
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

    if (!existsSync(config.data.outputPath)) {
      try {
        mkdirSync(config.data.outputPath);
      } catch(error: any) {
        console.error(`Couldn't create output path: ${error.message}`);
        process.exit(1);
      }
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
      structureRegistry,
      outputPath,
    );

    await generator.generate(profile);
    await generator.bundle();
  });

program.parseAsync().catch(console.error);
