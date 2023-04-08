import fhirpath from "fhirpath";
import { primitiveValueType } from "./types";
import { ModuleDeclaration, Scope, SourceFile } from "ts-morph";
import registry from "./registry";
import { classify } from "inflected";

const getDefinitionElements = fhirpath.compile("differential.element");
const getElementValueType = fhirpath.compile(`type.code`);
const getElementRegularExpression = fhirpath.compile(
  "type.extension('http://hl7.org/fhir/StructureDefinition/regex')"
);

export async function makeComplexType(ns: ModuleDeclaration, definition: any) {
  const cls = ns.addClass({
    name: classify(definition.id),
    extends: registry[definition.baseDefinition],
  });

  cls.addProperty({
    name: "url",
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
        `Couldn't identify value type for element ${el.id} of resource ${definition.id}.  Skipping`
      );
      continue;
    }

    cls.addConstructor({
      parameters: [
        {
          name: "value",
          type: valueType,
          hasQuestionToken: false,
        },
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
      ],
      statements: ["super(extension, id);", "this._value=value;"],
    });

    cls.addProperty({
      name: "_value",
      type: valueType,
      scope: Scope.Private,
    });

    cls.addSetAccessor({
      name: "value",
      parameters: [{ name: "value", type: valueType }],
      statements: ["this._value = value;"],
    });

    cls.addGetAccessor({
      name: "value",
      returnType: valueType,
      statements: ["return this._value"],
    });
  }
}
