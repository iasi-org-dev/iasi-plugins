# IASI agent entry point

This repository is governed by `specifications/`. Before executing any task, inspect relevant `.iasi` specifications in `specifications/corporate/`, `specifications/departmental/`, and `specifications/project/`; apply them according to status and authority. Do not require task authors to enumerate them.

- `.iasi` is Markdown with TOML `+++` or YAML `---` front matter. Front matter is structured metadata; the remainder is Markdown. The corporate format specification governs interpretation.
- Corporate and departmental specifications may also be maintained in an external authoritative source. Do not assume a local copy supersedes a central approved version. If access is unavailable, report it instead of claiming verification.
- Treat `draft` material as a proposal; `ideas` and unresolved `decisions` are not approved requirements. Flag conflicts and missing decisions. Never silently override specifications.
- `inputs/externals/` holds original external materials, not binding specifications by itself.
- Tasks in `tasks/` describe goals and acceptance conditions. Executors discover applicable specifications contextually.
- Write generated task deliverables and QA evidence to `outputs/<task-id>/`. Do not write directly to `release/`.
- Promotion to `release/` is an independent, approved manual or automated process after the QA Gate. `release/` contains only approved product deliverables, not logs or QA working files.
- Do not change source inputs or specifications to make an implementation pass. Report uncertainties and seek an authorized decision.

Start with `specifications/corporate/` and `tasks/TASK-0001.iasi` for the present VS Code extension task. The Java standards govern Java code only; they do not require using Java for the VS Code extension.
