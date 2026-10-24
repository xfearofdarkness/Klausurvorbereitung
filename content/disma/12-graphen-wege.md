---
id: graphen-wege
title: Graphen: Wege, Eulerkreise und Zusammenhang
icon: 🗺️
---

## Karte: Haus vom Nikolaus
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 212-216

Das Haus vom Nikolaus lässt sich ohne Absetzen des Stiftes zeichnen. Für Graphen fragt man: Kann man ihn mit einem Zug zeichnen? Wenn ja, wo muss man beginnen und wo enden? Wie viele Möglichkeiten gibt es dafür? Wie viele Wege gibt es von A nach B? Für die Antworten braucht man weitere Begriffe.

## Karte: Kantenfolge
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 217-219

Jede (endliche) Abfolge von Knoten und Kanten in einem Graphen heißt <em>Kantenfolge</em>; die Anzahl der Kanten heißt Länge der Kantenfolge. Beispiele von A nach B: AfB (Länge 1), AlEmB (Länge 2), AlEnChDkB (Länge 4), AlEjDhCnEjDkB (Länge 6). Knoten und Kanten dürfen beliebig oft vorkommen. In schlichten Graphen sind die Kanten eindeutig bestimmt, dort kann man die Kantennamen weglassen.

## Karte: Kantenzug und Weg
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 220-222

Objekte \(o_1, \ldots, o_n\) heißen paarweise verschieden, wenn keine zwei gleich sind: \(i \ne j \Rightarrow o_i \ne o_j\). Kommt keine Kante mehrfach vor, heißt eine Kantenfolge <em>Kantenzug</em>. Ein Graph mit der Knotenmenge \(\{X_1, \ldots, X_n\}\) und der Kantenmenge \(\{\{X_1, X_2\},\) \(\{X_2, X_3\}, \ldots,\) \(\{X_{n-1}, X_n\}\}\) heißt <em>Weg</em>, wenn die Knoten \(X_i\) paarweise verschieden sind. Ein Kantenzug/Weg heißt <em>vollständig</em>, wenn er alle Kanten/Knoten des Graphen enthält. Ein Kantenzug heißt <em>geschlossen</em>, wenn Anfangs- und Endknoten identisch sind.

## Karte: Beispiele: Kantenfolge, Kantenzug, Weg
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 223-224

Im Graphen mit den Knoten A bis H: Kantenfolge von A nach B: AGFDGFEB (Kante GF doppelt). Kantenzug von A nach B: AGFDGHEB (keine Kante doppelt, aber G doppelt). Weg von A nach B: AGFCEB (alle Knoten verschieden). AHBECFDGHEFGA ist ein vollständiger, geschlossener Kantenzug, aber kein Weg, da Knoten mehrfach vorkommen.

## Karte: Eulerzug und Eulerkreis
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 225-228

Ein Graph lässt sich genau dann ohne Absetzen vollständig zeichnen, wenn es einen vollständigen Kantenzug in ihm gibt; man spricht dann von einem <em>Eulerzug</em>. Ist er zusätzlich geschlossen, spricht man von einem <em>Eulerkreis</em>. Satz: Wenn ein Graph genau zwei Knoten mit ungeradem Knotengrad hat, gibt es einen Eulerzug. Satz: Wenn in einem Graphen alle Knoten einen geraden Knotengrad haben, gibt es einen Eulerkreis.

## Karte: Kantenfolge enthält Weg
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folien 232-233

Gegeben sei ein beliebiger Graph mit den (verschiedenen) Knoten A und B. Dann enthält jede Kantenfolge von A nach B auch einen Weg von A nach B. Der Nachweis wird in einer Übungsaufgabe behandelt.

## Karte: Verträglichkeitsgraph und Cliquen
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 234-238

Frage: Wie schaltet man eine Ampelanlage so, dass der Verkehrsfluss optimiert wird? Die naive Lösung, dass jeweils nur ein Strom \(s_i\) „Vorfahrt“ hat, ist nicht optimal. Idee: Zwei Verkehrsströme, die gleichzeitig fließen können, heißen verträglich; man bildet einen <em>Verträglichkeitsgraphen</em> mit den Strömen \(s_1, \ldots, s_8\) als Knoten. Einen vollständigen Teilgraphen nennt man <em>Clique</em>. Cliquen im Beispiel: \(C_1 = \{s_1, s_2, s_6\}\), \(C_2 = \{s_2, s_5, s_6\}\), \(C_3 = \{s_3, s_5, s_6\}\), \(C_4 = \{s_4, s_5, s_6\}\), \(C_5 = \{s_1, s_7\}\), \(C_6 = \{s_7, s_8\}\). Man strebt an, mit möglichst wenig Cliquen alle Ströme abzudecken; günstig ist auch, dass aufeinanderfolgende Cliquen möglichst viele Elemente enthalten. Eine Möglichkeit ist die Sequenz \(S = (C_1, C_6, C_3, C_4)\).

## Karte: Zusammenhängend, Brücke, anhangslos
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 239-241

Ein Graph heißt <em>zusammenhängend</em>, wenn es von jedem Knoten zu jedem anderen Knoten einen Weg gibt. Eine Kante heißt <em>Brücke</em>, wenn durch ihr Entfernen der Zusammenhang des Graphen verloren geht. Ein Graph ohne Brücken heißt <em>anhangslos</em>. Beispiel: Im zusammenhängenden Graphen von Folie 240 sind AD und GK Brücken (ohne sie entstünden die Inseln D und K), ebenso AE und AF (ohne sie zerfiele der Graph in zwei Teilgraphen). Ein nicht zusammenhängender Graph kann zusammenhängende Teilgraphen wie DAEBH, LMNO und CFGK haben.

## Karte: Algorithmus: Ist ein Graph zusammenhängend?
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 242-243

1. Wähle einen Knoten und markiere ihn (z. B. mit einer Farbe). 2. Markiere alle zum markierten Knoten benachbarten Knoten. 3. Prüfe, ob alle Knoten markiert sind. Wenn nicht, markiere alle zu bereits markierten Knoten benachbarten Knoten. 4. Wiederhole den letzten Schritt, bis sich kein Knoten mehr markieren lässt. Sind alle Knoten markiert, ist der Graph zusammenhängend, sonst nicht.

## Karte: Eulerkreise als optimale Route
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 244-248

Eulerkreise sind auch bei aktuellen Fragen bedeutsam: Für eine Route (Bilder von BYTEthinks) bildet man den passenden Graphen. Alle Knoten haben geraden Grad (2 oder 4), also existiert ein Eulerkreis, der als optimale Route interpretiert werden kann.

## Karte: Algorithmus von Fleury
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 249-250

In der Praxis genügt der Existenznachweis nicht, man muss optimale Routen auch finden, u. a. mit dem Algorithmus von Fleury. Er fügt einer anfangs leeren Kantenfolge alle Kanten eines Graphen hinzu, sodass ein Eulerkreis entsteht: 1. Wähle einen beliebigen Knoten als aktuellen Knoten. 2. Wähle unter den unmarkierten, mit dem aktuellen Knoten benachbarten (inzidenten) Kanten eine beliebige Kante aus; dabei sind (zuerst) Kanten zu wählen, die im unmarkierten Graphen keine Brückenkanten sind. 3. Markiere die gewählte Kante und füge sie der Kantenfolge hinzu. 4. Wähle den anderen Knoten der gewählten Kante als neuen aktuellen Knoten. 5. Wenn noch unmarkierte Kanten existieren, gehe zu Schritt 2.

## Karte: Gerichtete Graphen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 255-256

Bisher waren die Graphen ungerichtet: Kanten haben keine Richtung. In gerichteten Graphen sind die Kanten Pfeile von einem Knoten zu einem anderen.

## Karte: Adjazenz- und Inzidenzmatrix
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 257-260

Gerichteter Graph mit den Knoten 1–4 und den Kanten \(a: 2 \to 1\), \(b, e: 3 \to 2\), \(c: 1 \to 3\), \(d: 3 \to 4\). Die <em>Adjazenzmatrix</em> enthält in Zeile \(i\), Spalte \(j\) die Anzahl der Kanten von \(i\) nach \(j\): \[\begin{pmatrix} 0 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 2 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}\] Die <em>Inzidenzmatrix</em> hat eine Zeile pro Knoten und eine Spalte pro Kante (a bis e); im Beispiel steht −1 beim Anfangs- und 1 beim Endknoten der Kante: \[\begin{pmatrix} 1 & 0 & -1 & 0 & 0 \\ -1 & 1 & 0 & 0 & 1 \\ 0 & -1 & 1 & -1 & -1 \\ 0 & 0 & 0 & 1 & 0 \end{pmatrix}\] Offen bleibt die Frage, wie dies bei nicht gerichteten Graphen aussähe.

## Karte: Gewichtete Graphen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 261-264

Ein Graph heißt <em>gewichtet</em>, wenn man jeder Kante eine reelle Zahl zuordnet, ihr Gewicht bzw. ihre Länge. Diese muss nicht der geometrischen Länge der Kante entsprechen, sondern kann andere Bedeutungen haben. Im Beispiel werden Wege von A nach E notiert und ihre Länge \(l\) berechnet, z. B. ABCDHE \(l = 12{,}8\), ABCHE \(l = 10{,}6\), ADCFE \(l = 7{,}8\), ADHE \(l = 8\); ADCFE ist dort der kürzeste.

## Karte: Färbung von Landkarten
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 265-266

Eine Landkarte soll so gefärbt werden, dass keine zwei „Länder“ mit gemeinsamem Grenzstück dieselbe Farbe erhalten. Wie viele Farben braucht man dazu mindestens? Dazu zeichnet man einen passenden Graphen: ein Knoten pro Land, eine Kante zwischen Ländern mit gemeinsamer Grenze.

## Frage: Was ist eine Kantenfolge, und was ihre Länge?
id: kantenfolge
quelle: DiskreteMathematikVLHO.pdf, Folie 217

Jede endliche Abfolge von Knoten und Kanten in einem Graphen; die Länge ist die Anzahl der Kanten.

## Frage: Was unterscheidet Kantenfolge, Kantenzug und Weg?
id: kantenfolge-kantenzug-weg
quelle: DiskreteMathematikVLHO.pdf, Folien 219-221

Kantenfolge: Knoten und Kanten beliebig oft. Kantenzug: keine Kante mehrfach. Weg: die Knoten sind paarweise verschieden.

## Frage: Wann heißt ein Kantenzug vollständig, wann geschlossen?
id: kantenzug-vollstaendig-geschlossen
quelle: DiskreteMathematikVLHO.pdf, Folie 221

Vollständig: er enthält alle Kanten des Graphen. Geschlossen: Anfangs- und Endknoten sind identisch.

## Frage: Was ist ein Eulerzug, was ein Eulerkreis?
id: eulerzug-eulerkreis
quelle: DiskreteMathematikVLHO.pdf, Folie 225

Eulerzug: ein vollständiger Kantenzug, der Graph lässt sich ohne Absetzen zeichnen. Eulerkreis: ein geschlossener Eulerzug.

## Frage: Wann gibt es einen Eulerzug, wann einen Eulerkreis?
id: euler-saetze
quelle: DiskreteMathematikVLHO.pdf, Folien 226-227

Eulerzug: wenn genau zwei Knoten ungeraden Knotengrad haben. Eulerkreis: wenn alle Knoten geraden Knotengrad haben.

## Frage: Was ist eine Clique?
id: clique
quelle: DiskreteMathematikVLHO.pdf, Folie 236

Ein vollständiger Teilgraph.

## Frage: Wann heißen zwei Verkehrsströme verträglich?
id: vertraeglich
quelle: DiskreteMathematikVLHO.pdf, Folie 235

Wenn sie gleichzeitig fließen können.

## Frage: Wann ist ein Graph zusammenhängend, was ist eine Brücke?
id: zusammenhaengend-bruecke
quelle: DiskreteMathematikVLHO.pdf, Folie 239

Zusammenhängend: von jedem Knoten gibt es zu jedem anderen einen Weg. Brücke: eine Kante, durch deren Entfernen der Zusammenhang verloren geht.

## Frage: Was ist ein anhangsloser Graph?
id: anhangslos
quelle: DiskreteMathematikVLHO.pdf, Folie 239

Ein Graph, der keine Brücken besitzt.

## Frage: Wie prüft man algorithmisch, ob ein Graph zusammenhängend ist?
id: zusammenhang-algorithmus
quelle: DiskreteMathematikVLHO.pdf, Folie 242

Einen Knoten markieren, dann wiederholt alle zu markierten Knoten benachbarten Knoten markieren, bis sich keiner mehr markieren lässt. Sind alle markiert, ist der Graph zusammenhängend.

## Frage: Welche Kanten wählt der Algorithmus von Fleury bevorzugt?
id: fleury-regel
quelle: DiskreteMathematikVLHO.pdf, Folie 250

Unter den unmarkierten Kanten am aktuellen Knoten zuerst solche, die im unmarkierten Graphen keine Brückenkanten sind.

## Frage: Was steht in einer Adjazenzmatrix?
id: adjazenzmatrix
quelle: DiskreteMathematikVLHO.pdf, Folie 258

In Zeile \(i\), Spalte \(j\) die Anzahl der Kanten vom Knoten \(i\) zum Knoten \(j\).

## Frage: Wann heißt ein Graph gewichtet?
id: gewichtet
quelle: DiskreteMathematikVLHO.pdf, Folie 261

Wenn jeder Kante eine reelle Zahl (Gewicht bzw. Länge) zugeordnet ist; sie muss nicht der geometrischen Länge entsprechen.

## Aufgabe: Aufgabe 27 (Variante)
id: aufgabe-27-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 27

Zeichnen Sie jeweils einen Graphen mit sieben Knoten, der das Folgende enthält: Kantenfolge, Kantenzug, Weg, vollständiger Kantenzug, vollständiger Weg, geschlossener Kantenzug, geschlossener Weg.

## Aufgabe: Aufgabe 29 (Variante)
id: aufgabe-29-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 29

Lassen sich die vollständigen Graphen mit 4, 5 und 6 Knoten jeweils in einem Zug zeichnen, ohne abzusetzen und ohne eine Linie doppelt zu malen? Begründen Sie mit den Knotengraden.

## Aufgabe: Aufgabe 30 (Variante)
id: aufgabe-30-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 30

Fügen Sie dem Haus vom Nikolaus genau eine Kante hinzu, sodass man es in einem geschlossenen Zug zeichnen kann, ohne abzusetzen und ohne eine Linie doppelt zu malen. Begründen Sie Ihre Wahl mit den Knotengraden.

## Aufgabe: Aufgabe 31 (Variante)
id: aufgabe-31-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 31

Beantworten Sie ohne Unterlagen: Was ist eine Abbildung, was eine Urbildmenge? Wann ist eine Abbildung bijektiv? Wie funktioniert vollständige Induktion (an einem eigenen Beispiel)? Wann heißen zwei Mengen gleichmächtig? Was heißt „überabzählbar“? Wie zeigt man, dass \(\mathbb{Q}\) abzählbar ist? Was besagt das Schubfachprinzip (an einem eigenen Beispiel)? Welche Sätze über Primzahlen und über Graphen kennen Sie, und welche davon können Sie beweisen?

## Aufgabe: Aufgabe 32 (Variante)
id: aufgabe-32-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 32

Weisen Sie den Satz aus der Vorlesung nach, nach dem jede Kantenfolge zwischen zwei verschiedenen Knoten A und B auch einen Weg von A nach B enthält.

## Aufgabe: Aufgabe 33 (Variante)
id: aufgabe-33-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 33

Zeichnen Sie einen Graphen mit 8 Knoten, der zusammenhängend und schlicht ist, 2 Brücken enthält und in dem ein Eulerkreis existiert.

## Aufgabe: Aufgabe 34 (Variante)
id: aufgabe-34-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 34

Zeigen Sie für Ihren Graphen aus Aufgabe 33 (Variante) algorithmisch, dass er zusammenhängend ist.

## Aufgabe: Aufgabe 35 (Variante)
id: aufgabe-35-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 35

Finden Sie algorithmisch einen Eulerkreis im folgenden Graphen: Die Knoten A, B, C, D bilden ein Viereck mit den Kanten AB, BC, CD, DA; die Knoten N und S sind jeweils mit A, B, C und D verbunden.


## Aufgabe: Königsberger Brückenproblem
id: folie-231-koenigsberg
quelle: DiskreteMathematikVLHO.pdf, Folien 192 und 230-231

1) Zeichnen Sie einen Graphen, der das Königsberger Brückenproblem repräsentiert (Ufer und Inseln als Knoten, die sieben Brücken als Kanten). 2) Lösen Sie das Problem mit Ihren bisherigen Kenntnissen und formulieren Sie eine hinreichend ausführliche Begründung.
## Ablauf: Zusammenhang prüfen
nach: Algorithmus: Ist ein Graph zusammenhängend?
quelle: DiskreteMathematikVLHO.pdf, Folien 240 und 242

```json
{
  "id": "zusammenhang-pruefen",
  "intro": "Der Graph von Folie 240 wird mit dem Markierungsalgorithmus von Folie 242 geprüft: Startknoten markieren, dann wiederholt alle Nachbarn markierter Knoten markieren.",
  "legend": {"active": "Neu markiert", "done": "Markiert"},
  "visual": {
    "kind": "graph",
    "nodes": [
      {"id": "D", "x": 9, "y": 8},
      {"id": "F", "x": 74, "y": 17},
      {"id": "G", "x": 8, "y": 38},
      {"id": "A", "x": 39, "y": 47},
      {"id": "E", "x": 85, "y": 59},
      {"id": "K", "x": 9, "y": 75},
      {"id": "C", "x": 43, "y": 76},
      {"id": "H", "x": 50, "y": 92},
      {"id": "B", "x": 92, "y": 89}
    ],
    "edges": [
      {"from": "A", "to": "D"},
      {"from": "G", "to": "F"},
      {"from": "A", "to": "F"},
      {"from": "F", "to": "C"},
      {"from": "G", "to": "C"},
      {"from": "G", "to": "K"},
      {"from": "A", "to": "E"},
      {"from": "E", "to": "H"},
      {"from": "E", "to": "B"},
      {"from": "H", "to": "B"}
    ]
  },
  "steps": [
    {
      "title": "Startknoten A",
      "text": "Wähle einen Knoten und markiere ihn, hier A.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 242",
      "explanation": {
        "action": "A markieren.",
        "rule": "1. Wähle einen Knoten und markiere ihn.",
        "decision": "Markiert: A."
      },
      "values": [{"kind": "graph-node", "node": "A", "mark": "done"}],
      "highlights": [{"kind": "graph-node", "node": "A", "role": "active"}]
    },
    {
      "title": "Nachbarn von A",
      "text": "D, F und E sind zu A benachbart und werden markiert.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 242",
      "explanation": {
        "action": "Alle zu A benachbarten Knoten markieren.",
        "rule": "2. Markiere alle zum markierten Knoten benachbarten Knoten.",
        "decision": "Markiert: A, D, F, E."
      },
      "values": [
        {"kind": "graph-node", "node": "D", "mark": "done"},
        {"kind": "graph-node", "node": "F", "mark": "done"},
        {"kind": "graph-node", "node": "E", "mark": "done"}
      ],
      "highlights": [
        {"kind": "graph-node", "node": "D", "role": "active"},
        {"kind": "graph-node", "node": "F", "role": "active"},
        {"kind": "graph-node", "node": "E", "role": "active"},
        {"kind": "graph-edge", "from": "A", "to": "D", "role": "active"},
        {"kind": "graph-edge", "from": "A", "to": "F", "role": "active"},
        {"kind": "graph-edge", "from": "A", "to": "E", "role": "active"}
      ]
    },
    {
      "title": "Nächste Runde",
      "text": "Noch nicht alle Knoten sind markiert. Zu F benachbart sind G und C, zu E benachbart H und B; sie werden markiert.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 242",
      "explanation": {
        "action": "Nachbarn aller markierten Knoten markieren.",
        "rule": "Prüfe, ob alle Knoten markiert sind. Wenn nicht, markiere alle zu bereits markierten Knoten benachbarten Knoten.",
        "decision": "Neu markiert: G, C, H, B; K fehlt noch."
      },
      "values": [
        {"kind": "graph-node", "node": "G", "mark": "done"},
        {"kind": "graph-node", "node": "C", "mark": "done"},
        {"kind": "graph-node", "node": "H", "mark": "done"},
        {"kind": "graph-node", "node": "B", "mark": "done"}
      ],
      "highlights": [
        {"kind": "graph-node", "node": "G", "role": "active"},
        {"kind": "graph-node", "node": "C", "role": "active"},
        {"kind": "graph-node", "node": "H", "role": "active"},
        {"kind": "graph-node", "node": "B", "role": "active"},
        {"kind": "graph-edge", "from": "G", "to": "F", "role": "active"},
        {"kind": "graph-edge", "from": "F", "to": "C", "role": "active"},
        {"kind": "graph-edge", "from": "E", "to": "H", "role": "active"},
        {"kind": "graph-edge", "from": "E", "to": "B", "role": "active"}
      ]
    },
    {
      "title": "Letzte Runde",
      "text": "K ist zu G benachbart und wird markiert. Jetzt sind alle Knoten markiert, also ist der Graph zusammenhängend.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 242",
      "explanation": {
        "action": "Nachbarn markierter Knoten markieren und prüfen.",
        "rule": "4. Wiederhole den letzten Schritt, bis sich kein Knoten mehr markieren lässt. Sind alle Knoten markiert, ist der Graph zusammenhängend, sonst nicht.",
        "decision": "Alle neun Knoten markiert → zusammenhängend."
      },
      "values": [{"kind": "graph-node", "node": "K", "mark": "done"}],
      "highlights": [
        {"kind": "graph-node", "node": "K", "role": "active"},
        {"kind": "graph-edge", "from": "G", "to": "K", "role": "active"}
      ]
    }
  ]
}
```

## Ablauf: Algorithmus von Fleury
nach: Algorithmus von Fleury
quelle: DiskreteMathematikVLHO.pdf, Folien 250-254

```json
{
  "id": "fleury",
  "intro": "Alle Knoten haben geraden Grad (A, B, C, D je 2, E 4), also gibt es einen Eulerkreis. Der Algorithmus von Fleury fügt der anfangs leeren Kantenfolge Kante für Kante hinzu.",
  "legend": {
    "compare": "Aktueller Knoten",
    "active": "Gewählte Kante und neuer aktueller Knoten",
    "done": "Markierte Kante"
  },
  "visual": {
    "kind": "graph",
    "nodes": [
      {"id": "A", "x": 22, "y": 12},
      {"id": "E", "x": 80, "y": 22},
      {"id": "B", "x": 8, "y": 58},
      {"id": "D", "x": 80, "y": 62},
      {"id": "C", "x": 45, "y": 90}
    ],
    "edges": [
      {"from": "A", "to": "E"},
      {"from": "A", "to": "C"},
      {"from": "B", "to": "E"},
      {"from": "B", "to": "D"},
      {"from": "E", "to": "D"},
      {"from": "E", "to": "C"}
    ]
  },
  "steps": [
    {
      "title": "Start in A",
      "text": "Wähle einen beliebigen Knoten als aktuellen Knoten, hier A. Die Kantenfolge ist leer.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 250",
      "explanation": {
        "action": "Startknoten wählen.",
        "rule": "1. Wähle einen beliebigen Knoten als aktuellen Knoten.",
        "decision": "Aktueller Knoten: A."
      },
      "highlights": [{"kind": "graph-node", "node": "A", "role": "compare"}]
    },
    {
      "title": "Kante 1: A–E",
      "text": "Von A aus wird A–E gewählt und markiert; E ist neuer aktueller Knoten. Kantenfolge: A E.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 252",
      "explanation": {
        "action": "Am aktuellen Knoten A eine Kante wählen.",
        "rule": "Wähle unter den unmarkierten, mit dem aktuellen Knoten benachbarten Kanten eine aus; dabei sind (zuerst) Kanten zu wählen, die im unmarkierten Graphen keine Brückenkanten sind.",
        "decision": "A–E ist im unmarkierten Graphen keine Brücke → wählen."
      },
      "values": [{"kind": "graph-edge", "from": "A", "to": "E", "mark": "done"}],
      "highlights": [
        {"kind": "graph-node", "node": "A", "role": "compare"},
        {"kind": "graph-node", "node": "E", "role": "active"},
        {"kind": "graph-edge", "from": "A", "to": "E", "role": "active"}
      ]
    },
    {
      "title": "Kante 2: E–D",
      "text": "An E sind E–B, E–D und E–C unmarkiert. E–C ist jetzt eine Brücke: Ohne sie wären A und C vom Rest getrennt. Gewählt wird E–D. Kantenfolge: A E D.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 252",
      "explanation": {
        "action": "Am aktuellen Knoten E eine Kante wählen.",
        "rule": "Wähle unter den unmarkierten, mit dem aktuellen Knoten benachbarten Kanten eine aus; dabei sind (zuerst) Kanten zu wählen, die im unmarkierten Graphen keine Brückenkanten sind.",
        "decision": "E–C ist Brücke, E–D nicht → E–D wählen."
      },
      "values": [{"kind": "graph-edge", "from": "E", "to": "D", "mark": "done"}],
      "highlights": [
        {"kind": "graph-node", "node": "E", "role": "compare"},
        {"kind": "graph-node", "node": "D", "role": "active"},
        {"kind": "graph-edge", "from": "E", "to": "D", "role": "active"}
      ]
    },
    {
      "title": "Kante 3: D–B",
      "text": "An D ist nur noch D–B unmarkiert. Kantenfolge: A E D B.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 253",
      "explanation": {
        "action": "Am aktuellen Knoten D eine Kante wählen.",
        "rule": "Wähle unter den unmarkierten, mit dem aktuellen Knoten benachbarten Kanten eine aus; dabei sind (zuerst) Kanten zu wählen, die im unmarkierten Graphen keine Brückenkanten sind.",
        "decision": "Einzige unmarkierte Kante an D → D–B."
      },
      "values": [{"kind": "graph-edge", "from": "B", "to": "D", "mark": "done"}],
      "highlights": [
        {"kind": "graph-node", "node": "D", "role": "compare"},
        {"kind": "graph-node", "node": "B", "role": "active"},
        {"kind": "graph-edge", "from": "B", "to": "D", "role": "active"}
      ]
    },
    {
      "title": "Kante 4: B–E",
      "text": "An B ist nur noch B–E unmarkiert. Kantenfolge: A E D B E.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 253",
      "explanation": {
        "action": "Am aktuellen Knoten B eine Kante wählen.",
        "rule": "Wähle unter den unmarkierten, mit dem aktuellen Knoten benachbarten Kanten eine aus; dabei sind (zuerst) Kanten zu wählen, die im unmarkierten Graphen keine Brückenkanten sind.",
        "decision": "Einzige unmarkierte Kante an B → B–E."
      },
      "values": [{"kind": "graph-edge", "from": "B", "to": "E", "mark": "done"}],
      "highlights": [
        {"kind": "graph-node", "node": "B", "role": "compare"},
        {"kind": "graph-node", "node": "E", "role": "active"},
        {"kind": "graph-edge", "from": "B", "to": "E", "role": "active"}
      ]
    },
    {
      "title": "Kante 5: E–C",
      "text": "An E ist nur noch E–C unmarkiert; jetzt darf die Brücke gewählt werden. Kantenfolge: A E D B E C.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 253",
      "explanation": {
        "action": "Am aktuellen Knoten E eine Kante wählen.",
        "rule": "Wähle unter den unmarkierten, mit dem aktuellen Knoten benachbarten Kanten eine aus; dabei sind (zuerst) Kanten zu wählen, die im unmarkierten Graphen keine Brückenkanten sind.",
        "decision": "Keine andere Kante übrig → E–C."
      },
      "values": [{"kind": "graph-edge", "from": "E", "to": "C", "mark": "done"}],
      "highlights": [
        {"kind": "graph-node", "node": "E", "role": "compare"},
        {"kind": "graph-node", "node": "C", "role": "active"},
        {"kind": "graph-edge", "from": "E", "to": "C", "role": "active"}
      ]
    },
    {
      "title": "Kante 6: C–A",
      "text": "An C bleibt C–A. Alle Kanten sind markiert, der Eulerkreis ist A E D B E C A.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 254",
      "explanation": {
        "action": "Am aktuellen Knoten C eine Kante wählen.",
        "rule": "Wähle unter den unmarkierten, mit dem aktuellen Knoten benachbarten Kanten eine aus; dabei sind (zuerst) Kanten zu wählen, die im unmarkierten Graphen keine Brückenkanten sind.",
        "decision": "Letzte Kante C–A → Eulerkreis geschlossen."
      },
      "values": [{"kind": "graph-edge", "from": "A", "to": "C", "mark": "done"}],
      "highlights": [
        {"kind": "graph-node", "node": "C", "role": "compare"},
        {"kind": "graph-node", "node": "A", "role": "active"},
        {"kind": "graph-edge", "from": "A", "to": "C", "role": "active"}
      ]
    }
  ]
}
```
