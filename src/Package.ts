import { createGunzip } from "zlib";
import tar from "tar-fs";
import { fstat, mkdtempSync, readFileSync } from "fs";
import { readFile } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";

type PackageIndexEntry = {
  filename: string;
  resourceType: string;
  id: string;
  url: string;
  version: string;
  type: string;
};

class PackageResourceTypeError extends Error {
  constructor(expected, received) {
    super(`Expected resource of type ${expected}, get ${received}`);
  }
}
export class Package {
  _metadata?: any;

  static fromStream = async function (stream): Promise<Package> {
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

    return new Package(path as string, content);
  };

  static parseIndex(index: Buffer): { [id: string]: PackageIndexEntry } {
    const idx = JSON.parse(index.toString());
    return idx.files.reduce((prev, curr) => {
      prev[curr.id] = curr;
      return prev;
    }, {});
  }

  constructor(
    private path: string,
    private content: { [id: string]: PackageIndexEntry }
  ) {}

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

  list(): string[] {
    return Object.keys(this.content);
  }

  get metadata(): any {
    if (!this._metadata) {
      this._metadata = JSON.parse(
        readFileSync(join(this.path, "package", "package.json")).toString()
      );
    }

    return this._metadata;
  }

  get name(): string {
    return this.metadata.name;
  }

  get version(): string {
    return this.metadata.version;
  }
}
