declare namespace FhirUndefined {
    /** We include the Basic resource first, by default because it makes the code easier. */
    type Resource = Basic | PlannetEndpoint | PlannetInsurancePlan | PlannetPractitionerRole | Basic | PlannetOrganization | PlannetLocation | PlannetPractitioner | PlannetOrganizationAffiliation | PlannetHealthcareService | PlannetNetwork;
    type Element = number | string | boolean | BackboneElement | Base64Binary | Id | Boolean | Instant | Canonical | Uri | Code | Date | String | Coding | DateTime | Decimal | Xhtml | Narrative | Integer | Markdown | Oid | CodeableConcept | PositiveInt | Period | Time | Reference | Identifier | UnsignedInt | ContactPoint | Url | Uuid | Address | Age | HumanName | Annotation | Quantity | Attachment | Money | Count | Distance | Duration | Range | Ratio | SampledData | Signature | Timing | ContactDetail | Contributor | DataRequirement | Expression | ParameterDefinition | RelatedArtifact | TriggerDefinition | UsageContext | Dosage | Extension | Meta;
    type BackboneElement = {
        [key: string]: Element;
    };
    interface IBase64Binary {
        value?: string;
    }
    /** Base StructureDefinition for base64Binary Type: A stream of bytes */
    export class Base64Binary {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IBase64Binary;
    }
    interface IId {
        value?: string;
    }
    /** Base StructureDefinition for id type: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive. */
    export class Id {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IId;
    }
    interface IBoolean {
        value?: boolean;
    }
    /** Base StructureDefinition for boolean Type: Value of "true" or "false" */
    export class Boolean {
        static url: string;
        set value(value: boolean);
        get value(): boolean;
        validate(value: boolean): void;
        protected _content: IBoolean;
    }
    interface IInstant {
        value?: DateTime;
    }
    /** Base StructureDefinition for instant Type: An instant in time - known at least to the second */
    export class Instant {
        static url: string;
        set value(value: DateTime);
        get value(): DateTime;
        validate(value: DateTime): void;
        protected _content: IInstant;
    }
    interface ICanonical {
        value?: string;
    }
    /** Base StructureDefinition for canonical type: A URI that is a reference to a canonical URL on a FHIR resource */
    export class Canonical {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: ICanonical;
    }
    interface IUri {
        value?: string;
    }
    /** Base StructureDefinition for uri Type: String of characters used to identify a name or a resource */
    export class Uri {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IUri;
    }
    interface ICode {
        value?: string;
    }
    /** Base StructureDefinition for code type: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents */
    export class Code {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: ICode;
    }
    interface IDate {
        value?: DateTime;
    }
    /** Base StructureDefinition for date Type: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates. */
    export class Date {
        static url: string;
        set value(value: DateTime);
        get value(): DateTime;
        validate(value: DateTime): void;
        protected _content: IDate;
    }
    interface IString {
        value?: string;
    }
    /** Base StructureDefinition for string Type: A sequence of Unicode characters */
    export class String {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IString;
    }
    interface ICoding {
        code?: Code;
        display?: String;
        extension?: Array<Extension>;
        id?: string;
        system?: Uri;
        userSelected?: Boolean;
        version?: String;
    }
    /** Base StructureDefinition for Coding Type: A reference to a code defined by a terminology system. */
    export class Coding {
        static url: string;
        /** A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination). */
        set code(value: Code);
        get code(): Code;
        /** A representation of the meaning of the code in the system, following the rules of the system. */
        set display(value: String);
        get display(): String;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The identification of the code system that defines the meaning of the symbol in the code. */
        set system(value: Uri);
        get system(): Uri;
        /** Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays). */
        set userSelected(value: Boolean);
        get userSelected(): Boolean;
        /** The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged. */
        set version(value: String);
        get version(): String;
        protected _content: ICoding;
    }
    interface IDateTime {
        value?: DateTime;
    }
    /** Base StructureDefinition for dateTime Type: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates. */
    export class DateTime {
        static url: string;
        set value(value: DateTime);
        get value(): DateTime;
        validate(value: DateTime): void;
        protected _content: IDateTime;
    }
    interface IDecimal {
        value?: number;
    }
    /** Base StructureDefinition for decimal Type: A rational number with implicit precision */
    export class Decimal {
        static url: string;
        set value(value: number);
        get value(): number;
        validate(value: number): void;
        protected _content: IDecimal;
    }
    interface IXhtml {
        value?: string;
    }
    /** Base StructureDefinition for xhtml Type */
    export class Xhtml {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IXhtml;
    }
    interface INarrative {
        div?: Xhtml;
        extension?: Array<Extension>;
        id?: string;
        status?: Code;
    }
    /** Base StructureDefinition for Narrative Type: A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
    export class Narrative {
        static url: string;
        /** The actual narrative content, a stripped down version of XHTML. */
        set div(value: Xhtml);
        get div(): Xhtml;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data. */
        set status(value: Code);
        get status(): Code;
        protected _content: INarrative;
    }
    interface IInteger {
        value?: number;
    }
    /** Base StructureDefinition for integer Type: A whole number */
    export class Integer {
        static url: string;
        set value(value: number);
        get value(): number;
        validate(value: number): void;
        protected _content: IInteger;
    }
    interface IMarkdown {
        value?: string;
    }
    /** Base StructureDefinition for markdown type: A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine */
    export class Markdown {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IMarkdown;
    }
    interface IOid {
        value?: string;
    }
    /** Base StructureDefinition for oid type: An OID represented as a URI */
    export class Oid {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IOid;
    }
    interface ICodeableConcept {
        coding?: Array<Coding>;
        extension?: Array<Extension>;
        id?: string;
        text?: String;
    }
    /** Base StructureDefinition for CodeableConcept Type: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
    export class CodeableConcept {
        static url: string;
        /** A reference to a code defined by a terminology system. */
        set coding(value: Array<Coding>);
        get coding(): Array<Coding>;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user. */
        set text(value: String);
        get text(): String;
        protected _content: ICodeableConcept;
    }
    interface IPositiveInt {
        value?: string;
    }
    /** Base StructureDefinition for positiveInt type: An integer with a value that is positive (e.g. >0) */
    export class PositiveInt {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IPositiveInt;
    }
    interface IPeriod {
        end?: DateTime;
        extension?: Array<Extension>;
        id?: string;
        start?: DateTime;
    }
    /** Base StructureDefinition for Period Type: A time period defined by a start and end date and optionally time. */
    export class Period {
        static url: string;
        /** The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time. */
        set end(value: DateTime);
        get end(): DateTime;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The start of the period. The boundary is inclusive. */
        set start(value: DateTime);
        get start(): DateTime;
        protected _content: IPeriod;
    }
    interface ITime {
        value?: DateTime;
    }
    /** Base StructureDefinition for time Type: A time during the day, with no date specified */
    export class Time {
        static url: string;
        set value(value: DateTime);
        get value(): DateTime;
        validate(value: DateTime): void;
        protected _content: ITime;
    }
    interface IReference {
        display?: String;
        extension?: Array<Extension>;
        id?: string;
        identifier?: Identifier;
        reference?: String;
        type?: Uri;
    }
    /** Base StructureDefinition for Reference Type: A reference from one resource to another. */
    export class Reference {
        static url: string;
        /** Plain text narrative that identifies the resource in addition to the resource reference. */
        set display(value: String);
        get display(): String;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference. */
        set identifier(value: Identifier);
        get identifier(): Identifier;
        /** A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources. */
        set reference(value: String);
        get reference(): String;
        /**
         * The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent.
         *
         * The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).
         */
        set type(value: Uri);
        get type(): Uri;
        protected _content: IReference;
    }
    interface IIdentifier {
        assigner?: Reference;
        extension?: Array<Extension>;
        id?: string;
        period?: Period;
        system?: Uri;
        type?: CodeableConcept;
        use?: Code;
        value?: String;
    }
    /** Base StructureDefinition for Identifier Type: An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers. */
    export class Identifier {
        static url: string;
        /** Organization that issued/manages the identifier. */
        set assigner(value: Reference);
        get assigner(): Reference;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** Time period during which identifier is/was valid for use. */
        set period(value: Period);
        get period(): Period;
        /** Establishes the namespace for the value - that is, a URL that describes a set values that are unique. */
        set system(value: Uri);
        get system(): Uri;
        /** A coded type for the identifier that can be used to determine which identifier to use for a specific purpose. */
        set type(value: CodeableConcept);
        get type(): CodeableConcept;
        /** The purpose of this identifier. */
        set use(value: Code);
        get use(): Code;
        /** The portion of the identifier typically relevant to the user and which is unique within the context of the system. */
        set value(value: String);
        get value(): String;
        protected _content: IIdentifier;
    }
    interface IUnsignedInt {
        value?: string;
    }
    /** Base StructureDefinition for unsignedInt type: An integer with a value that is not negative (e.g. >= 0) */
    export class UnsignedInt {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IUnsignedInt;
    }
    interface IContactPoint {
        extension?: Array<Extension>;
        id?: string;
        period?: Period;
        rank?: PositiveInt;
        system?: Code;
        use?: Code;
        value?: String;
    }
    /** Base StructureDefinition for ContactPoint Type: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc. */
    export class ContactPoint {
        static url: string;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** Time period when the contact point was/is in use. */
        set period(value: Period);
        get period(): Period;
        /** Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values. */
        set rank(value: PositiveInt);
        get rank(): PositiveInt;
        /** Telecommunications form for contact point - what communications system is required to make use of the contact. */
        set system(value: Code);
        get system(): Code;
        /** Identifies the purpose for the contact point. */
        set use(value: Code);
        get use(): Code;
        /** The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address). */
        set value(value: String);
        get value(): String;
        protected _content: IContactPoint;
    }
    interface IUrl {
        value?: string;
    }
    /** Base StructureDefinition for url type: A URI that is a literal reference */
    export class Url {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IUrl;
    }
    interface IPlannetEndpoint {
        address?: Url;
        connectionType?: Coding;
        contact?: Array<ContactPoint>;
        contained?: Array<Resource>;
        extension?: Array<Extension>;
        header?: Array<String>;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        managingOrganization?: Reference;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        name?: String;
        payloadMimeType?: Array<Code>;
        payloadType?: CodeableConcept;
        period?: Period;
        status?: Code;
        text?: Narrative;
    }
    /** The technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging. */
    export class PlannetEndpoint {
        static url: string;
        /** The uri that describes the actual end-point to connect to. */
        set address(value: Url);
        get address(): Url;
        /** A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook). */
        set connectionType(value: Coding);
        get connectionType(): Coding;
        /** Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting. */
        set contact(value: Array<ContactPoint>);
        get contact(): Array<ContactPoint>;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** An Extension */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Additional headers / information to send as part of the notification. */
        set header(value: Array<String>);
        get header(): Array<String>;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** Identifier for the organization that is used to identify the endpoint across multiple disparate systems. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The organization that manages this endpoint (even if technically another organization is hosting this in the cloud, it is the organization associated with the data). */
        set managingOrganization(value: Reference);
        get managingOrganization(): Reference;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** A friendly name that this endpoint can be referred to with. */
        set name(value: String);
        get name(): String;
        /** The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType). */
        set payloadMimeType(value: Array<Code>);
        get payloadMimeType(): Array<Code>;
        /** The payload type describes the acceptable content that can be communicated on the endpoint. */
        set payloadType(value: CodeableConcept);
        get payloadType(): CodeableConcept;
        /** The interval during which the endpoint is expected to be operational. */
        set period(value: Period);
        get period(): Period;
        /** active | suspended | error | off | test. */
        set status(value: Code);
        get status(): Code;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        protected _content: IPlannetEndpoint;
    }
    interface IUuid {
        value?: string;
    }
    /** Base StructureDefinition for uuid type: A UUID, represented as a URI */
    export class Uuid {
        static url: string;
        set value(value: string);
        get value(): string;
        validate(value: string): void;
        protected _content: IUuid;
    }
    interface IAddress {
        city?: String;
        country?: String;
        district?: String;
        extension?: Array<Extension>;
        id?: string;
        line?: Array<String>;
        period?: Period;
        postalCode?: String;
        state?: String;
        text?: String;
        type?: Code;
        use?: Code;
    }
    /** Base StructureDefinition for Address Type: An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world. */
    export class Address {
        static url: string;
        /** The name of the city, town, suburb, village or other community or delivery center. */
        set city(value: String);
        get city(): String;
        /** Country - a nation as commonly understood or generally accepted. */
        set country(value: String);
        get country(): String;
        /** The name of the administrative area (county). */
        set district(value: String);
        get district(): String;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information. */
        set line(value: Array<String>);
        get line(): Array<String>;
        /** Time period when address was/is in use. */
        set period(value: Period);
        get period(): Period;
        /** A postal code designating a region defined by the postal service. */
        set postalCode(value: String);
        get postalCode(): String;
        /** Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes). */
        set state(value: String);
        get state(): String;
        /** Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts. */
        set text(value: String);
        get text(): String;
        /** Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both. */
        set type(value: Code);
        get type(): Code;
        /** The purpose of this address. */
        set use(value: Code);
        get use(): Code;
        protected _content: IAddress;
    }
    interface IAge {
        code?: Code;
        comparator?: Code;
        extension?: Array<Extension>;
        id?: string;
        system?: Uri;
        unit?: String;
        value?: Decimal;
    }
    /** Base StructureDefinition for Age Type: A duration of time during which an organism (or a process) has existed. */
    export class Age {
        static url: string;
        /** A computer processable form of the unit in some unit representation system. */
        set code(value: Code);
        get code(): Code;
        /** How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value. */
        set comparator(value: Code);
        get comparator(): Code;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The identification of the system that provides the coded form of the unit. */
        set system(value: Uri);
        get system(): Uri;
        /** A human-readable form of the unit. */
        set unit(value: String);
        get unit(): String;
        /** The value of the measured amount. The value includes an implicit precision in the presentation of the value. */
        set value(value: Decimal);
        get value(): Decimal;
        protected _content: IAge;
    }
    interface IHumanName {
        extension?: Array<Extension>;
        family?: String;
        given?: Array<String>;
        id?: string;
        period?: Period;
        prefix?: Array<String>;
        suffix?: Array<String>;
        text?: String;
        use?: Code;
    }
    /** Base StructureDefinition for HumanName Type: A human's name with the ability to identify parts and usage. */
    export class HumanName {
        static url: string;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father. */
        set family(value: String);
        get family(): String;
        /** Given name. */
        set given(value: Array<String>);
        get given(): Array<String>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** Indicates the period of time when this name was valid for the named person. */
        set period(value: Period);
        get period(): Period;
        /** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name. */
        set prefix(value: Array<String>);
        get prefix(): Array<String>;
        /** Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name. */
        set suffix(value: Array<String>);
        get suffix(): Array<String>;
        /** Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts. */
        set text(value: String);
        get text(): String;
        /** Identifies the purpose for this name. */
        set use(value: Code);
        get use(): Code;
        protected _content: IHumanName;
    }
    interface IAnnotation {
        author?: Reference;
        extension?: Array<Extension>;
        id?: string;
        text?: Markdown;
        time?: DateTime;
    }
    /** Base StructureDefinition for Annotation Type: A  text note which also  contains information about who made the statement and when. */
    export class Annotation {
        static url: string;
        /** The individual responsible for making the annotation. */
        set author(value: Reference);
        get author(): Reference;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The text of the annotation in markdown format. */
        set text(value: Markdown);
        get text(): Markdown;
        /** Indicates when this particular annotation was made. */
        set time(value: DateTime);
        get time(): DateTime;
        protected _content: IAnnotation;
    }
    interface IQuantity {
        code?: Code;
        comparator?: Code;
        extension?: Array<Extension>;
        id?: string;
        system?: Uri;
        unit?: String;
        value?: Decimal;
    }
    /** Base StructureDefinition for Quantity Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    export class Quantity {
        static url: string;
        /** A computer processable form of the unit in some unit representation system. */
        set code(value: Code);
        get code(): Code;
        /** How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value. */
        set comparator(value: Code);
        get comparator(): Code;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The identification of the system that provides the coded form of the unit. */
        set system(value: Uri);
        get system(): Uri;
        /** A human-readable form of the unit. */
        set unit(value: String);
        get unit(): String;
        /** The value of the measured amount. The value includes an implicit precision in the presentation of the value. */
        set value(value: Decimal);
        get value(): Decimal;
        protected _content: IQuantity;
    }
    interface IAttachment {
        contentType?: Code;
        creation?: DateTime;
        data?: Base64Binary;
        extension?: Array<Extension>;
        hash?: Base64Binary;
        id?: string;
        language?: Code;
        size?: UnsignedInt;
        title?: String;
        url?: Url;
    }
    /** Base StructureDefinition for Attachment Type: For referring to data content defined in other formats. */
    export class Attachment {
        static url: string;
        /** Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate. */
        set contentType(value: Code);
        get contentType(): Code;
        /** The date that the attachment was first created. */
        set creation(value: DateTime);
        get creation(): DateTime;
        /** The actual data of the attachment - a sequence of bytes, base64 encoded. */
        set data(value: Base64Binary);
        get data(): Base64Binary;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** The calculated hash of the data using SHA-1. Represented using base64. */
        set hash(value: Base64Binary);
        get hash(): Base64Binary;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The human language of the content. The value can be any valid value according to BCP 47. */
        set language(value: Code);
        get language(): Code;
        /** The number of bytes of data that make up this attachment (before base64 encoding, if that is done). */
        set size(value: UnsignedInt);
        get size(): UnsignedInt;
        /** A label or set of text to display in place of the data. */
        set title(value: String);
        get title(): String;
        /** A location where the data can be accessed. */
        set url(value: Url);
        get url(): Url;
        protected _content: IAttachment;
    }
    interface IMoney {
        currency?: Code;
        extension?: Array<Extension>;
        id?: string;
        value?: Decimal;
    }
    /** Base StructureDefinition for Money Type: An amount of economic utility in some recognized currency. */
    export class Money {
        static url: string;
        /** ISO 4217 Currency Code. */
        set currency(value: Code);
        get currency(): Code;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** Numerical value (with implicit precision). */
        set value(value: Decimal);
        get value(): Decimal;
        protected _content: IMoney;
    }
    interface IPlannetInsurancePlan {
        administeredBy?: Reference;
        alias?: Array<String>;
        contact?: Array<BackboneElement>;
        contained?: Array<Resource>;
        coverage?: Array<BackboneElement>;
        coverageArea?: Array<Reference>;
        endpoint?: Array<Reference>;
        extension?: Array<Extension>;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        name?: String;
        network?: Array<Reference>;
        ownedBy?: Reference;
        period?: Period;
        plan?: Array<BackboneElement>;
        status?: Code;
        text?: Narrative;
        type?: CodeableConcept;
    }
    /**
     * An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits).
     *
     * InsurancePlan describes a health insurance offering comprised of a list of covered benefits (i.e. the product), costs associated with those benefits (i.e. the plan), and additional information about the offering, such as who it is owned and administered by, a coverage area, contact information, etc.
     */
    export class PlannetInsurancePlan {
        static url: string;
        /** An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner. */
        set administeredBy(value: Reference);
        get administeredBy(): Reference;
        /** A list of alternate names that the product is known as, or was known as in the past. */
        set alias(value: Array<String>);
        get alias(): Array<String>;
        /** The contact for the health insurance product for a certain purpose. */
        set contact(value: Array<BackboneElement>);
        get contact(): Array<BackboneElement>;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** Details about the coverage offered by the insurance product. */
        set coverage(value: Array<BackboneElement>);
        get coverage(): Array<BackboneElement>;
        /** The geographic region in which a health insurance product's benefits apply. */
        set coverageArea(value: Array<Reference>);
        get coverageArea(): Array<Reference>;
        /** The technical endpoints providing access to services operated for the health insurance product. */
        set endpoint(value: Array<Reference>);
        get endpoint(): Array<Reference>;
        /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** Official name of the health insurance product as designated by the owner. */
        set name(value: String);
        get name(): String;
        /** Reference to the network included in the health insurance product. */
        set network(value: Array<Reference>);
        get network(): Array<Reference>;
        /** The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'. */
        set ownedBy(value: Reference);
        get ownedBy(): Reference;
        /** The period of time that the health insurance product is available. */
        set period(value: Period);
        get period(): Period;
        /** Details about an insurance plan. */
        set plan(value: Array<BackboneElement>);
        get plan(): Array<BackboneElement>;
        /** The current state of the health insurance product. */
        set status(value: Code);
        get status(): Code;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        /** The kind of health insurance product. */
        set type(value: CodeableConcept);
        get type(): CodeableConcept;
        protected _content: IPlannetInsurancePlan;
    }
    interface ICount {
        code?: Code;
        comparator?: Code;
        extension?: Array<Extension>;
        id?: string;
        system?: Uri;
        unit?: String;
        value?: Decimal;
    }
    /** Base StructureDefinition for Count Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
    export class Count {
        static url: string;
        /** A computer processable form of the unit in some unit representation system. */
        set code(value: Code);
        get code(): Code;
        /** How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value. */
        set comparator(value: Code);
        get comparator(): Code;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The identification of the system that provides the coded form of the unit. */
        set system(value: Uri);
        get system(): Uri;
        /** A human-readable form of the unit. */
        set unit(value: String);
        get unit(): String;
        /** The value of the measured amount. The value includes an implicit precision in the presentation of the value. */
        set value(value: Decimal);
        get value(): Decimal;
        protected _content: ICount;
    }
    interface IDistance {
        code?: Code;
        comparator?: Code;
        extension?: Array<Extension>;
        id?: string;
        system?: Uri;
        unit?: String;
        value?: Decimal;
    }
    /** Base StructureDefinition for Distance Type: A length - a value with a unit that is a physical distance. */
    export class Distance {
        static url: string;
        /** A computer processable form of the unit in some unit representation system. */
        set code(value: Code);
        get code(): Code;
        /** How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value. */
        set comparator(value: Code);
        get comparator(): Code;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The identification of the system that provides the coded form of the unit. */
        set system(value: Uri);
        get system(): Uri;
        /** A human-readable form of the unit. */
        set unit(value: String);
        get unit(): String;
        /** The value of the measured amount. The value includes an implicit precision in the presentation of the value. */
        set value(value: Decimal);
        get value(): Decimal;
        protected _content: IDistance;
    }
    interface IDuration {
        code?: Code;
        comparator?: Code;
        extension?: Array<Extension>;
        id?: string;
        system?: Uri;
        unit?: String;
        value?: Decimal;
    }
    /** Base StructureDefinition for Duration Type: A length of time. */
    export class Duration {
        static url: string;
        /** A computer processable form of the unit in some unit representation system. */
        set code(value: Code);
        get code(): Code;
        /** How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value. */
        set comparator(value: Code);
        get comparator(): Code;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The identification of the system that provides the coded form of the unit. */
        set system(value: Uri);
        get system(): Uri;
        /** A human-readable form of the unit. */
        set unit(value: String);
        get unit(): String;
        /** The value of the measured amount. The value includes an implicit precision in the presentation of the value. */
        set value(value: Decimal);
        get value(): Decimal;
        protected _content: IDuration;
    }
    interface IRange {
        extension?: Array<Extension>;
        high?: Quantity;
        id?: string;
        low?: Quantity;
    }
    /** Base StructureDefinition for Range Type: A set of ordered Quantities defined by a low and high limit. */
    export class Range {
        static url: string;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** The high limit. The boundary is inclusive. */
        set high(value: Quantity);
        get high(): Quantity;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The low limit. The boundary is inclusive. */
        set low(value: Quantity);
        get low(): Quantity;
        protected _content: IRange;
    }
    interface IRatio {
        denominator?: Quantity;
        extension?: Array<Extension>;
        id?: string;
        numerator?: Quantity;
    }
    /** Base StructureDefinition for Ratio Type: A relationship of two Quantity values - expressed as a numerator and a denominator. */
    export class Ratio {
        static url: string;
        /** The value of the denominator. */
        set denominator(value: Quantity);
        get denominator(): Quantity;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The value of the numerator. */
        set numerator(value: Quantity);
        get numerator(): Quantity;
        protected _content: IRatio;
    }
    interface ISampledData {
        data?: String;
        dimensions?: PositiveInt;
        extension?: Array<Extension>;
        factor?: Decimal;
        id?: string;
        lowerLimit?: Decimal;
        origin?: Quantity;
        period?: Decimal;
        upperLimit?: Decimal;
    }
    /** Base StructureDefinition for SampledData Type: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
    export class SampledData {
        static url: string;
        /** A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value. */
        set data(value: String);
        get data(): String;
        /** The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once. */
        set dimensions(value: PositiveInt);
        get dimensions(): PositiveInt;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** A correction factor that is applied to the sampled data points before they are added to the origin. */
        set factor(value: Decimal);
        get factor(): Decimal;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit). */
        set lowerLimit(value: Decimal);
        get lowerLimit(): Decimal;
        /** The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series. */
        set origin(value: Quantity);
        get origin(): Quantity;
        /** The length of time between sampling times, measured in milliseconds. */
        set period(value: Decimal);
        get period(): Decimal;
        /** The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit). */
        set upperLimit(value: Decimal);
        get upperLimit(): Decimal;
        protected _content: ISampledData;
    }
    interface ISignature {
        data?: Base64Binary;
        extension?: Array<Extension>;
        id?: string;
        onBehalfOf?: Reference;
        sigFormat?: Code;
        targetFormat?: Code;
        type?: Array<Coding>;
        when?: Instant;
        who?: Reference;
    }
    /** Base StructureDefinition for Signature Type: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities. */
    export class Signature {
        static url: string;
        /** The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty. */
        set data(value: Base64Binary);
        get data(): Base64Binary;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** A reference to an application-usable description of the identity that is represented by the signature. */
        set onBehalfOf(value: Reference);
        get onBehalfOf(): Reference;
        /** A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc. */
        set sigFormat(value: Code);
        get sigFormat(): Code;
        /** A mime type that indicates the technical format of the target resources signed by the signature. */
        set targetFormat(value: Code);
        get targetFormat(): Code;
        /** An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document. */
        set type(value: Array<Coding>);
        get type(): Array<Coding>;
        /** When the digital signature was signed. */
        set when(value: Instant);
        get when(): Instant;
        /** A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key). */
        set who(value: Reference);
        get who(): Reference;
        protected _content: ISignature;
    }
    interface ITiming {
        code?: CodeableConcept;
        event?: Array<DateTime>;
        extension?: Array<Extension>;
        id?: string;
        modifierExtension?: Array<Extension>;
        repeat?: Element;
    }
    /** Base StructureDefinition for Timing Type: Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
    export class Timing {
        static url: string;
        /** A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code). */
        set code(value: CodeableConcept);
        get code(): CodeableConcept;
        /** Identifies specific times when the event occurs. */
        set event(value: Array<DateTime>);
        get event(): Array<DateTime>;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /**
         * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** A set of rules that describe when the event is scheduled. */
        set repeat(value: Element);
        get repeat(): Element;
        protected _content: ITiming;
    }
    interface IContactDetail {
        extension?: Array<Extension>;
        id?: string;
        name?: String;
        telecom?: Array<ContactPoint>;
    }
    /** Base StructureDefinition for ContactDetail Type: Specifies contact information for a person or organization. */
    export class ContactDetail {
        static url: string;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The name of an individual to contact. */
        set name(value: String);
        get name(): String;
        /** The contact details for the individual (if a name was provided) or the organization. */
        set telecom(value: Array<ContactPoint>);
        get telecom(): Array<ContactPoint>;
        protected _content: IContactDetail;
    }
    interface IContributor {
        contact?: Array<ContactDetail>;
        extension?: Array<Extension>;
        id?: string;
        name?: String;
        type?: Code;
    }
    /** Base StructureDefinition for Contributor Type: A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
    export class Contributor {
        static url: string;
        /** Contact details to assist a user in finding and communicating with the contributor. */
        set contact(value: Array<ContactDetail>);
        get contact(): Array<ContactDetail>;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The name of the individual or organization responsible for the contribution. */
        set name(value: String);
        get name(): String;
        /** The type of contributor. */
        set type(value: Code);
        get type(): Code;
        protected _content: IContributor;
    }
    interface IDataRequirement {
        codeFilter?: Array<Element>;
        dateFilter?: Array<Element>;
        extension?: Array<Extension>;
        id?: string;
        limit?: PositiveInt;
        mustSupport?: Array<String>;
        profile?: Array<Canonical>;
        sort?: Array<Element>;
        subject?: CodeableConcept;
        type?: Code;
    }
    /** Base StructureDefinition for DataRequirement Type: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
    export class DataRequirement {
        static url: string;
        /** Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed. */
        set codeFilter(value: Array<Element>);
        get codeFilter(): Array<Element>;
        /** Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed. */
        set dateFilter(value: Array<Element>);
        get dateFilter(): Array<Element>;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** Specifies a maximum number of results that are required (uses the _count search parameter). */
        set limit(value: PositiveInt);
        get limit(): PositiveInt;
        /**
         * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
         *
         * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
         */
        set mustSupport(value: Array<String>);
        get mustSupport(): Array<String>;
        /** The profile of the required data, specified as the uri of the profile definition. */
        set profile(value: Array<Canonical>);
        get profile(): Array<Canonical>;
        /** Specifies the order of the results to be returned. */
        set sort(value: Array<Element>);
        get sort(): Array<Element>;
        /** The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed. */
        set subject(value: CodeableConcept);
        get subject(): CodeableConcept;
        /** The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile. */
        set type(value: Code);
        get type(): Code;
        protected _content: IDataRequirement;
    }
    interface IExpression {
        description?: String;
        expression?: String;
        extension?: Array<Extension>;
        id?: string;
        language?: Code;
        name?: Id;
        reference?: Uri;
    }
    /** Base StructureDefinition for Expression Type: A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    export class Expression {
        static url: string;
        /** A brief, natural language description of the condition that effectively communicates the intended semantics. */
        set description(value: String);
        get description(): String;
        /** An expression in the specified language that returns a value. */
        set expression(value: String);
        get expression(): String;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The media type of the language for the expression. */
        set language(value: Code);
        get language(): Code;
        /** A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined. */
        set name(value: Id);
        get name(): Id;
        /** A URI that defines where the expression is found. */
        set reference(value: Uri);
        get reference(): Uri;
        protected _content: IExpression;
    }
    interface IParameterDefinition {
        documentation?: String;
        extension?: Array<Extension>;
        id?: string;
        max?: String;
        min?: Integer;
        name?: Code;
        profile?: Canonical;
        type?: Code;
        use?: Code;
    }
    /** Base StructureDefinition for ParameterDefinition Type: The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
    export class ParameterDefinition {
        static url: string;
        /** A brief discussion of what the parameter is for and how it is used by the module. */
        set documentation(value: String);
        get documentation(): String;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** The maximum number of times this element is permitted to appear in the request or response. */
        set max(value: String);
        get max(): String;
        /** The minimum number of times this parameter SHALL appear in the request or response. */
        set min(value: Integer);
        get min(): Integer;
        /** The name of the parameter used to allow access to the value of the parameter in evaluation contexts. */
        set name(value: Code);
        get name(): Code;
        /** If specified, this indicates a profile that the input data must conform to, or that the output data will conform to. */
        set profile(value: Canonical);
        get profile(): Canonical;
        /** The type of the parameter. */
        set type(value: Code);
        get type(): Code;
        /** Whether the parameter is input or output for the module. */
        set use(value: Code);
        get use(): Code;
        protected _content: IParameterDefinition;
    }
    interface IRelatedArtifact {
        citation?: Markdown;
        display?: String;
        document?: Attachment;
        extension?: Array<Extension>;
        id?: string;
        label?: String;
        resource?: Canonical;
        type?: Code;
        url?: Url;
    }
    /** Base StructureDefinition for RelatedArtifact Type: Related artifacts such as additional documentation, justification, or bibliographic references. */
    export class RelatedArtifact {
        static url: string;
        /** A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format. */
        set citation(value: Markdown);
        get citation(): Markdown;
        /** A brief description of the document or knowledge resource being referenced, suitable for display to a consumer. */
        set display(value: String);
        get display(): String;
        /** The document being referenced, represented as an attachment. This is exclusive with the resource element. */
        set document(value: Attachment);
        get document(): Attachment;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index. */
        set label(value: String);
        get label(): String;
        /** The related resource, such as a library, value set, profile, or other knowledge resource. */
        set resource(value: Canonical);
        get resource(): Canonical;
        /** The type of relationship to the related artifact. */
        set type(value: Code);
        get type(): Code;
        /** A url for the artifact that can be followed to access the actual content. */
        set url(value: Url);
        get url(): Url;
        protected _content: IRelatedArtifact;
    }
    interface ITriggerDefinition {
        condition?: Expression;
        data?: Array<DataRequirement>;
        extension?: Array<Extension>;
        id?: string;
        name?: String;
        timing?: Timing;
        type?: Code;
    }
    /** Base StructureDefinition for TriggerDefinition Type: A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
    export class TriggerDefinition {
        static url: string;
        /** A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires. */
        set condition(value: Expression);
        get condition(): Expression;
        /** The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true. */
        set data(value: Array<DataRequirement>);
        get data(): Array<DataRequirement>;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context. */
        set name(value: String);
        get name(): String;
        /** The timing of the event (if this is a periodic trigger). */
        set timing(value: Timing);
        get timing(): Timing;
        /** The type of triggering event. */
        set type(value: Code);
        get type(): Code;
        protected _content: ITriggerDefinition;
    }
    interface IUsageContext {
        code?: Coding;
        extension?: Array<Extension>;
        id?: string;
        value?: CodeableConcept;
    }
    /** Base StructureDefinition for UsageContext Type: Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care). */
    export class UsageContext {
        static url: string;
        /** A code that identifies the type of context being specified by this usage context. */
        set code(value: Coding);
        get code(): Coding;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** A value that defines the context specified in this context of use. The interpretation of the value is defined by the code. */
        set value(value: CodeableConcept);
        get value(): CodeableConcept;
        protected _content: IUsageContext;
    }
    interface IDosage {
        additionalInstruction?: Array<CodeableConcept>;
        asNeeded?: Boolean;
        doseAndRate?: Array<Element>;
        extension?: Array<Extension>;
        id?: string;
        maxDosePerAdministration?: Quantity;
        maxDosePerLifetime?: Quantity;
        maxDosePerPeriod?: Ratio;
        method?: CodeableConcept;
        modifierExtension?: Array<Extension>;
        patientInstruction?: String;
        route?: CodeableConcept;
        sequence?: Integer;
        site?: CodeableConcept;
        text?: String;
        timing?: Timing;
    }
    /** Base StructureDefinition for Dosage Type: Indicates how the medication is/was taken or should be taken by the patient. */
    export class Dosage {
        static url: string;
        /** Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps"). */
        set additionalInstruction(value: Array<CodeableConcept>);
        get additionalInstruction(): Array<CodeableConcept>;
        /** Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept). */
        set asNeeded(value: Boolean);
        get asNeeded(): Boolean;
        /** The amount of medication administered. */
        set doseAndRate(value: Array<Element>);
        get doseAndRate(): Array<Element>;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** Upper limit on medication per administration. */
        set maxDosePerAdministration(value: Quantity);
        get maxDosePerAdministration(): Quantity;
        /** Upper limit on medication per lifetime of the patient. */
        set maxDosePerLifetime(value: Quantity);
        get maxDosePerLifetime(): Quantity;
        /** Upper limit on medication per unit of time. */
        set maxDosePerPeriod(value: Ratio);
        get maxDosePerPeriod(): Ratio;
        /** Technique for administering medication. */
        set method(value: CodeableConcept);
        get method(): CodeableConcept;
        /**
         * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** Instructions in terms that are understood by the patient or consumer. */
        set patientInstruction(value: String);
        get patientInstruction(): String;
        /** How drug should enter body. */
        set route(value: CodeableConcept);
        get route(): CodeableConcept;
        /** Indicates the order in which the dosage instructions should be applied or interpreted. */
        set sequence(value: Integer);
        get sequence(): Integer;
        /** Body site to administer to. */
        set site(value: CodeableConcept);
        get site(): CodeableConcept;
        /** Free text dosage instructions e.g. SIG. */
        set text(value: String);
        get text(): String;
        /** When medication should be administered. */
        set timing(value: Timing);
        get timing(): Timing;
        protected _content: IDosage;
    }
    interface IPlannetPractitionerRole {
        active?: Boolean;
        availabilityExceptions?: String;
        availableTime?: Array<BackboneElement>;
        code?: Array<CodeableConcept>;
        contained?: Array<Resource>;
        endpoint?: Array<Reference>;
        extension?: Array<Extension>;
        healthcareService?: Array<Reference>;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        location?: Array<Reference>;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        notAvailable?: Array<BackboneElement>;
        organization?: Reference;
        period?: Period;
        practitioner?: Reference;
        specialty?: Array<CodeableConcept>;
        telecom?: Array<ContactPoint>;
        text?: Narrative;
    }
    /**
     * PractionerRole describes details about a provider, which can be a practitioner or an organization. When the provider is a practitioner,
     * there may be a relationship to an organization. A provider renders services to patients at a location. When the provider is a practitioner, there may also
     * be a relationship to an organization. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization.
     */
    export class PlannetPractitionerRole {
        static url: string;
        /** Whether this practitioner role record is in active use. */
        set active(value: Boolean);
        get active(): Boolean;
        /** A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times. */
        set availabilityExceptions(value: String);
        get availabilityExceptions(): String;
        /** A collection of times the practitioner is available or performing this role at the location and/or healthcareservice. */
        set availableTime(value: Array<BackboneElement>);
        get availableTime(): Array<BackboneElement>;
        /** Roles which this practitioner is authorized to perform for the organization. */
        set code(value: Array<CodeableConcept>);
        get code(): Array<CodeableConcept>;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** Technical endpoints providing access to services operated for the practitioner with this role. */
        set endpoint(value: Array<Reference>);
        get endpoint(): Array<Reference>;
        /** An Extension */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** The list of healthcare services that this worker provides for this role's Organization/Location(s). */
        set healthcareService(value: Array<Reference>);
        get healthcareService(): Array<Reference>;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** Business Identifiers that are specific to a role/location. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The location(s) at which this practitioner provides care. */
        set location(value: Array<Reference>);
        get location(): Array<Reference>;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** The practitioner is not available or performing this role during this period of time due to the provided reason. */
        set notAvailable(value: Array<BackboneElement>);
        get notAvailable(): Array<BackboneElement>;
        /** The organization where the Practitioner performs the roles associated. */
        set organization(value: Reference);
        get organization(): Reference;
        /** The period during which the person is authorized to act as a practitioner in these role(s) for the organization. */
        set period(value: Period);
        get period(): Period;
        /** Practitioner that is able to provide the defined services for the organization. */
        set practitioner(value: Reference);
        get practitioner(): Reference;
        /** Specific specialty of the practitioner. */
        set specialty(value: Array<CodeableConcept>);
        get specialty(): Array<CodeableConcept>;
        /** Contact details that are specific to the role/location/service. */
        set telecom(value: Array<ContactPoint>);
        get telecom(): Array<ContactPoint>;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        protected _content: IPlannetPractitionerRole;
    }
    interface IExtension {
        extension?: Array<Extension>;
        id?: string;
        url?: string;
        value?: Base64Binary;
    }
    /** Base StructureDefinition for Extension Type: Optional Extension Element - found in all resources. */
    export class Extension {
        static url: string;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** Source of the definition for the extension code - a logical name or a URL. */
        set url(value: string);
        get url(): string;
        /** Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list). */
        set value(value: Base64Binary);
        get value(): Base64Binary;
        protected _content: IExtension;
    }
    interface IMeta {
        extension?: Array<Extension>;
        id?: string;
        lastUpdated?: Instant;
        profile?: Array<Canonical>;
        security?: Array<Coding>;
        source?: Uri;
        tag?: Array<Coding>;
        versionId?: Id;
    }
    /** Base StructureDefinition for Meta Type: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    export class Meta {
        static url: string;
        /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
        set id(value: string);
        get id(): string;
        /** When the resource last changed - e.g. when the version changed. */
        set lastUpdated(value: Instant);
        get lastUpdated(): Instant;
        /** A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](structuredefinition-definitions.html#StructureDefinition.url). */
        set profile(value: Array<Canonical>);
        get profile(): Array<Canonical>;
        /** Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure. */
        set security(value: Array<Coding>);
        get security(): Array<Coding>;
        /** A uri that identifies the source system of the resource. This provides a minimal amount of [Provenance](provenance.html#) information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc. */
        set source(value: Uri);
        get source(): Uri;
        /** Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource. */
        set tag(value: Array<Coding>);
        get tag(): Array<Coding>;
        /** The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted. */
        set versionId(value: Id);
        get versionId(): Id;
        protected _content: IMeta;
    }
    interface IBasic {
        author?: Reference;
        code?: CodeableConcept;
        contained?: Array<Resource>;
        created?: Date;
        extension?: Array<Extension>;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        subject?: Reference;
        text?: Narrative;
    }
    /** Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification. */
    export class Basic {
        static url: string;
        /** Indicates who was responsible for creating the resource instance. */
        set author(value: Reference);
        get author(): Reference;
        /** Identifies the 'type' of resource - equivalent to the resource name for other resources. */
        set code(value: CodeableConcept);
        get code(): CodeableConcept;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** Identifies when the resource was first created. */
        set created(value: Date);
        get created(): Date;
        /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** Identifier assigned to the resource for business purposes, outside the context of FHIR. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** Identifies the patient, practitioner, device or any other resource that is the "focus" of this resource. */
        set subject(value: Reference);
        get subject(): Reference;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        protected _content: IBasic;
    }
    interface IPlannetOrganization {
        active?: Boolean;
        address?: Array<Address>;
        alias?: Array<String>;
        contact?: Array<BackboneElement>;
        contained?: Array<Resource>;
        endpoint?: Array<Reference>;
        extension?: Array<Extension>;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        name?: String;
        partOf?: Reference;
        telecom?: Array<ContactPoint>;
        text?: Narrative;
        type?: Array<CodeableConcept>;
    }
    /**
     * An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice.
     * Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text
     */
    export class PlannetOrganization {
        static url: string;
        /** Whether the organization's record is still in active use. */
        set active(value: Boolean);
        get active(): Boolean;
        /** An address for the organization. */
        set address(value: Array<Address>);
        get address(): Array<Address>;
        /** A list of alternate names that the organization is known as, or was known as in the past. */
        set alias(value: Array<String>);
        get alias(): Array<String>;
        /** Contact for the organization for a certain purpose. */
        set contact(value: Array<BackboneElement>);
        get contact(): Array<BackboneElement>;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** Technical endpoints providing access to services operated for the organization. */
        set endpoint(value: Array<Reference>);
        get endpoint(): Array<Reference>;
        /** An Extension */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** Identifier for the organization that is used to identify the organization across multiple disparate systems. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** A name associated with the organization. */
        set name(value: String);
        get name(): String;
        /** The organization of which this organization forms a part. */
        set partOf(value: Reference);
        get partOf(): Reference;
        /** A contact detail for the organization. */
        set telecom(value: Array<ContactPoint>);
        get telecom(): Array<ContactPoint>;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        /** The kind(s) of organization that this is. */
        set type(value: Array<CodeableConcept>);
        get type(): Array<CodeableConcept>;
        protected _content: IPlannetOrganization;
    }
    interface IPlannetLocation {
        address?: Address;
        alias?: Array<String>;
        availabilityExceptions?: String;
        contained?: Array<Resource>;
        description?: String;
        endpoint?: Array<Reference>;
        extension?: Array<Extension>;
        hoursOfOperation?: Array<BackboneElement>;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        managingOrganization?: Reference;
        meta?: Meta;
        mode?: Code;
        modifierExtension?: Array<Extension>;
        name?: String;
        operationalStatus?: Coding;
        partOf?: Reference;
        physicalType?: CodeableConcept;
        position?: BackboneElement;
        status?: Code;
        telecom?: Array<ContactPoint>;
        text?: Narrative;
        type?: Array<CodeableConcept>;
    }
    /**
     * A Location is the physical place where healthcare services are provided, practitioners are employed,
     *                  organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area.
     */
    export class PlannetLocation {
        static url: string;
        /** Physical location. */
        set address(value: Address);
        get address(): Address;
        /** A list of alternate names that the location is known as, or was known as, in the past. */
        set alias(value: Array<String>);
        get alias(): Array<String>;
        /** A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times. */
        set availabilityExceptions(value: String);
        get availabilityExceptions(): String;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** Description of the Location, which helps in finding or referencing the place. */
        set description(value: String);
        get description(): String;
        /** Technical endpoints providing access to services operated for the location. */
        set endpoint(value: Array<Reference>);
        get endpoint(): Array<Reference>;
        /** An Extension */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** What days/times during a week is this location usually open. */
        set hoursOfOperation(value: Array<BackboneElement>);
        get hoursOfOperation(): Array<BackboneElement>;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** Unique code or number identifying the location to its users. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The organization responsible for the provisioning and upkeep of the location. */
        set managingOrganization(value: Reference);
        get managingOrganization(): Reference;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /** Indicates whether a resource instance represents a specific location or a class of locations. */
        set mode(value: Code);
        get mode(): Code;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** Name of the location as used by humans. Does not need to be unique. */
        set name(value: String);
        get name(): String;
        /** The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance. */
        set operationalStatus(value: Coding);
        get operationalStatus(): Coding;
        /** Another Location of which this Location is physically a part of. */
        set partOf(value: Reference);
        get partOf(): Reference;
        /** Physical form of the location, e.g. building, room, vehicle, road. */
        set physicalType(value: CodeableConcept);
        get physicalType(): CodeableConcept;
        /** The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML). */
        set position(value: BackboneElement);
        get position(): BackboneElement;
        /** The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location. */
        set status(value: Code);
        get status(): Code;
        /** The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites. */
        set telecom(value: Array<ContactPoint>);
        get telecom(): Array<ContactPoint>;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        /** Indicates the type of function performed at the location. */
        set type(value: Array<CodeableConcept>);
        get type(): Array<CodeableConcept>;
        protected _content: IPlannetLocation;
    }
    interface IPlannetPractitioner {
        active?: Boolean;
        address?: Array<Address>;
        birthDate?: Date;
        communication?: Array<CodeableConcept>;
        contained?: Array<Resource>;
        extension?: Array<Extension>;
        gender?: Code;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        name?: Array<HumanName>;
        photo?: Array<Attachment>;
        qualification?: Array<BackboneElement>;
        telecom?: Array<ContactPoint>;
        text?: Narrative;
    }
    /** Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare. */
    export class PlannetPractitioner {
        static url: string;
        /** Whether this practitioner's record is in active use. */
        set active(value: Boolean);
        get active(): Boolean;
        /** Address(es) of the practitioner that are not role specific (typically home address).
    Work addresses are not typically entered in this property as they are usually role dependent. */
        set address(value: Array<Address>);
        get address(): Array<Address>;
        /** The date of birth for the practitioner. */
        set birthDate(value: Date);
        get birthDate(): Date;
        /** A language the practitioner can use in patient communication. */
        set communication(value: Array<CodeableConcept>);
        get communication(): Array<CodeableConcept>;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes. */
        set gender(value: Code);
        get gender(): Code;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** An identifier that applies to this person in this role. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** The name(s) associated with the practitioner. */
        set name(value: Array<HumanName>);
        get name(): Array<HumanName>;
        /** Image of the person. */
        set photo(value: Array<Attachment>);
        get photo(): Array<Attachment>;
        /** The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality. */
        set qualification(value: Array<BackboneElement>);
        get qualification(): Array<BackboneElement>;
        /** A contact detail for the practitioner, e.g. a telephone number or an email address. */
        set telecom(value: Array<ContactPoint>);
        get telecom(): Array<ContactPoint>;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        protected _content: IPlannetPractitioner;
    }
    interface IPlannetOrganizationAffiliation {
        active?: Boolean;
        code?: Array<CodeableConcept>;
        contained?: Array<Resource>;
        endpoint?: Array<Reference>;
        extension?: Array<Extension>;
        healthcareService?: Array<Reference>;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        location?: Array<Reference>;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        network?: Array<Reference>;
        organization?: Reference;
        participatingOrganization?: Reference;
        period?: Period;
        specialty?: Array<CodeableConcept>;
        telecom?: Array<ContactPoint>;
        text?: Narrative;
    }
    /** The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information. */
    export class PlannetOrganizationAffiliation {
        static url: string;
        /** Whether this organization affiliation record is in active use. */
        set active(value: Boolean);
        get active(): Boolean;
        /** Definition of the role the participatingOrganization plays in the association. */
        set code(value: Array<CodeableConcept>);
        get code(): Array<CodeableConcept>;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** Technical endpoints providing access to services operated for this role. */
        set endpoint(value: Array<Reference>);
        get endpoint(): Array<Reference>;
        /** An Extension */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Healthcare services provided through the role. */
        set healthcareService(value: Array<Reference>);
        get healthcareService(): Array<Reference>;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** Business identifiers that are specific to this role. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The location(s) at which the role occurs. */
        set location(value: Array<Reference>);
        get location(): Array<Reference>;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined). */
        set network(value: Array<Reference>);
        get network(): Array<Reference>;
        /** Organization where the role is available (primary organization/has members). */
        set organization(value: Reference);
        get organization(): Reference;
        /** The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of). */
        set participatingOrganization(value: Reference);
        get participatingOrganization(): Reference;
        /** The period during which the participatingOrganization is affiliated with the primary organization. */
        set period(value: Period);
        get period(): Period;
        /** Specific specialty of the participatingOrganization in the context of the role. */
        set specialty(value: Array<CodeableConcept>);
        get specialty(): Array<CodeableConcept>;
        /** Contact details at the participatingOrganization relevant to this Affiliation. */
        set telecom(value: Array<ContactPoint>);
        get telecom(): Array<ContactPoint>;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        protected _content: IPlannetOrganizationAffiliation;
    }
    interface IPlannetHealthcareService {
        active?: Boolean;
        appointmentRequired?: Boolean;
        availabilityExceptions?: String;
        availableTime?: Array<BackboneElement>;
        category?: CodeableConcept;
        characteristic?: Array<CodeableConcept>;
        comment?: String;
        communication?: Array<CodeableConcept>;
        contained?: Array<Resource>;
        coverageArea?: Array<Reference>;
        eligibility?: Array<BackboneElement>;
        endpoint?: Array<Reference>;
        extension?: Array<Extension>;
        extraDetails?: Markdown;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        location?: Array<Reference>;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        name?: String;
        notAvailable?: Array<BackboneElement>;
        photo?: Attachment;
        program?: Array<CodeableConcept>;
        providedBy?: Reference;
        referralMethod?: Array<CodeableConcept>;
        serviceProvisionCode?: Array<CodeableConcept>;
        specialty?: Array<CodeableConcept>;
        telecom?: Array<ContactPoint>;
        text?: Narrative;
        type?: Array<CodeableConcept>;
    }
    /** The HealthCareService resource typically describes services offered by an organization/practitioner at a location. The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnostics, pharmacy, hospital and ambulatory care, home care, long-term care, and other health-related and community services. */
    export class PlannetHealthcareService {
        static url: string;
        /** This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this. */
        set active(value: Boolean);
        get active(): Boolean;
        /** Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service. */
        set appointmentRequired(value: Boolean);
        get appointmentRequired(): Boolean;
        /** A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times. */
        set availabilityExceptions(value: String);
        get availabilityExceptions(): String;
        /** A collection of times that the Service Site is available. */
        set availableTime(value: Array<BackboneElement>);
        get availableTime(): Array<BackboneElement>;
        /** Identifies the broad category of service being performed or delivered. */
        set category(value: CodeableConcept);
        get category(): CodeableConcept;
        /** Collection of characteristics (attributes). */
        set characteristic(value: Array<CodeableConcept>);
        get characteristic(): Array<CodeableConcept>;
        /** Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName. */
        set comment(value: String);
        get comment(): String;
        /** Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used. */
        set communication(value: Array<CodeableConcept>);
        get communication(): Array<CodeableConcept>;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** The location(s) that this service is available to (not where the service is provided). */
        set coverageArea(value: Array<Reference>);
        get coverageArea(): Array<Reference>;
        /** Does this service have specific eligibility requirements that need to be met in order to use the service? */
        set eligibility(value: Array<BackboneElement>);
        get eligibility(): Array<BackboneElement>;
        /** Technical endpoints providing access to services operated for the specific healthcare services defined at this resource. */
        set endpoint(value: Array<Reference>);
        get endpoint(): Array<Reference>;
        /** An Extension */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** Extra details about the service that can't be placed in the other fields. */
        set extraDetails(value: Markdown);
        get extraDetails(): Markdown;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** External identifiers for this item. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The location(s) where this healthcare service may be provided. */
        set location(value: Array<Reference>);
        get location(): Array<Reference>;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** Further description of the service as it would be presented to a consumer while searching. */
        set name(value: String);
        get name(): String;
        /** The HealthcareService is not available during this period of time due to the provided reason. */
        set notAvailable(value: Array<BackboneElement>);
        get notAvailable(): Array<BackboneElement>;
        /** If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list. */
        set photo(value: Attachment);
        get photo(): Attachment;
        /** Programs that this service is applicable to. */
        set program(value: Array<CodeableConcept>);
        get program(): Array<CodeableConcept>;
        /** The organization that provides this healthcare service. */
        set providedBy(value: Reference);
        get providedBy(): Reference;
        /** Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required. */
        set referralMethod(value: Array<CodeableConcept>);
        get referralMethod(): Array<CodeableConcept>;
        /** The code(s) that detail the conditions under which the healthcare service is available/offered. */
        set serviceProvisionCode(value: Array<CodeableConcept>);
        get serviceProvisionCode(): Array<CodeableConcept>;
        /** Collection of specialties handled by the service site. This is more of a medical term. */
        set specialty(value: Array<CodeableConcept>);
        get specialty(): Array<CodeableConcept>;
        /** List of contacts related to this specific healthcare service. */
        set telecom(value: Array<ContactPoint>);
        get telecom(): Array<ContactPoint>;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        /** The specific type of service that may be delivered or performed. */
        set type(value: Array<CodeableConcept>);
        get type(): Array<CodeableConcept>;
        protected _content: IPlannetHealthcareService;
    }
    interface IPlannetNetwork {
        active?: Boolean;
        address?: Array<Address>;
        alias?: Array<String>;
        contact?: Array<BackboneElement>;
        contained?: Array<Resource>;
        endpoint?: Array<Reference>;
        extension?: Array<Extension>;
        id?: string;
        identifier?: Array<Identifier>;
        implicitRules?: Uri;
        language?: Code;
        meta?: Meta;
        modifierExtension?: Array<Extension>;
        name?: String;
        partOf?: Reference;
        telecom?: ContactPoint;
        text?: Narrative;
        type?: CodeableConcept;
    }
    /**
     * A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals that deliver a set of services across a geography through health insurance products/plans. A network is typically owned by a payer.
     *
     * In the PlanNet IG, individuals and organizations are represented as participants in a PLan-Net Network through the practitionerRole and Plan-Net-organizationAffiliation resources, respectively.
     */
    export class PlannetNetwork {
        static url: string;
        /** Whether the organization's record is still in active use. */
        set active(value: Boolean);
        get active(): Boolean;
        /** An address for the organization. */
        set address(value: Array<Address>);
        get address(): Array<Address>;
        /** A list of alternate names that the organization is known as, or was known as in the past. */
        set alias(value: Array<String>);
        get alias(): Array<String>;
        /** Contact for the organization for a certain purpose. */
        set contact(value: Array<BackboneElement>);
        get contact(): Array<BackboneElement>;
        /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
        set contained(value: Array<Resource>);
        get contained(): Array<Resource>;
        /** Technical endpoints providing access to services operated for the organization. */
        set endpoint(value: Array<Reference>);
        get endpoint(): Array<Reference>;
        /** An Extension */
        set extension(value: Array<Extension>);
        get extension(): Array<Extension>;
        /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
        set id(value: string);
        get id(): string;
        /** Identifier for the organization that is used to identify the organization across multiple disparate systems. */
        set identifier(value: Array<Identifier>);
        get identifier(): Array<Identifier>;
        /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
        set implicitRules(value: Uri);
        get implicitRules(): Uri;
        /** The base language in which the resource is written. */
        set language(value: Code);
        get language(): Code;
        /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
        set meta(value: Meta);
        get meta(): Meta;
        /**
         * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
         *
         * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        set modifierExtension(value: Array<Extension>);
        get modifierExtension(): Array<Extension>;
        /** A name associated with the organization. */
        set name(value: String);
        get name(): String;
        /** The organization of which this organization forms a part. */
        set partOf(value: Reference);
        get partOf(): Reference;
        /** A contact detail for the organization. */
        set telecom(value: ContactPoint);
        get telecom(): ContactPoint;
        /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
        set text(value: Narrative);
        get text(): Narrative;
        /** The kind(s) of organization that this is. */
        set type(value: CodeableConcept);
        get type(): CodeableConcept;
        protected _content: IPlannetNetwork;
    }
    export {};
}
