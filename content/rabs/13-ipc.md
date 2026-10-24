---
id: ipc
title: IPC & Kooperation
icon: 📡
---

## Karte: Kommunikation und Kooperation
quelle: 10_rabs-ipc.pdf, Folien 4-5

Prozessinteraktion hat einen zeitlichen Aspekt der Ablaufabstimmung und einen funktionalen Aspekt des Informationsaustauschs. Kommunikation und Kooperation benötigen zeitliche Abstimmung zwischen den Interaktionspartnern.

## Karte: Kommunikation und Synchronisation
tag: wichtig
quelle: 10_rabs-ipc.pdf, Folie 7

Durch das Kausalitätsprinzip sind Kommunikation und Synchronisation verbunden: Wenn A eine Information von B benötigt, muss A warten, bis B diese Information bereitstellt. Nachrichtenbasierte Kommunikation impliziert daher Synchronisation.

## Karte: Nachrichtenbasierte und speicherbasierte Kommunikation
quelle: 10_rabs-ipc.pdf, Folie 8

Nachrichtenbasierte Kommunikation sendet und empfängt Nachrichten über das Betriebssystem und ist auch über Rechnergrenzen hinweg möglich; Synchronisation ist implizit. Speicherbasierte Kommunikation nutzt gemeinsamen Speicher; Synchronisation muss explizit programmiert werden.

## Karte: send und receive
tag: def
quelle: 10_rabs-ipc.pdf, Folie 10

Nachrichtenaustausch wird abstrakt durch <code>send(Ziel, Nachricht)</code> und <code>receive(Quelle, Nachricht)</code> beschrieben. Ein Empfang ist erst nach dem Senden möglich; <code>receive</code> blockiert, bis eine Nachricht vorhanden ist.

## Karte: Producer/Consumer mit Nachrichten
quelle: 10_rabs-ipc.pdf, Folie 11

Typisch puffert das Betriebssystem Nachrichten bis zum Empfang. Die Puffergröße wird vom Betriebssystem bestimmt und ist meist konfigurierbar. Ist der Puffer voll, wird der Sender in <code>send()</code> blockiert.

## Karte: Merkmale von Kommunikationsbeziehungen
quelle: 10_rabs-ipc.pdf, Folie 12

Kommunikationsbeziehungen unterscheiden sich nach Anzahl der Teilnehmer, zeitlicher Kopplung (synchron oder asynchron), Gleichzeitigkeit von Hin- und Rückkanal (unidirektional oder bidirektional), räumlichen Aspekten (lokal oder entfernt) und direkter oder indirekter Kommunikation.

## Karte: Direkte und indirekte Kommunikation
quelle: 10_rabs-ipc.pdf, Folien 14-15

Bei direkter Kommunikation wird die Nachricht unmittelbar aus dem Speicherbereich des Senders in einen Speicherbereich des Empfängers geschrieben. Bei indirekter Kommunikation über Mailboxen realisiert das Betriebssystem eine Warteschlange.

## Karte: Mailbox und Port
quelle: 10_rabs-ipc.pdf, Folien 15-16

Eine Mailbox ist eine Warteschlange im Speicherbereich des Betriebssystems und realisiert n:m-Kommunikation. Ein Port ist eine Mailbox, die einem einzelnen Empfänger zugeordnet ist, realisiert m:1-Kommunikation und wird besonders für Client-Server-Kommunikation eingesetzt.

## Karte: Client-Server
quelle: 10_rabs-ipc.pdf, Folie 17

Der Server stellt einen Port zur Verfügung, über den Clients ihre Aufträge senden, z. B. Printserver für Druckaufträge oder Fileserver für Zugriffe auf zentrale Dateien.

## Karte: Zeitliche Kopplung
quelle: 10_rabs-ipc.pdf, Folie 18

Synchrones Senden blockiert den Sender, bis der Empfänger die Information entgegengenommen hat. Asynchrones Senden setzt sofort fort. Synchrones Empfangen blockiert bis zum Eintreffen der Information; asynchrones Empfangen prüft, ob etwas empfangen wurde, und arbeitet weiter.

## Karte: Asynchrone und synchrone Nachrichten, Aufträge
tag: wichtig
quelle: 10_rabs-ipc.pdf, Folien 22-25

Asynchrone Message: Der Sender wird nicht mit dem Empfänger synchronisiert; das Betriebssystem muss die Nachricht puffern, falls der Empfänger noch nicht wartet. Synchrone Message: Der Sender blockiert, bis die Nachricht empfangen ist (Rendezvous), es ist keine Pufferung nötig. Synchroner Auftrag: Der Empfänger sendet ein Resultat zurück, der Sender blockiert bis dahin. Erteilt der Sender mehrere Aufträge gleichzeitig, ist Parallelverarbeitung möglich.

## Karte: Pipes
tag: def
quelle: 10_rabs-ipc.pdf, Folien 26-28

Pipes übertragen Sequenzen von Bytes in FIFO-Reihenfolge zwischen Prozessen. Sie haben keine Nachrichtengrenzen oder Längenbeschränkungen. Eine Pipe ist ein unidirektionaler Datenstrom.

## Karte: Unbenannte und benannte Pipes
quelle: 10_rabs-ipc.pdf, Folien 29-30

Eine unbenannte Pipe kennt zunächst nur der erzeugende Prozess; ihre Dateideskriptoren werden an Kindprozesse vererbt. Eine benannte Pipe ist als spezielle Datei im Dateisystem sichtbar und wird wie eine normale Datei mit <code>open</code>, <code>close</code>, <code>read</code> und <code>write</code> benutzt. Erzeugt wird sie mit dem Systemaufruf <code>mkfifo(char *name, mode_t mode)</code>, unter Linux auch mit dem Shell-Kommando <code>mkfifo</code>; gelöscht wird sie mit normalen Dateisystem-Operationen.

## Karte: Pipes in der Shell
quelle: 10_rabs-ipc.pdf, Folie 31

Der Pipe-Operator unter Linux ist <code>|</code>. Beispiele sind <code>cat foo.txt | lpr -Php1320</code> und <code>set | grep PATH</code>, bei denen Ausgabe eines Prozesses an den nächsten Prozess übergeben wird.

## Karte: Sockets
quelle: 10_rabs-ipc.pdf, Folien 32-34

Sockets sind eine allgemeine Schnittstelle zur Interprozesskommunikation, nicht auf lokale Mechanismen beschränkt. Sie realisieren protokollunabhängigen Zugriff auf Dienste, die normalerweise von einem Transportprotokoll bereitgestellt werden.

## Karte: Shared Memory
tag: wichtig
quelle: 10_rabs-ipc.pdf, Folien 38-40

Shared Memory muss beim Betriebssystem von Sender und Empfänger explizit angefordert werden. Die Adresse des gemeinsamen Speichersegments wird in den Prozessadressraum integriert; Sender und Empfänger müssen denselben Datentyp nutzen und synchronisiert zugreifen.

## Karte: Shared Memory in UNIX
quelle: 10_rabs-ipc.pdf, Folie 44

UNIX verwendet <code>shmget</code> zum Anfordern oder Erzeugen, <code>shmat</code> zum Einbinden, <code>shmdt</code> zum Entfernen und <code>shmctl</code> für Steuerfunktionen. Mit <code>IPC_RMID</code> wird das Segment gelöscht.

## Frage: Warum sind Kommunikation und Synchronisation verbunden?
id: 12dra5b
quelle: 10_rabs-ipc.pdf, Folie 7

Wenn ein Prozess eine Information von einem anderen benötigt, muss er warten, bis diese Information bereitgestellt ist.

## Frage: Was unterscheidet nachrichtenbasierte von speicherbasierter Kommunikation?
id: 65tzzb
quelle: 10_rabs-ipc.pdf, Folie 8

Nachrichtenbasierte Kommunikation läuft über das Betriebssystem und synchronisiert implizit; speicherbasierte Kommunikation nutzt gemeinsamen Speicher und erfordert explizite Synchronisation.

## Frage: Was sind send und receive?
id: 5vd347
quelle: 10_rabs-ipc.pdf, Folie 10

send und receive sind abstrakte Primitive für Nachrichtenaustausch.

## Frage: Was ist eine Mailbox?
id: 1ax98my
quelle: 10_rabs-ipc.pdf, Folie 15

Eine Warteschlange im Speicherbereich des Betriebssystems, über die mehrere Sender und Empfänger n:m kommunizieren können.

## Frage: Was ist ein Port im IPC-Kontext?
id: gt3bly
quelle: 10_rabs-ipc.pdf, Folie 16

Ein Port ist eine Mailbox, die einem einzelnen Empfänger zugeordnet ist; sie steht für m:1-Kommunikation.

## Frage: Warum muss bei asynchronen Nachrichten gepuffert werden, bei synchronen nicht?
id: 1sebxzj
quelle: 10_rabs-ipc.pdf, Folien 22-23

Asynchron wird der Sender nicht mit dem Empfänger synchronisiert, das Betriebssystem muss die Nachricht halten, bis der Empfänger sie abholt. Synchron blockiert der Sender, bis die Nachricht empfangen ist (Rendezvous).

## Frage: Was ist ein synchroner Auftrag?
id: 21b2ag
quelle: 10_rabs-ipc.pdf, Folie 24

Der Empfänger sendet ein Resultat zurück, und der Sender ist blockiert, bis das Resultat vorliegt.

## Frage: Was ist eine Pipe?
id: 1yheh0
quelle: 10_rabs-ipc.pdf, Folien 26-28

Ein unidirektionaler Datenstrom, der Bytes in FIFO-Reihenfolge zwischen Prozessen überträgt.

## Frage: Was unterscheidet unbenannte von benannten Pipes?
id: 16ji0cn
quelle: 10_rabs-ipc.pdf, Folien 29-30

Unbenannte Pipes kennt zunächst nur der erzeugende Prozess, die Deskriptoren werden an Kinder vererbt. Benannte Pipes sind als spezielle Datei im Dateisystem sichtbar und werden mit <code>mkfifo</code> erzeugt.

## Frage: Was ist Shared Memory?
id: p63mh3
quelle: 10_rabs-ipc.pdf, Folien 38-40

Shared Memory ist gemeinsamer Speicher im Prozessadressraum; der Zugriff muss synchronisiert werden.

## Frage: Welche UNIX-Funktionen nennt der Foliensatz für Shared Memory?
id: dok6x3
quelle: 10_rabs-ipc.pdf, Folie 44

<code>shmget</code>, <code>shmat</code>, <code>shmdt</code> und <code>shmctl</code>.
