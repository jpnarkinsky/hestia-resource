import { Project, Scope, SourceFile } from "ts-morph";
import fhirpath from "fhirpath";

export async function StructureFactory(definition) {
  const project = new Project();
  const sourceFile = project.createSourceFile(`./fhir/fhir-${file}.ts`);
}
