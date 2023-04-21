import { StructureKind, TypeAliasDeclarationStructure } from "ts-morph";
import fhirpath from "fhirpath";
import { camelize } from "inflected";

export function makeTypeAliases(
  structures: Array<any>
): Array<TypeAliasDeclarationStructure> {
  const result: Array<TypeAliasDeclarationStructure> = [
    {
      name: "TElement",
      isExported: true,
      type:
        "string | string[] | number | number[] | boolean | Resource | Resource[] | " +
        fhirpath
          .evaluate(
            structures,
            `where(kind='primitive-type' or kind='complex-type' or kind='datatype').name`
          )
          .filter((i) => i)
          .map((i) => camelize(i))
          .sort()
          .map((i) => `${i} | ${i}[]`)
          .join(" | "),
      kind: StructureKind.TypeAlias,
    },
  ];
  return result;
}
