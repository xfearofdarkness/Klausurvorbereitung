---
id: architektur
title: Architektur & Architekturstile
icon: 🏛️
---

## Karte: Architectural Views (4+1)
tag: def
quelle: 03-ds-architektur.pdf, Folie 5

Häufig werden 4+1 Sichten unterschieden: <b>Logical View</b> (Funktionalität für den Endnutzer), <b>Development View</b> (Implementierungssicht der Entwickler), <b>Process View</b> (Prozesse im System), <b>Physical View</b> (Verteilung und Deployment der Software auf Hardware-Knoten) und <b>Scenario</b> als fünfte Sicht (relevante Abläufe und Nutzerinteraktion). Quelle: Kruchten, The 4+1 View Model of Architecture (IEEE Software, 1995).

## Karte: Physikalisches Modell und drei Generationen
tag: def
quelle: 03-ds-architektur.pdf, Folie 6

Das Physikalische Modell umfasst die Hardware der Knoten und die Netzwerktechnologie; Komponenten koordinieren sich durch Nachrichtenaustausch. Drei Generationen: <b>Frühe verteilte Systeme</b> (70er/80er: 10–100 Knoten im LAN, z. B. geteilte Drucker und Dateiserver), <b>Internet-basierte Systeme</b> (90er: große globale Systeme mit großer Heterogenität), <b>heutige Systeme</b> (mobile Knoten, Ubiquitous Computing, Cloud).

## Karte: Architekturstil, Komponente und Schnittstelle
tag: def
quelle: 03-ds-architektur.pdf, Folie 8

Ein Architekturstil beschreibt: die enthaltenen Komponenten, die Verbindungen/Beziehungen zwischen ihnen, die Nachrichten und ausgetauschten Daten sowie Bedingungen/Invarianten über Struktur und Verhalten. Eine Komponente ist eine modulare Einheit mit genau definierten Schnittstellen. Solange die Schnittstellen unverändert bleiben, kann sie ausgetauscht werden, insbesondere im laufenden Betrieb.

## Karte: Architektur-Elemente
tag: def
quelle: 03-ds-architektur.pdf, Folien 10-11

<b>Prozesse</b> kommunizieren über Interprozess-Kommunikation (IPC); in vielen Fällen werden sie in Threads verfeinert, die die eigentlichen Endpunkte der Kommunikation sind. <b>Verteilte Objekte</b> kapseln Funktionalität und kommunizieren durch Methodenaufruf über Prozess- und Rechnergrenzen. <b>Komponenten</b> kapseln ebenfalls Funktionalität, sind aber Teil einer Plattform oder eines Frameworks (z. B. EJB). <b>Web Services</b> sind über Web-Standards aufrufbar (z. B. REST über http).

## Karte: Kommunikationsparadigmen
tag: wichtig
quelle: 03-ds-architektur.pdf, Folien 12, 14

<b>Interprozess-Kommunikation (IPC):</b> niedrigschwelliger Support für Nachrichtenaustausch (z. B. Sockets). <b>Remote Invocation:</b> verbreitetste Art (CORBA, RPC, RMI, SOA). Synchrone Kommunikation nach dem Vorbild des Prozeduraufrufs; dazu gehören Request-Reply-Protokolle, RPC (Orts- und Zugriffstransparenz) und RMI (RPC im OO-Paradigma, teils Objekte als Parameter). <b>Indirekte Kommunikation:</b> weitergehende Abstraktionen (Gruppen, Topics, Queues); Sender und Empfänger sind weitgehend entkoppelt (Orts- und Zeittransparenz).

## Karte: Indirekte Kommunikation: Formen
tag: def
quelle: 03-ds-architektur.pdf, Folie 15

<b>Gruppen-Kommunikation:</b> 1:n. Empfänger erhalten Nachrichten als Gruppenmitglieder. <b>Publish-Subscribe:</b> Empfänger melden sich für Themen an. <b>Message Queues:</b> 1:1. Die Queue entkoppelt Sender und Empfänger. <b>Tuple Spaces:</b> Datentupel werden in einem allgemein zugänglichen Speichersegment persistent gespeichert. <b>Distributed Shared Memory (DSM):</b> verschiedene Prozesse greifen auf geteilte Datenstrukturen zu.

## Karte: Client-Server und Peer-to-Peer
tag: def
quelle: 03-ds-architektur.pdf, Folien 16-17

<b>Client-Server:</b> Clients interagieren mit Servern über Rechnergrenzen hinweg, um auf Ressourcen zuzugreifen. Die prominenteste und am häufigsten gebrauchte Architektur. <b>Peer-to-Peer:</b> Alle Prozesse haben die gleichen Verantwortlichkeiten und laufen mit dem gleichen Programm. Motivation: Client-Server skaliert schlecht (Last auf zentralem Server); Peers sind Client und Server zugleich, die Verfügbarkeit wächst mit der Nachfrage; Ressourcen werden zwischengespeichert und repliziert (z. B. Napster, BitTorrent).

## Karte: Deployment-Strategien
tag: def
quelle: 03-ds-architektur.pdf, Folien 18-22

Das Deployment beschreibt die Zuordnung von Prozessen, Objekten usw. zu den physikalischen Knoten; es beeinflusst Eigenschaften wie Performance stark. Standard-Strategien: Services auf mehreren Servern (Replikation oder Datenpartitionierung), <b>Caching</b> (Zwischenspeicher für bereits angefragte Daten, z. B. Browser-Historie), <b>mobiler Code</b> (Code wird lokal auf dem Client ausgeführt, z. B. JavaScript. Security-Risiken!) und <b>mobile Agenten</b> (laufendes Programm aus Code und Daten bewegt sich von Knoten zu Knoten, z. B. WebCrawler. Ebenfalls Sicherheitsrisiken).

## Karte: Schichtenarchitektur
tag: def
quelle: 03-ds-architektur.pdf, Folien 26, 28

Komponenten sind übereinander geschichtet: Eine Komponente in Schicht Lj setzt Abwärts-Aufrufe zu tieferen Schichten Li (i < j) ab und erwartet eine Antwort; Aufwärts-Aufrufe gibt es nur in Ausnahmefällen. Ein wichtiges Ziel ist die Trennung von Anwendungen und zugrunde liegenden Plattformen durch eine Middleware-Schicht. Ihr Hauptzweck ist Verteilungstransparenz. Jede Schicht hat eine klar definierte Funktion und kommuniziert nur mit Nachbarschichten.

## Karte: 3-Schichten-Architektur
tag: def
quelle: 03-ds-architektur.pdf, Folien 30-31

<b>Präsentationsschicht:</b> Darstellung und Interaktion mit dem Benutzer. <b>Verarbeitungsschicht:</b> Verarbeitung der Anforderungen und der Daten. <b>Datenschicht:</b> persistente Datenhaltung. Beispiel Suchmaschine: Darstellung von Suchbegriff/Ergebnissen. Query-Generation und Ranking. Datenbank mit indizierten Webseiten.

## Karte: OOP-Stil und SOA
tag: def
quelle: 03-ds-architektur.pdf, Folien 32, 34

OOP-Stil: Objekte entsprechen Komponenten, verbunden durch Methodenaufruf; interner Zustand gekapselt, nur die Schnittstelle sichtbar; Objekte austauschbar, solange die Schnittstelle bleibt; bei Verteilten Objekten laufen Aufrufe über das Netz. SOA: Dienste beruhen wie Objekte auf Kapselung (öffentliche Schnittstelle, geheime Interna), können von verschiedenen Organisationseinheiten angeboten werden und sind über das Netz zugänglich. Verteilte Systeme in SOA sind ein Problem der Dienstkomposition.

## Karte: REST
tag: def
quelle: 03-ds-architektur.pdf, Folien 35, 37

Weiterentwicklung der klassischen SOA (deren Service-Komposition komplex ist). Grundprinzip: Manipulation von Ressourcen. Drei Grundprinzipien: 1. Ressourcen werden durch einfache Namensschemata identifiziert; 2. alle Dienste bieten die gleiche Schnittstelle mit den immer gleichen Operationen; 3. nach einer Operation vergisst die Komponente alle Informationen über den Aufruf (zustandslose Ausführung). Beispiel Amazon S3: Objekte (Dateien) und Buckets (Verzeichnisse), ansprechbar über URIs; PUT erzeugt einen Bucket, GET liefert die enthaltenen Objekte.

## Karte: Publish-Subscribe-Architekturen
tag: def
quelle: 03-ds-architektur.pdf, Folien 38-40

Ziel: die beteiligten Prozesse weitgehend zu entkoppeln. Funktionalität von der Koordination (Kooperation und Kommunikation) trennen. Wesentliches Merkmal: referentielle Entkopplung. Die Prozesse „kennen“ einander nicht. Subskriptionen müssen gegen Notifications matchen; zwei Implementierungen: Publisher schicken Daten direkt an die Subscriber, oder Publisher schicken nur eine Benachrichtigung und die Subscriber lesen selbst (ausreichend Speicher im Shared Data Space nötig).

## Karte: Formen der Koordination
tag: def
quelle: 03-ds-architektur.pdf, Folie 41

<b>Direkte Kommunikation:</b> Prozesse kennen gegenseitig ihre Namen und müssen beide laufen. <b>Mailbox-Kommunikation:</b> Identifikatoren bekannt, aber nicht beide gleichzeitig aktiv. <b>Referentiell entkoppelt:</b> Prozesse kennen sich nicht, publizieren Ereignisse bei gleichzeitigem Laufen; Anmeldung für Ereignistypen. <b>Geteilte Datenräume:</b> Prozesse kennen sich nicht und müssen nicht gleichzeitig laufen.

## Karte: Systemarchitektur: Client und Server
tag: def
quelle: 03-ds-architektur-021.pdf, Folien 4-5

Die Systemarchitektur beschreibt die Verteilung der Software-Komponenten auf den Knoten (das Deployment); zentralisierte und dezentralisierte Architekturen werden unterschieden. <b>Server:</b> ein Prozess, der einen Dienst implementiert und über eine Schnittstelle anbietet. <b>Client:</b> ein Prozess, der einen Dienst nachfragt. Er sendet einen Request und wartet auf einen Reply.

## Karte: Client-Server-Kommunikation und Idempotenz
tag: wichtig
quelle: 03-ds-architektur-021.pdf, Folien 6-7

<b>Verbindungslos:</b> Client schickt Anfrage und wartet; bei Nachrichtenverlust kann nur wiederholt gesendet werden. Das geht aber nur bei idempotenten Nachrichten. <b>Idempotent:</b> Eine idempotente Nachricht kann beliebig oft wiederholt werden, ohne Schaden anzurichten. <b>Verbindungsorientiert, verlässlich:</b> Vor der Anfrage wird eine Verbindung aufgebaut, der Server nutzt dieselbe Verbindung für die Antwort. Wichtige Implementierungen beider Typen: UDP und TCP.

## Karte: Verteilung der Schichten auf Client und Server
quelle: 03-ds-architektur-021.pdf, Folien 8-11

Einfachste Verteilung: Client-Knoten implementieren (Teile der) Benutzerschnittstelle, Server-Knoten den Rest (Business-Logik und Datenhaltung). Der Client ist ein „dummes“ Terminal. Weitere Möglichkeiten: gesamte Benutzerschnittstelle auf dem Client mit anwendungsspezifischem Protokoll; Teile der Anwendung auf dem Client (z. B. Formularprüfung); fast die gesamte Anwendung auf dem Client, nur Datenhaltung auf dem Server (ggf. mit Client-Cache). Thin vs. Fat Clients: Viel Client-Funktionalität ist administrativ ungünstig (viele Software-Versionen), aber für Office-Suites oder Multimedia sinnvoll; Browser-basierte Applikationen mildern das Versionsproblem.

## Karte: Physische 3-Schichten-Architektur
tag: beispiel
quelle: 03-ds-architektur-021.pdf, Folie 12

Jede der drei Schichten läuft auf einem eigenen Knoten. Server treten dabei auch als Clients auf. Beispiele: Transaktions-Monitoring; Web-Applikationen mit Web-Server, Applikationsserver und Datenbank-Server.

## Frage: Was beschreibt die Systemarchitektur?
id: 1l53kw7
quelle: 03-ds-architektur-021.pdf, Folie 4

Die Verteilung der Software-Komponenten auf den Knoten. Also das Deployment. Unterschieden werden zentralisierte und dezentralisierte Architekturen.

## Frage: Wie sind Server und Client definiert?
id: b64msg
quelle: 03-ds-architektur-021.pdf, Folie 5

Ein Server ist ein Prozess, der einen Dienst über eine Schnittstelle anbietet; ein Client fragt ihn per Request/Reply nach.

## Frage: Was bedeutet idempotent und warum ist das bei verbindungsloser Kommunikation wichtig?
id: 1p0ffjo
quelle: 03-ds-architektur-021.pdf, Folie 6

Eine idempotente Nachricht kann beliebig oft wiederholt werden, ohne Schaden anzurichten. Bei Nachrichtenverlust in verbindungsloser Kommunikation kann nur erneut gesendet werden. Das ist nur bei idempotenten Nachrichten unproblematisch.

## Frage: Welche 4+1 Architectural Views werden unterschieden?
id: xcl3rx
quelle: 03-ds-architektur.pdf, Folie 5

Logical View (Endnutzer-Funktionalität), Development View (Entwicklersicht), Process View (Prozesse), Physical View (Verteilung/Deployment auf Hardware) und Scenario als fünfte Sicht (Abläufe und Nutzerinteraktion).

## Frage: Was beschreibt ein Architekturstil?
id: zgru7u
quelle: 03-ds-architektur.pdf, Folie 8

Die enthaltenen Komponenten, die Verbindungen/Beziehungen zwischen ihnen, die Nachrichten und ausgetauschten Daten sowie Bedingungen/Invarianten über Struktur und Verhalten.

## Frage: Was ist eine Komponente?
id: 5r7rem
quelle: 03-ds-architektur.pdf, Folie 8

Eine Komponente ist eine modulare Einheit mit definierten Schnittstellen und bleibt austauschbar, solange die Schnittstellen unverändert bleiben.

## Frage: Welche drei Kommunikationsparadigmen gibt es?
id: 3bq2r
quelle: 03-ds-architektur.pdf, Folie 12

Interprozess-Kommunikation (z. B. Sockets), Remote Invocation (Request-Reply, RPC, RMI. Synchron nach dem Vorbild des Prozeduraufrufs) und indirekte Kommunikation (Gruppen, Topics, Queues. Sender und Empfänger entkoppelt).

## Frage: Welche Formen indirekter Kommunikation nennen die Folien?
id: 7zb9lz
quelle: 03-ds-architektur.pdf, Folie 15

Die Folien nennen Gruppen, Publish-Subscribe, Message Queues, Tuple Spaces und DSM.

## Frage: Warum skaliert die Client-Server-Architektur schlecht und was macht P2P anders?
id: tjvy7z
quelle: 03-ds-architektur.pdf, Folie 17

Die ganze Last betrifft einen zentralen Server. Bei Peer-to-Peer haben alle Prozesse die gleichen Verantwortlichkeiten. Peers sind Client und Server zugleich, sodass die Verfügbarkeit automatisch mit der Nachfrage wächst.

## Frage: Welche Deployment-Strategien nennen die Folien?
id: 3xgjn5
quelle: 03-ds-architektur.pdf, Folie 18

Services auf mehreren Servern abbilden, Caching, mobiler Code und mobile Agenten.

## Frage: Wie ist die Schichtenarchitektur definiert?
id: ugy8jm
quelle: 03-ds-architektur.pdf, Folie 26

Komponenten sind übereinander geschichtet; eine Komponente in Schicht Lj ruft Komponenten tieferer Schichten Li (i < j) auf und erwartet eine Antwort. Aufwärts-Aufrufe gibt es nur in Ausnahmefällen.

## Frage: Aus welchen Schichten besteht die 3-Schichten-Architektur?
id: v28irj
quelle: 03-ds-architektur.pdf, Folie 30

Präsentationsschicht (Darstellung/Interaktion), Verarbeitungsschicht (Verarbeitung der Anforderungen und Daten) und Datenschicht (persistente Datenhaltung).

## Frage: Welche drei Grundprinzipien hat REST?
id: fn1i3p
quelle: 03-ds-architektur.pdf, Folie 35

1. Ressourcen werden durch einfache Namensschemata identifiziert. 2. Alle Dienste bieten die gleiche Schnittstelle mit den gleichen Operationen. 3. Zustandslose Ausführung. Nach einer Operation werden alle Informationen über den Aufruf vergessen.

## Frage: Was ist das wesentliche Merkmal von Publish-Subscribe-Architekturen?
id: wd4wh6
quelle: 03-ds-architektur.pdf, Folie 39

Die referentielle Entkopplung der Prozesse. Sie „kennen“ einander nicht; Funktionalität wird von der Koordination getrennt.
