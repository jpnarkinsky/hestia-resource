import { Axios, default as axios } from "axios";
import { Package } from "./Package";
import { logger } from "./Logger";
import semver from "semver";

import dbg from "debug";
const debug = dbg("hestia:resource:packageRegistry");

class PackageNotUniqueError extends Error {
  constructor(params) {
    super(
      `Found multiple packages for search params ${new URLSearchParams(
        params
      ).toString()}`
    );
  }
}

class PackageNotFoundError extends Error {
  constructor(params) {
    super(
      `Found no packages for search params ${new URLSearchParams(
        params
      ).toString()}`
    );
  }
}

export type PackageRegistryFHIRVersion = "R2" | "R3" | "R4" | "R4B" | "R5";

export interface PackageRegistryObject {
  name: string;
  description: string;
  fhirVersion: PackageRegistryFHIRVersion;
}

export interface PackageRegistrySearchParams {
  name: string;
  version?: string;
  canonical?: string;
  pkgcanonical?: string;
  fhirVersion?: PackageRegistryFHIRVersion;
  prerelease?: true;
}

export interface PackageRegistryPackageVersion {
  name: string;
  version: string;
  description: string;
  dist: {
    shasum: string;
    tarball: string;
  };
  fhirVersion: PackageRegistryFHIRVersion;
  url: string;
}

/**
 * Implements an interface to the NPM package registry, capable of finding an
 * NPM package and returning a URL for the package content.
 */
export class PackageRegistry {
  private client: Axios;

  /** @param {string} baseURL - Base URL for the registry */
  constructor(baseURL: string = "https://packages.fhir.org") {
    this.client = axios.create({
      baseURL,
    });
  }

  /**
   * Search for fhir packages
   *
   * @param {PackageSearchParams} params
   * @returns {Promise<Array<PackageRegistryObject} )
   */
  async search(
    params: PackageRegistrySearchParams
  ): Promise<Array<PackageRegistryObject>> {
    let { data } = await this.client.get("/catalog", { params });
    return data;
  }

  /**
   * Get a fhir package. Will throw exception if the provided parameters don't
   * uniquely identify the package. Returns a stream of the FHIR package.
   *
   * @param {PackageSearchParams} params
   * @returns {Promise<Readable>}
   * @throws {PackageNotUniqueError} Multiple matching packages found
   */
  async load(spec: string): Promise<Package> {
    const url = await this.resolve(spec);
    const { data } = await this.client.get(url, {
      responseType: "stream",
    });
    return Package.fromStream(data);
  }

  /** Get the available versions of the specified package name */
  async versions(
    name: string
  ): Promise<{ [version: string]: PackageRegistryPackageVersion }> {
    const result = await this.client.get(`/${name}`);
    return result.data.versions as {
      [version: string]: PackageRegistryPackageVersion;
    };
  }

  /**
   * Given a tag or semantic version spec, return the appropriate url
   *
   * @param {string} name - The package name
   * @returns {string} The url for the version
   * @throws {PackageNotFoundError} No matching package found
   */
  async resolve(spec: string): Promise<string> {
    let [name, version] = spec.split(/\@/);

    if (!version) {
      version = "latest";
    }

    const { data } = await this.client.get(`/${name}`);

    // If the desired version is a dist tag, then replace it with the
    // content of the dist tag.
    if (data["dist-tags"][version]) {
      version = data["dist-tags"][version];
    }

    for (let v of Object.keys(data.versions).sort((a, b) => (a > b ? 1 : -1))) {
      if (semver.satisfies(v, version as string)) {
        logger.info(`Resolved ${spec} to version ${v}`);
        return data.versions[v].url;
      }
    }

    throw new PackageNotFoundError({ name, version });
  }
}
