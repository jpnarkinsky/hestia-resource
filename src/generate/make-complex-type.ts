import fhirpath from "fhirpath";
import { getValueType } from "./types";
import { ModuleDeclaration } from "ts-morph";
import registry from "./registry";
import { camelize } from "inflected";
import { evalText } from "./eval-text";

const getDefinitionElements = fhirpath.compile("differential.element");
const getElementValueType = fhirpath.compile(`type.code`);

export async function makeComplexType(ns: ModuleDeclaration, sd: any) {
  let baseClass = registry[sd.baseDefinition];

  const cls = ns.addClass({
    name: camelize(sd.name).replace("Metum", "MetUM"),
    extends: baseClass,
    isAbstract: sd.abstract,
    isExported: true,
    docs: [
      {
        description: evalText(sd.description, sd),
      },
    ],
  });

  cls.addProperty({
    name: "url",
    type: "string",
    isStatic: true,
    initializer: `'${sd.url}'`,
  });

  for (let el of getDefinitionElements(sd).sort((a, b) =>
    a.id > b.id ? 1 : -1
  )) {
    // Skip the base element since it is not a property
    if (el.id == sd.id || /\w+\.\w+\.\w+/.test(el.path)) {
      continue;
    }

    let valueTypes;
    try {
      valueTypes = getElementValueType(el);

      if (el.max == "*") {
        valueTypes = valueTypes.map(
          (i) => `Array<${getValueType(i as string)}>`
        );
      } else {
        valueTypes = valueTypes.map((i) => getValueType(i as string));
      }
    } catch {
      console.warn(
        `Couldn't identify value type for element ${el.id} of resource ${sd.id}.  Skipping`
      );
      continue;
    }

    if (valueTypes.length == 0) {
      continue;
    }

    const name = el.path.replace(/^.*\./, "").replace("[x]", "");

    cls.addSetAccessor({
      name,
      parameters: [{ name: "value", type: valueTypes.join(" | ") }],
      statements: [`this._content['${name}'] = value;`],
      docs: [
        {
          description: evalText(el.definition || el.name, sd),
        },
      ],
    });

    if (valueTypes.length == 1) {
      cls.addGetAccessor({
        name,
        returnType: valueTypes[0],
        statements: [`return this._content['${name}'] as ${valueTypes[0]};`],
      });
    } else if (valueTypes.length > 1) {
      for (let vt of valueTypes) {
        cls.addGetAccessor({
          name: name + vt,
          returnType: vt,
          statements: [`return this._content['${name}'] as ${vt};`],
        });
      }
    }
  }
}
