---
id: adt
title: Abstrakte Datentypen
icon: 📦
---

## Karte: Menge vs. Liste
tag: def
quelle: 02_abstract_data_types.pdf, Folie 3

<b>Menge:</b> ungeordnete Sammlung von Elementen (Werten); jedes Element kommt einmal vor (keine Duplikate). <b>Liste:</b> Aneinanderreihung/Kette von gleichartigen Elementen/Werten; Elemente können mehrfach auftreten.

## Karte: Liste (rekursive Definition)
tag: def
quelle: 02_abstract_data_types.pdf, Folie 4

Eine Liste ist eine leere Liste ([ ]) oder ein Listenelement gefolgt von einer Liste. Die Reihenfolge der Elemente hat eine Bedeutung, das gleiche Element kann mehrfach vorkommen. Sequentielles Durchlaufen der Listenelemente.

## Karte: Listenoperationen
quelle: 02_abstract_data_types.pdf, Folie 5

(Leere) Liste erzeugen, Element anhängen, Element einfügen (an bestimmter Stelle), Element suchen, Element löschen, zum vorherigen/nächsten Element gehen, herausfinden, ob ein weiteres Element existiert (an nächster Position).

## Karte: Mengenoperationen
quelle: 02_abstract_data_types.pdf, Folie 7

Einfügen eines Elements, Entfernen eines Elements, Prüfen ob Element enthalten ist, Vereinigung von zwei Mengen, Schnittmenge zweier Mengen, Differenzmenge zweier Mengen, Prüfen ob Menge leer ist, Anzahl der Elemente der Menge.

## Karte: Sammlung (Collection)
tag: def
quelle: 02_abstract_data_types.pdf, Folie 8

Auch Container oder Behälter: fasst eine Gruppe von Objekten zusammen (i. d. R. vom selben Typ). Eine Sammlung ist selbst ein Objekt; sie speichert andere Objekte, manipuliert diese gemeinsam und gibt Sammlungen von Objekten weiter. Die Sammlung enthält die Referenzen auf ihre enthaltenen Objekte, nicht die Objekte selbst.

## Karte: Reihenfolge und Duplikate
tag: wichtig
quelle: 02_abstract_data_types.pdf, Folie 9

Reihenfolge: keine definiert, benutzerdefiniert oder automatisch. Duplikate: erlaubt oder nicht erlaubt. Kombinationen: <b>Duplikate zugelassen:</b> Multimenge (Reihenfolge irrelevant), Liste (nutzerdefiniert), Sorted List (automatisch sortiert). <b>Duplikate nicht zugelassen:</b> Menge, Ordered Set, Sorted Set.

## Karte: Java: Set- und List-Implementierungen
quelle: 02_abstract_data_types.pdf, Folien 13, 15

<b>HashSet:</b> verwendet eine Hashtabelle, um Hashes und Elemente zu speichern und Duplikate auszuschließen. <b>LinkedHashSet:</b> Erweiterung um doppelt verkettete Liste in Einfügereihenfolge (vorhersehbare Iterationsreihenfolge). <b>TreeSet:</b> verwendet binären Suchbaum. <b>ArrayList:</b> implementiert die Liste als Array und verschiebt Elemente innerhalb des Arrays. <b>LinkedList:</b> speichert Elemente in Knoten mit Zeiger auf Vorgänger und Nachfolger; Durchlaufen verfolgt die Zeiger, Hinzufügen/Löschen durch Anpassen der Zeiger.

## Karte: Gleichheit vs. Identität
tag: wichtig
quelle: 02_abstract_data_types.pdf, Folie 18

<b>Identität:</b> 2 Referenzen auf dasselbe Objekt. <b>Gleichheit:</b> gleiche Werte in allen Instanzvariablen. Die Methode equals verlangt per Default Identität (via Hashcode); equals wird anwendungsbezogen überschrieben, um Gleichheit statt Identität zu prüfen.

## Karte: Array als Darstellung einer Sequenz
tag: wichtig
quelle: 02_abstract_data_types.pdf, Folie 24

Sequenz: eine geordnete Folge von Elementen. Die gängigste Darstellung ist ein Array. <b>Vorteile:</b> einfacher und effizienter Zugriff auf jedes Element (item[i] liefert das Element an Position i, Zugriff in konstanter Zeit. Direktzugriff); sehr kompakt. <b>Nachteile:</b> anfängliche Array-Größe muss festgelegt und bei Bedarf angepasst werden; es ist schwierig, Elemente an beliebigen Positionen einzufügen oder zu löschen; kann Speicherplatz verschwenden, wenn Positionen leer sind.

## Karte: Verkettete Liste (Linked List)
tag: def
quelle: 02_abstract_data_types.pdf, Folie 26

Speichert eine Folge von Elementen in separaten Knoten. Jeder Knoten enthält ein einzelnes Element und einen „Link“ (Verweis) auf den Knoten mit dem nächsten Element. Der letzte Knoten (tail) hat den Verweiswert „null“. Die Liste als Ganzes wird durch eine Variable mit Verweis auf den ersten Knoten dargestellt (head).

## Karte: Verkettete Liste: Operationen an Kopf und Ende
quelle: 02_abstract_data_types.pdf, Folien 30-35

<b>Einfügen am Kopf:</b> neuen Knoten erzeugen und auf den bisherigen head verlinken, dann head auf den neuen Knoten setzen. <b>Entfernen am Kopf:</b> head auf den nächsten Knoten der Liste setzen, der bisherige erste Knoten entfällt. <b>Einfügen am Ende:</b> neuen Knoten mit Verweis null erzeugen, den bisherigen tail auf ihn verlinken und tail auf den neuen Knoten setzen.

## Karte: Verkettete Liste: Vor- und Nachteile
tag: wichtig
quelle: 02_abstract_data_types.pdf, Folien 36-37

<b>Vorteile:</b> kann unbegrenzt wachsen (genug Speicher vorausgesetzt); Einfügen/Löschen ist einfach. Kein Verschieben anderer Elemente nötig, nur die Links werden angepasst. <b>Nachteile:</b> kein Direktzugriff (man muss die Liste „entlanglaufen“); die Links belegen zusätzlichen Speicher; Entfernen am Ende einer einfach verketteten Liste ist nicht effizient. Es gibt keinen Weg in konstanter Zeit, tail auf den Vorgängerknoten zu setzen.

## Karte: Doppelt verkettete Liste (Doubly Linked List)
tag: def
quelle: 02_abstract_data_types.pdf, Folien 39-42

Speichert eine Folge von Elementen in separaten Knoten. Jeder Knoten enthält ein einzelnes Element, einen Link auf den vorherigen und einen Link auf den nächsten Knoten. Es gibt zwei „Dummy“-Knoten: header (erster Knoten) und trailer (letzter Knoten). Einfügen und Entfernen erfolgt durch Umverlinken der Nachbarn.

## Karte: Abstrakter Datentyp (ADT)
tag: def
quelle: 02_abstract_data_types.pdf, Folie 44

Ein Modell einer Datenstruktur, das die Eigenschaften der Datensammlung und die Operationen festlegt, die auf der Sammlung durchgeführt werden können. Es ist abstrakt, da nicht festgelegt ist, wie der ADT implementiert wird. Ein ADT kann durch ein interface beschrieben werden (spezifiziert WAS jede Operation macht, aber nicht WIE) und durch eine class realisiert werden (spezifiziert WIE die Operationen ausgeführt werden).

## Karte: List ADT: Operationen
quelle: 02_abstract_data_types.pdf, Folie 47

<b>getItem(i):</b> liefert das Element mit Index i. <b>addItem(item, i):</b> fügt ein neues Element an Index i ein und verschiebt alle nachfolgenden Elemente einen Index nach hinten; liefert einen Boolean, ob i im Bereich [0, length()] liegt. <b>removeItem(i):</b> entfernt und liefert das Element an Index i, verschiebt nachfolgende Elemente einen Index nach vorn. <b>length():</b> Anzahl der Elemente. <b>isFull():</b> Boolean, ob die Liste bereits die maximale Anzahl von Elementen hat.

## Karte: Effizienz der Listen-Implementierungen
tag: formel
quelle: 02_abstract_data_types.pdf, Folie 88

getItem(i): ArrayList O(1), LinkedLList O(1). addItem als letztes Element: ArrayList O(1), LinkedLList O(n); als erstes Element: ArrayList O(n), LinkedLList O(1). removeItem letztes Element: ArrayList O(1), LinkedLList O(n); erstes Element: ArrayList O(n), LinkedLList O(1). length() und isFull(): jeweils O(1).

## Karte: Warum ein Iterator?
tag: wichtig
quelle: 02_abstract_data_types.pdf, Folien 90-91

Problem: Für LinkedLList-Objekte startet jeder Aufruf von getItem() am Anfang der Liste und traversiert zu Element i. Bei length = n werden insgesamt 1 + 2 + … + n Knoten zugegriffen = O(n²). Macht man die Zähl-Methode zur Methode der Liste, wird jeder Knoten nur einmal besucht (O(n)). Aber man kann nicht alle Operationen vorhersehen, die Benutzer ausführen möchten. Lösung: ein Iterator.

## Karte: Iterator
tag: def
quelle: 02_abstract_data_types.pdf, Folien 96-98

Ein Iterator ist ein Objekt, das es ermöglicht, eine Liste zu durchlaufen, ohne die Kapselung zu verletzen. Interface ListIterator: <b>hasNext()</b>. Hat der Iterator weitere Elemente zu besuchen? <b>next()</b>. Liefert das nächste Element und setzt den Iterator weiter (macht immer zwei Dinge auf einmal: Element zurückliefern und Iterator weitersetzen).

## Karte: Stack (Stapel)
tag: def
quelle: 02_abstract_data_types.pdf, Folien 108, 148

Ein Stack ist eine Folge von Elementen, in der Elemente nur an einem Ende (dem Anfang) hinzugefügt oder entfernt werden können und man nur auf das Element zugreifen kann, das sich gerade am Anfang befindet. Last in, first out (LIFO). Operationen: <b>push(e)</b> fügt e oben auf den Stapel ein (Boolean), <b>pop()</b> entfernt und liefert das oberste Element (oder null, wenn leer), <b>top()</b> liefert das oberste Element ohne es zu entfernen (oder null), <b>isFull()</b>, <b>isEmpty()</b>.

## Karte: Stack: Kapselung
tag: wichtig
quelle: 02_abstract_data_types.pdf, Folie 110

Die Schnittstelle bietet keine Möglichkeit, an einer beliebigen Position auf ein Element zuzugreifen, es einzufügen oder zu löschen. Durch Kapselung wird sichergestellt, dass Stacks nur auf eine Weise manipuliert werden, die mit dem Wesen eines Stacks vereinbar ist.

## Karte: Stack-Implementierungen und Effizienz
tag: formel
quelle: 02_abstract_data_types.pdf, Folien 112-128

<b>ArrayStack:</b> generisches Array items plus Index top (initial -1); push erhöht top und speichert das Element, pop liefert items[top], setzt die Position auf null und verringert top. <b>LinkedLStack:</b> nur eine Instanzvariable (Verweis auf den ersten Knoten mit dem obersten Element); oberstes Element ist ganz links; kein Dummy-Knoten nötig, da immer am Anfang eingefügt wird. Effizienz: push, pop, top, isEmpty, isFull alle O(1) in beiden Implementierungen. Platzbedarf: ArrayStack O(m) (m = erwartete maximale Anzahl von Elementen), LinkedLStack O(n) (n = Anzahl der Elemente, die sich derzeit auf dem Stapel befinden).

## Karte: Anwendungen von Stacks
tag: beispiel
quelle: 02_abstract_data_types.pdf, Folien 130-146

Einen rekursiven Algorithmus in einen iterativen umwandeln (Stack emuliert den Laufzeit-Stack). Sicherstellen, dass Klammern paarweise vorhanden sind: offene (linke) Klammern auf den Stack legen; bei einer schließenden (rechten) Klammer ein Element vom Stack nehmen und prüfen, ob es passt. Eine Datenfolge umkehren: alle Elemente pushen, dann der Reihe nach poppen.

## Karte: Queue (Warteschlange)
tag: def
quelle: 02_abstract_data_types.pdf, Folie 148

Eine Queue ist eine Folge von Elementen, in der Elemente hinten hinzugefügt und vorne entfernt werden: first in, first out (FIFO). Im Gegensatz zum Stack (LIFO). Man kann nur auf das Element zugreifen, das gerade an erster Stelle steht. Operationen: <b>enqueue(e)</b> fügt e am Ende hinzu, <b>dequeue()</b> entfernt und liefert das erste Element (oder null, wenn leer), <b>first()</b> liefert das erste Element ohne Entfernen, <b>size()</b>, <b>isFull()</b>, <b>isEmpty()</b>.

## Karte: Ringwarteschlange (Circular Queue)
tag: wichtig
quelle: 02_abstract_data_types.pdf, Folien 151-153

Problem: Erreicht man das Ende des Arrays, müssten Elemente nach links verschoben werden, um weitere einzufügen. Lösung: Ringwarteschlange. Am Ende des Arrays springt man wieder an den Anfang. Die Indizes werden mit dem Modulo-Operator verschoben: front = (front + 1) % items.length; rear = (rear + 1) % items.length. Beispiel: items.length = 8, rear = 7 → rear = (7 + 1) % 8 = 0.

## Karte: ArrayQueue: leer oder voll?
tag: wichtig
quelle: 02_abstract_data_types.pdf, Folien 154-155

Die Warteschlange ist leer, wenn rear eine Position „hinter“ front liegt: ((rear + 1) % items.length) == front. Problem: Nutzt man alle Positionen im Array, trifft diese Überprüfung auch zu, wenn die Warteschlange voll ist. Deshalb wird die Variable numItems eingeführt: isEmpty() liefert numItems == 0, isFull() liefert numItems == items.length.

## Karte: Queue-Implementierungen und Effizienz
tag: formel
quelle: 02_abstract_data_types.pdf, Folien 157-186

<b>ArrayQueue:</b> Array items mit Indizes front und rear (initial front = 0, rear = -1) und Zähler numItems; enqueue erhöht rear modulo Arraylänge, dequeue liefert items[front] und erhöht front modulo Arraylänge. <b>LinkedLQueue:</b> Verweise front und rear; da eine verkettete Liste an beiden Enden leicht geändert werden kann, ist kein Verschieben nötig. Effizienz: enqueue, dequeue, peek alle O(1). Platzbedarf: ArrayQueue O(m), LinkedLQueue O(n).

## Karte: Anwendungen von Queues
tag: beispiel
quelle: 02_abstract_data_types.pdf, Folie 188

First-in-first-out (FIFO) Inventory Control; OS-Scheduling (Prozesse, Druckaufträge, Pakete etc.); Simulationen von Banken, Supermärkten, Flughäfen etc.; Breitensuche in einem Graphen bzw. Level-Order-Traversierung eines Binärbaums.

## Frage: Was ist der Unterschied zwischen einer Menge und einer Liste?
id: euey9x
quelle: 02_abstract_data_types.pdf, Folien 3-4

Menge: ungeordnete Sammlung, jedes Element kommt nur einmal vor (keine Duplikate). Liste: Aneinanderreihung gleichartiger Elemente, die Reihenfolge hat Bedeutung und Elemente können mehrfach vorkommen.

## Frage: Welche Vorteile und Nachteile hat ein Array zur Darstellung einer Sequenz?
id: 1vx38dm
quelle: 02_abstract_data_types.pdf, Folie 24

Vorteile: Direktzugriff. Item[i] liefert das Element an Position i in konstanter Zeit; sehr kompakt. Nachteile: anfängliche Größe muss festgelegt und ggf. angepasst werden; Einfügen/Löschen an beliebigen Positionen ist schwierig; möglicher Speicherverschnitt bei leeren Positionen.

## Frage: Was bedeuten head und tail in einer verketteten Liste?
id: 1ktkr8w
quelle: 02_abstract_data_types.pdf, Folie 26

head ist die Variable mit Verweis auf den ersten Knoten der verketteten Liste; tail ist der letzte Knoten und hat den Verweiswert null.

## Frage: Welche Vorteile und Nachteile hat eine verkettete Liste?
id: 1fclm9o
quelle: 02_abstract_data_types.pdf, Folien 36-37

Vorteile: kann unbegrenzt wachsen; Einfügen/Löschen ohne Verschieben anderer Elemente (nur Links anpassen). Nachteile: kein Direktzugriff (Liste muss durchlaufen werden), Links belegen zusätzlichen Speicher, Entfernen am Ende ist bei einfacher Verkettung nicht effizient.

## Frage: Warum ist das Entfernen am Ende einer einfach verketteten Liste nicht effizient?
id: 9bexum
quelle: 02_abstract_data_types.pdf, Folie 37

Es gibt keine Möglichkeit, in konstanter Zeit den tail-Verweis auf den Vorgängerknoten zu setzen. Man müsste die Liste durchlaufen.

## Frage: Wie unterscheidet sich eine doppelt verkettete Liste von einer einfach verketteten?
id: 18dh8tb
quelle: 02_abstract_data_types.pdf, Folie 39

Jeder Knoten hat zusätzlich einen Link auf den vorherigen Knoten (prev und next). Außerdem gibt es zwei Dummy-Knoten: header am Anfang und trailer am Ende.

## Frage: Was ist ein abstrakter Datentyp (ADT)?
id: 1ec1jw9
quelle: 02_abstract_data_types.pdf, Folie 44

Ein Modell einer Datenstruktur, das die Eigenschaften der Datensammlung und die darauf möglichen Operationen festlegt. Abstrakt, weil nicht festgelegt ist, wie der ADT implementiert wird. Das Interface spezifiziert WAS jede Operation macht, die Klasse WIE.

## Frage: Wie effizient sind addItem und removeItem bei ArrayList und LinkedLList?
id: 4foo7y
quelle: 02_abstract_data_types.pdf, Folie 88

addItem als letztes Element: ArrayList O(1), LinkedLList O(n); als erstes Element: ArrayList O(n), LinkedLList O(1). removeItem: letztes Element ArrayList O(1), LinkedLList O(n); erstes Element ArrayList O(n), LinkedLList O(1).

## Frage: Welches Problem löst ein Iterator, und welche Methoden bietet er?
id: 13pg4ic
quelle: 02_abstract_data_types.pdf, Folien 90-96

Wiederholte getItem(i)-Aufrufe auf einer verketteten Liste traversieren jedes Mal vom Anfang (insgesamt O(n²)). Ein Iterator erlaubt das Durchlaufen der Liste, ohne die Kapselung zu verletzen: hasNext() prüft, ob weitere Elemente zu besuchen sind; next() liefert das nächste Element und setzt den Iterator weiter.

## Frage: Was ist ein Stack und nach welchem Prinzip arbeitet er?
id: 19kypa4
quelle: 02_abstract_data_types.pdf, Folien 108, 148

Eine Folge von Elementen, in der Elemente nur an einem Ende (dem Anfang) hinzugefügt oder entfernt werden können; Zugriff nur auf das oberste Element. Prinzip: last in, first out (LIFO). Operationen: push, pop, top, isFull, isEmpty.

## Frage: Welchen Platzbedarf haben ArrayStack und LinkedLStack?
id: 1vxir7k
quelle: 02_abstract_data_types.pdf, Folie 128

ArrayStack benötigt O(m) Platz, wobei m die erwartete maximale Anzahl von Elementen ist; LinkedLStack benötigt O(n), wobei n die aktuelle Anzahl der Elemente auf dem Stapel ist.

## Frage: Nennen Sie Anwendungen von Stacks und Queues.
id: 1rrnh6z
quelle: 02_abstract_data_types.pdf, Folien 130, 188

Stacks: rekursive Algorithmen in iterative umwandeln, Klammerpaare prüfen, Datenfolgen umkehren. Queues: FIFO Inventory Control, OS-Scheduling, Simulationen (Banken, Supermärkte, Flughäfen), Breitensuche in Graphen / Level-Order-Traversierung von Binärbäumen.

## Frage: Was ist eine Queue und nach welchem Prinzip arbeitet sie?
id: 8fp0to
quelle: 02_abstract_data_types.pdf, Folie 148

Eine Folge von Elementen, in der hinten hinzugefügt und vorne entfernt wird; Zugriff nur auf das erste Element. Prinzip: first in, first out (FIFO). Operationen: enqueue, dequeue, first, size, isFull, isEmpty.

## Frage: Warum verwendet man bei der ArrayQueue eine Ringwarteschlange, und wie werden die Indizes verschoben?
id: vvvsps
quelle: 02_abstract_data_types.pdf, Folien 151-153

Weil sonst beim Erreichen des Array-Endes alle Elemente nach links verschoben werden müssten. Bei der Ringwarteschlange springt man am Ende wieder an den Anfang; die Indizes werden modulo der Arraylänge erhöht: front = (front + 1) % items.length und rear = (rear + 1) % items.length.

## Frage: Warum braucht die ArrayQueue die Variable numItems?
id: 1tg3il
quelle: 02_abstract_data_types.pdf, Folien 154-155

Die Leer-Prüfung ((rear + 1) % items.length) == front trifft auch zu, wenn die Warteschlange voll ist. Mit numItems gilt eindeutig: isEmpty bei numItems == 0, isFull bei numItems == items.length.

## Ablauf: Stack: Operationsfolge
nach: Stack (Stapel)
quelle: 02_abstract_data_types.pdf, Folien 108-109

```json
{
  "id": "stack-operationen",
  "intro": "Die Operationsfolge von Folie 109, dargestellt als Array mit Index 0 als unterstem Element.",
  "visual": {"kind":"array","label":"Stack (unten = Index 0)","values":["",""]},
  "steps": [
             {
               "title": "push(5)",
               "text": "Rückgabewert true. Inhalt des Stacks: (5).",
               "explanation": {
                                "action": "push(5)",
                                "rule": "push(e) fügt das Element e oben auf den Stapel ein.",
                                "decision": "5 liegt oben; Rückgabe true."
                              },
               "values": [{"kind":"array-index","index":0,"value":5}],
               "highlights": [{"kind":"array-index","index":0,"role":"active"}]
             },
             {
               "title": "push(3)",
               "text": "Rückgabewert true. Inhalt des Stacks: (3, 5).",
               "explanation": {
                                "action": "push(3)",
                                "rule": "push(e) fügt das Element e oben auf den Stapel ein.",
                                "decision": "3 liegt über 5; Rückgabe true."
                              },
               "values": [{"kind":"array-index","index":1,"value":3}],
               "highlights": [{"kind":"array-index","index":1,"role":"active"}]
             },
             {
               "title": "isFull()",
               "text": "Rückgabewert false. Inhalt des Stacks unverändert: (3, 5).",
               "explanation": {
                                "action": "isFull()",
                                "rule": "isFull() gibt einen Boolean zurück, der angibt, ob der Stapel voll ist.",
                                "decision": "Der Stapel ist nicht voll → false."
                              },
               "highlights": [
                               {"kind":"array-index","index":0,"role":"done"},
                               {"kind":"array-index","index":1,"role":"done"}
                             ]
             },
             {
               "title": "pop()",
               "text": "Rückgabewert 3. Das oberste Element wird entfernt, Inhalt: (5).",
               "explanation": {
                                "action": "pop()",
                                "rule": "pop() entfernt das oberste Element des Stapels und gibt es zurück.",
                                "decision": "3 wird entfernt und zurückgegeben."
                              },
               "values": [{"kind":"array-index","index":1,"value":""}],
               "highlights": [{"kind":"array-index","index":0,"role":"active"}]
             },
             {
               "title": "isEmpty()",
               "text": "Rückgabewert false. Inhalt: (5).",
               "explanation": {
                                "action": "isEmpty()",
                                "rule": "isEmpty() gibt einen Boolean zurück, der angibt, ob der Stapel leer ist.",
                                "decision": "5 liegt noch auf dem Stapel → false."
                              },
               "highlights": [{"kind":"array-index","index":0,"role":"done"}]
             },
             {
               "title": "pop()",
               "text": "Rückgabewert 5. Der Stack ist jetzt leer: ().",
               "explanation": {
                                "action": "pop()",
                                "rule": "pop() entfernt das oberste Element des Stapels und gibt es zurück.",
                                "decision": "5 wird entfernt und zurückgegeben; der Stapel ist leer."
                              },
               "values": [{"kind":"array-index","index":0,"value":""}]
             },
             {
               "title": "isEmpty()",
               "text": "Rückgabewert true. Inhalt: ().",
               "explanation": {
                                "action": "isEmpty()",
                                "rule": "isEmpty() gibt einen Boolean zurück, der angibt, ob der Stapel leer ist.",
                                "decision": "Der Stapel ist leer → true."
                              }
             },
             {
               "title": "push(7)",
               "text": "Rückgabewert true. Inhalt: (7).",
               "explanation": {
                                "action": "push(7)",
                                "rule": "push(e) fügt das Element e oben auf den Stapel ein.",
                                "decision": "7 liegt oben; Rückgabe true."
                              },
               "values": [{"kind":"array-index","index":0,"value":7}],
               "highlights": [{"kind":"array-index","index":0,"role":"active"}]
             },
             {
               "title": "push(9)",
               "text": "Rückgabewert true. Inhalt: (9, 7).",
               "explanation": {
                                "action": "push(9)",
                                "rule": "push(e) fügt das Element e oben auf den Stapel ein.",
                                "decision": "9 liegt über 7; Rückgabe true."
                              },
               "values": [{"kind":"array-index","index":1,"value":9}],
               "highlights": [{"kind":"array-index","index":1,"role":"active"}]
             },
             {
               "title": "top()",
               "text": "Rückgabewert 9. Das oberste Element wird nur gelesen, nicht entfernt: (9, 7).",
               "explanation": {
                                "action": "top()",
                                "rule": "top() gibt das oberste Element des Stapels zurück, ohne es zu entfernen.",
                                "decision": "Rückgabe 9; der Inhalt bleibt (9, 7)."
                              },
               "highlights": [{"kind":"array-index","index":1,"role":"compare"}]
             }
           ]
}
```
