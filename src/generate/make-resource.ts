import fhirpath from "fhirpath";
import { ModuleDeclaration } from "ts-morph";
import { classify } from "inflected";

export async function makeResource(ns: ModuleDeclaration, definition: any) {
  const cls = ns.addClass({
    name: classify(definition.id),
  });

  cls.addProperty({
    name: "canonicalUrl",
    type: "string",
    isStatic: true,
    initializer: `'${definition.url}'`,
  });
  return;
}
