# Skripte

## Manifest validieren

Prüft ein lokales Quellen-Manifest auf:

- Pflichtfelder
- gültige Dateieinträge
- doppelte Pfade
- doppelte oder lückenhafte Reihenfolge
- Existenz der referenzierten PDF-Dateien

Beispiel:

```bash
npm run validate:manifest -- sources/<fach-id>/manifest.json
```

## Fachdaten validieren

Prüft die typisierten Fachdaten aus `src/data/subjects/` auf:

- Pflichtfelder
- eindeutige Topic-IDs
- Quellenangaben
- eindeutige Fortschritts-Schlüssel (keine doppelten Karteikarten oder Aufgaben pro Thema)
- gültige Cards, Flashcards, Exercises und Walkthroughs, `afterCard` verweist auf genau eine Lernkarte

Beispiele:

```bash
npm run validate
npm run validate -- <fach-id>
```

## Quellenabdeckung validieren

Prüft, ob die `source`-Angaben einer Fachdaten-Datei nur Dateien
referenzieren, die im zugehörigen Manifest stehen.

Optional kann erzwungen werden, dass jede Manifest-Datei mindestens
einmal referenziert wird.

Beispiel:

```bash
npm run validate:sources -- <fach-id> sources/<fach-id>/manifest.json --require-all-manifest-files
```
