// Autogenerated by src/generate.  Do not edit!
namespace FhirR4 {
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
    | Canonical
    | Canonical[]
    | Code
    | Code[]
    | CodeableConcept
    | CodeableConcept[]
    | Coding
    | Coding[]
    | ContactDetail
    | ContactDetail[]
    | ContactPoint
    | ContactPoint[]
    | Contributor
    | Contributor[]
    | Count
    | Count[]
    | DataRequirement
    | DataRequirement[]
    | Date
    | Date[]
    | DateTime
    | DateTime[]
    | Decimal
    | Decimal[]
    | Distance
    | Distance[]
    | Dosage
    | Dosage[]
    | Duration
    | Duration[]
    | Element
    | Element[]
    | ElementDefinition
    | ElementDefinition[]
    | Expression
    | Expression[]
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
    | MarketingStatus
    | MarketingStatus[]
    | Meta
    | Meta[]
    | Money
    | Money[]
    | MoneyQuantity
    | MoneyQuantity[]
    | Narrative
    | Narrative[]
    | Oid
    | Oid[]
    | ParameterDefinition
    | ParameterDefinition[]
    | Period
    | Period[]
    | Population
    | Population[]
    | PositiveInt
    | PositiveInt[]
    | ProdCharacteristic
    | ProdCharacteristic[]
    | ProductShelfLife
    | ProductShelfLife[]
    | Quantity
    | Quantity[]
    | Range
    | Range[]
    | Ratio
    | Ratio[]
    | Reference
    | Reference[]
    | RelatedArtifact
    | RelatedArtifact[]
    | SampledData
    | SampledData[]
    | Signature
    | Signature[]
    | SimpleQuantity
    | SimpleQuantity[]
    | String
    | String[]
    | SubstanceAmount
    | SubstanceAmount[]
    | Time
    | Time[]
    | Timing
    | Timing[]
    | TriggerDefinition
    | TriggerDefinition[]
    | UnsignedInt
    | UnsignedInt[]
    | Uri
    | Uri[]
    | Url
    | Url[]
    | UsageContext
    | UsageContext[]
    | Uuid
    | Uuid[]
    | Xhtml
    | Xhtml[];

  export class Base {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Element/Base";
  }

  /** Base class for all data elements */
  abstract class Element extends Base {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Element";
  }

  export class DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/Element/DataType";
  }

  abstract class Resource extends Base {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Resource";
  }
}
