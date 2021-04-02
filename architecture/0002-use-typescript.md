# 2. Use Typescript

Date: 2021-04-02

## Status

Accepted

## Context

When deciding to build this client library, we asked ourselves whether we should
use Typescript.

## Decision

We decided to use Typescript based on a number of factors:

- Having type definitions is useful to all Javascript developers, because even
  if they are not using Typescript directly most editors support loading type
  definitions to provide better intellisense about the library
- When the library itself is written in Typescript, we won't have to maintain
  separate Typescript definition files, or force others to maintain them in the
  DefinitelyTyped repository
- The tooling around Typescript is mature enough to provide a solid development
  experience without having to wrestle with too many tools
- We can still provide backwards compatibility to consumers that are not using
  Typescript by transpiling the source and providing both ESM and CommonJS
  versions of the library

## Consequences

Building the library in Typescript will allow consumers to have a solid
development experience by having rich type information at their fingertips. The
developers of this library will have to endure a compilation step at publish
time, but the development experience (writing tests, debugging) is on par with
plain Javascript due to the tooling in place.

We will need to keep an eye on the development experience of both the consumer
and ourselves to ensure we haven't created a ton of pain, but we feel this is an
overall win.
