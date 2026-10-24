---
id: betriebssystem-grundlagen
title: Betriebssystem-Grundlagen
icon: ⚙️
---

## Karte: Stellung des Betriebssystems
quelle: 01_rabs_grundlagen-04.pdf, Folie 4

Im Schichtenbild liegen Anwendungsprogramme (z. B. Bankensystem, Flugbuchungen, Web-Browser) und Systemprogramme (Compiler, Editoren, Kommando-Interpreter) über dem Betriebssystem; darunter folgt die Hardware mit Maschinensprache, Mikroarchitektur und physischen Geräten.

## Karte: Betriebssystem nach DIN 44300
tag: def
quelle: 01_rabs_grundlagen-04.pdf, Folie 5

Ein Betriebssystem sind die Programme eines digitalen Rechensystems, die zusammen mit den Eigenschaften der Rechenanlage die Basis der möglichen Betriebsarten bilden und insbesondere die Abwicklung von Programmen steuern und überwachen.

## Karte: Komplexität von Betriebssystemen
quelle: 01_rabs_grundlagen-04.pdf, Folien 5, 7-8

Heutige Betriebssysteme sind historisch gewachsen und sehr komplex. Gemessen in Source Lines of Code (SLOC): z. B. Windows NT 4.0 16 Mio., Windows XP 40 Mio., Windows Vista 50 Mio., Linux-Kernel 3.6 15,9 Mio. Richtwert aus Erfahrung: 5 bis 50 Bugs pro 1000 Lines of Code, daher ist strukturiertes Design unabdingbar.

## Karte: Arten von Betriebssystemen
quelle: 01_rabs_grundlagen-04.pdf, Folie 6

Die Folien nennen unter anderem Mainframe-, Server-, Multiprozessor-, PC-, Smartphone-, eingebettete und Echtzeit-Betriebssysteme. Die Beispiele reichen von z/OS und BS2000 über Windows, Linux, iOS, Android, QNX, VxWorks bis RTOS.

## Karte: Entwicklung: 1. Generation
quelle: 01_rabs_grundlagen-04.pdf, Folie 9

1945 bis 1955, vorwiegend Elektronenröhren. Es gab kein Betriebssystem; Teams von Ingenieuren betreuten die Rechner, programmiert wurde in Maschinensprache oder durch Verdrahtung. Beispiele: Zuse Z3, Howard Aikens Mark I (Harvard), Colossus (Bletchley Park).

## Karte: Entwicklung: Stapelbetrieb
quelle: 01_rabs_grundlagen-04.pdf, Folie 10

In der zweiten Generation (1955-1965) stehen Transistoren und Stapelverarbeitung im Vordergrund. Jobs werden nacheinander verarbeitet; der Stapelbetrieb wird vom Betriebssystem verwaltet.

## Karte: Entwicklung: Multiprogrammierung
quelle: 01_rabs_grundlagen-04.pdf, Folie 11

In der dritten Generation (1965-1980) treten integrierte Schaltkreise und Multiprogrammierung auf. OS/360 wird als erstes Betriebssystem mit Multiprogramming genannt; Mehrprogrammbetrieb verbessert die CPU-Nutzung, verlangt aber Betriebsmittelverwaltung und Schutz.

## Karte: Entwicklung: 4. und 5. Generation
quelle: 01_rabs_grundlagen-04.pdf, Folien 12-13

4. Generation (ab 1980): Zeitalter des PCs mit Mikroprozessoren, zunächst wieder Einbenutzersysteme (DOS, Windows 95), dann zunehmende Vernetzung und Client/Server-Systeme mit mehreren Benutzern (UNIX, Linux, Windows ab NT). Trend: verteilte Betriebssysteme, bei denen mehrere Rechner wie einer erscheinen, für höhere Leistung und Zuverlässigkeit. 5. Generation (ab 1990): mobile Geräte mit Vorläufern wie dem PDA; Symbian OS, RIM Blackberry OS, iOS, Android.

## Karte: OS-Konzepte im Überblick
quelle: 01_rabs_grundlagen-04.pdf, Folie 15

Zu den Betriebssystemkonzepten zählen Prozesse, Adressräume, Dateisystem, Eingabe/Ausgabe, Schutz der Daten und Kommandozeilen-Interpreter.

## Karte: Betriebssystemstruktur
quelle: 01_rabs_grundlagen-04.pdf, Folie 16

Ein Betriebssystem ist ein großes, komplexes Softwaresystem, modularisiert in Komponenten und Subsysteme. Der Kernel umfasst kritische Funktionen; Systemprogramme werden nach Bedarf geladen. Daemons erfüllen Service-Funktionen und werden durch Ereignisse aufgeweckt.

## Karte: Monolithische Systeme
quelle: 01_rabs_grundlagen-04.pdf, Folien 17-19

Monolithische Betriebssysteme kapseln Betriebssystemdienste in einem großen Kern. Dienste werden im Systemmodus ausgeführt; der Systemcall entspricht bei prozedurorientierter Sicht einem Prozeduraufruf.

## Karte: Monolith: Benutzermodus und Aufbau
quelle: 01_rabs_grundlagen-04.pdf, Folien 20-21

Im Benutzermodus sind nur nicht-privilegierte Befehle verfügbar, z. B. Zugriff auf den eigenen Prozessadressraum. Ein privilegierter Befehl führt zu einem Trap-Signal; auch der Aufruf eines Systemdienstes per Systemcall führt zu einem Trap mit kontrolliertem Einsprung ins Betriebssystem. Aufbau: Ein Hauptprogramm ruft den gewünschten Dienst auf, Service-Prozeduren führen die System Calls aus, Utility-Prozeduren erledigen Teilaufgaben. Nachladbare Komponenten wie Gerätetreiber gibt es in Unix als statische Libraries, in Windows als DLL.

## Karte: Mikrokern-Architektur
quelle: 01_rabs_grundlagen-05.pdf, Folien 4-6

Ziel ist die Minimierung der privilegiert ablaufenden Funktionalität. Betriebssystemkomponenten laufen als Server-Prozesse im nichtprivilegierten Modus und interagieren über Nachrichten. Nur der Mikrokern läuft im Systemmodus.

## Karte: Virtuelle Maschinen
quelle: 01_rabs_grundlagen-05.pdf, Folien 7-8

Auf der Hardware läuft ein Basis-Betriebssystem beziehungsweise Virtual Machine Monitor. Darauf laufen virtuelle Maschinen in Form verschiedener Betriebssysteme; Isolation und Unabhängigkeit werden konsequent fortgeführt.

## Karte: Aufgaben eines Betriebssystems
tag: wichtig
quelle: 01_rabs_grundlagen-05.pdf, Folien 9-16

Ein Betriebssystem leistet Erweiterung oder Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln. Beispiele sind Dateiabstraktion, faire Ressourcenzuteilung und Schutz zwischen Anwendungen.

## Karte: Hardwareabstraktion (HAL)
quelle: 01_rabs_grundlagen-05.pdf, Folie 13

Die Hardware Abstraction Layer ist die Schicht des Betriebssystems, die Kern und übrige Software von der Hardware isoliert; nur sie greift auf die Hardware zu. Das erleichtert die Anpassung an andere Prozessorarchitekturen (NetBSD läuft auf über 50 Plattformen). Auch die Firmware (BIOS bzw. UEFI) kann Abstraktionsaufgaben übernehmen; moderne Betriebssysteme setzen nach dem Booten eigene Treiber ein.

## Karte: Betriebssystem als Vermittler
quelle: 01_rabs_grundlagen-05.pdf, Folien 16-18

Anwendungen dürfen nicht direkt, also unkontrolliert, auf die Hardware zugreifen; das Betriebssystem vermittelt. Unterstützende Hardware-Mechanismen sind die Ausführungsmodi des Prozessors (System- und Benutzermodus) und die Adressumsetzung (virtueller Speicher).

## Karte: Starten des Computers
quelle: 01_rabs_grundlagen-05.pdf, Folien 20-21

Beim Start läuft das BIOS an, prüft Speicher und wichtige Geräte, durchsucht PCIe/PCI, bestimmt das Bootgerät, kopiert dessen ersten Sektor in den Speicher und lädt danach über Bootloader und Betriebssystem Gerätetreiber, Tabellen, Hintergrundprozesse und Login oder GUI.

## Frage: Wie definiert DIN 44300 ein Betriebssystem?
id: 8pyfae
quelle: 01_rabs_grundlagen-04.pdf, Folie 5

Die Programme eines digitalen Rechensystems, die zusammen mit den Eigenschaften der Rechenanlage die Basis der möglichen Betriebsarten bilden und insbesondere die Abwicklung von Programmen steuern und überwachen.

## Frage: Welchen Richtwert für Fehler in Software nennen die Folien?
id: xw1ag9
quelle: 01_rabs_grundlagen-04.pdf, Folie 5

5 bis 50 Bugs pro 1000 Lines of Code; deshalb ist strukturiertes Design unabdingbar.

## Frage: Welche Arten von Betriebssystemen unterscheiden die Folien?
id: 1egnxbl
quelle: 01_rabs_grundlagen-04.pdf, Folie 6

Mainframe-, Server-, Multiprozessor-, PC-, Smartphone-, Embedded- und Echtzeit-Betriebssysteme.

## Frage: Was kennzeichnet die 1. Generation der Betriebssystem-Entwicklung?
id: 1kbxvnk
quelle: 01_rabs_grundlagen-04.pdf, Folie 9

1945 bis 1955, Elektronenröhren, noch kein Betriebssystem: Ingenieurteams betreuten die Rechner, programmiert wurde in Maschinensprache oder durch Verdrahtung.

## Frage: Was kennzeichnet die 2. Generation der Betriebssystem-Entwicklung?
id: 14sby6t
quelle: 01_rabs_grundlagen-04.pdf, Folie 10

1955 bis 1965, Transistoren und Stapelverarbeitung: Programme auf Lochkarten, später mehrere Jobs nacheinander auf Magnetband (batch), verwaltet vom Betriebssystem.

## Frage: Warum führte die 3. Generation Multiprogrammierung ein?
id: u3pnx0
quelle: 01_rabs_grundlagen-04.pdf, Folie 11

Die CPU wartete oft bis zu 90 % der Zeit auf Geräte; statt zu warten wird ein anderer Job bearbeitet. Neues Problem: Verwaltung und Zuteilung der Betriebsmittel.

## Frage: Was kennzeichnet die 4. Generation der Betriebssystem-Entwicklung?
id: 1ogh2on
quelle: 01_rabs_grundlagen-04.pdf, Folie 12

Ab 1980 PCs mit Mikroprozessoren, zunächst Einbenutzersysteme, dann Vernetzung und Client/Server-Systeme mit mehreren Benutzern; Trend zu verteilten Betriebssystemen.

## Frage: Welche Konzepte nennt der Überblick zu Betriebssystemen?
id: 6qbcxb
quelle: 01_rabs_grundlagen-04.pdf, Folie 15

Prozesse, Adressräume, Dateisystem, Eingabe/Ausgabe, Schutz der Daten und Kommandozeilen-Interpreter.

## Frage: Was umfasst der Kernel?
id: umiaw0
quelle: 01_rabs_grundlagen-04.pdf, Folie 16

Der Kernel umfasst die kritischen Funktionen des Betriebssystems.

## Frage: Was ist ein Daemon?
id: 1yyx4on
quelle: 01_rabs_grundlagen-04.pdf, Folie 16

Ein Daemon ist ein Hilfsprozess mit Service-Funktion, der durch Ereignisse aufgeweckt wird.

## Frage: Was ist der Unterschied zwischen monolithischem Kern und Mikrokern?
id: 1f6z0dl
quelle: 01_rabs_grundlagen-04.pdf, Folien 17-19; 01_rabs_grundlagen-05.pdf, Folien 4-6

Beim monolithischen System sind Betriebssystemdienste in einem großen Kern gekapselt und laufen im Systemmodus. Beim Mikrokern läuft nur der Mikrokern im Systemmodus; andere Komponenten laufen als Server-Prozesse im nichtprivilegierten Modus.

## Frage: Welche Mechanismen führten monolithische Systeme ein?
id: 1nqfpa9
quelle: 01_rabs_grundlagen-04.pdf, Folie 17

Verschiedene Ausführungsmodi (System- und User-Modus) mit direktem Hardwarezugriff nur im Systemmodus sowie Traps, Kontextumschaltung und Scheduling.

## Frage: Wie ist ein monolithisches Betriebssystem intern aufgebaut?
id: 1fhzh0v
quelle: 01_rabs_grundlagen-04.pdf, Folie 21

Ein Hauptprogramm ruft den gewünschten Dienst auf, Service-Prozeduren führen die System Calls aus, Utility-Prozeduren erledigen Teilaufgaben; dazu kommen nachladbare Komponenten wie Gerätetreiber.

## Frage: Was ist das Ziel der Mikrokern-Architektur?
id: 1p6b9wt
quelle: 01_rabs_grundlagen-05.pdf, Folie 4

Die im privilegierten Modus ablaufende Funktionalität zu minimieren: Betriebssystemkomponenten laufen als Server-Prozesse im nichtprivilegierten Modus und interagieren über Nachrichten (IPC).

## Frage: Wie arbeiten Clients und Server in der Mikrokern-Architektur zusammen?
id: 9n251k
quelle: 01_rabs_grundlagen-05.pdf, Folie 5

Verwandte Systemdienste werden zu Diensteklassen zusammengefasst und von Serverprozessen realisiert; Clientprozesse nutzen sie über Nachrichtenaustausch.

## Frage: Was ist der Nachteil der Mikrokern-Architektur laut Folien?
id: bwe37p
quelle: 01_rabs_grundlagen-05.pdf, Folie 6

Schlechtere Performance durch Nachrichtenaustausch anstatt Systemcalls.

## Frage: Welchen Vorteil hat ein Mikrokern laut Folien?
id: amt2q3
quelle: 01_rabs_grundlagen-05.pdf, Folie 6

Ein Mikrokern hat deutlich weniger Source Lines of Code als ein monolithischer Kernel.

## Frage: Was ist ein Virtual Machine Monitor?
id: 1pk1g4f
quelle: 01_rabs_grundlagen-05.pdf, Folie 7

Ein Virtual Machine Monitor ist ein Basis-System auf der Hardware, auf dem virtuelle Maschinen als Betriebssysteme laufen.

## Frage: Wie laufen virtuelle Maschinen, und welchen Vorteil bieten sie?
id: bgyums
quelle: 01_rabs_grundlagen-05.pdf, Folie 8

Sie laufen im User-Mode und müssen trotzdem System Calls absetzen können. Vorteil: Entkopplung, mehrere Server und Betriebssysteme laufen auf einer Hardware, ohne dass der Crash eines Servers die anderen beeinflusst.

## Frage: Welche drei Aufgaben eines Betriebssystems nennt der Foliensatz?
id: 1vbs6y4
quelle: 01_rabs_grundlagen-05.pdf, Folie 9

Erweiterung/Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln.

## Frage: Was bedeutet Erweiterung oder Veredelung der Hardware?
id: 8jgi32
quelle: 01_rabs_grundlagen-05.pdf, Folie 10

Die Hardware beschränkt sich auf das Notwendige und ist schwer zu programmieren; das Betriebssystem stellt komplexe Funktionen bereit, z. B. findet es beim Schreiben auf die Festplatte automatisch freie Blöcke.

## Frage: Was bedeutet Abstraktion der Hardware?
id: 1bfcmhy
quelle: 01_rabs_grundlagen-05.pdf, Folie 11

Das Betriebssystem verbirgt die Unterschiede der Rechner und Geräte und bietet Anwendungen eine einheitliche Sicht, eine abstrakte Maschine; z. B. abstrahieren Dateien den externen Speicher.

## Frage: Was ist die Hardware Abstraction Layer (HAL)?
id: 1yuzcsi
quelle: 01_rabs_grundlagen-05.pdf, Folie 13

Die Schicht des Betriebssystems, die Kern und übrige Software von der Hardware isoliert; nur sie kann auf die Hardware zugreifen.

## Frage: Was ist ein Betriebsmittel, und was verlangt seine Verwaltung?
id: 7enag6
quelle: 01_rabs_grundlagen-05.pdf, Folie 14

Alles, was eine Anwendung zur Ausführung benötigt: Prozessor, Speicher, Geräte. Im Mehrprozess- und Mehrbenutzerbetrieb sind Fairness (gerechte Verteilung) und Sicherheit (Schutz voreinander) notwendig.

## Frage: Welche Hardware-Mechanismen unterstützen das Betriebssystem als Vermittler?
id: 182y8mq
quelle: 01_rabs_grundlagen-05.pdf, Folie 16

Die Ausführungsmodi des Prozessors (System- und Benutzermodus) und die Adressumsetzung (virtueller Speicher).

## Frage: Welche Rolle hat das BIOS beim Starten des Computers?
id: 19435g4
quelle: 01_rabs_grundlagen-05.pdf, Folie 20

Es startet nach dem Einschalten, prüft Speicher und wichtige Geräte, durchsucht Bussysteme, bestimmt das Bootgerät und kopiert dessen ersten Sektor in den Speicher.

## Frage: Was passiert beim Booten, nachdem der erste Sektor des Bootgeräts ausgeführt wurde?
id: 17aypsz
quelle: 01_rabs_grundlagen-05.pdf, Folie 21

Der Bootloader wird von der aktiven Partition geladen und startet das Betriebssystem. Dieses fragt das BIOS nach der Konfiguration, sucht und lädt Gerätetreiber in den Kernel, initialisiert interne Tabellen und Hintergrundprozesse und startet Login-Programm oder GUI.
