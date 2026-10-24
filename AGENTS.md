<!--
Pflegehinweis: Diese Datei enthält nur Arbeitsregeln für Agenten, die sich
nicht aus dem Code ableiten lassen. Produktregeln gehören in DESIGN_GUIDE.md
bzw. CONTENT_GUIDE.md. Neue Regeln nur ergänzen, wenn ein Agent denselben
Fehler wiederholt. Ziel: unter 150 Zeilen.
-->

# AGENTS.md

Statischer Klausurtrainer: Vite 8, Svelte 5, TypeScript (strict), KaTeX.
Kein Backend. Auslieferung auf Vercel (`https://learn.jamiehuta.com`,
`base` `/`). GitHub Pages bleibt die Weiterleitung vom alten Pfad.
Fachdaten sind Autorendateien in `content/<fach-id>/`, die ein Compiler
beim Build in JSON übersetzt.

## Maßgebliche Guides

Vor jeder Änderung den passenden Guide lesen. Produktregeln stehen nur dort,
nicht hier:

- `DESIGN_GUIDE.md`: UI, App-Struktur, Modi, Komponenten, Barrierefreiheit.
- `CONTENT_GUIDE.md`: Quellenregeln, Standardprozess für Fächer, Datenformat,
  `exercises`, Generatoren, `walkthroughs`, Mathe-Inhalte, Qualitätssicherung.

Bei Widerspruch zwischen dieser Datei und einem Guide gilt der Guide.

## Befehle

Node 24 (`.nvmrc`, `engines`: `24.x`).

```bash
npm ci                       # Setup
npm run dev                  # Dev-Server: http://localhost:5173/
npm run typecheck            # svelte-check über src/, scripts/, vite.config.ts
npm run validate             # alle Fachdaten prüfen
npm run validate -- <fach-id>                                  # ein Fach
npm run validate:manifest -- sources/<fach-id>/manifest.json   # nur lokal
npm run validate:sources -- <fach-id> sources/<fach-id>/manifest.json --require-all-manifest-files  # nur lokal
npm run test                 # Vitest: Fortschritt und Generatoren
npm run build                # Ausgabe nach dist/, inklusive /llms.txt und /content/
npm run preview              # gebaute Seite lokal ansehen
```

Es gibt keinen Linter. Vitest prüft Fortschritt und Generatoren. Die
Validatoren in `scripts/` (Details: `scripts/README.md`) prüfen die Fachdaten.

Vercel baut über `vercel.json` (`typecheck`, `validate`, `test`, `build`) und
liefert `dist/` aus. Schlägt `validate` fehl, gibt es kein Deployment.
Node 24 kommt aus `.nvmrc`; `engines.node` ist `24.x`, damit Vercel diese
Major-Version nimmt. Das Vercel-Projekt braucht keine Env-Variablen.
`sources/` steht zusätzlich in `.vercelignore` und wird nicht hochgeladen.

GitHub Pages (`.github/workflows/deploy.yml`) ist nur noch die
Weiterleitung: bei Push auf `main` baut sie mit
`VITE_BASE=/Klausurvorbereitung/` und `VITE_PAGES_REDIRECT=1` und leitet
auf https://learn.jamiehuta.com um, inklusive lokalem Fortschritt im
URL-Fragment. `validate:manifest`
und `validate:sources` laufen nicht in CI, weil `sources/` nur lokal
existiert. Sie müssen lokal laufen.

## Wo was hingehört

- Neues Fach: `content/<fach-id>/` mit `fach.md` und Themendateien anlegen,
  dann an drei Stellen registrieren: `SubjectId` in `src/types/content.ts`,
  `catalog` und `subjectLoaders` in `src/data/catalog.ts`. Keine neue
  HTML-Datei.
- Datenformat und Vorlage: Abschnitt „Datenformat“ in `CONTENT_GUIDE.md`.
  Compiler: `scripts/content_compiler.ts`, eingebunden über
  `scripts/vite_content_plugin.ts`. Datenmodell: `src/types/content.ts`.
- Rechenmodule: Generator in `src/lib/generators/<bereich>.ts` schreiben und in
  `GENERATORS` in `src/lib/exerciseGenerators.ts` eintragen. Fachdaten
  referenzieren nur die Generator-Id.
- Öffentliche Agentendateien (`/llms.txt`, `/content/<fach>.json`, `.md`)
  erzeugt der Build aus den kompilierten Fachdaten. Format:
  `CONTENT_GUIDE.md`. Nie `sources/`.
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
- Ausgelieferter Text enthält keinen Geviertstrich (—). Halbgeviertstriche
  in Zahlenbereichen (14–18) bleiben erlaubt.

## Fallstricke

- LaTeX steht in Autorendateien mit einfachem Backslash. Ausnahme: im
  JSON-Block eines Ablaufs und in normalen TS-Strings wird ein einfacher
  Backslash still zum Escape (`"\times"` wird zu Tab plus `imes`), dort
  verdoppeln. In Generatoren wird `String.raw` verwendet.
- Fortschritt hängt an der `id` von Karteikarten und Aufgaben. Eine Id nie
  ändern oder für einen anderen Eintrag wiederverwenden.
- `sources/` steht in `.gitignore` und `.vercelignore`. Nie per `git add -f`
  oder Umbenennung einchecken. Auch keine Auszüge, Screenshots oder
  Volltexte der Folien in versionierte Dateien kopieren.
- `base` kommt aus `VITE_BASE`, Standard `/`. Links relativ halten wie in
  `src/pages/Home.svelte` (`trainer.html?subject=...`), nie mit führendem `/`.

## Definition of Done

Eine Aufgabe ist erst fertig, wenn alle betroffenen Prüfungen grün sind:

1. `npm run typecheck`
2. `npm run test`
3. `npm run validate`
4. Bei Inhaltsänderungen an einem Fach zusätzlich `validate:manifest` und
   `validate:sources` für dieses Fach (Befehle oben).
5. `npm run build`
6. Bei UI-Änderungen: im Dev-Server die Startseite und
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

- Push auf `main` (löst das Pages-Deployment aus; Vercel ebenso, sobald
  das Projekt verbunden ist).
- Neue npm-Abhängigkeiten oder Architekturwechsel (z. B. Router, SvelteKit,
  Backend).
- Änderungen an Produktregeln in `DESIGN_GUIDE.md` oder `CONTENT_GUIDE.md`.

Nie:

- Quellen-PDFs oder andere Dateien aus `sources/` ins Repo bringen.
- Ungeprüfte KI-Inhalte als fertig melden oder veröffentlichen.
- Produktregeln aus den Guides in diese Datei oder andere Dateien kopieren.
- To-do-Listen oder Agentennotizen in die Guides schreiben.
