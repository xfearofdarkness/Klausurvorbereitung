---
id: scheduling
title: Scheduling
icon: ⏱️
---

## Karte: Scheduling
tag: def
quelle: 07_rabs-scheduling.pdf, Folie 5

Scheduling ist die zeitliche Zuordnung von Aktivitäten zu Ressourcen. Im Betriebssystembereich ist meist die Zuteilung von CPU-Ressourcen gemeint; die Scheduling-Strategie kann die Leistung eines Rechnersystems beträchtlich beeinflussen.

## Karte: Scheduler und Dispatcher
quelle: 07_rabs-scheduling.pdf, Folien 6 und 8

Der Scheduler ist für die Prozessauswahl verantwortlich, der Dispatcher führt den Prozesskontextwechsel durch. Dabei rettet er den Kontext des laufenden Prozesses in dessen Prozesskontrollblock, teilt den Prozessor dem nächsten Prozess der Warteschlange zu und stellt dessen Kontext wieder her. Übergänge vom oder zum Zustand <em>rechnend</em> bedeuten immer einen Wechsel der CPU-Zuteilung.

## Karte: Scheduling-Kriterien
quelle: 07_rabs-scheduling.pdf, Folie 9

Beim Scheduling legt das Betriebssystem die Ausführungsreihenfolge der Prozesse im Zustand <em>bereit</em> fest. Kriterien sind hohe Effizienz, geringe Antwortzeit, hoher Durchsatz, Fairness, Pünktlichkeit, Prioritäten und gleichmäßige Ressourcenauslastung. Keine Strategie ist für jedes System optimal, ein Kompromiss zwischen den Kriterien ist notwendig.

## Karte: Ziele nach Systemtyp
quelle: 07_rabs-scheduling.pdf, Folie 10

Alle Systeme verlangen Fairness, Policy Enforcement und Balance. Stapelverarbeitung priorisiert Durchsatz, Turnaround-Zeit und CPU-Belegung. Interaktive Systeme priorisieren Antwortzeit und Proportionalität. Echtzeitsysteme priorisieren Deadline und vorhersagbares Verhalten.

## Karte: Nicht-präemptiv und präemptiv
tag: wichtig
quelle: 07_rabs-scheduling.pdf, Folien 11-12

Nicht-präemptives (kooperatives) Scheduling lässt einen Prozess bis zur Fertigstellung oder freiwilligen Abgabe laufen; er kann die CPU so lange belegen, wie er will. Präemptives (verdrängendes) Scheduling kann einem Prozess die CPU vorher entziehen; er pausiert dann in seinem Zustand, bis er wieder zugeteilt wird. Nachteil: höherer Overhead.

## Karte: Beispiel-Prozessliste
tag: beispiel
quelle: 07_rabs-scheduling.pdf, Folie 14

Alle Algorithmen werden auf einem Rechner mit einem Prozessor(kern) verglichen; alle bereiten Prozesse stehen in einer Warteschlange. Prozesse (Ankunftszeit a, Bedienzeit t, Priorität P): P1 (0, 3, 2), P2 (2, 6, 4), P3 (4, 4, 1), P4 (6, 5, 5), P5 (8, 2, 3).

## Karte: Laufzeit und Wartezeit
tag: formel
quelle: 07_rabs-scheduling.pdf, Folien 17-18

Die Folien vergleichen die Verfahren über die mittlere Laufzeit und die mittlere Wartezeit der fünf Prozesse. Die Laufzeit reicht von der Ankunft bis zum Ende (FCFS: P2 kommt bei 2 an und ist bei 9 fertig, Laufzeit 7). Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit (P2: 7 − 6 = 1).

## Karte: FCFS
quelle: 07_rabs-scheduling.pdf, Folien 15-18

First Come First Serve (FIFO) bearbeitet die Prozesse in der Reihenfolge ihrer Ankunft in der Bereitliste; jeder behält den Prozessor bis zum Ende oder zur freiwilligen Aufgabe. FCFS ist die simpelste Lösung und nicht-unterbrechend. Es ist fair, weil alle Prozesse berücksichtigt werden, verteilt die CPU aber nicht gerecht zwischen E/A-lastigen und berechnungslastigen Aufträgen. Beispiel: Ø Laufzeit 8,6 ms, Ø Wartezeit 4,6 ms.

## Karte: SJF
quelle: 07_rabs-scheduling.pdf, Folien 19-21

Shortest Job First bearbeitet den Prozess mit der kürzesten Bedienzeit als nächsten bis zum Ende oder zur freiwilligen Aufgabe. SJF ist optimal bei gleichzeitig verfügbaren Aufträgen, aber nicht, wenn sie zu unterschiedlichen Zeiten eintreffen. Nachteile: Die Bedienzeit muss bekannt sein und kann nur als Schätzung vom Benutzer stammen; längere Prozesse können verhungern. Beispiel: Ø Laufzeit 7,6 ms, Ø Wartezeit 3,6 ms.

## Karte: Round Robin
quelle: 07_rabs-scheduling.pdf, Folien 22-26

Round Robin bearbeitet die Prozesse in Ankunftsreihenfolge. Nach Ablauf einer festen Frist τ (Zeitscheibe, Quantum) wird verdrängt; die CPU wird auch weitergegeben, wenn ein Prozess terminiert oder blockiert. Neu ankommende und verdrängte Prozesse gehen ans Ende der Warteschlange, neue haben Vorrang. Alle Prozesse sind gleichberechtigt, die CPU-Zeit wird fair aufgeteilt; RR eignet sich für interaktive Systeme. Beispiel mit τ = 1: Ø Laufzeit 10,8 ms, Ø Wartezeit 6,8 ms.

## Karte: Zeitquantum bei Round Robin
quelle: 07_rabs-scheduling.pdf, Folien 23, 27-28

Die Größe des Quantums ist wichtig für die Systemgeschwindigkeit. Ist es kurz, finden viele Prozesswechsel statt und der Overhead ist hoch. Ist es lang, geht Gleichzeitigkeit verloren und das System hängt oder ruckelt. Üblich ist der ein- oder zweistellige Millisekundenbereich. Je länger ein Prozess rechnet, desto mehr Runden braucht er; RR bevorzugt Prozesse mit kurzer Abarbeitungszeit. Beispiel mit τ = 4: Ø Laufzeit 10 ms, Ø Wartezeit 6 ms.

## Karte: PRIO-NP
quelle: 07_rabs-scheduling.pdf, Folien 29-31

Beim nicht-präemptiven Priority-Scheduling werden Neuankömmlinge nach ihrer Priorität in die Bereitliste eingeordnet. Der laufende Prozess wird nicht verdrängt. Beispiel: Ø Laufzeit 8,4 ms, Ø Wartezeit 4,4 ms.

## Karte: PRIO-P
quelle: 07_rabs-scheduling.pdf, Folien 32-34

Präemptives Priority-Scheduling arbeitet wie PRIO-NP, prüft aber bei jeder Ankunft auf Verdrängung: Der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling. Beispiel: Ø Laufzeit 9 ms, Ø Wartezeit 7 ms.

## Karte: Multilevel-Priority-Queues
quelle: 07_rabs-scheduling.pdf, Folien 35-36

MPQ gruppiert Prozesse in Prioritätsklassen mit je einer eigenen Bereitliste; die Übersicht zeigt von hoher zu niedriger Priorität Realtime, System, Interactive und Batch. Pro Liste kann ein eigener Algorithmus laufen, am verbreitetsten ist Round Robin, auch mit unterschiedlichen Quanten (längere auf niedrigen Ebenen). Niedrige Queues laufen erst, wenn die höheren leer sind. Problem: Die optimalen Prioritäten müssen vorher bestimmt werden. MPQ ist bei vielen Betriebssystemen die Top-Level-Strategie.

## Karte: Echtzeit
tag: def
quelle: 07_rabs-scheduling.pdf, Folie 38

Echtzeitsysteme müssen auf bestimmte, meist physische Ereignisse in festgelegter Zeit reagieren, z. B. Robotersteuerung, medizinische Überwachung oder Bremssysteme. Harte Echtzeit: Fristen müssen eingehalten werden; dauert die Verarbeitung zu lange, wird sie unterbrochen und das Ergebnis verworfen. Weiche Echtzeit: Fristen sollten eingehalten werden; bei einer Verletzung ist das Ergebnis nicht unbrauchbar.

## Karte: Einplanbarkeit periodischer Prozesse
tag: formel
quelle: 07_rabs-scheduling.pdf, Folien 39-40

Echtzeitprozesse werden mit statischer Frequenz aufgerufen und haben Deadlines. Vorab wird geprüft, ob sie überhaupt eingeplant werden können: Die Summe aller CPU(P<sub>i</sub>) / t<sub>Pi</sub> muss ≤ 1 sein (CPU-Verbrauchszeit durch Periode, m Prozesse). Video-Streaming-Beispiel: 10 ms / 30 ms + 15 ms / 40 ms + 5 ms / 50 ms = 0,808, also Scheduling möglich.

## Karte: Raten-monotones Scheduling (RMS)
quelle: 07_rabs-scheduling.pdf, Folien 42-43

RMS ist ein prioritätsbasiertes Verfahren für unterbrechbare, periodische Jobs. Bedingungen: Jeder periodische Prozess wird in seiner Periode fertig, kein Prozess hängt von einem anderen ab, jeder braucht in jedem Quantum den gleichen CPU-Anteil, kein nicht-periodischer Prozess hat eine Deadline, und Unterbrechungen erfolgen sofort und ohne Aufwand (in der Realität nicht umsetzbar, hilft beim Modellieren). Die Priorität entspricht der Aufrufperiode (z. B. 33 bei 30 ms Periode). Einplanbar ist die Job-Menge, wenn die Auslastung u ≤ m · (2<sup>1/m</sup> − 1) ist.

## Karte: Earliest Deadline First (EDF)
quelle: 07_rabs-scheduling.pdf, Folie 44

Ein Prozess kündigt seine Präsenz und seine Deadline an, wenn er CPU-Zeit benötigt. Der Scheduler sortiert nach der kürzesten Deadline und arbeitet aufsteigend ab; ein laufender Prozess wird unterbrochen, wenn ein neuer mit kürzerer Deadline auftaucht. EDF hat keine Begrenzung der CPU-Verbrauchszeit und kann die CPU zu 100 % auslasten; es ist z. B. unter Linux verfügbar.

## Karte: RMS und EDF im Vergleich
tag: beispiel
quelle: 07_rabs-scheduling.pdf, Folie 45

Für das Video-Streaming-Beispiel mit m = 3 liegt die RMS-Schranke bei 0,78. Die Auslastung 0,808 liegt darüber, also ist kein Scheduling mit RMS möglich. Im Diagramm der Folie bricht RMS mit einem Fehler ab, während EDF alle Aufträge einplant.

## Karte: Strategie und Mechanismus
quelle: 07_rabs-scheduling.pdf, Folie 47

Strategie ist die prinzipielle Entscheidung, welcher Prozess wann die CPU nutzen darf; Mechanismus ist die Art, wie sie durchgesetzt wird. Je nach Ziel gibt es unterschiedliche Strategien, und Ziele können sich widersprechen. Standard-Betriebssysteme bevorzugen häufig Interaktivität; reale Strategien sind meist Mischformen.

## Frage: Was bedeutet Scheduling im Betriebssystemkontext?
id: 1uxoiqz
quelle: 07_rabs-scheduling.pdf, Folie 5

Die zeitliche Zuordnung von CPU-Ressourcen zu Prozessen beziehungsweise Aktivitäten.

## Frage: Was ist der Unterschied zwischen Scheduler und Dispatcher?
id: aqy5ho
quelle: 07_rabs-scheduling.pdf, Folien 6 und 8

Der Scheduler wählt den Prozess aus; der Dispatcher führt den Prozesskontextwechsel durch.

## Frage: Was muss der Dispatcher bei einem Prozesswechsel tun?
id: 1b4rjcz
quelle: 07_rabs-scheduling.pdf, Folie 8

Den Kontext des laufenden Prozesses in dessen Prozesskontrollblock retten, den Prozessor einem anderen Prozess zuteilen und dessen Kontext aus seinem Prozesskontrollblock wiederherstellen.

## Frage: Was unterscheidet präemptives von nicht-präemptivem Scheduling?
id: c0t354
quelle: 07_rabs-scheduling.pdf, Folien 11-12

Beim präemptiven Scheduling kann einem Prozess die CPU vor Fertigstellung entzogen werden; beim nicht-präemptiven behält er sie bis Fertigstellung oder freiwilliger Abgabe.

## Frage: Wie werden im Folienbeispiel Laufzeit und Wartezeit eines Prozesses bestimmt?
id: 1jx2ey3
quelle: 07_rabs-scheduling.pdf, Folien 17-18

Laufzeit: von der Ankunft bis zum Ende. Wartezeit: Laufzeit ohne die eigene Bedienzeit. Verglichen werden die Mittelwerte über alle fünf Prozesse.

## Frage: Wie bewerten die Folien FCFS?
id: 1v02j5w
quelle: 07_rabs-scheduling.pdf, Folie 15

Simpelste Lösung und nicht-unterbrechend. Fair, weil alle Prozesse berücksichtigt werden, aber keine gerechte CPU-Zuweisung zwischen E/A-lastigen und berechnungslastigen Aufträgen.

## Frage: Was bedeutet SJF?
id: 2zh0d2
quelle: 07_rabs-scheduling.pdf, Folie 19

SJF bedeutet Shortest Job First: Die kürzeste Bedienzeit kommt zuerst.

## Frage: Welche Nachteile hat SJF?
id: qo9cnh
quelle: 07_rabs-scheduling.pdf, Folie 19

Die Bedienzeit muss bekannt sein und kann nur als Schätzung vom Benutzer stammen; längere Prozesse können verhungern, wenn stets kürzere vorhanden sind. Optimal ist SJF nur bei gleichzeitig verfügbaren Aufträgen.

## Frage: Was kennzeichnet Round Robin?
id: 3cas3d
quelle: 07_rabs-scheduling.pdf, Folie 22

Round Robin ist präemptives Scheduling mit festem Zeitquantum.

## Frage: Wohin kommen bei Round Robin neue und verdrängte Prozesse?
id: nl42ay
quelle: 07_rabs-scheduling.pdf, Folie 22

Ans Ende der Warteschlange; kommen beide gleichzeitig, haben neue Prozesse Vorrang.

## Frage: Warum ist das Zeitquantum bei Round Robin wichtig?
id: 1huvod4
quelle: 07_rabs-scheduling.pdf, Folie 23

Zu kurze Quanten erzeugen viele Prozesswechsel und Overhead; zu lange Quanten lassen Gleichzeitigkeit verloren gehen.

## Frage: Wie arbeitet nicht-präemptives Priority-Scheduling (PRIO-NP)?
id: 1jvtxya
quelle: 07_rabs-scheduling.pdf, Folie 29

Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der laufende Prozess wird nicht verdrängt.

## Frage: Wann wird bei PRIO-P der rechnende Prozess verdrängt?
id: l5o8yi
quelle: 07_rabs-scheduling.pdf, Folie 32

Wenn er geringere Priorität hat als ein Neuankömmling.

## Frage: Welche Mittelwerte liefern die Verfahren im Folienbeispiel?
id: 11q7ili
quelle: 07_rabs-scheduling.pdf, Folien 17-34

Ø Laufzeit / Ø Wartezeit: FCFS 8,6 / 4,6 ms, SJF 7,6 / 3,6 ms, RR mit τ = 1 10,8 / 6,8 ms, RR mit τ = 4 10 / 6 ms, PRIO-NP 8,4 / 4,4 ms, PRIO-P 9 / 7 ms.

## Frage: Wann laufen bei Multilevel-Priority-Queues Prozesse einer niedrigen Queue?
id: 1teojgw
quelle: 07_rabs-scheduling.pdf, Folie 35

Erst wenn in den Queues mit höherer Priorität keine Prozesse sind.

## Frage: Welches Problem haben Multilevel-Priority-Queues?
id: 5gg6mv
quelle: 07_rabs-scheduling.pdf, Folie 35

Die optimalen Prioritäten müssen vorher bestimmt werden.

## Frage: Was unterscheidet harte und weiche Echtzeit?
id: 1b1a9m6
quelle: 07_rabs-scheduling.pdf, Folie 38

Harte Echtzeit: Fristen müssen eingehalten werden; dauert die Verarbeitung zu lange, wird sie unterbrochen und das Ergebnis verworfen. Weiche Echtzeit: Fristen sollten eingehalten werden; eine Verletzung macht das Ergebnis nicht unbrauchbar.

## Frage: Wie prüft man, ob periodische Echtzeitprozesse eingeplant werden können?
id: 1tma5p6
quelle: 07_rabs-scheduling.pdf, Folie 39

Die Summe aller CPU(P<sub>i</sub>) / t<sub>Pi</sub>, also CPU-Verbrauchszeit durch Periode, muss ≤ 1 sein.

## Frage: Ist das Video-Streaming-Beispiel der Folien einplanbar?
id: 1w1k6ba
quelle: 07_rabs-scheduling.pdf, Folien 40, 45

Allgemein ja: 10/30 + 15/40 + 5/50 = 0,808 ≤ 1. Mit RMS nein: Für m = 3 liegt die Schranke bei 0,78, und 0,808 > 0,78.

## Frage: Welche Auslastungsschranke gilt bei RMS?
id: 51wsn5
quelle: 07_rabs-scheduling.pdf, Folie 43

Die Job-Menge ist einplanbar, wenn die Auslastung u ≤ m · (2<sup>1/m</sup> − 1) ist; die Schranke hängt nur von der Anzahl m der Jobs ab.

## Frage: Welche Priorität bekommt ein Prozess bei RMS?
id: 3quoqo
quelle: 07_rabs-scheduling.pdf, Folie 43

Seine Priorität entspricht seiner Aufrufperiode, z. B. Priorität 33 für einen Prozess mit 30 ms Periode.

## Frage: Was bedeutet EDF?
id: 1b10i9a
quelle: 07_rabs-scheduling.pdf, Folie 44

EDF bedeutet Earliest Deadline First: Prozesse kündigen Präsenz und Deadline an; der Scheduler sortiert nach kürzester Deadline und unterbricht laufende Prozesse, wenn ein neuer Prozess mit kürzerer Deadline auftaucht.

## Frage: Wie hoch kann EDF die CPU auslasten?
id: 130zi6g
quelle: 07_rabs-scheduling.pdf, Folie 44

Bis zu 100 %; EDF hat keine Begrenzung der CPU-Verbrauchszeit.

## Frage: Was unterscheidet beim Scheduling Strategie und Mechanismus?
id: ew81v
quelle: 07_rabs-scheduling.pdf, Folie 47

Strategie ist die prinzipielle Entscheidung, welcher Prozess wann die CPU nutzen darf; Mechanismus ist die Art und Weise, wie diese Strategie durchgesetzt wird.

## Aufgabe: FCFS
id: 1lakn2c
generator: scheduling-fcfs
notiz: Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.
quelle: 07_rabs-scheduling.pdf, Folien 14-18

## Aufgabe: SJF
id: 1x7g5aw
generator: scheduling-sjf
notiz: Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.
quelle: 07_rabs-scheduling.pdf, Folien 14, 19-21

## Aufgabe: Round Robin
id: 103lhki
generator: scheduling-rr
notiz: Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.
quelle: 07_rabs-scheduling.pdf, Folien 14, 22-28

## Aufgabe: PRIO-NP
id: 1bd77qk
generator: scheduling-prio-np
notiz: Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.
quelle: 07_rabs-scheduling.pdf, Folien 14, 29-31

## Aufgabe: PRIO-P
id: 1xqs8w0
generator: scheduling-prio-p
notiz: Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.
quelle: 07_rabs-scheduling.pdf, Folien 14, 32-34

## Ablauf: FCFS am Folienbeispiel
nach: FCFS
quelle: 07_rabs-scheduling.pdf, Folien 14-18

```json
{
  "id": "scheduling-fcfs",
  "intro": "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms): P1: a = 0, t = 3; P2: a = 2, t = 6; P3: a = 4, t = 4; P4: a = 6, t = 5; P5: a = 8, t = 2. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links.",
  "legend": {"active":"Bekommt die CPU"},
  "visual": {
              "kind": "array",
              "values": [],
              "arrays": [
                          {
                            "id": "cpu",
                            "label": "CPU",
                            "values": ["","","","","","","","","","","","","","","","","","","",""]
                          },
                          {"id":"queue","label":"Bereit","values":["","","",""]}
                        ]
            },
  "steps": [
             {
               "title": "t = 0: P1 rechnet bis t = 3",
               "text": "Nur P1 ist bereit. Währenddessen kommen an: P2 (t = 2).",
               "explanation": {
                                "action": "P1 von t = 0 bis t = 3 ausführen.",
                                "rule": "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                                "decision": "P1 ist bei t = 3 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":0,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":1,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":2,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":0,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":1,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":2,"value":"1"},
                           {"kind":"array-index","array":"queue","index":0,"value":"1"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 3: P2 rechnet bis t = 9",
               "text": "Nur P2 ist bereit. Währenddessen kommen an: P3 (t = 4), P4 (t = 6), P5 (t = 8).",
               "explanation": {
                                "action": "P2 von t = 3 bis t = 9 ausführen.",
                                "rule": "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                                "decision": "P2 ist bei t = 9 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":3,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":4,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":5,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":6,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":7,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":8,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":3,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":4,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":5,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":6,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":7,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":8,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 9: P3 rechnet bis t = 13",
               "text": "Bereitliste: P3, P4, P5. P3 steht vorne in der Bereitliste (angekommen bei t = 4).",
               "explanation": {
                                "action": "P3 von t = 9 bis t = 13 ausführen.",
                                "rule": "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                                "decision": "P3 ist bei t = 13 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":9,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":10,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":11,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":12,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":9,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":10,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":11,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":12,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":"5"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 13: P4 rechnet bis t = 18",
               "text": "Bereitliste: P4, P5. P4 steht vorne in der Bereitliste (angekommen bei t = 6).",
               "explanation": {
                                "action": "P4 von t = 13 bis t = 18 ausführen.",
                                "rule": "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                                "decision": "P4 ist bei t = 18 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":13,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":14,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":15,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":16,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":17,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":13,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":14,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":15,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":16,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":17,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":"5"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 18: P5 rechnet bis t = 20",
               "text": "Nur P5 ist bereit.",
               "explanation": {
                                "action": "P5 von t = 18 bis t = 20 ausführen.",
                                "rule": "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                                "decision": "P5 ist bei t = 20 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":18,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":19,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":18,"value":"5"},
                           {"kind":"array-index","array":"cpu","index":19,"value":"5"},
                           {"kind":"array-index","array":"queue","index":0,"value":"5"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "Ergebnis: Lauf- und Wartezeiten",
               "text": "Laufzeit von der Ankunft bis zum Ende: P1 3, P2 7, P3 9, P4 12, P5 12. Wartezeit: P1 0, P2 1, P3 5, P4 7, P5 10. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
               "source": "07_rabs-scheduling.pdf, Folie 18",
               "formula": "Ø Laufzeit = (3 + 7 + 9 + 12 + 12) / 5 = 8,6 ms",
               "product": "Ø Wartezeit = (0 + 1 + 5 + 7 + 10) / 5 = 4,6 ms",
               "values": [
                           {"kind":"array-index","array":"queue","index":0,"value":""},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             }
           ]
}
```

## Ablauf: SJF am Folienbeispiel
nach: SJF
quelle: 07_rabs-scheduling.pdf, Folien 14, 19-21

```json
{
  "id": "scheduling-sjf",
  "intro": "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms): P1: a = 0, t = 3; P2: a = 2, t = 6; P3: a = 4, t = 4; P4: a = 6, t = 5; P5: a = 8, t = 2. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links.",
  "legend": {"active":"Bekommt die CPU"},
  "visual": {
              "kind": "array",
              "values": [],
              "arrays": [
                          {
                            "id": "cpu",
                            "label": "CPU",
                            "values": ["","","","","","","","","","","","","","","","","","","",""]
                          },
                          {"id":"queue","label":"Bereit","values":["","","",""]}
                        ]
            },
  "steps": [
             {
               "title": "t = 0: P1 rechnet bis t = 3",
               "text": "Nur P1 ist bereit. Währenddessen kommen an: P2 (t = 2).",
               "explanation": {
                                "action": "P1 von t = 0 bis t = 3 ausführen.",
                                "rule": "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                                "decision": "P1 ist bei t = 3 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":0,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":1,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":2,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":0,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":1,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":2,"value":"1"},
                           {"kind":"array-index","array":"queue","index":0,"value":"1"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 3: P2 rechnet bis t = 9",
               "text": "Nur P2 ist bereit. Währenddessen kommen an: P3 (t = 4), P4 (t = 6), P5 (t = 8).",
               "explanation": {
                                "action": "P2 von t = 3 bis t = 9 ausführen.",
                                "rule": "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                                "decision": "P2 ist bei t = 9 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":3,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":4,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":5,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":6,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":7,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":8,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":3,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":4,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":5,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":6,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":7,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":8,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 9: P5 rechnet bis t = 11",
               "text": "Bereitliste: P3, P4, P5. P5 hat mit t = 2 die kürzeste Bedienzeit (P3: 4, P4: 5).",
               "explanation": {
                                "action": "P5 von t = 9 bis t = 11 ausführen.",
                                "rule": "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                                "decision": "P5 ist bei t = 11 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":9,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":10,"role":"active"},
                               {"kind":"array-index","array":"queue","index":2,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":9,"value":"5"},
                           {"kind":"array-index","array":"cpu","index":10,"value":"5"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":"5"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 11: P3 rechnet bis t = 15",
               "text": "Bereitliste: P3, P4. P3 hat mit t = 4 die kürzeste Bedienzeit (P4: 5).",
               "explanation": {
                                "action": "P3 von t = 11 bis t = 15 ausführen.",
                                "rule": "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                                "decision": "P3 ist bei t = 15 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":11,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":12,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":13,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":14,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":11,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":12,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":13,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":14,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 15: P4 rechnet bis t = 20",
               "text": "Nur P4 ist bereit.",
               "explanation": {
                                "action": "P4 von t = 15 bis t = 20 ausführen.",
                                "rule": "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                                "decision": "P4 ist bei t = 20 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":15,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":16,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":17,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":18,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":19,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":15,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":16,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":17,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":18,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":19,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "Ergebnis: Lauf- und Wartezeiten",
               "text": "Laufzeit von der Ankunft bis zum Ende: P1 3, P2 7, P3 11, P4 14, P5 3. Wartezeit: P1 0, P2 1, P3 7, P4 9, P5 1. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
               "source": "07_rabs-scheduling.pdf, Folie 21",
               "formula": "Ø Laufzeit = (3 + 7 + 11 + 14 + 3) / 5 = 7,6 ms",
               "product": "Ø Wartezeit = (0 + 1 + 7 + 9 + 1) / 5 = 3,6 ms",
               "values": [
                           {"kind":"array-index","array":"queue","index":0,"value":""},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             }
           ]
}
```

## Ablauf: Round Robin mit τ = 1
nach: Round Robin
quelle: 07_rabs-scheduling.pdf, Folien 14, 22-26

```json
{
  "id": "scheduling-rr-1",
  "intro": "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms): P1: a = 0, t = 3; P2: a = 2, t = 6; P3: a = 4, t = 4; P4: a = 6, t = 5; P5: a = 8, t = 2. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links.",
  "legend": {"active":"Bekommt die CPU"},
  "visual": {
              "kind": "array",
              "values": [],
              "arrays": [
                          {
                            "id": "cpu",
                            "label": "CPU",
                            "values": ["","","","","","","","","","","","","","","","","","","",""]
                          },
                          {"id":"queue","label":"Bereit","values":["","","",""]}
                        ]
            },
  "steps": [
             {
               "title": "t = 0: P1 rechnet bis t = 2",
               "text": "Nur P1 ist bereit. Nach jedem Quantum ist die Bereitliste leer, deshalb rechnet P1 gleich weiter.",
               "explanation": {
                                "action": "P1 von t = 0 bis t = 2 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 2 läuft das Quantum ab; P1 hat noch 1 ms und geht ans Ende der Bereitliste, hinter den gerade angekommenen P2."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":0,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":1,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":0,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":1,"value":"1"},
                           {"kind":"array-index","array":"queue","index":0,"value":"1"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 2: P2 rechnet bis t = 3",
               "text": "Bereitliste: P2, P1. P2 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P2 von t = 2 bis t = 3 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 3 läuft das Quantum ab; P2 hat noch 5 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":2,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":2,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"1"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 3: P1 rechnet bis t = 4",
               "text": "Bereitliste: P1, P2. P1 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P1 von t = 3 bis t = 4 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P1 ist bei t = 4 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":3,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":3,"value":"1"},
                           {"kind":"array-index","array":"queue","index":0,"value":"1"},
                           {"kind":"array-index","array":"queue","index":1,"value":"2"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 4: P2 rechnet bis t = 5",
               "text": "Bereitliste: P2, P3. P2 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P2 von t = 4 bis t = 5 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 5 läuft das Quantum ab; P2 hat noch 4 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":4,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":4,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"3"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 5: P3 rechnet bis t = 6",
               "text": "Bereitliste: P3, P2. P3 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P3 von t = 5 bis t = 6 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 6 läuft das Quantum ab; P3 hat noch 3 ms und geht ans Ende der Bereitliste, hinter den gerade angekommenen P4."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":5,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":5,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":"2"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 6: P2 rechnet bis t = 7",
               "text": "Bereitliste: P2, P4, P3. P2 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P2 von t = 6 bis t = 7 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 7 läuft das Quantum ab; P2 hat noch 3 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":6,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":6,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":"3"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 7: P4 rechnet bis t = 8",
               "text": "Bereitliste: P4, P3, P2. P4 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P4 von t = 7 bis t = 8 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 8 läuft das Quantum ab; P4 hat noch 4 ms und geht ans Ende der Bereitliste, hinter den gerade angekommenen P5."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":7,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":7,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":"3"},
                           {"kind":"array-index","array":"queue","index":2,"value":"2"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 8: P3 rechnet bis t = 9",
               "text": "Bereitliste: P3, P2, P5, P4. P3 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P3 von t = 8 bis t = 9 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 9 läuft das Quantum ab; P3 hat noch 2 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":8,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":8,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":"2"},
                           {"kind":"array-index","array":"queue","index":2,"value":"5"},
                           {"kind":"array-index","array":"queue","index":3,"value":"4"}
                         ]
             },
             {
               "title": "t = 9: P2 rechnet bis t = 10",
               "text": "Bereitliste: P2, P5, P4, P3. P2 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P2 von t = 9 bis t = 10 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 10 läuft das Quantum ab; P2 hat noch 2 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":9,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":9,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"5"},
                           {"kind":"array-index","array":"queue","index":2,"value":"4"},
                           {"kind":"array-index","array":"queue","index":3,"value":"3"}
                         ]
             },
             {
               "title": "t = 10: P5 rechnet bis t = 11",
               "text": "Bereitliste: P5, P4, P3, P2. P5 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P5 von t = 10 bis t = 11 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 11 läuft das Quantum ab; P5 hat noch 1 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":10,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":10,"value":"5"},
                           {"kind":"array-index","array":"queue","index":0,"value":"5"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":"3"},
                           {"kind":"array-index","array":"queue","index":3,"value":"2"}
                         ]
             },
             {
               "title": "t = 11: P4 rechnet bis t = 12",
               "text": "Bereitliste: P4, P3, P2, P5. P4 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P4 von t = 11 bis t = 12 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 12 läuft das Quantum ab; P4 hat noch 3 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":11,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":11,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":"3"},
                           {"kind":"array-index","array":"queue","index":2,"value":"2"},
                           {"kind":"array-index","array":"queue","index":3,"value":"5"}
                         ]
             },
             {
               "title": "t = 12: P3 rechnet bis t = 13",
               "text": "Bereitliste: P3, P2, P5, P4. P3 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P3 von t = 12 bis t = 13 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 13 läuft das Quantum ab; P3 hat noch 1 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":12,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":12,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":"2"},
                           {"kind":"array-index","array":"queue","index":2,"value":"5"},
                           {"kind":"array-index","array":"queue","index":3,"value":"4"}
                         ]
             },
             {
               "title": "t = 13: P2 rechnet bis t = 14",
               "text": "Bereitliste: P2, P5, P4, P3. P2 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P2 von t = 13 bis t = 14 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 14 läuft das Quantum ab; P2 hat noch 1 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":13,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":13,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"5"},
                           {"kind":"array-index","array":"queue","index":2,"value":"4"},
                           {"kind":"array-index","array":"queue","index":3,"value":"3"}
                         ]
             },
             {
               "title": "t = 14: P5 rechnet bis t = 15",
               "text": "Bereitliste: P5, P4, P3, P2. P5 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P5 von t = 14 bis t = 15 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P5 ist bei t = 15 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":14,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":14,"value":"5"},
                           {"kind":"array-index","array":"queue","index":0,"value":"5"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":"3"},
                           {"kind":"array-index","array":"queue","index":3,"value":"2"}
                         ]
             },
             {
               "title": "t = 15: P4 rechnet bis t = 16",
               "text": "Bereitliste: P4, P3, P2. P4 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P4 von t = 15 bis t = 16 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 16 läuft das Quantum ab; P4 hat noch 2 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":15,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":15,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":"3"},
                           {"kind":"array-index","array":"queue","index":2,"value":"2"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 16: P3 rechnet bis t = 17",
               "text": "Bereitliste: P3, P2, P4. P3 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P3 von t = 16 bis t = 17 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P3 ist bei t = 17 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":16,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":16,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":"2"},
                           {"kind":"array-index","array":"queue","index":2,"value":"4"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 17: P2 rechnet bis t = 18",
               "text": "Bereitliste: P2, P4. P2 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P2 von t = 17 bis t = 18 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P2 ist bei t = 18 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":17,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":17,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 18: P4 rechnet bis t = 20",
               "text": "Nur P4 ist bereit. Nach jedem Quantum ist die Bereitliste leer, deshalb rechnet P4 gleich weiter.",
               "explanation": {
                                "action": "P4 von t = 18 bis t = 20 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P4 ist bei t = 20 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":18,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":19,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":18,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":19,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "Ergebnis: Lauf- und Wartezeiten",
               "text": "Laufzeit von der Ankunft bis zum Ende: P1 4, P2 16, P3 13, P4 14, P5 7. Wartezeit: P1 1, P2 10, P3 9, P4 9, P5 5. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
               "source": "07_rabs-scheduling.pdf, Folie 26",
               "formula": "Ø Laufzeit = (4 + 16 + 13 + 14 + 7) / 5 = 10,8 ms",
               "product": "Ø Wartezeit = (1 + 10 + 9 + 9 + 5) / 5 = 6,8 ms",
               "values": [
                           {"kind":"array-index","array":"queue","index":0,"value":""},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             }
           ]
}
```

## Ablauf: Round Robin mit τ = 4
nach: Zeitquantum bei Round Robin
quelle: 07_rabs-scheduling.pdf, Folien 14, 22-23, 27-28

```json
{
  "id": "scheduling-rr-4",
  "intro": "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms): P1: a = 0, t = 3; P2: a = 2, t = 6; P3: a = 4, t = 4; P4: a = 6, t = 5; P5: a = 8, t = 2. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links.",
  "legend": {"active":"Bekommt die CPU"},
  "visual": {
              "kind": "array",
              "values": [],
              "arrays": [
                          {
                            "id": "cpu",
                            "label": "CPU",
                            "values": ["","","","","","","","","","","","","","","","","","","",""]
                          },
                          {"id":"queue","label":"Bereit","values":["","","",""]}
                        ]
            },
  "steps": [
             {
               "title": "t = 0: P1 rechnet bis t = 3",
               "text": "Nur P1 ist bereit. Währenddessen kommen an: P2 (t = 2).",
               "explanation": {
                                "action": "P1 von t = 0 bis t = 3 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P1 ist bei t = 3 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":0,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":1,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":2,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":0,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":1,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":2,"value":"1"},
                           {"kind":"array-index","array":"queue","index":0,"value":"1"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 3: P2 rechnet bis t = 7",
               "text": "Nur P2 ist bereit. Währenddessen kommen an: P3 (t = 4), P4 (t = 6).",
               "explanation": {
                                "action": "P2 von t = 3 bis t = 7 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 7 läuft das Quantum ab; P2 hat noch 2 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":3,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":4,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":5,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":6,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":3,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":4,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":5,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":6,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 7: P3 rechnet bis t = 11",
               "text": "Bereitliste: P3, P4, P2. P3 steht vorne in der Bereitliste. Währenddessen kommen an: P5 (t = 8).",
               "explanation": {
                                "action": "P3 von t = 7 bis t = 11 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P3 ist bei t = 11 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":7,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":8,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":9,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":10,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":7,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":8,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":9,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":10,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":"2"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 11: P4 rechnet bis t = 15",
               "text": "Bereitliste: P4, P2, P5. P4 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P4 von t = 11 bis t = 15 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "Bei t = 15 läuft das Quantum ab; P4 hat noch 1 ms und geht ans Ende der Bereitliste."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":11,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":12,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":13,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":14,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":11,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":12,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":13,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":14,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":"2"},
                           {"kind":"array-index","array":"queue","index":2,"value":"5"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 15: P2 rechnet bis t = 17",
               "text": "Bereitliste: P2, P5, P4. P2 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P2 von t = 15 bis t = 17 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P2 ist bei t = 17 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":15,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":16,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":15,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":16,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"5"},
                           {"kind":"array-index","array":"queue","index":2,"value":"4"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 17: P5 rechnet bis t = 19",
               "text": "Bereitliste: P5, P4. P5 steht vorne in der Bereitliste.",
               "explanation": {
                                "action": "P5 von t = 17 bis t = 19 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P5 ist bei t = 19 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":17,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":18,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":17,"value":"5"},
                           {"kind":"array-index","array":"cpu","index":18,"value":"5"},
                           {"kind":"array-index","array":"queue","index":0,"value":"5"},
                           {"kind":"array-index","array":"queue","index":1,"value":"4"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 19: P4 rechnet bis t = 20",
               "text": "Nur P4 ist bereit.",
               "explanation": {
                                "action": "P4 von t = 19 bis t = 20 ausführen.",
                                "rule": "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                                "decision": "P4 ist bei t = 20 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":19,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":19,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "Ergebnis: Lauf- und Wartezeiten",
               "text": "Laufzeit von der Ankunft bis zum Ende: P1 3, P2 15, P3 7, P4 14, P5 11. Wartezeit: P1 0, P2 9, P3 3, P4 9, P5 9. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
               "source": "07_rabs-scheduling.pdf, Folie 28",
               "formula": "Ø Laufzeit = (3 + 15 + 7 + 14 + 11) / 5 = 10 ms",
               "product": "Ø Wartezeit = (0 + 9 + 3 + 9 + 9) / 5 = 6 ms",
               "values": [
                           {"kind":"array-index","array":"queue","index":0,"value":""},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             }
           ]
}
```

## Ablauf: PRIO-NP am Folienbeispiel
nach: PRIO-NP
quelle: 07_rabs-scheduling.pdf, Folien 14, 29-31

```json
{
  "id": "scheduling-prio-np",
  "intro": "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms, Priorität P): P1: a = 0, t = 3, P = 2; P2: a = 2, t = 6, P = 4; P3: a = 4, t = 4, P = 1; P4: a = 6, t = 5, P = 5; P5: a = 8, t = 2, P = 3. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links. Im Folienbeispiel läuft bei Konkurrenz der Prozess mit der größeren Zahl P zuerst.",
  "legend": {"active":"Bekommt die CPU"},
  "visual": {
              "kind": "array",
              "values": [],
              "arrays": [
                          {
                            "id": "cpu",
                            "label": "CPU",
                            "values": ["","","","","","","","","","","","","","","","","","","",""]
                          },
                          {"id":"queue","label":"Bereit","values":["","","",""]}
                        ]
            },
  "steps": [
             {
               "title": "t = 0: P1 rechnet bis t = 3",
               "text": "Nur P1 ist bereit. Währenddessen kommen an: P2 (t = 2).",
               "explanation": {
                                "action": "P1 von t = 0 bis t = 3 ausführen.",
                                "rule": "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                                "decision": "P1 ist bei t = 3 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":0,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":1,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":2,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":0,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":1,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":2,"value":"1"},
                           {"kind":"array-index","array":"queue","index":0,"value":"1"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 3: P2 rechnet bis t = 9",
               "text": "Nur P2 ist bereit. Währenddessen kommen an: P3 (t = 4), P4 (t = 6), P5 (t = 8).",
               "explanation": {
                                "action": "P2 von t = 3 bis t = 9 ausführen.",
                                "rule": "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                                "decision": "P2 ist bei t = 9 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":3,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":4,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":5,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":6,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":7,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":8,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":3,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":4,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":5,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":6,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":7,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":8,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 9: P4 rechnet bis t = 14",
               "text": "Bereitliste: P4, P5, P3. P4 hat mit P = 5 die höchste Priorität (P5: 3, P3: 1).",
               "explanation": {
                                "action": "P4 von t = 9 bis t = 14 ausführen.",
                                "rule": "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                                "decision": "P4 ist bei t = 14 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":9,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":10,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":11,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":12,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":13,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":9,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":10,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":11,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":12,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":13,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":"5"},
                           {"kind":"array-index","array":"queue","index":2,"value":"3"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 14: P5 rechnet bis t = 16",
               "text": "Bereitliste: P5, P3. P5 hat mit P = 3 die höchste Priorität (P3: 1).",
               "explanation": {
                                "action": "P5 von t = 14 bis t = 16 ausführen.",
                                "rule": "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                                "decision": "P5 ist bei t = 16 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":14,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":15,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":14,"value":"5"},
                           {"kind":"array-index","array":"cpu","index":15,"value":"5"},
                           {"kind":"array-index","array":"queue","index":0,"value":"5"},
                           {"kind":"array-index","array":"queue","index":1,"value":"3"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 16: P3 rechnet bis t = 20",
               "text": "Nur P3 ist bereit.",
               "explanation": {
                                "action": "P3 von t = 16 bis t = 20 ausführen.",
                                "rule": "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                                "decision": "P3 ist bei t = 20 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":16,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":17,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":18,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":19,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":16,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":17,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":18,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":19,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "Ergebnis: Lauf- und Wartezeiten",
               "text": "Laufzeit von der Ankunft bis zum Ende: P1 3, P2 7, P3 16, P4 8, P5 8. Wartezeit: P1 0, P2 1, P3 12, P4 3, P5 6. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
               "source": "07_rabs-scheduling.pdf, Folie 31",
               "formula": "Ø Laufzeit = (3 + 7 + 16 + 8 + 8) / 5 = 8,4 ms",
               "product": "Ø Wartezeit = (0 + 1 + 12 + 3 + 6) / 5 = 4,4 ms",
               "values": [
                           {"kind":"array-index","array":"queue","index":0,"value":""},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             }
           ]
}
```

## Ablauf: PRIO-P am Folienbeispiel
nach: PRIO-P
quelle: 07_rabs-scheduling.pdf, Folien 14, 32-34

```json
{
  "id": "scheduling-prio-p",
  "intro": "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms, Priorität P): P1: a = 0, t = 3, P = 2; P2: a = 2, t = 6, P = 4; P3: a = 4, t = 4, P = 1; P4: a = 6, t = 5, P = 5; P5: a = 8, t = 2, P = 3. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links. Im Folienbeispiel läuft bei Konkurrenz der Prozess mit der größeren Zahl P zuerst.",
  "legend": {"active":"Bekommt die CPU"},
  "visual": {
              "kind": "array",
              "values": [],
              "arrays": [
                          {
                            "id": "cpu",
                            "label": "CPU",
                            "values": ["","","","","","","","","","","","","","","","","","","",""]
                          },
                          {"id":"queue","label":"Bereit","values":["","","",""]}
                        ]
            },
  "steps": [
             {
               "title": "t = 0: P1 rechnet bis t = 2",
               "text": "Nur P1 ist bereit.",
               "explanation": {
                                "action": "P1 von t = 0 bis t = 2 ausführen.",
                                "rule": "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                                "decision": "Bei t = 2 kommt P2 mit höherer Priorität an (4 > 2) und verdrängt P1; P1 hat noch 1 ms."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":0,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":1,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":0,"value":"1"},
                           {"kind":"array-index","array":"cpu","index":1,"value":"1"},
                           {"kind":"array-index","array":"queue","index":0,"value":"1"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 2: P2 rechnet bis t = 6",
               "text": "Bereitliste: P2, P1. P2 hat mit P = 4 die höchste Priorität (P1: 2). Währenddessen kommen an: P3 (t = 4).",
               "explanation": {
                                "action": "P2 von t = 2 bis t = 6 ausführen.",
                                "rule": "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                                "decision": "Bei t = 6 kommt P4 mit höherer Priorität an (5 > 4) und verdrängt P2; P2 hat noch 2 ms."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":2,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":3,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":4,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":5,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":2,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":3,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":4,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":5,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"1"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 6: P4 rechnet bis t = 11",
               "text": "Bereitliste: P4, P2, P1, P3. P4 hat mit P = 5 die höchste Priorität (P2: 4, P1: 2, P3: 1). Währenddessen kommen an: P5 (t = 8).",
               "explanation": {
                                "action": "P4 von t = 6 bis t = 11 ausführen.",
                                "rule": "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                                "decision": "P4 ist bei t = 11 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":6,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":7,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":8,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":9,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":10,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":6,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":7,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":8,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":9,"value":"4"},
                           {"kind":"array-index","array":"cpu","index":10,"value":"4"},
                           {"kind":"array-index","array":"queue","index":0,"value":"4"},
                           {"kind":"array-index","array":"queue","index":1,"value":"2"},
                           {"kind":"array-index","array":"queue","index":2,"value":"1"},
                           {"kind":"array-index","array":"queue","index":3,"value":"3"}
                         ]
             },
             {
               "title": "t = 11: P2 rechnet bis t = 13",
               "text": "Bereitliste: P2, P5, P1, P3. P2 hat mit P = 4 die höchste Priorität (P5: 3, P1: 2, P3: 1).",
               "explanation": {
                                "action": "P2 von t = 11 bis t = 13 ausführen.",
                                "rule": "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                                "decision": "P2 ist bei t = 13 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":11,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":12,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":11,"value":"2"},
                           {"kind":"array-index","array":"cpu","index":12,"value":"2"},
                           {"kind":"array-index","array":"queue","index":0,"value":"2"},
                           {"kind":"array-index","array":"queue","index":1,"value":"5"},
                           {"kind":"array-index","array":"queue","index":2,"value":"1"},
                           {"kind":"array-index","array":"queue","index":3,"value":"3"}
                         ]
             },
             {
               "title": "t = 13: P5 rechnet bis t = 15",
               "text": "Bereitliste: P5, P1, P3. P5 hat mit P = 3 die höchste Priorität (P1: 2, P3: 1).",
               "explanation": {
                                "action": "P5 von t = 13 bis t = 15 ausführen.",
                                "rule": "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                                "decision": "P5 ist bei t = 15 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":13,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":14,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":13,"value":"5"},
                           {"kind":"array-index","array":"cpu","index":14,"value":"5"},
                           {"kind":"array-index","array":"queue","index":0,"value":"5"},
                           {"kind":"array-index","array":"queue","index":1,"value":"1"},
                           {"kind":"array-index","array":"queue","index":2,"value":"3"},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 15: P1 rechnet bis t = 16",
               "text": "Bereitliste: P1, P3. P1 hat mit P = 2 die höchste Priorität (P3: 1).",
               "explanation": {
                                "action": "P1 von t = 15 bis t = 16 ausführen.",
                                "rule": "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                                "decision": "P1 ist bei t = 16 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":15,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":15,"value":"1"},
                           {"kind":"array-index","array":"queue","index":0,"value":"1"},
                           {"kind":"array-index","array":"queue","index":1,"value":"3"},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "t = 16: P3 rechnet bis t = 20",
               "text": "Nur P3 ist bereit.",
               "explanation": {
                                "action": "P3 von t = 16 bis t = 20 ausführen.",
                                "rule": "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                                "decision": "P3 ist bei t = 20 fertig."
                              },
               "highlights": [
                               {"kind":"array-index","array":"cpu","index":16,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":17,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":18,"role":"active"},
                               {"kind":"array-index","array":"cpu","index":19,"role":"active"},
                               {"kind":"array-index","array":"queue","index":0,"role":"active"}
                             ],
               "values": [
                           {"kind":"array-index","array":"cpu","index":16,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":17,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":18,"value":"3"},
                           {"kind":"array-index","array":"cpu","index":19,"value":"3"},
                           {"kind":"array-index","array":"queue","index":0,"value":"3"},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             },
             {
               "title": "Ergebnis: Lauf- und Wartezeiten",
               "text": "Laufzeit von der Ankunft bis zum Ende: P1 16, P2 11, P3 16, P4 5, P5 7. Wartezeit: P1 13, P2 5, P3 12, P4 0, P5 5. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
               "source": "07_rabs-scheduling.pdf, Folie 34",
               "formula": "Ø Laufzeit = (16 + 11 + 16 + 5 + 7) / 5 = 11 ms",
               "product": "Ø Wartezeit = (13 + 5 + 12 + 0 + 5) / 5 = 7 ms",
               "values": [
                           {"kind":"array-index","array":"queue","index":0,"value":""},
                           {"kind":"array-index","array":"queue","index":1,"value":""},
                           {"kind":"array-index","array":"queue","index":2,"value":""},
                           {"kind":"array-index","array":"queue","index":3,"value":""}
                         ]
             }
           ]
}
```
