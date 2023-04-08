import { ModuleDeclaration } from "ts-morph";
import { makePrimitiveType } from "./make-primitive-type";
import { makeComplexType } from "./make-complex-type";
import { makeResource } from "./make-resource";
import registry from "./registry";

import { default as dbg } from "debug";
const debug = dbg(`hestia:resource:generate`);

/**
 * Process a structure and generate the code for it
 *
 * @param ns the namespace to put everything in
 * @param structures a list of structures
 * @param structureDefinition the current structure definition
 * @returns {undefined}
 */
export async function makeStructure(
  ns: ModuleDeclaration,
  structureDefinition: any
) {
  registry[structureDefinition.url] = structureDefinition.id;

  switch (structureDefinition.kind) {
    case "primitive-type":
      return await makePrimitiveType(ns, structureDefinition);
    case "complex-type":
      return await makeComplexType(ns, structureDefinition);
    case "resource":
      return await makeResource(ns, structureDefinition);
  }
  return;
}
