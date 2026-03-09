# Content Guide

## Ziel

Dieser Guide regelt die Erstellung neuer Trainingsinhalte.

Er ist verbindlich fuer:

- manuell erstellte Inhalte
- KI-unterstuetzt erzeugte Inhalte
- spaetere PDF-zu-Trainer-Prozesse

## Oberste Regel

Die Vorlesungsfolien haben immer das letzte Wort.

Das bedeutet:

- Die Folien sind die primaere fachliche Referenz.
- Wenn Trainerinhalt und Folien voneinander abweichen, gelten die Folien.
- Wenn etwas nicht explizit in den Folien steht, darf es nicht in den Trainer aufgenommen werden.

## Quellenregeln

Verbindliche Regeln:

- Es werden nur freigegebene, klausurrelevante Vorlesungsunterlagen verarbeitet.
- Die KI darf keine externen Quellen, kein Allgemeinwissen und kein Transferwissen einfliessen lassen.
- Fachbegriffe und Definitionen werden so nah wie moeglich an der Formulierung der Folien uebernommen.
- Unklare, abgeschnittene oder OCR-fehlerhafte Stellen werden nicht geraten.
- Bei Widerspruechen zwischen Folien muss manuell geprueft werden.
- Wenn mehrere Folien denselben Punkt behandeln, wird die praeziseste Originalformulierung uebernommen.

## Erlaubte und nicht erlaubte KI-Transformationen

Erlaubt:

- Folien in Themenbloecke gliedern
- Aussagen aus Folien in Lernkarten zerlegen
- Fragen direkt aus Ueberschriften oder Aussagen der Folien ableiten
- Flashcards aus Originalformulierungen bilden
- Inhalte sprachlich leicht gliedern, ohne neue Aussage hinzuzufuegen

Nicht erlaubt:

- eigene Erklaerungen der KI
- zusaetzliche Beispiele
- Hintergrundwissen aus dem Studium oder dem Internet
- Umschreibungen, die inhaltlich ueber die Folien hinausgehen
- Ausfuellen von Luecken durch Annahmen
- Umdeuten impliziter Inhalte zu expliziten Aussagen

## Anforderungen an KI-generierte Inhalte

Jeder erzeugte Eintrag muss diese Anforderungen erfuellen:

- fachlich belegbar durch die Folien
- sprachlich moeglichst nah an der Quelle
- kurz und klausurorientiert
- ohne Halluzinationen
- ohne neue Begriffe, die nicht in den Folien vorkommen, sofern sie nicht nur strukturelle Labels sind

Best Practice:

- Jeder Eintrag bekommt ein `source`-Feld.
- `source` sollte mindestens PDF-Datei und Foliennummer oder Seitenzahl enthalten.

## Wie Folien der KI lokal bereitgestellt werden sollen

Empfohlene Ordnerstruktur:

- `sources/<fach-id>/`

In jeden Fachordner gehoeren:

- die finalen Vorlesungs-PDFs
- nur relevante, freigegebene Unterlagen
- optional eine kleine `README.md` oder `manifest.json`

Empfohlene Dateibenennung:

- `01_einfuehrung.pdf`
- `02_prozesse.pdf`
- `03_synchronisation.pdf`

Regeln fuer die Bereitstellung:

- Keine gemischten Sammelordner mehrerer Faecher.
- Keine Screenshots statt PDFs.
- Scans nur mit OCR.
- Dateinamen geordnet und stabil halten.
- Alte oder doppelte Versionen entfernen oder klar markieren.

Die optionale `README.md` oder `manifest.json` pro Fach sollte enthalten:

- Fachname
- Semester
- Dozent oder Quelle
- welche Dateien klausurrelevant sind
- welche Dateien ignoriert werden sollen
- besondere Hinweise wie fehlende Seiten oder schlechte OCR-Qualitaet

## Standardprozess fuer neue Trainer

1. Fach-ID festlegen, z.B. `mathe-2` oder `db`.
2. Fachordner `sources/<fach-id>/` anlegen.
3. Relevante PDFs dort gesammelt und sauber benannt ablegen.
4. PDFs sichten und unbrauchbare oder doppelte Dateien entfernen.
5. Inhalte in Themenbloecke strukturieren.
6. Pro Themenblock erzeugen:
   - Lernkarten
   - Klausurfragen mit Antworten
   - Flashcards
7. Jede Aussage gegen die Folien pruefen.
8. Fachdaten in `data/<fach-id>.js` eintragen.
9. Fach in `data/catalog.js` registrieren.
10. Im Browser pruefen, ob das Fach in Uebersicht und Trainer korrekt erscheint.
11. Vor dem Commit eine kurze fachliche Endpruefung gegen die Folien machen.

## Datenformat

Jedes Fach soll diesem Schema folgen:

```js
window.APP_SUBJECTS = window.APP_SUBJECTS || {};

window.APP_SUBJECTS["fach-id"] = {
  id: "fach-id",
  title: "Fachname",
  subtitle: "Untertitel",
  icon: "📘",
  topics: [
    {
      id: "thema-1",
      title: "Thema 1",
      icon: "🧠",
      cards: [
        {
          title: "Begriff",
          body: "Inhalt",
          source: "01_einfuehrung.pdf, Folie 12"
        }
      ],
      questions: [
        {
          question: "Frage",
          answer: "Antwort",
          source: "01_einfuehrung.pdf, Folie 12"
        }
      ],
      flashcards: [
        {
          front: "Frage",
          back: "Antwort",
          source: "01_einfuehrung.pdf, Folie 12"
        }
      ]
    }
  ]
};
```

Regeln:

- `id`, `title`, `topics` sind Pflicht.
- Topic-IDs muessen stabil sein.
- Feldnamen bleiben konsistent.
- `source` ist dringend empfohlen und fuer KI-generierte Inhalte Best Practice.

## Qualitaetssicherung

Vor dem Veroeffentlichen pruefen:

- Stimmt jede Aussage mit den Folien ueberein?
- Wurde an irgendeiner Stelle Wissen ergaenzt?
- Sind die Fragen klausurnah formuliert?
- Sind Antworten kurz, klar und quellengetreu?
- Fehlen Quellenangaben bei kritischen Aussagen?
- Gibt es OCR-Fehler oder offenkundige Missverstaendnisse?

Wenn eine dieser Fragen nicht sicher mit ja beantwortet werden kann, wird der Inhalt nicht veroeffentlicht.

## GitHub Pages

GitHub Pages ist nur die Auslieferungsschicht.

Regeln:

- PDF-Analyse findet lokal oder in einem separaten Vorprozess statt.
- Auf GitHub Pages liegen nur freigegebene statische Dateien.
- Keine API-Keys oder serverseitigen Prozesse im Frontend.
- Deployment erfolgt ueber Commit und Push.

## Was nicht gemacht werden soll

- Keine direkte PDF-Verarbeitung im Browser als Hauptworkflow.
- Keine ungepruefte KI-Ausgabe live nehmen.
- Keine stillen Annahmen bei unklaren Folien.
- Keine Vermischung von Quellen unterschiedlicher Faecher in einer Datendatei.
