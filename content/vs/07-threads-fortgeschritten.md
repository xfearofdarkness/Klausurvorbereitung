---
id: threads-fortgeschritten
title: Liveness, Executor & virtuelle Threads
icon: ⚙️
---

## Karte: Deadlock
tag: def
quelle: 06_ds-java-threads-3.pdf, Folie 5

Ein Anwendungszustand, in dem Threads bereits eine Teilmenge von Ressourcen erworben haben, aber keine Chance haben, weitere Ressourcen zu erhalten. Typisches Muster: verschachtelte synchronized-Blöcke auf zwei Objekten in unterschiedlicher Reihenfolge.

## Karte: Starvation
tag: def
quelle: 06_ds-java-threads-3.pdf, Folie 9

Eine Situation, in der bestimmte Threads keine Chance haben, alle notwendigen Ressourcen zu erwerben — häufig verursacht durch andere Threads, die diese Ressourcen stark nutzen. Häufige Gründe: Ändern von Thread-Prioritäten (unvorhersehbare, plattformabhängige Folgen) und Aufrufe von yield oder sleep(0), die Plattformabhängigkeiten einführen.

## Karte: Livelock
tag: def
quelle: 06_ds-java-threads-3.pdf, Folie 10

Eine Situation, in der Threads so sehr damit beschäftigt sind zu kommunizieren, dass sie ihre eigentliche Funktionalität nicht mehr erbringen. Beispiele: fehlerhafte Recovery-Mechanismen; ähnlich wie Menschen, die sich gegenseitig ausweichen wollen. Abhilfe: Zufälligkeit in Retry-Mechanismen einführen.

## Karte: Bibliothek vs. Framework
tag: def
quelle: 06_ds-java-threads-3.pdf, Folien 12-13

Eine <b>Bibliothek</b> ist eine Sammlung von Unterprogrammen für thematisch zusammengehörende Problemstellungen — keine eigenständig lauffähige Einheit, sondern Hilfsmodule, die von Programmen angefordert werden. Ein <b>Framework</b> ist ein Programmiergerüst: selbst kein fertiges Programm, sondern der Rahmen, in dem der Programmierer eine Anwendung erstellt. Es gibt i. d. R. die Anwendungsarchitektur vor — mit Umkehrung der Steuerung (Inversion of Control): Der Programmierer registriert Implementierungen, die vom Framework gesteuert und benutzt werden.

## Karte: Tasks und Nachteile von Threads
tag: def
quelle: 06_ds-java-threads-3.pdf, Folien 14-15

Ein Task ist ein abstrakter Block von Funktionalität (z. B. ein Client-Request), oft durch ein Runnable abgebildet. Nachteile von Threads: <b>Lifecycle-Overhead</b> (Erzeugung und Verwaltung kosten Zeit und Ressourcen), <b>Ressourcenverbrauch</b> (wartende Threads binden Speicher), <b>Stabilität</b> (Anzahl der Threads durch Speicherplatz begrenzt).

## Karte: Thread-Pools und das Executor-Framework
tag: wichtig
quelle: 06_ds-java-threads-3.pdf, Folien 16, 21

Thread-Pools adressieren die Nachteile von Threads: Sie verwalten einen Pool von Worker-Threads plus eine Queue mit zu verarbeitenden Tasks. Worker-Threads laufen dauerhaft; Tasks aus der Queue werden ihnen zugewiesen — das minimiert den Aufwand für Erzeugung und Verwaltung. Das Executor-Framework: <code>public interface Executor { void execute(Runnable command); }</code> — Entkopplung von Task-Einreichung und Task-Ausführung, verschiedene Ausführungs-Policys, Lifecycle-Support und Monitoring.

## Karte: Konkrete Executoren und die Klasse Executors
tag: def
quelle: 06_ds-java-threads-3.pdf, Folien 19, 22, 24-25

<code>ThreadPoolExecutor</code> baut einen Thread-Pool auf; <code>ScheduledThreadPoolExecutor</code> erweitert ihn um zeitgesteuerte und wiederholte Ausführung. Die Klasse <code>Executors</code> bietet statische Factory-Methoden: <code>newCachedThreadPool()</code> (wächst mit den Anfragen), <code>newFixedThreadPool(int)</code> (maximal n Threads), <code>newSingleThreadScheduledExecutor()</code> und <code>newScheduledThreadPool(int)</code>. Diagnose: <code>getPoolSize()</code>, <code>getActiveCount()</code>, <code>getCompletedTaskCount()</code>. Lifecycle: running, shutting down, terminated.

## Karte: Herunterfahren eines Executors
tag: def
quelle: 06_ds-java-threads-3.pdf, Folie 28

<code>shutdown()</code> fährt den Thread-Pool herunter: Laufende Threads werden nicht abgebrochen, aber neue Anfragen nicht angenommen. <code>isShutdown()</code> prüft, ob bereits heruntergefahren wurde. <code>shutdownNow()</code> regt ausführende Befehle zum Stoppen an und gibt die Liste der zu beendenden Kommandos zurück.

## Karte: Zeitgesteuerte Tasks
tag: def
quelle: 06_ds-java-threads-3.pdf, Folien 29-31

Mit <code>schedule(task, delay, TimeUnit)</code> wird ein Task nach einer Verzögerung ausgeführt. Für periodische Ausführung: <code>scheduleAtFixedRate(task, initialDelay, period, TimeUnit)</code>. Ein <code>ScheduledFuture</code>-Objekt bietet Methoden für die periodische Ausführung (z. B. <code>getDelay()</code> für die Zeit bis zur nächsten Ausführung).

## Karte: Callables und Futures
tag: wichtig
quelle: 06_ds-java-threads-3.pdf, Folien 32-36

Ein Thread kann Ergebnisse nur mit Schwierigkeiten liefern — dafür gibt es das Interface <code>Callable</code>: Es unterstützt einen Datentyp V als Rückgabewert der Methode <code>call()</code>. Callables werden mit <code>submit()</code> an den ExecutorService übergeben; der Rückgabewert wird asynchron in einem <code>Future</code>-Objekt gespeichert. Future-Operationen: <code>get()</code> (blockiert bis der Wert verfügbar ist), <code>get(timeout, unit)</code> (wirft TimeoutException) und <code>isDone()</code>.

## Karte: Virtuelle Threads
tag: def
quelle: 06_ds-java-threads-3.pdf, Folien 38-39

Java-Threads entsprechen Kernel-Threads, werden vom Betriebssystem gescheduled und heißen Platform Threads. Seit einiger Zeit bietet Java auch User-Threads an: Virtual Threads, gescheduled von der Java Runtime. Schwächen von Platform Threads: großer Ressourcenbedarf (z. B. Arbeitsspeicher) und viele Kontextwechsel durch OS-Scheduling. Virtuelle Threads werden vollständig von der JVM verwaltet — keine Kontextwechsel nötig.

## Karte: Eigenschaften virtueller Threads
tag: wichtig
quelle: 06_ds-java-threads-3.pdf, Folien 40, 42-46

Kleinerer Ressourcenbedarf (Footprint) — große Zahlen virtueller Threads können gestartet werden; effizientere Verwaltung durch die JVM; einfache Handhabung ähnlich wie Platform Threads; besonders positiv bei Anwendungen mit vielen I/O-Operationen. Konzept: Beim Scheduling wird der virtuelle Thread auf einen Platform Thread (Carrier) gemountet; er kann unmounted werden, z. B. wenn er blockierend auf ein IO-Ereignis wartet. Da sie nicht ressourcenintensiv sind, müssen virtuelle Threads nicht gepoolt werden; blockierendes Warten ist kein Problem. Erzeugung: <code>Thread.ofVirtual().start(() -> ...)</code> oder <code>Executors.newVirtualThreadPerTaskExecutor()</code>.

## Frage: Was ist ein Deadlock?
id: 35abj0
quelle: 06_ds-java-threads-3.pdf, Folie 5

Ein Anwendungszustand, in dem Threads bereits eine Teilmenge von Ressourcen erworben haben, aber keine Chance haben, weitere Ressourcen zu erhalten — z. B. durch verschachtelte synchronized-Blöcke in unterschiedlicher Reihenfolge.

## Frage: Was ist Starvation?
id: oe8x9a
quelle: 06_ds-java-threads-3.pdf, Folie 9

Bei Starvation bekommen Threads nötige Ressourcen nicht, weil andere Threads sie stark nutzen.

## Frage: Was ist ein Livelock?
id: 1y3mqss
quelle: 06_ds-java-threads-3.pdf, Folie 10

Bei einem Livelock sind Threads so mit Kommunikation beschäftigt, dass keine eigentliche Funktionalität mehr erbracht wird.

## Frage: Was unterscheidet ein Framework von einer Bibliothek?
id: qv0nlh
quelle: 06_ds-java-threads-3.pdf, Folien 12-13

Eine Bibliothek liefert Hilfsmodule, die vom Programm angefordert werden. Ein Framework gibt die Anwendungsarchitektur vor — mit Inversion of Control: Der Programmierer registriert Implementierungen, die vom Framework gesteuert und benutzt werden.

## Frage: Welche Nachteile von Threads adressieren Thread-Pools?
id: 162ktcs
quelle: 06_ds-java-threads-3.pdf, Folien 15-16, 21

Thread-Lifecycle-Overhead (Erzeugung/Verwaltung kostet), Ressourcenverbrauch (wartende Threads binden Speicher) und Stabilität (Thread-Anzahl durch Speicher begrenzt). Worker-Threads laufen dauerhaft und übernehmen Tasks aus einer Queue.

## Frage: Welche Aufgabe hat das Interface Executor?
id: 1eopgne
quelle: 06_ds-java-threads-3.pdf, Folien 16, 19

Das Interface Executor entkoppelt mit void execute(Runnable command) die Task-Einreichung von der Task-Ausführung.

## Frage: Welche Factory-Methoden bietet die Klasse Executors?
id: k9gpz3
quelle: 06_ds-java-threads-3.pdf, Folie 22

newCachedThreadPool() (Größe wächst mit den Anfragen), newFixedThreadPool(n) (maximal n Threads), newSingleThreadScheduledExecutor() und newScheduledThreadPool(corePoolSize) (mit Timing-Constraints).

## Frage: Was unterscheidet shutdown() von shutdownNow()?
id: 8ckqy9
quelle: 06_ds-java-threads-3.pdf, Folie 28

shutdown(): laufende Threads werden nicht abgebrochen, neue Anfragen nicht mehr angenommen. shutdownNow(): ausführende Befehle werden zum Stoppen angeregt, Rückgabe ist die Liste der zu beendenden Kommandos.

## Frage: Wozu dienen Callable und Future?
id: r3f2pi
quelle: 06_ds-java-threads-3.pdf, Folien 32-36

Callable ist ein Runnable mit Rückgabewert (Typparameter V, Methode call()). submit() übergibt es dem ExecutorService; das Ergebnis wird asynchron in einem Future gespeichert, das mit get() (blockierend), get(timeout) oder isDone() abgefragt werden kann.

## Frage: Was macht Future.get()?
id: 6f69i2
quelle: 06_ds-java-threads-3.pdf, Folie 36

Future.get() blockiert, bis der Wert verfügbar ist; mit Timeout ist eine TimeoutException möglich.

## Frage: Was sind virtuelle Threads und welche Vorteile haben sie?
id: 1ac7owe
quelle: 06_ds-java-threads-3.pdf, Folien 38-40, 46

User-Threads, die von der Java Runtime (JVM) gescheduled werden statt vom OS. Vorteile: kleiner Footprint (große Anzahl möglich), keine Kontextwechsel, kein Pooling nötig, blockierendes Warten unproblematisch — besonders gut bei I/O-lastigen Anwendungen.

## Frage: Wie unterscheiden sich Platform Threads und Virtual Threads?
id: 11htiz2
quelle: 06_ds-java-threads-3.pdf, Folien 38-39

Platform Threads sind Kernel-Threads mit OS-Scheduling und teuer; Virtual Threads werden von der JVM verwaltet, haben einen kleineren Footprint und keine Kontextwechsel.

## Frage: Was ist ein Carrier-Thread?
id: 1jt5tni
quelle: 06_ds-java-threads-3.pdf, Folie 45

Der Platform Thread, auf den ein virtueller Thread beim Scheduling gemountet wird. In bestimmten Situationen (z. B. blockierendes Warten auf IO) wird der virtuelle Thread wieder unmounted.
