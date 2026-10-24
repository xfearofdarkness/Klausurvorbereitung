---
id: graphen
title: Graphen
icon: 🕸️
---

## Karte: Graph
tag: def
quelle: 07_graphs.pdf, Folien 3-4

Ein Graph besteht aus einer Menge von Knoten V (auch Eckpunkte genannt; englisch: Vertices) und einer Menge von Kanten E (auch Bögen genannt; englisch: Edges), von denen jede ein Paar von Knoten verbindet. Graphdatenmodell: G = (V, E).

## Karte: Gewichteter Graph
tag: def
quelle: 07_graphs.pdf, Folie 5

Ein Graph, bei dem mit jeder Kante Kosten verbunden sind. Beispiel Autobahn-Graph: Knoten repräsentieren Städte, Kanten Autobahnen, die Kosten bezeichnen die Entfernung in Kilometern. Graphalgorithmen beantworten Fragen wie „Was ist die kürzeste Strecke von Berlin nach Hannover?“.

## Karte: Adjazenz und Nachbarn
tag: def
quelle: 07_graphs.pdf, Folie 6

Zwei Knoten sind benachbart (adjazent), wenn sie durch eine einzelne Kante verbunden sind. Die Ansammlung der zu einem Knoten v benachbarten Knoten wird als Nachbarn von v bezeichnet.

## Karte: Pfad, zusammenhängend, vollständig
tag: def
quelle: 07_graphs.pdf, Folien 7-8

Ein <b>Pfad</b> ist eine Folge von Kanten, die zwei Knoten verbindet. Ein Graph ist <b>zusammenhängend (connected)</b>, wenn es einen Pfad zwischen zwei beliebigen Knoten gibt. Ein Graph ist <b>vollständig (complete)</b>, wenn es zwischen jedem Paar von Knoten eine Kante gibt.

## Karte: Gerichtete Graphen
tag: def
quelle: 07_graphs.pdf, Folien 9-12

Jede Kante weist eine Richtung auf (dargestellt durch einen Pfeil) und hat einen ausgehenden und einen eingehenden Knoten. Kanten werden oft als geordnete Paare (Startknoten, Endknoten) dargestellt: (a,b) kann eine Kante sein, ohne dass (b,a) eine ist. Ein Pfad in einem gerichteten Graphen ist eine Folge von Kanten, bei der der Endknoten der Kante i mit dem Startknoten der Kante i+1 identisch sein muss: {(a,b),(b,e),(e,f)} ist valide, {(a,b),(c,b),(c,a)} nicht.

## Karte: Baum vs. Graph
tag: wichtig
quelle: 07_graphs.pdf, Folien 13-14

Ein Baum ist ein spezieller Typ eines Graphen: Er ist zusammenhängend und ungerichtet und er ist azyklisch. Es gibt keinen Pfad mit unterschiedlichen Kanten, der am selben Knoten beginnt und endet. Normalerweise wird einer der Knoten als Wurzel bezeichnet, obwohl die Graphentheorie dies nicht verlangt.

## Karte: Spannbaum (Spanning Tree)
tag: def
quelle: 07_graphs.pdf, Folie 15

Eine Teilmenge eines zusammenhängenden Graphen, die alle Knoten und eine Teilmenge der Kanten enthält, die einen Baum bilden.

## Karte: Darstellung: Kantenliste und Knotenliste
quelle: 07_graphs.pdf, Folien 16-19

<b>Kantenliste:</b> eine Liste oder ein Array zur Darstellung der Kanten, z. B. int[] edgelist = {Anzahl Knoten, Anzahl Kanten, dann je Kante Start- und Endknoten}. <b>Knotenliste:</b> stellt die Nachbarschaften der Knoten dar. Pro Knoten die Anzahl seiner Kanten gefolgt von den Nachbarn; alternativ zwei Arrays neighborhoods und nodeNhd, wobei die Nachbarschaft von Knoten i in den Positionen nodeNhd[i-1] bis nodeNhd[i]−1 liegt.

## Karte: Darstellung: Adjazenz-Matrix
tag: wichtig
quelle: 07_graphs.pdf, Folien 20-23

Ein zweidimensionales Array zur Darstellung der Kanten: edge[r][c] = die Kante zwischen den Knoten r und c bzw. die Kosten für den Weg von r nach c. Ein Spezialwert zeigt an, dass man nicht von r nach c gelangen kann. Bei ungewichteten Graphen 0, bei gewichteten Graphen darf 0 nicht verwendet werden, da es tatsächlich Kosten von 0 geben kann. Gut geeignet für <b>dichte</b> Graphen (viele Kanten pro Knoten); verschwendet Speicherplatz bei <b>spärlichen</b> Graphen.

## Karte: Darstellung: Adjazenz-Liste
tag: wichtig
quelle: 07_graphs.pdf, Folien 24-26

Eine Liste (Array oder verkettete Liste) von verketteten Listen zur Darstellung der Kanten und ggf. Kosten. Für nicht vorhandene Kanten wird kein Speicher zugewiesen, aber die Verweise in den verketteten Listen beanspruchen zusätzlichen Speicherplatz. Eignet sich gut für spärliche Graphen, verschwendet jedoch Speicherplatz, wenn der Graph dicht ist.

## Karte: Traversierung eines Graphen
tag: def
quelle: 07_graphs.pdf, Folie 29

Man beginnt an einem Knoten und besucht alle Knoten, die von diesem aus erreichbar sind (besuchen = Daten verarbeiten). <b>Tiefensuche:</b> so weit wie möglich einen bestimmten Pfad entlang gehen, bevor man zurückgeht. <b>Breitensuche:</b> einen Knoten besuchen, dann alle seine Nachbarn, dann alle noch nicht besuchten Knoten zwei Kanten entfernt, dann drei Kanten usw. Anwendungen: Ermittlung erreichbarer Knoten, Zustandsraum-Suche, Webcrawler (Knoten = Seiten, Kanten = Links).

## Karte: Tiefensuche (Algorithmus)
tag: wichtig
quelle: 07_graphs.pdf, Folien 30-47

depthFirstTrav(v): besuche Knoten v und markiere ihn als besucht; für jeden Knoten w in v's Nachbarschaft: wenn w noch nicht besucht wurde, rufe depthFirstTrav(w) rekursiv auf. Beispielgraph der Folien: depthFirstTrav(1) besucht die Knoten in der Reihenfolge 1 3 7 5 4 6 8 2.

## Karte: Prüfung auf Zyklen
tag: wichtig
quelle: 07_graphs.pdf, Folie 59

In einem ungerichteten Graphen: eine Tiefensuche durchführen und die Knoten als besucht markieren; stößt man bei den Nachbarn eines besuchten Knotens auf einen bereits besuchten Knoten, muss ein Zyklus vorliegen. Werden keine Zyklen gefunden, ist der Graph azyklisch. Für gerichtete Graphen funktioniert das nicht (Beispiel: c ist Nachbar von a und b, ohne dass ein Zyklus existiert).

## Karte: Breitensuche (Algorithmus)
tag: wichtig
quelle: 07_graphs.pdf, Folien 60-73

breadthFirstTrav(v): Füge Knoten v in eine Queue ein und markiere ihn als besucht. Solange die Queue nicht leer ist: entferne Knoten w aus der Queue, besuche ihn, und füge jeden noch nicht besuchten Knoten x aus w's Nachbarschaft in die Queue ein (als besucht markiert). Beispielgraph der Folien: breadthFirstTrav(1) besucht 1 3 6 8 7 4 5 2.

## Karte: Spannbäume durch Traversierung
tag: beispiel
quelle: 07_graphs.pdf, Folien 48-58, 74-83

Sowohl Tiefensuche als auch Breitensuche erzeugen einen Spannbaum des Graphen. Beispiel Autobahn-Graph von Berlin (Kanten je Nachbarschaftsliste nach steigenden Kosten sortiert): Die Tiefensuche liefert eine Kette Berlin-Potsdam-Magdeburg-Leipzig-Dresden-Hannover-Bremen-Hamburg; die Breitensuche einen flachen Baum mit Berlin als Wurzel und den Ebenen Potsdam/Magdeburg/Hamburg, dann Dresden/Leipzig/Hannover/Bremen.

## Frage: Woraus besteht ein Graph?
id: tzftec
quelle: 07_graphs.pdf, Folien 3-4

Aus einer Menge von Knoten V (Vertices) und einer Menge von Kanten E (Edges), von denen jede ein Paar von Knoten verbindet: G = (V, E).

## Frage: Wann sind zwei Knoten adjazent?
id: 11c05sb
quelle: 07_graphs.pdf, Folie 6

Zwei Knoten sind adjazent beziehungsweise benachbart, wenn sie durch eine einzelne Kante verbunden sind.

## Frage: Wann ist ein Graph zusammenhängend, wann vollständig?
id: 1yi8dnw
quelle: 07_graphs.pdf, Folie 8

Zusammenhängend, wenn es zwischen zwei beliebigen Knoten einen Pfad gibt. Vollständig, wenn es zwischen jedem Paar von Knoten eine Kante gibt.

## Frage: Wann ist ein Pfad in einem gerichteten Graphen gültig?
id: 1drq61q
quelle: 07_graphs.pdf, Folien 10-12

Wenn der Endknoten der Kante i mit dem Startknoten der Kante i+1 identisch ist. Z. B. ist {(a,b),(b,e),(e,f)} valide, {(a,b),(c,b),(c,a)} nicht.

## Frage: Was unterscheidet einen Baum von einem allgemeinen Graphen?
id: 1o04ibb
quelle: 07_graphs.pdf, Folie 13

Ein Baum ist ein spezieller Graph: zusammenhängend, ungerichtet und azyklisch (kein Pfad mit unterschiedlichen Kanten, der am selben Knoten beginnt und endet).

## Frage: Was ist ein Spannbaum?
id: 1kv39iw
quelle: 07_graphs.pdf, Folie 15

Ein Spannbaum ist eine Teilmenge eines zusammenhängenden Graphen mit allen Knoten und einer Kanten-Teilmenge, die einen Baum bildet.

## Frage: Warum kann man bei gewichteten Graphen in der Adjazenz-Matrix nicht 0 als „keine Kante“ verwenden?
id: 18ymgua
quelle: 07_graphs.pdf, Folie 22

Weil es tatsächlich Kanten mit Kosten 0 geben kann. Es muss ein anderer spezieller Wert verwendet werden.

## Frage: Wann eignet sich die Adjazenz-Matrix, wann die Adjazenz-Liste?
id: 1dnscn1
quelle: 07_graphs.pdf, Folien 23-25

Die Adjazenz-Matrix eignet sich für dichte Graphen (viele Kanten pro Knoten), verschwendet aber Speicher bei spärlichen Graphen. Die Adjazenz-Liste eignet sich für spärliche Graphen, verschwendet aber Speicher bei dichten.

## Frage: Wie unterscheiden sich Tiefensuche und Breitensuche?
id: 14shq4
quelle: 07_graphs.pdf, Folien 29, 30-73

Tiefensuche geht so weit wie möglich einen Pfad entlang, bevor sie zurückgeht (rekursiv). Breitensuche besucht erst alle Nachbarn, dann alle Knoten zwei Kanten entfernt usw.. Implementiert mit einer Queue.

## Frage: Nennen Sie Anwendungen der Graph-Traversierung.
id: 1umzm5p
quelle: 07_graphs.pdf, Folie 29

Ermittlung der von einem Knoten aus erreichbaren Knoten, Zustandsraum-Suche, Webcrawler (Knoten = Seiten, Kanten = Links).

## Frage: Wie funktioniert Tiefensuche?
id: dk59c
quelle: 07_graphs.pdf, Folien 30-47

Tiefensuche besucht rekursiv einen Knoten, markiert ihn und sucht dann für jeden unbesuchten Nachbarn rekursiv weiter.

## Frage: Wie prüft man einen ungerichteten Graphen auf Zyklen?
id: 2bdxcv
quelle: 07_graphs.pdf, Folie 59

Tiefensuche mit Besucht-Markierung: Stößt man bei den Nachbarn eines besuchten Knotens auf einen bereits besuchten Knoten, liegt ein Zyklus vor. Für gerichtete Graphen funktioniert dieses Verfahren nicht.

## Frage: Wie funktioniert Breitensuche?
id: 1c339bi
quelle: 07_graphs.pdf, Folien 60-73

Breitensuche arbeitet mit einer Queue: Startknoten einfügen, wiederholt entnehmen, besuchen und unbesuchte Nachbarn einfügen.

## Ablauf: Breitensuche von Knoten 1
nach: Breitensuche (Algorithmus)
quelle: 07_graphs.pdf, Folien 60-73

```json
{
  "id": "breitensuche",
  "intro": "Knoten werden mit einer Queue verwaltet: besuchen, dann alle unbesuchten Nachbarn einreihen. Ergebnis: 1 3 6 8 7 4 5 2.",
  "legend": {"active":"Wird besucht","compare":"In die Queue eingefügt"},
  "visual": {
              "kind": "graph",
              "nodes": [
                         {"id":"1","x":20,"y":12},
                         {"id":"3","x":45,"y":12},
                         {"id":"2","x":28,"y":40},
                         {"id":"8","x":53,"y":40},
                         {"id":"7","x":78,"y":40},
                         {"id":"4","x":38,"y":58},
                         {"id":"6","x":20,"y":78},
                         {"id":"5","x":53,"y":78}
                       ],
              "edges": [
                         {"from":"1","to":"3"},
                         {"from":"1","to":"6"},
                         {"from":"1","to":"8"},
                         {"from":"2","to":"8"},
                         {"from":"3","to":"7"},
                         {"from":"4","to":"5"},
                         {"from":"4","to":"6"},
                         {"from":"5","to":"6"},
                         {"from":"5","to":"7"},
                         {"from":"5","to":"8"}
                       ]
            },
  "steps": [
             {
               "title": "Besuche 1",
               "text": "Knoten 1 wird aus der Queue entfernt und besucht; die unbesuchten Nachbarn 3, 6 und 8 kommen in die Queue. Queue: 3, 6, 8.",
               "explanation": {
                                "action": "Knoten 1 aus der Queue entfernen und besuchen.",
                                "rule": "Für jeden Knoten x in w’s Nachbarschaft: wenn x noch nicht besucht wurde, füge x in die Queue ein und markiere ihn als besucht.",
                                "decision": "3, 6 und 8 sind unbesucht → Queue: 3, 6, 8."
                              },
               "values": [{"kind":"graph-node","node":"1","mark":"done"}],
               "highlights": [
                               {"kind":"graph-node","node":"1","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"3","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"6","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"8","role":"active"},
                               {"kind":"graph-node","node":"3","role":"compare"},
                               {"kind":"graph-node","node":"6","role":"compare"},
                               {"kind":"graph-node","node":"8","role":"compare"}
                             ]
             },
             {
               "title": "Besuche 3",
               "text": "Der unbesuchte Nachbar 7 kommt in die Queue. Queue: 6, 8, 7.",
               "explanation": {
                                "action": "Knoten 3 aus der Queue entfernen und besuchen.",
                                "rule": "Für jeden Knoten x in w’s Nachbarschaft: wenn x noch nicht besucht wurde, füge x in die Queue ein und markiere ihn als besucht.",
                                "decision": "7 ist unbesucht → Queue: 6, 8, 7."
                              },
               "values": [{"kind":"graph-node","node":"3","mark":"done"}],
               "highlights": [
                               {"kind":"graph-node","node":"3","role":"active"},
                               {"kind":"graph-edge","from":"3","to":"7","role":"active"},
                               {"kind":"graph-node","node":"7","role":"compare"}
                             ]
             },
             {
               "title": "Besuche 6",
               "text": "Die unbesuchten Nachbarn 4 und 5 kommen in die Queue. Queue: 8, 7, 4, 5.",
               "explanation": {
                                "action": "Knoten 6 aus der Queue entfernen und besuchen.",
                                "rule": "Für jeden Knoten x in w’s Nachbarschaft: wenn x noch nicht besucht wurde, füge x in die Queue ein und markiere ihn als besucht.",
                                "decision": "4 und 5 sind unbesucht → Queue: 8, 7, 4, 5."
                              },
               "values": [{"kind":"graph-node","node":"6","mark":"done"}],
               "highlights": [
                               {"kind":"graph-node","node":"6","role":"active"},
                               {"kind":"graph-edge","from":"4","to":"6","role":"active"},
                               {"kind":"graph-edge","from":"5","to":"6","role":"active"},
                               {"kind":"graph-node","node":"4","role":"compare"},
                               {"kind":"graph-node","node":"5","role":"compare"}
                             ]
             },
             {
               "title": "Besuche 8",
               "text": "Der unbesuchte Nachbar 2 kommt in die Queue. Queue: 7, 4, 5, 2.",
               "explanation": {
                                "action": "Knoten 8 aus der Queue entfernen und besuchen.",
                                "rule": "Für jeden Knoten x in w’s Nachbarschaft: wenn x noch nicht besucht wurde, füge x in die Queue ein und markiere ihn als besucht.",
                                "decision": "2 ist unbesucht → Queue: 7, 4, 5, 2."
                              },
               "values": [{"kind":"graph-node","node":"8","mark":"done"}],
               "highlights": [
                               {"kind":"graph-node","node":"8","role":"active"},
                               {"kind":"graph-edge","from":"2","to":"8","role":"active"},
                               {"kind":"graph-node","node":"2","role":"compare"}
                             ]
             },
             {
               "title": "Besuche 7",
               "text": "Alle Nachbarn von 7 sind bereits besucht oder in der Queue. Queue: 4, 5, 2.",
               "explanation": {
                                "action": "Knoten 7 aus der Queue entfernen und besuchen.",
                                "rule": "Nur noch nicht besuchte Nachbarn kommen in die Queue.",
                                "decision": "Kein neuer Nachbar → Queue: 4, 5, 2."
                              },
               "values": [{"kind":"graph-node","node":"7","mark":"done"}],
               "highlights": [{"kind":"graph-node","node":"7","role":"active"}]
             },
             {
               "title": "Besuche 4",
               "text": "Keine neuen Nachbarn. Queue: 5, 2.",
               "explanation": {
                                "action": "Knoten 4 aus der Queue entfernen und besuchen.",
                                "rule": "Nur noch nicht besuchte Nachbarn kommen in die Queue.",
                                "decision": "Kein neuer Nachbar → Queue: 5, 2."
                              },
               "values": [{"kind":"graph-node","node":"4","mark":"done"}],
               "highlights": [{"kind":"graph-node","node":"4","role":"active"}]
             },
             {
               "title": "Besuche 5",
               "text": "Keine neuen Nachbarn. Queue: 2.",
               "explanation": {
                                "action": "Knoten 5 aus der Queue entfernen und besuchen.",
                                "rule": "Nur noch nicht besuchte Nachbarn kommen in die Queue.",
                                "decision": "Kein neuer Nachbar → Queue: 2."
                              },
               "values": [{"kind":"graph-node","node":"5","mark":"done"}],
               "highlights": [{"kind":"graph-node","node":"5","role":"active"}]
             },
             {
               "title": "Besuche 2: fertig",
               "text": "Die Queue ist leer. Besuchsreihenfolge: 1 3 6 8 7 4 5 2.",
               "explanation": {
                                "action": "Knoten 2 aus der Queue entfernen und besuchen.",
                                "rule": "Solange die Queue nicht leer ist, wird der nächste Knoten entfernt und besucht.",
                                "decision": "Die Queue ist leer → die Breitensuche endet."
                              },
               "values": [{"kind":"graph-node","node":"2","mark":"done"}],
               "highlights": [{"kind":"graph-node","node":"2","role":"active"}]
             }
           ]
}
```
