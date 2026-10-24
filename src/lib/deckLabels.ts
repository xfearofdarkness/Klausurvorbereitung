import audDecks from "../../content/aud/decks.json" with { type: "json" };
import dismaDecks from "../../content/disma/decks.json" with { type: "json" };
import laaDecks from "../../content/laa/decks.json" with { type: "json" };
import rabsDecks from "../../content/rabs/decks.json" with { type: "json" };
import vsDecks from "../../content/vs/decks.json" with { type: "json" };

interface DeckLabel {
  label: string;
  show: boolean;
}

function indexDecks(maps: readonly object[]): Map<string, DeckLabel> {
  const index = new Map<string, DeckLabel>();
  for (const map of maps) {
    const entries = Object.entries(map).filter((entry): entry is [string, string] => typeof entry[1] === "string" && entry[1].trim().length > 0);
    const show = entries.length > 1;
    for (const [file, label] of entries) index.set(file, { label, show });
  }
  return index;
}

const DECKS = indexDecks([audDecks, dismaDecks, laaDecks, rabsDecks, vsDecks]);

/** Kürzel nur, wenn das Fach mehr als einen Foliensatz hat. */
export function deckLabel(file: string): string {
  const deck = DECKS.get(file);
  if (!deck?.show) return "";
  return deck.label;
}
