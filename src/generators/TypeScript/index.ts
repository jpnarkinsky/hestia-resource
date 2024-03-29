import { Generator } from "../Generator";
import { logger } from "../../Logger";
import { camelize } from "inflected";
import {
  ClassDeclaration,
  ClassDeclarationStructure,
  IndentationText,
  NewLineKind,
  Project,
  SourceFile,
  Scope,
  StructureKind,
  ModuleDeclaration,
} from "ts-morph";

import {
  getDefinitionElements,
  getDependencies,
  getElementValueType,
  getExpression,
  getValueTypeCode,
} from "../paths";
import { getValueType, getPrimitiveValueType } from "../types";
import { join } from "path";
import { mkdir, writeFile } from 'fs/promises';

import packageJson from './assets/package.json' assert {type: 'json'};
import tsconfigJson from './assets/tsconfig.json' assert {type: 'json'};

export class TypeScript extends Generator {
  protected project?: Project;
  protected sourceFile?: SourceFile;
  protected ns?: ModuleDeclaration;

  /**
   * Write the output bundle to path
   * 
   * @param {string} path 
   */
  async bundle() : Promise<void> {
    if (!this.sourceFile) {
      throw new Error(`Can't emit until source is generated!`);
    }
    this.sourceFile?.formatText();
    await mkdir(join(this.output, 'src'), {recursive: true});
    await mkdir(join(this.output, 'dist'), {recursive: true});
    await writeFile(join(this.output, 'src', 'structures.ts'), this.sourceFile?.getFullText());
    await writeFile(join(this.output, 'tsconfig.json'), JSON.stringify(tsconfigJson, null, 2));
    await writeFile(join(this.output, 'package.json'), JSON.stringify(packageJson, null, 2));

  }

  private addClass(id, cls: ClassDeclarationStructure): ClassDeclaration {
    const className = cls.name as string;
    const url = (
      cls.properties?.find((i) => i.name == "url")?.initializer as string
    ).replace(/'/g, "");
    logger.info(`Adding class ${className} (${url || "No URL"})`);

    this.processed[id] = className;
    if (url) {
      this.processed[url] = className;
    } else {
      logger.warn(`Couldn't find URL for class ${className}`);
    }
    const result = this.sourceFile?.addClass(cls);
    if (result) {
      return result;
    }
    throw new Error(
      `Couldn't add class for some reason.  This should never happen.`
    );
  }

  async generateStructure(sd: fhir5.StructureDefinition): Promise<string> {
    const className = camelize(sd.name.replace(/\W/g, "_")).replace(
      "Metum",
      "MetUM"
    );

    if (this.processed[className]) {
      return this.processed[className];
    }

    this.processed[className] = className;

    if (sd.abstract) {
      return className;
    }

    if (!this.sourceFile) {
      throw new Error("Must initialize generator before use");
    }

    // find and add all the types used by this class.
    if (sd.kind == "primitive-type") {
      const element = this.sourceFile?.getTypeAliasOrThrow("Element");
      element?.setType(
        element?.getTypeNodeOrThrow().getText() + `| ${className}`
      );
    } else {
      for (let dep of getDependencies(sd)) {
        if (!this.processed[dep]) {
          dep = await this.structureRegistry.find(dep);
          try {
            await this.generateStructure(dep);
          } catch (error) {
            continue;
          }
        }
      }

      if (sd.kind == "resource") {
        const resource = this.sourceFile?.getTypeAliasOrThrow("Resource");
        resource?.setType(
          resource?.getTypeNodeOrThrow().getText() + `| ${className}`
        );
      } else if (sd.kind == "complex-type") {
        const element = this.sourceFile?.getTypeAliasOrThrow("Element");
        element?.setType(
          element?.getTypeNodeOrThrow().getText() + `| ${className}`
        );
      }
    }

    const inter = this.sourceFile?.addInterface({ name: `I${className}` });
    const cls = this.addClass(sd.id, {
      name: camelize(sd.name.replace(/\W/g, "_")).replace("Metum", "MetUM"),
      // extends: baseClass,
      // isAbstract: sd.abstract,
      isExported: true,
      docs: [
        {
          description: this.evalText(sd.description, sd),
        },
      ],
      properties: [
        {
          name: "url",
          type: "string",
          isStatic: true,
          initializer: `'${sd.url}'`,
        },
      ],
      kind: StructureKind.Class,
    });

    if (sd.kind === "primitive-type") {
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

      inter?.addProperty({
        name: "value",
        type: valueType,
        hasQuestionToken: true,
      });

      cls.addSetAccessor({
        name: "value",
        parameters: [{ name: "value", type: valueType }],
        statements: [
          `this.validate(value);`,
          `this._content['value'] = value;`,
        ],
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
    } else {
      for (let el of getDefinitionElements(sd).sort((a, b) =>
        a.id > b.id ? 1 : -1
      )) {
        // Skip the base element since it is not a property
        if (el.id == sd.id || /\w+\.\w+\.\w+/.test(el.path)) {
          continue;
        }

        const name = el.path.replace(/^.*\./, "").replace("[x]", "");

        // Skip this element if it's already been added.
        if (cls.getSetAccessor(name)) {
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

        cls.addSetAccessor({
          name,
          parameters: [{ name: "value", type: valueTypes.join(" | ") }],
          statements: [`this._content['${name}'] = value;`],
          docs: [
            {
              description: this.evalText(el.definition || el.name, sd),
            },
          ],
        });

        if (valueTypes.length == 1) {
          cls.addGetAccessor({
            name,
            returnType: valueTypes[0],
            statements: [
              `return this._content['${name}'] as ${valueTypes[0]};`,
            ],
          });

          inter?.addProperty({
            name,
            type: valueTypes[0],
            hasQuestionToken: true,
          });
        } else if (valueTypes.length > 1) {
          for (let vt of valueTypes) {
            cls.addGetAccessor({
              name: name + vt,
              returnType: vt,
              statements: [`return this._content['${name}'] as ${vt};`],
            });

            inter?.addProperty({
              name: name + vt,
              type: vt,
              hasQuestionToken: true,
            });
          }
          inter?.addProperty({
            name,
            type: valueTypes.join("|"),
            hasQuestionToken: true,
          });
        }
      }
    }

    cls.addProperty({
      name: "_content",
      type: `I${className}`,
      hasQuestionToken: false,
      initializer: "{}",
      scope: Scope.Protected,
    });
    return className;
  }

  async initialize(): Promise<void> {
    this.project = new Project({
      manipulationSettings: {
        indentationText: IndentationText.TwoSpaces,
        newLineKind: NewLineKind.LineFeed,
        useTrailingCommas: true,
      },
      compilerOptions: {
        outDir: join(this.output, 'dist'),
        declaration: true,
      }
    });

    this.sourceFile = this.project.createSourceFile(
      `FHIR.ts`,
      {
        statements: [
          `// Autogenerated by @hestia/resource generator.  Do not edit!`,
          "// cspell: disable",
          "",
        ],
      }
    );

    this.processed["http://hl7.org/fhirpath/System.String"] = "string";
    this.processed["http://hl7.org/fhirpath/System.Number"] = "number";

    this.sourceFile.addTypeAliases([
      {
        name: "Resource",
        type: "Basic",
        docs: [
          {
            description:
              "We include the Basic resource first, by default because it makes the code easier.",
          },
        ],
      },
      {
        name: "DomainResource",
        type: "Resource",
      },
      {
        name: "Element",
        type: "number | string | boolean | BackboneElement",
      },
      {
        name: "BackboneElement",
        type: "{[key: string]: Element}",
      },
    ]);

    const sd = await this.structureRegistry.find("Basic");
    this.generateStructure(sd);

    return;
  }
}
