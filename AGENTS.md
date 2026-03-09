# AGENTS.md

## Zweck

Dieses Repo enthält einen statischen Klausurtrainer für GitHub Pages.

Agenten arbeiten hier an:

- UI und App-Logik
- Trainerdaten in `data/`
- Inhaltsprozessen für neue Fächer
- Validierung und Qualitätssicherung

## Verbindliche Referenzen

Vor inhaltlichen oder gestalterischen Änderungen sind diese Dateien maßgeblich:

- `DESIGN_GUIDE.md` für UI, App-Struktur und Benutzerfreundlichkeit
- `CONTENT_GUIDE.md` für Quellenregeln und die Erstellung neuer Trainingsinhalte

Diese Datei enthält nur Arbeitsregeln für Agenten, keine Produktregeln im Detail.

## Projektstruktur

- `index.html` ist die Fachübersicht
- `trainer.html` ist die generische Trainerseite
- `assets/` enthält gemeinsames CSS und JavaScript
- `data/` enthält Fachdaten und den Katalog
- `scripts/` enthält Validatoren und Hilfsskripte
- `sources/` ist nur für lokale Quelldateien gedacht und darf nicht öffentlich gepusht werden

## Arbeitsregeln

- Keine neue HTML-Datei pro Fach anlegen.
- Neue Fächer werden über `data/<fach-id>.js` und `data/catalog.js` ergänzt.
- Inhalte nie aus Eigenwissen ergänzen.
- Folien haben immer Vorrang.
- `source` ist bei jedem Inhaltseintrag Pflicht.
- Beispiele werden in fachlich passende Inhalte integriert, nicht als lose Sonderblöcke abgetrennt.
- Umlaute normal mit `ä`, `ö`, `ü` und `ß` schreiben.
- `sources/` nur lokal verwenden, nicht ins öffentliche Repo bringen.

## Standardablauf für neue oder überarbeitete Trainer

1. Quellen in `sources/<fach-id>/` prüfen.
2. Inhalte in Foliencluster und Themenblöcke gliedern.
3. Sicherheits-Pass: nur explizit belegbare Aussagen übernehmen.
4. Verdichtungs-Pass: fehlende explizite Aussagen aus denselben Folien ergänzen.
5. Inhalte in `data/<fach-id>.js` eintragen.
6. Fach in `data/catalog.js` registrieren, falls neu.
7. Validatoren und kurze Laufzeitprüfungen ausführen.

## Prüfschritte vor Abschluss

Mindestens diese Prüfungen laufen lassen, wenn betroffen:

- `node --check data/<fach-id>.js`
- `node scripts/validate_subject_data.js data/<fach-id>.js <fach-id>`
- `node scripts/validate_manifest.js sources/<fach-id>/manifest.json`
- fachspezifische Heuristiken aus `scripts/`, falls vorhanden

Wenn eine Prüfung nicht möglich war, muss das klar benannt werden.

## No-Gos

- keine ungeprüften KI-Inhalte freigeben
- keine Quellen-PDFs ins öffentliche Repo pushen
- keine fachspezifische Sonderlogik in die UI einbauen
- keine Produktregeln doppelt in mehreren Dateien pflegen
- keine To-do-Listen oder Agentennotizen in die dauerhaften Guides schreiben
