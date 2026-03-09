# Styleguide und Migrationsplan

## Ausgangslage

Aktuell gibt es zwei HTML-Dateien:

- `index.html` als Einstieg mit Fachkarten
- `rabs.html` als vollständiger Trainer mit Layout, Daten und Logik in einer Datei

Die gute Nachricht: Der Inhalt ist bereits halb-strukturiert. In `rabs.html` liegen die Lerninhalte nicht im HTML-Markup verteilt, sondern schon als `DATA`-Array im Script. Das eigentliche Problem ist daher nicht fehlende Struktur, sondern die enge Kopplung:

- Inhalte, Design und Logik leben in einer Datei
- neue Fächer erfordern Kopieren kompletter HTML-Dateien
- Fragen sind nicht unabhängig vom Trainer wiederverwendbar
- die Fachübersicht in `index.html` wird manuell gepflegt

Ziel sollte daher sein: **statische Dateien, kein Backend, kein Build-Prozess, aber klar getrennte Daten und wiederverwendbare Trainer-Logik.**

---

## Styleguide

## 1. Produktprinzip

Die Seite ist ein statischer Klausurtrainer für mehrere Uni-Fächer.

Regeln:

- Kein Framework, solange HTML, CSS und JavaScript ausreichen.
- Kein Backend.
- Keine Datenbank.
- Neue Fächer sollen primär durch neue Datendateien entstehen, nicht durch neue HTML-Seiten.
- Die Seite muss lokal und auf einfachem Static Hosting nutzbar bleiben.

## 2. Seitenstruktur

Empfohlene Struktur:

- `index.html`: Übersicht aller Fächer
- `trainer.html`: generische Trainer-Seite für genau ein Fach
- `assets/styles.css`: gemeinsames Styling
- `assets/app.js`: generische Trainer-Logik
- `assets/index.js`: Logik für die Startseite
- `data/catalog.js`: Liste aller Fächer
- `data/rabs.js`: Inhalte für RABS
- `data/<fach>.js`: Inhalte weiterer Fächer

Wichtig:

- Nicht pro Fach eine komplette HTML-Datei anlegen.
- Pro Fach nur eine Datendatei anlegen.

## 3. Visuelle Richtung

Die visuelle Sprache aus `rabs.html` ist die stärkere Basis und sollte zum Standard werden.

Beibehalten:

- dunkles Interface
- klare Kartenstruktur
- starke farbliche Akzente pro Interaktion
- kompakte, gut lesbare Lernoberfläche
- Sticky-Header und Tabs

Vereinheitlichen:

- nur ein zentrales Farbsystem
- nur eine Typografie-Definition
- nur ein Satz UI-Komponenten
- keine Inline-Styles in gerenderten HTML-Strings, wenn es per Klasse lösbar ist

## 4. Design-Tokens

Zentrale Tokens nur in `:root` definieren:

- Farben: `--bg`, `--surface`, `--surface-alt`, `--border`, `--text`, `--muted`, `--accent`, `--success`, `--warning`, `--danger`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`
- Spacing: `--space-1` bis `--space-6`
- Schatten und Übergänge: `--shadow-sm`, `--transition-fast`

Regeln:

- Keine neuen Hex-Farben direkt in Komponenten.
- Keine abweichenden Randradien pro Seite.
- Statusfarben konsistent benutzen:
  - Erfolg = gewusst
  - Warnung = wiederholen
  - Accent = aktive Navigation

## 5. Typografie

Empfehlung:

- UI-Schrift: `Outfit`
- Mono-Schrift für Fachbegriffe oder Code: `Space Mono`

Regeln:

- `h1` nur für Seitenüberschrift
- `h2` für Modus- oder Fachüberschriften
- Kartentitel kurz halten
- Fließtext maximal in kurzen Absätzen oder Listen
- Fachbegriffe nur sparsam fett markieren

## 6. Komponenten

Folgende Komponenten sind Standard:

- Fachkarte
- Tab
- Modus-Button
- Lernkarte
- Quizkarte
- Flashcard
- Fortschrittsleiste
- Statistikleiste
- Filter-Button

Regeln:

- Komponenten bekommen sprechende Klassen statt Einzellösungen pro Fach.
- Interaktionen müssen in allen Fächern gleich funktionieren.
- Buttons verwenden immer dieselben Zustände: `default`, `hover`, `active`, `selected`.

## 7. Inhaltsmodell

Jedes Fach verwendet dasselbe Grundschema:

```js
{
  id: "rabs",
  title: "RABS",
  subtitle: "Rechnerarchitektur & Betriebssysteme",
  icon: "🖥️",
  color: "green",
  topics: [
    {
      id: "rechnerarchitektur",
      title: "Rechnerarchitektur",
      icon: "🖥️",
      cards: [
        { title: "Von-Neumann-Architektur", body: "..." }
      ],
      questions: [
        { question: "Was ist ...?", answer: "..." }
      ],
      flashcards: [
        { front: "Frage", back: "Antwort" }
      ]
    }
  ]
}
```

Regeln:

- `id` ist Pflicht und stabil.
- Keine Logik in Datendateien.
- Einheitliche Feldnamen verwenden:
  - `title` statt gemischter Kurzformen wie `t`
  - `body` statt `b`
  - `question` statt `q`
  - `answer` statt `a`
- Inhalte dürfen einfache HTML-Auszeichnung enthalten, aber nur kontrolliert:
  - erlaubt: `<b>`, `<br>`, `<code>`
  - vermeiden: komplexe eingebettete Layout-HTML-Strukturen

## 8. Benennung

Dateien:

- nur Kleinbuchstaben
- Bindestriche oder einfache Fach-IDs
- keine Umlaute in Dateinamen

Beispiele:

- `trainer.html`
- `data/rabs.js`
- `data/mathe-2.js`

IDs:

- nur Kleinbuchstaben
- Wörter mit Bindestrich trennen
- IDs nie aus sichtbaren Titeln ableiten, wenn sich diese später ändern könnten

## 9. JavaScript-Regeln

Regeln:

- Daten laden, dann rendern
- Render-Funktionen bleiben fachunabhängig
- Status und Inhalte strikt trennen
- keine globalen Sonderfälle pro Fach
- keine Mutation der Quelldaten, wenn Status gemeint ist

Wichtig für den aktuellen Stand:

- `restartFlashWrong()` verändert derzeit `d.flashcards` direkt. Das ist auf Dauer fehleranfällig.
- Besser: Originaldaten unverändert lassen und einen separaten Trainingssatz im State halten.

## 10. Erweiterbarkeit

Ein neues Fach soll nur diese Schritte brauchen:

1. Datendatei anlegen
2. Fach im Katalog registrieren
3. Fertig

Nicht nötig sein sollte:

- neue HTML-Datei bauen
- CSS duplizieren
- Renderlogik kopieren

---

## Empfohlene Zielarchitektur

## Variante: simpel und lokal nutzbar

Da die Seite wahrscheinlich auch direkt als Datei im Browser geöffnet werden soll, ist **JavaScript-Datei als Datencontainer** einfacher als `fetch()` auf JSON.

Empfehlung:

- `data/catalog.js` setzt `window.APP_CATALOG`
- `data/rabs.js` setzt `window.APP_SUBJECTS.rabs`
- `assets/app.js` liest diese Daten aus

Beispiel:

```js
window.APP_SUBJECTS = window.APP_SUBJECTS || {};

window.APP_SUBJECTS.rabs = {
  id: "rabs",
  title: "RABS",
  subtitle: "Rechnerarchitektur & Betriebssysteme",
  icon: "🖥️",
  topics: [
    {
      id: "rechnerarchitektur",
      title: "Rechnerarchitektur",
      icon: "🖥️",
      cards: [],
      questions: [],
      flashcards: []
    }
  ]
};
```

Warum nicht direkt JSON als erste Stufe:

- JSON per `fetch()` ist bei `file://` oft unpraktisch
- zusätzliche Server-Annahme wäre für dein Ziel unnötig
- externe `.js`-Dateien bleiben trotzdem klar getrennte Daten

Wenn du später sicher über einen Webserver arbeitest, kann man ohne großen Umbau auf JSON wechseln.

## GitHub Pages berücksichtigen

Da die Seite über GitHub Pages läuft, sollte das Zielsystem strikt statisch bleiben.

Das bedeutet:

- keine serverseitige PDF-Verarbeitung
- keine API-Keys im Frontend
- keine dynamische Datenbankanbindung
- Deployment erfolgt über Commit + Push

Praktische Folge:

- Der Browser zeigt nur fertige Datendateien an.
- Die Erzeugung neuer Trainer aus PDFs passiert **vor dem Deployment**.
- GitHub Pages ist nur die Auslieferungsschicht, nicht die Verarbeitungslogik.

---

## KI-Workflow für neue Fächer aus PDFs

## Ziel

Vorlesungsfolien oder Skripte als PDF sollen von KI-Systemen analysiert und in das Trainerformat überführt werden.

Wichtig:

- Die KI sollte **nicht direkt auf GitHub Pages** laufen.
- Die KI erzeugt statische Ausgabedateien, die danach ins Repository committed werden.

## Einfachster praktikabler Prozess

Empfohlene Pipeline:

1. PDFs in einen Fachordner legen, z.B. `sources/rabs/`
2. Ein KI-gestützter Prozess extrahiert Themenblöcke
3. Daraus werden erzeugt:
   - Lernkarten
   - Fragen mit Antworten
   - Karteikarten
4. Das Ergebnis wird in `data/<fach>.js` geschrieben
5. Fach in `data/catalog.js` ergänzen
6. Inhalt kurz fachlich prüfen
7. Commit und Push
8. GitHub Pages veröffentlicht automatisch die neue Version

## Empfehlung zur Rollenverteilung

Damit es simpel bleibt, sollte die KI nur diese Aufgaben übernehmen:

- PDF-Inhalte zusammenfassen
- Themen clustern
- Fragen generieren
- Karteikarten ableiten
- das definierte Datenschema ausfüllen

Die Website selbst sollte weiter nur diese Aufgaben übernehmen:

- Daten laden
- Inhalte anzeigen
- Lernstatus speichern

## Sinnvolle Ordner für diesen Workflow

Zusätzlich zur Website-Struktur:

- `sources/<fach>/`: Original-PDFs
- `workflows/` oder `scripts/`: Hilfsskripte für Extraktion oder Umwandlung
- `data/<fach>.js`: fertige, veröffentlichte Trainerdaten

## Qualitätsregel für KI-generierte Inhalte

KI-Ausgabe sollte nie ungeprüft veröffentlicht werden.

Mindestens prüfen:

- stimmen Fachbegriffe?
- wurden keine Inhalte halluziniert?
- sind Antworten klausurnah formuliert?
- sind Themen sinnvoll segmentiert?

## Spätere Ausbaustufe

Wenn du den PDF-Prozess später stärker automatisieren willst, ist die nächste sinnvolle Stufe:

- PDFs lokal oder in einem separaten Skript verarbeiten
- Ausgabe automatisch in das Trainerformat konvertieren
- optional ein Validierungsskript ausführen
- danach manuelle Freigabe per Commit

Für GitHub Pages ist das die richtige Richtung, weil die eigentliche Website weiterhin extrem einfach bleibt.

---

## Migrationsplan

## Phase 1: Trennung ohne Umbau des Verhaltens

Ziel: Bestehende Oberfläche bleibt fast gleich, nur die Daten verlassen die HTML-Datei.

Schritte:

1. `rabs.html` in `trainer.html` überführen.
2. Styles aus `rabs.html` nach `assets/styles.css` auslagern.
3. Die `DATA`-Konstante aus `rabs.html` in `data/rabs.js` verschieben.
4. Aus `DATA` ein Fachobjekt mit `id`, `title`, `subtitle`, `icon`, `topics` machen.
5. `assets/app.js` so anpassen, dass es das Fach aus `window.APP_SUBJECTS` lädt.

Ergebnis:

- ein generischer Trainer
- ein separates RABS-Datenfile
- keine fachspezifische HTML-Datei mehr nötig

## Phase 2: Startseite dynamisch machen

Ziel: `index.html` nicht mehr manuell pflegen.

Schritte:

1. `data/catalog.js` einführen.
2. Pro Fach im Katalog hinterlegen:
   - `id`
   - `title`
   - `subtitle`
   - `icon`
3. `index.html` enthält nur noch leeren Container plus Script.
4. `assets/index.js` rendert die Fachkarten automatisch.
5. Karten verlinken auf `trainer.html?subject=rabs`

Ergebnis:

- neue Fächer erscheinen automatisch auf der Startseite
- keine kopierten Kartenblöcke mehr

## Phase 3: Datenschema konsolidieren

Ziel: Inhalte in allen Fächern folgen demselben Schema.

Schritte:

1. Kurzschlüssel umbenennen:
   - `t` -> `title`
   - `b` -> `body`
   - `q` -> `question`
   - `a` -> `answer`
2. Für jedes Topic Pflichtfelder definieren:
   - `id`
   - `title`
   - `icon`
   - `cards`
   - `questions`
   - `flashcards`
3. Eine kleine Prüf-Funktion einbauen, die beim Laden fehlende Felder in der Konsole meldet.

Ergebnis:

- weniger Sonderfälle
- weniger Fehler beim Ergänzen neuer Fächer

## Phase 4: State robuster machen

Ziel: Trainerlogik unabhängig von der Datenstruktur stabil halten.

Schritte:

1. Quiz-Status nach `subjectId/topicId/questionIndex` speichern.
2. Flashcard-Session im State halten, nicht in den Quelldaten.
3. Optional `localStorage` ergänzen, damit Lernfortschritt nach Reload erhalten bleibt.

Ergebnis:

- saubere Trennung zwischen Inhalten und Lernfortschritt
- keine Seiteneffekte auf den Fachdaten

## Phase 5: Neue Fächer standardisieren

Ziel: Neue Trainer in wenigen Minuten ergänzen.

Schritte:

1. Neue Datei `data/<fach>.js` anlegen.
2. Fach im Katalog registrieren.
3. Inhalte nach Standardschema eintragen.
4. Im Browser prüfen, ob Tabs, Fragen und Karteikarten korrekt erscheinen.

Ergebnis:

- Erweiterung wird zu Datenerfassung statt Seitenbau

---

## Konkrete Minimal-Lösung

Wenn es besonders simpel bleiben soll, ist das hier die beste nächste Stufe:

- `index.html`
- `trainer.html`
- `assets/styles.css`
- `assets/index.js`
- `assets/app.js`
- `data/catalog.js`
- `data/rabs.js`
- später `data/<weiteres-fach>.js`

Das ist bewusst kein großes System. Es ist nur:

- eine Startseite
- eine generische Trainerseite
- mehrere Datendateien

Mehr brauchst du für den nächsten sinnvollen Schritt nicht.

---

## Empfehlung für die direkte Umsetzung

Die sinnvollste Reihenfolge ist:

1. Erst `rabs.html` in `trainer.html` + `data/rabs.js` zerlegen
2. Dann `index.html` aus `catalog.js` rendern
3. Danach weitere Fächer ergänzen

So reduzierst du sofort das Hardcoding, ohne die Einfachheit zu verlieren.
