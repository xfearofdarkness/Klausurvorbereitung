---
id: grundlagen
title: Grundlagen & Definitionen
icon: 🧩
---

## Karte: Verteilte Systeme
tag: def
quelle: 02_vs-overview.pdf, Folie 5

Geografische Verteilung von Komponenten, kein gemeinsamer Speicher, dezentrale Administration. Die Komponenten kooperieren, um ein gemeinsames Ziel zu erreichen.

## Karte: Weitere Definitionen
tag: def
quelle: 02_vs-overview.pdf, Folie 6

<b>Tanenbaum:</b> Eine Sammlung unabhängiger Computer, die dem Benutzer als ein einziges, verbundenes System erscheinen. <b>Coulouris:</b> Ein System, in dem Komponenten auf vernetzten Computern miteinander kommunizieren und ihre Aktionen durch Nachrichtenübermittlung koordinieren. <b>Tari:</b> Eine Ansammlung autonomer Computer, über ein Netzwerk verbunden, mit Software zur Koordination von Aktivitäten und gemeinsamen Ressourcennutzung. <b>Lamport:</b> Ein System, mit dem man nicht arbeiten kann, weil ein Computer defekt ist, von dem noch niemand etwas gehört hat.

## Karte: Anwendungsdomänen
quelle: 02_vs-overview.pdf, Folien 8-9

Finanz und Handel (eCommerce, ePayment, Online-Banking), Informationsgesellschaft (Web, Social Media), Kreativbereich (Online Gaming, Streaming, User Created Content), Healthcare (elektronische Patientenakte, Telemedizin, Assisted Living), Bildung (E-Learning), Transport und Logistik (Navigation, Track'n'Trace), Wissenschaft (Grid/Cluster, Big Data), Umwelt (sensorbasierte Frühwarnsysteme).

## Karte: Beispiel: Google Web Search
tag: beispiel
quelle: 02_vs-overview.pdf, Folie 10

Das größte Verteilte System der Geschichte: ca. 10 Milliarden Suchanfragen/Monat, Indizierung von über 63 Milliarden Webseiten. Dazu gehören eine physikalische Infrastruktur aus vernetzten Knoten in Datenzentren weltweit, ein verteiltes Dateisystem mit sehr schnellen Zugriffen, verteilter Speicher, verteilte Behandlung von Locks und Agreement sowie ein Programmiermodell für verteilte und parallele Berechnungen.

## Karte: Was ist KEIN Verteiltes System?
tag: wichtig
quelle: 02_vs-overview.pdf, Folie 12

Zentraler Mainframe mit sternförmig verbundenen Terminals ohne lokale Funktionalität (Thin Clients); Shared-Memory-Hypercube (Multiprozessorsystem, das per Shared Memory kommuniziert); Workstation-Cluster ohne zielgerichtete Zusammenarbeit.

## Karte: Funktionsprinzipien
tag: wichtig
quelle: 02_vs-overview.pdf, Folie 13

Ein Verteiltes System besteht aus einer Ansammlung rechnender Elemente (Knoten). Ein Knoten reagiert auf eintreffende Nachrichten, verarbeitet sie und versendet in Reaktion wiederum Nachrichten. Da die Knoten unabhängig arbeiten, gibt es keine gemeinsame global gültige Zeit. Es muss Mechanismen geben, die Zugehörigkeit, Zugang und Verlassen des Systems regeln. Die Verteilung soll transparent bleiben. Das System soll einheitlich erscheinen (Verteilungstransparenz).

## Karte: Konsequenzen der Verteilung
tag: wichtig
quelle: 02_vs-overview.pdf, Folie 14

<b>Nebenläufigkeit</b> ist der Normalfall. Die Knoten arbeiten parallel. <b>Keine globale Uhr:</b> Die Knoten koordinieren ihre Aktivitäten in Form von versendeten Nachrichten. <b>Unabhängige Fehlerfälle:</b> Es können viele Fehlersituationen auftreten; zu den Eigenschaften Verteilter Systeme gehört, dass auch in solchen Fällen Funktionalität erbracht werden kann.

## Karte: Historische Entwicklung
quelle: 02_vs-overview.pdf, Folien 16-17

Seit Mitte der 80er Jahre Trend zur Abkehr von zentralisierten Systemen. Einflussfaktoren: schnellere und effizientere Prozessoren bei sinkenden Preisen, schnellere lokale Datennetze (LANs, z. B. Ethernet), Software Engineering mit Modularisierung und Objektorientierung (RPC, Distributed Objects, Service Orientation). Schritte: 1. Klassische Verteilte Systeme (RPC, RMI, JMS), 2. Plattformen (Middleware wie CORBA, Application Server, Componentware, SOA), 3. Web-Technologien (XML, Web-Services, Cloud Computing), 4. Mobile Computing.

## Karte: Architektur (Motivation)
tag: def
quelle: 02_vs-overview.pdf, Folien 19-20

Systemarchitektur ist ein Ansatz zur methodischen Beschreibung komplexer und insbesondere verteilter Systeme. Verteilte Systeme sind heterogen und nicht durchgängig in einer einzigen Programmiersprache realisiert. Deshalb sind abstraktere Beschreibungskonzepte notwendig. Wichtige Aspekte: Struktur, Verhalten, Kommunikation, Deployment. Elemente von Architekturbeschreibungen: Komponenten, Schnittstellen, Implementierungen, Relationen, Kommunikation, Constraints.

## Karte: OSI-Modell
tag: def
quelle: 02_vs-overview.pdf, Folie 21

Open Systems Interconnection Model (1983). Anwendungsbezogene Schichten: 5–7. Schicht 4: Communication Services (TCP/UDP). Schicht 3: Routing, Addressing (z. B. IP-Protokoll). Schicht 2: Data Security. Schicht 1: Physical Transmission (Interaktion mit der Hardware).

## Karte: Middleware
tag: def
quelle: 02_vs-overview.pdf, Folien 22-24

Allgemeine Programme, die zwischen Applikationen vermitteln und dabei die Komplexität des Gesamtsystems verbergen. Eine Middleware implementiert i. d. R. die Grundlagen für Transparenz in Verteilten Systemen und ist normalerweise in den oberen Schichten des OSI-Modells angesiedelt. Sie spielt eine ähnliche Rolle wie das Betriebssystem für laufende Prozesse und bietet generische Dienste an: Kommunikation zwischen Anwendungen, Security, Verwaltungsdienste, Fehlerbehandlung und Robustheit. Oft fungiert sie als Container mit Infrastrukturdiensten.

## Karte: Kommunikation und weitere Plattformdienste
quelle: 02_vs-overview.pdf, Folien 25-26

Kommunikation spielt sich auf den Anwendungsschichten ab und dient der Koordination zwischen Prozessen. Das OSI-Modell ist zu komplex, um Kommunikation auf Anwendungsebene zu beschreiben. Daher das Client-Server-Modell: Server sind Prozesse, die Dienste für andere Prozesse (Clients) anbieten. Weitere Plattformdienste: Transaktionen (alles-oder-nichts), Service Composition (Dienste kombinieren) und Reliability (Zuverlässigkeit der Nachrichtenübermittlung).

## Frage: Wie sind Verteilte Systeme definiert?
id: 1k89eo3
quelle: 02_vs-overview.pdf, Folie 5

Geografische Verteilung von Komponenten, kein gemeinsamer Speicher, dezentrale Administration. Die Komponenten kooperieren, um ein gemeinsames Ziel zu erreichen.

## Frage: Wie definiert Tanenbaum ein verteiltes System?
id: 19t42py
quelle: 02_vs-overview.pdf, Folie 6

Eine Sammlung unabhängiger Computer, die dem Benutzer als ein einziges, verbundenes System erscheinen.

## Frage: Nennen Sie Beispiele für Systeme, die KEINE Verteilten Systeme sind.
id: pylbeg
quelle: 02_vs-overview.pdf, Folie 12

Zentraler Mainframe mit Terminals ohne lokale Funktionalität (Thin Clients), Shared-Memory-Hypercube, Workstation-Cluster ohne zielgerichtete Zusammenarbeit.

## Frage: Was bedeutet Verteilungstransparenz?
id: 3mfyw3
quelle: 02_vs-overview.pdf, Folie 13

Verteilungstransparenz bedeutet, dass die Verteilung verborgen bleibt und das System einheitlich erscheinen soll.

## Frage: Welche Konsequenzen ergeben sich aus der Verteilung?
id: 2gkkxo
quelle: 02_vs-overview.pdf, Folie 14

Nebenläufigkeit ist der Normalfall (Knoten arbeiten parallel), es gibt keine globale Uhr (Koordination über Nachrichten) und unabhängige Fehlerfälle (Funktionalität soll auch bei Fehlern erbracht werden).

## Frage: Welche Schritte der historischen Entwicklung Verteilter Systeme unterscheiden die Folien?
id: 1jc8con
quelle: 02_vs-overview.pdf, Folie 17

1. Klassische Verteilte Systeme (nebenläufige Betriebssysteme, RPC/RMI/JMS), 2. Plattformen (Middleware wie CORBA, Application Server, Componentware, SOA), 3. Web-Technologien (XML, Web-Services, Cloud), 4. Mobile Computing.

## Frage: Welche Elemente enthalten Architekturbeschreibungen?
id: 1jc67t6
quelle: 02_vs-overview.pdf, Folie 20

Komponenten, Schnittstellen, Implementierungen, Relationen zwischen den Komponenten, Kommunikation und Constraints.

## Frage: Welche Aufgaben haben OSI-Schicht 4 und Schicht 3?
id: 173ttkp
quelle: 02_vs-overview.pdf, Folie 21

Schicht 4 bietet Communication Services wie TCP/UDP; Schicht 3 übernimmt Routing und Addressing mit IP.

## Frage: Was ist Middleware und wo ist sie angesiedelt?
id: 59hady
quelle: 02_vs-overview.pdf, Folien 22-24

Programme, die zwischen Applikationen vermitteln und die Komplexität des Gesamtsystems verbergen. Sie implementiert die Grundlagen für Transparenz und ist in den oberen Schichten des OSI-Modells angesiedelt; für Anwendungen spielt sie eine ähnliche Rolle wie das Betriebssystem für Prozesse.

## Frage: Warum wird das Client-Server-Modell eingeführt, obwohl es das OSI-Modell gibt?
id: 1byu62d
quelle: 02_vs-overview.pdf, Folie 25

Das OSI-Modell ist zu komplex, um die Kommunikation zwischen Prozessen auf der Anwendungsebene zu beschreiben. Verteilte Systeme werden als Menge von Prozessen betrachtet; Server bieten Dienste für Clients an, Kommunikation wird über einfache Routinen ermöglicht.

## Frage: Welche Plattformdienste nennen die Folien neben Kommunikation?
id: 1b2dmue
quelle: 02_vs-overview.pdf, Folie 26

Neben Kommunikation nennen die Folien Transaktionen, Service Composition und Reliability.
