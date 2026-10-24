---
id: threads
title: Threads
icon: 🧵
---

## Karte: Threaddefinition
tag: def
quelle: 06_rabs-threads.pdf, Folie 6

Threads sind parallele Kontrollflüsse innerhalb eines Prozesses. Sie sind nicht voneinander abgeschottet, weil sie gemeinsame Ressourcen, insbesondere Speicher, teilen. Ein Prozessende beendet auch alle Threads.

## Karte: Gründe für Threads
quelle: 06_rabs-threads.pdf, Folie 7

Threads erlauben parallele Aktivitäten in einem Adressraum, sind leichter zu erzeugen und zu zerstören als Prozesse, können bei nebenläufiger Ein-/Ausgabe Performance bringen und auf mehrere Prozessoren verteilt echte Parallelität ermöglichen.

## Karte: Vorteile von Threads
quelle: 06_rabs-threads.pdf, Folie 8

Threads vereinfachen bei quasi-parallelen Ausführungssträngen das Programmiermodell, ermöglichen sehr schnellen Datenaustausch durch gemeinsame Daten und sind schneller zu erzeugen und zu terminieren als Prozesse.

## Karte: Webserver-Beispiel
quelle: 06_rabs-threads.pdf, Folie 10

Im Webserver-Beispiel nimmt ein Dispatcher-Thread Anfragen aus dem Netz an und leitet sie an Worker-Threads weiter. Ein Worker kann bei Plattenzugriff blockieren, während andere Threads weiterarbeiten.

## Karte: Thread-Charakteristika
quelle: 06_rabs-threads.pdf, Folie 12

Ein Thread besitzt eigene Identität, eigenen Programmzähler, eigenes Registerset, eigenen Stack und eigenen Zustand wie blockiert, rechenbereit oder rechnend.

## Karte: Threads und Adressräume
tag: wichtig
quelle: 06_rabs-threads.pdf, Folie 15

Threads desselben Prozesses teilen den gemeinsamen Prozessadressraum und Ressourcen. Jeder Thread kann auf Speicheradressen des Prozesses und anderer Threads dieses Prozesses zugreifen.

## Karte: Multithreading und Hyperthreading
quelle: 06_rabs-threads.pdf, Folien 17-18

Multithreading bezeichnet gleichzeitiges Abarbeiten mehrerer Threads innerhalb eines Prozesses oder Tasks. Hyperthreading ist hardwareseitiges Multithreading in Intel-Prozessoren, bei dem ein Prozessorkern zwei Threads parallel bearbeiten kann.

## Karte: Thread-Bibliotheksfunktionen
quelle: 06_rabs-threads.pdf, Folie 19

Die Folien nennen <code>thread_create</code>, <code>thread_exit</code>, <code>thread_join</code> und <code>thread_yield</code>. <code>thread_yield</code> erlaubt freiwillige Abgabe von Rechenzeit an einen anderen Thread.

## Karte: User-Level-Threads
quelle: 06_rabs-threads.pdf, Folie 22

User-Level-Threads werden ohne Wissen des Betriebssystems erzeugt, synchronisiert und vernichtet. Der Kernel verwaltet nur Prozesse; die Threading-Bibliothek verwaltet pro Prozess eine Threadtabelle und bietet Scheduling für Threads des Prozesses.

## Karte: Probleme und Vorteile von User-Level-Threads
quelle: 06_rabs-threads.pdf, Folien 23-25

Vorteile sind keine notwendige Betriebssystemunterstützung, schnelle Threaderzeugung und schnelle Threadwechsel ohne Kerneintritt. Nachteile sind blockierende Systemaufrufe, die alle Threads eines Prozesses blockieren, und freiwillige CPU-Abgabe.

## Karte: Kernel-Level-Threads
quelle: 06_rabs-threads.pdf, Folien 26-28

Beim Kernel-Level-Modell verwaltet der Kernel Threads in Thread-Tabellen; Threadoperationen sind Kernel-Aufrufe. Vorteile sind andere Threads desselben Prozesses bei Blockierung und echte Parallelität auf Mehrprozessorsystemen. Nachteil ist höherer Overhead.

## Karte: Hybride Threads
quelle: 06_rabs-threads.pdf, Folien 29-30

Die Kombination aus Kernel- und User-Threads ordnet mehrere User-Threads Kernel-Threads zu. Sie gab es z. B. in alten Solaris-Versionen; heute wird sie für Programme mit sehr vielen nebenläufigen Aktivitäten genutzt, etwa Webserver mit mehreren Netzwerkschnittstellen.

## Karte: Realisierung von Threads
quelle: 06_rabs-threads.pdf, Folie 32

Konzeptionell wird jeder Thread von einer eigenen virtuellen CPU ausgeführt, die Threads laufen quasi-parallel mit den Ressourcen des Prozesses. Real schaltet die CPU zwischen ihnen um, indem sie CPU-Register und Program Counter speichert und lädt.

## Karte: Threads in Windows
quelle: 06_rabs-threads.pdf, Folie 34

Seit Windows NT gibt es Kernel-Level-Threads (Win32-API). <code>CreateProcess()</code> legt einen neuen Adressraum an und startet darin den ersten Thread, <code>CreateThread()</code> startet weitere Threads im bestehenden Prozess. Zusätzlich gibt es User-Level-Threads, die Fibers: Mehrere Fibers können in einem Kernel-Level-Thread existieren.

## Karte: Threads in Linux
quelle: 06_rabs-threads.pdf, Folie 35

Ab Kernel 2.0 gab es die Bibliothek LinuxThreads. Ab 2002 entwickelte sich die Native POSIX Thread Library (NPTL), voll POSIX-kompatibel, ohne Limitierung der Thread-Anzahl und mit 1:1-Implementierung.

## Frage: Was ist ein Thread?
id: 1q439j
quelle: 06_rabs-threads.pdf, Folie 6

Ein paralleler Kontrollfluss innerhalb eines Prozesses, der gemeinsame Ressourcen, insbesondere Speicher, mit anderen Threads des Prozesses teilt.

## Frage: Welche eigenen Bestandteile hat ein Thread?
id: zra1l8
quelle: 06_rabs-threads.pdf, Folie 12

Thread-ID, Programmzähler, Registerset, Stack und Zustand.

## Frage: Was zeigt Thread_create?
id: 12ll3uh
quelle: 06_rabs-threads.pdf, Folie 19

Thread_create zeigt, dass ein Start-Thread neue Threads erzeugen kann.

## Frage: Welche drei Ansätze zur Implementierung von Threads gibt es?
id: 1szdu2p
quelle: 06_rabs-threads.pdf, Folie 21

Im User Space über Thread-Bibliotheken, integriert im Kernel und die Kombination aus beiden.

## Frage: Was kennzeichnet User-Level-Threads?
id: q5lhd1
quelle: 06_rabs-threads.pdf, Folie 22

Bei User-Level-Threads weiß der Kernel nichts von ihnen; eine Threading-Bibliothek verwaltet sie.

## Frage: Was ist der zentrale Nachteil von User-Level-Threads bei blockierenden Systemaufrufen?
id: 13fu87o
quelle: 06_rabs-threads.pdf, Folie 23

Ein blockierender Systemaufruf blockiert alle User-Level-Threads des Prozesses.

## Frage: Was bedeutet 1:1-Implementierung bei Threads?
id: v7txds
quelle: 06_rabs-threads.pdf, Folien 26 und 35

Jedem Benutzer-Thread ist genau eine Kernel-Aktivität beziehungsweise ein Kernel-Thread zugeordnet.

## Frage: Was kennzeichnet Kernel-Level-Threads?
id: j2rg5v
quelle: 06_rabs-threads.pdf, Folie 26

Bei Kernel-Level-Threads verwaltet der Kernel die Threads, und Operationen sind Kernel-Aufrufe.

## Frage: Was ist der Vorteil von Kernel-Level-Threads bei Blockierung?
id: uvbc3j
quelle: 06_rabs-threads.pdf, Folie 28

Wenn ein Thread blockiert, kann das Betriebssystem einen anderen Thread desselben Prozesses auswählen.

## Frage: Wie schaltet die CPU real zwischen Threads um?
id: 175t45x
quelle: 06_rabs-threads.pdf, Folie 32

Durch Speichern und Laden der CPU-Register und des Program Counters.

## Frage: Was sind Fibers unter Windows?
id: 174nn6l
quelle: 06_rabs-threads.pdf, Folie 34

User-Level-Threads; mehrere Fibers können in einem Kernel-Level-Thread existieren.

## Frage: Was ist NPTL?
id: 1pc2wal
quelle: 06_rabs-threads.pdf, Folie 35

NPTL ist die Native POSIX Thread Library und eine 1:1-Implementierung unter Linux.
