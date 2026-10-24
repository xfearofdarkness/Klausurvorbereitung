---
id: prozesse
title: Prozesse
icon: 🔄
---

## Karte: Motivation Multiprogrammbetrieb
quelle: 05_rabs-process.pdf, Folie 4

Im Multiprogrammbetrieb laufen mehrere Programme quasi-parallel. Zu jedem Zeitpunkt läuft nur ein Programm auf der CPU; die CPU wechselt nach etwa 10 bis 100 Millisekunden Rechenzeit von Programm zu Programm.

## Karte: Prozessverwaltung
quelle: 05_rabs-process.pdf, Folie 6

Die Folien nennen Konzepte zur Virtualisierung der CPU, prozessindividuelle Adressräume, Datenstrukturen wie Deskriptoren, Tabellen und Warteschlangen sowie Operationen wie Scheduling und Prozesserzeugung.

## Karte: Prozessdefinition
tag: def
quelle: 05_rabs-process.pdf, Folie 8

Ein Prozess ist ein Programm in Ausführung mit zusätzlicher Kontextinformation. Jeder Prozess besitzt einen eigenen Adressraum und durchläuft Zustände wie rechnend, wartend auf E/A oder wartend auf CPU.

## Karte: Programm versus Prozess
quelle: 05_rabs-process.pdf, Folie 11

Ein Programm ist eine Folge von Anweisungen und zugehörigen Daten. Ein Prozess ist ein Programm in Ausführung mit aktuellen Daten wie Programmzähler, Registerinhalten und Variablenbelegung.

## Karte: Prozesskontrollblock
tag: wichtig
quelle: 05_rabs-process.pdf, Folie 12

Der PCB beschreibt den Kontext eines Prozesses. Er enthält unter anderem Prozess-ID, Benutzer und Gruppen, Prozesszustand, Warteereignis, Scheduling-Informationen, Registerinhalte, Accounting-Information, Prozesshierarchie sowie Speicher- und Dateiverwaltungsinformationen.

## Karte: Prozesstabelle
quelle: 05_rabs-process.pdf, Folie 14

Die Prozesstabelle enthält Verweise auf die Prozesskontrollblöcke der existierenden Prozesse. Sie ist meist eine Tabelle fester Länge, die maximale Prozessanzahl ist also durch einen Systemparameter festgelegt. PCB-Verweise werden anhand der Prozess-ID gesucht, z. B. über Hashing oder Suchbäume.

## Karte: Prozesserzeugung allgemein
quelle: 05_rabs-process.pdf, Folie 17

Prozesse entstehen bei Systeminitialisierung, durch Systemaufruf eines anderen Prozesses, durch Benutzeranfrage oder bei Initiierung einer Stapelverarbeitung.

## Karte: fork unter UNIX
quelle: 05_rabs-process.pdf, Folie 18

<code>fork()</code> erzeugt einen exakten Klon des aufrufenden Prozesses. Eltern- und Kindprozess laufen danach unabhängig weiter; der Kindprozess erbt Speicherabbild, offene Dateien und weitere Ressourcen.

## Karte: exec unter UNIX
quelle: 05_rabs-process.pdf, Folie 21

Um das Speicherabbild zu ändern und ein neues Programm auszuführen, muss der Kindprozess zum Beispiel <code>execl()</code> ausführen. Dadurch wird der aktuelle Programmcode durch eine Binärdatei ersetzt; es entsteht kein neuer Prozess.

## Karte: CreateProcess unter Windows
quelle: 05_rabs-process.pdf, Folie 22

<code>CreateProcess</code> behandelt Prozesserzeugung und Laden des korrekten Programms zusammen. Es erzeugt keine Prozesshierarchie und keine Vater-Kind-Relation, sondern legt einen neuen Adressraum an.

## Karte: Prozesshierarchien und init
quelle: 05_rabs-process.pdf, Folien 23-24

Prozesshierarchien entstehen durch Prozesserzeugung. Unter UNIX bildet ein Prozess mit allen Kind- und Kindeskindprozessen eine Prozessgruppe; ein Signal von der Tastatur geht an alle Mitglieder der zugehörigen Gruppe. UNIX initialisiert sich durch den Prozess <code>init</code> aus dem Bootimage: Er erzeugt per fork einen Kindprozess pro Terminal, der auf einen Login wartet, danach starten Shells oder GUI. Alle Prozesse bilden einen Baum mit init als Wurzel; Daemons laufen ohne Shell.

## Karte: Prozesszustände
tag: def
quelle: 05_rabs-process.pdf, Folie 26

Die Folien nennen erzeugt, bereit, laufend, blockiert und beendet. Blockiert bedeutet, dass ein Prozess auf ein Ereignis wartet, etwa E/A-Fertigstellung, Betriebsmittelzuteilung oder Nachricht.

## Karte: Zustandsübergänge
quelle: 05_rabs-process.pdf, Folie 28

laufend → blockiert: Das Betriebssystem entdeckt, dass der Prozess nicht fortfahren kann, oder er ruft selbst <code>pause</code> auf. blockiert → bereit: Das externe Ereignis, auf das er gewartet hat, tritt ein. Zwischen bereit und laufend wechselt der Scheduler, wenn ein Prozess lange genug gelaufen ist bzw. wieder die CPU bekommt. Die Übergänge zwischen bereit und laufend bemerkt der Prozess selbst nicht.

## Karte: Prozessumschaltung
quelle: 05_rabs-process.pdf, Folie 29

Context Switch bedeutet Wechsel von der Ausführung eines Prozesses zu einem anderen. Der Scheduler teilt Rechenzeit zu, der Dispatcher führt den Wechsel aus.

## Karte: Wer löst den Prozesswechsel aus?
quelle: 05_rabs-process.pdf, Folien 30-31

Unter Kontrolle der Prozesse (Koroutinen) bestimmt der Prozess den Umschaltzeitpunkt: kein transparentes Umschalten, keine Fairness. Daher übernimmt das Betriebssystem: Es wechselt in oder nach Systemaufrufen (Warten auf Ereignisse, Terminieren) und nach Unterbrechungen (Ablauf einer Zeitscheibe, ein bevorzugter Prozess wird laufbereit). Den nächsten Prozess wählt der Scheduler.

## Karte: Ablauf des Context Switch
quelle: 05_rabs-process.pdf, Folie 32

Der gesamte Prozesszustand wird gespeichert: Register inklusive Programmzähler im PCB des aktiven Prozesses. Danach wird ein neuer Prozess ausgewählt, seine Ablaufumgebung hergestellt und seine gesicherten Register geladen.

## Karte: Prozess-Warteschlangen
quelle: 05_rabs-process.pdf, Folie 37

Das Betriebssystem führt Ready-Queues für rechenbereite Prozesse und Warteschlangen für verschiedene Ereignisse. Blockierte Prozesse liegen typischerweise in eigenen Warteschlangen für E/A-Geräte wie Platte oder Terminal.

## Karte: Beendigung von Prozessen
quelle: 05_rabs-process.pdf, Folien 39-41

Prozesse können normal freiwillig enden, freiwillig wegen Fehlern enden, unfreiwillig wegen schwerwiegender Fehler beendet werden oder durch einen anderen Prozess beendet werden, sofern dieser die Rechte besitzt.

## Karte: UNIX-Prozesskommandos
quelle: 05_rabs-process.pdf, Folie 43

Die Folien nennen unter anderem <code>ps</code>, <code>top</code>, <code>pstree</code>, <code>pgrep</code>, <code>nice</code> und <code>kill</code> zur Prozessbeobachtung und -verwaltung.

## Frage: Wie definiert die Vorlesung einen Prozess?
id: 1nt8gfr
quelle: 05_rabs-process.pdf, Folie 8

Als Programm in Ausführung mit zusätzlicher Kontextinformation; jeder Prozess besitzt einen eigenen Adressraum.

## Frage: Worin unterscheiden sich Programm und Prozess?
id: 142dw4b
quelle: 05_rabs-process.pdf, Folie 11

Ein Programm ist eine Folge von Anweisungen und Daten. Ein Prozess ist dieses Programm in Ausführung mit aktuellen Daten wie Programmzähler, Registerinhalten und Variablenbelegung.

## Frage: Was enthält ein Prozesskontrollblock?
id: 1jpavni
quelle: 05_rabs-process.pdf, Folie 12

Unter anderem Prozess-ID, Benutzer- und Gruppeninformationen, Zustand, Warteereignis, Scheduling-Informationen, Registerinhalte, Accounting, Prozesshierarchie sowie Speicher- und Dateiverwaltungsinformationen.

## Frage: Was ist ein PCB?
id: hs99ro
quelle: 05_rabs-process.pdf, Folie 12

Ein PCB ist der Process Control Block; er beschreibt den Kontext eines Prozesses.

## Frage: Was enthält die Prozesstabelle?
id: 3e329r
quelle: 05_rabs-process.pdf, Folie 14

Verweise auf die Prozesskontrollblöcke existierender Prozesse; meist eine Tabelle fester Länge, gesucht wird anhand der Prozess-ID.

## Frage: Was macht fork() unter UNIX?
id: 14bevs5
quelle: 05_rabs-process.pdf, Folie 18

Es erzeugt einen exakten Klon des aufrufenden Prozesses; Kind und Elternprozess laufen danach unabhängig weiter.

## Frage: Was macht exec?
id: bsyxd3
quelle: 05_rabs-process.pdf, Folie 21

exec ersetzt den aktuellen Programmcode durch eine Binärdatei, ohne einen neuen Prozess zu erzeugen.

## Frage: Welche Rolle hat init unter UNIX?
id: 1fhy1t3
quelle: 05_rabs-process.pdf, Folien 23-24

init startet aus dem Bootimage, erzeugt einen Kindprozess pro Terminal, der auf einen Login wartet, und ist die Wurzel des Prozessbaums.

## Frage: Wann geht ein Prozess von blockiert nach bereit über?
id: 10bjrpw
quelle: 05_rabs-process.pdf, Folie 28

Wenn das externe Ereignis eintritt, auf das er gewartet hat.

## Frage: Welche Aufgabe hat der Dispatcher?
id: 176buvu
quelle: 05_rabs-process.pdf, Folie 29

Der Dispatcher führt den Prozesswechsel durch.

## Frage: Warum reicht Prozesswechsel unter Kontrolle der Prozesse nicht aus?
id: blj54d
quelle: 05_rabs-process.pdf, Folie 30

Der Prozess bestimmt den Umschaltzeitpunkt selbst: kein transparentes Umschalten und keine Fairness. Gewünscht ist eine faire Zuteilung der CPU durch das Betriebssystem.

## Frage: Bei welchen Ereignissen kann das Betriebssystem einen Prozesswechsel vornehmen?
id: 1oorcbp
quelle: 05_rabs-process.pdf, Folie 31

In oder nach Systemaufrufen (Warten auf Ereignisse, Terminieren eines Prozesses) und nach Unterbrechungen (Ablauf einer Zeitscheibe, bevorzugter Prozess wird laufbereit).

## Frage: Was passiert bei einem Context Switch?
id: duw2sz
quelle: 05_rabs-process.pdf, Folie 32

Der Zustand des laufenden Prozesses wird im PCB gespeichert, ein neuer Prozess wird ausgewählt, seine Ablaufumgebung hergestellt und seine Register werden geladen.
