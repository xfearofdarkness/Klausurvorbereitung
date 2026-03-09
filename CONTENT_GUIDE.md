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

## Verbindliche Anforderungen an Trainerinhalte

Alle inhaltlichen Anforderungen an Trainer stehen in dieser Datei und nicht verteilt über mehrere Guides.

Jeder Trainer und jeder einzelne Eintrag muss diese Anforderungen erfüllen:

- Die Folien sind die alleinige fachliche Referenz.
- Aussagen dürfen nur aufgenommen werden, wenn sie explizit auf den Folien belegbar sind.
- Fachbegriffe, Definitionen, Bedingungen, Vor- und Nachteile und Formulierungen werden so nah wie möglich an den Folien übernommen.
- Die Stoffdichte muss zur Foliendichte passen; ein Thema darf nicht auf ein Sicherheitsminimum ausgedünnt werden, wenn die Folien deutlich mehr explizite Aussagen enthalten.
- Zu einem Thema gehören nicht nur Definitionen, sondern auch die auf den Folien genannten Abläufe, Voraussetzungen, Varianten, Beispiele, Formeln, Systemaufrufe und Randbedingungen.
- Unklare, abgeschnittene oder OCR-fehlerhafte Stellen werden nicht geraten.
- Widersprüche zwischen Folien müssen manuell geprüft werden.
- Jeder Eintrag erhält ein `source`-Feld mit Datei und Folie oder Seite.
- Ohne Quellenangabe wird kein KI-generierter Inhalt freigegeben.
- Erst wenn Quellentreue und ausreichende fachliche Abdeckung gemeinsam erfüllt sind, gilt ein Thema als freigabefähig.

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

Verbindlich:

- Jeder Eintrag bekommt ein `source`-Feld.
- `source` enthaelt mindestens PDF-Datei und Foliennummer oder Seitenzahl.

## Abdeckungsregeln

Quellentreue allein reicht nicht aus. Der Trainer soll auch fachlich ausreichend dicht sein.

Deshalb gelten zusaetzlich diese Regeln:

- Ein Thema darf nicht nur auf Sicherheitsminimum reduziert werden, wenn die Folien deutlich mehr explizite Aussagen enthalten.
- Pro Themenblock sollen nicht nur Definitionen, sondern auch Verfahren, Eigenschaften, Vor- und Nachteile, Bedingungen, Beispiele aus den Folien und genannte Systemaufrufe aufgenommen werden, sofern sie explizit auf den Folien stehen.
- Wenn eine Folie mehrere eigenstaendige Aussagen enthaelt, duerfen daraus mehrere Eintraege entstehen.
- Bild- oder Beispiel-Folien duerfen nur dann ausgelassen werden, wenn sie keine explizite fachliche Aussage tragen.
- Rechen- oder Ablaufbeispiele aus den Folien sollen uebernommen werden, wenn sie klausurrelevant wirken und textlich belegbar sind.

Warnsignal fuer Unterabdeckung:

- Ein Themenblock ist wesentlich kuerzer als die behandelten Folien.
- Es sind nur Grunddefinitionen vorhanden, aber keine Bedingungen, Nachteile, Varianten oder Beispiele.
- Die Folien nennen konkrete Algorithmen, Aufrufe oder Regeln, die im Trainer fehlen.

## Empfohlener Erstellungsprozess

Der Standardprozess ist zweistufig:

1. Sicherheits-Pass:
   - nur explizit belegbare Aussagen sammeln
   - unklare oder fehlerhafte Stellen verwerfen
   - Grundstruktur der Themen anlegen
2. Verdichtungs-Pass:
   - pro Thema alle weiteren expliziten Folienaussagen nachziehen
   - fehlende Nachteile, Bedingungen, Varianten, Beispiele und Systemaufrufe ergaenzen
   - Pruefen, ob die Stoffdichte grob zur Foliendichte passt

Erst nach beiden Schritten ist ein Trainer fachlich vollstaendig genug fuer die Freigabe.

## Regeln fuer die Segmentierung

Die Qualitaet haengt stark davon ab, wie Folien zuerst zerlegt werden.

Deshalb:

- Zuerst nach Folienclustern arbeiten, nicht sofort nach Endkarten.
- Ein Foliencluster umfasst zusammengehoerende Folien eines Unterthemas, z. B. `SJF`, `Round Robin`, `Shared Memory in UNIX`.
- Fuer jedes Cluster werden explizit gesammelt:
  - Kerndefinition
  - Ablauf oder Mechanismus
  - Bedingungen oder Voraussetzungen
  - Vor- und Nachteile
  - Beispiele oder Spezialfaelle
  - konkrete API-, Systemaufruf- oder Formelangaben
- Erst danach werden daraus Cards, Questions und Flashcards gebildet.

## Typische Prozessfehler und Gegenmassnahmen

Beobachtete Fehlerbilder:

- Zu freie Altformulierungen statt Folienwortlaut
- Unterabdeckung nach einer harten Bereinigung
- Fehlende Quellenangaben pro Eintrag
- Zu grobe Themenbloecke, in denen Einzelaspekte verloren gehen

Gegenmassnahmen:

- Jede Generierung beginnt mit einer strukturierten Extraktionsliste pro Foliencluster.
- Nach der Bereinigung folgt immer ein zweiter Pass auf Vollstaendigkeit.
- `source` ist Pflicht und wird technisch validiert.
- Vor Freigabe wird jedes Thema gegen eine kurze Checkliste auf fehlende Teilaspekte geprueft.

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
5. Inhalte zuerst in Foliencluster und dann in Themenbloecke strukturieren.
6. Sicherheits-Pass: nur explizit belegbare Aussagen extrahieren.
7. Verdichtungs-Pass: fehlende explizite Aussagen aus den gleichen Folienclustern nachziehen.
8. Pro Themenblock erzeugen:
   - Lernkarten
   - Klausurfragen mit Antworten
   - Flashcards
9. Jede Aussage gegen die Folien pruefen.
10. Fachdaten in `data/<fach-id>.js` eintragen.
11. Fach in `data/catalog.js` registrieren.
12. Validatoren ausfuehren.
13. Im Browser pruefen, ob das Fach in Uebersicht und Trainer korrekt erscheint.
14. Vor dem Commit eine kurze fachliche Endpruefung gegen die Folien machen.

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
- `source` ist Pflicht.

## Qualitaetssicherung

Vor dem Veroeffentlichen pruefen:

- Stimmt jede Aussage mit den Folien ueberein?
- Wurde an irgendeiner Stelle Wissen ergaenzt?
- Sind die Fragen klausurnah formuliert?
- Sind Antworten kurz, klar und quellengetreu?
- Fehlen Quellenangaben bei kritischen Aussagen?
- Gibt es OCR-Fehler oder offenkundige Missverstaendnisse?
- Ist die Stoffdichte pro Thema plausibel im Verhaeltnis zu den zugrunde liegenden Folien?
- Fehlen benoetigte Teilaspekte wie Bedingungen, Nachteile, Varianten, Beispiele oder konkrete Aufrufe?

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
