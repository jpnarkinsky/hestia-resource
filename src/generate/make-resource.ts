import fhirpath from "fhirpath";
import { ModuleDeclaration } from "ts-morph";
import { camelize } from "inflected";

export async function makeResource(ns: ModuleDeclaration, definition: any) {
  const cls = ns.addClass({
    name: camelize(definition.id),
  });

  cls.addProperty({
    name: "canonicalUrl",
    type: "string",
    isStatic: true,
    initializer: `'${definition.url}'`,
  });
  return;
}
