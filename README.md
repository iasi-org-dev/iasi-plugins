# IASI Plugins

🇪🇸 [Español](README_es.md) | 🇬🇧 **English**

**IASI Plugins** is the integration hub for plugins, add-ins, and extensions connecting third-party applications and development environments to the **IASI** ecosystem.

## Purpose

The repository groups application-specific integrations while keeping shared IASI specifications and services independent of any particular editor or IDE.

The first target integrations are **Visual Studio Code** and **RStudio**, with support for the `.iasi` document format.

## Planned capabilities

- Recognize `.iasi` documents natively.
- Edit Markdown content with TOML (`+++`) or YAML (`---`) metadata.
- Provide syntax highlighting and metadata validation.
- Render documents in **Preview** mode.
- Offer **Split View** with source and preview side by side, updating as the document changes.
- Progressively support diagrams, internal references, and additional IASI document features.

## Architecture

- **`iasi-plugins`**: application-specific adapters and integrations.
- **`iasi-docs`**: common document format, interpretation, validation, and rendering contracts.
- **`iasi-setup-platform`**: installation and configuration of integrations on supported platforms.

These responsibilities are intentionally separated. An IDE integration must not redefine the `.iasi` format or duplicate its core semantics.

## Proposed structure

```text
iasi-plugins/
├── vscode/          # Visual Studio Code extension
├── rstudio/         # RStudio add-in / integration
├── README.md        # English
└── README_es.md     # Castellano
```

This layout is a **target structure**, not a claim that all directories or implementations already exist.

## Roadmap

1. **v0.1**: `.iasi` recognition, metadata-aware editing, Markdown Preview, and Split View in VS Code.
2. **v0.2**: metadata validation, improved source/preview synchronization, and document navigation.
3. **v0.3**: diagrams and cross-document references.
4. **v1.0**: shared-document integration, quality checks, and a stable extension contract.

RStudio integration will follow incrementally according to the capabilities exposed by its editor and add-in APIs.

## Project status

🚧 **Early planning and repository bootstrap.** Features listed above are goals and are not yet presented as implemented.

## License

MIT is the intended license for this project. See `LICENSE` once the license file has been added to the repository.
