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
node scripts/validate_manifest.js sources/rabs/manifest.json
```
