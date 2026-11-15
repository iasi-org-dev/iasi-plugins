# TASK-0001 QA report

Date: 2026-11-14

## Scope and specifications

Applied the task, corporate workflow rules, project requirements for `.iasi` recognition, TOML/YAML front matter, Markdown rendering, source/preview/split modes, live refresh, source preservation, malformed metadata diagnostics, untrusted content, no script execution, installation instructions and reproducible tests. Project decisions with status `open` were not treated as requirements. All discovered specifications are currently `draft`, so the candidate is verified against their stated rules but no approved-policy claim is made.

## Verification

- `npm install`: PASS (30 packages installed using the available Corepack npm shim).
- Parser tests: PASS (`parser tests passed`). The package script then exposed a PATH issue because its nested `npm run build` cannot resolve `npm` in the shell environment.
- TypeScript build: PASS via `node_modules/.bin/tsc.cmd -p .`. Static inspection: package manifest, language association, TextMate grammar, parser, renderer, diagnostics, commands and split-view wiring are present.
- Source preservation: preview reads `TextDocument.getText()` and never writes to the document.
- Security: webview has scripts disabled, Markdown raw HTML disabled and output sanitized.

## Limitations and unresolved issues

- Full VS Code Extension Host integration testing requires VS Code and installed npm dependencies. This environment did not provide a verified VS Code runner during implementation.
- Shared renderer integration remains an open project decision, so this candidate keeps parser and renderer local to the extension.
- Preview header fields remain an open decision. The candidate displays the title and all parsed metadata in a compact definition list.
- External resource policy and scroll synchronization remain open decisions and are not implemented.
- The current diagnostic range points to the first line for malformed metadata rather than the exact parser offset.

QA status: INCOMPLETE pending VS Code Extension Host verification. Dependency installation, parser tests and TypeScript compilation pass. The package now declares MIT licensing and includes `LICENSE` for VSIX packaging. Promotion to `release/` is not performed.



## Preview toolbar update (0.1.1)

- PASS: `npm.cmd test` compiled TypeScript and passed three tests using the built parser and renderer.
- PASS: VSIX packaging and archive inspection confirmed the compiled extension and the IASI-only preview button contribution. VSCE warned about package file count and the absence of a packaging allowlist.
- Pending: visual verification of the toolbar and webview in VS Code.
