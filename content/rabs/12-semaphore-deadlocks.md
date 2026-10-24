---
id: semaphore-deadlocks
title: Semaphore & Deadlocks
icon: 🚦
---

## Karte: Semaphore
tag: def
quelle: 09_rabs-synchro-2.pdf, Folie 5

Semaphore sind ein allgemeines Synchronisationskonstrukt nach Dijkstra. Sie lösen das Mutual-Exclusion-Problem auf Basis von Sperren ohne aktives Warten und erlauben neben wechselseitigem Ausschluss auch Reihenfolgensynchronisation.

## Karte: Aufbau eines Semaphors
quelle: 09_rabs-synchro-2.pdf, Folie 6

Ein Semaphor besteht aus Semaphorzähler und Warteschlange für Prozesse oder Threads, die am Eingang eines kritischen Abschnitts warten müssen. Zähler und Warteschlange sind geschützt und nur über Semaphoroperationen manipulierbar.

## Karte: Semaphor-Initialisierung
quelle: 09_rabs-synchro-2.pdf, Folie 7

Der Semaphorzähler wird mit der Anzahl der Prozesse initialisiert, die gleichzeitig im kritischen Abschnitt sein dürfen; die Warteschlange wird bei der Initialisierung geleert.

## Karte: Wait und Signal
tag: wichtig
quelle: 09_rabs-synchro-2.pdf, Folien 8-9

<code>Wait()</code>, auch <code>P()</code> oder <code>down()</code>, dekrementiert den Zähler; bei negativem Wert blockiert der Prozess. <code>Signal()</code>, auch <code>V()</code> oder <code>up()</code>, inkrementiert den Zähler und entblockt gegebenenfalls einen wartenden Prozess.

## Karte: Semaphor-Funktionsweise
quelle: 09_rabs-synchro-2.pdf, Folie 10

Semaphoroperationen sind atomar, damit Warteschlange und Zähler konsistent bleiben. Zähler größer oder gleich 0 bedeutet Anzahl freier Ressourcen; Zähler kleiner 0 bedeutet Anzahl wartender Prozesse. Es gibt kein aktives Warten.

## Karte: Mutex-Semaphor
quelle: 09_rabs-synchro-2.pdf, Folie 12

Für wechselseitigen Ausschluss wird ein Semaphor mit 1 initialisiert. Ein Prozess tritt mit <code>Wait()</code> in den kritischen Abschnitt ein und verlässt ihn mit <code>Signal()</code>.

## Karte: Betriebsmittel-Zugangskontrolle
quelle: 09_rabs-synchro-2.pdf, Folie 13

Für jedes Betriebsmittel gibt es genau einen Semaphor, der wie beim kritischen Abschnitt den wechselseitigen Ausschluss realisiert.

## Karte: Reihenfolgensynchronisation
quelle: 09_rabs-synchro-2.pdf, Folie 14

Soll Prozess 1 eine Datei erst lesen, nachdem Prozess 0 sie erzeugt hat, wird der Semaphor mit 0 vorbelegt. Prozess 1 blockiert bei <code>Wait()</code>, bis Prozess 0 mit <code>Signal()</code> die Wartebedingung erfüllt.

## Karte: Realisierung von Semaphoren
quelle: 09_rabs-synchro-2.pdf, Folie 15

Bei Kernel-Threads werden Semaphore im Betriebssystemkern realisiert; Operationen sind Systemaufrufe. Atomare Ausführung wird durch Interrupt-Sperre und gegebenenfalls Spinlocks gesichert.

## Karte: Bewertung von Semaphoren
quelle: 09_rabs-synchro-2.pdf, Folie 16

Semaphore sind ein allgemeines, leistungsfähiges Konzept zur Koordination nebenläufiger Prozesse. Sie kontrollieren, wie viele Prozesse eine Ressource nutzen; der wechselseitige Ausschluss ist der Spezialfall.

## Karte: Deadlock
tag: def
quelle: 09_rabs-synchro-2.pdf, Folien 19-20

Ein Deadlock ist eine Situation, in der sich Prozesse gegenseitig sperren, weil sie auf Ereignisse warten, die von einem anderen wartenden Prozess nicht freigegeben werden können. Alle beteiligten Prozesse warten ewig; im OS-Kontext ist das Ereignis meist die Freigabe einer Ressource.

## Karte: Livelock
quelle: 09_rabs-synchro-2.pdf, Folie 21

Ein Livelock ist eine spezielle Art von Verklemmung, in der Prozesse nicht in einem Wartezustand verharren, sondern ständig zwischen sich wiederholenden Zuständen wechseln, aus denen kein Entkommen möglich ist.

## Karte: Entziehbare und nichtentziehbare Betriebsmittel
quelle: 09_rabs-synchro-2.pdf, Folie 22

Entziehbare Betriebsmittel können einem Prozess ohne Schaden wieder entzogen werden, etwa Prozessor oder Hauptspeicher. Nichtentziehbare Betriebsmittel können nicht entzogen werden, ohne dass die Ausführung fehlschlägt, etwa ein CD-Brenner.

## Karte: Coffman-Bedingungen
tag: wichtig
quelle: 09_rabs-synchro-2.pdf, Folien 30-31

Die vier Deadlock-Bedingungen sind wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit und zyklisches Warten. Alle vier Bedingungen zusammen sind notwendig und hinreichend für eine Verklemmung.

## Karte: Belegungsanforderungsgraph
quelle: 09_rabs-synchro-2.pdf, Folie 32

Im Belegungsanforderungsgraphen liegt ein Deadlock genau dann vor, wenn der Graph einen Zyklus enthält.

## Karte: Strategien gegen Deadlocks
quelle: 09_rabs-synchro-2.pdf, Folie 50

Die Folien nennen Ignorieren, Erkennen und Beheben, Vermeidung sowie Verhinderung. Vermeidung lässt Anforderungen nicht zu, wenn dadurch ein Deadlock entstehen könnte; Verhinderung macht eine der vier Bedingungen unerfüllbar.

## Frage: Was ist ein Semaphor?
id: 11kifme
quelle: 09_rabs-synchro-2.pdf, Folien 5-6

Ein allgemeines Synchronisationskonstrukt mit Zähler und Warteschlange, das ohne aktives Warten wechselseitigen Ausschluss und Reihenfolgensynchronisation ermöglichen kann.

## Frage: Womit wird der Zähler eines Semaphors initialisiert?
id: tgbxv2
quelle: 09_rabs-synchro-2.pdf, Folie 7

Mit der Anzahl der Prozesse, die gleichzeitig im kritischen Abschnitt sein dürfen; die Warteschlange wird dabei geleert.

## Frage: Was passiert bei Wait() auf einem Semaphor?
id: d5kurp
quelle: 09_rabs-synchro-2.pdf, Folie 8

Der Zähler wird dekrementiert; ist er danach negativ, wird der Prozess blockiert und in die Warteschlange eingereiht.

## Frage: Was macht Signal() bei Semaphoren?
id: 13mujct
quelle: 09_rabs-synchro-2.pdf, Folie 9

Signal() inkrementiert den Semaphorzähler und entblockt gegebenenfalls einen wartenden Prozess.

## Frage: Was bedeutet ein Semaphorzähler kleiner 0?
id: 1es6ukx
quelle: 09_rabs-synchro-2.pdf, Folie 10

Ein Semaphorzähler kleiner 0 gibt die Anzahl wartender Prozesse an.

## Frage: Was ist ein Deadlock?
id: 35abj0
quelle: 09_rabs-synchro-2.pdf, Folien 19-20

Eine Situation, in der Prozesse gegenseitig auf Ereignisse oder Ressourcen warten, die von anderen wartenden Prozessen nicht freigegeben werden können.

## Frage: Welche vier Coffman-Bedingungen nennt die Vorlesung?
id: 12dy0wj
quelle: 09_rabs-synchro-2.pdf, Folie 30

Wechselseitiger Ausschluss (Mutual Exclusion), Halten und Warten (Hold and Wait), Ununterbrechbarkeit (Non-Preemption) und zyklisches Warten (Cyclic Waiting).

## Frage: Wie läuft im Folienbeispiel A–B–C–A–B–C die Verklemmung ab?
id: 4skehj
quelle: 09_rabs-synchro-2.pdf, Folien 33-40

A belegt R, B belegt S, C belegt T. Dann fordert A S an, B T und C R; alle drei warten. Der Graph enthält den Zyklus A → S → B → T → C → R → A: Deadlock.

## Frage: Wie vermeidet das Betriebssystem im Folienbeispiel die Verklemmung?
id: zhnub8
quelle: 09_rabs-synchro-2.pdf, Folien 41-49

Es erkennt, dass die Belegung von T durch C zum Deadlock führen könnte, und blockiert C. B belegt T und gibt S frei, A bekommt S; sobald B auch T freigibt, kann C T belegen.

## Frage: Welche vier Strategien zur Deadlock-Behandlung werden genannt?
id: 1yrobdx
quelle: 09_rabs-synchro-2.pdf, Folie 50

Ignorieren, Erkennen und Beheben, Vermeidung und Verhinderung.

## Ablauf: Ablauf einer Verklemmung
nach: Belegungsanforderungsgraph
quelle: 09_rabs-synchro-2.pdf, Folien 33-40

```json
{
  "id": "deadlock-ablauf",
  "intro": "A braucht R und S, B braucht S und T, C braucht T und R; jeder fordert seine beiden Betriebsmittel nacheinander an und gibt sie danach frei. Reihenfolge der Schritte: A–B–C–A–B–C.",
  "legend": {"done":"Belegung","active":"Anforderung"},
  "visual": {
              "kind": "graph",
              "nodes": [
                         {"id":"A","x":18,"y":18},
                         {"id":"B","x":50,"y":18},
                         {"id":"C","x":82,"y":18},
                         {"id":"R","x":18,"y":80,"note":"frei"},
                         {"id":"S","x":50,"y":80,"note":"frei"},
                         {"id":"T","x":82,"y":80,"note":"frei"}
                       ],
              "edges": [
                         {"from":"A","to":"R"},
                         {"from":"A","to":"S"},
                         {"from":"B","to":"S"},
                         {"from":"B","to":"T"},
                         {"from":"C","to":"T"},
                         {"from":"C","to":"R"}
                       ]
            },
  "steps": [
             {
               "title": "A belegt R",
               "text": "A fordert R an und bekommt es.",
               "source": "09_rabs-synchro-2.pdf, Folie 34",
               "explanation": {
                                "action": "A fordert R an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "R ist frei → A belegt R."
                              },
               "values": [
                           {"kind":"graph-edge","from":"A","to":"R","mark":"done"},
                           {"kind":"graph-node","node":"R","note":"belegt: A"}
                         ]
             },
             {
               "title": "B belegt S",
               "text": "B fordert S an und bekommt es.",
               "source": "09_rabs-synchro-2.pdf, Folie 35",
               "explanation": {
                                "action": "B fordert S an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "S ist frei → B belegt S."
                              },
               "values": [
                           {"kind":"graph-edge","from":"B","to":"S","mark":"done"},
                           {"kind":"graph-node","node":"S","note":"belegt: B"}
                         ]
             },
             {
               "title": "C belegt T",
               "text": "C fordert T an und bekommt es.",
               "source": "09_rabs-synchro-2.pdf, Folie 36",
               "explanation": {
                                "action": "C fordert T an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "T ist frei → C belegt T."
                              },
               "values": [
                           {"kind":"graph-edge","from":"C","to":"T","mark":"done"},
                           {"kind":"graph-node","node":"T","note":"belegt: C"}
                         ]
             },
             {
               "title": "A fordert S an",
               "text": "S ist von B belegt, A muss warten.",
               "source": "09_rabs-synchro-2.pdf, Folie 37",
               "explanation": {
                                "action": "A fordert S an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "S ist belegt → A wartet."
                              },
               "values": [{"kind":"graph-node","node":"A","note":"wartet auf S"}],
               "highlights": [{"kind":"graph-edge","from":"A","to":"S","role":"active"}]
             },
             {
               "title": "B fordert T an",
               "text": "T ist von C belegt, B muss warten.",
               "source": "09_rabs-synchro-2.pdf, Folie 38",
               "explanation": {
                                "action": "B fordert T an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "T ist belegt → B wartet."
                              },
               "values": [{"kind":"graph-node","node":"B","note":"wartet auf T"}],
               "highlights": [
                               {"kind":"graph-edge","from":"A","to":"S","role":"active"},
                               {"kind":"graph-edge","from":"B","to":"T","role":"active"}
                             ]
             },
             {
               "title": "C fordert R an",
               "text": "R ist von A belegt, C muss warten.",
               "source": "09_rabs-synchro-2.pdf, Folie 39",
               "explanation": {
                                "action": "C fordert R an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "R ist belegt → C wartet."
                              },
               "values": [{"kind":"graph-node","node":"C","note":"wartet auf R"}],
               "highlights": [
                               {"kind":"graph-edge","from":"A","to":"S","role":"active"},
                               {"kind":"graph-edge","from":"B","to":"T","role":"active"},
                               {"kind":"graph-edge","from":"C","to":"R","role":"active"}
                             ]
             },
             {
               "title": "Deadlock",
               "text": "Der Graph enthält den Zyklus A → S → B → T → C → R → A. Jeder Prozess wartet auf ein Betriebsmittel, das ein anderer wartender Prozess belegt; keiner kann fortfahren.",
               "source": "09_rabs-synchro-2.pdf, Folie 40",
               "explanation": {
                                "action": "Graph auf einen Zyklus prüfen.",
                                "rule": "Im Belegungsanforderungsgraphen liegt ein Deadlock genau dann vor, wenn der Graph einen Zyklus enthält.",
                                "decision": "Zyklus A → S → B → T → C → R → A → Deadlock."
                              },
               "values": [
                           {"kind":"graph-node","node":"A","note":"Deadlock"},
                           {"kind":"graph-node","node":"B","note":"Deadlock"},
                           {"kind":"graph-node","node":"C","note":"Deadlock"}
                         ],
               "highlights": [
                               {"kind":"graph-edge","from":"A","to":"S","role":"active"},
                               {"kind":"graph-edge","from":"B","to":"T","role":"active"},
                               {"kind":"graph-edge","from":"C","to":"R","role":"active"}
                             ]
             }
           ]
}
```

## Ablauf: Verklemmung vermeiden
nach: Strategien gegen Deadlocks
quelle: 09_rabs-synchro-2.pdf, Folien 41-49

```json
{
  "id": "deadlock-vermeidung",
  "intro": "Dieselben Prozesse und Anforderungen wie beim Ablauf der Verklemmung. Jetzt prüft das Betriebssystem vor jeder Zuteilung, ob sie zu einem Deadlock führen könnte.",
  "legend": {"done":"Belegung","active":"Anforderung"},
  "visual": {
              "kind": "graph",
              "nodes": [
                         {"id":"A","x":18,"y":18},
                         {"id":"B","x":50,"y":18},
                         {"id":"C","x":82,"y":18},
                         {"id":"R","x":18,"y":80,"note":"frei"},
                         {"id":"S","x":50,"y":80,"note":"frei"},
                         {"id":"T","x":82,"y":80,"note":"frei"}
                       ],
              "edges": [
                         {"from":"A","to":"R"},
                         {"from":"A","to":"S"},
                         {"from":"B","to":"S"},
                         {"from":"B","to":"T"},
                         {"from":"C","to":"T"},
                         {"from":"C","to":"R"}
                       ]
            },
  "steps": [
             {
               "title": "A belegt R",
               "text": "A fordert R an und bekommt es.",
               "source": "09_rabs-synchro-2.pdf, Folie 42",
               "explanation": {
                                "action": "A fordert R an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "R ist frei → A belegt R."
                              },
               "values": [
                           {"kind":"graph-edge","from":"A","to":"R","mark":"done"},
                           {"kind":"graph-node","node":"R","note":"belegt: A"}
                         ]
             },
             {
               "title": "B belegt S",
               "text": "B fordert S an und bekommt es.",
               "source": "09_rabs-synchro-2.pdf, Folie 43",
               "explanation": {
                                "action": "B fordert S an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "S ist frei → B belegt S."
                              },
               "values": [
                           {"kind":"graph-edge","from":"B","to":"S","mark":"done"},
                           {"kind":"graph-node","node":"S","note":"belegt: B"}
                         ]
             },
             {
               "title": "C fordert T an",
               "text": "Das Betriebssystem erkennt, dass die Belegung von T durch C zu einem Deadlock führen könnte, und blockiert C, obwohl T frei ist.",
               "source": "09_rabs-synchro-2.pdf, Folie 44",
               "explanation": {
                                "action": "C fordert T an.",
                                "rule": "Vermeidung: Eine Anforderung wird nicht erfüllt, wenn dadurch ein Deadlock entstehen könnte.",
                                "decision": "T an C könnte zum Deadlock führen → C wird blockiert."
                              },
               "values": [{"kind":"graph-node","node":"C","note":"blockiert"}],
               "highlights": [{"kind":"graph-edge","from":"C","to":"T","role":"active"}]
             },
             {
               "title": "A fordert S an",
               "text": "S ist von B belegt, A muss warten.",
               "source": "09_rabs-synchro-2.pdf, Folie 45",
               "explanation": {
                                "action": "A fordert S an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "S ist belegt → A wartet."
                              },
               "values": [{"kind":"graph-node","node":"A","note":"wartet auf S"}],
               "highlights": [
                               {"kind":"graph-edge","from":"C","to":"T","role":"active"},
                               {"kind":"graph-edge","from":"A","to":"S","role":"active"}
                             ]
             },
             {
               "title": "B belegt T",
               "text": "B fordert T an und bekommt es; B hat damit beide Betriebsmittel.",
               "source": "09_rabs-synchro-2.pdf, Folie 46",
               "explanation": {
                                "action": "B fordert T an.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "T ist frei → B belegt T."
                              },
               "values": [
                           {"kind":"graph-edge","from":"B","to":"T","mark":"done"},
                           {"kind":"graph-node","node":"T","note":"belegt: B"}
                         ],
               "highlights": [
                               {"kind":"graph-edge","from":"C","to":"T","role":"active"},
                               {"kind":"graph-edge","from":"A","to":"S","role":"active"}
                             ]
             },
             {
               "title": "B gibt S frei",
               "text": "B ist mit S fertig und gibt es frei.",
               "source": "09_rabs-synchro-2.pdf, Folie 47",
               "explanation": {
                                "action": "B gibt S frei.",
                                "rule": "Ein freigegebenes Betriebsmittel kann einem wartenden Prozess zugeteilt werden.",
                                "decision": "S ist wieder frei; A wartet darauf."
                              },
               "values": [
                           {"kind":"graph-edge","from":"B","to":"S","mark":null},
                           {"kind":"graph-node","node":"S","note":"frei"}
                         ],
               "highlights": [
                               {"kind":"graph-edge","from":"C","to":"T","role":"active"},
                               {"kind":"graph-edge","from":"A","to":"S","role":"active"}
                             ]
             },
             {
               "title": "A belegt S",
               "text": "A bekommt das freigegebene S und kann weiterlaufen.",
               "source": "09_rabs-synchro-2.pdf, Folie 48",
               "explanation": {
                                "action": "S an A zuteilen.",
                                "rule": "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                                "decision": "S ist frei → A belegt S."
                              },
               "values": [
                           {"kind":"graph-edge","from":"A","to":"S","mark":"done"},
                           {"kind":"graph-node","node":"S","note":"belegt: A"},
                           {"kind":"graph-node","node":"A","note":null}
                         ],
               "highlights": [{"kind":"graph-edge","from":"C","to":"T","role":"active"}]
             },
             {
               "title": "B gibt T frei",
               "text": "B gibt auch T frei. Jetzt kann C weiterlaufen und T belegen; eine Verklemmung ist nicht entstanden.",
               "source": "09_rabs-synchro-2.pdf, Folie 49",
               "explanation": {
                                "action": "B gibt T frei.",
                                "rule": "Vermeidung: Eine Anforderung wird nicht erfüllt, wenn dadurch ein Deadlock entstehen könnte.",
                                "decision": "T ist frei und führt nicht mehr zum Deadlock → C kann T belegen."
                              },
               "values": [
                           {"kind":"graph-edge","from":"B","to":"T","mark":null},
                           {"kind":"graph-node","node":"T","note":"frei"},
                           {"kind":"graph-node","node":"C","note":"kann T belegen"}
                         ],
               "highlights": [{"kind":"graph-edge","from":"C","to":"T","role":"active"}]
             }
           ]
}
```
