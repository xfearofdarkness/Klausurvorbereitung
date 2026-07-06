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
node scripts/validate_manifest.js sources/<fach-id>/manifest.json
```

## Quellenabdeckung validieren

Prueft, ob die `source`-Angaben einer Fachdaten-Datei nur Dateien
referenzieren, die im zugehoerigen Manifest stehen.

Optional kann erzwungen werden, dass jede Manifest-Datei mindestens
einmal referenziert wird.

Beispiel:

```bash
node scripts/validate_source_coverage.js data/<fach-id>.js <fach-id> sources/<fach-id>/manifest.json --require-all-manifest-files
```
