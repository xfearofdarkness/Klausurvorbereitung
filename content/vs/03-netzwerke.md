---
id: netzwerke
title: Netzwerkgrundlagen
icon: 🕸️
---

## Karte: Performance: Latenz und Datenübertragungsrate
tag: def
quelle: 01_ds-concept-networks.pdf, Folie 4

<b>Latenz:</b> die Verzögerung zwischen dem Versenden und dem Empfangen von Daten; messbar durch das Versenden leerer Nachrichten. <b>Datenübertragungsrate:</b> Geschwindigkeit, mit der Daten zwischen zwei Knoten übertragen werden (in Bit pro Sekunde). Es gilt: <code>Datenübertragungszeit = Latenz + Länge/Datenübertragungsrate</code>. Ab einer bestimmten Länge müssen Nachrichten zerteilt und stückweise übertragen werden.

## Karte: Bandbreite
tag: def
quelle: 01_ds-concept-networks.pdf, Folie 5

Der Umfang von Nachrichtenverkehr, der in einer bestimmten Zeiteinheit durch das Netzwerk transportiert werden kann. In vielen Netzwerken ist die Bandbreite identisch mit der Datenübertragungsrate; in WANs mit mehreren Wegen hat sie keinen direkten Einfluss darauf. Wird die Bandbreite durch den Verkehr überschritten, spricht man von Überlastung.

## Karte: Arten von Netzwerken
tag: def
quelle: 01_ds-concept-networks.pdf, Folie 9

<b>PANs:</b> kleine, kostengünstige Geräte eines Benutzers drahtlos verbunden (z. B. Bluetooth). <b>LANs:</b> Rechner einer Organisation vernetzt (z. B. Ethernet). <b>WANs:</b> transportieren Nachrichten zwischen Knoten verschiedener Organisationen mit geringerer Geschwindigkeit; Latenz durch Routing erhöht. <b>MANs:</b> moderne Glasfaser- und Kupferkabel mit großer Bandbreite (Telefon, Kabel-TV). Jede Art hat eine drahtlose Variante.

## Karte: Paketübertragung
tag: def
quelle: 01_ds-concept-networks.pdf, Folie 12

Bevor eine Nachricht übertragen wird, wird sie in Pakete zerlegt. Ein Paket ist eine Folge binärer Daten mit festgelegter Länge zusammen mit Adressinformationen über Sender und Empfänger. Die Längenbeschränkung ermöglicht das Reservieren von Speicherplatz in den Knoten und vermeidet große Verzögerungen durch sehr lange Nachrichten.

## Karte: Streaming
tag: def
quelle: 01_ds-concept-networks.pdf, Folie 13

Die echtzeitbasierte Übertragung von Audio- und Videodaten. Streaming erfordert höhere Bandbreite und andere Kommunikationsmechanismen; typischerweise werden UDP-Pakete für Video-Frames verwendet. Verspätet eintreffende Pakete können nicht mehr verwendet werden. Von den Standard-Internetprotokollen nicht unterstützt: Es ist ein vordefinierter Kanal (Channel) mit Ressourcen-Reservierung nötig.

## Karte: Switching-Schemata
tag: def
quelle: 01_ds-concept-networks.pdf, Folie 15

Das Switching regelt das Versenden von Nachrichten zwischen den Knoten. <b>Broadcast:</b> Nachricht an alle erreichbaren Knoten (z. B. Ethernet, drahtlose Medien). <b>Circuit Switching:</b> Verbindungen werden gesucht und aus Teilstücken zusammengesetzt. <b>Packet Switching:</b> Pakete werden zwischengespeichert und weitergesendet (store-and-forward). <b>Frame Relay:</b> kleine Pakete (Frames) werden on-the-fly verarbeitet (für Echtzeitsysteme wie Videokonferenzen).

## Karte: Protokolle und Schichten
tag: def
quelle: 01_ds-concept-networks.pdf, Folien 17-19

Ein Protokoll definiert die Reihenfolge, in der Nachrichten ausgetauscht werden müssen, und das Format der ausgetauschten Nachrichten. Protokolle ermöglichen die Kommunikation heterogener Komponenten und werden als Paar von Software-Modulen auf Sender und Empfänger implementiert. Protokolle sind in Schichten organisiert: Jede Schicht bietet Funktionalität für die darüberliegende; ganz unten liegt die physikalische Schicht. Nachrichten werden lokal per Prozeduraufruf nach unten weitergegeben und physikalisch ausgetauscht.

## Karte: Ports und Transportadresse
tag: def
quelle: 01_ds-concept-networks.pdf, Folie 22

Die Transportschicht stellt einen Transportdienst zwischen zwei Ports bereit. Ports werden Prozessen zugeordnet, um sie eindeutig identifizieren zu können. Die Transportadresse besteht aus Rechneradresse und Portnummer.

## Karte: Datagramme vs. verbindungsorientierter Transport
tag: wichtig
quelle: 01_ds-concept-networks.pdf, Folie 23

<b>Datagramme:</b> wie eine Postkarte — Pakete erhalten Adressinformationen, es wird keine Infrastruktur aufgebaut; verschiedene Pakete können verschiedene Routen nehmen (z. B. IP). <b>Verbindungsorientierter Transport:</b> Es wird zunächst eine virtuelle Verbindung aufgebaut, über die die Pakete geschickt werden. Beide Verfahren können auf jeder Netzwerkebene angewendet werden — bekannte Beispiele: UDP und TCP auf der Transportebene.

## Karte: Routing
tag: def
quelle: 01_ds-concept-networks.pdf, Folien 25-26

Router sind Rechnerknoten an bestimmten Stellen im Netzwerk, die Pakete auf den richtigen Weg schicken. Der Routing-Algorithmus entscheidet, welchen Weg jedes Paket nimmt; bei verbindungsorientierten Protokollen wird die Route beibehalten. Router müssen ihr Wissen über Routen laufend updaten und den Traffic überwachen. Wenn Start- und Zielknoten nicht im gleichen LAN stehen, werden Pakete in mehreren Hops gesendet; die Weiterleitung wird anhand der Routing-Tabellen auf jedem Knoten entschieden.

## Karte: Internet und IP-Adressierung
tag: def
quelle: 01_ds-concept-networks.pdf, Folien 28-29

Das Internet integriert viele Protokolle, Technologien und Sub-Netze. Voraussetzungen: einheitliches Adressschema, einheitliches Paketformat und Verarbeitungsregeln, verbindende Komponenten für das Routing — erfüllt durch IP-Adressen, das IP-Protokoll und Internet-Router. IPv4-Adressen sind 32-Bit-Werte (Bezeichner für Sub-Netz und Knoten), notiert als vier Dezimalzahlen mit Punkten (je ein Byte). Class A: 2²⁴ Knoten pro Subnetz (sehr große Organisationen), Class B: Organisationen mit mehr als 255 Knoten, Class C: alle anderen. IPv4 bietet nur 2³² (4 Milliarden) Adressen — der Hauptgrund für IPv6.

## Karte: TCP-Merkmale
tag: wichtig
quelle: 01_ds-concept-networks.pdf, Folien 32-33

TCP bietet einen verbindungsorientierten, verlässlichen Transport-Dienst. <b>Sequencing:</b> Streams werden zerteilt und als IP-Pakete versendet; die Reihenfolge bleibt erhalten. <b>Flow Control:</b> Knoten melden dem Sender, wie viele Daten sie im nächsten Zeitintervall aufnehmen können. <b>Retransmission:</b> Segmente ohne Empfangsbestätigung werden erneut versendet. <b>Buffering:</b> Puffer auf der Empfängerseite gleicht Geschwindigkeitsunterschiede aus. <b>Checksum:</b> sichert die Integrität von Header und Daten. UDP fügt dagegen kaum neue Merkmale zum IP-Protokoll hinzu; die Transportschicht führt über Portnummern die Prozess-zu-Prozess-Kommunikation ein.

## Karte: Domain Name Service (DNS)
tag: def
quelle: 01_ds-concept-networks.pdf, Folie 34

Das Internet unterstützt die Adressierung von Knoten und Sub-Netzen durch symbolische Namen. Die benannten Einheiten heißen Domänen, die Namen Domänen-Namen; sie sind hierarchisch organisiert. Die Übersetzung von Domänen-Namen in IP-Adressen leistet der Domain Name Service (DNS).

## Frage: Was ist Latenz und wie berechnet sich die Datenübertragungszeit?
id: 19odfuw
quelle: 01_ds-concept-networks.pdf, Folie 4

Latenz ist die Verzögerung zwischen Versenden und Empfangen von Daten. Datenübertragungszeit = Latenz + Länge/Datenübertragungsrate.

## Frage: Was bedeutet Bandbreite?
id: h8lwbb
quelle: 01_ds-concept-networks.pdf, Folie 5

Bandbreite ist der Umfang des Nachrichtenverkehrs, der pro Zeiteinheit durch das Netzwerk transportiert werden kann.

## Frage: Welche Arten von Netzwerken gibt es?
id: 8u5g8g
quelle: 01_ds-concept-networks.pdf, Folie 9

PAN (persönliche Geräte, z. B. Bluetooth), LAN (Organisation, z. B. Ethernet), WAN (zwischen Organisationen, Latenz durch Routing erhöht) und MAN (Glasfaser/Kupfer mit großer Bandbreite). Jede Art hat eine drahtlose Variante.

## Frage: Wofür stehen PAN, LAN, WAN und MAN?
id: jgk0pw
quelle: 01_ds-concept-networks.pdf, Folie 9

PAN, LAN, WAN und MAN stehen für Personal, Local, Wide und Metropolitan Area Network.

## Frage: Was ist ein Paket und warum ist die Längenbeschränkung bedeutsam?
id: ocyc17
quelle: 01_ds-concept-networks.pdf, Folie 12

Eine Folge binärer Daten mit festgelegter Länge plus Adressinformationen über Sender und Empfänger. Die Beschränkung ermöglicht das Reservieren von Speicherplatz und vermeidet große Verzögerungen durch sehr lange Nachrichten.

## Frage: Welche Switching-Schemata gibt es?
id: eyrc5
quelle: 01_ds-concept-networks.pdf, Folie 15

Broadcast (an alle erreichbaren Knoten), Circuit Switching (Verbindung aus Teilstücken), Packet Switching (zwischenspeichern und weitersenden) und Frame Relay (Frames on-the-fly, für Echtzeitsysteme).

## Frage: Welche zwei Aspekte definiert ein Protokoll?
id: r4vpm8
quelle: 01_ds-concept-networks.pdf, Folie 17

Die Reihenfolge, in der bestimmte Nachrichten ausgetauscht werden müssen, und das Format der ausgetauschten Nachrichten.

## Frage: Woraus besteht eine Transportadresse?
id: y9o2jl
quelle: 01_ds-concept-networks.pdf, Folie 22

Eine Transportadresse besteht aus Rechneradresse und Portnummer.

## Frage: Worin unterscheiden sich Datagramme und verbindungsorientierter Transport?
id: 1omjqw1
quelle: 01_ds-concept-networks.pdf, Folie 23

Datagramme funktionieren wie Postkarten: Adressinfo, keine Infrastruktur, verschiedene Routen möglich. Verbindungsorientiert: erst wird eine virtuelle Verbindung aufgebaut, über die die Pakete geschickt werden. Beispiele auf der Transportebene: UDP bzw. TCP.

## Frage: Warum wurde IPv6 entwickelt?
id: ietp6s
quelle: 01_ds-concept-networks.pdf, Folie 29

IPv4 stellt nur 2³² (4 Milliarden) Adressen zur Verfügung — das ist der Hauptgrund für die Entwicklung von IPv6.

## Frage: Wie ist eine IPv4-Adresse aufgebaut?
id: 56yczv
quelle: 01_ds-concept-networks.pdf, Folie 29

Eine IPv4-Adresse ist ein 32-Bit-Wert: Sie bezeichnet Sub-Netz und Knoten und besteht aus vier Dezimalzahlen zu je 1 Byte, getrennt durch Punkte.

## Frage: Welche Merkmale bietet TCP?
id: yv1idi
quelle: 01_ds-concept-networks.pdf, Folie 33

Sequencing (Reihenfolge bleibt erhalten), Flow Control (Rückmeldung der Aufnahmekapazität), Retransmission (erneutes Senden ohne Bestätigung), Buffering (Empfängerpuffer) und Checksum (Integrität von Header und Daten).

## Frage: Wozu dient der DNS?
id: 8vqgez
quelle: 01_ds-concept-networks.pdf, Folie 34

Er übersetzt hierarchisch organisierte, symbolische Domänen-Namen in IP-Adressen.
