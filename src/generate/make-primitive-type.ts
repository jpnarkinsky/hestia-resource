import fhirpath from "fhirpath";
import { primitiveValueType } from "./types";
import { Scope, ModuleDeclaration } from "ts-morph";
import { camelize, classify } from "inflected";

const getDefinitionElements = fhirpath.compile("differential.element");
const getElementValueType = fhirpath.compile(`type.code`);
const getElementRegularExpression = fhirpath.compile(
  "type.extension('http://hl7.org/fhir/StructureDefinition/regex')"
);

export async function makePrimitiveType(
  ns: ModuleDeclaration,
  definition: any
) {
  const cls = ns.addClass({
    name: classify(definition.id),
    extends: "Element",
  });

  cls.addProperty({
    name: "canonicalUrl",
    type: "string",
    isStatic: true,
    initializer: `'${definition.url}'`,
  });

  for (let el of getDefinitionElements(definition)) {
    // Skip the base element since it is not a property
    if (el.id == definition.id) {
      continue;
    }

    let valueType;
    try {
      valueType = primitiveValueType(getElementValueType(el)[0] as string);
    } catch {
      console.warn(
        `Couldn't identify value type for element ${el.id} of definition ${definition.id}.  Skipping`
      );
      continue;
    }
    const ctor = cls.addConstructor({
      parameters: [],
      statements: [
        "super(extension, id);",
        `this.${camelize(`value_${valueType}`, false)}=${camelize(
          `value_${valueType}`,
          false
        )};`,
      ],
    });

    if (!definition.abstract) {
      ctor.addParameter({
        name: camelize(`value_${valueType}`, false),
        type: valueType,
        hasQuestionToken: false,
      });
    }

    ctor.addParameters([
      {
        name: "extension",
        type: "Extension",
        hasQuestionToken: true,
      },
      {
        name: "id",
        type: "Id",
        hasQuestionToken: true,
      },
    ]);

    cls.addProperty({
      name: camelize(`value_${valueType}`, false),
      type: valueType,
      scope: Scope.Private,
    });

    cls.addSetAccessor({
      name: "value",
      parameters: [
        { name: camelize(`value_${valueType}`, false), type: valueType },
      ],
      statements: [
        `this.${camelize(`value_${valueType}`, false)}=${camelize(
          `value_${valueType}`,
          false
        )};`,
      ],
    });

    cls.addGetAccessor({
      name: "value",
      returnType: valueType,
      statements: [`return this.${camelize(`value_${valueType}`, false)};`],
    });
  }
}
