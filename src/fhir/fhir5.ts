namespace fhir5 {
  class Base {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Base";
  }

  class Element extends Base {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Element";

    constructor(extension?: Extension, id?: Id) {
      super();
    }

    set value(value: string) {
      throw new Error(`Not Implemented`);
    }

    get value(): string {
      throw new Error(`Not Implemented`);
    }
  }

  class BackboneElement extends Element {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/BackboneElement";
  }

  class BackboneType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/BackboneType";
  }

  class DataType extends Element {
    static url: string = "http://hl7.org/fhir/StructureDefinition/DataType";
  }

  class PrimitiveType extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/PrimitiveType";
  }

  class Resource {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Resource";
  }

  class CanonicalResource {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CanonicalResource";
  }

  class DomainResource {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DomainResource";
  }

  class MetadataResource {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MetadataResource";
  }

  class Base64Binary extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/base64Binary";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Boolean extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/boolean";

    constructor(valueBoolean: boolean, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueBoolean = valueBoolean;
    }

    private valueBoolean: boolean;

    set value(valueBoolean: boolean) {
      this.valueBoolean = valueBoolean;
    }

    get value(): boolean {
      return this.valueBoolean;
    }
  }

  class Canonical extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/canonical";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Code extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/code";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Date extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/date";

    constructor(valueDateTime: DateTime, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueDateTime = valueDateTime;
    }

    private valueDateTime: DateTime;

    set value(valueDateTime: DateTime) {
      this.valueDateTime = valueDateTime;
    }

    get value(): DateTime {
      return this.valueDateTime;
    }
  }

  class DateTime extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/dateTime";

    constructor(valueDateTime: DateTime, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueDateTime = valueDateTime;
    }

    private valueDateTime: DateTime;

    set value(valueDateTime: DateTime) {
      this.valueDateTime = valueDateTime;
    }

    get value(): DateTime {
      return this.valueDateTime;
    }
  }

  class Decimal extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/decimal";

    constructor(valueNumber: number, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueNumber = valueNumber;
    }

    private valueNumber: number;

    set value(valueNumber: number) {
      this.valueNumber = valueNumber;
    }

    get value(): number {
      return this.valueNumber;
    }
  }

  class Id extends Element {
    static canonicalUrl: string = "http://hl7.org/fhir/StructureDefinition/id";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Instant extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/instant";

    constructor(valueDateTime: DateTime, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueDateTime = valueDateTime;
    }

    private valueDateTime: DateTime;

    set value(valueDateTime: DateTime) {
      this.valueDateTime = valueDateTime;
    }

    get value(): DateTime {
      return this.valueDateTime;
    }
  }

  class Integer extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/integer";

    constructor(valueNumber: number, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueNumber = valueNumber;
    }

    private valueNumber: number;

    set value(valueNumber: number) {
      this.valueNumber = valueNumber;
    }

    get value(): number {
      return this.valueNumber;
    }
  }

  class Integer64 extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/integer64";

    constructor(valueNumber: number, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueNumber = valueNumber;
    }

    private valueNumber: number;

    set value(valueNumber: number) {
      this.valueNumber = valueNumber;
    }

    get value(): number {
      return this.valueNumber;
    }
  }

  class Markdown extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/markdown";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Oid extends Element {
    static canonicalUrl: string = "http://hl7.org/fhir/StructureDefinition/oid";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class PositiveInt extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/positiveInt";

    constructor(valueNumber: number, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueNumber = valueNumber;
    }

    private valueNumber: number;

    set value(valueNumber: number) {
      this.valueNumber = valueNumber;
    }

    get value(): number {
      return this.valueNumber;
    }
  }

  class String extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/string";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Time extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/time";

    constructor(valueDateTime: DateTime, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueDateTime = valueDateTime;
    }

    private valueDateTime: DateTime;

    set value(valueDateTime: DateTime) {
      this.valueDateTime = valueDateTime;
    }

    get value(): DateTime {
      return this.valueDateTime;
    }
  }

  class UnsignedInt extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/unsignedInt";

    constructor(valueNumber: number, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueNumber = valueNumber;
    }

    private valueNumber: number;

    set value(valueNumber: number) {
      this.valueNumber = valueNumber;
    }

    get value(): number {
      return this.valueNumber;
    }
  }

  class Uri extends Element {
    static canonicalUrl: string = "http://hl7.org/fhir/StructureDefinition/uri";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Url extends Element {
    static canonicalUrl: string = "http://hl7.org/fhir/StructureDefinition/url";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Uuid extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/uuid";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Xhtml extends Element {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/xhtml";

    constructor(valueString: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this.valueString = valueString;
    }

    private valueString: string;

    set value(valueString: string) {
      this.valueString = valueString;
    }

    get value(): string {
      return this.valueString;
    }
  }

  class Address extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Address";
  }

  class Age {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Age";
  }

  class Annotation extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Annotation";
  }

  class Attachment extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Attachment";
  }

  class Availability extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Availability";
  }

  class CodeableConcept extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/CodeableConcept";
  }

  class CodeableReference extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/CodeableReference";
  }

  class Coding extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Coding";
  }

  class ContactDetail extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/ContactDetail";
  }

  class ContactPoint extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/ContactPoint";
  }

  class Contributor extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Contributor";
  }

  class Count {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Count";
  }

  class DataRequirement extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/DataRequirement";
  }

  class Distance {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Distance";
  }

  class Dosage extends BackboneType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Dosage";
  }

  class Duration {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Duration";
  }

  class ElementDefinition extends BackboneType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/ElementDefinition";
  }

  class Expression extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Expression";
  }

  class ExtendedContactDetail extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/ExtendedContactDetail";
  }

  class Extension extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Extension";

    constructor(value: string, extension?: Extension, id?: Id) {
      super(extension, id);
      this._value = value;
    }

    private _value: string;

    set value(value: string) {
      this._value = value;
    }

    get value(): string {
      return this._value;
    }
  }

  class HumanName extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/HumanName";
  }

  class Identifier extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Identifier";
  }

  class MarketingStatus extends BackboneType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/MarketingStatus";
  }

  class Metum extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Meta";
  }

  class MonetaryComponent extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/MonetaryComponent";
  }

  class Money extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Money";
  }

  class Narrative extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Narrative";
  }

  class ParameterDefinition extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/ParameterDefinition";
  }

  class Period extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Period";
  }

  class ProductShelfLife extends BackboneType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/ProductShelfLife";
  }

  class Quantity extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Quantity";
  }

  class Range extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Range";
  }

  class Ratio extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Ratio";
  }

  class RatioRange extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/RatioRange";
  }

  class Reference extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Reference";
  }

  class RelatedArtifact extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/RelatedArtifact";
  }

  class SampledDatum extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/SampledData";
  }

  class Signature extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Signature";
  }

  class Timing extends BackboneType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/Timing";
  }

  class TriggerDefinition extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/TriggerDefinition";
  }

  class UsageContext extends DataType {
    static url: string = "http://hl7.org/fhir/StructureDefinition/UsageContext";
  }

  class VirtualServiceDetail extends DataType {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/VirtualServiceDetail";
  }

  class MoneyQuantity extends Quantity {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/MoneyQuantity";
  }

  class SimpleQuantity extends Quantity {
    static url: string =
      "http://hl7.org/fhir/StructureDefinition/SimpleQuantity";
  }

  class Account {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Account";
  }

  class ActivityDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ActivityDefinition";
  }

  class ActorDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ActorDefinition";
  }

  class AdministrableProductDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition";
  }

  class AdverseEvent {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/AdverseEvent";
  }

  class AllergyIntolerance {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance";
  }

  class Appointment {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Appointment";
  }

  class AppointmentResponse {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/AppointmentResponse";
  }

  class ArtifactAssessment {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ArtifactAssessment";
  }

  class AuditEvent {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/AuditEvent";
  }

  class Basic {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Basic";
  }

  class Binary {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Binary";
  }

  class BiologicallyDerivedProduct {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct";
  }

  class BiologicallyDerivedProductDispense {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProductDispense";
  }

  class BodyStructure {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/BodyStructure";
  }

  class Bundle {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Bundle";
  }

  class CapabilityStatement {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CapabilityStatement";
  }

  class CarePlan {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CarePlan";
  }

  class CareTeam {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CareTeam";
  }

  class ChargeItem {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ChargeItem";
  }

  class ChargeItemDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition";
  }

  class Citation {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Citation";
  }

  class Claim {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Claim";
  }

  class ClaimResponse {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ClaimResponse";
  }

  class ClinicalImpression {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ClinicalImpression";
  }

  class ClinicalUseDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition";
  }

  class CodeSystem {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CodeSystem";
  }

  class Communication {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Communication";
  }

  class CommunicationRequest {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CommunicationRequest";
  }

  class CompartmentDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CompartmentDefinition";
  }

  class Composition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Composition";
  }

  class ConceptMap {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ConceptMap";
  }

  class Condition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Condition";
  }

  class ConditionDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ConditionDefinition";
  }

  class Consent {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Consent";
  }

  class Contract {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Contract";
  }

  class Coverage {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Coverage";
  }

  class CoverageEligibilityRequest {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest";
  }

  class CoverageEligibilityResponse {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse";
  }

  class DetectedIssue {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DetectedIssue";
  }

  class Device {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Device";
  }

  class DeviceAssociation {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DeviceAssociation";
  }

  class DeviceDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DeviceDefinition";
  }

  class DeviceDispense {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DeviceDispense";
  }

  class DeviceMetric {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DeviceMetric";
  }

  class DeviceRequest {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DeviceRequest";
  }

  class DeviceUsage {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DeviceUsage";
  }

  class DiagnosticReport {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DiagnosticReport";
  }

  class DocumentReference {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/DocumentReference";
  }

  class Encounter {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Encounter";
  }

  class EncounterHistory {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/EncounterHistory";
  }

  class Endpoint {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Endpoint";
  }

  class EnrollmentRequest {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/EnrollmentRequest";
  }

  class EnrollmentResponse {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/EnrollmentResponse";
  }

  class EpisodeOfCare {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare";
  }

  class EventDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/EventDefinition";
  }

  class Evidence {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Evidence";
  }

  class EvidenceReport {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/EvidenceReport";
  }

  class EvidenceVariable {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/EvidenceVariable";
  }

  class ExampleScenario {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ExampleScenario";
  }

  class ExplanationOfBenefit {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit";
  }

  class FamilyMemberHistory {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory";
  }

  class Flag {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Flag";
  }

  class FormularyItem {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/FormularyItem";
  }

  class GenomicStudy {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/GenomicStudy";
  }

  class Goal {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Goal";
  }

  class GraphDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/GraphDefinition";
  }

  class Group {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Group";
  }

  class GuidanceResponse {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/GuidanceResponse";
  }

  class HealthcareService {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/HealthcareService";
  }

  class ImagingSelection {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ImagingSelection";
  }

  class ImagingStudy {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ImagingStudy";
  }

  class Immunization {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Immunization";
  }

  class ImmunizationEvaluation {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation";
  }

  class ImmunizationRecommendation {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation";
  }

  class ImplementationGuide {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ImplementationGuide";
  }

  class Ingredient {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Ingredient";
  }

  class InsurancePlan {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/InsurancePlan";
  }

  class InventoryItem {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/InventoryItem";
  }

  class InventoryReport {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/InventoryReport";
  }

  class Invoice {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Invoice";
  }

  class Library {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Library";
  }

  class Linkage {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Linkage";
  }

  class List {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/List";
  }

  class Location {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Location";
  }

  class ManufacturedItemDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition";
  }

  class Measure {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Measure";
  }

  class MeasureReport {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MeasureReport";
  }

  class Medication {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Medication";
  }

  class MedicationAdministration {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MedicationAdministration";
  }

  class MedicationDispense {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MedicationDispense";
  }

  class MedicationKnowledge {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MedicationKnowledge";
  }

  class MedicationRequest {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MedicationRequest";
  }

  class MedicationStatement {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MedicationStatement";
  }

  class MedicinalProductDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition";
  }

  class MessageDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MessageDefinition";
  }

  class MessageHeader {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MessageHeader";
  }

  class MolecularSequence {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/MolecularSequence";
  }

  class NamingSystem {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/NamingSystem";
  }

  class NutritionIntake {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/NutritionIntake";
  }

  class NutritionOrder {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/NutritionOrder";
  }

  class NutritionProduct {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/NutritionProduct";
  }

  class Observation {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Observation";
  }

  class ObservationDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ObservationDefinition";
  }

  class OperationDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/OperationDefinition";
  }

  class OperationOutcome {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/OperationOutcome";
  }

  class Organization {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Organization";
  }

  class OrganizationAffiliation {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation";
  }

  class PackagedProductDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition";
  }

  class Parameter {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Parameters";
  }

  class Patient {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Patient";
  }

  class PaymentNotice {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/PaymentNotice";
  }

  class PaymentReconciliation {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/PaymentReconciliation";
  }

  class Permission {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Permission";
  }

  class Person {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Person";
  }

  class PlanDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/PlanDefinition";
  }

  class Practitioner {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Practitioner";
  }

  class PractitionerRole {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/PractitionerRole";
  }

  class Procedure {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Procedure";
  }

  class Provenance {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Provenance";
  }

  class Questionnaire {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Questionnaire";
  }

  class QuestionnaireResponse {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse";
  }

  class RegulatedAuthorization {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/RegulatedAuthorization";
  }

  class RelatedPerson {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/RelatedPerson";
  }

  class RequestOrchestration {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/RequestOrchestration";
  }

  class Requirement {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Requirements";
  }

  class ResearchStudy {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ResearchStudy";
  }

  class ResearchSubject {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ResearchSubject";
  }

  class RiskAssessment {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/RiskAssessment";
  }

  class Schedule {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Schedule";
  }

  class SearchParameter {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SearchParameter";
  }

  class ServiceRequest {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ServiceRequest";
  }

  class Slot {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Slot";
  }

  class Speciman {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Specimen";
  }

  class SpecimenDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SpecimenDefinition";
  }

  class StructureDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/StructureDefinition";
  }

  class StructureMap {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/StructureMap";
  }

  class Subscription {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Subscription";
  }

  class SubscriptionStatus {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SubscriptionStatus";
  }

  class SubscriptionTopic {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SubscriptionTopic";
  }

  class Substance {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Substance";
  }

  class SubstanceDefinition {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition";
  }

  class SubstanceNucleicAcid {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid";
  }

  class SubstancePolymer {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SubstancePolymer";
  }

  class SubstanceProtein {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SubstanceProtein";
  }

  class SubstanceReferenceInformation {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation";
  }

  class SubstanceSourceMaterial {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial";
  }

  class SupplyDelivery {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SupplyDelivery";
  }

  class SupplyRequest {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/SupplyRequest";
  }

  class Task {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Task";
  }

  class TerminologyCapability {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities";
  }

  class TestPlan {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/TestPlan";
  }

  class TestReport {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/TestReport";
  }

  class TestScript {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/TestScript";
  }

  class Transport {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/Transport";
  }

  class ValueSet {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/ValueSet";
  }

  class VerificationResult {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/VerificationResult";
  }

  class VisionPrescription {
    static canonicalUrl: string =
      "http://hl7.org/fhir/StructureDefinition/VisionPrescription";
  }
}
