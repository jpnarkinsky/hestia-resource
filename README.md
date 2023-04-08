<div align="right">

TODO: Add build status

</div>

# What is this?

This `hestia-resource`. It is the first major component of the Hestia system, which as of this date is under active development. The goal of this project is simple: to provide the finest environment on any platform for working with FHIR data.

This is component handles FHIR resources in Typescript and I think it will offers some unique features:

1. It is type-safe from end to end. This carries major advantages -- in particular, it's not possible to create invalid FHIR data.
2. Custom types can be compiled from any implementation guide you happen to be implementing.
3. A tightly integrated, **type safe** and performant implementation of FHIRpath is planned.
4. Full support for import and export of the various FHIR formats (XML, JSON, YAML, FSH, etc.) is planned.
5. In the longer term, I'd ike to implement FHIR mapping support. Tightly integrated, of course.
6. Despite being fully typed, we strive to be the easiest FHIR API to learn AND to use.
7. I'm doing this so that, next, I can implement a full fledged FHIR server with end-to-end type safety and without the pain of Java or .NET.

This is strictly alpha quality software at this point -- but keep watching.
