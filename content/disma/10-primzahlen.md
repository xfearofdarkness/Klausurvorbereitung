---
id: primzahlen
title: Primzahlen
icon: 🔢
---

## Karte: Primzahl
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 158-159

Eine <em>Primzahl</em> ist eine natürliche Zahl, die genau zwei natürliche Zahlen als Teiler hat. Die Menge der Primzahlen bezeichnet man mit \(\mathbb{P}\). Eine natürliche Zahl größer als 1 heißt <em>prim</em>, wenn sie eine Primzahl ist, sonst <em>zusammengesetzt</em>. Die 1 ist nicht prim und nicht zusammengesetzt. Der Begriff leitet sich vom lateinischen <em>numerus primus</em> ab, „die erste Zahl“.

## Karte: Sieb des Eratosthenes
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 160-166

Im Zahlenraster wird zuerst die 1 gestrichen, dann alle echten Vielfachen von 2, von 3, von 5 usw.; übrig bleiben die Primzahlen. Das ist das sog. Sieb des Eratosthenes. Will man die Zahlen bis 50 aussieben, genügt es, die echten Vielfachen von 2, 3, 5 und 7 auszusieben: \(2 \cdot 11 = 22\) ist bereits Vielfaches von 2, \(3 \cdot 11 = 33\) Vielfaches von 3, \(4 \cdot 11 = 44\) Vielfaches von 4, und \(5 \cdot 11 = 55\) liegt schon außerhalb des Bereichs.

## Karte: Primfaktorzerlegung
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folien 167-168

Beobachtung: \(30 = 2 \cdot 3 \cdot 5\), \(17 = 17\), \(1024 = 2^{10}\), \(6936 = 2^3 \cdot 3 \cdot 17^2\). Behauptung: Für jede natürliche Zahl \(n \ne 1\) existiert eine Darstellung als Produkt von Primzahlen, \[n = \prod_{i \in I} p_i\] mit \(p_i \in \mathbb{P}\) und der Indexmenge \(I \subset \mathbb{N}\).

## Karte: Beweis der Primfaktorzerlegung
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folie 169

Für \(p \in \mathbb{P}\) ist \(p\) selbst die Primfaktorzerlegung. Angenommen, es existieren Zahlen, die nicht als Produkt von Primzahlen darstellbar sind; dann existiert eine kleinste solche Zahl \(k\). Da \(k\) weder 1 noch prim ist, hat \(k\) einen Teiler: Es gibt \(a, b \in \mathbb{N}\) mit \(a \cdot b = k\) und \(1 < a, b < k\). Weil \(k\) die kleinste Zahl ohne Zerlegung ist, haben \(a\) und \(b\) Primfaktorzerlegungen \(a = \prod_{j \in J} p_j\), \(b = \prod_{l \in L} p_l\). Dann ist \(\prod_{j \in J} p_j \cdot \prod_{l \in L} p_l\) eine Primfaktorzerlegung von \(k\). Widerspruch!

## Karte: Es gibt unendlich viele Primzahlen
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folie 170

Beweis: Angenommen, \(p_1 = 2 < p_2 = 3 < p_3 = 5 < \ldots < p_r\) wären alle Primzahlen. Sei \(P = p_1 \cdot \ldots \cdot p_r + 1\) und \(p\) eine Primzahl, die \(P\) teilt. Dann kann \(p\) keine der Zahlen \(p_1, \ldots, p_r\) sein, sonst müsste \(p\) auch \(P - p_1 \cdot \ldots \cdot p_r = 1\) teilen, was nicht möglich ist. Also ist \(p\) eine zusätzliche Primzahl, und \(p_1, \ldots, p_r\) können nicht alle Primzahlen gewesen sein.

## Karte: Wissenswertes über Primzahlen
quelle: DiskreteMathematikVLHO.pdf, Folien 171-174

Aufeinanderfolgende Primzahlen \(p_i\), \(p_{i+1}\) mit \(p_{i+1} - p_i = 2\) heißen Primzahlzwillinge; es ist unbekannt, ob es unendlich viele gibt. Goldbach'sche Vermutung: Jede gerade Zahl größer als 2 lässt sich als Summe zweier Primzahlen darstellen; sie ist bisher weder bewiesen noch widerlegt. Zikaden erscheinen in Tennessee seit 1634 regelmäßig alle 17 Jahre (anderswo in Nordamerika alle 13 Jahre), nicht alle 12 Jahre: Sonst könnten sie von synchronisierten Räubern gefressen werden, die alle 1, 2, 3, 4, 6 und 12 Jahre erscheinen.

## Frage: Was ist eine Primzahl?
id: primzahl
quelle: DiskreteMathematikVLHO.pdf, Folie 158

Eine natürliche Zahl, die genau zwei natürliche Zahlen als Teiler hat.

## Frage: Ist 1 eine Primzahl?
id: eins-nicht-prim
quelle: DiskreteMathematikVLHO.pdf, Folie 159

Nein. Die 1 ist weder prim noch zusammengesetzt.

## Frage: Welche Vielfachen muss man streichen, um die Zahlen bis 50 auszusieben?
id: sieb-bis-50
quelle: DiskreteMathematikVLHO.pdf, Folie 166

Die echten Vielfachen von 2, 3, 5 und 7; z. B. ist \(5 \cdot 11 = 55\) schon außerhalb des Bereichs.

## Frage: Was besagt der Satz über die Primfaktorzerlegung?
id: primfaktorzerlegung
quelle: DiskreteMathematikVLHO.pdf, Folie 168

Jede natürliche Zahl \(n \ne 1\) lässt sich als Produkt von Primzahlen darstellen: \(n = \prod_{i \in I} p_i\) mit \(p_i \in \mathbb{P}\).

## Frage: Wie beweist man, dass jede Zahl \(n \ne 1\) eine Primfaktorzerlegung hat?
id: primfaktor-beweis
quelle: DiskreteMathematikVLHO.pdf, Folie 169

Durch Widerspruch mit der kleinsten Zahl \(k\) ohne Zerlegung: \(k = a \cdot b\) mit \(1 < a, b < k\); \(a\) und \(b\) haben Zerlegungen, deren Produkt eine Zerlegung von \(k\) ist.

## Frage: Wie beweist man, dass es unendlich viele Primzahlen gibt?
id: unendlich-viele-primzahlen
quelle: DiskreteMathematikVLHO.pdf, Folie 170

Wären \(p_1, \ldots, p_r\) alle Primzahlen, so hätte \(P = p_1 \cdots p_r + 1\) einen Primteiler \(p\), der keine der \(p_i\) ist, sonst würde \(p\) auch 1 teilen.

## Frage: Was sind Primzahlzwillinge?
id: primzahlzwillinge
quelle: DiskreteMathematikVLHO.pdf, Folie 171

Aufeinanderfolgende Primzahlen mit Abstand 2; ob es unendlich viele gibt, ist unbekannt.

## Frage: Was besagt die Goldbach'sche Vermutung?
id: goldbach
quelle: DiskreteMathematikVLHO.pdf, Folie 172

Jede gerade Zahl größer als 2 lässt sich als Summe zweier Primzahlen darstellen; bisher weder bewiesen noch widerlegt.

## Aufgabe: Primfaktorzerlegung
id: rm-primfaktorzerlegung
generator: primfaktorzerlegung
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 24; DiskreteMathematikVLHO.pdf, Folien 167-169

## Ablauf: Sieb des Eratosthenes bis 31
nach: Sieb des Eratosthenes
quelle: DiskreteMathematikVLHO.pdf, Folien 160-165

```json
{
  "id": "sieb-des-eratosthenes",
  "intro": "Die Zahlen von 1 bis 31 stehen wie auf der Folie in einem Raster. Schrittweise werden die 1 und alle echten Vielfachen von 2, 3 und 5 gestrichen; gestrichene Zahlen sind durchgestrichen dargestellt.",
  "legend": {"factor": "Primzahl", "target": "In diesem Schritt gestrichen", "done": "Gestrichen"},
  "visual": {
    "kind": "matrix",
    "matrices": [
      {
        "id": "zahlen",
        "label": "Zahlen bis 31",
        "layout": "table",
        "values": [
          [1, 2, 3, 4, 5, 6, 7],
          [null, 8, 9, 10, 11, 12, 13],
          [null, 14, 15, 16, 17, 18, 19],
          [null, 20, 21, 22, 23, 24, 25],
          [null, 26, 27, 28, 29, 30, 31]
        ],
        "rowLabels": ["", "", "", "", ""],
        "colLabels": ["", "", "", "", "", "", ""]
      }
    ]
  },
  "steps": [
    {
      "title": "1 streichen",
      "text": "Die 1 ist nicht prim und nicht zusammengesetzt; sie wird zuerst gestrichen.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 161",
      "explanation": {
        "action": "1 streichen.",
        "rule": "Eine Primzahl hat genau zwei natürliche Zahlen als Teiler; die 1 hat nur einen.",
        "decision": "1 ist keine Primzahl → streichen."
      },
      "values": [{"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 0, "value": "1̶"}],
      "highlights": [{"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 0, "role": "target"}]
    },
    {
      "title": "Vielfache von 2 streichen",
      "text": "2 bleibt stehen, alle echten Vielfachen von 2 werden gestrichen: 4, 6, 8, …, 30.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 162",
      "explanation": {
        "action": "Echte Vielfache von 2 streichen.",
        "rule": "Echte Vielfache einer Zahl größer 1 haben einen weiteren Teiler und sind zusammengesetzt.",
        "decision": "2 ist prim; 4, 6, …, 30 sind zusammengesetzt."
      },
      "values": [
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 3, "value": "4̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 5, "value": "6̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 1, "value": "8̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 3, "value": "1̶0̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 5, "value": "1̶2̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 1, "value": "1̶4̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 3, "value": "1̶6̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 5, "value": "1̶8̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 1, "value": "2̶0̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 3, "value": "2̶2̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 5, "value": "2̶4̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 1, "value": "2̶6̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 3, "value": "2̶8̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 5, "value": "3̶0̶"}
      ],
      "highlights": [
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 1, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 3, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 5, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 1, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 3, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 5, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 1, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 3, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 5, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 1, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 3, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 5, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 1, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 3, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 5, "role": "target"}
      ]
    },
    {
      "title": "Vielfache von 3 streichen",
      "text": "3 bleibt stehen. Von den Vielfachen von 3 sind 6, 12, 18, 24 und 30 schon gestrichen; neu gestrichen werden 9, 15, 21 und 27.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 163",
      "explanation": {
        "action": "Echte Vielfache von 3 streichen.",
        "rule": "Echte Vielfache einer Zahl größer 1 sind zusammengesetzt.",
        "decision": "3 ist prim; 9, 15, 21, 27 werden gestrichen."
      },
      "values": [
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 2, "value": "9̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 2, "value": "1̶5̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 2, "value": "2̶1̶"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 2, "value": "2̶7̶"}
      ],
      "highlights": [
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 2, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 2, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 2, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 2, "role": "target"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 2, "role": "target"}
      ]
    },
    {
      "title": "Vielfache von 5 streichen",
      "text": "5 bleibt stehen. Von den Vielfachen von 5 ist nur 25 noch nicht gestrichen.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 164",
      "explanation": {
        "action": "Echte Vielfache von 5 streichen.",
        "rule": "Echte Vielfache einer Zahl größer 1 sind zusammengesetzt.",
        "decision": "5 ist prim; 25 wird gestrichen."
      },
      "values": [{"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 6, "value": "2̶5̶"}],
      "highlights": [
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 4, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 6, "role": "target"}
      ]
    },
    {
      "title": "Ergebnis",
      "text": "Übrig bleiben die Primzahlen bis 31: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31. Dieses Verfahren heißt Sieb des Eratosthenes.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 165",
      "explanation": {
        "action": "Die nicht gestrichenen Zahlen ablesen.",
        "rule": "Alle Zahlen, die kein echtes Vielfaches einer kleineren Zahl größer 1 sind, sind prim.",
        "decision": "Die übrigen elf Zahlen sind die Primzahlen bis 31."
      },
      "highlights": [
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 1, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 2, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 4, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 0, "col": 6, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 4, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 1, "col": 6, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 4, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 2, "col": 6, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 3, "col": 4, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 4, "role": "factor"},
        {"kind": "matrix-cell", "matrix": "zahlen", "row": 4, "col": 6, "role": "factor"}
      ]
    }
  ]
}
```
