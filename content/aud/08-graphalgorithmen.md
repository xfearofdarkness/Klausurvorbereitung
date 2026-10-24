---
id: graphalgorithmen
title: Graphalgorithmen
icon: 🧭
---

## Karte: Topologische Ordnung
tag: def
quelle: 08_graph-algorithms.pdf, Folien 4-5

Topologisches Sortieren wird verwendet, um die Knoten in einem gerichteten azyklischen Graphen (directed acyclic graph, DAG) zu ordnen. Topologische Ordnung: eine Ordnung der Knoten, bei der a vor b kommt, wenn eine gerichtete Kante von a nach b existiert. Anwendungsbeispiele: To-Do-Listen, sich anziehen. Es kann mehr als eine topologische Ordnung geben.

## Karte: Topologisches Sortieren (rückwärts)
tag: wichtig
quelle: 08_graph-algorithms.pdf, Folien 6-22

Ein Nachfolger eines Knotens v ist ein Knoten w, sodass (v, w) eine Kante ist. Grundgedanke: Knoten ohne (unbesuchte) Nachfolger finden und rückwärts gehen. Algorithmus: Solange es unbesuchte Knoten gibt, finde einen noch nicht besuchten Knoten w ohne unbesuchte Nachfolger, markiere ihn als besucht und lege ihn auf einen Stack. Nimmt man die Knoten vom Stack ab, erhält man eine mögliche topologische Ordnung — im Folienbeispiel: 2 1 8 5 4 7 6 3.

## Karte: Topologisches Sortieren (vorwärts)
tag: wichtig
quelle: 08_graph-algorithms.pdf, Folien 23-46

Füge jeden Knoten ohne eingehende Kanten in eine Queue ein. Solange die Queue nicht leer ist: entferne Knoten w, markiere ihn als besucht; für jeden Knoten x mit einer Kante (w, x): entferne die Kante aus dem Graphen, und wenn x keine eingehenden Kanten mehr hat, füge x in die Queue ein. Wenn am Ende immer noch Kanten existieren, ist der Graph zyklisch.

## Karte: Minimaler Spannbaum (MST)
tag: def
quelle: 08_graph-algorithms.pdf, Folie 48

Der Spannbaum mit den geringsten Gesamtkosten unter allen möglichen Spannbäumen. Wenn keine zwei Kanten denselben Kostenwert haben, gibt es genau einen MST; bei gleichen Kostenwerten kann es mehrere geben. Anwendungen: das kürzeste Autobahnnetz für eine Gruppe von Städten, die kürzeste Kabellänge zur Verbindung eines Computernetzwerks.

## Karte: MST: wichtige Erkenntnis
tag: satz
quelle: 08_graph-algorithms.pdf, Folie 49

Unterteilt man die Knoten in zwei disjunkte Teilmengen A und B, dann muss die kostengünstigste Kante, die einen Knoten aus A mit einem Knoten aus B verbindet, Teil des MST sein.

## Karte: Prim-Jarnik-Algorithmus
tag: wichtig
quelle: 08_graph-algorithms.pdf, Folie 50

Eingabe: ein ungerichteter, gewichteter, zusammenhängender Graph G und ein Startknoten; Ausgabe: ein minimaler Spannbaum. Ablauf: Für jeden Knoten v: v.kosten = unendlich; Startknoten.kosten = 0. Solange es noch nicht finalisierte Knoten mit Kosten < unendlich gibt: finde den nicht finalisierten Knoten w mit den minimalen Kosten und markiere ihn als finalisiert; für jeden nicht finalisierten Nachbarknoten x von w: wenn kanten_kosten(w, x) < x.kosten, dann x.kosten = kanten_kosten(w, x) und x.Eltern = w.

## Karte: MST enthält nicht den kürzesten Weg
tag: wichtig
quelle: 08_graph-algorithms.pdf, Folie 99

Der minimale Spannbaum ist der Spannbaum mit den geringsten Gesamtkosten der Kanten — er enthält aber nicht unbedingt den Weg mit den geringsten Kosten zwischen zwei Knoten. Beispiel: Der kürzeste Weg von Hamburg nach Berlin verläuft entlang der einzigen direkten Kante zwischen beiden Städten; diese Kante ist nicht im minimalen Spannbaum.

## Karte: Dijkstra-Algorithmus
tag: wichtig
quelle: 08_graph-algorithms.pdf, Folien 102-103

Dijkstra löst das Kürzeste-Weg-Problem für gewichtete Graphen mit nicht-negativen Kantengewichten. Er findet vom Startknoten aus die kürzesten Wege zu allen erreichbaren Knoten. Grundidee: Schätzwerte für die kürzesten Wege und ihre Kosten merken und diese Schätzwerte während der Durchquerung schrittweise verfeinern.

## Frage: Was ist eine topologische Ordnung, und für welche Graphen ist sie definiert?
id: 11408cg
quelle: 08_graph-algorithms.pdf, Folien 4-5

Eine Ordnung der Knoten eines gerichteten azyklischen Graphen (DAG), bei der a vor b kommt, wenn eine gerichtete Kante von a nach b existiert. Es kann mehr als eine topologische Ordnung geben.

## Frage: Wie funktioniert der Rückwärts-Algorithmus zum topologischen Sortieren?
id: 94q259
quelle: 08_graph-algorithms.pdf, Folien 6-22

Wiederholt einen unbesuchten Knoten ohne unbesuchte Nachfolger finden, als besucht markieren und auf einen Stack legen. Das Abnehmen der Knoten vom Stack ergibt eine topologische Ordnung.

## Frage: Wie erkennt der Vorwärts-Algorithmus zum topologischen Sortieren einen Zyklus?
id: 1o02osw
quelle: 08_graph-algorithms.pdf, Folien 23-46

Knoten ohne eingehende Kanten kommen in eine Queue; beim Abarbeiten werden die ausgehenden Kanten entfernt und neue Knoten ohne eingehende Kanten eingefügt. Existieren am Ende noch Kanten, ist der Graph zyklisch.

## Frage: Was ist ein minimaler Spannbaum, und wann ist er eindeutig?
id: 1rwmf3i
quelle: 08_graph-algorithms.pdf, Folie 48

Der Spannbaum mit den geringsten Gesamtkosten aller Kanten. Er ist eindeutig, wenn keine zwei Kanten denselben Kostenwert haben; sonst kann es mehrere geben.

## Frage: Auf welcher Erkenntnis beruht die MST-Konstruktion?
id: 1n7lovd
quelle: 08_graph-algorithms.pdf, Folie 49

Teilt man die Knoten in zwei disjunkte Teilmengen A und B, muss die kostengünstigste Kante zwischen A und B Teil des MST sein.

## Frage: Beschreiben Sie den Prim-Jarnik-Algorithmus.
id: df6y2h
quelle: 08_graph-algorithms.pdf, Folie 50

Alle Knotenkosten auf unendlich setzen, Startknoten auf 0. Wiederholt den nicht finalisierten Knoten w mit minimalen Kosten finalisieren und für jeden nicht finalisierten Nachbarn x prüfen: sind die Kantenkosten (w, x) kleiner als x.kosten, werden x.kosten und x.Eltern aktualisiert. Ergebnis ist ein minimaler Spannbaum.

## Frage: Worin unterscheidet sich Dijkstra von Prim-Jarnik bei der Kostenaktualisierung?
id: 106ygyb
quelle: 08_graph-algorithms.pdf, Folien 50, 103

Dijkstra aktualisiert mit den kumulierten Kosten über den aktuellen Knoten: kosten_via_w = w.kosten + kanten_kosten(w, x). Prim-Jarnik vergleicht nur die einzelne Kantenkosten für den MST.

## Frage: Welche Eingabe und Ausgabe hat Prim-Jarnik?
id: 1gwppyz
quelle: 08_graph-algorithms.pdf, Folie 50

Prim-Jarnik erhält einen ungerichteten, gewichteten, zusammenhängenden Graphen plus Startknoten als Eingabe und liefert einen minimalen Spannbaum.

## Frage: Enthält der minimale Spannbaum immer den kürzesten Weg zwischen zwei Knoten?
id: 7hc2lo
quelle: 08_graph-algorithms.pdf, Folie 99

Nein. Der MST minimiert die Gesamtkosten aller Kanten, nicht die Kosten einzelner Verbindungen — z. B. liegt die direkte (kürzeste) Kante Hamburg-Berlin nicht im MST des Folienbeispiels.

## Frage: Was berechnet Dijkstra?
id: r3xihj
quelle: 08_graph-algorithms.pdf, Folien 102-103

Dijkstra berechnet kürzeste Wege vom Startknoten zu allen erreichbaren Knoten in einem Graphen mit nicht-negativen Kantengewichten.

## Ablauf: Prim-Jarnik von Knoten 1
nach: Prim-Jarnik-Algorithmus
quelle: 08_graph-algorithms.pdf, Folien 50-85

```json
{
  "id": "prim-jarnik",
  "intro": "Über jedem Knoten stehen seine aktuellen Kosten. In jedem Schritt wird der günstigste nicht finalisierte Knoten finalisiert; markierte Kanten gehören zum minimalen Spannbaum.",
  "legend": {
              "active": "Wird finalisiert",
              "compare": "Kosten aktualisiert",
              "done": "Finalisiert / im Spannbaum"
            },
  "visual": {
              "kind": "graph",
              "nodes": [
                         {"id":"1","x":20,"y":12,"note":"0"},
                         {"id":"3","x":45,"y":12,"note":"∞"},
                         {"id":"2","x":28,"y":40,"note":"∞"},
                         {"id":"8","x":53,"y":40,"note":"∞"},
                         {"id":"7","x":78,"y":40,"note":"∞"},
                         {"id":"4","x":38,"y":58,"note":"∞"},
                         {"id":"6","x":20,"y":78,"note":"∞"},
                         {"id":"5","x":53,"y":78,"note":"∞"}
                       ],
              "edges": [
                         {"from":"1","to":"3","label":"20"},
                         {"from":"1","to":"6","label":"50"},
                         {"from":"1","to":"8","label":"39"},
                         {"from":"2","to":"8","label":"20"},
                         {"from":"3","to":"7","label":"33"},
                         {"from":"4","to":"5","label":"10"},
                         {"from":"4","to":"6","label":"27"},
                         {"from":"5","to":"6","label":"30"},
                         {"from":"5","to":"7","label":"33"},
                         {"from":"5","to":"8","label":"25"}
                       ]
            },
  "steps": [
             {
               "title": "Initialisierung",
               "text": "Alle Knotenkosten werden auf unendlich gesetzt, der Startknoten 1 auf 0.",
               "explanation": {
                                "action": "Kosten aller Knoten setzen.",
                                "rule": "Für jeden Knoten v: v.kosten = unendlich; Startknoten.kosten = 0.",
                                "decision": "1 hat die Kosten 0, alle anderen ∞."
                              },
               "highlights": [{"kind":"graph-node","node":"1","role":"active"}]
             },
             {
               "title": "Finalisiere 1 (Kosten 0)",
               "text": "Die Nachbarn von 1 werden aktualisiert: 3 auf 20, 8 auf 39, 6 auf 50 (Eltern jeweils 1).",
               "explanation": {
                                "action": "Minimum: 1 (0) — alle anderen haben ∞.",
                                "rule": "Für jeden nicht finalisierten Nachbarn x von w: wenn kanten_kosten(w, x) &lt; x.kosten, dann x.kosten = kanten_kosten(w, x) und x.Eltern = w.",
                                "decision": "1 wird finalisiert; 3 → 20, 8 → 39, 6 → 50."
                              },
               "values": [
                           {"kind":"graph-node","node":"1","mark":"done"},
                           {"kind":"graph-node","node":"3","note":"20"},
                           {"kind":"graph-node","node":"8","note":"39"},
                           {"kind":"graph-node","node":"6","note":"50"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"1","role":"active"},
                               {"kind":"graph-node","node":"3","role":"compare"},
                               {"kind":"graph-node","node":"8","role":"compare"},
                               {"kind":"graph-node","node":"6","role":"compare"}
                             ]
             },
             {
               "title": "Finalisiere 3 (Kosten 20)",
               "text": "3 hat die minimalen Kosten — die Kante (1, 3) kommt in den Spannbaum. Nachbar 7 wird auf 33 gesetzt.",
               "explanation": {
                                "action": "Minimum: 3 (20) vor 8 (39) und 6 (50).",
                                "rule": "Finde den nicht finalisierten Knoten w mit den minimalen Kosten und markiere ihn als finalisiert.",
                                "decision": "3 wird finalisiert; 7 → 33."
                              },
               "values": [
                           {"kind":"graph-node","node":"3","mark":"done"},
                           {"kind":"graph-edge","from":"1","to":"3","mark":"done"},
                           {"kind":"graph-node","node":"7","note":"33"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"3","role":"active"},
                               {"kind":"graph-node","node":"7","role":"compare"}
                             ]
             },
             {
               "title": "Finalisiere 7 (Kosten 33)",
               "text": "Kante (3, 7) kommt in den Spannbaum. Nachbar 5 wird auf 33 gesetzt.",
               "explanation": {
                                "action": "Minimum: 7 (33) vor 8 (39) und 6 (50).",
                                "rule": "Finde den nicht finalisierten Knoten w mit den minimalen Kosten und markiere ihn als finalisiert.",
                                "decision": "7 wird finalisiert; 5 → 33."
                              },
               "values": [
                           {"kind":"graph-node","node":"7","mark":"done"},
                           {"kind":"graph-edge","from":"3","to":"7","mark":"done"},
                           {"kind":"graph-node","node":"5","note":"33"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"7","role":"active"},
                               {"kind":"graph-node","node":"5","role":"compare"}
                             ]
             },
             {
               "title": "Finalisiere 5 (Kosten 33)",
               "text": "Kante (7, 5) kommt in den Spannbaum. Die Nachbarn von 5 werden verbessert: 8 auf 25, 4 auf 10, 6 auf 30.",
               "explanation": {
                                "action": "Minimum: 5 (33) vor 8 (39) und 6 (50).",
                                "rule": "Wenn kanten_kosten(w, x) &lt; x.kosten, dann x.kosten = kanten_kosten(w, x) und x.Eltern = w.",
                                "decision": "5 wird finalisiert; 25 < 39 → 8 auf 25, 4 auf 10, 30 < 50 → 6 auf 30."
                              },
               "values": [
                           {"kind":"graph-node","node":"5","mark":"done"},
                           {"kind":"graph-edge","from":"5","to":"7","mark":"done"},
                           {"kind":"graph-node","node":"8","note":"25"},
                           {"kind":"graph-node","node":"4","note":"10"},
                           {"kind":"graph-node","node":"6","note":"30"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"5","role":"active"},
                               {"kind":"graph-node","node":"8","role":"compare"},
                               {"kind":"graph-node","node":"4","role":"compare"},
                               {"kind":"graph-node","node":"6","role":"compare"}
                             ]
             },
             {
               "title": "Finalisiere 4 (Kosten 10)",
               "text": "Kante (5, 4) kommt in den Spannbaum. Nachbar 6 wird auf 27 verbessert.",
               "explanation": {
                                "action": "Minimum: 4 (10) vor 8 (25) und 6 (30).",
                                "rule": "Wenn kanten_kosten(w, x) &lt; x.kosten, dann x.kosten = kanten_kosten(w, x) und x.Eltern = w.",
                                "decision": "4 wird finalisiert; 27 < 30 → 6 auf 27."
                              },
               "values": [
                           {"kind":"graph-node","node":"4","mark":"done"},
                           {"kind":"graph-edge","from":"4","to":"5","mark":"done"},
                           {"kind":"graph-node","node":"6","note":"27"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"4","role":"active"},
                               {"kind":"graph-node","node":"6","role":"compare"}
                             ]
             },
             {
               "title": "Finalisiere 8 (Kosten 25)",
               "text": "Kante (5, 8) kommt in den Spannbaum. Nachbar 2 wird auf 20 gesetzt.",
               "explanation": {
                                "action": "Minimum: 8 (25) vor 6 (27) und 2 (∞).",
                                "rule": "Wenn kanten_kosten(w, x) &lt; x.kosten, dann x.kosten = kanten_kosten(w, x) und x.Eltern = w.",
                                "decision": "8 wird finalisiert; 2 → 20."
                              },
               "values": [
                           {"kind":"graph-node","node":"8","mark":"done"},
                           {"kind":"graph-edge","from":"5","to":"8","mark":"done"},
                           {"kind":"graph-node","node":"2","note":"20"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"8","role":"active"},
                               {"kind":"graph-node","node":"2","role":"compare"}
                             ]
             },
             {
               "title": "Finalisiere 2 (Kosten 20)",
               "text": "Kante (8, 2) kommt in den Spannbaum.",
               "explanation": {
                                "action": "Minimum: 2 (20) vor 6 (27).",
                                "rule": "Finde den nicht finalisierten Knoten w mit den minimalen Kosten und markiere ihn als finalisiert.",
                                "decision": "2 wird finalisiert; keine Kosten ändern sich."
                              },
               "values": [
                           {"kind":"graph-node","node":"2","mark":"done"},
                           {"kind":"graph-edge","from":"2","to":"8","mark":"done"}
                         ],
               "highlights": [{"kind":"graph-node","node":"2","role":"active"}]
             },
             {
               "title": "Finalisiere 6 (Kosten 27): fertig",
               "text": "Kante (4, 6) kommt in den Spannbaum. Alle Knoten sind finalisiert — die markierten Kanten bilden den minimalen Spannbaum.",
               "explanation": {
                                "action": "Nur 6 (27) ist noch nicht finalisiert.",
                                "rule": "Solange es noch nicht finalisierte Knoten mit Kosten &lt; unendlich gibt, wird weiter finalisiert.",
                                "decision": "6 wird finalisiert; danach ist kein Knoten mehr übrig → fertig."
                              },
               "values": [
                           {"kind":"graph-node","node":"6","mark":"done"},
                           {"kind":"graph-edge","from":"4","to":"6","mark":"done"}
                         ],
               "highlights": [{"kind":"graph-node","node":"6","role":"active"}]
             }
           ]
}
```

## Ablauf: Dijkstra: kürzeste Wege ab 1
nach: Dijkstra-Algorithmus
quelle: 08_graph-algorithms.pdf, Folien 103-139

```json
{
  "id": "dijkstra-kuerzeste-wege",
  "intro": "Über jedem Knoten steht die aktuell beste bekannte Distanz vom Startknoten 1. Markierte Kanten bilden den endgültigen Vorgängerpfad.",
  "legend": {
              "active": "Aktueller Knoten",
              "compare": "Distanz geprüft",
              "done": "Finalisiert / Vorgängerpfad"
            },
  "visual": {
              "kind": "graph",
              "nodes": [
                         {"id":"1","x":20,"y":12,"note":"0"},
                         {"id":"3","x":45,"y":12,"note":"∞"},
                         {"id":"2","x":28,"y":40,"note":"∞"},
                         {"id":"8","x":53,"y":40,"note":"∞"},
                         {"id":"7","x":78,"y":40,"note":"∞"},
                         {"id":"4","x":38,"y":58,"note":"∞"},
                         {"id":"6","x":20,"y":78,"note":"∞"},
                         {"id":"5","x":53,"y":78,"note":"∞"}
                       ],
              "edges": [
                         {"from":"1","to":"3","label":"20"},
                         {"from":"1","to":"6","label":"50"},
                         {"from":"1","to":"8","label":"39"},
                         {"from":"2","to":"8","label":"20"},
                         {"from":"3","to":"7","label":"33"},
                         {"from":"4","to":"5","label":"10"},
                         {"from":"4","to":"6","label":"27"},
                         {"from":"5","to":"6","label":"30"},
                         {"from":"5","to":"7","label":"33"},
                         {"from":"5","to":"8","label":"25"}
                       ]
            },
  "steps": [
             {
               "title": "Initialisierung",
               "text": "Alle Distanzen stehen auf unendlich; der Startknoten 1 hat Distanz 0.",
               "explanation": {
                                "action": "Distanzschätzungen vorbereiten.",
                                "rule": "Startknoten.kosten = 0, alle anderen Knoten.kosten = unendlich.",
                                "decision": "Der erste finale Knoten wird 1 sein."
                              },
               "highlights": [{"kind":"graph-node","node":"1","role":"active"}]
             },
             {
               "title": "Finalisiere 1",
               "text": "Von 1 aus entstehen die Schätzwerte 3 = 20, 8 = 39 und 6 = 50.",
               "explanation": {
                                "action": "Nachbarn von 1 aktualisieren.",
                                "rule": "kosten_via_w = w.kosten + kanten_kosten(w, x).",
                                "decision": "20, 39 und 50 sind besser als unendlich."
                              },
               "values": [
                           {"kind":"graph-node","node":"1","mark":"done"},
                           {"kind":"graph-node","node":"3","note":"20"},
                           {"kind":"graph-node","node":"8","note":"39"},
                           {"kind":"graph-node","node":"6","note":"50"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"1","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"3","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"8","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"6","role":"active"},
                               {"kind":"graph-node","node":"3","role":"compare"},
                               {"kind":"graph-node","node":"8","role":"compare"},
                               {"kind":"graph-node","node":"6","role":"compare"}
                             ]
             },
             {
               "title": "Finalisiere 3",
               "text": "3 hat mit 20 die kleinste offene Distanz. Über 3 erreicht man 7 mit 20 + 33 = 53.",
               "explanation": {
                                "action": "Knoten 3 festlegen und Nachbar 7 prüfen.",
                                "rule": "Der kleinste nicht finalisierte Schätzwert wird endgültig.",
                                "decision": "53 ist besser als unendlich."
                              },
               "values": [
                           {"kind":"graph-node","node":"3","mark":"done"},
                           {"kind":"graph-edge","from":"1","to":"3","mark":"done"},
                           {"kind":"graph-node","node":"7","note":"53"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"3","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"3","role":"done"},
                               {"kind":"graph-node","node":"7","role":"compare"},
                               {"kind":"graph-edge","from":"3","to":"7","role":"active"}
                             ]
             },
             {
               "title": "Finalisiere 8",
               "text": "8 hat mit 39 die kleinste offene Distanz. Über 8 entstehen 2 = 59 und 5 = 64.",
               "explanation": {
                                "action": "Knoten 8 festlegen und seine offenen Nachbarn aktualisieren.",
                                "rule": "39 + 20 = 59, 39 + 25 = 64.",
                                "decision": "Beide Werte verbessern unendlich."
                              },
               "values": [
                           {"kind":"graph-node","node":"8","mark":"done"},
                           {"kind":"graph-edge","from":"1","to":"8","mark":"done"},
                           {"kind":"graph-node","node":"2","note":"59"},
                           {"kind":"graph-node","node":"5","note":"64"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"8","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"8","role":"done"},
                               {"kind":"graph-node","node":"2","role":"compare"},
                               {"kind":"graph-node","node":"5","role":"compare"},
                               {"kind":"graph-edge","from":"2","to":"8","role":"active"},
                               {"kind":"graph-edge","from":"5","to":"8","role":"active"}
                             ]
             },
             {
               "title": "Finalisiere 6",
               "text": "6 hat mit 50 die kleinste offene Distanz. Über 6 wird 4 auf 77 gesetzt; 5 bleibt bei 64.",
               "explanation": {
                                "action": "Nachbarn von 6 prüfen.",
                                "rule": "Nur kleinere kumulierte Kosten ersetzen alte Schätzwerte.",
                                "decision": "50 + 27 = 77 verbessert 4; 50 + 30 = 80 verbessert 5 nicht."
                              },
               "values": [
                           {"kind":"graph-node","node":"6","mark":"done"},
                           {"kind":"graph-edge","from":"1","to":"6","mark":"done"},
                           {"kind":"graph-node","node":"4","note":"77"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"6","role":"active"},
                               {"kind":"graph-edge","from":"1","to":"6","role":"done"},
                               {"kind":"graph-node","node":"4","role":"compare"},
                               {"kind":"graph-node","node":"5","role":"compare"},
                               {"kind":"graph-edge","from":"4","to":"6","role":"active"},
                               {"kind":"graph-edge","from":"5","to":"6","role":"active"}
                             ]
             },
             {
               "title": "Finalisiere 7",
               "text": "7 hat mit 53 die kleinste offene Distanz. Über 7 ergäbe sich 5 = 86, also bleibt 5 bei 64.",
               "explanation": {
                                "action": "Nachbar 5 über 7 prüfen.",
                                "rule": "Nur echte Verbesserungen werden übernommen.",
                                "decision": "53 + 33 = 86 ist schlechter als 64."
                              },
               "values": [
                           {"kind":"graph-node","node":"7","mark":"done"},
                           {"kind":"graph-edge","from":"3","to":"7","mark":"done"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"7","role":"active"},
                               {"kind":"graph-edge","from":"3","to":"7","role":"done"},
                               {"kind":"graph-node","node":"5","role":"compare"},
                               {"kind":"graph-edge","from":"5","to":"7","role":"active"}
                             ]
             },
             {
               "title": "Finalisiere 2",
               "text": "2 hat mit 59 die kleinste offene Distanz. Es entstehen keine besseren Schätzwerte.",
               "explanation": {
                                "action": "Knoten 2 festlegen.",
                                "rule": "Finalisierte Knoten werden nicht erneut verbessert.",
                                "decision": "Die einzige offene relevante Verbindung führt zurück zu 8."
                              },
               "values": [
                           {"kind":"graph-node","node":"2","mark":"done"},
                           {"kind":"graph-edge","from":"2","to":"8","mark":"done"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"2","role":"active"},
                               {"kind":"graph-edge","from":"2","to":"8","role":"done"}
                             ]
             },
             {
               "title": "Finalisiere 5",
               "text": "5 hat mit 64 die kleinste offene Distanz. Über 5 verbessert sich 4 von 77 auf 74.",
               "explanation": {
                                "action": "Nachbarn von 5 prüfen.",
                                "rule": "64 + 10 = 74 ersetzt die bisherige 77.",
                                "decision": "Der Vorgänger von 4 wird 5."
                              },
               "values": [
                           {"kind":"graph-node","node":"5","mark":"done"},
                           {"kind":"graph-edge","from":"5","to":"8","mark":"done"},
                           {"kind":"graph-node","node":"4","note":"74"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"5","role":"active"},
                               {"kind":"graph-edge","from":"5","to":"8","role":"done"},
                               {"kind":"graph-node","node":"4","role":"target"},
                               {"kind":"graph-edge","from":"4","to":"5","role":"active"}
                             ]
             },
             {
               "title": "Finalisiere 4: fertig",
               "text": "4 wird mit Distanz 74 finalisiert. Alle erreichbaren Knoten haben nun ihre kürzeste Distanz ab 1.",
               "explanation": {
                                "action": "Letzten offenen Knoten festlegen.",
                                "rule": "Wenn kein nicht finalisierter Knoten mit endlicher Distanz übrig ist, endet Dijkstra.",
                                "decision": "Enddistanzen: 1=0, 3=20, 8=39, 6=50, 7=53, 2=59, 5=64, 4=74."
                              },
               "values": [
                           {"kind":"graph-node","node":"4","mark":"done"},
                           {"kind":"graph-edge","from":"4","to":"5","mark":"done"}
                         ],
               "highlights": [
                               {"kind":"graph-node","node":"4","role":"active"},
                               {"kind":"graph-edge","from":"4","to":"5","role":"done"}
                             ]
             }
           ]
}
```
