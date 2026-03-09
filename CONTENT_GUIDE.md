# Content Guide

## Ziel

Dieser Guide regelt die Erstellung neuer Trainingsinhalte.

Er gilt für:

- manuell erstellte Inhalte
- KI-unterstützt erzeugte Inhalte
- spätere PDF-zu-Trainer-Prozesse

## Grundregeln

- Vorlesungsfolien haben immer das letzte Wort.
- Die Folien sind die einzige fachliche Referenz.
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
- Beispiele werden nicht als lose Sonderblöcke geführt, sondern in die fachlich passende Karte, Frage oder Flashcard integriert.
- Bild- oder Beispiel-Folien werden nur ausgelassen, wenn sie keine explizite fachliche Aussage tragen.

Warnsignale für Unterabdeckung:

- Ein Themenblock ist deutlich kürzer als die zugrunde liegenden Folien.
- Es gibt nur Definitionen, aber keine Bedingungen, Varianten, Nachteile oder Beispiele.
- Sichtbare Teilaspekte der Folien fehlen im Trainer vollständig.

## Erlaubte KI-Transformationen

Erlaubt:

- Folien in Themenblöcke und Foliencluster gliedern
- Aussagen aus Folien in Lernkarten, Fragen und Flashcards überführen
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
7. Cards, Questions und Flashcards erzeugen.
8. Jede Aussage gegen die Folien prüfen.
9. Fachdaten in `data/<fach-id>.js` eintragen.
10. Fach in `data/catalog.js` registrieren.
11. Validatoren ausführen.
12. Im Browser kurz prüfen.
13. Vor Freigabe eine fachliche Endprüfung gegen die Folien machen.

## Datenformat

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
      cards: [{ title: "Begriff", body: "Inhalt", source: "01.pdf, Folie 12" }],
      questions: [{ question: "Frage", answer: "Antwort", source: "01.pdf, Folie 12" }],
      flashcards: [{ front: "Frage", back: "Antwort", source: "01.pdf, Folie 12" }]
    }
  ]
};
```

Pflicht:

- `id`, `title`, `topics`
- stabile Topic-IDs
- konsistente Feldnamen
- `source` bei jedem Eintrag

## Qualitätssicherung

Vor Veröffentlichung prüfen:

- Stimmt jede Aussage mit den Folien überein?
- Wurde irgendwo Wissen ergänzt?
- Sind Quellenangaben vollständig?
- Ist die Stoffdichte pro Thema plausibel?
- Fehlen erkennbare Teilaspekte der Folien?
- Gibt es OCR-Fehler oder Missverständnisse?

Wenn eine dieser Fragen nicht sicher mit ja beantwortet werden kann, wird der Inhalt nicht veröffentlicht.

## GitHub Pages

GitHub Pages ist nur die Auslieferungsschicht.

Regeln:

- PDF-Analyse findet lokal oder in einem separaten Vorprozess statt.
- Auf GitHub Pages liegen nur freigegebene statische Dateien.
- Keine API-Keys oder serverseitigen Prozesse im Frontend.

## Was nicht gemacht werden soll

- keine direkte PDF-Verarbeitung im Browser als Hauptworkflow
- keine ungeprüfte KI-Ausgabe live nehmen
- keine stillen Annahmen bei unklaren Folien
- keine Vermischung mehrerer Fächer in einer Datendatei
