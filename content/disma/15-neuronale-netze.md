---
id: neuronale-netze
title: Neuronale Netze
icon: 🧠
---

## Karte: Biologisches Vorbild
quelle: DiskreteMathematikVLHO.pdf, Folien 276-277 und 323

Das Gehirn besteht im Wesentlichen aus miteinander verknüpften Neuronen, die sich biologisch und mathematisch motiviert darstellen lassen. Biologisches Modell (Mensch): ca. \(8{,}6 \cdot 10^{10}\) Neuronen, jedes mit ca. \(10^4\) anderen verknüpft, im Kortex in bis zu sechs Schichten angeordnet; analoge Konstruktion bei Tieren. Ein Neuron hat Dendriten, Zellkörper mit Zellkern und ein Axon.

## Karte: Mathematisches Modell eines Neurons
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 324

Eingänge \(e_1, \ldots, e_n\) (Input bzw. Eingangsimpulse) werden mit Gewichten \(g_1, \ldots, g_n\) (positiv oder negativ) versehen und aufsummiert: \[S = \sum_{i=1}^{n} g_i e_i.\] Die Ausgabe ist \(f(S)\) mit der Aktivierungsfunktion \(f\).

## Karte: Gewichtungen
quelle: DiskreteMathematikVLHO.pdf, Folie 325

<table><thead><tr><th>Gewichtung</th><th>Funktion</th></tr></thead><tbody><tr><td>−1</td><td>Unterdrücke diese Daten kräftig.</td></tr><tr><td>−0,5</td><td>Unterdrücke diese Daten etwas.</td></tr><tr><td>0,0</td><td>Ignoriere diese Daten völlig.</td></tr><tr><td>0,5</td><td>Diese Daten sind nur halb so wichtig.</td></tr><tr><td>1,0</td><td>Werden übernommen, wie sie sind.</td></tr><tr><td>2,0</td><td>Doppelt so wichtig.</td></tr></tbody></table>

## Karte: Aktivierungsfunktionen
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 326-328

Beispiele: Treppenfunktion (springt am Schwellenwert \(\theta\) von 0 auf 1), lineare Funktion, Gauß (Glockenkurve), Sigmoidfunktion. Besonders wichtig: \[f_\theta(S) = \begin{cases} 1, & \text{falls } \sum_{i=1}^{n} g_i e_i \ge \theta \\ 0, & \text{sonst} \end{cases} \qquad \sigma(S) = \frac{1}{1 + e^{-S}}.\] Die Sigmoidfunktion repräsentiert das Aktivierungsverhalten des biologischen Neurons besonders gut. Für die Zwecke der Vorlesung ist die Treppenfunktion besonders passend, unter anderem weil man mit ihr schnell und präzise (im Kopf) rechnen kann.

## Karte: Layout eines neuronalen Netzes
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 329-330

Ein NN besteht aus Ebenen/Layers/Schichten; \(N_{ik}\) ist das \(k\)-te Neuron in der \(i\)-ten Schicht. 1. Schicht: wird mit Input gefüttert und gibt ihn an die 2. Schicht weiter (Eingabe- bzw. Input-Schicht). 2. Schicht: bearbeitet die Daten und gibt das Ergebnis an die 3. Schicht (verborgene bzw. versteckte Schicht, Hidden Layer). 3. Schicht: weitere Bearbeitung und Ausgabe (Ausgabe-Schicht, Output Layer). Die erste Schicht verteilt den Input lediglich; man könnte für die Zwecke der Vorlesung darauf verzichten. Die Zahl der Neuronen sollte möglichst klein sein, weil die Trainingszeit exponentiell mit ihr wächst; Idee: mehrere Inputs wie Panzer, Schiffe, Soldaten durch einen Input „Gegnerstärke“ ersetzen.

## Karte: Input und Output
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 331-334

Handschrifterkennung mit 4 × 4 = 16 Pixeln, also 16 Neuronen in der Input-Schicht, die jeweils 0 (weiß) oder 1 (schwarz) empfangen. Output: Für Großbuchstaben braucht man 29 Neuronen in der Output-Schicht bei Binäroutput (0 für nicht gefunden, 1 für gefunden). Korrektes Output für ein A: A 1, B 0, C 0, …; falsches: A 1, B 1, …; besseres: A 0,69, B 0,74, C 0,12. Daran ist erkennbar, wie das NN geändert werden muss: A erhöhen, B deutlich senken, C ist in Ordnung.

## Karte: Ein Neuron für das „oder“
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 335-337

Mit \(\theta = 0{,}5\), \(g_1 = g_2 = 1\) und der Treppenfunktion \(f_\theta\) ist \(S = e_1 + e_2\): <table><thead><tr><th>\(A = e_1\)</th><th>\(B = e_2\)</th><th>\(S\)</th><th>\(f(S)\)</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>2</td><td>1</td></tr></tbody></table> Das liefert \(A \lor B\). Es gibt mehrere Möglichkeiten, z. B. auch \(g_1 = g_2 = 1\) mit \(f_{0,2}\).

## Karte: Lernen und Delta-Regel
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 338-340

Passende Gewichte findet man durch (überwachtes) Lernen: Zu einem Problem liegen Eingabedaten und zugeordnete Ausgabedaten vor. Das NN wird mit zufälligen Gewichten initialisiert und mit Eingabebeispielen gespeist; man vergleicht die gelieferten Ist-Werte mit den Soll-Werten. Stimmen sie nicht überein, werden die Gewichte nach der Delta-Regel korrigiert: \[g_i^{\text{neu}} = g_i^{\text{alt}} + \lambda(a_{\text{soll}} - a_{\text{ist}})e_i \quad (i = 1, \ldots, n).\] Die Gewichte ändern sich proportional zur Differenz von Soll- und Ist-Output. \(\lambda\) ist die Lernrate; große \(\lambda\) führen unter Umständen zum „Verlernen“ bereits richtig zugeordneter Beispiele.

## Karte: Perzeptron
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 350

In den Beispielen wird jeweils ein Perzeptron behandelt (von „perception“, Wahrnehmung), eingeführt 1958 von Frank Rosenblatt. Bei der Treppenfunktion wird oft nur der Schwellenwert \(\theta\) im Neuron verzeichnet.

## Karte: xor mit einem mehrschichtigen Netz
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 351-353

Das „exklusive oder“ \(A \dot\lor B\) ist nur bei verschiedenen Eingaben 1. Ein mehrschichtiges Netz liefert es: Eingabeschicht A, B; Zwischenschicht aus zwei Neuronen mit Schwellenwert 1, die A mit Gewicht 2 und B mit −2 bzw. A mit −2 und B mit 2 erhalten; Ausgabeneuron mit Schwellenwert 1 und Gewichten 2, 2. Das Durchrechnen aller vier Eingaben ergibt 0, 1, 1, 0. Mit nur einer Schicht geht das nicht; das bewies M. Minsky 1969.

## Frage: Wie berechnet ein Neuron seine Ausgabe?
id: neuron-ausgabe
quelle: DiskreteMathematikVLHO.pdf, Folie 324

Es bildet \(S = \sum g_i e_i\) aus den gewichteten Eingängen und gibt \(f(S)\) mit der Aktivierungsfunktion \(f\) aus.

## Frage: Wie lautet die Treppenfunktion \(f_\theta\)?
id: treppenfunktion
quelle: DiskreteMathematikVLHO.pdf, Folie 328

\(f_\theta(S) = 1\), falls \(\sum g_i e_i \ge \theta\), sonst 0.

## Frage: Warum verwendet die Vorlesung die Treppen- statt der Sigmoidfunktion?
id: treppe-statt-sigmoid
quelle: DiskreteMathematikVLHO.pdf, Folie 328

Die Sigmoidfunktion bildet das biologische Neuron besser ab, aber mit der Treppenfunktion kann man schnell und präzise (im Kopf) rechnen.

## Frage: Welche Schichten hat ein neuronales Netz?
id: nn-schichten
quelle: DiskreteMathematikVLHO.pdf, Folie 329

Eingabe- bzw. Input-Schicht, verborgene bzw. versteckte Schicht (Hidden Layer) und Ausgabe-Schicht (Output Layer).

## Frage: Warum sollte die Zahl der Neuronen möglichst klein sein?
id: wenige-neuronen
quelle: DiskreteMathematikVLHO.pdf, Folie 330

Weil die Trainingszeit exponentiell mit der Zahl der Neuronen wächst.

## Frage: Welches Neuron liefert das „oder“?
id: neuron-oder
quelle: DiskreteMathematikVLHO.pdf, Folie 336

Z. B. \(g_1 = g_2 = 1\) mit der Treppenfunktion zum Schwellenwert \(\theta = 0{,}5\); dann ist \(f(S) = 1\) genau dann, wenn \(e_1 + e_2 \ge 0{,}5\).

## Frage: Wie lautet die Delta-Regel?
id: delta-regel
quelle: DiskreteMathematikVLHO.pdf, Folie 339

\(g_i^{\text{neu}} = g_i^{\text{alt}} + \lambda(a_{\text{soll}} - a_{\text{ist}})e_i\) mit der Lernrate \(\lambda\).

## Frage: Was kann eine zu große Lernrate bewirken?
id: lernrate
quelle: DiskreteMathematikVLHO.pdf, Folie 340

Das „Verlernen“ bereits richtig zugeordneter Eingangsbeispiele.

## Frage: Was ist ein Perzeptron, und wer führte es ein?
id: perzeptron
quelle: DiskreteMathematikVLHO.pdf, Folie 350

Ein einzelnes Neuron wie in den Beispielen; eingeführt 1958 von Frank Rosenblatt.

## Frage: Kann ein einschichtiges Perzeptron das xor darstellen?
id: xor-minsky
quelle: DiskreteMathematikVLHO.pdf, Folie 353

Nein. Dafür braucht man ein mehrschichtiges Netz; dass es mit einer Schicht nicht geht, bewies M. Minsky 1969.

## Aufgabe: Perzeptron auf XOR trainieren
id: xor-trainieren
quelle: DiskreteMathematikVLHO.pdf, Folie 351

Trainieren Sie ein Perzeptron auf das xor („exklusives oder“): \(A \dot\lor B\) ist 0 für \((0,0)\) und \((1,1)\) und 1 für \((0,1)\) und \((1,0)\).

## Aufgabe: Neuron mit Treppenfunktion
id: rm-neuron-treppenfunktion
generator: neuron-treppenfunktion
notiz: Rechenmodul: Die Zahlen werden zufällig erzeugt, die Lösung wird nach dem Verfahren der Folien berechnet.
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 42; DiskreteMathematikVLHO.pdf, Folien 324 und 328

## Ablauf: Delta-Regel am Beispiel „und“
nach: Lernen und Delta-Regel
quelle: DiskreteMathematikVLHO.pdf, Folien 341-349

```json
{
  "id": "delta-regel-und",
  "legend": {"active": "Aktueller Trainingsschritt", "target": "Durch die Delta-Regel geändert", "done": "Bereits berechnet"},
  "intro": "Ein Perzeptron mit zwei Eingängen wird mit der Delta-Regel auf das „und“ trainiert (Soll: nur bei e₁ = e₂ = 1 Ausgabe 1). Jede Zeile ist ein Trainingsschritt.",
  "visual": {
    "kind": "matrix",
    "matrices": [
      {
        "id": "training",
        "label": "Training",
        "layout": "table",
        "values": [
          ["", "", "", "", "", "1", "1"],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ],
        "rowLabels": ["Start", "1", "2", "2 neu", "3", "3 neu", "4"],
        "colLabels": ["e₁", "e₂", "a_soll", "S", "a_ist", "g₁", "g₂"],
        "cornerLabel": "Schritt"
      }
    ]
  },
  "steps": [
    {
      "title": "Start",
      "text": "Das Perzeptron soll das „und“ lernen. Es startet mit den Gewichten g₁ = g₂ = 1 und der Treppenfunktion f₁ (Schwellenwert 1).",
      "source": "DiskreteMathematikVLHO.pdf, Folie 342",
      "explanation": {
        "action": "Gewichte und Aktivierungsfunktion festlegen.",
        "rule": "Zum Start wird das NN mit (zufälligen) Gewichten initialisiert und dann mit Eingabebeispielen gespeist.",
        "decision": "g₁ = 1, g₂ = 1, f = f₁."
      },
      "highlights": [{"kind": "matrix-row", "matrix": "training", "row": 0, "role": "active"}]
    },
    {
      "title": "Trainingsbeispiel 1",
      "text": "e₁ = 0, e₂ = 0: S = 1 · 0 + 1 · 0 = 0, a_ist = f(0) = 0 = a_soll.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 343",
      "explanation": {
        "action": "S und a_ist berechnen.",
        "rule": "f₁(S) = 1, falls S ≥ 1, sonst 0. Stimmen Ist- und Soll-Wert überein, bleiben die Gewichte.",
        "decision": "Ist = Soll → keine Änderung der Gewichte."
      },
      "values": [
        {"kind": "matrix-cell", "matrix": "training", "row": 1, "col": 0, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 1, "col": 1, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 1, "col": 2, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 1, "col": 3, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 1, "col": 4, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 1, "col": 5, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 1, "col": 6, "value": "1"}
      ],
      "highlights": [{"kind": "matrix-row", "matrix": "training", "row": 1, "role": "active"}]
    },
    {
      "title": "Trainingsbeispiel 2",
      "text": "e₁ = 0, e₂ = 1: S = 1 · 0 + 1 · 1 = 1, a_ist = f(1) = 1 ≠ 0 = a_soll. Die Gewichte müssen so geändert werden, dass a_ist kleiner wird: g₁ = 1 + 0,5 · (0 − 1) · 0 = 1, g₂ = 1 + 0,5 · (0 − 1) · 1 = 0,5.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 344",
      "explanation": {
        "action": "Gewichte mit der Delta-Regel korrigieren.",
        "rule": "Delta-Regel: g_i^neu = g_i^alt + λ(a_soll − a_ist)e_i mit Lernrate λ = 0,5.",
        "decision": "a_ist ≠ a_soll → g₁ bleibt 1, g₂ wird 0,5."
      },
      "values": [
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 0, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 1, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 2, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 3, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 4, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 5, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 6, "value": "0,5"}
      ],
      "highlights": [
        {"kind": "matrix-row", "matrix": "training", "row": 2, "role": "active"},
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 4, "role": "target"},
        {"kind": "matrix-cell", "matrix": "training", "row": 2, "col": 6, "role": "target"}
      ]
    },
    {
      "title": "Neuberechnung für Beispiel 2",
      "text": "Mit den neuen Gewichten: S = 1 · 0 + 0,5 · 1 = 0,5, a_ist = f(0,5) = 0 = a_soll.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 345",
      "explanation": {
        "action": "Beispiel 2 erneut berechnen.",
        "rule": "f₁(S) = 1, falls S ≥ 1, sonst 0. Stimmen Ist- und Soll-Wert überein, bleiben die Gewichte.",
        "decision": "Ist = Soll → passt jetzt."
      },
      "values": [
        {"kind": "matrix-cell", "matrix": "training", "row": 3, "col": 0, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 3, "col": 1, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 3, "col": 2, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 3, "col": 3, "value": "0,5"},
        {"kind": "matrix-cell", "matrix": "training", "row": 3, "col": 4, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 3, "col": 5, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 3, "col": 6, "value": "0,5"}
      ],
      "highlights": [{"kind": "matrix-row", "matrix": "training", "row": 3, "role": "active"}]
    },
    {
      "title": "Trainingsbeispiel 3",
      "text": "e₁ = 1, e₂ = 0: S = 1 · 1 + 0,5 · 0 = 1, a_ist = f(1) = 1 ≠ 0 = a_soll. Wie bei Beispiel 2: g₁ = 1 + 0,5 · (0 − 1) · 1 = 0,5, g₂ = 0,5 + 0,5 · (0 − 1) · 0 = 0,5.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 346",
      "explanation": {
        "action": "Gewichte mit der Delta-Regel korrigieren.",
        "rule": "Delta-Regel: g_i^neu = g_i^alt + λ(a_soll − a_ist)e_i mit Lernrate λ = 0,5.",
        "decision": "a_ist ≠ a_soll → g₁ wird 0,5, g₂ bleibt 0,5."
      },
      "values": [
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 0, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 1, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 2, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 3, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 4, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 5, "value": "0,5"},
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 6, "value": "0,5"}
      ],
      "highlights": [
        {"kind": "matrix-row", "matrix": "training", "row": 4, "role": "active"},
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 4, "role": "target"},
        {"kind": "matrix-cell", "matrix": "training", "row": 4, "col": 5, "role": "target"}
      ]
    },
    {
      "title": "Neuberechnung für Beispiel 3",
      "text": "S = 0,5 · 1 + 0,5 · 0 = 0,5, a_ist = f(0,5) = 0 = a_soll.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 348",
      "explanation": {
        "action": "Beispiel 3 erneut berechnen.",
        "rule": "f₁(S) = 1, falls S ≥ 1, sonst 0. Stimmen Ist- und Soll-Wert überein, bleiben die Gewichte.",
        "decision": "Ist = Soll → passt jetzt."
      },
      "values": [
        {"kind": "matrix-cell", "matrix": "training", "row": 5, "col": 0, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 5, "col": 1, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 5, "col": 2, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 5, "col": 3, "value": "0,5"},
        {"kind": "matrix-cell", "matrix": "training", "row": 5, "col": 4, "value": "0"},
        {"kind": "matrix-cell", "matrix": "training", "row": 5, "col": 5, "value": "0,5"},
        {"kind": "matrix-cell", "matrix": "training", "row": 5, "col": 6, "value": "0,5"}
      ],
      "highlights": [{"kind": "matrix-row", "matrix": "training", "row": 5, "role": "active"}]
    },
    {
      "title": "Trainingsbeispiel 4",
      "text": "e₁ = 1, e₂ = 1: S = 0,5 · 1 + 0,5 · 1 = 1, a_ist = f(1) = 1 = a_soll. Es verbleibt der Nachtest für e₁ = 0, e₂ = 0 und für e₁ = 0, e₂ = 1 usw.",
      "source": "DiskreteMathematikVLHO.pdf, Folie 349",
      "explanation": {
        "action": "S und a_ist berechnen.",
        "rule": "f₁(S) = 1, falls S ≥ 1, sonst 0. Stimmen Ist- und Soll-Wert überein, bleiben die Gewichte.",
        "decision": "Ist = Soll → das Perzeptron liefert das „und“ mit g₁ = g₂ = 0,5."
      },
      "values": [
        {"kind": "matrix-cell", "matrix": "training", "row": 6, "col": 0, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 6, "col": 1, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 6, "col": 2, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 6, "col": 3, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 6, "col": 4, "value": "1"},
        {"kind": "matrix-cell", "matrix": "training", "row": 6, "col": 5, "value": "0,5"},
        {"kind": "matrix-cell", "matrix": "training", "row": 6, "col": 6, "value": "0,5"}
      ],
      "highlights": [{"kind": "matrix-row", "matrix": "training", "row": 6, "role": "active"}]
    }
  ]
}
```
