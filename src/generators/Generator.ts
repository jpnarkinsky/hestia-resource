import { StructureRegistry } from "src/StructureRegistry";
import { Writable } from "stream";
import { logger } from "../Logger";

class InconsistentVersionError extends Error {
  constructor(id, ...versions: string[]) {
    super(
      `Got incompatible FHIR versions in id ${id}: ${versions.join(" != ")}`
    );
  }
}
export abstract class Generator {
  protected processed = new Set();
  protected fhirVersion?: string;

  constructor(
    protected structureRegistry: StructureRegistry,
    protected target: Buffer | Writable | string
  ) {}

  async generate(ids: string[]) {
    await this.initialize();

    for (let id of ids) {
      try {
        this.processed.add(id);
        const structure = await this.structureRegistry.find(id);

        if (!structure) {
          throw new Error(`Structure not found: ${id}`);
        }

        // if (structure.fhirVersion) {
        //   if (this.fhirVersion && this.fhirVersion !== structure.fhirVersion) {
        //     throw new InconsistentVersionError(
        //       id,
        //       this.fhirVersion,
        //       structure.fhirVersion
        //     );
        //   }
        //   this.fhirVersion = structure.fhirVersion;
        // }

        switch (structure?.kind) {
          case "primitive-type":
          case "complex-type":
          case "resource":
            logger.info(
              `Would generate ${structure?.kind} with id ${structure?.id}`
            );
            this.generateStructure(structure);
            break;
          default:
            logger.warn(
              `Skipping unrecognized kind ${structure?.kind} with id ${structure?.id}`
            );
        }
      } catch (error: any) {
        logger.error(error.message);
        throw error;
      }
    }
  }

  async dump(code: string): Promise<undefined> {
    if (this.target.constructor instanceof Buffer) {
      this.target = Buffer.concat([this.target as Buffer, Buffer.from(code)]);
    } else if (this.target instanceof Writable) {
      logger.info(`Writing to output`);
      (this.target as Writable).write(code);
    } else {
      this.target = this.target + code;
    }

    return;
  }

  // Abstract methods
  abstract initialize(): Promise<undefined>;
  abstract generateStructure(sd: fhir5.StructureDefinition): Promise<undefined>;
}
