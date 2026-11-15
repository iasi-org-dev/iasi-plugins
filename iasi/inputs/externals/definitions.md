# IASI Plugins: Concepts and Initial Definitions

**Document type:** External input / terminology and functional definitions  
**Project:** `iasi-plugins`  
**Status:** Initial proposal  
**Date:** 2026-11-14

## 1. Project boundary

`iasi-plugins` is a repository grouping **plugins, add-ins and extensions** that integrate IASI capabilities into external applications. It does not own the canonical `.iasi` format definition, and it is not responsible for machine or platform provisioning.

The first intended integrations are:

- **VS Code extension:** initial development target.
- **RStudio add-in/integration:** second development target, subject to the host application's actual capabilities.

Future integrations can be added without changing the purpose of the repository.

## 2. Related responsibilities

| Component | Responsibility |
| --- | --- |
| `iasi-plugins` | Adapters and user experience inside third-party tools |
| `iasi-docs` | Common document format, parsing, validation and rendering contracts/capabilities (logical responsibility; repository structure is a separate decision) |
| `iasi-setup-platform` | Installing and configuring supported integrations when required |
| `iasi-dev-tools` | Development automation and tooling, not ownership of IDE plugins |

Interfaces between these components should be documented and should not assume that all pieces must be built at once.

## 3. `.iasi` document

An `.iasi` file is a textual document composed of:

1. **Front matter:** structured metadata at the beginning of the file.
2. **Body:** Markdown content after the closing metadata delimiter.

Two metadata syntaxes are admitted in the initial concept:

**TOML**

```text
+++
title = "Java programming rules"
version = "0.1.0"
+++

# Java programming rules

Document content in Markdown.
```

**YAML**

```text
---
title: Java programming rules
version: 0.1.0
---

# Java programming rules

Document content in Markdown.
```

These examples illustrate the format; the authoritative metadata schema and full validation rules must be defined separately. Ordinary Markdown files are not automatically reclassified as `.iasi` documents.

## 4. Editing modes

### Source

Displays the original text including front matter and Markdown body, with syntax-aware editing support. Editing should preserve the original source representation unless the user explicitly requests a transformation.

### Preview

Displays rendered document content. The metadata delimiters and raw front matter are not shown as literal Markdown; selected metadata may be presented in a human-readable document header or other appropriate UI.

### Split View

Displays **Source and Preview side by side**, allowing editing and visual checking at the same time. The preview updates when the source changes. This is a required feature, not merely a future enhancement.

## 5. Common behavior and host adapters

Prefer a shared definition of document semantics and validation, with editor-specific UI adapters. A common engine is a design objective; its precise implementation language, packaging and invocation mechanism are not fixed in this input.

Host integrations may have different APIs. Requirements that cannot be implemented equivalently in a given IDE must be analyzed, documented and addressed explicitly.

## 6. Rendering and security

- Treat document source and metadata as **untrusted input**.
- Do not execute embedded scripts from documents inside the preview.
- Ensure internal links and external resources are handled according to the host's security model.
- Avoid mutating source during preview generation.
- Provide visible errors or diagnostics for malformed front matter rather than silently discarding content.

## 7. Suggested repository layout (non-binding)

```text
iasi-plugins/
├── vscode/
├── rstudio/
├── inputs/
│   └── externals/
│       ├── objectives.md
│       └── definitions.md
├── README.md
├── README_es.md
└── .gitignore
```

The actual IASI workflow may place `inputs/externals` in a separate project location. This is a logical arrangement for discussing the initial inputs, **not** a mandatory repository structure.

## 8. Delivery stages

| Stage | Expected result |
| --- | --- |
| Initial VS Code integration | `.iasi` recognition, editing, preview, Split View and automatic refresh |
| Improved authoring | Metadata diagnostics, better navigation and source-preview coordination |
| Rich documents | Diagrams, references and advanced rendering |
| RStudio integration | Equivalent workflow within the capabilities of the RStudio host |
| Ecosystem integration | Reusable services, QA checks and optional setup automation |

Stages represent sequencing intent and may be refined when the formal specifications are produced.

## 9. Open design questions

- Which metadata fields are mandatory, optional or inherited?
- What should appear in a preview document header?
- Should preview be synchronized by scrolling and selection, and at which stage?
- Where should the shared renderer execute and how will each host access it?
- What RStudio integration model best supports a persistent side-by-side experience?
- What is the policy for local assets, remote images and document links?

These questions belong in the subsequent **specifications** phase, not in the external input documents.
