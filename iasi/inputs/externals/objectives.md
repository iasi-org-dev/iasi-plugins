# IASI Plugins: Objectives

**Document type:** External input / statement of objectives  
**Project:** `iasi-plugins`  
**Status:** Initial proposal  
**Date:** 2026-11-14

## Context

IASI uses `.iasi` documents to express structured knowledge, specifications, rules and other documentation. An `.iasi` document combines metadata with Markdown content. Users need to work with this format in their usual development and documentation environments rather than switching to a dedicated editor.

The `iasi-plugins` project groups integrations for third-party applications, including editor extensions, plugins and add-ins. The first target environments are Visual Studio Code and RStudio.

## Main objective

Enable users to **open, edit, inspect and preview `.iasi` documents natively** in supported applications, with consistent interpretation of the format and a smooth editing experience.

## Specific objectives

1. Recognize `.iasi` files as first-class documents in supported environments.
2. Support `.iasi` documents with either TOML (`+++`) or YAML (`---`) metadata front matter followed by Markdown content.
3. Provide syntax highlighting appropriate to the metadata format and Markdown body.
4. Offer **Source**, **Preview** and **Split View** modes; Split View displays source and rendered content side by side.
5. Refresh the preview as source changes, with a reasonable balance between responsiveness and resource use.
6. Render the document body without exposing raw metadata delimiters; use meaningful metadata in the preview when appropriate.
7. Share format interpretation, validation and rendering behavior where technically feasible, rather than creating conflicting implementations per editor.
8. Accommodate gradual expansion to diagrams, internal links, cross-document references and richer `.iasi` features.
9. Keep each application integration independently buildable, testable and releasable, even when housed in the same repository.
10. Allow `iasi-setup-platform` to install and configure these integrations in the future without coupling setup responsibilities to plugin implementation.

## Initial delivery scope

### Visual Studio Code (first implementation)

- File association for `.iasi`.
- Editing with appropriate highlighting for metadata and Markdown.
- Preview of the Markdown body and relevant metadata.
- Source/Preview/Split View commands or equivalent user-facing controls.
- Automatic preview refresh when editing.
- A minimal set of reproducible tests and installation instructions.

### RStudio (subsequent implementation)

- Equivalent user experience as far as RStudio's extension/add-in capabilities allow.
- Document recognition/editing assistance and preview workflow.
- Source and rendered content displayed together where technically achievable.
- Any limitations of the host IDE documented explicitly rather than obscured by incompatible behavior.

## Longer-term objectives (not prerequisites for v0.1)

- Metadata schema validation and actionable diagnostics.
- Navigation within documents and synchronization between source and preview.
- Mermaid and PlantUML diagrams.
- Cross-document links and references between `.iasi` files.
- Optional corporate/departmental rule resolution and QA Gate integration.
- Additional third-party application integrations.

## Success criteria for the first VS Code milestone

- A `.iasi` file with TOML or YAML front matter opens as an editable document.
- Metadata and Markdown are distinguishable in the editor.
- A preview correctly renders headings, paragraphs, lists, tables, code fences and links from the Markdown body.
- Switching between Source, Preview and Split View works without changing the original document.
- In Split View, modifying the source updates the preview automatically.
- Front matter is parsed and excluded from the raw body rendering.
- Rendering does not execute untrusted scripts from the document.
- The extension can be installed and run using documented steps.

## Out of scope for the initial milestone

- Building a new standalone IDE or editor.
- Implementing every future `.iasi` construct immediately.
- Cloud synchronization or a server-side document repository.
- Using `iasi-setup-platform` as the development repository for integrations.
- Publishing to external extension marketplaces before quality checks and review.

## Guiding principle

**Design for extensibility, implement incrementally.** Initial support should be useful now without constraining later versions of the IASI documentation ecosystem.
