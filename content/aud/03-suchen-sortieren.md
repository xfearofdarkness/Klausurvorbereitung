---
id: suchen-sortieren
title: Suchen & Sortieren
icon: 🔎
---

## Karte: Lineare Suche
tag: def
quelle: 03_fundamental-algorithms.pdf, Folien 4, 12

Eingabe: eine Sequenz von unsortierten Elementen und ein Zielwert; Ausgabe: Position des Zielwertes. Standardansatz: eine Schleife, in der jedes Element untersucht wird, bis entweder das Ziel gefunden oder der Datensatz erschöpft ist. Bei Suchalgorithmen zählt man die Vergleichsoperationen: C(n) = Anzahl der Vergleiche, n = Anzahl der Elemente im Array.

## Karte: Lineare Suche: Zeitanalyse
tag: formel
quelle: 03_fundamental-algorithms.pdf, Folie 13

Best case: C(1). Worst case: C(n). Average case (nicht gefunden): C(n). Average case (gefunden): C((n+1)/2) — bei gleichmäßig verteiltem Array hat jeder Vergleich die gleiche Wahrscheinlichkeit: 1/n·(1 + 2 + … + n) = (n+1)/2.

## Karte: Binäre Suche
tag: def
quelle: 03_fundamental-algorithms.pdf, Folien 15-22

Eingabe: eine Sequenz von <b>sortierten</b> Elementen und ein Zielwert. Grundidee: 1. Vergleiche den Zielwert target mit dem Wert des mittleren Elements (median): Wenn target = median, gib den Index zurück; wenn target < median, suche in der unteren Hälfte weiter; wenn target > median, suche in der oberen Hälfte weiter. 2. Wiederhole Schritt 1 für das Teilarray.

## Karte: Binäre Suche: Zeitanalyse
tag: formel
quelle: 03_fundamental-algorithms.pdf, Folie 25

Best case: C(1). Worst case und average case: C(log₂n + 1). Begründung: Nach jeder Iteration halbiert sich die Anzahl der Elemente — nach der 1. Iteration bleiben n/2, nach der 2. n/4, nach der k. Iteration n/2ᵏ Elemente übrig.

## Karte: Reihenfolge der Funktionen
tag: wichtig
quelle: 03_fundamental-algorithms.pdf, Folie 26

n² wächst stärker als n·log₂n; n·log₂n wächst stärker als n; n wächst stärker als log₂n.

## Karte: Laufzeit messen: Grenzen der experimentellen Algorithmik
tag: wichtig
quelle: 03_fundamental-algorithms.pdf, Folie 28

Laufzeit messen (mehrere Durchläufe, Mittelwerte) ist nur vergleichbar auf gleichem Computer, abhängig von der Geschicklichkeit des Programmierenden und vom Computer (z. B. viel vs. wenig RAM bei hohem Speicherbedarf) — und vergleicht nur Programme, nicht die Algorithmen!

## Karte: O-Notation (Landau-Notation)
tag: def
quelle: 03_fundamental-algorithms.pdf, Folie 29

Wird in der Informatik v. a. in der Komplexitätstheorie eingesetzt; beschreibt das asymptotische Verhalten von Funktionen und Folgen. Unterscheidung von Zeitkomplexität (asymptotische Laufzeitanalyse) und Platzkomplexität („zusätzlicher“ Speicherbedarf). Ziel: Vergleich von Problemen und Algorithmen danach, wie aufwendig sie zu berechnen sind; Einteilung in Komplexitätsklassen. Die Komplexitätsklasse gibt <b>keine</b> Aussage über die absolut benötigte Zeit, sondern über die Änderung der benötigten Zeit (bzw. des Speichers) in Abhängigkeit von der Änderung der Eingabegröße.

## Karte: Wichtige Komplexitätsklassen
tag: wichtig
quelle: 03_fundamental-algorithms.pdf, Folie 30

<b>O(1)</b> konstant (Bestimmung, ob Binärzahl gerade oder ungerade ist). <b>O(log n)</b> logarithmisch (binäre Suche). <b>O(n)</b> linear (Element in unsortierter Liste finden). <b>O(n log n)</b> linearithmisch (gute Sortierverfahren, z. B. Mergesort). <b>O(n²)</b> quadratisch (einfache Sortierverfahren, z. B. Selection Sort). <b>O(nᶜ)</b> für c ≥ 1 polynomial („einfache“ Algorithmen). <b>O(cⁿ)</b> für c ≥ 1 exponentiell (Erzeugen der Potenzmenge). <b>O(n!)</b> faktoriell (Traveling Salesman Problem, brute force).

## Karte: Landau-Symbole
tag: def
quelle: 03_fundamental-algorithms.pdf, Folie 36

<b>Groß O:</b> asymptotische obere Schranke. <b>Groß Omega:</b> asymptotische untere Schranke. <b>Groß Theta:</b> beides. Am häufigsten wird die Worst-case-Laufzeitkomplexität betrachtet: die Laufzeit T(n), die maximal benötigt wird. Beispiel: T(n) in O(n²) — der Algorithmus benötigt höchstens quadratisch viele Schritte, muss aber nicht tatsächlich quadratisch viele benötigen.

## Karte: Zählt nur der Worst-case?
quelle: 03_fundamental-algorithms.pdf, Folie 37

Der Worst-case genügt nicht immer. <b>Average Case:</b> interessant, wenn der Worst-case sehr selten eintritt; insb. geeignet für randomisierte Algorithmen (Wahrscheinlichkeitsrechnung für den Erwartungswert; Beispiel: Quicksort mit randomisiertem Pivot, average case O(n log n)). <b>Amortisierte Analyse:</b> geeignet für Verfahren, in denen sich teure Operationen mit günstigen „aufrechnen“.

## Karte: Schritte zur Bestimmung der Laufzeitkomplexität
tag: wichtig
quelle: 03_fundamental-algorithms.pdf, Folien 38-44

Grundvoraussetzung: Algorithmus verstehen! 1. Schleifen mit Bezug zur Eingabelänge n (eine Schleife über alle Elemente mit O(1)-Operationen: O(n)). 2. Schachtelung von Schleifen → Multiplikation (drei geschachtelte Schleifen über n: O(n³)). 3. Komponenten/Schleifen nacheinander → Addition (zwei Schleifen: O(n + n) = O(2n) = O(n)). 4. Das stärkste Wachstum dominiert („streiche alle Summanden bis auf den, der am stärksten wächst“: O(n) + O(n²) + O(n³) ⇒ O(n³)). 5. Konstante Faktoren weglassen (drei Teile in O(n): O(n + n + n) ⇒ O(3·n) ⇒ O(n)). Beispiel für 4. und 5. zusammen: O(n² + 2n + 1000 + 3n⁴ + 5) ⇒ O(n⁴).

## Karte: Beispiel: Minimum berechnen
tag: beispiel
quelle: 03_fundamental-algorithms.pdf, Folien 31-32

<b>minNaive:</b> pro Zahl mit (bis zu) allen anderen vergleichen (brute force) — O(n²). <b>minSmart:</b> bisheriges Minimum merken und mit dem nächsten Element vergleichen — O(n). Linear: Verdopplung von n → ungefähre Verdopplung des Aufwands; quadratisch: Verdopplung von n → ungefähre Vervierfachung.

## Karte: Sortieren: Grundlagen
tag: def
quelle: 03_fundamental-algorithms.pdf, Folien 47-48

Die betrachteten Elemente müssen eine Ordnung haben (numerisch, alphanumerisch, …). Effizientes Sortieren ist eine wichtige Voraussetzung für die Effizienz anderer Verfahren (z. B. Suchen in Listen, Mergen von Listen). Vergleichsbasiertes Sortieren: viele Verfahren basieren auf dem paarweisen Vergleich der Elemente (<, > oder =). Grundregeln: aufsteigend sortieren, „in situ“ (nur wenig zusätzlicher Speicherplatz). Ziel: Minimiere die Anzahl der Vergleiche C und der Verschiebungen M (Verschiebung = Kopieren eines Elements an eine andere Position).

## Karte: Stabile Sortieralgorithmen
tag: def
quelle: 03_fundamental-algorithms.pdf, Folie 49

Ein Sortieralgorithmus ist stabil, wenn immer dann, wenn es zwei Datensätze R und S mit demselben Schlüssel gibt und R in der ursprünglichen Liste vor S steht, R auch in der sortierten Liste vor S steht. Schlüssel: der Teil der Daten, der für die Sortierung verwendet wird. Beispiel [ (2, x), (1, b), (1, a) ]: sortiert als [ (1, b), (1, a), (2, x) ] stabil, als [ (1, a), (1, b), (2, x) ] instabil.

## Karte: Selection Sort
tag: def
quelle: 03_fundamental-algorithms.pdf, Folie 53

Grundidee: 1. Betrachte die Elemente im Array von links nach rechts. 2. Finde das kleinste Element. 3. Tausche das kleinste Element mit dem Element, das derzeit an erster Stelle steht. Implementierung: äußere Schleife i von 0 bis n-2, innere Schleife sucht indexMin in i+1 bis n-1, dann Tausch.

## Karte: Selection Sort: Zeitanalyse und Stabilität
tag: formel
quelle: 03_fundamental-algorithms.pdf, Folien 102-107

n-1 Durchläufe: beim 1. Durchlauf n-1 Vergleiche, beim 2. n-2, …, beim (n-1). Durchlauf 1 Vergleich. C(n) = 1 + 2 + … + (n-1) = (n-1)·n/2 = n²/2 − n/2 = O(n²) Vergleiche. Verschiebungen: n-1 Tauschvorgänge mit je 3 Verschiebungen, M(n) = 3(n-1) = O(n). Zeitkomplexität: best, average und worst case O(n²). <b>Instabil:</b> Durch den Tausch von arr[indexMin] und arr[i] kann sich die Reihenfolge gleicher Schlüssel ändern.

## Karte: Insertion Sort
tag: def
quelle: 03_fundamental-algorithms.pdf, Folie 109

Grundidee: 1. Gehe von links nach rechts. 2. Füge jedes Element unter Berücksichtigung der links davon liegenden Elemente an die richtige Stelle ein und „gleite“ dabei über andere Elemente, um Platz zu schaffen. Implementierung: toInsert = arr[i]; solange das linke Nachbarelement größer ist, wird es nach rechts geschoben; dann wird toInsert eingesetzt.

## Karte: Insertion Sort: Zeitanalyse und Stabilität
tag: formel
quelle: 03_fundamental-algorithms.pdf, Folien 135-137, 421

Die Anzahl der Operationen hängt vom Inhalt des Arrays ab. Best case (Array bereits sortiert): C(n) = n − 1 = O(n), M(n) = 0. Worst case (umgekehrt sortiert): C(n) = 1 + 2 + … + (n-1) = O(n²), ebenso M(n) = O(n²). Average case (unsortiert, Gleichverteilung): O(n²). Insertion Sort ist <b>stabil</b> und eignet sich am besten für fast sortierte Arrays.

## Karte: Insertion Sort: Verbesserungen
quelle: 03_fundamental-algorithms.pdf, Folie 138

<b>Shell Sort</b> (Donald Shell, 1959): nutzt aus, dass Insertion Sort schnell ist, wenn ein Array fast sortiert ist; beseitigt den Nachteil, dass weit entfernte Elemente viele kleine Verschiebungen brauchen. Idee: zunächst Paare weit voneinander entfernter Elemente sortieren, dann den Abstand schrittweise verringern; instabil. <b>Binäre Suche</b> kann verwendet werden, um die richtige Einfügeposition zu finden.

## Karte: Bubble Sort
tag: def
quelle: 03_fundamental-algorithms.pdf, Folie 140

Grundidee: 1. Führe eine Reihe von Durchläufen durch das Array durch. 2. Bei jedem Durchlauf: Gehe von links nach rechts und tausche benachbarte Elemente, wenn sie nicht in der richtigen Reihenfolge stehen. Die äußere Schleife steuert die Anzahl der Durchläufe und den Endpunkt jedes Durchlaufs; die innere Schleife führt einen einzelnen Durchlauf aus.

## Karte: Bubble Sort: Zeitanalyse und Stabilität
tag: formel
quelle: 03_fundamental-algorithms.pdf, Folien 209-211

Best case (bereits sortiert): C(n) = n − 1 = O(n), M(n) = 0. Worst case (umgekehrt sortiert): C(n) = M(n) = 1 + 2 + … + (n-1) = O(n²). Average case: O(n²). Bubble Sort ist <b>stabil</b>.

## Karte: Quicksort
tag: def
quelle: 03_fundamental-algorithms.pdf, Folie 215

Rekursiver „Teile und herrsche“-Algorithmus (divide & conquer). <b>Divide:</b> Ordne die Elemente so neu an, dass zwei Teilarrays entstehen, wobei jedes Element im linken Array <= jedem Element im rechten Array ist. <b>Conquer:</b> Wende Quicksort rekursiv auf die Teilarrays an; höre auf, sobald ein Teilarray nur noch ein Element enthält. <b>Combine:</b> nichts zu tun — das Kriterium der Teilarray-Bildung sorgt bereits dafür.

## Karte: Quicksort: Partitionierung
tag: wichtig
quelle: 03_fundamental-algorithms.pdf, Folien 216-218

Die Neuanordnung erfolgt mithilfe eines Wertes, der als <b>Pivot</b> bezeichnet wird: linkes Teilarray alle Werte <= Pivot, rechtes Teilarray alle Werte >= Pivot. Vorgehen: 1. Pivot-Element wählen. 2. „Fehl am Platz“ stehende Elemente finden: von links nach rechts (i = 0, 1, …) bis arr[i] >= p; von rechts nach links (j = n-1, …) bis arr[j] <= p. 3. arr[i] und arr[j] tauschen und ab Schritt 2 wiederholen, bis i > j.

## Karte: Quicksort: Pivot-Wahl
tag: wichtig
quelle: 03_fundamental-algorithms.pdf, Folie 327

Mögliche Pivot-Werte: erstes oder letztes Element (riskant, kann zu Worst-case-Verhalten führen), mittleres Element, zufällig gewähltes Element, Median aus drei Elementen (links, Mitte, rechts oder drei zufällige — verringert die Wahrscheinlichkeit eines schlechten Pivots).

## Karte: Quicksort: Zeitanalyse und Stabilität
tag: formel
quelle: 03_fundamental-algorithms.pdf, Folien 328-331, 421

Die Partitionierung erfordert n Vergleiche (jedes Element wird mit dem Pivot verglichen). <b>Best case</b> (Array wird immer halbiert): log₂n Ebenen mit je n Vergleichen, C(n) = n·log₂n. <b>Worst case</b> (Pivot ist immer größter oder kleinster Wert; ein Teilarray hat immer 1 Element): C(n) = n + (n-1) + … + 2 = O(n²). <b>Average case:</b> C(n) > n·log₂n, aber immer noch O(n·log₂n). Quicksort ist <b>instabil</b>. Bei einer vernünftigen Wahl des Pivots tritt das Worst-Case-Szenario nur selten auf.

## Karte: Mergesort: Zusammenführen sortierter Arrays
tag: wichtig
quelle: 03_fundamental-algorithms.pdf, Folien 333-343

Mergesort benötigt ein zusätzliches temporäres Array derselben Größe wie das ursprüngliche: O(n) zusätzlicher Speicherplatz (andere bisher betrachtete Verfahren sortieren an Ort und Stelle). Merge zweier sortierter Arrays A und B nach C mit drei Indizes i, j, k: wiederholt A[i] und B[j] vergleichen, den kleineren Wert nach C[k] kopieren, den Index des kopierten Arrays und k erhöhen.

## Karte: Mergesort
tag: def
quelle: 03_fundamental-algorithms.pdf, Folien 344-350

Rekursiver Teile-und-Herrsche-Algorithmus. 1. <b>Teile:</b> das Array in zwei Hälften teilen. 2. <b>Herrsche:</b> Mergesort rekursiv auf die Teilarrays anwenden; aufhören, sobald ein Teilarray nur noch ein Element enthält. 3. <b>Kombiniere:</b> die sortierten Teilarrays zusammenführen.

## Karte: Mergesort: Zeitanalyse
tag: formel
quelle: 03_fundamental-algorithms.pdf, Folien 420-421

Das Zusammenführen zweier Hälften eines Arrays der Größe n erfordert 2n Schritte. Mergesort teilt das Array wiederholt in zwei Hälften; auf allen Ebenen (außer der letzten) gibt es 2n Verschiebungen, und es gibt log₂n Ebenen mit Vergleichen: C(n) = n·log₂n. Mergesort ist <b>stabil</b> und hat die beste Komplexität im Worst-Case-Szenario, benötigt jedoch zusätzlichen Speicher und Datentransfers zum und vom temporären Array.

## Karte: Sortierverfahren im Vergleich
tag: wichtig
quelle: 03_fundamental-algorithms.pdf, Folie 421

Stabilität: Selection Sort <b>instabil</b>, Insertion Sort <b>stabil</b>, Bubble Sort <b>stabil</b>, Quicksort <b>instabil</b>, Mergesort <b>stabil</b>. Insertion Sort eignet sich am besten für fast sortierte Arrays. Quicksort und Mergesort sind rekursive Teile-und-herrsche-Algorithmen. Mergesort hat die beste Worst-Case-Komplexität, braucht aber zusätzlichen Speicher; Quicksort ist im Durchschnitt mit Mergesort vergleichbar.

## Frage: Wie viele Vergleiche benötigt die lineare Suche im besten, schlechtesten und durchschnittlichen Fall?
id: 1f1jc4p
quelle: 03_fundamental-algorithms.pdf, Folie 13

Best case C(1), worst case C(n), average case nicht gefunden C(n), average case gefunden C((n+1)/2).

## Frage: Was setzt die binäre Suche voraus, und wie funktioniert sie?
id: 11clg0q
quelle: 03_fundamental-algorithms.pdf, Folien 15-22

Eine sortierte Elementfolge. Der Zielwert wird mit dem mittleren Element (median) verglichen: bei Gleichheit Index zurückgeben, bei target < median in der unteren Hälfte weitersuchen, bei target > median in der oberen — wiederholt für das jeweilige Teilarray.

## Frage: Wie viele Vergleiche benötigt die binäre Suche im schlechtesten Fall, und warum?
id: 1xxe7yk
quelle: 03_fundamental-algorithms.pdf, Folie 25

C(log₂n + 1): Nach jeder Iteration halbiert sich die Anzahl der verbleibenden Elemente (nach der k. Iteration bleiben n/2ᵏ Elemente übrig).

## Frage: Warum reicht es nicht, die Laufzeit von Algorithmen einfach zu messen?
id: 1tj44vo
quelle: 03_fundamental-algorithms.pdf, Folie 28

Messungen sind nur auf gleichem Computer vergleichbar, hängen von der Geschicklichkeit des Programmierenden und vom Computer ab (z. B. RAM) — und sie vergleichen nur Programme, nicht die Algorithmen.

## Frage: Was sagt eine Komplexitätsklasse aus — und was nicht?
id: d9hhh
quelle: 03_fundamental-algorithms.pdf, Folie 29

Sie gibt die Größenordnung des Aufwands in Abhängigkeit von der Datenmenge n an, also wie sich die benötigte Zeit (bzw. der Speicher) mit der Eingabegröße ändert. Sie macht keine Aussage über die absolut benötigte Zeit.

## Frage: Wie ordnen sich die Komplexitätsklassen aufsteigend?
id: xc6bt0
quelle: 03_fundamental-algorithms.pdf, Folie 30

Aufsteigend sind die Klassen O(1) konstant, O(log n) logarithmisch, O(n) linear, O(n log n) linearithmisch, O(n²) quadratisch, O(nᶜ) polynomial, O(cⁿ) exponentiell und O(n!) faktoriell.

## Frage: Wofür stehen die Landau-Symbole Groß O, Groß Omega und Groß Theta?
id: wgxsf4
quelle: 03_fundamental-algorithms.pdf, Folie 36

Groß O: asymptotische obere Schranke. Groß Omega: asymptotische untere Schranke. Groß Theta: beides.

## Frage: Nennen Sie die fünf Schritte zur Bestimmung der Laufzeitkomplexität.
id: 7tfo4c
quelle: 03_fundamental-algorithms.pdf, Folie 38

1. Schleifen mit Bezug zur Eingabelänge n, 2. Schachtelung von Schleifen (Multiplikation), 3. Komponenten/Schleifen nacheinander (Addition), 4. das stärkste Wachstum dominiert, 5. konstante Faktoren weglassen. Grundvoraussetzung: den Algorithmus verstehen.

## Frage: Wann ist ein Sortieralgorithmus stabil?
id: fzm5xs
quelle: 03_fundamental-algorithms.pdf, Folie 49

Wenn für je zwei Datensätze R und S mit demselben Schlüssel gilt: Steht R in der ursprünglichen Liste vor S, dann steht R auch in der sortierten Liste vor S.

## Frage: Wie funktioniert Selection Sort, und welche Komplexität hat es?
id: 1m6o94u
quelle: 03_fundamental-algorithms.pdf, Folien 53, 102-107

Von links nach rechts: jeweils das kleinste Element im unsortierten Bereich finden und mit dem Element an der ersten unsortierten Stelle tauschen. C(n) = n²/2 − n/2 = O(n²) Vergleiche in jedem Fall (best = average = worst), M(n) = 3(n-1) = O(n) Verschiebungen. Instabil.

## Frage: In welchem Fall ist Insertion Sort besonders schnell?
id: 89iqr0
quelle: 03_fundamental-algorithms.pdf, Folien 135, 421

Wenn das Array bereits (fast) sortiert ist: best case C(n) = n − 1 = O(n) und M(n) = 0. Insertion Sort eignet sich am besten für fast sortierte Arrays.

## Frage: Welche Komplexität hat Insertion Sort?
id: ikj8dv
quelle: 03_fundamental-algorithms.pdf, Folien 135-137

Insertion Sort hat im Best Case O(n) bei sortiertem Array und M(n) = 0; im Worst und Average Case gilt O(n²), und das Verfahren ist stabil.

## Frage: Welche der behandelten Sortierverfahren sind stabil, welche instabil?
id: ntr2vj
quelle: 03_fundamental-algorithms.pdf, Folien 138, 421

Stabil: Insertion Sort, Bubble Sort, Mergesort. Instabil: Selection Sort, Quicksort (auch Shell Sort ist instabil).

## Frage: Wie funktioniert Bubble Sort grundsätzlich?
id: rmf41q
quelle: 03_fundamental-algorithms.pdf, Folien 140, 209-211

Bubble Sort nutzt mehrere Durchläufe und tauscht je Durchlauf benachbarte Elemente, wenn sie in falscher Reihenfolge stehen; Best Case ist O(n), Worst und Average Case O(n²), und das Verfahren ist stabil.

## Frage: Wie läuft die Partitionierung bei Quicksort ab?
id: z1fzri
quelle: 03_fundamental-algorithms.pdf, Folien 216-218

Ein Pivot wird gewählt. Von links nach rechts läuft Index i, bis arr[i] >= Pivot; von rechts nach links läuft Index j, bis arr[j] <= Pivot; dann werden arr[i] und arr[j] getauscht. Das wiederholt sich, bis i > j. Ergebnis: links alle Werte <= Pivot, rechts alle Werte >= Pivot.

## Frage: Wann tritt bei Quicksort der Worst Case ein, und welche Komplexität hat er?
id: s01dvs
quelle: 03_fundamental-algorithms.pdf, Folien 327-329

Wenn das Pivotelement immer der größte oder kleinste Wert ist — ein Teilarray hat dann immer 1 Element, das andere n-1. C(n) = n + (n-1) + … + 2 = O(n²). Deshalb ist die Pivot-Wahl (erstes/letztes Element riskant) wichtig.

## Frage: Welche Pivot-Strategien gibt es bei Quicksort?
id: 1g43iwq
quelle: 03_fundamental-algorithms.pdf, Folie 327

Pivot-Strategien sind erstes oder letztes Element, was riskant ist, mittleres Element, Zufallselement und Median aus drei.

## Frage: Welche Komplexität hat Quicksort?
id: rk5qu9
quelle: 03_fundamental-algorithms.pdf, Folien 328-331

Quicksort hat im Best Case n·log₂n, im Average Case O(n·log₂n) und im Worst Case O(n²), wenn das Pivot immer größter oder kleinster Wert ist; das Verfahren ist instabil.

## Frage: Welche Komplexität hat Mergesort?
id: wvs89w
quelle: 03_fundamental-algorithms.pdf, Folien 333, 420-421

Für Mergesort gilt C(n) = n·log₂n mit log₂n Ebenen und je 2n Verschiebungen; zusätzlich braucht Mergesort O(n) Speicher und ist stabil.

## Frage: Welche Vor- und Nachteile hat Mergesort gegenüber Quicksort?
id: w7jaf9
quelle: 03_fundamental-algorithms.pdf, Folie 421

Mergesort hat die beste Komplexität im Worst-Case-Szenario und ist stabil, benötigt aber O(n) zusätzlichen Speicher und Datentransfers zum und vom temporären Array. Quicksort ist im Durchschnitt mit Mergesort vergleichbar; bei vernünftiger Pivot-Wahl tritt sein Worst Case nur selten auf, aber es ist instabil.

## Ablauf: Lineare Suche: Zielwert 23
nach: Lineare Suche
quelle: 03_fundamental-algorithms.pdf, Folien 5-11

```json
{
  "id": "lineare-suche",
  "intro": "find(arr, 23): Jedes Element wird der Reihe nach untersucht, bis das Ziel gefunden ist.",
  "visual": {"kind":"array","values":[4,8,15,16,23,42,45,52,55,70,72,80]},
  "steps": [
             {
               "title": "i = 0",
               "text": "arr[0] = 4 wird mit dem Zielwert 23 verglichen — kein Treffer.",
               "explanation": {
                                "action": "arr[0] mit dem Zielwert vergleichen.",
                                "rule": "<code>if (arr[i]==target) return i;</code>",
                                "decision": "4 ≠ 23 → die Schleife läuft mit i = 1 weiter."
                              },
               "highlights": [{"kind":"array-index","index":0,"role":"active"}]
             },
             {
               "title": "i = 1",
               "text": "arr[1] = 8 — kein Treffer.",
               "explanation": {
                                "action": "arr[1] mit dem Zielwert vergleichen.",
                                "rule": "<code>if (arr[i]==target) return i;</code>",
                                "decision": "8 ≠ 23 → weiter mit i = 2."
                              },
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"active"}
                             ]
             },
             {
               "title": "i = 2",
               "text": "arr[2] = 15 — kein Treffer.",
               "explanation": {
                                "action": "arr[2] mit dem Zielwert vergleichen.",
                                "rule": "<code>if (arr[i]==target) return i;</code>",
                                "decision": "15 ≠ 23 → weiter mit i = 3."
                              },
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"active"}
                             ]
             },
             {
               "title": "i = 3",
               "text": "arr[3] = 16 — kein Treffer.",
               "explanation": {
                                "action": "arr[3] mit dem Zielwert vergleichen.",
                                "rule": "<code>if (arr[i]==target) return i;</code>",
                                "decision": "16 ≠ 23 → weiter mit i = 4."
                              },
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"active"}
                             ]
             },
             {
               "title": "i = 4: gefunden",
               "text": "arr[4] = 23 stimmt mit dem Zielwert überein — return 4.",
               "explanation": {
                                "action": "arr[4] mit dem Zielwert vergleichen.",
                                "rule": "<code>if (arr[i]==target) return i;</code>",
                                "decision": "23 = 23 → return 4."
                              },
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"target"}
                             ]
             }
           ]
}
```

## Ablauf: Binäre Suche: Zielwert 70
nach: Binäre Suche
quelle: 03_fundamental-algorithms.pdf, Folien 16-23

```json
{
  "id": "binaere-suche",
  "intro": "Das sortierte Array wird wiederholt am mittleren Element (median) geteilt.",
  "visual": {"kind":"array","values":[4,8,15,16,23,42,45,52,55,70,72,80]},
  "steps": [
             {
               "title": "median = arr[5] = 42",
               "text": "Suchbereich 0-11, mid = (0+11)/2 = 5. 70 > 42 → weiter in der oberen Hälfte.",
               "explanation": {
                                "action": "mid = (low + high) / 2 = (0 + 11) / 2 = 5; target mit arr[mid] = 42 vergleichen.",
                                "rule": "Wenn target > median, suche in der oberen Hälfte des Arrays weiter.",
                                "decision": "70 > 42 → <code>binarySearch(arr, mid+1, high, target)</code> mit low = 6."
                              },
               "highlights": [{"kind":"array-index","index":5,"role":"active"}]
             },
             {
               "title": "median = arr[8] = 55",
               "text": "Suchbereich 6-11, mid = (6+11)/2 = 8. 70 > 55 → weiter in der oberen Hälfte.",
               "explanation": {
                                "action": "mid = (6 + 11) / 2 = 8; target mit arr[mid] = 55 vergleichen.",
                                "rule": "Wenn target > median, suche in der oberen Hälfte des Arrays weiter.",
                                "decision": "70 > 55 → weiter mit low = 9."
                              },
               "highlights": [
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":8,"role":"active"}
                             ]
             },
             {
               "title": "median = arr[10] = 72",
               "text": "Suchbereich 9-11, mid = (9+11)/2 = 10. 70 < 72 → weiter in der unteren Hälfte.",
               "explanation": {
                                "action": "mid = (9 + 11) / 2 = 10; target mit arr[mid] = 72 vergleichen.",
                                "rule": "Wenn target < median, suche in der unteren Hälfte des Arrays weiter.",
                                "decision": "70 < 72 → <code>binarySearch(arr, low, mid-1, target)</code> mit high = 9."
                              },
               "highlights": [
                               {"kind":"array-index","index":8,"role":"done"},
                               {"kind":"array-index","index":10,"role":"active"}
                             ]
             },
             {
               "title": "median = arr[9] = 70: gefunden",
               "text": "Suchbereich 9-9, mid = 9. 70 = 70 → return 9. Nach jeder Iteration blieb nur die Hälfte der Elemente übrig.",
               "explanation": {
                                "action": "mid = (9 + 9) / 2 = 9; target mit arr[mid] = 70 vergleichen.",
                                "rule": "Wenn target = median, gib den Index des mittleren Elements zurück.",
                                "decision": "70 = 70 → return 9."
                              },
               "highlights": [
                               {"kind":"array-index","index":10,"role":"done"},
                               {"kind":"array-index","index":9,"role":"target"}
                             ]
             }
           ]
}
```

## Ablauf: Insertion Sort
nach: Insertion Sort
quelle: 03_fundamental-algorithms.pdf, Folien 109-133

```json
{
  "id": "insertion-sort",
  "intro": "Jedes Element wird an die richtige Stelle im bereits sortierten linken Bereich eingefügt.",
  "visual": {"kind":"array","bars":true,"values":[4,3,1,9,2,10,6,8,7,5]},
  "steps": [
             {
               "title": "3 einfügen",
               "text": "3 < 4: die 4 gleitet nach rechts, 3 wird an Position 0 eingefügt → 3 4 1 9 2 10 6 8 7 5.",
               "explanation": {
                                "action": "i = 1: toInsert = 3.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "3 < 4 → 4 gleitet; bei j = 0 endet die Schleife, arr[0] = 3."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":3},
                           {"kind":"array-index","index":1,"value":4}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":1,"role":"done"}
                             ]
             },
             {
               "title": "1 einfügen",
               "text": "1 ist kleiner als 3 und 4: beide gleiten nach rechts → 1 3 4 9 2 10 6 8 7 5.",
               "explanation": {
                                "action": "i = 2: toInsert = 1.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "1 < 4 und 1 < 3 → beide gleiten; arr[0] = 1."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":1},
                           {"kind":"array-index","index":1,"value":3},
                           {"kind":"array-index","index":2,"value":4}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"}
                             ]
             },
             {
               "title": "9 bleibt",
               "text": "9 ist größer als 4 — keine Verschiebung nötig → 1 3 4 9 2 10 6 8 7 5.",
               "explanation": {
                                "action": "i = 3: toInsert = 9.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "9 < 4 ist falsch → die innere Schleife läuft nicht, 9 bleibt an Position 3."
                              },
               "highlights": [{"kind":"array-index","index":3,"role":"active"}]
             },
             {
               "title": "2 einfügen",
               "text": "2 wird zwischen 1 und 3 eingefügt → 1 2 3 4 9 10 6 8 7 5.",
               "explanation": {
                                "action": "i = 4: toInsert = 2.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "9, 4 und 3 gleiten; 2 < 1 ist falsch → arr[1] = 2."
                              },
               "values": [
                           {"kind":"array-index","index":1,"value":2},
                           {"kind":"array-index","index":2,"value":3},
                           {"kind":"array-index","index":3,"value":4},
                           {"kind":"array-index","index":4,"value":9}
                         ],
               "highlights": [
                               {"kind":"array-index","index":1,"role":"active"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"}
                             ]
             },
             {
               "title": "10 bleibt",
               "text": "10 ist größer als 9 — keine Verschiebung → 1 2 3 4 9 10 6 8 7 5.",
               "explanation": {
                                "action": "i = 5: toInsert = 10.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "10 < 9 ist falsch → 10 bleibt an Position 5."
                              },
               "highlights": [{"kind":"array-index","index":5,"role":"active"}]
             },
             {
               "title": "6 einfügen",
               "text": "6 wird zwischen 4 und 9 eingefügt → 1 2 3 4 6 9 10 8 7 5.",
               "explanation": {
                                "action": "i = 6: toInsert = 6.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "10 und 9 gleiten; 6 < 4 ist falsch → arr[4] = 6."
                              },
               "values": [
                           {"kind":"array-index","index":4,"value":6},
                           {"kind":"array-index","index":5,"value":9},
                           {"kind":"array-index","index":6,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":4,"role":"active"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"}
                             ]
             },
             {
               "title": "8 einfügen",
               "text": "8 wird zwischen 6 und 9 eingefügt → 1 2 3 4 6 8 9 10 7 5.",
               "explanation": {
                                "action": "i = 7: toInsert = 8.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "10 und 9 gleiten; 8 < 6 ist falsch → arr[5] = 8."
                              },
               "values": [
                           {"kind":"array-index","index":5,"value":8},
                           {"kind":"array-index","index":6,"value":9},
                           {"kind":"array-index","index":7,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":5,"role":"active"},
                               {"kind":"array-index","index":6,"role":"done"},
                               {"kind":"array-index","index":7,"role":"done"}
                             ]
             },
             {
               "title": "7 einfügen",
               "text": "7 wird zwischen 6 und 8 eingefügt → 1 2 3 4 6 7 8 9 10 5.",
               "explanation": {
                                "action": "i = 8: toInsert = 7.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "10, 9 und 8 gleiten; 7 < 6 ist falsch → arr[5] = 7."
                              },
               "values": [
                           {"kind":"array-index","index":5,"value":7},
                           {"kind":"array-index","index":6,"value":8},
                           {"kind":"array-index","index":7,"value":9},
                           {"kind":"array-index","index":8,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":5,"role":"active"},
                               {"kind":"array-index","index":6,"role":"done"},
                               {"kind":"array-index","index":7,"role":"done"},
                               {"kind":"array-index","index":8,"role":"done"}
                             ]
             },
             {
               "title": "5 einfügen: fertig",
               "text": "5 wird zwischen 4 und 6 eingefügt → 1 2 3 4 5 6 7 8 9 10. Das Array ist sortiert.",
               "explanation": {
                                "action": "i = 9: toInsert = 5.",
                                "rule": "Solange <code>toInsert &lt; arr[j-1]</code>, gleitet arr[j-1] eine Stelle nach rechts.",
                                "decision": "10, 9, 8, 7 und 6 gleiten; 5 < 4 ist falsch → arr[4] = 5."
                              },
               "values": [
                           {"kind":"array-index","index":4,"value":5},
                           {"kind":"array-index","index":5,"value":6},
                           {"kind":"array-index","index":6,"value":7},
                           {"kind":"array-index","index":7,"value":8},
                           {"kind":"array-index","index":8,"value":9},
                           {"kind":"array-index","index":9,"value":10}
                         ],
               "highlights": [{"kind":"array-index","index":4,"role":"active"}]
             }
           ]
}
```

## Ablauf: Bubble Sort: erster Durchlauf
nach: Bubble Sort
quelle: 03_fundamental-algorithms.pdf, Folien 141-158

```json
{
  "id": "bubble-sort-durchlauf",
  "intro": "Im ersten Durchlauf wandert das größte Element (10) durch Nachbartausche ans Ende.",
  "visual": {"kind":"array","bars":true,"values":[4,3,1,9,2,10,6,8,7,5]},
  "steps": [
             {
               "title": "4 und 3 tauschen",
               "text": "4 > 3 → Tausch: 3 4 1 9 2 10 6 8 7 5.",
               "explanation": {
                                "action": "Vergleiche die benachbarten Werte 4 und 3.",
                                "rule": "Bubble Sort tauscht Nachbarn, wenn der linke Wert größer ist.",
                                "decision": "4 > 3, daher werden beide Werte vertauscht."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":3},
                           {"kind":"array-index","index":1,"value":4}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":1,"role":"active"}
                             ]
             },
             {
               "title": "4 und 1 tauschen",
               "text": "4 > 1 → Tausch: 3 1 4 9 2 10 6 8 7 5.",
               "explanation": {
                                "action": "Vergleiche das nächste Nachbarpaar 4 und 1.",
                                "rule": "Bei falscher Reihenfolge wird das größere Element nach rechts geschoben.",
                                "decision": "4 > 1, daher wandert 4 eine Position weiter nach rechts."
                              },
               "values": [
                           {"kind":"array-index","index":1,"value":1},
                           {"kind":"array-index","index":2,"value":4}
                         ],
               "highlights": [
                               {"kind":"array-index","index":1,"role":"active"},
                               {"kind":"array-index","index":2,"role":"active"}
                             ]
             },
             {
               "title": "9 und 2 tauschen",
               "text": "4 < 9: kein Tausch. Dann 9 > 2 → Tausch: 3 1 4 2 9 10 6 8 7 5.",
               "explanation": {
                                "action": "Prüfe weiter von links nach rechts.",
                                "rule": "Paare in richtiger Reihenfolge bleiben unverändert; falsche Paare werden getauscht.",
                                "decision": "4 < 9 bleibt, aber 9 > 2 wird vertauscht."
                              },
               "values": [
                           {"kind":"array-index","index":3,"value":2},
                           {"kind":"array-index","index":4,"value":9}
                         ],
               "highlights": [
                               {"kind":"array-index","index":3,"role":"active"},
                               {"kind":"array-index","index":4,"role":"active"}
                             ]
             },
             {
               "title": "10 und 6 tauschen",
               "text": "9 < 10: kein Tausch. Dann 10 > 6 → Tausch: 3 1 4 2 9 6 10 8 7 5.",
               "explanation": {
                                "action": "Vergleiche weiter bis zum nächsten falschen Nachbarpaar.",
                                "rule": "Das größere Element wandert im Durchlauf schrittweise nach rechts.",
                                "decision": "10 > 6, daher wird 10 nach rechts geschoben."
                              },
               "values": [
                           {"kind":"array-index","index":5,"value":6},
                           {"kind":"array-index","index":6,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":5,"role":"active"},
                               {"kind":"array-index","index":6,"role":"active"}
                             ]
             },
             {
               "title": "10 und 8 tauschen",
               "text": "10 > 8 → Tausch: 3 1 4 2 9 6 8 10 7 5.",
               "explanation": {
                                "action": "Vergleiche 10 und 8.",
                                "rule": "Ist links größer als rechts, wird getauscht.",
                                "decision": "10 > 8, also wandert 10 weiter nach rechts."
                              },
               "values": [
                           {"kind":"array-index","index":6,"value":8},
                           {"kind":"array-index","index":7,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":6,"role":"active"},
                               {"kind":"array-index","index":7,"role":"active"}
                             ]
             },
             {
               "title": "10 und 7 tauschen",
               "text": "10 > 7 → Tausch: 3 1 4 2 9 6 8 7 10 5.",
               "explanation": {
                                "action": "Vergleiche 10 und 7.",
                                "rule": "Der gleiche Nachbarvergleich wird bis zum Ende des Bereichs wiederholt.",
                                "decision": "10 > 7, deshalb folgt der nächste Tausch."
                              },
               "values": [
                           {"kind":"array-index","index":7,"value":7},
                           {"kind":"array-index","index":8,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":7,"role":"active"},
                               {"kind":"array-index","index":8,"role":"active"}
                             ]
             },
             {
               "title": "10 und 5 tauschen: Durchlauf fertig",
               "text": "10 > 5 → Tausch: 3 1 4 2 9 6 8 7 5 10. Das größte Element steht am Ende; weitere Durchläufe sortieren den Rest.",
               "explanation": {
                                "action": "Vergleiche das letzte Nachbarpaar des Durchlaufs.",
                                "rule": "Nach einem vollständigen Durchlauf steht das größte Element am rechten Rand.",
                                "decision": "10 > 5, nach dem Tausch ist 10 am Ende fixiert."
                              },
               "values": [
                           {"kind":"array-index","index":8,"value":5},
                           {"kind":"array-index","index":9,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":8,"role":"active"},
                               {"kind":"array-index","index":9,"role":"done"}
                             ]
             }
           ]
}
```

## Ablauf: Selection Sort
nach: Selection Sort
quelle: 03_fundamental-algorithms.pdf, Folien 53-100

```json
{
  "id": "selection-sort",
  "intro": "In jedem Durchlauf wird das kleinste Element im unsortierten Bereich gesucht und an die erste unsortierte Stelle getauscht; der sortierte Bereich wächst von links.",
  "legend": {"target":"Kleinstes Element","done":"Sortierter Bereich"},
  "visual": {"kind":"array","bars":true,"values":[4,3,1,9,2,10,6,8,7,5]},
  "steps": [
             {
               "title": "Durchlauf 1: Minimum 1",
               "text": "Das kleinste Element im Bereich 0-9 ist 1 (Position 2) — Tausch mit Position 0.",
               "explanation": {
                                "action": "Suche das Minimum im gesamten noch unsortierten Bereich 0-9.",
                                "rule": "Selection Sort setzt das kleinste gefundene Element an die erste unsortierte Position.",
                                "decision": "1 ist das Minimum und wird mit Position 0 getauscht."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":1},
                           {"kind":"array-index","index":2,"value":4}
                         ],
               "highlights": [{"kind":"array-index","index":0,"role":"target"}]
             },
             {
               "title": "Durchlauf 2: Minimum 2",
               "text": "Das kleinste Element im Bereich 1-9 ist 2 (Position 4) — Tausch mit Position 1.",
               "explanation": {
                                "action": "Suche das Minimum im restlichen Bereich 1-9.",
                                "rule": "Der linke sortierte Bereich bleibt fixiert und wird nicht erneut verändert.",
                                "decision": "2 ist das Minimum des Restbereichs und kommt an Position 1."
                              },
               "values": [
                           {"kind":"array-index","index":1,"value":2},
                           {"kind":"array-index","index":4,"value":3}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"target"}
                             ]
             },
             {
               "title": "Durchlauf 3: Minimum 3",
               "text": "Das kleinste Element im Bereich 2-9 ist 3 (Position 4) — Tausch mit Position 2.",
               "explanation": {
                                "action": "Suche das Minimum im Bereich 2-9.",
                                "rule": "Nach jedem Durchlauf wächst der sortierte Bereich links um eine Position.",
                                "decision": "3 ist das nächste Minimum und wird an Position 2 gesetzt."
                              },
               "values": [
                           {"kind":"array-index","index":2,"value":3},
                           {"kind":"array-index","index":4,"value":4}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"target"}
                             ]
             },
             {
               "title": "Durchlauf 4: Minimum 4",
               "text": "Das kleinste Element im Bereich 3-9 ist 4 (Position 4) — Tausch mit Position 3.",
               "explanation": {
                                "action": "Suche das Minimum im Bereich 3-9.",
                                "rule": "Das gefundene Minimum wird an den Anfang des unsortierten Bereichs getauscht.",
                                "decision": "4 wird an Position 3 gesetzt; die ersten vier Werte sind sortiert."
                              },
               "values": [
                           {"kind":"array-index","index":3,"value":4},
                           {"kind":"array-index","index":4,"value":9}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"target"}
                             ]
             },
             {
               "title": "Durchlauf 5: Minimum 5",
               "text": "Das kleinste Element im Bereich 4-9 ist 5 (Position 9) — Tausch mit Position 4.",
               "explanation": {
                                "action": "Suche das Minimum im Bereich 4-9.",
                                "rule": "Nur der unsortierte Bereich wird durchsucht.",
                                "decision": "5 liegt am Ende des Restbereichs und wird nach Position 4 getauscht."
                              },
               "values": [
                           {"kind":"array-index","index":4,"value":5},
                           {"kind":"array-index","index":9,"value":9}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"target"}
                             ]
             },
             {
               "title": "Durchlauf 6: Minimum 6",
               "text": "Das kleinste Element im Bereich 5-9 ist 6 (Position 6) — Tausch mit Position 5.",
               "explanation": {
                                "action": "Suche das Minimum im Bereich 5-9.",
                                "rule": "Der kleinste Wert des Restbereichs besetzt die nächste freie sortierte Position.",
                                "decision": "6 ist das Minimum und wird an Position 5 gesetzt."
                              },
               "values": [
                           {"kind":"array-index","index":5,"value":6},
                           {"kind":"array-index","index":6,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"target"}
                             ]
             },
             {
               "title": "Durchlauf 7: Minimum 7",
               "text": "Das kleinste Element im Bereich 6-9 ist 7 (Position 8) — Tausch mit Position 6.",
               "explanation": {
                                "action": "Suche das Minimum im Bereich 6-9.",
                                "rule": "Die Auswahlregel bleibt in jedem Durchlauf gleich.",
                                "decision": "7 wird mit Position 6 getauscht."
                              },
               "values": [
                           {"kind":"array-index","index":6,"value":7},
                           {"kind":"array-index","index":8,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"target"}
                             ]
             },
             {
               "title": "Durchlauf 8: Minimum 8",
               "text": "Das kleinste Element im Bereich 7-9 ist 8 — es steht bereits an Position 7.",
               "explanation": {
                                "action": "Suche das Minimum im Bereich 7-9.",
                                "rule": "Wenn das Minimum bereits vorne steht, ist kein Tausch nötig.",
                                "decision": "8 bleibt an Position 7."
                              },
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"},
                               {"kind":"array-index","index":7,"role":"target"}
                             ]
             },
             {
               "title": "Durchlauf 9: Minimum 9 — fertig",
               "text": "Das kleinste Element im Bereich 8-9 ist 9 (Position 9) — Tausch mit Position 8. Nach n−1 Durchläufen ist das Array sortiert: 1 2 3 4 5 6 7 8 9 10.",
               "explanation": {
                                "action": "Bearbeite den letzten unsortierten Bereich.",
                                "rule": "Nach n−1 Durchläufen ist jedes Element an seiner sortierten Position.",
                                "decision": "9 und 10 werden in die endgültige Reihenfolge gebracht."
                              },
               "values": [
                           {"kind":"array-index","index":8,"value":9},
                           {"kind":"array-index","index":9,"value":10}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"},
                               {"kind":"array-index","index":7,"role":"done"},
                               {"kind":"array-index","index":8,"role":"done"},
                               {"kind":"array-index","index":9,"role":"done"}
                             ]
             }
           ]
}
```

## Ablauf: Quicksort: Partitionierung
nach: Quicksort: Partitionierung
quelle: 03_fundamental-algorithms.pdf, Folien 216-257

```json
{
  "id": "quicksort-partitionierung",
  "intro": "Pivot ist das letzte Element. Index i läuft von links, Index j von rechts; „fehl am Platz“ stehende Elemente werden getauscht.",
  "legend": {
              "target": "Pivot",
              "active": "Index i",
              "compare": "Index j",
              "done": "Linkes Teilarray (≤ Pivot)"
            },
  "visual": {"kind":"array","bars":true,"values":[4,3,1,9,2,10,6,8,7,5]},
  "steps": [
             {
               "title": "Pivot wählen",
               "text": "Als Pivot dient das letzte Element: p = 5.",
               "explanation": {
                                "action": "Pivot-Element festlegen.",
                                "rule": "Wähle das Pivot-Element; die Folie nimmt das letzte Element.",
                                "decision": "p = 5."
                              },
               "highlights": [{"kind":"array-index","index":9,"role":"target"}]
             },
             {
               "title": "i läuft von links",
               "text": "4, 3 und 1 sind kleiner als der Pivot; i stoppt bei Position 3, denn 9 >= 5.",
               "explanation": {
                                "action": "i von links nach rechts bewegen.",
                                "rule": "Gehe von links nach rechts (i = 0, 1, …) bis arr[i] ≥ p.",
                                "decision": "4, 3 und 1 sind kleiner als 5; bei i = 3 gilt 9 ≥ 5 → i stoppt."
                              },
               "highlights": [
                               {"kind":"array-index","index":3,"role":"active"},
                               {"kind":"array-index","index":9,"role":"target"}
                             ]
             },
             {
               "title": "j läuft von rechts",
               "text": "j stoppt sofort bei Position 9, denn 5 <= 5. Die Elemente an i und j stehen „fehl am Platz“.",
               "explanation": {
                                "action": "j von rechts nach links bewegen.",
                                "rule": "Gehe von rechts nach links (j = n−1, …) bis arr[j] ≤ p.",
                                "decision": "Bei j = 9 gilt 5 ≤ 5 → j stoppt sofort."
                              },
               "highlights": [
                               {"kind":"array-index","index":3,"role":"active"},
                               {"kind":"array-index","index":9,"role":"compare"}
                             ]
             },
             {
               "title": "Tausch 9 ↔ 5",
               "text": "arr[i] und arr[j] werden getauscht: 4 3 1 5 2 10 6 8 7 9.",
               "explanation": {
                                "action": "Die beiden „fehl am Platz“ stehenden Elemente tauschen.",
                                "rule": "Tausche arr[i] ↔ arr[j] und wiederhole ab Schritt 2 bis i > j.",
                                "decision": "i = 3 < j = 9 → 9 und 5 werden getauscht."
                              },
               "values": [
                           {"kind":"array-index","index":3,"value":5},
                           {"kind":"array-index","index":9,"value":9}
                         ],
               "highlights": [
                               {"kind":"array-index","index":3,"role":"active"},
                               {"kind":"array-index","index":9,"role":"compare"}
                             ]
             },
             {
               "title": "Weiter ab Schritt 2",
               "text": "i läuft weiter und stoppt bei Position 5 (10 >= 5); j läuft nach links und stoppt bei Position 4 (2 <= 5).",
               "explanation": {
                                "action": "Schritt 2 wiederholen.",
                                "rule": "i läuft bis arr[i] ≥ p, j läuft bis arr[j] ≤ p.",
                                "decision": "i stoppt bei 5 (10 ≥ 5), j stoppt bei 4 (2 ≤ 5)."
                              },
               "highlights": [
                               {"kind":"array-index","index":5,"role":"active"},
                               {"kind":"array-index","index":4,"role":"compare"}
                             ]
             },
             {
               "title": "i > j: Partitionierung fertig",
               "text": "Mit i = 5 und j = 4 ist i > j — der Vorgang endet. Links stehen alle Werte <= 5, rechts alle Werte >= 5; Quicksort wird nun rekursiv auf beide Teilarrays angewendet.",
               "explanation": {
                                "action": "Abbruchbedingung prüfen.",
                                "rule": "Wiederhole ab Schritt 2 bis i > j.",
                                "decision": "i = 5 > j = 4 → die Partitionierung endet."
                              },
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"}
                             ]
             }
           ]
}
```

## Ablauf: Mergesort: Zusammenführen
nach: Mergesort: Zusammenführen sortierter Arrays
quelle: 03_fundamental-algorithms.pdf, Folien 333-343

```json
{
  "id": "merge-sortierter-arrays",
  "intro": "Die sortierten Arrays A = [2, 8, 14, 24] und B = [5, 7, 9, 11] werden zu C zusammengeführt: A[i] und B[j] vergleichen, den kleineren Wert kopieren.",
  "visual": {
              "kind": "array",
              "label": "Merging",
              "values": ["","","","","","","",""],
              "arrays": [
                          {"id":"a","label":"A","values":[2,8,14,24]},
                          {"id":"b","label":"B","values":[5,7,9,11]},
                          {"id":"c","label":"C","values":["","","","","","","",""]}
                        ]
            },
  "steps": [
             {
               "title": "2 < 5",
               "text": "A[0] = 2 ist kleiner als B[0] = 5 → C[0] = 2; i wird erhöht.",
               "explanation": {
                                "action": "Vergleiche die aktuellen Köpfe A[i] und B[j].",
                                "rule": "Beim Merge wird der kleinere der beiden Werte in C[k] kopiert.",
                                "decision": "2 < 5, also wird A[0] nach C[0] übernommen."
                              },
               "values": [{"kind":"array-index","array":"c","index":0,"value":2}],
               "highlights": [
                               {"kind":"array-index","array":"a","index":0,"role":"active"},
                               {"kind":"array-index","array":"b","index":0,"role":"compare"},
                               {"kind":"array-index","array":"c","index":0,"role":"target"}
                             ]
             },
             {
               "title": "8 > 5",
               "text": "A[1] = 8 ist größer als B[0] = 5 → C[1] = 5; j wird erhöht.",
               "explanation": {
                                "action": "Vergleiche A[1] mit B[0].",
                                "rule": "Nach dem Kopieren wird nur der Zeiger des gewählten Arrays erhöht.",
                                "decision": "5 ist kleiner als 8, also wird B[0] nach C[1] kopiert."
                              },
               "values": [{"kind":"array-index","array":"c","index":1,"value":5}],
               "highlights": [
                               {"kind":"array-index","array":"a","index":0,"role":"done"},
                               {"kind":"array-index","array":"a","index":1,"role":"compare"},
                               {"kind":"array-index","array":"b","index":0,"role":"active"},
                               {"kind":"array-index","array":"c","index":0,"role":"done"},
                               {"kind":"array-index","array":"c","index":1,"role":"target"}
                             ]
             },
             {
               "title": "8 > 7",
               "text": "B[1] = 7 ist kleiner → C[2] = 7.",
               "explanation": {
                                "action": "Vergleiche A[1] mit B[1].",
                                "rule": "Der kleinere Kopf wandert in die nächste freie C-Position.",
                                "decision": "7 ist kleiner als 8, daher wird B[1] nach C[2] kopiert."
                              },
               "values": [{"kind":"array-index","array":"c","index":2,"value":7}],
               "highlights": [
                               {"kind":"array-index","array":"a","index":1,"role":"compare"},
                               {"kind":"array-index","array":"b","index":0,"role":"done"},
                               {"kind":"array-index","array":"b","index":1,"role":"active"},
                               {"kind":"array-index","array":"c","index":0,"role":"done"},
                               {"kind":"array-index","array":"c","index":1,"role":"done"},
                               {"kind":"array-index","array":"c","index":2,"role":"target"}
                             ]
             },
             {
               "title": "8 < 9",
               "text": "Jetzt ist A[1] = 8 kleiner als B[2] = 9 → C[3] = 8.",
               "explanation": {
                                "action": "Vergleiche A[1] mit B[2].",
                                "rule": "Die sortierten Teilarrays bleiben sichtbar; nur C wächst schrittweise.",
                                "decision": "8 ist kleiner als 9, also wird A[1] nach C[3] kopiert."
                              },
               "values": [{"kind":"array-index","array":"c","index":3,"value":8}],
               "highlights": [
                               {"kind":"array-index","array":"a","index":0,"role":"done"},
                               {"kind":"array-index","array":"a","index":1,"role":"active"},
                               {"kind":"array-index","array":"b","index":0,"role":"done"},
                               {"kind":"array-index","array":"b","index":1,"role":"done"},
                               {"kind":"array-index","array":"b","index":2,"role":"compare"},
                               {"kind":"array-index","array":"c","index":0,"role":"done"},
                               {"kind":"array-index","array":"c","index":1,"role":"done"},
                               {"kind":"array-index","array":"c","index":2,"role":"done"},
                               {"kind":"array-index","array":"c","index":3,"role":"target"}
                             ]
             },
             {
               "title": "14 > 9",
               "text": "B[2] = 9 ist kleiner → C[4] = 9.",
               "explanation": {
                                "action": "Vergleiche A[2] mit B[2].",
                                "rule": "Der Merge-Schritt entscheidet immer nur zwischen den aktuellen Kopfwerten.",
                                "decision": "9 ist kleiner als 14 und wird nach C[4] kopiert."
                              },
               "values": [{"kind":"array-index","array":"c","index":4,"value":9}],
               "highlights": [
                               {"kind":"array-index","array":"a","index":2,"role":"compare"},
                               {"kind":"array-index","array":"b","index":2,"role":"active"},
                               {"kind":"array-index","array":"c","index":0,"role":"done"},
                               {"kind":"array-index","array":"c","index":1,"role":"done"},
                               {"kind":"array-index","array":"c","index":2,"role":"done"},
                               {"kind":"array-index","array":"c","index":3,"role":"done"},
                               {"kind":"array-index","array":"c","index":4,"role":"target"}
                             ]
             },
             {
               "title": "14 > 11",
               "text": "B[3] = 11 ist kleiner → C[5] = 11. Damit ist B erschöpft.",
               "explanation": {
                                "action": "Vergleiche A[2] mit B[3].",
                                "rule": "Wenn ein Teilarray erschöpft ist, wird der Rest des anderen Arrays kopiert.",
                                "decision": "11 ist kleiner als 14; danach gibt es in B keinen weiteren Wert."
                              },
               "values": [{"kind":"array-index","array":"c","index":5,"value":11}],
               "highlights": [
                               {"kind":"array-index","array":"a","index":2,"role":"compare"},
                               {"kind":"array-index","array":"b","index":3,"role":"active"},
                               {"kind":"array-index","array":"c","index":0,"role":"done"},
                               {"kind":"array-index","array":"c","index":1,"role":"done"},
                               {"kind":"array-index","array":"c","index":2,"role":"done"},
                               {"kind":"array-index","array":"c","index":3,"role":"done"},
                               {"kind":"array-index","array":"c","index":4,"role":"done"},
                               {"kind":"array-index","array":"c","index":5,"role":"target"}
                             ]
             },
             {
               "title": "Rest von A kopieren: fertig",
               "text": "Da B erschöpft ist (j >= Länge von B), werden die restlichen Werte von A übernommen: C = [2, 5, 7, 8, 9, 11, 14, 24].",
               "values": [
                           {"kind":"array-index","array":"c","index":6,"value":14},
                           {"kind":"array-index","array":"c","index":7,"value":24}
                         ],
               "explanation": {
                                "action": "Kopiere die übrigen Werte aus A.",
                                "rule": "Sobald ein Teilarray leer ist, muss nicht mehr verglichen werden.",
                                "decision": "14 und 24 werden direkt nach C[6] und C[7] übernommen."
                              },
               "highlights": [
                               {"kind":"array-index","array":"a","index":2,"role":"active"},
                               {"kind":"array-index","array":"a","index":3,"role":"active"},
                               {"kind":"array-index","array":"b","index":0,"role":"done"},
                               {"kind":"array-index","array":"b","index":1,"role":"done"},
                               {"kind":"array-index","array":"b","index":2,"role":"done"},
                               {"kind":"array-index","array":"b","index":3,"role":"done"},
                               {"kind":"array-index","array":"c","index":0,"role":"done"},
                               {"kind":"array-index","array":"c","index":1,"role":"done"},
                               {"kind":"array-index","array":"c","index":2,"role":"done"},
                               {"kind":"array-index","array":"c","index":3,"role":"done"},
                               {"kind":"array-index","array":"c","index":4,"role":"done"},
                               {"kind":"array-index","array":"c","index":5,"role":"done"},
                               {"kind":"array-index","array":"c","index":6,"role":"target"},
                               {"kind":"array-index","array":"c","index":7,"role":"target"}
                             ]
             }
           ]
}
```
