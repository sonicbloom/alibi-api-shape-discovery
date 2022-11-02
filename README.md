# Alibi API Shape Discovery

This repository contains TypeScript declaration files that describe the shape of Request and Response "objects" as used expected by Alibi's Music Library API server. They are shared to enable collaboration between the API documentation team (Sonic Bloom) and the API development team (Magnetic).

While it is understood that request parameters can be passed as URL Query Parameters, they can also be passed as JSON payloads with the HTTP request. The documentation of request objects covers this JSON format.

## Why TypeScript Type Declaration Files?

TypeScript Type Declaration files were chosen for the reasons discussed here.

### Conciceness

Type declarations express several important features of fields in a clear and concise manner. This includes:

- Field name
- Documentation comments
- Type(s)
- Required/optional status

Additionally the type grammar supports type composition so some types can be expressed in terms of other types. This is helpful when, for example, two different APIs differ in response by only a few fields. In these cases a "common base" can be defined and extended with enpdoint-specific interfaces.

### Functionality

Type declarations developed here can be leveraged directly by API implementers using either JavaScript or TypeScript to empower their IDE to assist them with the integration.
