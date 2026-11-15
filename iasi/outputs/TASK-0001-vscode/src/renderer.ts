import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { Parsed } from "./parser";
const md = new MarkdownIt({html:false, linkify:true, breaks:true});
export function render(parsed: Parsed): string {
  const title = typeof parsed.metadata.title === "string" ? parsed.metadata.title : "IASI Preview";
  const metadata = Object.entries(parsed.metadata).map(([k,v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(String(v))}</dd>`).join("");
  const content = sanitizeHtml(md.render(parsed.body), {allowedTags: sanitizeHtml.defaults.allowedTags, allowedAttributes: {a:["href","title","target","rel"], code:["class"]}, allowedSchemes:["http","https","mailto"]});
  return `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline';"><style>body{font-family:var(--vscode-font-family);color:var(--vscode-foreground);padding:1rem;max-width:900px;margin:auto}dt{font-weight:bold;float:left;clear:left;width:8rem}dd{margin-left:9rem}pre{background:var(--vscode-textCodeBlock-background);padding:.75rem;overflow:auto}a{color:var(--vscode-textLink-foreground)}</style></head><body><h1>${escapeHtml(title)}</h1><dl>${metadata}</dl>${content}</body></html>`;
}
function escapeHtml(value: string): string { return value.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]!)); }
