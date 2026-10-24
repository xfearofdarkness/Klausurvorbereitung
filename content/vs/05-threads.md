---
id: threads
title: Threads: Grundlagen
icon: 🧵
---

## Karte: Nebenläufigkeit
tag: wichtig
quelle: 02_ds-java-threads.pdf, Folien 8-9

Häufig wird unter Programmierung die Entwicklung sequentieller Programme verstanden: Abarbeitung von Programmschritten in festgelegter Reihenfolge. In Verteilten Systemen und seit dem Aufkommen von Multicore-Systemen ist diese Vorstellung überholt: Nebenläufigkeit ist heute der Standardfall, nicht die Ausnahme. Die Nebenläufigkeit einer Anwendung ermöglicht es, mehrere Prozessorkerne auszunutzen.

## Karte: Prozess
tag: def
quelle: 02_ds-java-threads.pdf, Folie 11

Ein Prozess hat eine konsistente Ausführungsumgebung, die vom Betriebssystem verwaltet wird. Das Betriebssystem stellt den Prozessen Ressourcen (z. B. Speicher, CPU) zur Verfügung. In Java entspricht eine Instanz der VM einem Prozess.

## Karte: Thread
tag: def
quelle: 02_ds-java-threads.pdf, Folien 10, 12

Lightweight Process. Ein Prozess kann einen oder mehrere Threads enthalten; Threads teilen sich die Ressourcen, die dem Prozess vom Betriebssystem zugewiesen werden. System-Threads und Benutzer-Threads werden unterschieden: Java-Anwendungen enthalten einige System-Threads, die nicht direkt vom Programmierer gesteuert werden; beim Programmstart gibt es einen Benutzer-Thread, der weitere Threads erstellen kann. Multithreading in Java: High-Level-APIs in <code>java.util.concurrent</code>, Runtime-Support durch VM und Betriebssystem.

## Karte: Threads erzeugen: Klasse vs. Interface
tag: wichtig
quelle: 02_ds-java-threads.pdf, Folien 15-17

Ableitung von der Klasse <code>Thread</code>: <code>public class HelloThread extends Thread { public void run() {...} }</code>, einfach, aber eingeschränkt, da Java keine Mehrfachvererbung unterstützt. Implementierung des Interface <code>Runnable</code>: <code>new Thread(new HelloRunnable()).start()</code>, allgemeiner: Die Klasse kann von anderen Klassen abgeleitet werden, und der Task (Runnable) ist vom Thread getrennt. Auch anonyme Implementierung und Lambda-Ausdrücke sind möglich.

## Karte: start() statt run()
tag: wichtig
quelle: 02_ds-java-threads.pdf, Folien 14, 18-21

Verwenden Sie immer die Methode <code>start()</code>, um einen Thread zu starten. Wenn <code>run()</code> direkt aufgerufen wird, wird es synchron ausgeführt. Threads sind in Java Objekte: Jeder Ausführungs-Thread ist mit einem Thread-Objekt verbunden, das die Steuerung ermöglicht. Der Thread-Name kann im Konstruktor gesetzt und mit <code>getName()</code> ausgegeben werden; <code>Thread.currentThread()</code> liefert eine Referenz auf das aktuell laufende Thread-Objekt; der Status ist über <code>getStatus()</code> zugänglich.

## Karte: Thread.sleep()
tag: def
quelle: 02_ds-java-threads.pdf, Folie 22

Der Aufruf von <code>sleep()</code> stoppt den Ausführungsfluss des Threads. Eine <code>InterruptedException</code> wird geworfen, wenn die Sleep-Phase von einem anderen Thread unterbrochen wird. Es ist nicht garantiert, dass die angegebene Zeit genau eingehalten wird.

## Karte: yield()
tag: def
quelle: 02_ds-java-threads.pdf, Folie 23

Die Methode <code>yield()</code> zeigt der JVM an, dass das Thread-Objekt die CPU für andere Aufgaben verlassen kann. Die JVM garantiert nicht, dass sie dieser Aufforderung nachkommen wird.

## Karte: Interrupts
tag: def
quelle: 02_ds-java-threads.pdf, Folien 24-26

Interrupts stellen eine Aufforderung für einen Thread dar, die Verarbeitung seiner Aktivitäten zu unterbrechen. Sie werden von anderen Threads ausgelöst und müssen von der Implementierung des Threads unterstützt werden; das Auslösen setzt das Interrupt-Flag. Wenn ein Thread keine Methoden aufruft, die die InterruptedException auslösen, muss er das Flag testen: Die statische Methode <code>Thread.interrupted()</code> löscht das Flag; die nicht-statische <code>isInterrupted()</code> löscht es nicht (Prüfung anderer Threads). Wird ein Interrupt erkannt, sollte eine <code>InterruptedException</code> geworfen werden.

## Karte: join()
tag: def
quelle: 02_ds-java-threads.pdf, Folie 27

Mit der join-Anweisung ist es möglich, dass ein Thread wartet, bis ein anderer Thread beendet wird: <code>t.join();</code> bzw. <code>t.join(1000);</code> (maximal 1 Sekunde warten). <code>join()</code> reagiert wie <code>sleep()</code> auf einen Interrupt, indem es mit einer InterruptedException beendet wird.

## Karte: Beispiel: SimpleThreads
tag: beispiel
quelle: 02_ds-java-threads.pdf, Folien 28-30

Das Beispiel zeigt, wie Threads kommunizieren: Ein Hauptthread (in jedem Programm vorhanden) erzeugt und steuert einen weiteren Thread (MessageLoop). Der Hauptthread wartet mit <code>isAlive()</code> und <code>join()</code>; überschreitet die Wartezeit die Geduld, ruft er <code>t.interrupt()</code> auf. Der Unter-Thread fängt die InterruptedException und beendet sich.

## Frage: Was ist der Unterschied zwischen Prozess und Thread?
id: 1uxmzci
quelle: 02_ds-java-threads.pdf, Folien 11-12

Ein Prozess hat eine eigene, vom Betriebssystem verwaltete Ausführungsumgebung mit zugewiesenen Ressourcen (in Java: eine VM-Instanz = ein Prozess). Ein Thread ist ein Lightweight Process innerhalb eines Prozesses; Threads teilen sich die Ressourcen des Prozesses.

## Frage: Auf welche zwei Arten können Threads in Java erzeugt werden und welche ist allgemeiner?
id: 1rz0hlm
quelle: 02_ds-java-threads.pdf, Folien 15-16

Ableitung von der Klasse Thread oder Implementierung des Interface Runnable. Runnable ist allgemeiner: Die Klasse kann von anderen Klassen erben (keine Mehrfachvererbung in Java) und der Task ist vom Thread getrennt.

## Frage: Warum sollte man start() und nicht run() aufrufen?
id: mul9c5
quelle: 02_ds-java-threads.pdf, Folie 20

start() startet den Thread asynchron. Wird run() direkt aufgerufen, wird der Code synchron im aufrufenden Thread ausgeführt.

## Frage: Was macht Thread.sleep()?
id: 1q9lsnm
quelle: 02_ds-java-threads.pdf, Folie 22

Thread.sleep() stoppt den Ausführungsfluss; bei Unterbrechung entsteht eine InterruptedException, und die Zeit ist nicht exakt garantiert.

## Frage: Garantiert die JVM, dass yield() befolgt wird?
id: 1ns6wpu
quelle: 02_ds-java-threads.pdf, Folie 23

Nein, yield() zeigt der JVM nur an, dass der Thread die CPU verlassen kann; die JVM garantiert nicht, dass sie dem nachkommt.

## Frage: Was bedeutet ein Interrupt bei Threads?
id: 1pqoo3j
quelle: 02_ds-java-threads.pdf, Folie 24

Ein Interrupt ist die Aufforderung an einen Thread, seine Aktivität zu unterbrechen; er setzt das Interrupt-Flag und muss vom Thread unterstützt werden.

## Frage: Wie verhalten sich Thread.interrupted() und isInterrupted() unterschiedlich?
id: omci0a
quelle: 02_ds-java-threads.pdf, Folie 25

Die statische Methode Thread.interrupted() löscht das Interrupt-Flag beim Aufruf; die nicht-statische isInterrupted() löscht es nicht und wird verwendet, um den Interrupt-Status eines anderen Threads zu prüfen.

## Frage: Was bewirkt join()?
id: 1155sng
quelle: 02_ds-java-threads.pdf, Folie 27

Der aufrufende Thread wartet, bis der andere Thread beendet ist (optional mit Timeout). Auf einen Interrupt reagiert join() wie sleep() mit einer InterruptedException.
