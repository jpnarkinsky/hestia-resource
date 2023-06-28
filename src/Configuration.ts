import { z } from "zod";
import yaml from "js-yaml";
import fs from "fs/promises";

const configSchema = z.object({
  packages: z.string().array().default([]),
  features: z
    .object({
      codeSystemEnums: z.boolean().optional().default(true),
    })
    .default({}),
  profiles: z.string().array().default([]),
  ignore: z.string().array().default([]),
  generatorName: z.string().default("TypeScript"),
  outputPath: z.string().default("."),
});

export type Configuration = z.infer<typeof configSchema>;

export async function loadFromFile(filename: string): Promise<Configuration> {
  const data = yaml.load((await fs.readFile(filename)).toString());
  return configSchema.parse(data);
}

export function make(data?: Configuration): Configuration {
  return configSchema.parse(data);
}