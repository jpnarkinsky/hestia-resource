import {
  ClassDeclarationStructure,
  StructureKind,
  OptionalKind,
  Scope,
  TypeAliasDeclarationStructure,
} from "ts-morph";

export const types: Array<OptionalKind<TypeAliasDeclarationStructure>> = [
  {
    name: "TElement",
    type: "Base",
  },
];

export const classes: Array<OptionalKind<ClassDeclarationStructure>> = [
  {
    docs: [
      {
        description: "Root of fhir class hierarchy",
      },
    ],
    ctors: [
      {
        docs: [
          {
            description: "Base class for all data elements",
            tags: [
              {
                tagName: "content",
                text: "{Object} value",
              },
            ],
          },
        ],
        parameters: [
          {
            name: "content",
            type: "{ [ key: string ]: TElement}",
          },
        ],
        statements: [
          `Object.assign(this._content, content);`,
          `this._content.resourceType=this.constructor.name;`,
        ],
      },
    ],
    kind: StructureKind.Class,
    isAbstract: true,
    name: "Base",
    properties: [
      {
        name: "url",
        type: "string",
        isStatic: true,
        initializer: `'http://hl7.org/fhir/StructureDefinition/Base'`,
      },
      {
        name: "_content",
        type: "{ [key: string]: TElement }",
        hasQuestionToken: false,
        initializer: "{}",
        scope: Scope.Protected,
      },
    ],
  },
  // {
  //   docs: [
  //     {
  //       description: "Base class for all data elements",
  //     },
  //   ],
  //   extends: "Base",
  //   kind: StructureKind.Class,
  //   isAbstract: true,
  //   name: "Element",
  //   properties: [
  //     {
  //       name: "url",
  //       type: "string",
  //       isStatic: true,
  //       initializer: `'http://hl7.org/fhir/StructureDefinition/Element'`,
  //     },
  //   ],
  // },
  // {
  //   kind: StructureKind.Class,
  //   isAbstract: true,
  //   name: "DataType",
  //   extends: "Element",
  //   properties: [
  //     {
  //       name: "url",
  //       type: "string",
  //       isStatic: true,
  //       initializer: `'http://hl7.org/fhir/StructureDefinition/DataType'`,
  //     },
  //   ],
  // },
  // {
  //   kind: StructureKind.Class,
  //   extends: "Base",
  //   isAbstract: true,
  //   name: "Resource",
  //   properties: [
  //     {
  //       name: "url",
  //       type: "string",
  //       isStatic: true,
  //       initializer: `'http://hl7.org/fhir/StructureDefinition/Resource'`,
  //     },
  //   ],
  // },
];
