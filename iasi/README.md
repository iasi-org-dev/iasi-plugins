# IASI Plugins: consolidated specification package

**Reconstructed v0.2 package** for the `iasi-plugins` repository and Codex.

## Contents

- `AGENTS.md`: short entry point for agents. Binding guidance is defined in `specifications/`.
- `inputs/externals/`: **two unchanged source documents** from the prior package.
- `specifications/corporate/`: original 10 draft workflow rules plus new draft rules for document format, normative hierarchy, lifecycle and task artifacts.
- `specifications/departmental/language/java/`: five original Java standards, reclassified to departmental scope. Only applicable to Java implementations.
- `specifications/project/`: **43 unchanged atomic project `.iasi` files** covering ideas, requirements, specifications and decisions for VS Code / RStudio.
- `tasks/TASK-0001.iasi`: original compact VS Code task. Its execution depends on agent discovery of `specifications/`.
- `outputs/` and `release/`: prepared staging areas, not prepopulated deliverables.

## First action in Codex

Read `AGENTS.md` and `tasks/TASK-0001.iasi`. Find applicable specifications automatically. Implement the VS Code candidate only under `outputs/TASK-0001/`; do not promote it to `release/`.

## Authority and pending work

These corporate additions are **draft**, not an approved corporate baseline. The former external-input coherence/completeness check was intentionally skipped; do not mark it as passed. No VS Code implementation or QA result is included. Existing `LICENSE`, `.gitignore`, `README_es.md` and repository code should be preserved when importing this package.
