# Design Guide

## Ziel

Die App ist ein statischer Klausurtrainer fuer GitHub Pages.

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
- `assets/styles.css` fuer zentrales Styling
- `assets/index.js` fuer die Startseite
- `assets/app.js` fuer die Trainerlogik
- `data/catalog.js` fuer die Fachliste
- `data/<fach>.js` fuer die Fachdaten

Regeln:

- Keine neue HTML-Datei pro Fach.
- Keine fachspezifische UI-Logik.
- Keine Mutation von Quelldaten fuer UI-Zustaende.

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
- Fortschrittsleiste
- Statistikleiste
- Fehler- und Leerstates

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

- `index.html` rendert Faecher nur aus `data/catalog.js`.
- `trainer.html` laedt ein Fach nur ueber `?subject=<id>`.
- Fachdaten werden in `data/<fach>.js` gehalten.
- Fortschritt gehoert in State oder `localStorage`, nie in die Fachdaten.

## Naechste UI-Schritte

Diese Verbesserungen sind die naechsten sinnvollen Schritte:

1. Header vertikal verdichten und Untertitel noch unaufdringlicher machen.
2. Themen-Tabs kompakter gestalten und das horizontale Scrollen mobil verbessern.
3. Lern- und Quizkarten im Padding leicht reduzieren.
4. Antwortbereiche und Statusleisten platzsparender gestalten.
5. Letztes Thema und letzter Modus lokal merken.
6. Lange Lernkarten optional klappbar machen.
7. Flashcards an kleinere Viewports anpassen, damit mehr Inhalt ohne Scrollen sichtbar ist.
8. Mobile Buttons sprachlich kuerzen und visuell vereinheitlichen.

## Was nicht gemacht werden soll

- Kein visuelles Redesign ohne funktionalen Mehrwert.
- Keine Animationen, die Lesefluss oder Bedienung verlangsamen.
- Keine zusaetzlichen UI-Muster pro Fach.
- Keine komplexen Frameworks oder Build-Prozesse fuer einfache Layoutanpassungen.
