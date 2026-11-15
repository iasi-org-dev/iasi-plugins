import * as toml from "@iarna/toml";
import * as yaml from "js-yaml";
export type Parsed = { format: "toml" | "yaml"; metadata: Record<string, unknown>; body: string; frontMatter: string };
export function parseIasi(source: string): Parsed {
  const first = source.match(/^(\+\+\+|---)(?:\r?\n|$)/);
  if (!first) throw new Error("IASI front matter must start with +++ or ---");
  const delimiter = first[1];
  const escaped = delimiter === "+++" ? "\\+\\+\\+" : "---";
  const rest = source.slice(first[0].length);
  const closingPattern = new RegExp(`^${escaped}\\s*(?:\\r?\\n|$)`, "m");
  const end = rest.search(closingPattern);
  if (end < 0) throw new Error(`Unclosed ${delimiter} front matter`);
  const closing = rest.match(closingPattern)!;
  const raw = rest.slice(0, end);
  const body = rest.slice(end + closing[0].length);
  let metadata: unknown;
  try { metadata = delimiter === "+++" ? toml.parse(raw) : yaml.load(raw); } catch (e) { throw new Error(`Malformed ${delimiter === "+++" ? "TOML" : "YAML"} metadata: ${(e as Error).message}`); }
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) throw new Error("Metadata must be an object");
  return { format: delimiter === "+++" ? "toml" : "yaml", metadata: metadata as Record<string, unknown>, body, frontMatter: source.slice(0, source.length - body.length) };
}
