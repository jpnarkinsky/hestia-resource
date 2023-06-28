import { StructureRegistry } from "src/StructureRegistry";
import { logger } from "../Logger";
import Handlebars from "handlebars";
import {lstatSync, mkdirSync} from 'fs';

export abstract class Generator {
  protected processed = new Set();
  protected fhirVersion?: string;

  constructor(
    protected structureRegistry: StructureRegistry,
    protected output: string,
  ) {
    try {
      let stats =  lstatSync(output);

      if (!stats.isDirectory()) {
        throw new Error(`${output} already exists and it's not a directory!`)
      }
    } catch(error) {
      logger.info(`${output} doesn't exist.  Creating.`);
      mkdirSync(output);
    }
  }
  

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
  abstract bundle(path: string): Promise<void>;
  abstract initialize(): Promise<void>;
  abstract generateStructure(sd: fhir5.StructureDefinition): Promise<string>;
}
