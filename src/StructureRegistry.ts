import { logger } from "./Logger";
import { Package } from "./Package";
import { PackageRegistry } from "./PackageRegistry";

class NoSuchProfileError extends Error {
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
    const p = await this.pkgRegistry.load(spec);
    this.packages.push(p);
    logger.info(`Registered package ${p.name}@${p.version}`);
  }

  /**
   * Find a structure matching name in all our packages
   *
   * @param {string} name The name of the profile to search for
   * @returns {Structure} The structure
   */
  find(name: string): fhir5.StructureDefinition {
    for (let pkg of this.packages) {
      const sd = pkg.getStructureById(name);
      if (sd) {
        return sd as unknown as fhir5.StructureDefinition;
      }
    }

    throw new NoSuchProfileError(name);
  }

  /**
   * List all profiles (resources) by name, in any package
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
