# Skripte

## Manifest validieren

Prueft ein lokales Quellen-Manifest auf:

- Pflichtfelder
- gueltige Dateieintraege
- doppelte Pfade
- doppelte oder lueckenhafte Reihenfolge
- Existenz der referenzierten PDF-Dateien

Beispiel:

```bash
npm run validate:manifest -- sources/<fach-id>/manifest.json
```

## Fachdaten validieren

Prueft die typisierten Fachdaten aus `src/data/subjects/` auf:

- Pflichtfelder
- eindeutige Topic-IDs
- Quellenangaben
- gueltige Cards, Questions, Flashcards, Exercises und Walkthroughs

Beispiele:

```bash
npm run validate
npm run validate -- <fach-id>
```

## Quellenabdeckung validieren

Prueft, ob die `source`-Angaben einer Fachdaten-Datei nur Dateien
referenzieren, die im zugehoerigen Manifest stehen.

Optional kann erzwungen werden, dass jede Manifest-Datei mindestens
einmal referenziert wird.

Beispiel:

```bash
npm run validate:sources -- <fach-id> sources/<fach-id>/manifest.json --require-all-manifest-files
```
