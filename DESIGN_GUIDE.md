# Design Guide

## Ziel

Die App ist ein statischer Klausurtrainer fuer GitHub Pages mit Vite,
Svelte und TypeScript.

Sie soll:

- schnell laden
- auf Desktop und Smartphone gut nutzbar sein
- in allen Faechern gleich funktionieren
- moeglichst kompakt bleiben
- neue Faecher ohne UI-Sonderfaelle aufnehmen

## Verbindliche Struktur

Die App verwendet diese Struktur:

- `index.html` fuer die Fachuebersicht
- `trainer.html` als generische Trainerseite
- `src/pages/Home.svelte` fuer die Startseite
- `src/pages/Trainer.svelte` fuer die Trainerseite
- `src/components/` fuer wiederverwendbare UI-Komponenten
- `src/styles.css` fuer zentrales Styling
- `src/data/catalog.ts` fuer Fachliste und Loader
- `src/data/subjects/<fach>.ts` fuer die Fachdaten
- `src/types/content.ts` fuer das Datenmodell
- `dist/` als Build-Ausgabe fuer GitHub Pages

Regeln:

- Keine neue HTML-Datei pro Fach.
- Keine fachspezifische UI-Logik.
- Keine Mutation von Quelldaten fuer UI-Zustaende.
- Cache-Busting geschieht ueber Vite-Hashes im Build, nicht ueber
  manuelle `?v=N`-Parameter.
- GitHub Pages deployt die gebaute Ausgabe aus `dist/`.

## Didaktische Varianz pro Fach

Faecher unterscheiden sich didaktisch. Die App bildet das ueber
generische, deklarative Optionen in den Fachdaten ab, nie ueber
Sonderlogik:

- Modi sind inhaltsgetrieben und beziehen sich auf das aktuelle
  Thema: Die Modus-Buttons (Lernen, Fragen, Karteikarten, Ueben,
  Ablaeufe) werden nur angezeigt, wenn das aktuell ausgewaehlte
  Thema Inhalte fuer diesen Modus hat.
- Der Modus "Ueben" rendert den optionalen Themenabschnitt
  `exercises` (Aufgaben ohne hinterlegte Loesung, mit
  Bearbeitet-Fortschritt).
- Der Modus "Ablaeufe" rendert den optionalen Themenabschnitt
  `walkthroughs`. Er zeigt deklarative Schrittfolgen mit
  generischen Visualtypen: `matrix`, `array`, `tree` (Knoten
  mit links/rechts-Kindern) und `graph` (Knoten mit Koordinaten,
  Kanten optional gerichtet und beschriftet).
- `features.math: true` im Fachobjekt aktiviert Formel-Rendering
  mit KaTeX. KaTeX wird ueber npm gebuendelt; die App bleibt
  GitHub-Pages-tauglich.
- Formeln stehen in den Inhalten als LaTeX in `\(...\)` (inline)
  bzw. `\[...\]` (abgesetzt).

Neue didaktische Beduerfnisse werden als weitere generische Option
dieser Art ergaenzt, nicht als fachspezifischer Sonderfall.

## Designprinzipien

Die Oberflaeche ist funktional, kompakt und sachlich.

Regeln:

- Inhalt vor Deko.
- Hohe Informationsdichte ohne die Lesbarkeit zu verlieren.
- Konsistente Interaktion in allen Modi.
- Visuelle Hierarchie muss sofort erkennbar sein.
- Aktives Thema und aktiver Modus muessen jederzeit sichtbar sein.

## Komponenten

Standardkomponenten:

- Fachkarte
- Header
- Modus-Schalter
- Themen-Tabs
- Lernkarte
- Quizkarte
- Flashcard
- Uebungskarte
- Ablaufkarte
- Matrix- und Array-Visualisierung
- Fortschrittsleiste
- Statistikleiste
- Fehler- und Leerstates

Lernkarten koennen mit den Tags `wichtig`, `formel`, `def`, `satz`
und `beispiel` ausgezeichnet werden. Die Tag-Farben sind zentral
definiert und in allen Faechern gleich.

Jeder Inhaltseintrag zeigt seine Quellenangabe (`source`) dezent an:
in Lernkarten unter dem Text, in Quizkarten unter der Antwort, bei
Flashcards auf der Rueckseite. Das stuetzt die Kernregel, dass die
Folien Vorrang haben, und macht das Nachschlagen einfach.

## Barrierefreiheit

- Tastatur-Fokus ist auf allen interaktiven Elementen sichtbar
  (`:focus-visible` mit Akzentfarbe).
- `prefers-reduced-motion` wird respektiert: Einblend- und
  Flip-Animationen sind dann deaktiviert.
- Der aktive Themen-Tab wird beim Laden und Wechseln automatisch
  mittig in den sichtbaren Bereich gescrollt; Themen- und
  Moduswechsel setzen die Scrollposition nach oben.
- Ueberlaufende Themen-Tabs sind erkennbar und erreichbar:
  Fade-Kanten zeigen weitere Tabs an, auf Desktop gibt es
  Blaetter-Buttons und Mausrad-Scrolling; auf Touch-Displays
  bleibt das Wischen der primaere Weg (keine Buttons).

Regeln:

- Jede Komponente hat genau eine klar erkennbare Hauptfunktion.
- Gleichartige Komponenten sehen in allen Faechern gleich aus.
- Buttons verwenden konsistente Zustandsfarben fuer aktiv, gewusst und wiederholen.

## Design Tokens

Farben, Abstaende und Radien werden zentral definiert.

Regeln:

- Keine direkten Einzelfarben in neuen Komponenten.
- Keine abweichenden Randradien pro Seite.
- Statusfarben bleiben fest:
  - `accent` fuer Navigation und aktive Auswahl
  - `success` oder gruen fuer gewusst
  - `warning` oder orange/pink fuer wiederholen

## Typografie

Empfehlung:

- `Outfit` fuer UI und Lesetext
- `Space Mono` fuer Fachbegriffe, Code und technische Marker

Regeln:

- Ueberschriften kurz halten.
- Kartentitel sollen scannbar sein.
- Textbloecke so kurz wie fachlich moeglich.
- Fettung nur fuer wirklich wichtige Fachbegriffe.

## UX-Anforderungen

Diese Anforderungen sind verbindlich:

- Vom Startbildschirm bis zur ersten Lerneinheit oder Frage sind maximal zwei Interaktionen erlaubt.
- Der Nutzer muss immer sehen, in welchem Fach, Modus und Thema er sich befindet.
- Die wichtigsten Aktionen muessen ohne Nachdenken erkennbar sein.
- Die App darf keine Fachlogik voraussetzen; jedes Fach nutzt dieselbe Bedienung.
- Leere und fehlerhafte Zustaende muessen klar und knapp erklaert werden.
- Lokaler Fortschritt darf die Inhalte nie veraendern.
- Die App muss nach Reload mit vertretbarem Kontext weitermachen koennen, wenn Fortschritt lokal gespeichert ist.

## Kompaktheitsregeln

Die UI soll bewusst dicht sein.

Regeln:

- Header so niedrig wie moeglich halten.
- Sekundaere Hinweise klein und unaufdringlich halten.
- Karten-Padding nicht groesser als noetig.
- Zwischenraeume nur dort vergroessern, wo sie Orientierung verbessern.
- Lange Inhalte nach Themen oder Abschnitten segmentieren.
- Antworten standardmaessig eingeklappt lassen, wenn das Platz spart.

## Mobile Regeln

Die App muss auf Smartphones voll nutzbar sein.

Regeln:

- Touch-Ziele muessen gross genug fuer Daumenbedienung sein.
- Tabs duerfen horizontal scrollen, der Hauptinhalt moeglichst nicht.
- Header und Navigation duerfen auf kleinen Displays nicht zu viel Hoehe belegen.
- Wichtige Aktionen sollen im sichtbaren Bereich bleiben.
- Lange Karten muessen ohne Layoutbruch lesbar sein.
- Inhalte und Bedienelemente muessen auch auf schmalen Displays sauber umbrechen.

## Verhaltensregeln der App

Regeln:

- `index.html` rendert Faecher nur aus `src/data/catalog.ts`.
- `trainer.html` laedt ein Fach nur ueber `?subject=<id>`.
- Fachdaten werden in `src/data/subjects/<fach>.ts` gehalten.
- Fortschritt gehoert in State oder `localStorage`, nie in die Fachdaten.

## Was nicht gemacht werden soll

- Kein visuelles Redesign ohne funktionalen Mehrwert.
- Keine Animationen, die Lesefluss oder Bedienung verlangsamen.
- Keine zusaetzlichen UI-Muster pro Fach.
- Kein Backend, kein SvelteKit und kein SPA-Router ohne ausdrueckliche Entscheidung.
- Keine algorithmusspezifischen Mini-Apps; neue visuelle Logik wird ueber
  generische Renderer und deklarative Daten geloest.
