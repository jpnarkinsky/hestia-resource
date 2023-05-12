import { camelize } from "inflected";

export function getPrimitiveValueType(url: string) {
  switch (url) {
    case "http://hl7.org/fhirpath/System.String":
      return "string";
    case "http://hl7.org/fhirpath/System.Boolean":
      return "boolean";
    case "http://hl7.org/fhirpath/System.Date":
    case "http://hl7.org/fhirpath/System.DateTime":
    case "http://hl7.org/fhirpath/System.Time":
      return "DateTime";
    case "http://hl7.org/fhirpath/System.Decimal":
    case "http://hl7.org/fhirpath/System.Integer":
      return "number";
    default:
      throw new Error(`Unrecognized primitive value type URL: ${url}`);
  }
}

export function getValueType(url: string) {
  try {
    return getPrimitiveValueType(url);
  } catch (_) {
    return camelize(url).replace("Metum", "MetUM");
  }
}
