import { StructureRegistry } from "src/StructureRegistry";
import { Writable } from "stream";
import { logger } from "../Logger";
import Handlebars from "handlebars";

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
        const structure = await this.structureRegistry.find(id);

        if (!structure) {
          throw new Error(`Structure not found: ${id}`);
        }

        switch (structure?.kind) {
          case "primitive-type":
          case "complex-type":
          case "resource":
            await this.generateStructure(structure);
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

  protected async write(
    target: string | Buffer | Writable,
    code: string
  ): Promise<undefined> {
    if (target.constructor instanceof Buffer) {
      target = Buffer.concat([target as Buffer, Buffer.from(code)]);
    } else if (target instanceof Writable) {
      logger.info(`Writing to output`);
      (target as Writable).write(code);
    } else {
      target = target + code;
    }

    return;
  }

  /**
   * @param {string} template The template string
   * @param {fhir5.StructureDefinition} sd The structure definition
   * @returns {string}
   */
  protected evalText(template, sd) {
    if (!template) {
      return template;
    }
    if (!sd.title) {
      sd.title = sd.name;
    }
    return Handlebars.compile(template)(sd);
  }

  // Abstract methods
  abstract initialize(): Promise<undefined>;
  abstract generateStructure(sd: fhir5.StructureDefinition): Promise<string>;
  protected abstract dump(
    target: string | Buffer | Writable
  ): Promise<undefined>;
}
