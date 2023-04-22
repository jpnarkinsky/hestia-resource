import fhirpath from "fhirpath";
import { getPrimitiveValueType } from "./types";
import { ModuleDeclaration, Scope } from "ts-morph";
import { camelize } from "inflected";
import { evalText } from "./eval-text";

const getValueTypeCode = fhirpath.compile(
  `differential.element.where(path=%name+ '.value').type.code`
);

const getExpression = fhirpath.compile(
  `differential.element.where(path=%name + '.value').type
  .extension('http://hl7.org/fhir/StructureDefinition/regex')
  .select(value | valueString)
  `
);

export async function makePrimitiveType(ns: ModuleDeclaration, sd: any) {
  const cls = ns.addClass({
    name: camelize(sd.id),
    extends: "Element",
    isAbstract: sd.abstract,
    docs: [
      {
        description: sd.description,
      },
    ],
  });

  cls.addProperty({
    name: "canonicalUrl",
    type: "string",
    isStatic: true,
    initializer: `'${sd.url}'`,
  });

  const expression = getExpression(sd, { name: sd.name })[0];

  let valueType;
  try {
    valueType = getPrimitiveValueType(
      getValueTypeCode(sd, {
        name: sd.name,
      })[0]
    );
  } catch (error) {
    valueType = "String";
  }

  cls.addSetAccessor({
    name: "value",
    parameters: [{ name: "value", type: valueType }],
    statements: [`this.validate(value);`, `this._content['value'] = value;`],
  });

  cls.addGetAccessor({
    name: "value",
    returnType: valueType,
    statements: [`return this._content['value'] as ${valueType};`],
  });

  cls.addMethod({
    name: "validate",
    parameters: [
      {
        type: valueType,
        name: "value",
      },
    ],
    statements: [
      !!expression
        ? `if (!/${expression}/.test(value.toString())) { 
          throw new Error(\`Value \${value} fails regex '${expression}' for type ${cls.getName()}\`); 
        }`
        : "",
      `return true;`,
    ].filter((i, idx, arr) => i != "" && arr.indexOf(i) !== idx),
  });
}
