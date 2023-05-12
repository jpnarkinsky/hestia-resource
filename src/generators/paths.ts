import fhirpath from "fhirpath";

export const getDefinitionElements = fhirpath.compile("snapshot.element");

export const getDependencies = fhirpath.compile(`snapshot.element.type.code`);

export const getElementValueType = fhirpath.compile(`type.code`);

export const getExpression = fhirpath.compile(
  `snapshot.element.where(path=%name + '.value').type
  .extension('http: //hl7.org/fhir/StructureDefinition/regex')
  .select(value | valueString)`
);

export const getValueTypeCode = fhirpath.compile(
  `snapshot.element.where(path=%name+ '.value').type.code`
);
