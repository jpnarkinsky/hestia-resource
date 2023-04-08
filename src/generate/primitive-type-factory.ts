import fhirpath from "fhirpath";
import pascalCase from "pascalcase";
import { primitiveValueType } from "./types";
import { JSDocTag, Scope, SourceFile } from "ts-morph";
import { stringify } from "querystring";

const getDefinitionElements = fhirpath.compile("differential.element");
const getElementValueType = fhirpath.compile(`type.code`);
const getElementRegularExpression = fhirpath.compile(
  "type.extension('http://hl7.org/fhir/StructureDefinition/regex')"
);

export async function primitiveTypeFactory(
  sourceFile: SourceFile,
  definition: any
) {
  const { resource, fullUrl } = definition;
  const cls = sourceFile.addClass({
    name: pascalCase(resource.id),
    extends: "Element",
  });

  cls.addProperty({
    name: "fullUrl",
    type: "string",
    isStatic: true,
    initializer: `'${fullUrl}'`,
  });

  for (let el of getDefinitionElements(resource)) {
    // Skip the base element since it is not a property
    if (el.id == resource.id) {
      continue;
    }

    const valueType = getElementValueType(el)[0] as string;
    if (!valueType) {
      console.warn(
        `Couldn't identifiy value type for element ${el.id} of resource ${resource.id}.  Skipping`
      );
      continue;
    }
    switch (primitiveValueType(valueType)) {
      case "string":
        cls.addMethod({
          name: "validate",
          returnType: "void",
          docs: [
            {
              description: `Validate a string against the regular expression '${getElementRegularExpression(
                el
              )}'`,
              tags: [
                {
                  kind: JSDocTag.isThrowStatement,
                },
              ],
            },
          ],
        });
        break;
      case "boolean":
        cls.addProperty({
          name: "_value",
          type: "boolean",
          scope: Scope.Private,
        });

        cls.addSetAccessor({
          name: "value",
          parameters: [{ name: "value", type: "boolean" }],
          statements: ["this._value = value;"],
        });

        cls.addGetAccessor({
          name: "value",
          returnType: "boolean",
          statements: ["return this._value"],
        });
        break;
      case "number":
        cls.addProperty({
          name: "_value",
          type: "number",
          scope: Scope.Private,
        });

        cls.addSetAccessor({
          name: "value",
          parameters: [{ name: "value", type: "number" }],
          statements: ["this._value = value;"],
        });

        cls.addGetAccessor({
          name: "value",
          returnType: "number",
          statements: ["return this._value"],
        });
        break;
      case "DateTime":
        cls.addProperty({
          name: "_value",
          type: "DateTime",
          scope: Scope.Private,
        });

        cls.addSetAccessor({
          name: "value",
          parameters: [{ name: "value", type: "DateTime" }],
          statements: ["this._value = value;"],
        });

        cls.addGetAccessor({
          name: "value",
          returnType: "DateTime",
          statements: ["return this._value"],
        });
        break;
      default:
        throw new Error(`Unrecognized element type: ${valueType} for ${el.id}`);
    }

    cls.addConstructor({
      parameters: [
        {
          name: "value",
          type: "string",
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
    });

    cls.addProperty({
      name: "_value",
      type: "string",
      scope: Scope.Private,
    });

    cls.addSetAccessor({
      name: "value",
      parameters: [{ name: "value", type: "string" }],
      statements: ["this._value = value;"],
    });

    cls.addGetAccessor({
      name: "value",
      returnType: "string",
      statements: ["return this._value"],
    });
  }
}
