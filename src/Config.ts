import { z } from "zod";

const configSchema = z.object({
  packages: z.string().array().default([]),
  features: z
    .object({
      codeSystemEnums: z.boolean().optional().default(true),
    })
    .optional(),
  profiles: z.string().array().default([]),
  ignore: z.string().array().default([]),
});

type schema = z.infer<typeof configSchema>;

class Configuration {
  private data: schema;
  private static instance?: Configuration;

  private constructor(data?: schema) {
    if (data) {
      this.data = data;
    } else {
      this.data = configSchema.parse(undefined);
    }
  }

  public static get loaded(): Configuration {
    if (!Configuration.instance) {
      Configuration.instance = new Configuration();
    }

    return Configuration.instance;
  }
}
