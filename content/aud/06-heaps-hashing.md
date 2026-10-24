---
id: heaps-hashing
title: Heaps & Hashing
icon: 🗂️
---

## Karte: Vollständiger Binärbaum
tag: def
quelle: 06_heaps_hash-tables.pdf, Folien 3-5

Ein Binärbaum der Höhe h(T) ist vollständig, wenn die Ebenen 0 bis h−1 vollständig belegt sind und es links von einem Knoten in der Ebene h keine „Lücken“ gibt.

## Karte: Vollständiger Binärbaum als Array
tag: formel
quelle: 06_heaps_hash-tables.pdf, Folien 6-10

Ein vollständiger Binärbaum lässt sich einfach als Array darstellen: Die Knoten werden in der Reihenfolge gespeichert, in der sie bei einer Level-Order-Traversierung besucht werden (von oben nach unten, von links nach rechts). Navigation: Wurzel = a[0]; für den Knoten a[i] liegt das linke Kind in a[2·i+1], das rechte Kind in a[2·i+2] und der Elternknoten in a[(i−1)/2].

## Karte: Heap (Halde)
tag: def
quelle: 06_heaps_hash-tables.pdf, Folie 12

Ein vollständiger Binärbaum, bei dem jeder innere Knoten bei <b>max-at-top</b> Heaps größer oder gleich, bei <b>min-at-top</b> Heaps kleiner oder gleich seinen Kindern ist. Die verwendeten Heaps sind min-at-top: Der kleinste Wert befindet sich immer an der Wurzel; der größte Wert kann in jedem beliebigen Blatt vorkommen.

## Karte: Heap: Operationen
tag: wichtig
quelle: 06_heaps_hash-tables.pdf, Folien 13, 34-35

<b>insert(e):</b> fügt e in den nächsten freien Platz ein (erweitert das Array bei Bedarf) und „verschiebt“ das neue Element nach oben (shiftUp), bis es <= seinen Kindern ist oder Wurzel wird. <b>remove():</b> entfernt das Wurzelelement und gibt es zurück; versetzt das letzte Element an die Wurzel und „verschiebt“ es nach unten (shiftDown), bis die Heap-Bedingung wieder gilt. <b>makeHeap():</b> wandelt ein Array in einen Heap um — shiftDown wird vom Elternknoten des letzten Elements (parentOfLast = (last−1)/2) rückwärts bis zur Wurzel aufgerufen.

## Karte: Heap: Zeitkomplexität
tag: formel
quelle: 06_heaps_hash-tables.pdf, Folie 49

Ein Heap mit n Elementen hat eine Höhe von <= log₂n. Daher haben sowohl Entfernen als auch Einfügen eine Zeitkomplexität von O(log₂n): Beim Herab- bzw. Hochsuchen werden höchstens log₂n Ebenen durchlaufen, mit konstant vielen Operationen pro Ebene. Die Erstellung eines Heaps aus einem Array (makeHeap) beträgt O(n).

## Karte: Heapsort
tag: def
quelle: 06_heaps_hash-tables.pdf, Folien 50-52

Selection Sort ermittelt wiederholt das größte verbleibende Element per linearem Durchlauf — O(n) Schritte pro Durchlauf, insgesamt O(n²). Heapsort ermittelt wiederholt das kleinste verbleibende Element und setzt es an seinen Platz: Das Array wird in einen Heap umgewandelt, sodass das kleinste verbleibende Element in O(log₂n) Schritten gefunden und entfernt werden kann — insgesamt O(n·log₂n). Ablauf: heap.remove() liefert das kleinste Element, das ans Ende des unsortierten Bereichs gesetzt wird.

## Karte: Heapsort im Vergleich
tag: wichtig
quelle: 06_heaps_hash-tables.pdf, Folie 68

Heapsort: best, average und worst case O(n·log₂n), <b>instabil</b>. Heapsort erreicht die gleiche Worst-Case-Zeitkomplexität wie Mergesort, hat aber eine bessere Raumkomplexität. Insertion Sort eignet sich nach wie vor am besten für fast sortierte Arrays — Heapsort mischt ein fast sortiertes Array vor dem Sortieren durcheinander. Quicksort ist im Durchschnitt in der Regel immer noch am schnellsten.

## Karte: Hashing: Idee
tag: def
quelle: 06_heaps_hash-tables.pdf, Folien 69-71

Die optimale Such- und Einfügeleistung wird erreicht, wenn der Schlüssel als Index in einem Array behandelt werden kann (Beispiel Trikotnummer: Suche und Einfügen in O(1)). Hashing: eine Hash-Funktion wandelt die Schlüssel in Array-Indizes um; der Bereich der möglichen Hash-Werte muss der Größe des Arrays entsprechen; Techniken behandeln Fälle, in denen mehreren Elementen derselbe Hash-Wert zugewiesen wird. Die resultierende Datenstruktur heißt Hash-Tabelle.

## Karte: Hash-Funktion und Kollision
tag: def
quelle: 06_heaps_hash-tables.pdf, Folie 72

Für eine Hash-Tabelle der Größe n definiert die Hash-Funktion eine Abbildung von der Menge der möglichen Schlüsselwerte auf die ganzen Zahlen von 0 bis n−1; h(key) wird als Hash-Code bezeichnet. Eine <b>Kollision</b> tritt auf, wenn Elementen mit unterschiedlichen Schlüsselwerten derselbe Hash-Code zugewiesen wird.

## Karte: Kollisionen I: Separate Verkettung
tag: wichtig
quelle: 06_heaps_hash-tables.pdf, Folien 73-74

Elemente mit demselben Hash-Code werden „verkettet“: Jede Position der Hash-Tabelle dient als „Bucket“ für mehrere Datenelemente. Implementierung 1 — jeder Bucket ist ein Array: große Buckets können Speicher verschwenden, ein Bucket kann voll werden (Überlauf beim Hinzufügen zu einem vollen Bucket). Implementierung 2 — jeder Bucket ist eine verkettete Liste: die Verweise in den Knoten beanspruchen zusätzlichen Speicherplatz.

## Karte: Kollisionen II: Offene Adressierung
tag: def
quelle: 06_heaps_hash-tables.pdf, Folie 75

Ist die von der Hash-Funktion zugewiesene Position belegt, wird eine andere freie Position gesucht — dieser Vorgang heißt Sondieren (Probing). Auch die Suche nach einem Element sondiert: Sie kann erst beendet werden, wenn eine freie Position erreicht wird. Drei Verfahren: lineare Sondierung, quadratische Sondierung, doppeltes Hashing.

## Karte: Lineare Sondierung
tag: wichtig
quelle: 06_heaps_hash-tables.pdf, Folien 76-79

Ablauf: h(key), h(key)+1, h(key)+2, …, wobei bei Bedarf ein Sprung an den Anfang erfolgt. <b>Vorteil:</b> Wenn eine freie Position vorhanden ist, wird sie irgendwann gefunden. <b>Nachteil:</b> Es bilden sich „Cluster“ belegter Positionen, wodurch die Längen nachfolgender Sondierungen tendenziell zunehmen (Sondierungslänge = Anzahl der betrachteten Positionen).

## Karte: Quadratische Sondierung
tag: wichtig
quelle: 06_heaps_hash-tables.pdf, Folien 80-83

Die Offsets sind perfekte Quadrate: h + 1², h + 2², h + 3², … (mit Sprung an den Anfang bei Bedarf). <b>Vorteil:</b> reduziert Clustering. <b>Nachteil:</b> Es kann vorkommen, dass keine offene Stelle gefunden wird, obwohl eine existiert.

## Karte: Doppeltes Hashing
tag: wichtig
quelle: 06_heaps_hash-tables.pdf, Folien 84-86

Verwendet zwei Hash-Funktionen: h1 berechnet den Hash-Code, h2 den Schrittwert für die Suche. Kombiniert die Vorteile der linearen und der quadratischen Sondierung: verringert die Häufung und findet eine freie Position, sofern eine vorhanden ist — vorausgesetzt, die Tabellengröße ist eine Primzahl.

## Karte: Offene Adressierung: Elemente entfernen
tag: wichtig
quelle: 06_heaps_hash-tables.pdf, Folien 87-90

Beim einfachen Entfernen würden spätere Suchen fälschlich abbrechen (die Suche stoppt bei einer freien Position, obwohl das gesuchte Element weiter hinten liegt). Deshalb wird an der Position ein spezieller Wert hinterlassen: Es gibt drei Arten von Positionen — belegt, leer, entfernt. Die Suche endet bei einer leeren Position, nicht jedoch bei einer entfernten; eingefügt werden kann in leere oder entfernte Positionen.

## Karte: Überlauf und Auslastungsgrad
tag: formel
quelle: 06_heaps_hash-tables.pdf, Folie 96

Überlauf = es kann kein Platz für ein Element gefunden werden. Um Überlauf zu vermeiden und Suchzeiten zu verkürzen, sollte die Hash-Tabelle vergrößert werden, wenn der Prozentsatz belegter Positionen zu hoch wird. Auslastungsgrad = Anzahl der Schlüssel / Größe der Tabelle. Richtwerte: offene Adressierung unter ½, separate Verkettung unter 1. Problem: ggf. muss für alle vorhandenen Elemente der Hash-Code neu berechnet werden.

## Karte: Eigenschaften einer guten Hash-Funktion
tag: wichtig
quelle: 06_heaps_hash-tables.pdf, Folie 97

1. effizient zu berechnen; 2. nutzt den gesamten Schlüssel (die Änderung eines beliebigen Zeichens sollte den Hash-Code ändern); 3. verteilt die Schlüssel mehr oder weniger gleichmäßig über die Tabelle; 4. muss eine Funktion sein. Mit dem Modulo-Operator wird ein valider Index erzeugt: index = h(k) % table_size. In Java hat jedes Objekt eine hashCode()-Methode (Default basiert auf dem Speicherort; Klassen können sie überschreiben).

## Karte: Hash-Funktionen für Zeichenketten
tag: beispiel
quelle: 06_heaps_hash-tables.pdf, Folie 98

<b>Version 1 — Summe der Unicode-Werte:</b> z. B. h('eat') = 101 + 97 + 116 = 314. Achtung: Alle Permutationen eines Zeichensatzes erhalten den gleichen Code (h('tea') = h('eat')). <b>Version 2 — gewichtete Summe der Unicode-Werte</b> mit Potenzen einer Konstante b: Die Positionen der Zeichen beeinflussen den Hash-Code, verschiedene Permutationen erhalten unterschiedliche Codes. Java verwendet b = 31 in der hashCode()-Methode der String-Klasse.

## Karte: Hash-Tabelle: Effizienz
tag: formel
quelle: 06_heaps_hash-tables.pdf, Folie 99

Im besten Fall sind Suche und Einfügen O(1). Im schlimmsten Fall linear: offene Adressierung O(m) mit m = Größe der Hash-Tabelle, separate Verkettung O(n) mit n = Anzahl der Schlüssel. Bei guter Wahl von Hash-Funktion und Tabellengröße ist die Komplexität im Allgemeinen besser als O(log n) und nähert sich O(1). Zeit-Raum-Tradeoff: Größere Tabellen haben eine bessere Leistung, verbrauchen aber mehr Speicher.

## Frage: Wann ist ein Binärbaum vollständig?
id: 4j5d54
quelle: 06_heaps_hash-tables.pdf, Folien 3-5

Wenn die Ebenen 0 bis h−1 vollständig belegt sind und es links von einem Knoten in der Ebene h keine Lücken gibt.

## Frage: Wo liegen im Array-dargestellten vollständigen Binärbaum die Kinder und der Elternknoten von a[i]?
id: 13hsvxq
quelle: 06_heaps_hash-tables.pdf, Folie 10

Linkes Kind: a[2·i+1], rechtes Kind: a[2·i+2], Elternknoten: a[(i−1)/2]. Die Wurzel ist a[0].

## Frage: Was ist ein min-at-top Heap?
id: ey55vx
quelle: 06_heaps_hash-tables.pdf, Folie 12

Ein vollständiger Binärbaum, bei dem jeder innere Knoten kleiner oder gleich seinen Kindern ist. Der kleinste Wert steht immer an der Wurzel; der größte Wert kann in jedem beliebigen Blatt vorkommen.

## Frage: Wie funktioniert remove() bei einem Heap, und welche Komplexität hat es?
id: 1i3ay4x
quelle: 06_heaps_hash-tables.pdf, Folien 13, 49

Das Wurzelelement wird entfernt und zurückgegeben; das letzte Element des Heaps wird an die Wurzel versetzt und per shiftDown nach unten verschoben, bis die Heap-Bedingung wieder gilt. Komplexität O(log₂n), da höchstens log₂n Ebenen durchlaufen werden.

## Frage: Welche Komplexitäten hat ein Heap?
id: 1ltgdyv
quelle: 06_heaps_hash-tables.pdf, Folie 49

Beim Heap dauern insert und remove O(log₂n), makeHeap dauert O(n), und die Höhe ist höchstens log₂n.

## Frage: Warum ist Heapsort effizienter als Selection Sort?
id: 16dl7pl
quelle: 06_heaps_hash-tables.pdf, Folien 50-51

Selection Sort findet das jeweils kleinste/größte verbleibende Element per linearem Durchlauf (O(n) pro Durchlauf, insgesamt O(n²)). Heapsort wandelt das Array in einen Heap um und kann das kleinste verbleibende Element in O(log₂n) Schritten finden und entfernen — insgesamt O(n·log₂n).

## Frage: Wie schneidet Heapsort im Vergleich zu Mergesort und Quicksort ab?
id: 8b2prn
quelle: 06_heaps_hash-tables.pdf, Folie 68

Heapsort erreicht wie Mergesort O(n·log₂n) im Worst Case, hat aber eine bessere Raumkomplexität; es ist instabil. Quicksort ist im Durchschnitt in der Regel am schnellsten. Für fast sortierte Arrays bleibt Insertion Sort am besten — Heapsort mischt ein fast sortiertes Array vor dem Sortieren durcheinander.

## Frage: Was ist eine Kollision beim Hashing?
id: ijzvb5
quelle: 06_heaps_hash-tables.pdf, Folie 72

Wenn Elementen mit unterschiedlichen Schlüsselwerten derselbe Hash-Code zugewiesen wird.

## Frage: Was macht eine Hash-Funktion?
id: 15y30j8
quelle: 06_heaps_hash-tables.pdf, Folie 72

Eine Hash-Funktion bildet Schlüsselwerte auf ganze Zahlen von 0 bis n−1 ab; h(key) ist der Hash-Code.

## Frage: Welche zwei grundlegenden Strategien zur Kollisionsbehandlung gibt es?
id: 124q3v3
quelle: 06_heaps_hash-tables.pdf, Folien 73-75

Separate Verkettung (jede Position ist ein Bucket — als Array oder verkettete Liste — für mehrere Elemente) und offene Adressierung (bei belegter Position wird per Sondieren eine andere freie Position gesucht: linear, quadratisch oder doppeltes Hashing).

## Frage: Was ist der Nachteil der linearen Sondierung, und wie helfen quadratische Sondierung und doppeltes Hashing?
id: lil41o
quelle: 06_heaps_hash-tables.pdf, Folien 76-86

Bei linearer Sondierung bilden sich Cluster belegter Positionen, die nachfolgende Sondierungen verlängern. Quadratische Sondierung (Offsets 1², 2², 3², …) reduziert Clustering, findet aber evtl. keine offene Stelle. Doppeltes Hashing (h1 = Hash-Code, h2 = Schrittwert) kombiniert beide Vorteile und findet eine freie Position, sofern die Tabellengröße eine Primzahl ist.

## Frage: Warum braucht man bei offener Adressierung den Zustand „entfernt“?
id: 1tg020q
quelle: 06_heaps_hash-tables.pdf, Folien 87-90

Die Suche endet bei einer leeren Position. Würde ein Element einfach gelöscht, könnte die Suche nach einem später einsortierten Element fälschlich abbrechen. Deshalb gibt es drei Positionsarten: belegt, leer, entfernt — die Suche läuft über entfernte Positionen hinweg, eingefügt werden darf in leere und entfernte.

## Frage: Wie ist der Auslastungsgrad definiert, und welche Richtwerte gelten?
id: h2xlpz
quelle: 06_heaps_hash-tables.pdf, Folie 96

Auslastungsgrad = Anzahl der Schlüssel in der Tabelle / Größe der Tabelle. Bei offener Adressierung sollte er unter ½ bleiben, bei separater Verkettung unter 1.

## Frage: Warum ist die Summe der Unicode-Werte keine gute Hash-Funktion für Strings?
id: ppdlsp
quelle: 06_heaps_hash-tables.pdf, Folie 98

Alle Permutationen eines Zeichensatzes erhalten den gleichen Code (h('tea') = h('eat')). Besser ist eine gewichtete Summe mit Potenzen einer Konstante b, sodass die Zeichenpositionen den Code beeinflussen — Java nutzt b = 31 in String.hashCode().

## Frage: Welche Worst-Case-Komplexität hat eine Hash-Tabelle?
id: gu1uz4
quelle: 06_heaps_hash-tables.pdf, Folie 99

Bei offener Adressierung ist der Worst Case O(m) mit m als Tabellengröße, bei separater Verkettung O(n) mit n als Anzahl der Schlüssel; der Best Case ist O(1).

## Ablauf: Heapsort
nach: Heapsort
quelle: 06_heaps_hash-tables.pdf, Folien 52-67

```json
{
  "id": "heapsort",
  "intro": "Min-at-top Heap: remove() liefert wiederholt das kleinste Element, das ans Ende des unsortierten Bereichs gesetzt wird.",
  "visual": {"kind":"array","bars":true,"values":[13,6,45,10,3,22,5]},
  "steps": [
             {
               "title": "Heap aufbauen",
               "text": "new Heap(arr) wandelt das Array per makeHeap in einen min-at-top Heap um: 3 6 5 10 13 22 45.",
               "explanation": {
                                "action": "<code>Heap heap = new Heap(arr);</code>",
                                "rule": "Heapsort ermittelt wiederholt das kleinste verbleibende Element und setzt es an seinen Platz.",
                                "decision": "Der Heap ist 3 6 5 10 13 22 45; endUnsorted = 6."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":3},
                           {"kind":"array-index","index":1,"value":6},
                           {"kind":"array-index","index":2,"value":5},
                           {"kind":"array-index","index":3,"value":10},
                           {"kind":"array-index","index":4,"value":13},
                           {"kind":"array-index","index":5,"value":22},
                           {"kind":"array-index","index":6,"value":45}
                         ],
               "highlights": [{"kind":"array-index","index":0,"role":"active"}]
             },
             {
               "title": "remove() → 3",
               "text": "Das kleinste Element 3 wird entfernt und an Position 6 gesetzt; der Heap ordnet sich neu: 5 6 22 10 13 45 | 3.",
               "explanation": {
                                "action": "heap.remove() liefert 3.",
                                "rule": "<code>arr[endUnsorted] = smallestRemaining; endUnsorted--;</code>",
                                "decision": "3 steht an Position 6; endUnsorted = 5."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":5},
                           {"kind":"array-index","index":1,"value":6},
                           {"kind":"array-index","index":2,"value":22},
                           {"kind":"array-index","index":3,"value":10},
                           {"kind":"array-index","index":4,"value":13},
                           {"kind":"array-index","index":5,"value":45},
                           {"kind":"array-index","index":6,"value":3}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":6,"role":"done"}
                             ]
             },
             {
               "title": "remove() → 5",
               "text": "Das kleinste Element 5 wird entfernt und an Position 5 gesetzt: 6 10 22 45 13 | 5 3.",
               "explanation": {
                                "action": "heap.remove() liefert 5.",
                                "rule": "<code>arr[endUnsorted] = smallestRemaining; endUnsorted--;</code>",
                                "decision": "5 steht an Position 5; endUnsorted = 4."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":6},
                           {"kind":"array-index","index":1,"value":10},
                           {"kind":"array-index","index":2,"value":22},
                           {"kind":"array-index","index":3,"value":45},
                           {"kind":"array-index","index":4,"value":13},
                           {"kind":"array-index","index":5,"value":5}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"}
                             ]
             },
             {
               "title": "remove() → 6",
               "text": "Das kleinste Element 6 wird entfernt und an Position 4 gesetzt: 10 13 22 45 | 6 5 3.",
               "source": "06_heaps_hash-tables.pdf, Folie 59",
               "explanation": {
                                "action": "heap.remove() liefert 6.",
                                "rule": "<code>arr[endUnsorted] = smallestRemaining; endUnsorted--;</code>",
                                "decision": "6 steht an Position 4; endUnsorted = 3."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":10},
                           {"kind":"array-index","index":1,"value":13},
                           {"kind":"array-index","index":2,"value":22},
                           {"kind":"array-index","index":3,"value":45},
                           {"kind":"array-index","index":4,"value":6},
                           {"kind":"array-index","index":5,"value":5},
                           {"kind":"array-index","index":6,"value":3}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"}
                             ]
             },
             {
               "title": "remove() → 10",
               "text": "Das kleinste Element 10 wird entfernt und an Position 3 gesetzt: 13 45 22 | 10 6 5 3.",
               "source": "06_heaps_hash-tables.pdf, Folie 61",
               "explanation": {
                                "action": "heap.remove() liefert 10.",
                                "rule": "<code>arr[endUnsorted] = smallestRemaining; endUnsorted--;</code>",
                                "decision": "10 steht an Position 3; endUnsorted = 2."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":13},
                           {"kind":"array-index","index":1,"value":45},
                           {"kind":"array-index","index":2,"value":22},
                           {"kind":"array-index","index":3,"value":10},
                           {"kind":"array-index","index":4,"value":6},
                           {"kind":"array-index","index":5,"value":5},
                           {"kind":"array-index","index":6,"value":3}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"}
                             ]
             },
             {
               "title": "remove() → 13",
               "text": "Das kleinste Element 13 wird entfernt und an Position 2 gesetzt: 22 45 | 13 10 6 5 3.",
               "source": "06_heaps_hash-tables.pdf, Folie 63",
               "explanation": {
                                "action": "heap.remove() liefert 13.",
                                "rule": "<code>arr[endUnsorted] = smallestRemaining; endUnsorted--;</code>",
                                "decision": "13 steht an Position 2; endUnsorted = 1."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":22},
                           {"kind":"array-index","index":1,"value":45},
                           {"kind":"array-index","index":2,"value":13},
                           {"kind":"array-index","index":3,"value":10},
                           {"kind":"array-index","index":4,"value":6},
                           {"kind":"array-index","index":5,"value":5},
                           {"kind":"array-index","index":6,"value":3}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"}
                             ]
             },
             {
               "title": "remove() → 22",
               "text": "Das kleinste Element 22 wird entfernt und an Position 1 gesetzt: 45 | 22 13 10 6 5 3.",
               "source": "06_heaps_hash-tables.pdf, Folie 65",
               "explanation": {
                                "action": "heap.remove() liefert 22.",
                                "rule": "<code>arr[endUnsorted] = smallestRemaining; endUnsorted--;</code>",
                                "decision": "22 steht an Position 1; endUnsorted = 0."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":45},
                           {"kind":"array-index","index":1,"value":22},
                           {"kind":"array-index","index":2,"value":13},
                           {"kind":"array-index","index":3,"value":10},
                           {"kind":"array-index","index":4,"value":6},
                           {"kind":"array-index","index":5,"value":5},
                           {"kind":"array-index","index":6,"value":3}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"active"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"}
                             ]
             },
             {
               "title": "Schleife endet",
               "text": "Mit endUnsorted = 0 endet die Schleife. Ergebnis: 45 22 13 10 6 5 3 — mit dem min-at-top Heap entsteht die absteigende Reihenfolge.",
               "source": "06_heaps_hash-tables.pdf, Folie 67",
               "explanation": {
                                "action": "Schleifenbedingung prüfen.",
                                "rule": "<code>while (endUnsorted &gt; 0)</code>",
                                "decision": "0 > 0 ist falsch → heapSort ist fertig."
                              },
               "values": [
                           {"kind":"array-index","index":0,"value":45},
                           {"kind":"array-index","index":1,"value":22},
                           {"kind":"array-index","index":2,"value":13},
                           {"kind":"array-index","index":3,"value":10},
                           {"kind":"array-index","index":4,"value":6},
                           {"kind":"array-index","index":5,"value":5},
                           {"kind":"array-index","index":6,"value":3}
                         ],
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"},
                               {"kind":"array-index","index":2,"role":"done"},
                               {"kind":"array-index","index":3,"role":"done"},
                               {"kind":"array-index","index":4,"role":"done"},
                               {"kind":"array-index","index":5,"role":"done"},
                               {"kind":"array-index","index":6,"role":"done"}
                             ]
             }
           ]
}
```
