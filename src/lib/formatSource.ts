import { deckLabel } from "./deckLabels";

const SEPARATOR = " · ";

function shortenPart(part: string): string {
  const trimmed = part.trim();
  const comma = trimmed.indexOf(",");
  const file = comma >= 0 ? trimmed.slice(0, comma).trim() : "";
  const rest = comma >= 0 && file.endsWith(".pdf") ? trimmed.slice(comma + 1).trim() : trimmed;
  const numbers = rest.replace(/ und /g, ", ");
  const exercise = /^(?:Aufgaben|Aufgabe)\s+(.+)$/.exec(numbers);
  if (exercise) return `Übung ${exercise[1]}`;
  const label = /^(?:Folien|Folie)\b/.test(numbers) ? deckLabel(file) : "";
  return label ? `${label}${SEPARATOR}${numbers}` : numbers;
}

/** Kurze Randangabe. Die volle Quellenzeile bleibt in den Fachdaten. */
export function formatSource(source: string): string {
  return source
    .split(";")
    .map(shortenPart)
    .filter((part) => part.length > 0)
    .join(SEPARATOR);
}
