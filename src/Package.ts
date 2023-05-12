import { createGunzip } from "zlib";
import tar from "tar-fs";
import { fstat, mkdtempSync, readFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { PackageRegistryFHIRVersion } from "./PackageRegistry";
import { logger } from "./Logger";

type PackageIndexEntry = {
  filename: string;
  resourceType: string;
  id: string;
  url: string;
  version: string;
  type: string;
  kind: string;
};

class PackageResourceTypeError extends Error {
  constructor(expected, received) {
    super(`Expected resource of type ${expected}, get ${received}`);
  }
}
export class Package {
  _metadata?: any;

  static fromStream = async function (fhirVersion, stream): Promise<Package> {
    let path = (await new Promise(function (resolve, reject) {
      // Create a temporary directory exclusive to this package
      let dir = mkdtempSync(`${join(tmpdir(), "hestia-")}`);

      const extract = tar.extract(dir);
      stream.pipe(createGunzip()).pipe(extract);
      extract.on("error", reject);
      extract.on("finish", (i) => resolve(dir as string));
    })) as string;

    const content = Package.parseIndex(
      readFileSync(join(path as string, "package", ".index.json"))
    );

    return new Package(fhirVersion, path as string, content);
  };

  static parseIndex(index: Buffer): { [id: string]: PackageIndexEntry } {
    const idx = JSON.parse(index.toString());
    let result = idx.files.reduce((prev, curr) => {
      prev[curr.id] = curr;
      prev[curr.url] = curr;
      return prev;
    }, {});
    return result;
  }

  constructor(
    public fhirVersion: PackageRegistryFHIRVersion,
    private path: string,
    private content: { [id: string]: PackageIndexEntry }
  ) {}

  /** @returns {Object} Object of package names and versions required */
  get dependencies(): { [key: string]: string } {
    return this.manifest.dependencies;
  }

  async getStructureById(
    id: string
  ): Promise<fhir5.StructureDefinition | null> {
    if (!this.content[id]) {
      return null;
    }

    const structureDefinition = readFileSync(
      join(this.path, "package", this.content[id].filename)
    );

    const result = JSON.parse(
      structureDefinition.toString()
    ) as fhir5.StructureDefinition;

    if (result.resourceType != "StructureDefinition") {
      throw new PackageResourceTypeError(
        `StructureDefinition`,
        result.resourceType
      );
    }

    return result;
  }

  /**
   * List contents
   *
   * @returns {string[]} Id of all structures in package.
   */
  list(): string[] {
    return Object.keys(this.content);
  }

  /** Return the package manifest (package.json) */
  get manifest(): any {
    if (!this._metadata) {
      this._metadata = JSON.parse(
        readFileSync(join(this.path, "package", "package.json")).toString()
      );
    }

    return this._metadata;
  }

  /** Return the package name */
  get name(): string {
    return this.manifest.name;
  }

  /**
   * List profiles
   *
   * @returns {string[]} Id of all structures of type "resource" in package
   */
  profiles(): string[] {
    return Object.values(this.content)
      .filter(({ kind }) => kind == "resource")
      .map((i) => i.id);
  }

  /** @returns {string} The package version */
  get version(): string {
    return this.manifest.version;
  }
}
