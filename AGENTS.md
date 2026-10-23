<!--
Pflegehinweis: Diese Datei enthält nur Arbeitsregeln für Agenten, die sich
nicht aus dem Code ableiten lassen. Produktregeln gehören in DESIGN_GUIDE.md
bzw. CONTENT_GUIDE.md. Neue Regeln nur ergänzen, wenn ein Agent denselben
Fehler wiederholt. Ziel: unter 150 Zeilen.
-->

# AGENTS.md

Statischer Klausurtrainer für GitHub Pages: Vite 8, Svelte 5, TypeScript
(strict), KaTeX für Formeln. Kein Backend. Fachdaten sind typisierte
TS-Module, keine JSON-Dateien.

## Maßgebliche Guides

Vor jeder Änderung den passenden Guide lesen. Produktregeln stehen nur dort,
nicht hier:

- `DESIGN_GUIDE.md`: UI, App-Struktur, Modi, Komponenten, Barrierefreiheit.
- `CONTENT_GUIDE.md`: Quellenregeln, Standardprozess für Fächer, Datenformat,
  `exercises`, Generatoren, `walkthroughs`, Mathe-Inhalte, Qualitätssicherung.

Bei Widerspruch zwischen dieser Datei und einem Guide gilt der Guide.

## Befehle

Node 24 (`.nvmrc`, `engines`: `>=24 <27`).

```bash
npm ci                       # Setup
npm run dev                  # Dev-Server: http://localhost:5173/Klausurvorbereitung/
npm run typecheck            # svelte-check über src/, scripts/, vite.config.ts
npm run validate             # alle Fachdaten prüfen
npm run validate -- <fach-id>                                  # ein Fach
npm run validate:manifest -- sources/<fach-id>/manifest.json   # nur lokal
npm run validate:sources -- <fach-id> sources/<fach-id>/manifest.json --require-all-manifest-files  # nur lokal
npm run build                # Ausgabe nach dist/
npm run preview              # gebaute Seite lokal ansehen
```

Es gibt keine Unit-Tests und keinen Linter. Die Validatoren in `scripts/`
(Details: `scripts/README.md`) sind die inhaltliche Testsuite.

CI (`.github/workflows/deploy.yml`) führt bei jedem Push auf `main`
`npm ci`, `typecheck`, `validate` und `build` aus und deployt danach sofort
auf GitHub Pages. `validate:manifest` und `validate:sources` laufen nicht in
CI, weil `sources/` nur lokal existiert. Sie müssen lokal laufen.

## Wo was hingehört

- Neues Fach: `src/data/subjects/<fach-id>.ts` anlegen, dann an drei Stellen
  registrieren: `SubjectId` in `src/types/content.ts`, `catalog` und
  `subjectLoaders` in `src/data/catalog.ts`. Keine neue HTML-Datei.
- Datenmodell: `src/types/content.ts`. Vorlage für Fachdaten: Abschnitt
  „Datenformat“ in `CONTENT_GUIDE.md`.
- Rechenmodule: Generator in `src/lib/exerciseGenerators.ts` schreiben und in
  `GENERATORS` eintragen. Fachdaten referenzieren nur die Generator-Id.
- Abläufe: nur deklarative `walkthroughs`-Daten. Die Renderer in
  `src/components/*Walkthrough.svelte` sind generisch und werden nicht pro
  Fach oder Algorithmus erweitert.
- Quellen: `sources/<fach-id>/` mit `manifest.json`, Vorlage in
  `sources-template/`.

## Code-Konventionen

- Nicht offensichtliche Zahlen als benannte Konstante statt mit erklärendem
  Kommentar, denn Kommentare veralten. Vorbild:
  `const NODE_RADIUS = 5;` in `src/components/TreeWalkthrough.svelte`.
- Keine fach- oder algorithmusspezifische Logik in UI-Code. Neue
  didaktische Bedürfnisse werden als generische Option umgesetzt
  (siehe `DESIGN_GUIDE.md`).
- Texte, Kommentare und Inhalte auf Deutsch mit echten Umlauten (`ä`, `ö`,
  `ü`, `ß`), nicht `ae`/`oe`/`ue`.

## Fallstricke

- LaTeX in normalen TS-Strings: Ein einfacher Backslash wird still zum
  Escape. `"\times"` wird zu Tab plus `imes`, `"\neq"` zu Zeilenumbruch plus
  `eq`, `"\sqrt"` zu `sqrt`. KaTeX und `npm run validate` melden das nicht.
  Backslashes in Fachdaten verdoppeln (`"\\times"`). In Generatoren wird
  stattdessen `String.raw` verwendet.
- Fortschritt hängt am Text von Karteikarten-Vorderseiten und Aufgaben.
  Diese Texte nur ändern, wenn es inhaltlich nötig ist.
- `sources/` steht in `.gitignore`. Nie per `git add -f` oder Umbenennung
  einchecken. Auch keine Auszüge, Screenshots oder Volltexte der Folien in
  versionierte Dateien kopieren.
- `vite.config.ts` setzt `base: "/Klausurvorbereitung/"`, weil die Seite
  unter diesem Unterpfad ausgeliefert wird. Links relativ halten wie in
  `src/pages/Home.svelte` (`trainer.html?subject=...`), nie mit führendem `/`.

## Definition of Done

Eine Aufgabe ist erst fertig, wenn alle betroffenen Prüfungen grün sind:

1. `npm run typecheck`
2. `npm run validate`
3. Bei Inhaltsänderungen an einem Fach zusätzlich `validate:manifest` und
   `validate:sources` für dieses Fach (Befehle oben).
4. `npm run build`
5. Bei UI-Änderungen: im Dev-Server die Startseite und
   `trainer.html?subject=<fach-id>` öffnen, betroffene Modi kurz durchklicken,
   auch in schmaler Breite.

Jede Prüfung, die nicht möglich war, im Abschlussbericht ausdrücklich nennen.
Inhalte gelten erst nach der fachlichen Endprüfung gegen die Folien als
freigegeben (`CONTENT_GUIDE.md`, „Qualitätssicherung“).

## Grenzen

Immer:

- Inhalte nur aus den Folien in `sources/<fach-id>/` übernehmen, nie aus
  Eigenwissen. Jeder Eintrag braucht `source`.
- Im Zweifel bei unklaren oder unlesbaren Folienstellen nachfragen statt raten.

Erst fragen:

- Push auf `main` (löst sofort ein Deployment aus).
- Neue npm-Abhängigkeiten oder Architekturwechsel (z. B. Router, SvelteKit,
  Backend).
- Änderungen an Produktregeln in `DESIGN_GUIDE.md` oder `CONTENT_GUIDE.md`.

Nie:

- Quellen-PDFs oder andere Dateien aus `sources/` ins Repo bringen.
- Ungeprüfte KI-Inhalte als fertig melden oder veröffentlichen.
- Produktregeln aus den Guides in diese Datei oder andere Dateien kopieren.
- To-do-Listen oder Agentennotizen in die Guides schreiben.
