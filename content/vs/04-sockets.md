---
id: sockets
title: Sockets & Java Networking
icon: 🔌
---

## Karte: TCP: verbindungsorientierte Kommunikation
tag: def
quelle: 01_ds-concept-sockets.pdf, Folie 5

In einer Client/Server-Architektur muss Kommunikation in vielen Fällen verlässlich (reliable) sein: Datenverluste vermeiden, Reihenfolge beibehalten. TCP bietet eine verlässliche Punkt-zu-Punkt-Verbindung zwischen zwei Programmen im Netzwerk. Sockets sind als Endpunkte an die Verbindung gebunden; zum Senden und Empfangen schreiben bzw. lesen die Clients in/von den Sockets. Beispielanwendungen: http, ftp, telnet.

## Karte: UDP: verbindungslos
tag: def
quelle: 01_ds-concept-sockets.pdf, Folie 6

UDP sendet unabhängige Datenpakete (Datagramme); die Ankunft ist nicht garantiert und es wird keine Verbindung aufgebaut. Gut geeignet für Anwendungen, die große Mengen von Zustandsdaten übertragen: der Verbindungsaufbau wäre zu aufwändig. Beispiel: ein Server, der die aktuelle Uhrzeit sendet (bei Verlust reicht das nächste Datagramm); außerdem ping.

## Karte: Ports
tag: def
quelle: 01_ds-concept-sockets.pdf, Folie 7

Ein Rechner hat im Allgemeinen eine einzige physikalische Verbindung zum Internet; verschiedene Anwendungen teilen sich diese Verbindung. Daten für verschiedene Anwendungen werden durch Port-Nummern unterschieden: 16-Bit-Zahlen (Wertebereich 0–65.535), verwendet von TCP und UDP. TCP-Server binden ihren Socket an einen Port, um alle Daten an diesen Port zu empfangen; UDP-Datagramme werden dynamisch zum jeweiligen Port geroutet.

## Karte: Socket
tag: def
quelle: 01_ds-concept-sockets.pdf, Folie 8

Endpunkt einer bidirektionalen Kommunikationsverbindung zwischen zwei Programmen. Ein Socket ist an eine Portnummer gebunden, sodass die TCP-Schicht die Anwendung identifizieren kann, die die Daten empfangen soll. Verbindungsaufbau: Der Server wartet und horcht an einem Socket; der Client kennt Rechnername und Portnummer und startet eine Verbindungsanfrage; der Server akzeptiert; danach wird auf der Client-Seite ein Socket erzeugt: Client und Server können kommunizieren.

## Karte: Das Paket java.net
quelle: 01_ds-concept-sockets.pdf, Folie 10

Socket-Programmierung findet auf der Anwendungsebene statt. Wichtige Klassen für TCP: <code>Socket</code> und <code>ServerSocket</code>, <code>URL</code> und <code>URLConnection</code>; UDP: <code>DatagramSocket</code>, <code>DatagramPacket</code>, <code>MulticastSocket</code>.

## Karte: Generelles Vorgehen (4 Schritte)
tag: wichtig
quelle: 01_ds-concept-sockets.pdf, Folie 14

1. Einen Socket öffnen. 2. Input- und Output-Streams für den Socket erhalten. 3. In bzw. aus den Streams schreiben bzw. lesen. 4. Schließen und Speicherplatz freigeben. Nur im dritten Schritt wird zur eigentlichen Funktionalität der Programme beigetragen.

## Karte: Server-Seite in Java
tag: beispiel
quelle: 01_ds-concept-sockets.pdf, Folien 15-18

ServerSocket anlegen und blockierend auf Verbindungen warten: <code>ServerSocket ss = new ServerSocket(port); Socket cs = ss.accept();</code>: <code>accept</code> wartet blockierend, bis eine Verbindung angefragt wird. Streams erhalten: <code>PrintWriter out = new PrintWriter(cs.getOutputStream(), true);</code> (true aktiviert Auto-Flush) und <code>BufferedReader in = new BufferedReader(new InputStreamReader(cs.getInputStream()));</code>. Danach Server-Logik über die Streams (z. B. Echo). Schließen: im finally-Block oder automatisch über try-with-resources.

## Karte: Client-Seite in Java
tag: beispiel
quelle: 01_ds-concept-sockets.pdf, Folien 20-22

Client-Socket anlegen: <code>Socket cs = new Socket(hostname, port);</code>: der Socket startet intern die Verbindungsanfrage. Streams wie beim Server erzeugen, zusätzlich ein Stream für Konsoleneingaben. Client-Logik: <code>readLine()</code> wartet blockierend, bis Benutzer oder Server ihren Input gesendet haben.

## Karte: Java IO: Streams
tag: def
quelle: 01_ds-concept-sockets.pdf, Folien 28-30

Streams sind Datenstrukturen, die einen kontinuierlichen Datenfluss repräsentieren: Abstraktionen für verschiedene Datenquellen und -senken (Dateisystem, Netzwerk usw.). Sie haben eine Ausrichtung (Input/Output); <code>InputStream</code> und <code>OutputStream</code> arbeiten auf Byte-Ebene. Objekte müssen für den Netzwerkverkehr umgewandelt werden und dazu das Interface <code>Serializable</code> implementieren. Wichtige Klassen: <code>PrintWriter</code> (formatierter Text), <code>InputStreamReader</code> (Bytes zu Characters), <code>BufferedReader</code> (zeichenbasiert mit Zwischenspeicher), <code>Scanner</code> (zerteilt Eingabe in Tokens).

## Karte: Asynchrone Server
tag: wichtig
quelle: 01_ds-concept-sockets.pdf, Folien 31, 33

Ein einfacher Server ist während der Bearbeitung einer Anfrage nicht für weitere Clients erreichbar. Lösung: asynchrone Server: der Aufbau einer Verbindung wird von der eigentlichen Verarbeitung der Nachricht getrennt (entkoppelt). Der von <code>accept()</code> erzeugte Client-Socket wird an einen Thread weitergereicht, der die Anfrage bearbeitet; währenddessen kann der ServerSocket asynchron auf weitere Anfragen warten.

## Karte: Java Non-Blocking IO (NIO)
tag: def
quelle: 01_ds-concept-sockets.pdf, Folie 37

Charakteristika: <b>Non-Blocking</b>: Java NIO führt nicht blockierende IO-Vorgänge aus; es kann auf Daten gewartet und gleichzeitig andere Arbeit ausgeführt werden. <b>Pufferung</b>: die zu verarbeitenden Daten werden in Puffern zwischengespeichert.

## Frage: Wie unterscheiden sich TCP und UDP aus Socket-Sicht?
id: 1prj63w
quelle: 01_ds-concept-sockets.pdf, Folien 5-6

TCP ist verbindungsorientiert, verlässlich und Punkt-zu-Punkt; UDP ist verbindungslos und nutzt unabhängige Datagramme ohne Ankunftsgarantie.

## Frage: Wann ist UDP gut geeignet?
id: jipbu1
quelle: 01_ds-concept-sockets.pdf, Folie 6

Für Anwendungen, die große Mengen von Zustandsdaten übertragen, wo ein Verbindungsaufbau pro Nachricht zu aufwändig wäre, z. B. ein Zeit-Server (verlorene Datagramme werden durch das nächste ersetzt) oder ping.

## Frage: Welche Rolle haben Port-Nummern?
id: 6bxihk
quelle: 01_ds-concept-sockets.pdf, Folie 7

Port-Nummern sind 16-Bit-Zahlen von 0 bis 65.535; TCP und UDP verwenden sie, um Anwendungen auf einem Rechner zu unterscheiden.

## Frage: Was ist ein Socket?
id: 13zsc20
quelle: 01_ds-concept-sockets.pdf, Folie 8

Der Endpunkt einer bidirektionalen Kommunikationsverbindung zwischen zwei Programmen, gebunden an eine Portnummer, damit die TCP-Schicht die empfangende Anwendung identifizieren kann.

## Frage: Wie läuft der Verbindungsaufbau zwischen Client und Server ab?
id: 1s7fw2l
quelle: 01_ds-concept-sockets.pdf, Folie 8

Der Server horcht an einem Socket mit Portnummer; der Client kennt Rechnername und Port und startet eine Verbindungsanfrage; der Server akzeptiert; auf der Client-Seite wird ein Socket erzeugt; dann können beide kommunizieren.

## Frage: Welche Java-Klassen gehören zu TCP und UDP?
id: 1nevok1
quelle: 01_ds-concept-sockets.pdf, Folie 10

Zu TCP gehören Socket, ServerSocket und URL(Connection); zu UDP gehören DatagramSocket, DatagramPacket und MulticastSocket.

## Frage: Welche vier Schritte umfasst die Socket-Programmierung generell?
id: 1w7fy3k
quelle: 01_ds-concept-sockets.pdf, Folie 14

1. Socket öffnen, 2. Input-/Output-Streams erhalten, 3. in/aus den Streams schreiben/lesen (die eigentliche Funktionalität), 4. schließen und Speicherplatz freigeben.

## Frage: Was macht die Methode accept() eines ServerSocket?
id: 1xox4ah
quelle: 01_ds-concept-sockets.pdf, Folie 15

Sie wartet blockierend, bis eine Verbindung vom Client angefragt wird, und liefert dann den Socket für die Kommunikation.

## Frage: Was müssen Java-Objekte erfüllen, um über Streams versendet zu werden?
id: obfdr6
quelle: 01_ds-concept-sockets.pdf, Folie 29

Sie müssen in eine für den Netzwerkverkehr geeignete Repräsentation umgewandelt werden: ihre Klassen müssen das Interface Serializable implementieren.

## Frage: Wie funktioniert ein asynchroner Echo-Server?
id: p8ohow
quelle: 01_ds-concept-sockets.pdf, Folien 31, 33

Der von accept() erzeugte Client-Socket wird an einen Thread weitergereicht, der die Anfrage bearbeitet. Währenddessen kann der ServerSocket asynchron auf weitere Anfragen warten: Verbindungsaufbau und Verarbeitung sind entkoppelt.

## Frage: Was charakterisiert Java NIO?
id: ab82u2
quelle: 01_ds-concept-sockets.pdf, Folie 37

Non-Blocking (nicht blockierende IO-Vorgänge, gleichzeitiges Arbeiten möglich) und Pufferung (Daten werden in Puffern zwischengespeichert).
