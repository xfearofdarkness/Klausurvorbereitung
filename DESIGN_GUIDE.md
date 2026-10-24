# Design Guide

## Ziel

Die App ist ein statischer Klausurtrainer mit Vite, Svelte und TypeScript.
Produktion ist Vercel unter https://learn.jamiehuta.com (`base` `/`).
GitHub Pages liefert nur noch eine Weiterleitung dorthin.

Sie soll:

- schnell laden
- auf Desktop und Smartphone gut nutzbar sein
- in allen Fächern gleich funktionieren
- möglichst kompakt bleiben
- neue Fächer ohne UI-Sonderfälle aufnehmen

## Verbindliche Struktur

Die App verwendet diese Struktur:

- `index.html` für die Fachübersicht
- `trainer.html` als generische Trainerseite
- `src/pages/Home.svelte` für die Startseite
- `src/pages/Trainer.svelte` für die Trainerseite
- `src/components/` für wiederverwendbare UI-Komponenten
- `src/styles.css` für zentrales Styling
- `src/data/catalog.ts` für Fachliste und Loader
- `content/<fach>/` für die Fachdaten (Autorendateien, beim Build zu JSON kompiliert)
- `src/types/content.ts` für das Datenmodell
- `dist/` als Build-Ausgabe

Regeln:

- Keine neue HTML-Datei pro Fach.
- Keine fachspezifische UI-Logik.
- Keine Mutation von Quelldaten für UI-Zustände.
- Cache-Busting geschieht über Vite-Hashes im Build, nicht über
  manuelle `?v=N`-Parameter.
- Vercel liefert `dist/` aus. Der GitHub-Pages-Build leitet nur um.
- Schriften und Icons werden mitgebündelt, keine externen Font- oder
  Icon-Dienste.

## Didaktische Varianz pro Fach

Fächer unterscheiden sich didaktisch. Die App bildet das über
generische, deklarative Optionen in den Fachdaten ab, nie über
Sonderlogik:

- Modi sind nach Tätigkeit getrennt, nicht nach Inhaltsart: Lernen
  (verstehen), Karteikarten (abrufen und wiederholen) und Üben (selbst
  anwenden). Alle drei haben einen festen Platz in der Modusleiste.
  Modi ohne Inhalte im aktuellen Thema werden ausgegraut und sind nicht
  wählbar, damit die Plätze beim Themenwechsel nicht springen.
- Der Modus „Lernen“ zeigt die Lernkarten und bettet die Abläufe des
  Themas ein, jeweils direkt nach der Lernkarte, die sie
  veranschaulichen. Ein vorgerechnetes Beispiel steht so neben seiner
  Erklärung, ohne Moduswechsel.
- Karteikarten sind das einzige Abfrageformat. Es gibt keinen
  getrennten Fragenmodus mit ähnlichen Inhalten.
- Der Modus „Üben“ rendert den optionalen Themenabschnitt
  `exercises` (Aufgaben ohne hinterlegte Lösung, mit
  Bearbeitet-Fortschritt). Aufgaben mit `generator`-Feld sind
  generierte Rechenmodule: Zahlen per Zufall, berechnete Lösung
  ein-/ausblendbar, Button „Neue Zahlen“.
- Abläufe (`walkthroughs`) sind deklarative Schrittfolgen mit
  generischen Visualtypen: `matrix`, `array`, `tree` (Knoten
  mit links/rechts-Kindern) und `graph` (Knoten mit Koordinaten,
  Kanten optional gerichtet und beschriftet).
- `features.math: true` im Fachobjekt aktiviert Formel-Rendering
  mit KaTeX. Formeln werden vor dem Einfügen in die Seite gerendert,
  nicht nachträglich im DOM.
- Formeln stehen in den Inhalten als LaTeX in `\(...\)` (inline)
  bzw. `\[...\]` (abgesetzt).

Neue didaktische Bedürfnisse werden als weitere generische Option
dieser Art ergänzt, nicht als fachspezifischer Sonderfall.

## Navigation

Die Trainerseite hat drei Layoutstufen nach Bildschirmbreite:

- Smartphone (unter 48rem): Kopfzeile mit Zurück-Button und
  Themenauswahl (Fach, „Thema n von m“, Thementitel). Die Modusleiste
  liegt unten in Daumenreichweite, mit Icon und kurzer Beschriftung.
- Tablet und Smartphone quer (48rem bis 64rem): eine Kopfzeile mit
  Zurück-Button, Themenauswahl und Modusleiste.
- Desktop (ab 64rem): Seitenleiste mit allen Themen und ihrem
  Fortschritt. Die Lage ist wählbar: links (Standard), rechts oder oben
  wie bei Tablets. Die Wahl ist eine Ansichtseinstellung pro Browser.

Regeln:

- Der Inhalt hat Vorrang vor der Navigation. Die Seitenleiste ist
  zurückhaltend gestaltet (Seitenhintergrund, gedämpfte Schrift, nur
  das aktive Thema hervorgehoben), und der Inhalt bleibt in der
  Bildschirmmitte, solange der Platz reicht.
- Die Themenauswahl zeigt immer alle Themen eines Fachs mit
  Fortschritt; kein seitliches Suchen in Tab-Leisten.
- Fach, Thema und Modus sind in jeder Layoutstufe sichtbar.

## Designprinzipien

Die Oberfläche ist funktional, kompakt und sachlich.

Regeln:

- Inhalt vor Deko.
- Hohe Informationsdichte ohne die Lesbarkeit zu verlieren.
- Konsistente Interaktion in allen Modi.
- Visuelle Hierarchie muss sofort erkennbar sein.
- Aktives Thema und aktiver Modus müssen jederzeit sichtbar sein.
- Farbe trägt Bedeutung (Navigation, Status, Kategorie), nicht Dekoration.
- Keine Verläufe, Glüheffekte oder Schatten als Schmuck.

## Komponenten

Standardkomponenten:

- Fachkarte
- Seitenleiste und Themenauswahl
- Modusleiste
- Lernkarte
- Flashcard
- Übungskarte
- Ablaufkarte
- Matrix-, Array-, Baum- und Graph-Visualisierung
- Fortschrittsleiste
- Statistikleiste
- Fehler- und Leerstates

Lernkarten können mit den Tags `wichtig`, `formel`, `def`, `satz`
und `beispiel` ausgezeichnet werden. Im Modus Lernen stehen sie im
Fließtext, nicht in umrandeten Karten. `def` hat keine Badge, nur eine
feine linke Linie. `wichtig` ist eine kräftigere linke Linie plus das
Wort „Wichtig“. Die übrigen Tags bleiben kleine Farbmarken. Die Farben
sind zentral definiert und in allen Fächern gleich.

Jeder Inhaltseintrag zeigt seine Quellenangabe (`source`) dezent an:
in Lernkarten unter dem Text, in Abläufen unter dem Schritt, bei
Karteikarten auf der Rückseite. Das stützt die Kernregel, dass die
Folien Vorrang haben, und macht das Nachschlagen einfach.

Regeln:

- Jede Komponente hat genau eine klar erkennbare Hauptfunktion.
- Gleichartige Komponenten sehen in allen Fächern gleich aus.
- Nicht klickbare Karten reagieren nicht auf Hover.

## Barrierefreiheit

- Tastatur-Fokus ist auf allen interaktiven Elementen sichtbar
  (`:focus-visible` mit Akzentfarbe).
- `prefers-reduced-motion` wird respektiert: Übergänge und Animationen
  sind dann deaktiviert.
- Nebentext erreicht mindestens 4,5:1 Kontrast zum Hintergrund.
- Die Themenauswahl ist ein modaler Dialog: Escape und Tipp auf den
  Hintergrund schließen ihn, der Fokus kehrt zum Auslöser zurück.
- Themen- und Moduswechsel setzen die Scrollposition nach oben.

## Design Tokens

Farben, Abstände und Radien werden zentral in `src/styles.css`
definiert.

Regeln:

- Keine direkten Einzelfarben in Komponenten, nur Tokens.
- Flächen sind neutrale Grautöne in wenigen Stufen.
- Keine abweichenden Randradien pro Seite.
- Maße in `rem`, damit größere Systemschriften sauber skalieren.
- Statusfarben bleiben fest:
  - `accent` für Navigation und aktive Auswahl
  - `success` (grün) für gewusst und erledigt
  - `warning` (orange) für wiederholen

## Typografie

- `Outfit` für UI und Lesetext
- `Space Mono` für Quellenangaben, Code und technische Marker

Regeln:

- Überschriften kurz halten.
- Kartentitel sollen scannbar sein.
- Textblöcke so kurz wie fachlich möglich.
- Fettung nur für wirklich wichtige Fachbegriffe.
- Beschriftungen in normaler Schreibweise, nicht in Versalien.

## UX-Anforderungen

Diese Anforderungen sind verbindlich:

- Vom Startbildschirm bis zur ersten Lerneinheit oder Karteikarte sind maximal zwei Interaktionen erlaubt.
- Der Nutzer muss immer sehen, in welchem Fach, Modus und Thema er sich befindet.
- Die wichtigsten Aktionen müssen ohne Nachdenken erkennbar sein.
- Die App darf keine Fachlogik voraussetzen; jedes Fach nutzt dieselbe Bedienung.
- Leere und fehlerhafte Zustände müssen klar und knapp erklärt werden.
- Lokaler Fortschritt darf die Inhalte nie verändern.
- Die App muss nach Reload mit vertretbarem Kontext weitermachen können, wenn Fortschritt lokal gespeichert ist.

## Kompaktheitsregeln

Die UI soll bewusst dicht sein.

Regeln:

- Kopfzeile so niedrig wie möglich halten.
- Keine Überschriften, die nur wiederholen, was Navigation und
  Modusleiste schon zeigen.
- Sekundäre Hinweise klein und unaufdringlich halten.
- Karten-Padding nicht größer als nötig.
- Zwischenräume nur dort vergrößern, wo sie Orientierung verbessern.
- Lange Inhalte nach Themen oder Abschnitten segmentieren.
- Antworten standardmäßig eingeklappt lassen, wenn das Platz spart.

## Mobile Regeln

Die App muss auf Smartphones voll nutzbar sein.

Regeln:

- Touch-Ziele müssen groß genug für Daumenbedienung sein.
- Der Hauptinhalt scrollt nicht horizontal; nur breite Formeln und
  Tabellen dürfen in ihrem eigenen Bereich scrollen.
- Kopfzeile und Navigation dürfen auf kleinen Displays nicht zu viel Höhe belegen.
- Wichtige Aktionen sollen im sichtbaren Bereich bleiben.
- Feste Leisten berücksichtigen die Safe Area (`env(safe-area-inset-bottom)`).
- Lange Karten müssen ohne Layoutbruch lesbar sein.
- Inhalte und Bedienelemente müssen auch auf schmalen Displays (ab 320px) sauber umbrechen.

## Verhaltensregeln der App

Regeln:

- `index.html` rendert Fächer nur aus `src/data/catalog.ts`.
- `trainer.html` lädt ein Fach nur über `?subject=<id>`.
- Fachdaten werden in `content/<fach>/` gehalten.
- Fortschritt gehört in State oder `localStorage`, nie in die Fachdaten.

## Was nicht gemacht werden soll

- Kein visuelles Redesign ohne funktionalen Mehrwert.
- Keine Animationen, die Lesefluss oder Bedienung verlangsamen.
- Keine zusätzlichen UI-Muster pro Fach.
- Kein Backend, kein SvelteKit und kein SPA-Router ohne ausdrückliche Entscheidung.
- Keine algorithmusspezifischen Mini-Apps; neue visuelle Logik wird über
  generische Renderer und deklarative Daten gelöst.
