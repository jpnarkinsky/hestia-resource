import { Package } from "./Package";
import { Profile } from "./Profile";

class NoSuchProfileError extends Error {
  constructor(name: string) {
    super(`Couldn't find any package providing ${name} in the loaded packages`);
  }
}

export class ProfileRegistry {
  public packages: Package[] = [];

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
