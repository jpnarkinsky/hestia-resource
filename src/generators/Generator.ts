import { StructureRegistry } from "src/StructureRegistry";
import { Writable } from "stream";

export abstract class Generator {
  constructor(
    protected structureRegistry: StructureRegistry,
    protected target: Buffer | Writable | string
  ) {}

  async generate(profiles) {
    if (!profiles || profiles.length == 0) {
      profiles = this.structureRegistry.profiles();
    }

    for (let profile of profiles) {
      console.log(profile);
    }
  }

  async push(code: string): Promise<undefined> {
    if (this.target.constructor instanceof Buffer) {
      this.target = Buffer.concat([this.target as Buffer, Buffer.from(code)]);
    } else if (this.target.constructor instanceof Writable) {
      (this.target as Writable).write(code);
    } else {
      this.target = this.target + code;
    }

    return;
  }

  // Abstract methods for code generation
  abstract addProfile(id: string);
  abstract addType(id: string);
}
