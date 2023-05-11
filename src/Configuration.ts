import { z } from "zod";
import yaml from "js-yaml";
import fs from "fs/promises";

const configSchema = z.object({
  packages: z.string().array().default([]),
  features: z
    .object({
      codeSystemEnums: z.boolean().optional().default(true),
    })
    .optional(),
  profiles: z.string().array().default([]),
  ignore: z.string().array().default([]),
  generatorName: z.string().default("TypeScript"),
});

type schema = z.infer<typeof configSchema>;

export class Configuration {
  private data: schema;
  private static instance?: Configuration;

  private constructor(data?: schema) {
    if (data) {
      this.data = data;
    } else {
      this.data = configSchema.parse(undefined);
    }
  }

  public static get data(): schema {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }

    return Configuration.instance.data;
  }

  public static from(data?: schema): Configuration {
    Configuration.instance = new Configuration(data);
    return Configuration.instance;
  }

  public static async fromFile(filename: string): Promise<Configuration> {
    const data = yaml.load((await fs.readFile(filename)).toString());
    return Configuration.from(data);
  }
}
