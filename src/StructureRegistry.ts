import { logger } from "./Logger";
import { Package } from "./Package";
import { PackageRegistry } from "./PackageRegistry";

class NoSuchStructureError extends Error {
  constructor(name: string) {
    super(`Couldn't find any package providing ${name} in the loaded packages`);
  }
}

export class StructureRegistry {
  public packages: Package[] = [];
  private pkgRegistry;

  constructor() {
    this.pkgRegistry = new PackageRegistry();
  }

  /**
   * Add a package by name, URL, or path
   *
   * @param {string} spec The package spec
   * @throws {PackageNotFoundError} If package is not found
   */
  async addPackage(spec: string) {
    const [name] = spec.split(/@/);

    if (this.packages.find((i) => i.name == name)) {
      return;
    }

    const p = await this.pkgRegistry.load(spec);
    this.packages.push(p);

    if (p.dependencies) {
      for (let [name, version] of Object.entries(p.dependencies)) {
        if (version) {
          await this.addPackage(`${name}@${version}`);
        } else {
          await this.addPackage(name);
        }
      }
    }

    logger.info(`Registered package ${p.name}@${p.version}`);
  }

  /**
   * Find a structure matching name in all our packages
   *
   * @param {string} name The name of the profile to search for
   * @returns {Structure} The structure
   */
  async find(name: string): Promise<fhir5.StructureDefinition> {
    for (let pkg of this.packages) {
      try {
        const sd = await pkg.getStructureById(name);
        if (sd) {
          return sd;
        }
      } catch (error) {
        continue;
      }
    }

    throw new NoSuchStructureError(name);
  }

  /**
   * List all structures by name, in any package
   *
   * @returns {string[]} The list of profiles
   */
  list(): string[] {
    return Array.from(
      new Set(this.packages.map((i) => i.list()).flat())
    ).sort();
  }

  /**
   * List all profiles (resources) by name, in any package
   *
   * @returns {string[]} The list of profiles
   */
  profiles(): string[] {
    return Array.from(
      new Set(this.packages.map((i) => i.profiles()).flat())
    ).sort();
  }
}
