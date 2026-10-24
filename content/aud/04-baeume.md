---
id: baeume
title: Bäume
icon: 🌳
---

## Karte: Baum ADT
tag: def
quelle: 04_tree_structures.pdf, Folien 3-4

Abstrakter Datentyp für die Abbildung hierarchischer Strukturen. Ein Baum besteht aus einer Menge von Knoten und einer Menge von Kanten, wobei jede Kante ein Paar von Knoten verbindet. Jeder Knoten kann ein oder mehrere Datenelemente enthalten; jedes Datenelement besteht aus einem oder mehreren Feldern. <b>Schlüsselfeld:</b> das Feld, das bei der Suche verwendet wird; mehrere Datenelemente mit demselben Schlüssel heißen Duplikate.

## Karte: Beziehungen zwischen Knoten
tag: def
quelle: 04_tree_structures.pdf, Folien 5-10

<b>Eltern und Kinder:</b> Ist ein Knoten N mit Knoten direkt unter ihm verbunden, ist N deren Elternknoten und diese seine Kinderknoten; jeder Knoten ist Kind von höchstens einem Elternknoten. <b>Geschwister (siblings):</b> Knoten mit dem gleichen Elternknoten. <b>Vorfahren (ancestors):</b> Elternknoten, dessen Elternknoten usw. <b>Nachkommen:</b> Kinder, deren Kinder usw.

## Karte: Blattknoten und innere Knoten
tag: def
quelle: 04_tree_structures.pdf, Folie 11

<b>Blattknoten (leaf node):</b> ein Knoten ohne Kinder. <b>Innerer Knoten (interior node):</b> ein Knoten mit einem oder mehreren Kinderknoten.

## Karte: Baum als rekursive Datenstruktur
tag: wichtig
quelle: 04_tree_structures.pdf, Folie 12

Jeder Knoten im Baum ist die Wurzel eines kleineren Baumes; solche Bäume werden als Teilbaum (subtree) bezeichnet, um sie vom Gesamtbaum zu unterscheiden.

## Karte: Pfad, Tiefe, Ebene und Höhe
tag: def
quelle: 04_tree_structures.pdf, Folien 13-18

Es gibt genau einen <b>Pfad</b> (eine Folge von Kanten), der jeden Knoten mit der Wurzel verbindet. <b>Tiefe (depth)</b> eines Knotens = Anzahl der Kanten auf dem Weg von ihm zur Wurzel. Knoten mit derselben Tiefe bilden eine <b>Ebene (level)</b> des Baums. Die <b>Höhe (height)</b> eines Baums entspricht der maximalen Tiefe seiner Knoten.

## Karte: Binärbaum
tag: def
quelle: 04_tree_structures.pdf, Folien 21-22

Ein geordneter Baum mit folgenden Eigenschaften: Jeder Knoten hat höchstens zwei Kinder; jeder Kinderknoten wird entweder als linkes oder als rechtes Kind gekennzeichnet; ein linkes Kind steht in der Reihenfolge der Kinder vor einem rechten Kind. Ein Baum ist <b>strikt (proper)</b>, wenn jeder Knoten entweder null oder zwei Kinder hat.

## Karte: Binärbaum: rekursive Definition
tag: def
quelle: 04_tree_structures.pdf, Folie 23

Ein Binärbaum ist entweder ein leerer Baum oder ein nicht-leerer Baum mit einem Knoten, der ein oder mehrere Datenelemente hat, ein linkes Kind hat, welches selbst die Wurzel eines Binärbaumes ist, und ein rechtes Kind hat, welches selbst die Wurzel eines Binärbaumes ist.

## Karte: Binärbaum: Operationen und Darstellung
quelle: 04_tree_structures.pdf, Folien 24-29

Darstellung mithilfe verknüpfter Knoten: Jeder Knoten hat item, parent, left und right. Funktionen: <b>getRoot()</b> gibt die Wurzel zurück (folgt den parent-Verweisen, bis isRoot: parent == null). <b>addLeft(T)</b> entfernt das linke Kind und fügt den Baum T als neues linkes Kind ein; gibt das alte linke Kind oder null zurück. <b>addRight(T)</b> analog für das rechte Kind.

## Karte: Binärbaum: maximale Knoten pro Ebene
tag: formel
quelle: 04_tree_structures.pdf, Folie 30

Ebene 0: 1 Knoten, Ebene 1: 2 Knoten, Ebene 2: 4 Knoten, Ebene 3: 8 Knoten, …

## Karte: Traversierung eines Binärbaumes
tag: def
quelle: 04_tree_structures.pdf, Folien 32-33

Das Durchlaufen eines Baums bedeutet, alle Knoten des Baums zu besuchen (einen Knoten besuchen = seine Daten auf irgendeine Weise verarbeiten). Es gibt vier Arten von Traversierungen, bei denen die Knoten in unterschiedlicher Reihenfolge besucht werden. Hilfreich ist die rekursive Definition des Binärbaums: jeder Knoten ist die Wurzel eines Teilbaums.

## Karte: Preorder Traversierung
tag: wichtig
quelle: 04_tree_structures.pdf, Folien 37-48

Für den Baum mit Wurzel N: 1. Besuche den Wurzelknoten N. 2. Führe rekursiv eine Preorder-Traversierung des linken Teilbaums durch. 3. Führe rekursiv eine Preorder-Traversierung des rechten Teilbaums durch. Beispielbaum (Wurzel 7, darunter 5 und 9; unter 5: 2 und 6, unter 2 rechts: 3; unter 9 links: 8): 7 5 2 3 6 9 8.

## Karte: Postorder Traversierung
tag: wichtig
quelle: 04_tree_structures.pdf, Folien 64-76

Für den Baum mit Wurzel N: 1. Rekursive Postorder-Traversierung des linken Teilbaums. 2. Rekursive Postorder-Traversierung des rechten Teilbaums. 3. Besuche den Wurzelknoten N. Beispielbaum: 3 2 6 5 8 9 7.

## Karte: Inorder Traversierung
tag: wichtig
quelle: 04_tree_structures.pdf, Folien 92-103

Für den Baum mit Wurzel N: 1. Rekursive Inorder-Traversierung des linken Teilbaums. 2. Besuche den Wurzelknoten N. 3. Rekursive Inorder-Traversierung des rechten Teilbaums. Beispielbaum: 2 3 5 6 7 8 9.

## Karte: Level-Order Traversierung
tag: wichtig
quelle: 04_tree_structures.pdf, Folien 119-126

Die Knoten werden nacheinander besucht, von oben nach unten und von links nach rechts. Beispielbaum: 7 5 9 2 6 8 3. Implementierung mit einer Queue: Wurzel enqueuen; solange die Queue nicht leer ist, ersten Knoten dequeuen, verarbeiten und seine Kinder (links, rechts) enqueuen.

## Karte: Traversierungen: Zusammenfassung
tag: wichtig
quelle: 04_tree_structures.pdf, Folie 127

<b>preorder:</b> Wurzel, linker Teilbaum, rechter Teilbaum. <b>postorder:</b> linker Teilbaum, rechter Teilbaum, Wurzel. <b>inorder:</b> linker Teilbaum, Wurzel, rechter Teilbaum. <b>level-order:</b> von oben nach unten und links nach rechts.

## Karte: Binärbaum für algebraische Ausdrücke
tag: beispiel
quelle: 04_tree_structures.pdf, Folien 128-130

Vollständig geklammerte Ausdrücke mit den binären Operatoren +, −, *, /: Blattknoten sind Variablen oder Konstanten, Innenknoten sind Operatoren; jeder Knoten hat entweder zwei Kinder oder gar keine. <b>Inorder-Traversierung</b> liefert die übliche algebraische Notation (mit „(“ vor dem linken und „)“ nach dem rechten rekursiven Aufruf), z. B. ((a + (b * c)) − (d / e)). <b>Preorder-Traversierung</b> liefert die funktionale Notation, z. B. subtr(add(a, mult(b, c)), divide(d, e)).

## Karte: Binärer Suchbaum
tag: def
quelle: 04_tree_structures.pdf, Folien 131-132

Für jeden Knoten k gilt: Alle Knoten im linken Teilbaum von k sind kleiner als k, alle Knoten im rechten Teilbaum von k sind größer als k.

## Karte: Binärer Suchbaum: Suche
tag: wichtig
quelle: 04_tree_structures.pdf, Folien 136-139

Suche nach einem Element mit Schlüssel k: Stimmt k mit dem Schlüssel des Wurzelknotens überein, ist die Suche beendet. Andernfalls, wenn k kleiner als der Schlüssel des Wurzelknotens ist, wird der linke Teilbaum durchsucht; sonst der rechte Teilbaum.

## Karte: Binärer Suchbaum: Einfügen
tag: wichtig
quelle: 04_tree_structures.pdf, Folien 142-146

Einfügen eines Elements mit Schlüssel k: Suche nach einem Knoten mit dem Schlüssel k. Wird ein Knoten mit Schlüssel k gefunden, wird das Element des Knotens geändert. Andernfalls wird der zuletzt gefundene Knoten zum Elternknoten P des neuen Knotens: Ist k < Schlüssel von P, wird der neue Knoten linkes Kind von P, sonst rechtes Kind.

## Karte: Binärer Suchbaum: Löschen
tag: wichtig
quelle: 04_tree_structures.pdf, Folien 149-161

<b>Fall 1, Knoten x hat keine Kinder:</b> x entfernen, indem die Referenz seines Elternknotens auf null gesetzt wird. <b>Fall 2, x hat ein Kind:</b> der Verweis des Elternteils auf x zeigt stattdessen auf das Kind von x. <b>Fall 3, x hat zwei Kinder:</b> x kann nicht einfach gelöscht werden; ersetze x durch den kleinsten Knoten y in x' rechtem Teilbaum. Nachdem der Inhalt von y in x kopiert wurde, wird y gemäß Fall 1 oder 2 gelöscht.

## Karte: Binärer Suchbaum: Effizienz
tag: formel
quelle: 04_tree_structures.pdf, Folie 163

Die drei wichtigsten Operationen (Suchen, Einfügen, Löschen) haben dieselbe Zeitkomplexität: Einfügen und Löschen beinhalten eine Suche plus eine konstante Anzahl zusätzlicher Operationen. Zeitkomplexität der Suche: best case O(1), worst case O(h), average case O(h), mit h als Höhe des Baumes.

## Frage: Was ist der Unterschied zwischen Blattknoten und inneren Knoten?
id: b9i7ny
quelle: 04_tree_structures.pdf, Folie 11

Ein Blattknoten hat keine Kinder; ein innerer Knoten hat ein oder mehrere Kinderknoten.

## Frage: Was sind Tiefe, Ebene und Höhe in einem Baum?
id: u7xqeh
quelle: 04_tree_structures.pdf, Folien 14-18

Tiefe eines Knotens = Anzahl der Kanten auf dem Weg zur Wurzel. Knoten mit derselben Tiefe bilden eine Ebene. Die Höhe eines Baums ist die maximale Tiefe seiner Knoten.

## Frage: Was ist ein Binärbaum, und wann ist er strikt (proper)?
id: 1qdg2qf
quelle: 04_tree_structures.pdf, Folien 21-22

Ein geordneter Baum, in dem jeder Knoten höchstens zwei Kinder hat und jedes Kind als linkes oder rechtes Kind gekennzeichnet ist (das linke steht vor dem rechten). Strikt ist er, wenn jeder Knoten entweder null oder zwei Kinder hat.

## Frage: Wie wird die Level-Order-Traversierung implementiert?
id: 1djuqbp
quelle: 04_tree_structures.pdf, Folie 126

Mit einer Queue: die Wurzel enqueuen; solange die Queue nicht leer ist, den ersten Knoten dequeuen, verarbeiten und sein linkes und rechtes Kind enqueuen.

## Frage: In welcher Reihenfolge läuft Level-Order?
id: 1gkci59
quelle: 04_tree_structures.pdf, Folien 126-127

Level-Order besucht von oben nach unten und links nach rechts; implementiert wird sie mit einer Queue.

## Frage: In welcher Reihenfolge läuft Preorder?
id: 7qklp7
quelle: 04_tree_structures.pdf, Folie 127

Preorder besucht zuerst die Wurzel, dann den linken Teilbaum und danach den rechten Teilbaum.

## Frage: In welcher Reihenfolge läuft Inorder?
id: 1d6y0yr
quelle: 04_tree_structures.pdf, Folie 127

Inorder besucht zuerst den linken Teilbaum, dann die Wurzel und danach den rechten Teilbaum.

## Frage: In welcher Reihenfolge läuft Postorder?
id: 1pmbofu
quelle: 04_tree_structures.pdf, Folie 127

Postorder besucht zuerst den linken Teilbaum, dann den rechten Teilbaum und danach die Wurzel.

## Frage: Welche Traversierung eines Ausdrucksbaums liefert die übliche algebraische Notation, welche die funktionale?
id: ixqtmk
quelle: 04_tree_structures.pdf, Folien 129-130

Die Inorder-Traversierung liefert die algebraische Notation (z. B. ((a + (b * c)) − (d / e))), die Preorder-Traversierung die funktionale Notation (z. B. subtr(add(a, mult(b, c)), divide(d, e))).

## Frage: Welche Eigenschaft definiert einen binären Suchbaum?
id: 7y8j6m
quelle: 04_tree_structures.pdf, Folie 132

Für jeden Knoten k sind alle Knoten im linken Teilbaum kleiner als k und alle Knoten im rechten Teilbaum größer als k.

## Frage: Wie löscht man aus einem binären Suchbaum einen Knoten mit zwei Kindern?
id: 1xf88ju
quelle: 04_tree_structures.pdf, Folien 156-161

Man ersetzt den Knoten x durch den kleinsten Knoten y in x' rechtem Teilbaum: Inhalt von y nach x kopieren, dann y gemäß Fall 1 (kein Kind) oder Fall 2 (ein Kind) löschen.

## Frage: Welche Zeitkomplexität hat die Suche in einem binären Suchbaum?
id: 1ga4j1l
quelle: 04_tree_structures.pdf, Folie 163

Best case O(1), worst case und average case O(h), wobei h die Höhe des Baumes ist. Einfügen und Löschen haben dieselbe Komplexität, da sie eine Suche plus konstant viele Zusatzoperationen beinhalten.

## Ablauf: Binärer Suchbaum: Suche nach 7
nach: Binärer Suchbaum: Suche
quelle: 04_tree_structures.pdf, Folien 136-139

```json
{
  "id": "bst-suche",
  "intro": "In jedem Schritt wird der Schlüssel 7 mit dem aktuellen Knoten verglichen.",
  "visual": {
              "kind": "tree",
              "root": "26",
              "nodes": [
                         {"id":"26","value":26,"left":"12","right":"32"},
                         {"id":"12","value":12,"left":"4","right":"18"},
                         {"id":"32","value":32,"right":"38"},
                         {"id":"4","value":4,"right":"7"},
                         {"id":"18","value":18},
                         {"id":"38","value":38},
                         {"id":"7","value":7}
                       ]
            },
  "steps": [
             {
               "title": "Vergleich mit der Wurzel 26",
               "text": "7 stimmt nicht mit 26 überein und ist kleiner: der linke Teilbaum wird durchsucht.",
               "explanation": {
                                "action": "7 mit dem Schlüssel der Wurzel 26 vergleichen.",
                                "rule": "Wenn der Schlüssel k kleiner ist als der Schlüssel des Wurzelknotens, wird der linke Teilbaum durchsucht.",
                                "decision": "7 < 26 → linker Teilbaum."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"26","role":"active"},
                               {"kind":"tree-edge","from":"26","to":"12","role":"active"}
                             ]
             },
             {
               "title": "Vergleich mit 12",
               "text": "7 < 12: weiter im linken Teilbaum.",
               "explanation": {
                                "action": "7 mit 12 vergleichen.",
                                "rule": "Wenn der Schlüssel k kleiner ist als der Schlüssel des Wurzelknotens, wird der linke Teilbaum durchsucht.",
                                "decision": "7 < 12 → linker Teilbaum."
                              },
               "values": [{"kind":"tree-node","node":"26","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"12","role":"active"},
                               {"kind":"tree-edge","from":"12","to":"4","role":"active"}
                             ]
             },
             {
               "title": "Vergleich mit 4",
               "text": "7 > 4: der rechte Teilbaum wird durchsucht.",
               "explanation": {
                                "action": "7 mit 4 vergleichen.",
                                "rule": "Andernfalls wird der rechte Teilbaum durchsucht.",
                                "decision": "7 > 4 → rechter Teilbaum."
                              },
               "values": [{"kind":"tree-node","node":"12","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"4","role":"active"},
                               {"kind":"tree-edge","from":"4","to":"7","role":"active"}
                             ]
             },
             {
               "title": "7 gefunden",
               "text": "Der Schlüssel 7 stimmt mit dem Knoten überein: die Suche ist beendet.",
               "explanation": {
                                "action": "7 mit dem Knoten 7 vergleichen.",
                                "rule": "Wenn der Schlüssel k mit dem Schlüssel des Wurzelknotens übereinstimmt, ist die Suche beendet.",
                                "decision": "7 = 7 → gefunden."
                              },
               "values": [{"kind":"tree-node","node":"4","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"7","role":"target"}]
             }
           ]
}
```

## Ablauf: Binärer Suchbaum: Füge 35 ein
nach: Binärer Suchbaum: Einfügen
quelle: 04_tree_structures.pdf, Folien 142-146

```json
{
  "id": "bst-einfuegen",
  "intro": "Zuerst wird nach 35 gesucht; der zuletzt besuchte Knoten wird Elternknoten des neuen Knotens.",
  "visual": {
              "kind": "tree",
              "root": "26",
              "nodes": [
                         {"id":"26","value":26,"left":"12","right":"32"},
                         {"id":"12","value":12,"left":"4","right":"18"},
                         {"id":"32","value":32,"right":"38"},
                         {"id":"4","value":4,"right":"7"},
                         {"id":"18","value":18},
                         {"id":"38","value":38,"left":"35"},
                         {"id":"7","value":7},
                         {"id":"35","value":35,"hidden":true}
                       ]
            },
  "steps": [
             {
               "title": "Suche ab der Wurzel 26",
               "text": "35 > 26: weiter im rechten Teilbaum.",
               "explanation": {
                                "action": "Nach einem Knoten mit dem Schlüssel 35 suchen, Start bei der Wurzel 26.",
                                "rule": "Suche nach einem Knoten mit dem Schlüssel k.",
                                "decision": "35 > 26 → rechter Teilbaum."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"26","role":"active"},
                               {"kind":"tree-edge","from":"26","to":"32","role":"active"}
                             ]
             },
             {
               "title": "Vergleich mit 32",
               "text": "35 > 32: weiter im rechten Teilbaum.",
               "explanation": {
                                "action": "35 mit 32 vergleichen.",
                                "rule": "Suche nach einem Knoten mit dem Schlüssel k.",
                                "decision": "35 > 32 → rechter Teilbaum."
                              },
               "values": [{"kind":"tree-node","node":"26","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"32","role":"active"},
                               {"kind":"tree-edge","from":"32","to":"38","role":"active"}
                             ]
             },
             {
               "title": "Vergleich mit 38",
               "text": "35 < 38, und 38 hat kein linkes Kind: 38 wird Elternknoten P des neuen Knotens.",
               "explanation": {
                                "action": "35 mit 38 vergleichen.",
                                "rule": "Andernfalls wird der zuletzt gefundene Knoten zum Eltern-Knoten P des neuen Knotens.",
                                "decision": "35 < 38, aber 38 hat kein linkes Kind → kein Knoten mit 35 vorhanden, P = 38."
                              },
               "values": [{"kind":"tree-node","node":"32","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"38","role":"active"}]
             },
             {
               "title": "35 als linkes Kind einfügen",
               "text": "Da 35 < Schlüssel des Elternknotens ist, wird der neue Knoten linkes Kind von 38.",
               "explanation": {
                                "action": "Den neuen Knoten an P anhängen.",
                                "rule": "Wenn der Schlüssel k < der Schlüssel des Eltern-Knotens, mache den neuen Knoten zum linken Kind von P.",
                                "decision": "35 < 38 → linkes Kind von 38."
                              },
               "values": [
                           {"kind":"tree-node","node":"38","mark":"done"},
                           {"kind":"tree-node","node":"35","hidden":false}
                         ],
               "highlights": [{"kind":"tree-node","node":"35","role":"target"}]
             }
           ]
}
```

## Ablauf: Preorder-Traversierung
nach: Preorder Traversierung
quelle: 04_tree_structures.pdf, Folien 37-48

```json
{
  "id": "preorder-traversierung",
  "intro": "Wurzel besuchen, dann rekursiv den linken, dann den rechten Teilbaum. Ergebnis: 7 5 2 3 6 9 8.",
  "visual": {
              "kind": "tree",
              "root": "7",
              "nodes": [
                         {"id":"7","value":7,"left":"5","right":"9"},
                         {"id":"5","value":5,"left":"2","right":"6"},
                         {"id":"9","value":9,"left":"8"},
                         {"id":"2","value":2,"right":"3"},
                         {"id":"6","value":6},
                         {"id":"3","value":3},
                         {"id":"8","value":8}
                       ]
            },
  "steps": [
             {
               "title": "Besuche die Wurzel 7",
               "text": "Preorder beginnt mit dem Wurzelknoten: Ausgabe 7.",
               "explanation": {
                                "action": "Wurzelknoten N = 7 besuchen.",
                                "rule": "1. Besuche den Wurzelknoten N.",
                                "decision": "Ausgabe 7; danach folgt der linke Teilbaum von 7."
                              },
               "values": [{"kind":"tree-node","node":"7","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"7","role":"active"}]
             },
             {
               "title": "Linker Teilbaum: besuche 5",
               "text": "Rekursiver Aufruf für das linke Kind von 7: Ausgabe 7 5.",
               "explanation": {
                                "action": "Preorder für den linken Teilbaum von 7 starten.",
                                "rule": "2. Führe rekursiv eine Preorder-Traversierung des linken Teilbaums von N durch.",
                                "decision": "N = 5 wird zuerst besucht: Ausgabe 5."
                              },
               "values": [{"kind":"tree-node","node":"5","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"5","role":"active"},
                               {"kind":"tree-edge","from":"7","to":"5","role":"active"}
                             ]
             },
             {
               "title": "Besuche 2",
               "text": "Wieder zuerst der linke Teilbaum: Ausgabe 7 5 2.",
               "explanation": {
                                "action": "Preorder für den linken Teilbaum von 5 starten.",
                                "rule": "2. Führe rekursiv eine Preorder-Traversierung des linken Teilbaums von N durch.",
                                "decision": "N = 2 wird besucht: Ausgabe 2."
                              },
               "values": [{"kind":"tree-node","node":"2","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"2","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"2","role":"active"}
                             ]
             },
             {
               "title": "Besuche 3",
               "text": "2 hat kein linkes Kind; das rechte Kind 3 folgt: Ausgabe 7 5 2 3.",
               "explanation": {
                                "action": "2 hat keinen linken Teilbaum; der rechte folgt.",
                                "rule": "3. Führe rekursiv eine Preorder-Traversierung des rechten Teilbaums von N durch.",
                                "decision": "N = 3 wird besucht: Ausgabe 3."
                              },
               "values": [{"kind":"tree-node","node":"3","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"3","role":"active"},
                               {"kind":"tree-edge","from":"2","to":"3","role":"active"}
                             ]
             },
             {
               "title": "Besuche 6",
               "text": "Der linke Teilbaum von 5 ist fertig; das rechte Kind 6 folgt: Ausgabe 7 5 2 3 6.",
               "explanation": {
                                "action": "Der linke Teilbaum von 5 ist fertig; der rechte folgt.",
                                "rule": "3. Führe rekursiv eine Preorder-Traversierung des rechten Teilbaums von N durch.",
                                "decision": "N = 6 wird besucht: Ausgabe 6."
                              },
               "values": [{"kind":"tree-node","node":"6","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"6","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"6","role":"active"}
                             ]
             },
             {
               "title": "Rechter Teilbaum: besuche 9",
               "text": "Der linke Teilbaum der Wurzel ist fertig; rekursiver Aufruf für 9: Ausgabe 7 5 2 3 6 9.",
               "explanation": {
                                "action": "Der linke Teilbaum von 7 ist fertig; der rechte folgt.",
                                "rule": "3. Führe rekursiv eine Preorder-Traversierung des rechten Teilbaums von N durch.",
                                "decision": "N = 9 wird besucht: Ausgabe 9."
                              },
               "values": [{"kind":"tree-node","node":"9","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"9","role":"active"},
                               {"kind":"tree-edge","from":"7","to":"9","role":"active"}
                             ]
             },
             {
               "title": "Besuche 8: fertig",
               "text": "Das linke Kind von 9 wird besucht. Die Preorder-Reihenfolge ist 7 5 2 3 6 9 8.",
               "explanation": {
                                "action": "Preorder für den linken Teilbaum von 9 starten.",
                                "rule": "2. Führe rekursiv eine Preorder-Traversierung des linken Teilbaums von N durch.",
                                "decision": "N = 8 wird besucht: Ausgabe 8; danach sind alle Teilbäume abgearbeitet."
                              },
               "values": [{"kind":"tree-node","node":"8","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"8","role":"active"},
                               {"kind":"tree-edge","from":"9","to":"8","role":"active"}
                             ]
             }
           ]
}
```

## Ablauf: Postorder-Traversierung
nach: Postorder Traversierung
quelle: 04_tree_structures.pdf, Folien 64-76

```json
{
  "id": "postorder-traversierung",
  "intro": "Erst linker Teilbaum, dann rechter Teilbaum, dann Wurzel. Ergebnis: 3 2 6 5 8 9 7.",
  "visual": {
              "kind": "tree",
              "root": "7",
              "nodes": [
                         {"id":"7","value":7,"left":"5","right":"9"},
                         {"id":"5","value":5,"left":"2","right":"6"},
                         {"id":"9","value":9,"left":"8"},
                         {"id":"2","value":2,"right":"3"},
                         {"id":"6","value":6},
                         {"id":"3","value":3},
                         {"id":"8","value":8}
                       ]
            },
  "steps": [
             {
               "title": "Besuche 3",
               "text": "Postorder verarbeitet zuerst den linken Teilbaum so tief wie möglich: Ausgabe 3.",
               "explanation": {
                                "action": "Linker Teilbaum von 7, dann von 5, dann rechter Teilbaum von 2.",
                                "rule": "Links, rechts, Wurzel.",
                                "decision": "3 hat keine Kinder und kann besucht werden."
                              },
               "values": [{"kind":"tree-node","node":"3","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"3","role":"active"},
                               {"kind":"tree-edge","from":"2","to":"3","role":"active"}
                             ]
             },
             {
               "title": "Besuche 2",
               "text": "Der rechte Teilbaum von 2 ist fertig; jetzt wird 2 besucht: Ausgabe 3 2.",
               "explanation": {
                                "action": "Teilbaum mit Wurzel 2 abschließen.",
                                "rule": "Die Wurzel kommt erst nach ihren Teilbäumen.",
                                "decision": "2 hat kein linkes Kind und der rechte Teilbaum 3 ist fertig."
                              },
               "values": [{"kind":"tree-node","node":"2","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"2","role":"active"}]
             },
             {
               "title": "Besuche 6",
               "text": "Im rechten Teilbaum von 5 ist 6 ein Blatt: Ausgabe 3 2 6.",
               "explanation": {
                                "action": "Rechten Teilbaum von 5 verarbeiten.",
                                "rule": "Links, rechts, Wurzel.",
                                "decision": "6 hat keine Kinder und kann direkt besucht werden."
                              },
               "values": [{"kind":"tree-node","node":"6","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"6","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"6","role":"active"}
                             ]
             },
             {
               "title": "Besuche 5",
               "text": "Beide Teilbäume von 5 sind fertig; jetzt folgt 5: Ausgabe 3 2 6 5.",
               "explanation": {
                                "action": "Teilbaum mit Wurzel 5 abschließen.",
                                "rule": "Die Wurzel wird nach linkem und rechtem Teilbaum besucht.",
                                "decision": "2 und 6 sind bereits besucht."
                              },
               "values": [{"kind":"tree-node","node":"5","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"5","role":"active"}]
             },
             {
               "title": "Besuche 8",
               "text": "Im rechten Teilbaum der Wurzel wird zuerst der linke Teilbaum von 9 besucht: Ausgabe 3 2 6 5 8.",
               "explanation": {
                                "action": "Linken Teilbaum von 9 verarbeiten.",
                                "rule": "Auch im rechten Hauptteilbaum gilt links, rechts, Wurzel.",
                                "decision": "8 ist ein Blatt."
                              },
               "values": [{"kind":"tree-node","node":"8","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"8","role":"active"},
                               {"kind":"tree-edge","from":"9","to":"8","role":"active"}
                             ]
             },
             {
               "title": "Besuche 9",
               "text": "Der linke Teilbaum von 9 ist fertig, ein rechter fehlt; Ausgabe 3 2 6 5 8 9.",
               "explanation": {
                                "action": "Teilbaum mit Wurzel 9 abschließen.",
                                "rule": "Wurzel nach den Teilbäumen.",
                                "decision": "8 ist besucht und 9 hat kein rechtes Kind."
                              },
               "values": [{"kind":"tree-node","node":"9","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"9","role":"active"}]
             },
             {
               "title": "Besuche 7: fertig",
               "text": "Linker und rechter Teilbaum der Wurzel sind fertig; Postorder ist 3 2 6 5 8 9 7.",
               "explanation": {
                                "action": "Gesamten Baum abschließen.",
                                "rule": "Die Wurzel des Gesamtbaums kommt zuletzt.",
                                "decision": "Teilbaum 5 und Teilbaum 9 sind vollständig besucht."
                              },
               "values": [{"kind":"tree-node","node":"7","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"7","role":"active"}]
             }
           ]
}
```

## Ablauf: Inorder-Traversierung
nach: Inorder Traversierung
quelle: 04_tree_structures.pdf, Folien 92-103

```json
{
  "id": "inorder-traversierung",
  "intro": "Erst linker Teilbaum, dann Wurzel, dann rechter Teilbaum. Ergebnis: 2 3 5 6 7 8 9.",
  "visual": {
              "kind": "tree",
              "root": "7",
              "nodes": [
                         {"id":"7","value":7,"left":"5","right":"9"},
                         {"id":"5","value":5,"left":"2","right":"6"},
                         {"id":"9","value":9,"left":"8"},
                         {"id":"2","value":2,"right":"3"},
                         {"id":"6","value":6},
                         {"id":"3","value":3},
                         {"id":"8","value":8}
                       ]
            },
  "steps": [
             {
               "title": "Besuche 2",
               "text": "Der linke Teilbaum von 5 beginnt bei 2: Ausgabe 2.",
               "explanation": {
                                "action": "Ganz nach links gehen.",
                                "rule": "Links, Wurzel, rechts.",
                                "decision": "2 hat kein linkes Kind und wird besucht."
                              },
               "values": [{"kind":"tree-node","node":"2","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"2","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"2","role":"active"}
                             ]
             },
             {
               "title": "Besuche 3",
               "text": "Nach der Wurzel 2 folgt ihr rechter Teilbaum: Ausgabe 2 3.",
               "explanation": {
                                "action": "Rechten Teilbaum von 2 verarbeiten.",
                                "rule": "Nach der Wurzel kommt der rechte Teilbaum.",
                                "decision": "3 ist ein Blatt."
                              },
               "values": [{"kind":"tree-node","node":"3","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"3","role":"active"},
                               {"kind":"tree-edge","from":"2","to":"3","role":"active"}
                             ]
             },
             {
               "title": "Besuche 5",
               "text": "Der linke Teilbaum von 5 ist fertig; jetzt wird 5 besucht: Ausgabe 2 3 5.",
               "explanation": {
                                "action": "Zur Wurzel des Teilbaums zurückkehren.",
                                "rule": "Wurzel zwischen linkem und rechtem Teilbaum.",
                                "decision": "Teilbaum 2 ist vollständig besucht."
                              },
               "values": [{"kind":"tree-node","node":"5","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"5","role":"active"}]
             },
             {
               "title": "Besuche 6",
               "text": "Nach 5 folgt ihr rechter Teilbaum: Ausgabe 2 3 5 6.",
               "explanation": {
                                "action": "Rechten Teilbaum von 5 verarbeiten.",
                                "rule": "Links, Wurzel, rechts.",
                                "decision": "6 ist ein Blatt."
                              },
               "values": [{"kind":"tree-node","node":"6","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"6","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"6","role":"active"}
                             ]
             },
             {
               "title": "Besuche 7",
               "text": "Der linke Hauptteilbaum ist fertig; jetzt folgt die Wurzel 7: Ausgabe 2 3 5 6 7.",
               "explanation": {
                                "action": "Zur Wurzel des Gesamtbaums zurückkehren.",
                                "rule": "Die Wurzel steht zwischen linkem und rechtem Hauptteilbaum.",
                                "decision": "Teilbaum 5 ist vollständig besucht."
                              },
               "values": [{"kind":"tree-node","node":"7","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"7","role":"active"}]
             },
             {
               "title": "Besuche 8",
               "text": "Im rechten Teilbaum von 7 wird zuerst der linke Teilbaum von 9 besucht: Ausgabe 2 3 5 6 7 8.",
               "explanation": {
                                "action": "Linken Teilbaum von 9 verarbeiten.",
                                "rule": "Links vor Wurzel.",
                                "decision": "8 ist ein Blatt."
                              },
               "values": [{"kind":"tree-node","node":"8","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"8","role":"active"},
                               {"kind":"tree-edge","from":"9","to":"8","role":"active"}
                             ]
             },
             {
               "title": "Besuche 9: fertig",
               "text": "Nach dem linken Teilbaum von 9 folgt 9; Inorder ist 2 3 5 6 7 8 9.",
               "explanation": {
                                "action": "Rechten Hauptteilbaum abschließen.",
                                "rule": "Wurzel nach linkem Teilbaum.",
                                "decision": "8 ist besucht und 9 hat kein rechtes Kind."
                              },
               "values": [{"kind":"tree-node","node":"9","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"9","role":"active"}]
             }
           ]
}
```

## Ablauf: Level-Order-Traversierung
nach: Level-Order Traversierung
quelle: 04_tree_structures.pdf, Folien 119-126

```json
{
  "id": "level-order-traversierung",
  "intro": "Von oben nach unten und links nach rechts; umgesetzt mit einer Queue. Ergebnis: 7 5 9 2 6 8 3.",
  "visual": {
              "kind": "tree",
              "root": "7",
              "nodes": [
                         {"id":"7","value":7,"left":"5","right":"9"},
                         {"id":"5","value":5,"left":"2","right":"6"},
                         {"id":"9","value":9,"left":"8"},
                         {"id":"2","value":2,"right":"3"},
                         {"id":"6","value":6},
                         {"id":"3","value":3},
                         {"id":"8","value":8}
                       ]
            },
  "steps": [
             {
               "title": "Besuche 7",
               "text": "Die Wurzel wird aus der Queue genommen; ihre Kinder 5 und 9 werden eingereiht: Ausgabe 7.",
               "explanation": {
                                "action": "Start mit der Wurzel.",
                                "rule": "Queue: entnehmen, besuchen, Kinder links nach rechts einfügen.",
                                "decision": "Queue danach: 5, 9."
                              },
               "values": [{"kind":"tree-node","node":"7","mark":"done"}],
               "highlights": [{"kind":"tree-node","node":"7","role":"active"}]
             },
             {
               "title": "Besuche 5",
               "text": "5 wird entnommen; 2 und 6 kommen ans Queue-Ende: Ausgabe 7 5.",
               "explanation": {
                                "action": "Vorderstes Queue-Element verarbeiten.",
                                "rule": "Kinder werden links vor rechts eingereiht.",
                                "decision": "Queue danach: 9, 2, 6."
                              },
               "values": [{"kind":"tree-node","node":"5","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"5","role":"active"},
                               {"kind":"tree-edge","from":"7","to":"5","role":"active"}
                             ]
             },
             {
               "title": "Besuche 9",
               "text": "9 wird entnommen; 8 kommt ans Queue-Ende: Ausgabe 7 5 9.",
               "explanation": {
                                "action": "Nächsten Knoten derselben Ebene verarbeiten.",
                                "rule": "Level-Order läuft Ebene für Ebene.",
                                "decision": "Queue danach: 2, 6, 8."
                              },
               "values": [{"kind":"tree-node","node":"9","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"9","role":"active"},
                               {"kind":"tree-edge","from":"7","to":"9","role":"active"}
                             ]
             },
             {
               "title": "Besuche 2",
               "text": "Die nächste Ebene beginnt links mit 2; sein rechtes Kind 3 wird eingereiht: Ausgabe 7 5 9 2.",
               "explanation": {
                                "action": "Ersten Knoten der nächsten Ebene verarbeiten.",
                                "rule": "Queue-Reihenfolge bestimmt die Besuchsfolge.",
                                "decision": "Queue danach: 6, 8, 3."
                              },
               "values": [{"kind":"tree-node","node":"2","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"2","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"2","role":"active"}
                             ]
             },
             {
               "title": "Besuche 6",
               "text": "6 wird entnommen und hat keine Kinder: Ausgabe 7 5 9 2 6.",
               "explanation": {
                                "action": "Nächstes Queue-Element besuchen.",
                                "rule": "Knoten ohne Kinder fügen nichts hinzu.",
                                "decision": "Queue danach: 8, 3."
                              },
               "values": [{"kind":"tree-node","node":"6","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"6","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"6","role":"active"}
                             ]
             },
             {
               "title": "Besuche 8",
               "text": "8 wird entnommen und hat keine Kinder: Ausgabe 7 5 9 2 6 8.",
               "explanation": {
                                "action": "Letzten Knoten aus dieser Queue-Phase besuchen.",
                                "rule": "Weiter strikt in Queue-Reihenfolge.",
                                "decision": "Queue danach: 3."
                              },
               "values": [{"kind":"tree-node","node":"8","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"8","role":"active"},
                               {"kind":"tree-edge","from":"9","to":"8","role":"active"}
                             ]
             },
             {
               "title": "Besuche 3: fertig",
               "text": "3 ist das letzte Queue-Element; Level-Order ist 7 5 9 2 6 8 3.",
               "explanation": {
                                "action": "Queue leeren.",
                                "rule": "Wenn die Queue leer ist, ist die Traversierung beendet.",
                                "decision": "Alle Knoten wurden besucht."
                              },
               "values": [{"kind":"tree-node","node":"3","mark":"done"}],
               "highlights": [
                               {"kind":"tree-node","node":"3","role":"active"},
                               {"kind":"tree-edge","from":"2","to":"3","role":"active"}
                             ]
             }
           ]
}
```
