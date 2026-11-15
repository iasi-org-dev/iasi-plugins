# TASK-0002 feasibility and QA report

Date: 2026-11-15

## Findings

RStudio Addins are public R-package integrations registered with `inst/rstudio/addins.dcf`. `rstudioapi` supports document creation and interaction. Recent Posit release notes state that `documentNew` accepts arbitrary file types and extensions. RStudio's native Visual Markdown editor and native Markdown preview are documented for Markdown/R Markdown/Quarto document workflows, but no public API was found for registering `.iasi` as a first-class Markdown document type or for attaching the native Visual-mode toolbar to an arbitrary extension.

## Implemented scope

The candidate package contains Addins for creating an `.iasi` document and previewing the active `.iasi` document. The source extension and front matter remain unchanged. Preview strips the front matter for rendering and writes no changes to the source document. Visual mode and Split View are not implemented because the task explicitly excludes custom visual editors and Split View, and the public host API does not expose the required registration hook.

## Limitations

- Native Visual mode for `.iasi` is not enabled through a supported public API.
- Native RStudio Markdown preview cannot be claimed for `.iasi` without changing the extension or relying on undocumented behavior.
- The addin preview depends on an installed Markdown rendering package and uses a temporary rendered artifact.
- R and RStudio are not installed in the execution shell, so package installation and in-host verification remain pending.
- The task file ends at `Phase 3: Verification` without detailed acceptance cases. This report records the available evidence and the missing host-level check.

## Sources

- Posit RStudio Addins guide: https://docs.posit.co/ide/user/ide/guide/productivity/add-ins.html
- Posit RStudio visual editor guide: https://docs.posit.co/ide/user/ide/guide/documents/visual-editor.html
- Posit release notes, `documentNew` arbitrary extensions: https://docs.posit.co/ide/news/

QA status: INCOMPLETE pending RStudio installation and in-host verification.
