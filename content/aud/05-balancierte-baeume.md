---
id: balancierte-baeume
title: Balancierte Bäume
icon: ⚖️
---

## Karte: Eigenschaft des Höhenausgleichs
tag: def
quelle: 05_balanced_trees.pdf, Folie 6

Die Höhe h(T) eines Baumes T ist die maximale Tiefe seiner Knoten. Das Gleichgewicht bal(T) eines Baumes T ist der Unterschied (Differenz) zwischen der Höhe der beiden Teilbäume: bal(T) = h(T_RIGHT) − h(T_LEFT).

## Karte: AVL-Baum
tag: def
quelle: 05_balanced_trees.pdf, Folie 7

Nach den Erfindern benannt: Adelson-Velskii und Landis. Ein binärer Suchbaum T wird als AVL-Baum bezeichnet, wenn für jeden Knoten N des Baums T gilt: bal(N) ∈ {−1, 0, +1}. Für jede interne Position p unterscheiden sich die Höhen der Teilbäume T_RIGHT und T_LEFT um höchstens 1.

## Karte: Ausgeglichener binärer Suchbaum
tag: wichtig
quelle: 05_balanced_trees.pdf, Folie 8

Für einen ausgeglichenen binären Suchbaum mit n Knoten gilt: Höhe = O(log₂n). Das ergibt im schlechtesten Fall eine logarithmische Zeitkomplexität O(log₂n), die beste Worst-Case-Zeit für binäre Suchbäume.

## Karte: Degeneration unausgeglichener Suchbäume
tag: wichtig
quelle: 05_balanced_trees.pdf, Folien 9-12

Bei einem binären Suchbaum lässt sich nicht gewährleisten, dass der Baum ausgeglichen bleibt: er kann zu einem Zeitaufwand von O(n) degenerieren. Extremfall: Der Baum entspricht einer verketteten Liste mit Höhe n − 1 und Worst-Case-Zeitkomplexität O(n).

## Karte: Rotation
tag: def
quelle: 05_balanced_trees.pdf, Folien 14-19

Ein untergeordnetes Element wird so getauscht, dass es über seinem übergeordneten Element liegt; damit lässt sich die linke Formation in die rechte oder die rechte in die linke umwandeln. <b>Einfache Rotation:</b> ein Tausch genügt (z. B. Kette 3-5-8 wird zu 5 mit Kindern 3 und 8). <b>Doppelrotation:</b> zwei Tausche nötig (z. B. Kette 3-8-5: erst 5 über 8, dann 5 über 3).

## Karte: Trinode-Umstrukturierung: restructure(x)
tag: wichtig
quelle: 05_balanced_trees.pdf, Folien 20-29

Eingabe: eine Position x mit Elternknoten y und Großelternknoten z. Ablauf: Seien a, b, c eine Inorder-Auflistung der Positionen x, y, z und T1-T4 eine Inorder-Auflistung ihrer vier Teilbäume. Ersetze den Teilbaum mit Wurzel z durch einen neuen Teilbaum mit Wurzel b; a wird linkes Kind von b (mit T1 und T2 als Teilbäumen), c wird rechtes Kind von b (mit T3 und T4).

## Karte: Mehrwegebäume
tag: def
quelle: 05_balanced_trees.pdf, Folien 30-31

Ein geordneter Baum T mit folgenden Eigenschaften: Jeder interne Knoten hat mindestens zwei Kinder; ein Knoten mit d Kindern wird d-Knoten genannt. Jeder Knoten enthält d−1 Datenelemente der Form (key, element). Die Schlüssel bilden einen Suchbaum.

## Karte: (2,4)-Baum
tag: def
quelle: 05_balanced_trees.pdf, Folien 36-37

Ein ausgeglichener Mehrwegebaum, bei dem alle Knoten Teilbäume gleicher Höhe haben (perfekte Ausgeglichenheit) und jeder Knoten entweder ein 2-Knoten (ein Datenelement, 0 oder 2 Kinder), ein 3-Knoten (zwei Datenelemente, 0 oder 3 Kinder) oder ein 4-Knoten (drei Datenelemente, 0 oder 4 Kinder) ist. Die Schlüssel bilden einen Suchbaum. Die Suche funktioniert genau wie bei einem standardmäßigen binären Suchbaum.

## Karte: (2,4)-Baum: Einfügen
tag: wichtig
quelle: 05_balanced_trees.pdf, Folien 39-41

Suche nach k, aber höre nicht auf, bis ein Blattknoten L erreicht ist. Ist L ein 2- oder 3-Knoten: füge k zu L hinzu (L wird 3- bzw. 4-Knoten). Ist L ein 4-Knoten: teile L in zwei Knoten auf: einen 3-Knoten mit den Schlüsseln k1 und k2 und einen 2-Knoten mit dem Schlüssel k4; ist L Wurzelknoten, erstelle einen neuen Wurzelknoten K mit Schlüssel k3, andernfalls wandert k3 in den Elternknoten.

## Karte: (2,4)-Baum: Analyse des Einfügens
tag: formel
quelle: 05_balanced_trees.pdf, Folie 53

Sei T ein (2,4)-Baum mit n Elementen: T hat eine Höhe von O(log₂n). Das Finden der Einfügeposition dauert O(log₂n) (wir besuchen O(log₂n) Knoten), das Einfügen O(1), die Behandlung von Überläufen O(log₂n) (jede Teilung O(1), im schlimmsten Fall O(log₂n) Teilungen). Insgesamt: O(log₂n).

## Karte: (2,4)-Baum: Löschen
tag: wichtig
quelle: 05_balanced_trees.pdf, Folien 54-73

Suche nach k bis zum Blattknoten L. Ist L ein 4- oder 3-Knoten: lösche k aus L (L wird 3- bzw. 2-Knoten). Ist L ein 2-Knoten (<b>Unterlaufbedingung</b>): Sind die benachbarten Geschwister 4- oder 3-Knoten, führe eine Übertragungsoperation (transfer) durch; sind sie 2-Knoten, führe eine Fusionsoperation durch. Analyse: Höhe O(log₂n), Finden der Löschposition O(log₂n), Unterlaufbehandlung durch O(log₂n) Fusionen plus höchstens eine Übertragung (je O(1)): insgesamt O(log₂n).

## Karte: B-Bäume: Motivation
tag: wichtig
quelle: 05_balanced_trees.pdf, Folien 74-75

Die bisher behandelten ausgeglichenen Bäume eignen sich nicht gut für externe Speicherung (Data Dictionary auf Festplatte). Fakten zu Festplatten: Daten werden in Blöcken (i. d. R. 4 oder 8 KB) übertragen; Festplattenzugriffe sind langsam: das Lesen eines Blocks dauert etwa 10 Millisekunden, das Lesen aus dem Arbeitsspeicher etwa 10 Nanosekunden; in 10 ms kann eine moderne CPU Millionen von Operationen ausführen.

## Karte: B-Baum
tag: def
quelle: 05_balanced_trees.pdf, Folie 76

Ein B-Baum der Ordnung m ist ein Baum, in dem jeder Knoten höchstens 2m Einträge (interne Knoten: 2m + 1 Nachkommen) und mindestens m Einträge (interne Knoten: m + 1 Nachkommen) aufweist; Ausnahme: der Wurzelknoten kann nur einen Eintrag enthalten. Ein (2,3)-Baum ist im Wesentlichen ein B-Baum der Ordnung 1. Um Festplattenzugriffe zu minimieren, wählt man m so groß wie möglich: der Baum wird kürzer, die Suche braucht weniger Lesezugriffe. Für reine (volatile) Speicherbäume ist großes m nicht sinnvoll (viele Schlüsselvergleiche pro Knoten).

## Karte: B-Baum: Einfügen
tag: wichtig
quelle: 05_balanced_trees.pdf, Folie 79

Suche nach k bis zum Blattknoten L. Enthält L weniger als 2m Elemente, füge das Element zum Blattknoten hinzu. Sonst teile den Knoten entsprechend den 2m + 1 Elementen auf: die kleinsten m Elemente verbleiben im ursprünglichen Knoten, die größten m Elemente kommen in einen neuen Knoten, der mittlere Eintrag wandert nach oben in den Elternknoten.

## Karte: B-Baum: Analyse
tag: formel
quelle: 05_balanced_trees.pdf, Folie 106

Sei T ein B-Baum mit n Elementen: Alle internen Knoten haben mindestens m (genauer: mindestens m+1) Kinder. Der Baum hat eine Höhe von O(log_m n). Suche und Einfügen dauern O(log_m n); das Löschen ist knifflig, erfolgt aber dennoch logarithmisch.

## Karte: Ausgeglichene Suchbäume: Schlussfolgerungen
tag: wichtig
quelle: 05_balanced_trees.pdf, Folie 108

Binäre Suchbäume können O(log₂n) erreichen, aber auf O(n) zurückfallen, wenn sie unausgewogen sind. (2,4)-Bäume und B-Bäume sind ausgewogene Suchbäume, die O(log₂n) garantieren. Bei Daten auf der Festplatte ist die Reduzierung der Festplattenzugriffe der wichtigste Leistungsaspekt: B-Bäume bieten verbesserte Leistung für Data Dictionaries auf der Festplatte.

## Frage: Wie ist das Gleichgewicht bal(T) eines Baumes definiert?
id: 1fyuie7
quelle: 05_balanced_trees.pdf, Folie 6

bal(T) = h(T_RIGHT) − h(T_LEFT): die Differenz zwischen der Höhe des rechten und des linken Teilbaums. Die Höhe h(T) ist die maximale Tiefe der Knoten.

## Frage: Wann ist ein binärer Suchbaum ein AVL-Baum?
id: 9vd9k3
quelle: 05_balanced_trees.pdf, Folie 7

Wenn für jeden Knoten N gilt: bal(N) ∈ {−1, 0, +1}: die Höhen der Teilbäume jeder internen Position unterscheiden sich um höchstens 1.

## Frage: Warum braucht man ausgeglichene Suchbäume?
id: 1gby36d
quelle: 05_balanced_trees.pdf, Folien 8-12

Ein gewöhnlicher binärer Suchbaum bleibt nicht garantiert ausgeglichen und kann zu O(n) degenerieren (Extremfall: verkettete Liste mit Höhe n−1). Ein ausgeglichener Suchbaum hat Höhe O(log₂n) und garantiert damit logarithmische Worst-Case-Zeit.

## Frage: Was passiert bei einer Rotation?
id: 1go4kwf
quelle: 05_balanced_trees.pdf, Folien 14-19

Bei einer Rotation wird ein untergeordnetes Element über sein übergeordnetes getauscht; sie ist einfach mit einem Tausch oder doppelt mit zwei Tauschen.

## Frage: Was passiert bei der Trinode-Umstrukturierung restructure(x)?
id: x6rbaa
quelle: 05_balanced_trees.pdf, Folien 20-29

Mit x, Elternknoten y und Großelternknoten z: a, b, c sind die Inorder-Auflistung von x, y, z und T1-T4 ihre vier Teilbäume. Der Teilbaum mit Wurzel z wird durch einen neuen Teilbaum mit Wurzel b ersetzt; a wird linkes Kind von b (T1, T2), c rechtes Kind von b (T3, T4).

## Frage: Welche Knotentypen hat ein (2,4)-Baum?
id: cf6rhf
quelle: 05_balanced_trees.pdf, Folie 36

2-Knoten (ein Datenelement, 0 oder 2 Kinder), 3-Knoten (zwei Datenelemente, 0 oder 3 Kinder), 4-Knoten (drei Datenelemente, 0 oder 4 Kinder). Alle Knoten haben Teilbäume gleicher Höhe (perfekte Ausgeglichenheit).

## Frage: Was passiert beim Einfügen in einen (2,4)-Baum, wenn das Blatt ein 4-Knoten ist?
id: dq6xs7
quelle: 05_balanced_trees.pdf, Folien 40-41

Der 4-Knoten wird in zwei Knoten aufgeteilt: ein 3-Knoten mit den Schlüsseln k1 und k2 und ein 2-Knoten mit k4. Der Schlüssel k3 wandert in den Elternknoten; ist der geteilte Knoten die Wurzel, wird ein neuer Wurzelknoten mit k3 erstellt.

## Frage: Welche Komplexität haben Einfügen und Löschen im (2,4)-Baum?
id: 1tmvmne
quelle: 05_balanced_trees.pdf, Folien 53, 73

Einfügen und Löschen im (2,4)-Baum dauern jeweils O(log₂n).

## Frage: Wie wird ein Unterlauf beim Löschen aus einem (2,4)-Baum behandelt?
id: 1c550jk
quelle: 05_balanced_trees.pdf, Folie 55

Ist das betroffene Blatt ein 2-Knoten: Sind die benachbarten Geschwister 4- oder 3-Knoten, wird eine Übertragungsoperation (transfer) durchgeführt; sind die Geschwister 2-Knoten, eine Fusionsoperation.

## Frage: Warum wählt man bei B-Bäumen für Festplatten ein großes m?
id: 1d61jrj
quelle: 05_balanced_trees.pdf, Folien 75-76

Jeder Lesezugriff auf die Festplatte bringt mehr Elemente ein und der Baum wird kürzer, sodass die Suche weniger Festplattenzugriffe braucht. Die zusätzlichen Schlüsselvergleiche pro Knoten sind viel billiger als Festplattenzugriffe (Block lesen ~10 ms vs. RAM ~10 ns).

## Frage: Wie ist ein B-Baum der Ordnung m definiert?
id: 1khz49o
quelle: 05_balanced_trees.pdf, Folie 76

Jeder Knoten hat höchstens 2m Einträge (interne Knoten: 2m+1 Nachkommen) und mindestens m Einträge (interne Knoten: m+1 Nachkommen); nur der Wurzelknoten darf einen einzigen Eintrag enthalten. Ein (2,3)-Baum ist im Wesentlichen ein B-Baum der Ordnung 1.

## Frage: Wie hoch ist ein B-Baum mit n Elementen, und wie schnell sind Suche und Einfügen?
id: 1g4pu3c
quelle: 05_balanced_trees.pdf, Folie 106

Die Höhe ist O(log_m n); Suche und Einfügen dauern O(log_m n). Das Löschen ist knifflig, erfolgt aber ebenfalls logarithmisch.

## Ablauf: AVL: einfache Rotation
nach: Rotation
quelle: 05_balanced_trees.pdf, Folien 15-16

```json
{
  "id": "avl-einfache-rotation",
  "intro": "Ein untergeordnetes Element wird so getauscht, dass es über seinem übergeordneten Element liegt.",
  "visual": {
              "kind": "tree",
              "root": "3",
              "nodes": [
                         {"id":"3","value":3,"right":"5","note":"bal 2"},
                         {"id":"5","value":5,"right":"8","note":"bal 1"},
                         {"id":"8","value":8}
                       ]
            },
  "steps": [
             {
               "title": "Ausgangsformation",
               "text": "Die Kette 3-5-8 ist rechtslastig: bal(T) = 2 bei 3 und bal(T) = 1 bei 5.",
               "source": "05_balanced_trees.pdf, Folie 19",
               "explanation": {
                                "action": "Den betroffenen Teilbaum ansehen.",
                                "rule": "Rotation tauscht ein untergeordnetes Element über sein übergeordnetes Element.",
                                "decision": "Hier genügt eine einfache Rotation."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"3","role":"active"},
                               {"kind":"tree-node","node":"5","role":"target"},
                               {"kind":"tree-edge","from":"3","to":"5","role":"active"}
                             ]
             },
             {
               "title": "5 über 3 drehen",
               "text": "Der Knoten 5 wird über seinen Elternknoten 3 getauscht.",
               "explanation": {
                                "action": "5 wird Wurzel des Teilbaums.",
                                "rule": "Das kleinere Element 3 bleibt links von 5.",
                                "decision": "8 bleibt rechts von 5."
                              },
               "values": [
                           {"kind":"tree-root","root":"5"},
                           {"kind":"tree-node","node":"3","right":null,"note":null},
                           {"kind":"tree-node","node":"5","left":"3","right":"8","note":"bal 0"}
                         ],
               "highlights": [
                               {"kind":"tree-node","node":"5","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"3","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"8","role":"active"}
                             ]
             },
             {
               "title": "Teilbaum ist ausgeglichen",
               "text": "Das Ergebnis ist 5 mit den Kindern 3 und 8; bei 5 gilt jetzt bal(T) = 0.",
               "source": "05_balanced_trees.pdf, Folie 19",
               "explanation": {
                                "action": "Neue Formation prüfen.",
                                "rule": "Beim AVL-Baum muss bal(N) für jeden Knoten in {-1, 0, +1} liegen.",
                                "decision": "Der Teilbaum erfüllt die AVL-Bedingung."
                              },
               "values": [
                           {"kind":"tree-root","root":"5"},
                           {"kind":"tree-node","node":"3","right":null,"mark":"done"},
                           {"kind":"tree-node","node":"5","left":"3","right":"8","mark":"done"},
                           {"kind":"tree-node","node":"8","mark":"done"}
                         ],
               "highlights": [{"kind":"tree-node","node":"5","role":"target"}]
             }
           ]
}
```

## Ablauf: AVL: Doppelrotation
nach: Rotation
quelle: 05_balanced_trees.pdf, Folien 17-19

```json
{
  "id": "avl-doppelrotation",
  "intro": "Bei der Doppelrotation werden zwei Tausche ausgeführt: erst 5 über 8, dann 5 über 3.",
  "visual": {
              "kind": "tree",
              "root": "3",
              "nodes": [
                         {"id":"3","value":3,"right":"8","note":"bal 2"},
                         {"id":"8","value":8,"left":"5","note":"bal −1"},
                         {"id":"5","value":5}
                       ]
            },
  "steps": [
             {
               "title": "Ausgangsformation",
               "text": "Die Kette ist 3-8-5: bal(T) = 2 bei 3 und bal(T) = −1 bei 8.",
               "source": "05_balanced_trees.pdf, Folie 19",
               "explanation": {
                                "action": "Den inneren Knoten 5 identifizieren.",
                                "rule": "Wenn eine einfache Rotation nicht direkt zur Endformation führt, braucht es zwei Tausche.",
                                "decision": "Zuerst wird 5 über 8 gedreht."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"3","role":"active"},
                               {"kind":"tree-node","node":"8","role":"compare"},
                               {"kind":"tree-node","node":"5","role":"target"}
                             ]
             },
             {
               "title": "Erster Tausch: 5 über 8",
               "text": "5 wird über seinen Elternknoten 8 getauscht; daraus entsteht die Zwischenform 3-5-8 mit bal(T) = 2 bei 3 und bal(T) = 1 bei 5.",
               "source": "05_balanced_trees.pdf, Folie 19",
               "explanation": {
                                "action": "Untergeordnetes Element 5 über 8 heben.",
                                "rule": "5 liegt zwischen 3 und 8.",
                                "decision": "5 wird rechtes Kind von 3, 8 wird rechtes Kind von 5."
                              },
               "values": [
                           {"kind":"tree-node","node":"3","right":"5"},
                           {"kind":"tree-node","node":"5","right":"8","note":"bal 1"},
                           {"kind":"tree-node","node":"8","left":null,"note":null}
                         ],
               "highlights": [
                               {"kind":"tree-node","node":"5","role":"active"},
                               {"kind":"tree-edge","from":"3","to":"5","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"8","role":"active"}
                             ]
             },
             {
               "title": "Zweiter Tausch: 5 über 3",
               "text": "Jetzt wird 5 über 3 getauscht; 3 wird linkes Kind und 8 bleibt rechtes Kind.",
               "explanation": {
                                "action": "Zwischenwurzel 5 zur Wurzel des Teilbaums machen.",
                                "rule": "Die Inorder-Reihenfolge 3, 5, 8 bleibt erhalten.",
                                "decision": "Damit ist die Doppelrotation abgeschlossen."
                              },
               "values": [
                           {"kind":"tree-root","root":"5"},
                           {"kind":"tree-node","node":"3","right":null,"note":null},
                           {"kind":"tree-node","node":"5","left":"3","right":"8","note":"bal 0"}
                         ],
               "highlights": [
                               {"kind":"tree-node","node":"5","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"3","role":"active"},
                               {"kind":"tree-edge","from":"5","to":"8","role":"active"}
                             ]
             },
             {
               "title": "Teilbaum ist ausgeglichen",
               "text": "Das Ergebnis ist wieder 5 mit den Kindern 3 und 8; bei 5 gilt jetzt bal(T) = 0.",
               "source": "05_balanced_trees.pdf, Folie 19",
               "explanation": {
                                "action": "Endformation prüfen.",
                                "rule": "Ein AVL-Baum erlaubt nur Balancewerte -1, 0 oder +1.",
                                "decision": "Der Teilbaum ist wieder AVL-konform."
                              },
               "values": [
                           {"kind":"tree-root","root":"5"},
                           {"kind":"tree-node","node":"3","right":null,"mark":"done"},
                           {"kind":"tree-node","node":"5","left":"3","right":"8","mark":"done"},
                           {"kind":"tree-node","node":"8","left":null,"mark":"done"}
                         ],
               "highlights": [{"kind":"tree-node","node":"5","role":"target"}]
             }
           ]
}
```

## Ablauf: AVL: restructure(x)
nach: Trinode-Umstrukturierung: restructure(x)
quelle: 05_balanced_trees.pdf, Folien 20-29

```json
{
  "id": "avl-trinode-restructure",
  "intro": "Die Trinode-Umstrukturierung sortiert x, y und z per Inorder zu a, b, c und ersetzt den Teilbaum mit b als neuer Wurzel.",
  "visual": {
              "kind": "tree",
              "root": "78",
              "nodes": [
                         {"id":"78","value":78,"left":"50","right":"88"},
                         {"id":"50","value":50,"left":"48","right":"62"},
                         {"id":"88","value":88},
                         {"id":"48","value":48},
                         {"id":"62","value":62,"left":"54"},
                         {"id":"54","value":54}
                       ]
            },
  "steps": [
             {
               "title": "x, y und z bestimmen",
               "text": "Im Folienbeispiel liegt x = 62 unter y = 50 und z = 78.",
               "explanation": {
                                "action": "Position x mit Elternknoten y und Großelternknoten z betrachten.",
                                "rule": "restructure(x) arbeitet genau mit diesen drei Positionen.",
                                "decision": "Der betroffene Teilbaum hat aktuell die Wurzel z = 78."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"62","role":"target"},
                               {"kind":"tree-node","node":"50","role":"compare"},
                               {"kind":"tree-node","node":"78","role":"active"}
                             ]
             },
             {
               "title": "Inorder-Auflistung",
               "text": "Die Inorder-Auflistung von x, y und z ist a = 50, b = 62, c = 78.",
               "explanation": {
                                "action": "x, y und z nach Suchbaum-Reihenfolge sortieren.",
                                "rule": "a, b und c sind die Inorder-Auflistung der drei Positionen.",
                                "decision": "b = 62 wird die neue Wurzel des Teilbaums."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"50","role":"done"},
                               {"kind":"tree-node","node":"62","role":"target"},
                               {"kind":"tree-node","node":"78","role":"done"}
                             ]
             },
             {
               "title": "Teilbäume einordnen",
               "text": "48 entspricht T1, 54 entspricht T2, 88 entspricht T4; T3 ist im Beispiel leer.",
               "explanation": {
                                "action": "Die vier Teilbäume T1 bis T4 in Inorder-Reihenfolge festhalten.",
                                "rule": "a erhält T1 und T2, c erhält T3 und T4.",
                                "decision": "50 behält 48 und bekommt 54; 78 behält 88."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"48","role":"compare"},
                               {"kind":"tree-node","node":"54","role":"compare"},
                               {"kind":"tree-node","node":"88","role":"compare"}
                             ]
             },
             {
               "title": "Teilbaum von z durch b ersetzen",
               "text": "Der Teilbaum mit dem Wurzelknoten z = 78 wird durch einen neuen Teilbaum mit dem Wurzelknoten b = 62 ersetzt.",
               "source": "05_balanced_trees.pdf, Folien 25-26",
               "explanation": {
                                "action": "Die Trinode-Umstrukturierung in einem Schritt ausführen.",
                                "rule": "Ersetze den Teilbaum mit dem Wurzelknoten z durch einen neuen Teilbaum mit dem Wurzelknoten b.",
                                "decision": "62 ist die neue Wurzel des Teilbaums."
                              },
               "values": [
                           {"kind":"tree-root","root":"62"},
                           {"kind":"tree-node","node":"62","left":"50","right":"78"},
                           {"kind":"tree-node","node":"50","right":"54"},
                           {"kind":"tree-node","node":"78","left":null}
                         ],
               "highlights": [
                               {"kind":"tree-node","node":"62","role":"active"},
                               {"kind":"tree-edge","from":"62","to":"50","role":"active"},
                               {"kind":"tree-edge","from":"62","to":"78","role":"active"}
                             ]
             },
             {
               "title": "a mit T1 und T2",
               "text": "a = 50 ist das linke Kind von b; T1 = 48 und T2 = 54 sind seine Teilbäume.",
               "source": "05_balanced_trees.pdf, Folien 25-26",
               "explanation": {
                                "action": "Linke Seite der neuen Formation prüfen.",
                                "rule": "Sei a das linke Kind von b, wobei T1 und T2 Teilbäume sind.",
                                "decision": "54 war T2 unter 62 und hängt jetzt rechts an 50."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"50","role":"active"},
                               {"kind":"tree-node","node":"48","role":"compare"},
                               {"kind":"tree-node","node":"54","role":"compare"},
                               {"kind":"tree-edge","from":"50","to":"48","role":"active"},
                               {"kind":"tree-edge","from":"50","to":"54","role":"active"}
                             ]
             },
             {
               "title": "c mit T3 und T4",
               "text": "c = 78 ist das rechte Kind von b; T3 ist im Beispiel leer, T4 = 88.",
               "source": "05_balanced_trees.pdf, Folien 25-26",
               "explanation": {
                                "action": "Rechte Seite der neuen Formation prüfen.",
                                "rule": "Sei c das rechte Kind von b, wobei T3 und T4 Teilbäume sind.",
                                "decision": "78 behält 88 als rechten Teilbaum."
                              },
               "highlights": [
                               {"kind":"tree-node","node":"78","role":"active"},
                               {"kind":"tree-node","node":"88","role":"compare"},
                               {"kind":"tree-edge","from":"78","to":"88","role":"active"}
                             ]
             },
             {
               "title": "Umstrukturierung fertig",
               "text": "Das Ergebnis ist 62 als Wurzel, links 50 mit 48 und 54 sowie rechts 78 mit 88.",
               "source": "05_balanced_trees.pdf, Folien 28-29",
               "explanation": {
                                "action": "Endzustand lesen.",
                                "rule": "Die Suchbaum-Reihenfolge bleibt erhalten.",
                                "decision": "Der Folienzustand nach der Trinode-Umstrukturierung ist erreicht."
                              },
               "values": [
                           {"kind":"tree-root","root":"62"},
                           {"kind":"tree-node","node":"50","right":"54","mark":"done"},
                           {"kind":"tree-node","node":"62","left":"50","right":"78","mark":"done"},
                           {"kind":"tree-node","node":"78","left":null,"mark":"done"},
                           {"kind":"tree-node","node":"48","mark":"done"},
                           {"kind":"tree-node","node":"54","mark":"done"},
                           {"kind":"tree-node","node":"88","mark":"done"}
                         ],
               "highlights": [{"kind":"tree-node","node":"62","role":"target"}]
             }
           ]
}
```
