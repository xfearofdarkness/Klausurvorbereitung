---
id: jms
title: Messaging & JMS
icon: ✉️
---

## Karte: Messaging und MOM
tag: def
quelle: 04_vvs-jms-intro.pdf, Folie 4

Beim Messaging geht es darum, dass die Softwarekomponenten einer Unternehmensarchitektur Daten miteinander austauschen können, in der Regel ermöglicht durch eine Message-oriented Middleware (MOM). Eine Nachricht ist ein in sich abgeschlossenes Paket von Daten; die MOM stellt sicher, dass die Daten über das Netz verteilt werden. Weitere Features: Fault Tolerance, Load Balancing, Skalierbarkeit, Transaktionen.

## Karte: Nachteile von Remote-Aufrufen (RMI)
tag: wichtig
quelle: 04_vvs-jms-intro.pdf, Folie 5

<b>Synchrones Verhalten:</b> Ein Remote-Aufruf führt zu blockierender Wartezeit, bis der Server fertig ist. <b>Geringe Entkopplung:</b> Der Client benötigt Informationen über die Server, die er nutzt. <b>Zuverlässigkeit:</b> Der Server muss beim Aufruf betriebsbereit sein. <b>Nur ein Sender und Empfänger:</b> Ein einzelner Client interagiert mit einem einzelnen Server.

## Karte: Indirektion
tag: def
quelle: 04_vvs-jms-intro.pdf, Folien 6-7

„Fundamentaler Grundsatz“ des Software-Engineerings (David Wheeler): Alle Probleme in der Informatik können durch eine weitere Ebene der Indirektion gelöst werden. Das Problem der engen Kopplung wird durch die Einführung einer weiteren Ebene der Indirektion (der Messaging-Middleware) gelöst. Sie kann mit mehreren Produzenten und Konsumenten kommunizieren; asynchrone Nachrichtenverarbeitung ist möglich.

## Karte: Vorteile des Messagings
tag: wichtig
quelle: 04_vvs-jms-intro.pdf, Folien 8, 14-15

<b>Blockierungsfreie Anfrageverarbeitung:</b> asynchrone Nachrichtenverarbeitung. <b>Entkopplung:</b> Der Sender muss den Empfänger nicht kennen. <b>Zuverlässigkeit:</b> Nachrichten werden auch zugestellt, wenn der Empfänger vorübergehend nicht erreichbar ist. <b>Mehrere Sender und Empfänger:</b> Broadcasting- und Routing-Mechanismen ermöglichen multilaterale Kommunikation. Messaging reduziert Engpässe (asynchrone Kommunikation) und erhöht Skalierbarkeit (mehrere Listener, mehrere Warteschlangen).

## Karte: Lose gekoppelte Kommunikation
tag: def
quelle: 04_vvs-jms-intro.pdf, Folien 11-12

Sender und Empfänger kommunizieren über einen Kommunikationsagenten bzw. ein Kommunikationsmedium: sie müssen sich nicht kennen. Sie müssen lediglich das Nachrichtenformat und das zu verwendende Ziel kennen. Im Gegensatz dazu ist RMI eng gekoppelt: Eine Anwendung muss die Methode der Remote-Anwendung kennen. Anwendungsfälle: Kommunikation ohne Schnittstellen-Informationen, ohne gleichzeitige Ausführung und ohne auf Antworten warten zu müssen.

## Karte: JMS API
tag: def
quelle: 04_vvs-jms-intro.pdf, Folien 10, 18-20

Die Java JMS API definiert eine Reihe von Schnittstellen, die es Java-Programmen ermöglichen, mit anderen Messaging-Implementierungen zu kommunizieren. Ziele: Minimieren der architektonischen Konzepte, Portabilität zwischen Messaging-Anbietern. JMS ist der Standard, hinter dem sich verschiedene Implementierungen (Provider) verbergen können; das sichert Kompatibilität. JMS ist vollständig in Jakarta EE integriert: Anwendungsclients, EJBs und Webkomponenten können Nachrichten senden oder synchron empfangen; Message-Driven Beans konsumieren asynchron; Sende- und Empfangsvorgänge können Teil einer JTA-Transaktion sein.

## Karte: Komponenten der JMS-Architektur
tag: def
quelle: 04_vvs-jms-intro.pdf, Folie 21

<b>JMS Provider:</b> ein Nachrichtensystem, das die JMS-Schnittstellen implementiert und Verwaltungsfunktionen bereitstellt. <b>JMS-Clients:</b> Java-Programme oder -Komponenten, die Nachrichten erzeugen und konsumieren. <b>Messages:</b> die Objekte, die Informationen zwischen JMS-Clients kommunizieren. <b>Verwaltete Objekte:</b> für Clients konfigurierte JMS-Objekte; die beiden Arten sind Ziele (Destinations) und Verbindungsfabriken (ConnectionFactorys).

## Karte: Messaging-Stile: Point-to-Point
tag: def
quelle: 04_vvs-jms-intro.pdf, Folien 23-24

Basiert auf Nachrichtenwarteschlangen, Sendern und Empfängern. Jede Nachricht ist an eine bestimmte Warteschlange adressiert; empfangende Clients extrahieren Nachrichten aus den Warteschlangen. Queues behalten alle Nachrichten, bis sie verbraucht sind oder ablaufen. Jede Nachricht hat nur einen Empfänger; der Empfänger kann die Nachricht abrufen, unabhängig davon, ob er lief, als sie gesendet wurde.

## Karte: Messaging-Stile: Publish/Subscribe
tag: def
quelle: 04_vvs-jms-intro.pdf, Folien 23, 25-26

Clients richten Nachrichten an ein Topic, das wie ein Schwarzes Brett funktioniert; Herausgeber und Abonnenten können dynamisch veröffentlichen oder abonnieren. Nachrichten werden zu den Verbrauchern gepusht (kein Polling); jede Nachricht geht an alle registrierten Verbraucher (je ein Exemplar). Produzenten und Konsumenten sind maximal entkoppelt, aber ein Konsument muss aktiv sein, um eine Nachricht zu konsumieren. Derselbe Code kann je nach Verwaltungsobjekt (Queue oder Topic) beide Stile unterstützen.

## Karte: Message Consumption: synchron vs. asynchron
tag: wichtig
quelle: 04_vvs-jms-intro.pdf, Folie 27

<b>Synchron:</b> Der Verbraucher ruft die Nachricht explizit mit <code>receive()</code> ab; die Methode kann blockieren, bis eine Nachricht eintrifft, oder bei Zeitüberschreitung abbrechen. <b>Asynchron:</b> Ein Client registriert einen Message-Listener; wenn eine Nachricht ankommt, ruft der JMS-Provider dessen <code>onMessage</code>-Methode auf. In einer Java-EE-Anwendung dient eine Message-Driven Bean als Nachrichten-Listener.

## Karte: JMS-Programmierschritte
tag: wichtig
quelle: 04_vvs-jms-intro.pdf, Folien 30, 32

1. ConnectionFactory des JMS-Anbieters suchen (serverseitige Ressource, per JNDI). 2. JMS-Verbindung mit der ConnectionFactory erstellen. 3. JMS-Sitzung mithilfe der Verbindung erstellen (zum Senden/Empfangen und für Transaktionen). 4. Mit JNDI das richtige JMS-Ziel suchen. 5. Producer oder Consumer erstellen. 6. Nachricht senden oder empfangen. Bausteine: verwaltete Objekte (ConnectionFactorys, Destinations), Connections, Sessions, JMSContext (vereint Verbindung und Sitzung), Produzenten, Konsumenten, Nachrichten.

## Karte: Administrierte Objekte
tag: def
quelle: 04_vvs-jms-intro.pdf, Folie 33

Destinations und ConnectionFactorys werden üblicherweise administrativ und nicht programmgesteuert verwaltet; die zugrunde liegende Technologie unterscheidet sich je nach Implementierung erheblich. JMS-Clients greifen über portable Schnittstellen auf sie zu; ein Administrator konfiguriert sie in einem JNDI-Namespace, Clients nutzen Ressourceninjektion. Erstellung z. B. über den Glassfish-Befehl <code>asadmin create-jms-resource</code>, die Administrationskonsole, den Netbeans-Assistenten oder Annotationen.

## Karte: Message Listeners und Message-Driven Beans
tag: def
quelle: 04_vvs-jms-intro.pdf, Folien 34-35, 37-39

Ein Message-Listener ist ein Objekt, das als asynchroner Ereignishandler für Nachrichten fungiert: Es implementiert das Interface <code>MessageListener</code> mit der Methode <code>onMessage</code>, in der die Aktionen beim Nachrichteneingang definiert werden. Registrierung: <code>consumer.setMessageListener(myListener)</code>. Im Jakarta-EE-Web- oder EJB-Container übernehmen Message-Driven Beans die asynchrone Nachrichtenzustellung; auch sie implementieren MessageListener mit onMessage. Eigenschaften von MDBs: vom Container erstellt und mit Annotationen versehen; mehrere Instanzen können Nachrichten gleichzeitig verarbeiten; kein direkter Client-Zugriff; ausgelöst durch Nachrichten über die JMS-API.

## Frage: Was ist Message-oriented Middleware (MOM)?
id: 1h8d4zb
quelle: 04_vvs-jms-intro.pdf, Folie 4

Middleware, die den Datenaustausch zwischen Softwarekomponenten über Nachrichten ermöglicht. Sie stellt die Verteilung der Daten über das Netz sicher und bietet Features wie Fault Tolerance, Load Balancing, Skalierbarkeit und Transaktionen.

## Frage: Welche Nachteile von Remote-Aufrufen motivieren das Messaging?
id: 1pphudb
quelle: 04_vvs-jms-intro.pdf, Folie 5

Synchrones (blockierendes) Verhalten, geringe Entkopplung (Client braucht Server-Informationen), Zuverlässigkeit (Server muss betriebsbereit sein) und nur ein Sender/Empfänger pro Interaktion.

## Frage: Wie lautet der Wheeler-Grundsatz?
id: ocsjfe
quelle: 04_vvs-jms-intro.pdf, Folie 7

Der Wheeler-Grundsatz lautet: Alle Probleme der Informatik können durch eine weitere Ebene der Indirektion gelöst werden.

## Frage: Welche Vorteile bietet Messaging?
id: v892uz
quelle: 04_vvs-jms-intro.pdf, Folie 8

Blockierungsfreie (asynchrone) Anfrageverarbeitung, Entkopplung (Sender kennt Empfänger nicht), Zuverlässigkeit (Zustellung auch bei vorübergehend nicht erreichbarem Empfänger) und mehrere Sender/Empfänger durch Broadcasting- und Routing-Mechanismen.

## Frage: Welche Komponenten hat die JMS-Architektur?
id: e7dpl4
quelle: 04_vvs-jms-intro.pdf, Folie 21

JMS Provider (implementiert die Schnittstellen), JMS-Clients (erzeugen/konsumieren Nachrichten), Messages und verwaltete Objekte (Destinations und ConnectionFactorys).

## Frage: Was kennzeichnet Point-to-Point-Messaging?
id: xmjeyf
quelle: 04_vvs-jms-intro.pdf, Folie 24

Point-to-Point-Messaging nutzt eine Queue, genau einen Empfänger pro Nachricht, und Nachrichten bleiben bis Verbrauch oder Ablauf erhalten.

## Frage: Was kennzeichnet Publish/Subscribe?
id: qa9rfh
quelle: 04_vvs-jms-intro.pdf, Folien 25-26

Publish/Subscribe nutzt ein Topic als Schwarzes Brett, pusht an alle Abonnenten und bietet maximale Entkopplung; der Konsument muss aktiv sein.

## Frage: Wie funktioniert synchroner vs. asynchroner Nachrichtenkonsum in JMS?
id: wkufbe
quelle: 04_vvs-jms-intro.pdf, Folie 27

Synchron: expliziter Abruf mit receive() (blockierend oder mit Timeout). Asynchron: Message-Listener registrieren: der Provider ruft bei Nachrichteneingang onMessage auf; in Java EE übernimmt das eine Message-Driven Bean.

## Frage: Welche Schritte umfasst das JMS-Programmiermodell?
id: 14z4t2m
quelle: 04_vvs-jms-intro.pdf, Folie 30

ConnectionFactory per JNDI suchen → Connection erstellen → Session erstellen → Destination per JNDI suchen → Producer/Consumer erstellen → Nachricht senden bzw. empfangen.

## Frage: Welche Eigenschaften haben Message-Driven Beans?
id: 7hxqtj
quelle: 04_vvs-jms-intro.pdf, Folien 38-39

Vom Container erstellt und annotiert; mehrere Instanzen können Nachrichten gleichzeitig verarbeiten; kein direkter Client-Zugriff; sie werden durch Nachrichten über die JMS-API ausgelöst und implementieren MessageListener mit onMessage.
