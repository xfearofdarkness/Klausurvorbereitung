# Content Guide

## Ziel

Dieser Guide regelt die Erstellung neuer Trainingsinhalte.

Er gilt für:

- manuell erstellte Inhalte
- KI-unterstützt erzeugte Inhalte
- spätere PDF-zu-Trainer-Prozesse

## Grundregeln

- Vorlesungsfolien haben immer das letzte Wort.
- Die Folien sind die einzige fachliche Referenz für Lernkarten, Karteikarten (`flashcards`) und Abläufe (`walkthroughs`).
- Übungsaufgaben (`exercises`) dürfen zusätzlich aus offiziellen Übungsblättern des Kurses stammen oder Verfahren der Folien anwenden. Lösungen stammen nie aus KI-Wissen (siehe „Übungsaufgaben“).
- Wenn etwas nicht explizit auf den Folien steht, darf es nicht in den Trainer.
- Bei Abweichungen zwischen Trainer und Folien gelten immer die Folien.
- Unklare, abgeschnittene oder OCR-fehlerhafte Stellen werden nicht geraten.
- Widersprüche zwischen Folien werden manuell geprüft.

## Anforderungen an Trainerinhalte

Jeder Eintrag muss diese Anforderungen erfüllen:

- fachlich explizit durch die Folien belegbar
- sprachlich so nah wie möglich an den Folien
- kurz, klar und klausurorientiert
- ohne Halluzinationen, Fremdwissen oder Transferwissen
- mit ausreichender Stoffdichte im Verhältnis zu den zugrunde liegenden Folien
- mit `source`-Feld aus Datei plus Folie oder Seite

Zusätzlich gilt:

- Ein Thema darf nicht auf ein Sicherheitsminimum ausgedünnt werden, wenn die Folien deutlich mehr explizite Aussagen enthalten.
- Wenn eine Folie mehrere eigenständige Aussagen enthält, dürfen daraus mehrere Einträge entstehen.
- Beispiele werden nicht als lose Sonderblöcke geführt, sondern in die fachlich passende Lernkarte oder Karteikarte integriert.
- Bild- oder Beispiel-Folien werden nur ausgelassen, wenn sie keine explizite fachliche Aussage tragen.

Warnsignale für Unterabdeckung:

- Ein Themenblock ist deutlich kürzer als die zugrunde liegenden Folien.
- Es gibt nur Definitionen, aber keine Bedingungen, Varianten, Nachteile oder Beispiele.
- Sichtbare Teilaspekte der Folien fehlen im Trainer vollständig.

## Erlaubte KI-Transformationen

Erlaubt:

- Folien in Themenblöcke und Foliencluster gliedern
- Aussagen aus Folien in Lernkarten, Karteikarten und Abläufe überführen
- Formulierungen leicht glätten, ohne neue Aussage hinzuzufügen
- mehrere explizite Aussagen einer Folie in mehrere Einträge aufteilen

Nicht erlaubt:

- eigene Erklärungen der KI
- zusätzliche Beispiele, die nicht aus den Folien stammen
- Ergänzungen aus Internet, Lehrbuch oder Allgemeinwissen
- Umdeuten impliziter Inhalte zu expliziten Aussagen
- Ausfüllen von Lücken durch Annahmen

## Bereitstellung der Quellen

Empfohlene Struktur:

- `sources/<fach-id>/`

In jeden Fachordner gehören:

- die finalen Vorlesungs-PDFs
- nur relevante, freigegebene Unterlagen
- optional eine `manifest.json` oder `README.md`

Regeln:

- keine gemischten Sammelordner mehrerer Fächer
- keine Screenshots statt PDFs
- Scans nur mit OCR
- Dateinamen geordnet und stabil halten
- alte oder doppelte Versionen entfernen oder klar markieren

Eine optionale `manifest.json` oder `README.md` sollte enthalten:

- Fachname
- Semester
- Quelle oder Dozent
- relevante Dateien
- auszuschließende Dateien
- besondere Hinweise zu OCR, fehlenden Seiten oder Qualität

## Standardprozess

1. Fach-ID festlegen.
2. `sources/<fach-id>/` anlegen und PDFs ablegen.
3. Quellen sichten und unbrauchbare Dateien entfernen.
4. Inhalte zuerst in Foliencluster, dann in Themenblöcke zerlegen.
5. Sicherheits-Pass: nur explizit belegbare Aussagen extrahieren.
6. Verdichtungs-Pass: fehlende explizite Aussagen aus denselben Folienclustern ergänzen.
7. Lernkarten (`cards`) und Karteikarten (`flashcards`) erzeugen.
8. Jede Aussage gegen die Folien prüfen.
9. Inhalte in `content/<fach-id>/` schreiben (Abschnitt „Datenformat“).
10. Fach in `src/data/catalog.ts` und `SubjectId` registrieren.
11. Validatoren ausführen.
12. Im Browser kurz prüfen.
13. Vor Freigabe eine fachliche Endprüfung gegen die Folien machen.

## Übungsaufgaben (`exercises`)

Der optionale Themenabschnitt `exercises` enthält Aufgaben zum Selbstrechnen.
Sie stammen aus zwei Quellen:

- **Übungsblätter:** Aufgaben eines offiziellen Übungsblatts. Sie werden nicht
  wortgleich übernommen, damit sich Lösungen zum Blatt nicht abschreiben
  lassen: Aufgaben mit konkreten Daten werden zu Varianten mit anderen Daten
  (`ref` z. B. "Aufgabe 7 (Variante)") oder zu Rechenmodulen; offene Aufgaben
  werden so umformuliert, dass sie denselben Stoff üben. Jede Variante muss
  lösbar sein und darf die Lösung einer anderen Blattaufgabe nicht verraten.
- **Folien:** Aufgaben, die ein auf den Folien beschriebenes oder
  vorgerechnetes Verfahren anwenden, etwa ein Scheduling-Verfahren auf andere
  Prozessdaten. Sie verlangen nur Wissen und Vorgehen, die auf den Folien
  stehen, und verwenden deren Begriffe.

Regeln:

- Lösungen werden nie erfunden oder aus KI-Wissen ergänzt. Feste Aufgaben
  haben keine hinterlegte Lösung; Rechenmodule berechnen sie algorithmisch.
- Theoriefragen eines Übungsblatts, deren Antwort explizit auf den Folien steht, dürfen zusätzlich als `flashcards` mit Folien-`source` geführt werden.
- `ref` ist die sichtbare Kurzreferenz (z. B. "Aufgabe 5" oder "FCFS"),
  `source` die Pflicht-Quellenangabe: die Aufgabe des Übungsblatts oder die
  Folien, die das Verfahren erklären und vorrechnen.
- `note` ist optional für Hinweise, die sich direkt aus den Quellen ergeben (z. B. auf welche Foliencluster sich die Aufgabe bezieht).

### Generierte Rechenmodule

Rechenaufgaben, deren Lösung sich eindeutig berechnen lässt, dürfen als
generierte Rechenmodule geführt werden (`generator`-Feld statt `task`):

- Ein Modul entspricht genau einem Aufgabentyp: einer Aufgabe eines
  Übungsblatts (Kennzeichnung z. B. "Aufgabe 5 (Typ)") oder einem Verfahren
  der Folien. `ref` und `source` verweisen darauf.
- Die Zahlen werden zufällig erzeugt; die Lösung samt Rechenweg wird vom
  Generator algorithmisch berechnet — nie aus KI-Wissen ergänzt. Der
  Rechenweg folgt dem Vorgehen und den Regeln der Folien.
- Rechnen die Folien das Verfahren vor, muss der Generator dieses Beispiel
  exakt nachrechnen. Das prüft der Validator.
- Generatoren sind generisch und leben in `src/lib/generators/`;
  `src/lib/exerciseGenerators.ts` registriert die Ids. Die Fachdaten
  referenzieren sie nur deklarativ über die Generator-Id.
- Der Validator prüft jede Generator-Referenz und erzeugt Stichproben.

## Abläufe (`walkthroughs`)

Der optionale Themenabschnitt `walkthroughs` bildet visuelle oder
algorithmische Schrittfolgen ab, ohne fachliche Sonderlogik in die UI
einzubauen.

Regeln:

- Jeder Ablauf hat `id`, `title`, `source`, `visual` und `steps`.
- `visual` verwendet nur generische Visualtypen: `matrix`, `array`, `tree` oder `graph`.
- Schritte enthalten explizit belegbare Aussagen aus den Quellen.
- Agenten erzeugen deklarative Schritt- und Highlight-Daten, keinen neuen UI-Code.
- Schrittquellen sind optional, wenn der Ablauf bereits einen genauen Folienbereich als `source` hat.
- Abläufe erscheinen im Modus „Lernen“. `afterCard` nennt den Titel der Lernkarte, die der Ablauf veranschaulicht; er steht direkt danach. Ohne `afterCard` steht er am Ende des Themas. Der Titel muss im Thema eindeutig sein.

## Mathematische Inhalte

Für Fächer mit `features.math: true` gilt:

- Formeln werden als LaTeX geschrieben: `\(...\)` inline, `\[...\]` abgesetzt.
- In Karten, Fragen und Aufgaben steht LaTeX unverändert mit einfachem Backslash (`\(`, `\frac`). Nur im JSON-Block eines Ablaufs gelten JSON-Regeln: dort Backslashes verdoppeln (`\\frac`).
- Formeln werden zeichengetreu aus den Folien übernommen, nicht umgeformt.

## Karteikarten (`flashcards`)

Karteikarten sind das einzige Abfrageformat. Eine Aussage wird nur einmal
abgefragt: keine zweite Karte, die dieselbe Frage anders formuliert.

- Die Vorderseite stellt genau eine Frage, die Rückseite beantwortet sie vollständig.
- Zusammengehörige Teilaussagen (z. B. alle Bedingungen einer Definition) gehören auf eine Karte; voneinander unabhängige Aussagen auf getrennte Karten.

## Datenformat

Fachdaten sind Autorendateien in `content/<fach-id>/`. Ein Compiler
(`scripts/content_compiler.ts`) übersetzt sie beim Build und bei jeder
Validierung in JSON. Er bricht bei jedem Formatfehler mit Datei und Zeile ab.

- `fach.md`: nur der Kopfbereich mit `id`, `title`, `subtitle`, `icon` und
  optional `math: true`.
- Ein Thema pro Datei `NN-<thema-id>.md`. `NN` legt die Reihenfolge fest, die
  `id` im Kopf muss zum Dateinamen passen.

~~~markdown
---
id: thema-1
title: Thema 1
icon: 🧠
---

## Karte: Begriff
tag: def
quelle: 01.pdf, Folie 12

Inhalt der Lernkarte, auch über mehrere Zeilen, HTML und \(LaTeX\) erlaubt.

## Frage: Was ist ein Begriff?
id: begriff-definition
quelle: 01.pdf, Folie 12

Antwort auf der Rückseite.

## Aufgabe: Aufgabe 1
id: aufgabe-1
quelle: uebungen.pdf, Aufgabe 1

Aufgabentext.

## Ablauf: Titel des Ablaufs
nach: Begriff
quelle: 01.pdf, Folien 13-15

```json
{ "id": "ablauf-1", "visual": { … }, "steps": [ … ] }
```
~~~

Aufbau eines Eintrags: Überschrift `## Art: …`, direkt darunter die Felder
(`name: wert`, je eins pro Zeile), eine Leerzeile, dann der Text. Die
Überschrift trägt den Titel der Lernkarte, die Vorderseite der Karteikarte,
die `ref` der Aufgabe bzw. den Titel des Ablaufs.

| Art | Felder (Pflicht fett) | Text |
| --- | --- | --- |
| `Karte` | **`quelle`**, `tag` | Inhalt |
| `Frage` | **`id`**, **`quelle`** | Rückseite |
| `Aufgabe` | **`id`**, **`quelle`**, `generator`, `notiz` | Aufgabentext, entfällt bei `generator` |
| `Ablauf` | **`quelle`**, `nach` (= `afterCard`) | ein `json`-Block mit `id`, `visual`, `steps` und optional `intro`, `legend` |

Pflicht:

- `source` (Feld `quelle`) bei jedem Eintrag
- stabile Topic-IDs
- `id` bei Karteikarten und Aufgaben: innerhalb des Themas eindeutig, nur
  `a-z`, `0-9` und `-`. Der lokale Fortschritt hängt an dieser Id, nicht am
  Text. Eine Id wird einmal vergeben und nie geändert oder wiederverwendet;
  Texte dürfen sich ändern, ohne dass Markierungen verloren gehen.

Optional:

- `math` im Kopf von `fach.md`
- Aufgaben und Abläufe pro Thema
- `tag` bei Lernkarten: `wichtig`, `formel`, `def`, `satz`, `beispiel`

## Qualitätssicherung

Vor Veröffentlichung prüfen:

- Stimmt jede Aussage mit den Folien überein?
- Wurde irgendwo Wissen ergänzt?
- Sind Quellenangaben vollständig?
- Ist die Stoffdichte pro Thema plausibel?
- Fehlen erkennbare Teilaspekte der Folien?
- Gibt es OCR-Fehler oder Missverständnisse?

Wenn eine dieser Fragen nicht sicher mit ja beantwortet werden kann, wird der Inhalt nicht veröffentlicht.

## Auslieferung

Produktion ist https://learn.jamiehuta.com auf Vercel (`base` `/`).
GitHub Pages ist nur die Weiterleitung vom alten Pfad. PDF-Analyse
findet lokal statt. Öffentlich liegen nur freigegebene statische
Dateien, keine API-Keys und kein Server.

## Öffentliche Inhaltsdateien

Der Build schreibt aus den kompilierten Fachdaten, nie aus `sources/`:

- `/llms.txt` beschreibt die Seite und verlinkt die Dateien.
- `/content/index.json` listet die Fächer (`format`, `site`, `id`,
  `title`, `subtitle`, Pfade zu Markdown und JSON).
- `/content/<fach-id>.json` enthält Lernkarten, Karteikarten (mit
  Rückseite), Aufgaben und Abläufe, wie die App sie lädt. Aufgaben mit
  `generator` haben zusätzlich `example` (Seed 1, Aufgabe und Lösung).
  Aufgaben ohne Generator haben keine hinterlegte Lösung.
- `/content/<fach-id>.md` ist derselbe Stoff als Text: Lernen,
  Karteikarten, Üben, Abläufe als Schritttext.
- Jedes Thema nennt in JSON (`modes`) und unter der Markdown-Überschrift,
  welche Modi es gibt: `Lernen: 12. Karteikarten: 8. Aufgaben: keine.`
  Die Zahl bei Lernen zählt Lernkarten und Abläufe. `keine` heißt, der
  Modus ist in dem Thema nicht wählbar. `/llms.txt` sagt: Üben gibt es
  nur für Themen mit Aufgaben.

`format` ist `1`. Fortschritts-Ids sind die `id`s der Karteikarten und
Aufgaben.

## Was nicht gemacht werden soll

- keine direkte PDF-Verarbeitung im Browser als Hauptworkflow
- keine ungeprüfte KI-Ausgabe live nehmen
- keine stillen Annahmen bei unklaren Folien
- keine Vermischung mehrerer Fächer in einer Datendatei
