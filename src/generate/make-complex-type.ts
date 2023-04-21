import fhirpath from "fhirpath";
import { camelize, underscore } from "inflected";
import { basename } from "path";
import { ModuleDeclaration, Scope } from "ts-morph";
import { evalText } from "./eval-text";
import { getValueType } from "./types";

const getDefinitionElements = fhirpath.compile("differential.element");
const getElementValueType = fhirpath.compile(`type.code`);

export async function makeComplexType(ns: ModuleDeclaration, sd: any) {
  const baseClass = sd.baseDefinition ? basename(sd.baseDefinition) : undefined;

  const cls = ns.addClass({
    name: camelize(sd.name.replace(/\W/g, "_")).replace("Metum", "MetUM"),
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

  if (!baseClass) {
    cls.addProperty({
      name: "_content",
      type: "{ [key: string]: TElement }",
      hasQuestionToken: false,
      initializer: "{}",
      scope: Scope.Protected,
    });
  }

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
      valueTypes = valueTypes.filter((thing, i, arr) => {
        return arr.indexOf(arr.find((t) => t.id === thing.id)) === i;
      });
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

    // skip this if it's already there.
    if (cls.getSetAccessor(name)) {
      continue;
    }

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
