import { ProfileRegistry } from "src/ProfileRegistry";
import { Writable } from "stream";

export abstract class Generator {
  constructor(
    protected profiles: string[],
    protected profileRegistry: ProfileRegistry,
    protected target: Buffer | Writable | string
  ) {}

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
