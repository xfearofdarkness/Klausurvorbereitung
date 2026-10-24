---
id: entwurfsverfahren
title: Entwurfsverfahren
icon: 🧩
---

## Karte: Vier Entwurfsverfahren für Algorithmen
tag: wichtig
quelle: 09_algorithm-patterns.pdf, Folien 2, 70

<b>Brute-Force:</b> alle Möglichkeiten systematisch prüfen. <b>Backtracking:</b> Irrwege erkennen, zurückgehen & neu probieren. <b>Greedy:</b> immer die lokal beste Wahl treffen. <b>Dynamische Programmierung:</b> Ergebnisse speichern und wiederverwenden.

## Karte: Brute-Force (erschöpfende Suche)
tag: def
quelle: 09_algorithm-patterns.pdf, Folie 4

Auch: Brute-Force-Suche (brute force = rohe Gewalt), exhaustive search. Ziel: eine korrekte Lösung finden. Einfachster Ansatz: alle möglichen Lösungen durchprobieren, bis die richtige gefunden ist. Sehr aufwendig, manchmal aber das einzige Mittel der Wahl. Anwendungen: „Knacken“ von Passwörtern (Security), Spieltheorie (z. B. Computer-Schach).

## Karte: Türme von Hanoi
tag: beispiel
quelle: 09_algorithm-patterns.pdf, Folien 5-7

Gegeben: 3 Pfosten mit n unterschiedlich großen Scheiben; alle Scheiben liegen nach Größe geordnet als Turm auf Pfosten 1; Ziel: alle n Scheiben nach Pfosten 3 legen. Restriktionen: immer nur die oberste Scheibe eines Pfostens nehmen; niemals eine größere auf eine kleinere Scheibe legen. Rekursives Muster für h Scheiben (von, nach, über): 1. (h−1) Scheiben (von, über, nach), 2. von → nach, 3. (h−1) Scheiben (über, nach, von). Zeitkomplexität O(2ⁿ). Zwei Möglichkeiten für jede Platte; zusätzlicher Platz O(n) für die Funktionsaufrufe (Stack).

## Karte: Backtracking
tag: def
quelle: 09_algorithm-patterns.pdf, Folie 8

Prinzip: Versuch, eine Teillösung eines Problems systematisch zu einer Gesamtlösung auszubauen. Ist ein weiterer Ausbau nicht mehr möglich („Sackgasse“), werden eine oder mehrere der letzten Teilschritte rückgängig gemacht, und die reduzierte Teillösung wird auf einem anderen Weg ausgebaut. Bis eine Lösung gefunden wird oder man erkennt, dass keine existiert. Bekannte Probleme: Springerproblem, Acht-Damenproblem, Labyrinthsuche.

## Karte: Damenproblem
tag: beispiel
quelle: 09_algorithm-patterns.pdf, Folie 9

Platziere n Damen auf einem n×n-Schachbrett, sodass sie sich gegenseitig nicht bedrohen (Standard: n = 8). Schema: setzeDamen(n, Spielfeld) gibt bei n = 0 die Lösung aus; sonst wird die Dame auf alle gültigen (freien, nicht bedrohten) Felder gesetzt und rekursiv setzeDamen(n−1, …) aufgerufen.

## Karte: Kombinatorische Optimierungsprobleme
tag: def
quelle: 09_algorithm-patterns.pdf, Folie 10

<b>Problem des Handlungsreisenden (TSP):</b> Wähle eine Reihenfolge für den Besuch mehrerer Orte, sodass keine Station außer der ersten mehr als einmal besucht wird, die gesamte Reisestrecke möglichst kurz und die erste Station gleich der letzten ist. <b>Rucksackproblem:</b> Aus einer Menge von Objekten mit Gewicht und Nutzwert soll eine Teilmenge gewählt werden, deren Gesamtgewicht eine Gewichtsschranke nicht überschreitet und deren Nutzwert maximal ist.

## Karte: Verbesserungen der erschöpfenden Suche
tag: wichtig
quelle: 09_algorithm-patterns.pdf, Folie 11

<b>Suchraum begrenzen („Pruning“):</b> Branch and bound. Alle Äste des Suchbaums abschneiden, für die sicher ist, dass dort keine optimale Lösung zu finden ist. <b>Approximation mittels Greedy:</b> dem Optimum annähern, z. B. Objekte absteigend nach Nutzen/Kosten-Faktor sortieren. <b>Dynamische Programmierung:</b> ganzzahlige Gewichte gegen Objekte in einer Matrix abtragen; jede Zelle enthält den maximalen Nutzwert für ein Teilproblem.

## Karte: Rucksackproblem (Definition)
tag: def
quelle: 09_algorithm-patterns.pdf, Folie 13

Gegeben ein Rucksack mit maximaler Kapazität cmax und eine Menge S aus n Gegenständen; jedes Element i hat ein Gewicht wi und einen Nutzwert bi (alle Werte ganzzahlig). Frage: Wie wird der Rucksack gepackt, um den maximalen Gesamtwert zu erreichen? Folienbeispiel: Elemente 1-5 mit Gewichten 1, 2, 2, 5, 6 und Nutzwerten 3, 6, 3, 4, 6.

## Karte: Rucksack: Greedy-Strategie
tag: wichtig
quelle: 09_algorithm-patterns.pdf, Folien 14-18

In jeder Phase das tun, was „lokal“ am besten ist. Bezogen auf den maximalen Nutzwert bi [€], das minimale Gewicht wi [kg] oder den maximalen Profit pi [€/kg]. Beispiel mit cmax = 12: nach maximalem Nutzwert Elemente 2, 5, 1, 3 (Wert 18, Gewicht 11); nach minimalem Gewicht Elemente 1, 2, 3, 4 (Wert 16, Gewicht 10); nach maximalem Profit Elemente 1, 2, 3, 5 (Wert 18, Gewicht 11). <b>Keine Garantie, dass die optimale Konfiguration erreicht wird</b>. Die Lösung hängt vom Entscheidungskriterium ab; oft findet man schnell „gute“ Konfigurationen, meist wird nur ein lokales Optimum erreicht.

## Karte: Dynamische Programmierung
tag: def
quelle: 09_algorithm-patterns.pdf, Folien 19, 69

Eingeführt von Richard Bellman (1940er): „dynamische Programmierung“ ist nur der Name, nicht dynamisch. Prinzip: das wiederholte Berechnen bereits bekannter Teillösungen vermeiden; mit der Lösung kleiner Teilprobleme beginnen und diese iterativ auf immer größere Teilprobleme ausweiten. Gefundene Teillösungen muss man sich mindestens so lange merken, wie sie noch benötigt werden. Häufiges Einsatzgebiet: Optimierungsprobleme; auch nützlich für Fibonacci-Zahlen. Weitere Probleme: n-te Fibonacci-Zahl, Sequenz-Alignment, Rucksackproblem mit ganzzahligen Gewichten.

## Karte: Fibonacci-Zahlen
tag: def
quelle: 09_algorithm-patterns.pdf, Folie 20

Unendliche Folge natürlicher Zahlen: Jede Zahl ist die Summe der beiden Vorgänger: 0, 1, 1, 2, 3, 5, 8, 13, 21, … Definition: fib(0) = 0, fib(1) = 1, fib(n) = fib(n−1) + fib(n−2) für n > 1. Beschreibt u. a. Wachstumsvorgänge in der Natur (Kaninchen-Beispiel).

## Karte: Fibonacci: Rekursion vs. dynamische Programmierung
tag: wichtig
quelle: 09_algorithm-patterns.pdf, Folien 21-23

Der rekursive Algorithmus berechnet sich überschneidende Teilprobleme mehrfach: fib(3) braucht 5 Funktionsaufrufe, fib(5) 15, fib(10) schon 177. Mit dynamischer Programmierung wird jedes Teilproblem nur einmal gelöst: iterativ mit Array (Teilergebnisse speichern, T(n) = O(n), zusätzlicher Speicher O(n)) oder speicheroptimiert mit nur zwei Variablen für die letzten beiden Werte.

## Karte: Rucksack: dynamische Programmierung
tag: formel
quelle: 09_algorithm-patterns.pdf, Folien 24-28, 56

Rekursive Formel für Teilprobleme: S_benefit[0, w] = 0 für alle w <= cmax. S_benefit[k, w] = S_benefit[k−1, w], falls wk > w (Element k kann nicht Teil der Lösung sein); sonst max{ S_benefit[k−1, w], S_benefit[k−1, w−wk] + bk }. Die beste Teilmenge von Sk mit Gesamtgewicht w ist also entweder die beste Teilmenge von Sk−1 mit Gewicht w, oder die beste Teilmenge von Sk−1 mit Gewicht w−wk plus Element k. Laufzeit: O(n·cmax). Der Algorithmus liefert nur den höchstmöglichen Wert (S_benefit[n, cmax]); um die Gegenstände zu ermitteln, wird die Tabelle rückwärts durchlaufen: Ist S_benefit[i, w] ≠ S_benefit[i−1, w], gehört Element i in den Rucksack (w = w − wk), sonst nur i = i − 1.

## Karte: Edit-Distanz
tag: formel
quelle: 09_algorithm-patterns.pdf, Folien 63-64

Gegeben zwei Strings s1 und s2: Der Editabstand ist die minimale Anzahl der notwendigen Edit-Operationen (Einfügen, Löschen oder Ersetzen eines Zeichens), um s1 in s2 zu konvertieren. Editabstandsfunktion d(i, j): d(0, 0) = 0, d(i, 0) = i (Löschoperationen), d(0, j) = j (Einfügeoperationen); d(i, j) = min{ d(i, j−1) + 1, d(i−1, j) + 1, d(i−1, j−1) + t(i, j) } mit t(i, j) = 1, wenn s1,i ≠ s2,j, sonst 0. Beispiel: d(HASE, RASEN) = 2.

## Karte: Edit-Distanz mit dynamischer Programmierung
tag: wichtig
quelle: 09_algorithm-patterns.pdf, Folien 65-68

Der rein rekursive Ansatz führt zu zahlreichen Mehrfachberechnungen der Teillösungen. Besser: dynamische Programmierung mit einer Abstandsmatrix: Teillösungen speichern, mit festen Werten d(i, 0) und d(0, j) initialisieren, dann d(i, j) sukzessive mit steigenden i, j berechnen. Beispiel RASEN/HASE: Edit-Abstand 2, String-Ähnlichkeit 1 − 2/max(5; 4) = 0,6. <b>Traceback:</b> die Matrix rückwärts durchlaufen. Diagonal = Match/Mismatch, vertikal = Einfügung, horizontal = Löschung.

## Frage: Nennen Sie die vier behandelten Entwurfsverfahren mit ihrem Grundprinzip.
id: 15nctbm
quelle: 09_algorithm-patterns.pdf, Folie 2

Brute-Force: alle Möglichkeiten systematisch prüfen. Backtracking: Irrwege erkennen, zurückgehen und neu probieren. Greedy: immer die lokal beste Wahl treffen. Dynamische Programmierung: Ergebnisse speichern und wiederverwenden.

## Frage: Was bedeutet Brute-Force?
id: 1ongrlr
quelle: 09_algorithm-patterns.pdf, Folie 4

Brute-Force bedeutet, alle möglichen Lösungen durchzuprobieren, bis die richtige gefunden ist; das ist aufwendig, aber manchmal das einzige Mittel.

## Frage: Welche Zeit- und Platzkomplexität hat die rekursive Lösung der Türme von Hanoi?
id: 16rnu5d
quelle: 09_algorithm-patterns.pdf, Folie 7

Zeitkomplexität O(2ⁿ). Zwei Möglichkeiten für jede Platte (2·2·…·2, n-mal). Zusätzlicher Platz O(n) für die Funktionsaufrufe auf dem Stack.

## Frage: Wie funktioniert das Backtracking-Verfahren?
id: t9rx5v
quelle: 09_algorithm-patterns.pdf, Folie 8

Eine Teillösung wird systematisch zur Gesamtlösung ausgebaut. In einer Sackgasse werden die letzten Teilschritte rückgängig gemacht und die reduzierte Teillösung auf einem anderen Weg ausgebaut. Bis eine Lösung gefunden wird oder feststeht, dass keine existiert.

## Frage: Was bedeutet Greedy?
id: 1ofz9et
quelle: 09_algorithm-patterns.pdf, Folien 14-18

Greedy wählt in jeder Phase die lokal beste Wahl, gibt aber keine Garantie für das globale Optimum.

## Frage: Warum liefert die Greedy-Strategie beim Rucksackproblem nicht unbedingt das Optimum?
id: 6ya0me
quelle: 09_algorithm-patterns.pdf, Folie 18

Sie trifft in jeder Phase nur die lokal beste Wahl (nach Nutzwert, Gewicht oder Profit). Die Lösung hängt vom Entscheidungskriterium ab, und meist wird nur ein lokales Optimum erreicht. Dafür findet man oft schnell gute Konfigurationen.

## Frage: Was ist die Grundidee der dynamischen Programmierung?
id: l87xlj
quelle: 09_algorithm-patterns.pdf, Folie 19

Das wiederholte Berechnen bekannter Teillösungen vermeiden: mit kleinen Teilproblemen beginnen, die Lösungen speichern (so lange sie benötigt werden) und iterativ auf größere Teilprobleme ausweiten.

## Frage: Wie ist die Fibonacci-Folge definiert?
id: 1yjzzsj
quelle: 09_algorithm-patterns.pdf, Folie 20

Die Fibonacci-Folge ist definiert durch fib(0) = 0, fib(1) = 1 und fib(n) = fib(n−1) + fib(n−2); sie beginnt mit 0, 1, 1, 2, 3, 5, 8, 13, 21, …

## Frage: Warum ist die naive rekursive Fibonacci-Berechnung ineffizient?
id: syunc
quelle: 09_algorithm-patterns.pdf, Folien 21-23

Sich überschneidende Teilprobleme werden mehrfach berechnet. Fib(5) braucht bereits 15 Funktionsaufrufe, fib(10) 177. Mit dynamischer Programmierung wird jedes Teilproblem nur einmal gelöst (O(n)).

## Frage: Wie lautet die rekursive Formel der dynamischen Programmierung für das Rucksackproblem?
id: 1e1jyoe
quelle: 09_algorithm-patterns.pdf, Folien 24-25, 56

S_benefit[0, w] = 0 für alle w <= cmax. S_benefit[k, w] = S_benefit[k−1, w], falls wk > w; sonst max{ S_benefit[k−1, w], S_benefit[k−1, w−wk] + bk }. Laufzeit O(n·cmax).

## Frage: Wie ermittelt man nach der DP-Berechnung, welche Gegenstände im Rucksack sind?
id: 1hlypj9
quelle: 09_algorithm-patterns.pdf, Folie 56

Rückwärts durch die Tabelle: Mit i = n und w = cmax prüfen, ob S_benefit[i, w] ≠ S_benefit[i−1, w]. Dann gehört Element i in den Rucksack und w wird um wk verringert; andernfalls nur i verringern.

## Frage: Was ist der Editabstand zweier Strings, und welche Operationen sind erlaubt?
id: he3pw7
quelle: 09_algorithm-patterns.pdf, Folie 63

Die minimale Anzahl der Edit-Operationen (Einfügen, Löschen, Ersetzen eines Zeichens), um s1 in s2 zu konvertieren. Beispiel: d(HASE, RASEN) = 2.

## Frage: Wie lautet die Rekursion der Edit-Distanz?
id: 7xbvs9
quelle: 09_algorithm-patterns.pdf, Folie 64

Für die Edit-Distanz gilt d(i,j) = min{d(i,j−1)+1, d(i−1,j)+1, d(i−1,j−1)+t(i,j)}, wobei t = 0 bei gleichen Zeichen und sonst 1 ist.

## Frage: Wofür stehen die Richtungen beim Traceback in der Editier-Matrix?
id: ne03kt
quelle: 09_algorithm-patterns.pdf, Folie 67

Diagonal: Match/Mismatch. Vertikal: Einfügung. Horizontal: Löschung.

## Ablauf: Rucksack: DP-Tabelle
nach: Rucksack: dynamische Programmierung
quelle: 09_algorithm-patterns.pdf, Folien 27-30

```json
{
  "id": "rucksack-dp",
  "intro": "S_benefit[k, w] für die Elemente 1-5 (Gewichte 1, 2, 2, 5, 6; Nutzwerte 3, 6, 3, 4, 6) und cmax = 12. Zeilen = Elemente 0-5, Spalten = Gewicht 0-12.",
  "visual": {
              "kind": "matrix",
              "matrices": [
                            {
                              "id": "dp",
                              "label": "S_benefit[k, w]",
                              "layout": "table",
                              "cornerLabel": "k/w",
                              "rowLabels": [0,1,2,3,4,5],
                              "colLabels": [0,1,2,3,4,5,6,7,8,9,10,11,12],
                              "values": [
                                          [0,0,0,0,0,0,0,0,0,0,0,0,0],
                                          [
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null
                                          ],
                                          [
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null
                                          ],
                                          [
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null
                                          ],
                                          [
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null
                                          ],
                                          [
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null,
                                            null
                                          ]
                                        ]
                            }
                          ]
            },
  "steps": [
             {
               "title": "Basisfall k = 0",
               "text": "Ohne Elemente ist der Nutzwert für jedes Gewicht 0: S_benefit[0, w] = 0 für alle w <= cmax.",
               "explanation": {
                                "action": "Initialisiere die Zeile k = 0.",
                                "rule": "Ohne verfügbare Elemente ist der erreichbare Nutzen für jedes Gewicht 0.",
                                "decision": "Alle Spalten der ersten Zeile bleiben 0."
                              },
               "highlights": [{"kind":"matrix-row","matrix":"dp","row":0,"role":"active"}]
             },
             {
               "title": "Element 1 (w = 1, b = 3)",
               "text": "Ab Gewicht 1 passt Element 1 in den Rucksack: der Nutzwert ist überall 3.",
               "explanation": {
                                "action": "Berechne die Zeile für Element 1.",
                                "rule": "Wenn wk <= w gilt: max(S[k-1,w], S[k-1,w-wk] + bk).",
                                "decision": "Ab w = 1 ist Mitnehmen besser: 0 + 3 = 3."
                              },
               "values": [
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":0,"value":0},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":1,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":2,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":3,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":4,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":5,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":6,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":7,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":8,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":9,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":10,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":11,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":1,"col":12,"value":3}
                         ],
               "highlights": [{"kind":"matrix-row","matrix":"dp","row":1,"role":"active"}]
             },
             {
               "title": "Element 2 (w = 2, b = 6)",
               "text": "Ab Gewicht 2 lohnt Element 2 (Wert 6), ab Gewicht 3 beide Elemente zusammen (Wert 9).",
               "explanation": {
                                "action": "Berechne die Zeile für Element 2.",
                                "rule": "Pro Spalte wird zwischen Weglassen und Mitnehmen entschieden.",
                                "decision": "Bei w = 2 liefert Element 2 den Wert 6; ab w = 3 kommt Element 1 dazu."
                              },
               "values": [
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":0,"value":0},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":1,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":2,"value":6},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":3,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":4,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":5,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":6,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":7,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":8,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":9,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":10,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":11,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":2,"col":12,"value":9}
                         ],
               "highlights": [{"kind":"matrix-row","matrix":"dp","row":2,"role":"active"}]
             },
             {
               "title": "Element 3 (w = 2, b = 3)",
               "text": "Ab Gewicht 5 passen die Elemente 1-3 zusammen: Wert 12.",
               "explanation": {
                                "action": "Berechne die Zeile für Element 3.",
                                "rule": "Eine Zelle übernimmt entweder den alten Wert oder ergänzt Element 3.",
                                "decision": "Ab w = 5 verbessert die Kombination der Elemente 1-3 den Wert auf 12."
                              },
               "values": [
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":0,"value":0},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":1,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":2,"value":6},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":3,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":4,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":5,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":6,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":7,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":8,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":9,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":10,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":11,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":3,"col":12,"value":12}
                         ],
               "highlights": [{"kind":"matrix-row","matrix":"dp","row":3,"role":"active"}]
             },
             {
               "title": "Element 4 (w = 5, b = 4)",
               "text": "Ab Gewicht 8 verbessert Element 4 die Lösung (13), ab Gewicht 10 sogar auf 16.",
               "explanation": {
                                "action": "Berechne die Zeile für Element 4.",
                                "rule": "Element 4 zählt nur, wenn seine Gewichtsbeschränkung in der Spalte erfüllt ist.",
                                "decision": "Ab w = 8 verbessert Mitnehmen den Wert, sonst bleibt die vorherige Zeile maßgeblich."
                              },
               "values": [
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":0,"value":0},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":1,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":2,"value":6},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":3,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":4,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":5,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":6,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":7,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":8,"value":13},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":9,"value":13},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":10,"value":16},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":11,"value":16},
                           {"kind":"matrix-cell","matrix":"dp","row":4,"col":12,"value":16}
                         ],
               "highlights": [{"kind":"matrix-row","matrix":"dp","row":4,"role":"active"}]
             },
             {
               "title": "Element 5 (w = 6, b = 6)",
               "text": "Die letzte Zeile liefert das Ergebnis: S_benefit[5, 12] = 18 ist der höchstmögliche Wert im Rucksack.",
               "explanation": {
                                "action": "Berechne die letzte Zeile und lies die Zielzelle ab.",
                                "rule": "Die optimale Lösung für cmax steht in S_benefit[n, cmax].",
                                "decision": "Für 5 Elemente und Kapazität 12 ergibt sich der beste Nutzen 18."
                              },
               "values": [
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":0,"value":0},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":1,"value":3},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":2,"value":6},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":3,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":4,"value":9},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":5,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":6,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":7,"value":12},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":8,"value":13},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":9,"value":15},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":10,"value":16},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":11,"value":18},
                           {"kind":"matrix-cell","matrix":"dp","row":5,"col":12,"value":18}
                         ],
               "highlights": [
                               {"kind":"matrix-row","matrix":"dp","row":5,"role":"active"},
                               {"kind":"matrix-cell","matrix":"dp","row":5,"col":12,"role":"target"}
                             ]
             }
           ]
}
```
