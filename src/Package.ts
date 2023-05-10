import { createGunzip } from "zlib";
import tar from "tar-fs";
import { mkdtempSync, readFileSync } from "fs";
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

export class Package {
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

  async getById(id: string): Promise<any> {
    if (!this.content[id]) {
      return undefined;
    }

    const structureDefinition = readFileSync(
      join(this.path, "package", this.content[id].filename)
    );

    return JSON.parse(structureDefinition.toString());
  }

  list(): string[] {
    return Object.keys(this.content);
  }
}
