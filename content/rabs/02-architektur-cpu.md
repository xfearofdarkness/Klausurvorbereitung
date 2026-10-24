---
id: architektur-cpu
title: Architektur, CPU & E/A
icon: 🖥️
---

## Karte: Speicherverwaltungseinheit (MMU)
quelle: 01_rabs_grundlagen.pdf, Folie 26

Im Mehrprogrammbetrieb müssen Betriebssystem und Programme voreinander geschützt und Programme an unterschiedliche Adressen geladen werden. Lösung: Adressumsetzung. Die Hardware-MMU setzt virtuelle Adressen des Programms auf physische Speicheradressen um und prüft dabei Zugriffsrechte. Einfachste Variante: Basis- und Limit-Register, physische Adresse = Basis + virtuelle Adresse; das Limit-Register legt die Länge des zugreifbaren Adressraums fest.

## Karte: Von-Neumann-Komponenten
tag: def
quelle: 02_rabs_vna1.pdf, Folie 5

Die Von-Neumann-Architektur besteht aus ALU, Control Unit, Memory, I/O-Unit und Bus-System. Die ALU führt Rechenoperationen und logische Verknüpfungen aus, die Control Unit interpretiert Anweisungen und steuert die Befehlsabfolge.

## Karte: Von-Neumann-Flaschenhals
tag: wichtig
quelle: 01_rabs_grundlagen.pdf, Folie 4

Befehle und Daten werden im Speicher gehalten. Die Verbindung und Datenübertragung zwischen CPU und Speicher über den Systembus wird zum Von-Neumann-Flaschenhals, weil jeglicher Datenverkehr von und zur CPU über den internen Bus läuft.

## Karte: Harvard-Architektur
tag: def
quelle: 01_rabs_grundlagen.pdf, Folien 5-6

Die Harvard-Architektur trennt Befehls- und Datenspeicher logisch und physisch. Dadurch können Befehle und Daten gleichzeitig geladen beziehungsweise geschrieben werden.

## Karte: Nachteile der Harvard-Architektur
quelle: 01_rabs_grundlagen.pdf, Folie 6

Freier Programmspeicher kann nicht für Daten genutzt werden, freier Datenspeicher nicht für Programme. Selbstmodifizierender Code ist nicht möglich. Moderne Prozessoren verwenden eine Mischform aus Harvard- und Von-Neumann-Architektur.

## Karte: Aufbau eines typischen PCs
quelle: 02_rabs_vna1.pdf, Folien 10-11

Stark vereinfacht: Der Prozessor besteht aus Rechenwerk (Register wie R1, R2, R3 und Stack Pointer SP) und Leitwerk (Befehlszähler PC, Programmstatuswort PSW). Prozessor, Speicher und die Ein-/Ausgabe-Controller der Geräte hängen am Systembus mit Adressen, Steuersignalen und Daten. Realistischer: Die CPU enthält CPU-Kern, L1-Befehls- und L1-Daten-Cache, ein L2-Cache-Interface und ein Systembus-Interface; der Chipsatz verbindet Hauptspeicher, Grafikbeschleuniger (AGP) und E/A-Bus (PCI, z. B. USB, IDE, Ethernet), über eine Bus-Brücke auch ältere E/A-Busse (ISA/EISA, z. B. Parallel, RS232).

## Karte: CPU und ihre Komponenten
quelle: 02_rabs_vna1.pdf, Folien 13-14

Die CPU führt Programme aus, deren Anweisungen im Hauptspeicher liegen. Zu ihren Komponenten gehören Steuerwerk, ALU, Register, Befehlszähler (PC) und Instruction Register (IR).

## Karte: Fetch-Decode-Execute-Zyklus
quelle: 01_rabs_grundlagen.pdf, Folie 19

Der Zyklus lädt den nächsten Befehl in das Befehlsregister, erhöht den Programmzähler, bestimmt den Befehlstyp, lädt Operanden, führt den Befehl aus und beginnt danach erneut.

## Karte: Operationen und Datenpfad
quelle: 02_rabs_vna1.pdf, Folien 15-16

Eine CPU führt Lade- und Speicheroperationen, arithmetische und logische Operationen, bedingte und unbedingte Sprünge (Änderung des Befehlszählers) sowie Unterprogramm-Aufrufe und -Rücksprünge aus. Im Datenpfad holt die ALU die Operanden aus den Registern, führt die Operation aus und schreibt das Ergebnis in ein Register.

## Karte: Pipeline, superskalar und Mehrkern
quelle: 02_rabs_vna1.pdf, Folien 18-20

Pipeline-Prozessoren besitzen getrennte Hol-, Dekodier- und Ausführungseinheiten und können mehrere Befehle parallel bearbeiten. Superskalare Prozessoren besitzen mehrere Ausführungseinheiten. Mehrkern-Prozessoren enthalten mehrere komplette Prozessoren.

## Karte: Speicherhierarchie und Cache
quelle: 02_rabs_vna1.pdf, Folien 22-24

Speicher soll sehr schnell, sehr groß und billig sein; keine Technologie erfüllt alles zugleich. Caches speichern häufig benötigte Daten in schnellem Speicher. L1-Cache liegt typischerweise innerhalb der CPU, L2-Cache ist größer und langsamer.

## Karte: Controller und E/A-Geräte
quelle: 02_rabs_vna1.pdf, Folien 26-28

Controller steuern Geräte weitgehend autonom, besitzen Register für Kommandos, Daten und Status und können Interrupts an die CPU senden. E/A-Geräte werden in zeichenorientierte und blockorientierte Geräte unterschieden.

## Karte: Kernmodus, Benutzermodus und Interrupts
tag: wichtig
quelle: 02_rabs_vna1.pdf, Folien 30-34

CPUs besitzen Kernmodus und Benutzermodus; der Modus wird im Programmstatuswort durch ein Bit festgehalten. Privilegierte Befehle im Benutzermodus führen zu einer Exception. Interrupts reagieren auf externe asynchrone Ereignisse.

## Karte: Kontrollierter Moduswechsel
quelle: 02_rabs_vna1.pdf, Folie 32

Ein Programm wechselt kontrolliert mit einem speziellen Befehl in den Systemmodus (Systemaufruf, Trap, System Call): Der Prozessor sichert den PC als Rückkehradresse im Keller, schaltet in den Systemmodus und verzweigt an eine vordefinierte Adresse im Betriebssystem. Dieses analysiert und führt den Aufruf aus; ein Rückkehrbefehl schaltet wieder in den Benutzermodus.

## Karte: Unterbrechungen des Programmablaufs
tag: wichtig
quelle: 02_rabs_vna1.pdf, Folie 35

Unterbrechungen sind synchron oder asynchron. Synchron sind die Ausnahme (Exception) und der Systemaufruf (Trap), asynchron ist der Interrupt.

## Frage: Was ist der Von-Neumann-Flaschenhals?
id: 1ho1pm1
quelle: 01_rabs_grundlagen.pdf, Folie 4

Der gesamte Datenverkehr von und zur CPU läuft über den internen Bus zwischen CPU und Speicher; dessen Transfergeschwindigkeit ist langsamer als die Verarbeitungsgeschwindigkeit der CPU.

## Frage: Welche Idee verfolgt die Harvard-Architektur?
id: dn4sa5
quelle: 01_rabs_grundlagen.pdf, Folien 5-6

Sie trennt Befehls- und Datenspeicher logisch und physisch, sodass Befehle und Daten gleichzeitig geladen oder geschrieben werden können.

## Frage: Wie läuft der Fetch-Decode-Execute-Zyklus ab?
id: 12xn94u
quelle: 01_rabs_grundlagen.pdf, Folie 19

Befehl laden, Programmzähler hochzählen, Befehlstyp bestimmen, Operanden laden, Befehl ausführen und von vorne beginnen.

## Frage: Wie arbeitet die einfachste Variante der Adressumsetzung durch die MMU?
id: 1g1ekof
quelle: 01_rabs_grundlagen.pdf, Folie 26

Mit Basis- und Limit-Register: physische Adresse = Basis + virtuelle Adresse; das Limit-Register legt die Länge des zugreifbaren Adressraums fest.

## Frage: Welche Komponenten nennt die Von-Neumann-Architektur?
id: 1totjes
quelle: 02_rabs_vna1.pdf, Folie 5

ALU, Control Unit, Memory, I/O-Unit und Bus-System.

## Frage: Wofür steht ALU und welche Aufgabe hat sie?
id: jm4it4
quelle: 02_rabs_vna1.pdf, Folie 5

ALU steht für Arithmetic Logic Unit; sie führt Rechenoperationen und logische Verknüpfungen aus.

## Frage: Welche Signale überträgt der Systembus eines typischen PCs?
id: 1beftos
quelle: 02_rabs_vna1.pdf, Folie 10

Adressen, Steuersignale und Daten.

## Frage: Was bedeutet PC in der CPU?
id: 1g8xxrq
quelle: 02_rabs_vna1.pdf, Folie 14

PC bedeutet Program Counter beziehungsweise Befehlszähler.

## Frage: Welche Operationen führt eine CPU aus?
id: 1p0x33y
quelle: 02_rabs_vna1.pdf, Folie 15

Lade- und Speicheroperationen, arithmetische und logische Operationen, bedingte und unbedingte Sprünge sowie Unterprogramm-Aufrufe und -Rücksprünge.

## Frage: Was beschreibt der Datenpfad?
id: czpf6q
quelle: 02_rabs_vna1.pdf, Folie 16

Die ALU holt die Operanden aus den Registern, führt die Operation aus und schreibt das Ergebnis in ein Register.

## Frage: Was unterscheidet Pipeline-, superskalare und Mehrkern-Prozessoren?
id: u1z8tj
quelle: 02_rabs_vna1.pdf, Folien 18-20

Pipeline: getrennte Hol-, Dekodier- und Ausführungseinheiten, mehrere Befehle werden parallel bearbeitet. Superskalar: mehrere Ausführungseinheiten, oft werden mehrere Befehle gleichzeitig geholt und gepuffert. Mehrkern: mehrere komplette Prozessoren auf einem Chip.

## Frage: Welche Anforderungen an Speicher führen zur Speicherhierarchie?
id: cl0ad7
quelle: 02_rabs_vna1.pdf, Folie 22

Speicher soll sehr schnell (schneller als ein Befehl), sehr groß und spottbillig sein; keine Speichertechnologie erfüllt aktuell alle Anforderungen.

## Frage: Wie groß und wie schnell sind L1- und L2-Cache typischerweise?
id: 2ci059
quelle: 02_rabs_vna1.pdf, Folie 24

L1-Cache: typischerweise 16 KB innerhalb der CPU, Zugriff ohne Verzögerung. L2-Cache: typischerweise mehrere MB, Zugriff in 1 bis 2 Taktzyklen.

## Frage: Was leistet ein Gerätecontroller?
id: 1mbmi6w
quelle: 02_rabs_vna1.pdf, Folie 26

Spezielle Hardware, oft mit eigenem Mikroprozessor, die ein Gerät weitgehend autonom steuert; sie hat Register für Kommandos, Daten und Status und kann einen Interrupt an die CPU senden, wenn Eingabedaten vorhanden sind oder eine Ausgabe abgeschlossen ist.

## Frage: Was unterscheidet speicherbasierte E/A von einem separaten E/A-Adressraum?
id: h14oq0
quelle: 02_rabs_vna1.pdf, Folie 27

Speicherbasiert: Die Controller-Register sind in den Speicheradressraum eingeblendet, Zugriff mit normalen Lese-/Schreibbefehlen, Schutz über die MMU. Separater E/A-Adressraum (bei x86 üblich): Zugriff nur über spezielle privilegierte E/A-Befehle. Beide Varianten sind in Gebrauch.

## Frage: Was unterscheidet zeichen- und blockorientierte E/A-Geräte?
id: 357k2k
quelle: 02_rabs_vna1.pdf, Folie 28

Zeichenorientiert: Ein-/Ausgabe einzelner Zeichen, z. B. Tastatur, Maus, Modem. Blockorientiert: größere Datenblöcke, z. B. Festplatte, Netzwerk; Vorteil ist eine geringere Interrupt-Rate.

## Frage: Worin unterscheiden sich Kernmodus und Benutzermodus?
id: d8h0fn
quelle: 02_rabs_vna1.pdf, Folie 30

Im Kernmodus hat das Betriebssystem unbeschränkten Zugriff auf Rechnerkomponenten. Im Benutzermodus ist der Zugriff eingeschränkt, Speicher ist nur über Adressabbildung zugreifbar und privilegierte Befehle sind nicht erlaubt.

## Frage: Wo wird der Ausführungsmodus der CPU festgehalten?
id: 1dppldg
quelle: 02_rabs_vna1.pdf, Folie 30

In der Hardware im Programmstatuswort (PSW) durch 1 Bit.

## Frage: Wann entsteht eine Exception im Benutzermodus?
id: 1xffzve
quelle: 02_rabs_vna1.pdf, Folie 31

Eine Exception entsteht, wenn im Benutzermodus ein privilegierter Befehl ausgeführt wird.

## Frage: Was passiert, wenn im Benutzermodus ein privilegierter Befehl ausgeführt wird?
id: y49vcp
quelle: 02_rabs_vna1.pdf, Folie 31

Es entsteht eine Ausnahme: Der Prozessor bricht den Befehl ab, sichert den PC im Keller und setzt die Ausführung an einer vordefinierten Adresse im Systemmodus fort. Das Betriebssystem behandelt die Ausnahme, z. B. durch Abbruch des Prozesses; ein Rückkehrbefehl schaltet zurück in den Benutzermodus.

## Frage: Wie läuft ein Systemaufruf (Trap) auf Prozessorebene ab?
id: 6yd3q5
quelle: 02_rabs_vna1.pdf, Folie 32

PC als Rückkehradresse im Keller sichern, in den Systemmodus schalten, an eine vordefinierte Adresse im Betriebssystem verzweigen; das Betriebssystem analysiert und führt den Aufruf aus; ein Rückkehrbefehl schaltet zurück in den Benutzermodus.

## Frage: Was ist die Hauptanwendung von Interrupts laut Folien?
id: m29te0
quelle: 02_rabs_vna1.pdf, Folie 33

Ein-/Ausgabe; der Prozessor kann auf externe asynchrone Ereignisse reagieren und in eine Unterbrechungsbehandlungsroutine verzweigen.

## Frage: Wie läuft die Behandlung eines Interrupts ab?
id: gxctsr
quelle: 02_rabs_vna1.pdf, Folie 33

Das Unterbrechungssignal wird nach jedem Befehl abgefragt. Ist es gesetzt, sichert der Prozessor den PC im Keller, schaltet in den Systemmodus und verzweigt in die Unterbrechungsbehandlungsroutine (ISR); danach schaltet ein Rückkehrbefehl zurück in den Benutzermodus.

## Frage: Was ist ein Unterbrechungsvektor?
id: 19oyc2f
quelle: 02_rabs_vna1.pdf, Folie 34

Ein Unterbrechungsvektor ist eine Tabelle von Adressen, über die Interrupts Behandlungsroutinen zugewiesen werden.

## Frage: Können Interrupts ausgeschaltet werden?
id: 1gkuno4
quelle: 02_rabs_vna1.pdf, Folie 34

Ja, Interrupts können maskiert werden; das ist ein privilegierter Befehl.

## Frage: Welche Unterbrechungen des Programmablaufs sind synchron, welche asynchron?
id: 1ovyekx
quelle: 02_rabs_vna1.pdf, Folie 35

Synchron: Ausnahme (Exception) und Systemaufruf (Trap). Asynchron: Interrupt.
