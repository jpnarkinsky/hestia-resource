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
 * @param ns The namespace to put everything in
 * @param structures A list of structures
 * @param sd The current structure definition
 * @returns {undefined}
 */
export async function makeStructure(
  ns: ModuleDeclaration,
  structures: Array<any>,
  sd: any
) {
  if (!sd) {
    throw new Error(`Must provide a structure definition!`);
  }

  try {
    ns.getClassOrThrow(sd.name);
    return;
  } catch (error) {
    if (registry[sd.url]) {
      return;
    }
  }

  registry[sd.url] = sd.id;

  if (sd.baseDefinition) {
    const baseClass = registry[sd.baseDefinition];
    if (!baseClass) {
      const baseDef = structures.find((i) => i.url == sd.baseDefinition);
      await makeStructure(ns, structures, baseDef);
    }
  }

  const seed = classes.find((i) => i.name == sd.name);
  if (seed !== undefined) {
    return ns.addClass(seed);
  }

  switch (sd.kind) {
    case "primitive-type":
      return await makePrimitiveType(ns, sd);
    case "complex-type":
      return await makeComplexType(ns, sd);
    case "resource":
      return await makeComplexType(ns, sd);
    default:
      console.error(
        `Warning: Unrecognized structure kind: ${sd.kind} for ${sd.name}.  Skipped.`
      );
  }
  return;
}
