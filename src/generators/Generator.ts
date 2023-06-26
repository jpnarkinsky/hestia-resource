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
        logger.warn(
          `Failed to generate profile with id ${id} due to error: ${error.message}`
        );
      }
    }
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
}
