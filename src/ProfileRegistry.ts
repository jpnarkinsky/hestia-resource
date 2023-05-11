import { Package } from "./Package";
import { PackageRegistry } from "./PackageRegistry";
import { Profile } from "./Profile";

class NoSuchProfileError extends Error {
  constructor(name: string) {
    super(`Couldn't find any package providing ${name} in the loaded packages`);
  }
}

export class ProfileRegistry {
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
  }

  /**
   * Find a profile matching name in all our packages
   *
   * @param {string} name The name of the profile to search for
   * @returns {Profile} The profile
   */
  find(name: string): Profile {
    for (let pkg of this.packages) {
      const profile = pkg.getStructureById(name);
      if (profile) {
        return profile;
      }
    }

    throw new NoSuchProfileError(name);
  }
}
