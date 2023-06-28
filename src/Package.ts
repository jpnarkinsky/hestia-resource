import { createGunzip } from "zlib";
import tar from "tar-fs";
import { mkdtempSync, readFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { PackageRegistryFHIRVersion } from "./PackageRegistry";
import _ from 'radash';

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

  static parseIndex(index: Buffer): Array<PackageIndexEntry> {
    const idx = JSON.parse(index.toString());
    return idx.files;
  }

  constructor(
    public fhirVersion: PackageRegistryFHIRVersion,
    private path: string,
    private content: Array<PackageIndexEntry>
  ) {}

  /** @returns {Object} Object of package names and versions required */
  get dependencies(): { [key: string]: string } {
    return this.manifest.dependencies;
  }

  async getStructureById(
    id: string
  ): Promise<fhir5.StructureDefinition | null> {
    const entry = this.content.find(
      (i) => i.resourceType == "StructureDefinition" && i.id == id
    );

    if (!entry) {
      return null;
    }

    const structureDefinition = readFileSync(
      join(this.path, "package", entry.filename)
    );

    const result = JSON.parse(
      structureDefinition.toString()
    ) as fhir5.StructureDefinition;

    return result;
  }

  /**
   * List contents
   *
   * @returns {string[]} Id of all artifacts in package.
   */
  list(): string[] {
    return Object.values(this.content).map(i => i.id);
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
