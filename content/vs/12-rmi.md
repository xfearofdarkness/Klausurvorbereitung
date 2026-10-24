---
id: rmi
title: RPC & RMI
icon: 📞
---

## Karte: Request-Reply-Protokolle
tag: def
quelle: 07_ds-java-rmi.pdf, Folien 5-6

Häufig verwendetes Protokoll in Client-Server-Systemen; beruht auf TCP oder UDP. Die Middleware-Schicht liegt zwischen der Netzwerk- und der Anwendungsebene.

## Karte: Remote Procedure Call (RPC)
tag: def
quelle: 07_ds-java-rmi.pdf, Folien 7-8

Überträgt den Funktionsaufruf auf Verteilte Systeme. Stubs und Skeletons enthalten Routinen für die Kommunikation und Synchronisierung. <b>Marshaling:</b> Transformation der Daten in verschiedene Zielformate. Drei Aspekte: <b>Schnittstellen</b> (beschreiben die aufrufbaren Operationen; Programmierer stützen sich auf die Schnittstelle, nicht die Implementierung), <b>Aufruf-Semantik</b> (Retransmission, Duplikatbehandlung, Ergebnis-Historie) und <b>Transparenz</b> (Orts- und Zugriffstransparenz, allerdings größere Latenzen bei Remote Calls).

## Karte: RMI
tag: def
quelle: 07_ds-java-rmi.pdf, Folie 15

RMI erweitert RPC um das Konzept der Objekte. Gemeinsamkeiten mit RPC: Verwendung von Schnittstellen, basiert auf Request-Reply-Protokollen, ähnliche Transparenz. Unterschiede: Objektorientierte Konzepte stehen zur Verfügung (Klassen, Objekte, Vererbung); Objekt-Identität — insbesondere ist call-by-reference möglich.

## Karte: Verteilte Objekte und Remote Interfaces
tag: def
quelle: 07_ds-java-rmi.pdf, Folien 16-17

Lokale und entfernte Objekte können Aufrufe empfangen; entfernte Objekte werden über Remote Object References adressiert und besitzen Remote Interfaces. Objekte von einem anderen Knoten können nur Methoden aus dem Remote-Interface aufrufen. Spezielle Interface-Beschreibungssprachen: CORBA-IDL, SOAP-XML — in Java durch Interfaces abgebildet.

## Karte: RMI-Architektur: Schichten
tag: wichtig
quelle: 07_ds-java-rmi.pdf, Folien 18-20

<b>Anwendungsschicht:</b> Client und Server kommunizieren im Hinblick auf den Service. <b>Stub-&-Skeleton-Schicht:</b> realisiert die Schnittstelle des serverseitigen Objekts auf beiden Seiten — der Client-Stub erledigt das Marshalling und sendet die Anfrage an die unteren Schichten. <b>Remote Reference Layer:</b> (in JVM integriert) lokalisiert anhand von Objektreferenzen Serverobjekte und leitet Aufrufe weiter. <b>Transport Layer:</b> stellt basierend auf TCP-Verbindungen die grundlegende Konnektivität bereit.

## Karte: Typische Aufgaben der RMI-Infrastruktur
tag: def
quelle: 07_ds-java-rmi.pdf, Folien 21-22

Lokalisierung von verteilten Objekten (Referenzen auf serverseitige Objekte können von der RMI-Registry erfragt werden); Kommunikation mit den Verteilten Objekten (für den Programmierer sieht der Methodenaufruf wie ein lokaler Aufruf aus); dynamisches Nachladen von Code für Objekte, die über RMI versendet wurden (z. B. als Parameter). Dynamisches Laden ermöglicht hohe Flexibilität: Der JVM unbekannte Klassen können lokal oder remote nachgeladen werden.

## Karte: Remote Object und Remote Interface in Java
tag: wichtig
quelle: 07_ds-java-rmi.pdf, Folien 24, 26-27

Eine verteilte RMI-Applikation besteht aus Interfaces und Klassen: Interfaces deklarieren Methoden, Klassen implementieren sie. Ein Remote Object implementiert ein Remote-Interface mit zwei Eigenschaften: Das Interface wird von <code>java.rmi.Remote</code> abgeleitet, und jede Methode deklariert <code>java.rmi.RemoteException</code> (oder eine Oberklasse) im throws-Statement. RMI ist Java-spezifisch — die Schnittstelle kann in Java definiert werden (geringere Komplexität als CORBA). Call-by-Value: Beliebig komplexe Objektstrukturen können serialisiert, übertragen und auf der Empfängerseite wiederhergestellt werden.

## Karte: Entwurf und Implementierung
tag: wichtig
quelle: 07_ds-java-rmi.pdf, Folien 25, 28, 30

1. Definition der Remote Interfaces: Welche Methoden sollen remote aufgerufen werden, welche Objekte übergeben werden? 2. Implementierung der Remote Objects (Klasse implementiert mindestens ein Remote Interface, definiert einen Konstruktor). 3. Implementierung der Clients (Remote-Referenz erzeugen, Methode aufrufen).

## Karte: Server und RMI-Registry
tag: def
quelle: 07_ds-java-rmi.pdf, Folien 29, 31

Die Server-Klasse erzeugt eine Instanz des Remote-Objekts und bindet sie an einen Namen in der rmiregistry. Nach der Registrierung können Remote-Referenzen erzeugt und Methoden remote aufgerufen werden. Zur Durchführung eines entfernten Aufrufs wird eine Objektreferenz benötigt: Die Referenz (URL) enthält den Rechnernamen, die Portnummer des Servers und einen Objektidentifikator. Die RMI-Registry steht als Namensdienst zur Verfügung.

## Frage: Was leisten Stubs und Skeletons beim RPC?
id: b57ycx
quelle: 07_ds-java-rmi.pdf, Folie 7

Sie enthalten Routinen für die Kommunikation und Synchronisierung; das Marshaling transformiert die Daten in die Zielformate.

## Frage: Was ist RPC?
id: dpvtue
quelle: 07_ds-java-rmi.pdf, Folie 7

RPC überträgt den Funktionsaufruf auf Verteilte Systeme und nutzt Stubs beziehungsweise Skeletons plus Marshaling.

## Frage: Welche drei Aspekte des RPC werden betrachtet?
id: 947zcd
quelle: 07_ds-java-rmi.pdf, Folie 8

Schnittstellen (beschreiben aufrufbare Operationen), Aufruf-Semantik (Retransmission, Duplikatbehandlung, Ergebnis-Historie) und Transparenz (Orts-/Zugriffstransparenz, aber größere Latenzen).

## Frage: Was unterscheidet RMI von RPC?
id: wcox0u
quelle: 07_ds-java-rmi.pdf, Folie 15

RMI erweitert RPC um Objekte: objektorientierte Konzepte (Klassen, Objekte, Vererbung) und Objekt-Identität — insbesondere ist call-by-reference möglich. Gemeinsam: Schnittstellen, Request-Reply-Basis, ähnliche Transparenz.

## Frage: Aus welchen Schichten besteht die RMI-Architektur?
id: 1u1l9s
quelle: 07_ds-java-rmi.pdf, Folie 20

Anwendungsschicht, Stub-&-Skeleton-Schicht (Marshalling), Remote Reference Layer (lokalisiert Serverobjekte, leitet Aufrufe weiter) und Transport Layer (TCP-basierte Konnektivität).

## Frage: Wodurch ist ein Remote-Interface in Java charakterisiert?
id: 13cmhoa
quelle: 07_ds-java-rmi.pdf, Folie 24

Es wird vom Interface java.rmi.Remote abgeleitet und jede Methode deklariert java.rmi.RemoteException im throws-Statement.

## Frage: Was bedeutet Call-by-Value-Unterstützung bei RMI?
id: a54j8x
quelle: 07_ds-java-rmi.pdf, Folie 26

Beliebig komplexe Objektstrukturen können serialisiert, über das Netz übertragen und auf der Empfängerseite wiederhergestellt werden.

## Frage: Welche Rolle spielt die RMI-Registry?
id: ima7k9
quelle: 07_ds-java-rmi.pdf, Folien 29, 31

Sie ist der Namensdienst: Der Server bindet Instanzen der Remote-Objekte an Namen; Clients erfragen Referenzen. Die Referenz enthält Rechnername, Portnummer und Objektidentifikator.
