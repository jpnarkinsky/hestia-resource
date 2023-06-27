import { Command, Option } from "commander";
import generators from "./generators";
import { createWriteStream } from "fs";
import { logger } from "./Logger";
import { Configuration } from "./Configuration";
import { StructureRegistry } from "./StructureRegistry";
import { PackageRegistry } from "./PackageRegistry";
import Promise from "bluebird";
import { unique } from "radash";

const program = new Command();

program
  .addOption(
    new Option(
      "-g,--generator-name [generator-name]",
      "Use a different generate (defaults to Javascript)"
    )
      .choices(Object.keys(generators))
      .default("Javascript")
  )
  .addOption(
    new Option(
      "-o,--output [output]",
      "Specify an output path (defaults to stdout)"
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
      "-P,--pkg [...pkg]",
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
      output,
    );

    await generator.generate(profile);
    await generator.emit();
  });

program.parseAsync().catch(console.error);
