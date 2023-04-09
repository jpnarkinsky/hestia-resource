import fhirpath from "fhirpath";
import { getPrimitiveValueType } from "./types";
import { ModuleDeclaration } from "ts-morph";
import { camelize } from "inflected";

const getSnapshotElements = fhirpath.compile(`snapshot.element`);

const getValueTypeCode = fhirpath.compile(
  `differential.element.where(path=%name+ '.value').type.code`
);

const getElementRegularExpression = fhirpath.compile(
  "type.extension('http://hl7.org/fhir/StructureDefinition/regex')"
);

export async function makePrimitiveType(ns: ModuleDeclaration, sd: any) {
  const cls = ns.addClass({
    name: camelize(sd.id),
    extends: "Element",
    isAbstract: sd.abstract,
  });

  cls.addProperty({
    name: "canonicalUrl",
    type: "string",
    isStatic: true,
    initializer: `'${sd.url}'`,
  });

  const valueType = getPrimitiveValueType(
    getValueTypeCode(sd, {
      name: sd.name,
    })[0]
  );
}
