// Autogenerated by src/generate.  Do not edit!
namespace FhirDstu2 {
  export type TElement =
    | string
    | number
    | boolean
    | Address
    | Address[]
    | Age
    | Age[]
    | Annotation
    | Annotation[]
    | Attachment
    | Attachment[]
    | BackboneElement
    | BackboneElement[]
    | Base64Binary
    | Base64Binary[]
    | Boolean
    | Boolean[]
    | Code
    | Code[]
    | CodeableConcept
    | CodeableConcept[]
    | Coding
    | Coding[]
    | ContactPoint
    | ContactPoint[]
    | Count
    | Count[]
    | Date
    | Date[]
    | DateTime
    | DateTime[]
    | Decimal
    | Decimal[]
    | Distance
    | Distance[]
    | Duration
    | Duration[]
    | Element
    | Element[]
    | ElementDefinition
    | ElementDefinition[]
    | Extension
    | Extension[]
    | HumanName
    | HumanName[]
    | Id
    | Id[]
    | Identifier
    | Identifier[]
    | Instant
    | Instant[]
    | Integer
    | Integer[]
    | Markdown
    | Markdown[]
    | Meta
    | Meta[]
    | Money
    | Money[]
    | Narrative
    | Narrative[]
    | Oid
    | Oid[]
    | Period
    | Period[]
    | PositiveInt
    | PositiveInt[]
    | Quantity
    | Quantity[]
    | Range
    | Range[]
    | Ratio
    | Ratio[]
    | Reference
    | Reference[]
    | SampledData
    | SampledData[]
    | Signature
    | Signature[]
    | SimpleQuantity
    | SimpleQuantity[]
    | String
    | String[]
    | Time
    | Time[]
    | Timing
    | Timing[]
    | UnsignedInt
    | UnsignedInt[]
    | Uri
    | Uri[]
    | Uuid
    | Uuid[];

  /** Root of fhir class hierarchy */
  abstract class Base {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Base";
    protected _content: { [key: string]: TElement } = {};

    /**
     * Base class for all data elements
     *
     * @_content {Object} value
     */
    constructor(content: { [key: string]: TElement }) {
      Object.assign(this._content, content);
      this._content.resourceType = this.constructor.name;
    }
  }
}