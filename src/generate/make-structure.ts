import fhirpath from "fhirpath";
import { ModuleDeclaration } from "ts-morph";
import { makePrimitiveType } from "./make-primitive-type";
import { makeComplexType } from "./make-complex-type";
import { classes } from "./seeds";
import registry from "./registry";

import { default as dbg } from "debug";
import { assert } from "console";
const debug = dbg(`hestia:resource:generate`);

/**
 * Process a structure and generate the code for it
 *
 * @param ns the namespace to put everything in
 * @param structures a list of structures
 * @param definition the current structure definition
 * @returns {undefined}
 */
export async function makeStructure(
  ns: ModuleDeclaration,
  structures: Array<any>,
  definition: any
) {
  if (registry[definition.url]) {
    return;
  }

  registry[definition.url] = definition.id;

  if (definition.baseDefinition) {
    const baseClass = registry[definition.baseDefinition];
    if (!baseClass) {
      const sd = structures.find((i) => i.url == definition.baseDefinition);
      await makeStructure(ns, structures, sd);
    }
  }

  const seed = classes.find((i) => i.name == definition.id);
  if (seed !== undefined) {
    return ns.addClass(seed);
  }

  switch (definition.kind) {
    case "primitive-type":
      return await makePrimitiveType(ns, definition);
    case "complex-type":
      return await makeComplexType(ns, definition);
    case "resource":
      return await makeComplexType(ns, definition);
    default:
      throw new Error(`Unrecognized structure kind: ${definition.kind}`);
  }
  return;
}
