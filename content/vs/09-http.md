---
id: http
title: HTTP
icon: 📨
---

## Karte: http
tag: def
quelle: 03-ds-http.pdf, Folien 4-5

Das Hypertext Transfer-Protokoll definiert die Art und Weise, wie Browser und andere Clients mit Webservern interagieren. Besondere Funktionen: <b>Request-Reply-Protokoll</b> (Client sendet Anfrage mit URL, erhält Inhalt oder Fehlermeldung), <b>asymmetrisch</b> (der Client ruft die Ressourcen ab), <b>zustandslos</b>, <b>Inhaltstypen</b> nach MIME-Typ, eine http-Anfrage pro Ressource, einfache Mechanismen zur Zugriffskontrolle. http ist das Protokoll des WWW und baut auf dem TCP/IP-Stack auf.

## Karte: Ressource, URI und URL
tag: def
quelle: 03-ds-http.pdf, Folie 6

Der Begriff <b>Ressource</b> ist eine Abstraktion über Dokumente, Bilder, Dienste usw., die auf einem Webserver verfügbar sind; Ressourcen können über URIs angesprochen werden. Eine <b>URI</b> ist ein Name, der eine Ressource identifiziert. Eine <b>URL</b> ist eine URI, aus der man den Ort der Ressource ablesen kann.

## Karte: Aufbau einer URL
tag: def
quelle: 03-ds-http.pdf, Folie 7

Syntax: <code>Protokoll://Hostname:Port/Pfad-und-Dateiname</code>. Vier Teile: <b>Protokoll</b> (z. B. HTTP, FTP, Telnet), <b>Hostname</b> (DNS-Domänenname oder IP-Adresse), <b>Port</b> (TCP-Portnummer, die der Server überwacht), <b>Pfad- und Dateiname</b> (Name und Speicherort der Ressource im Basisverzeichnis).

## Karte: Nachrichten: Aufbau
tag: def
quelle: 03-ds-http.pdf, Folien 8, 11-12

Nachrichten können Anfragen oder Antworten sein und bestehen aus drei Teilen: einer Startzeile, einem Block von Headern und einem optionalen Textkörper. Anfragen und Antworten werden über einen vorhandenen TCP-Stream als Text (ASCII) gesendet. In der Startzeile einer Anfrage steht, was zu tun ist (Methodenname, Ressourcen-URL, http-Version); in der Startzeile einer Antwort steht, was passiert ist (http-Version, Statuscode, Textphrase).

## Karte: http-Methoden
tag: wichtig
quelle: 03-ds-http.pdf, Folie 13

<b>GET:</b> fordert die Ressource der URL an; verweist die URL auf ein Programm, wird es ausgeführt und die Ausgabe zurückgegeben. <b>HEAD:</b> identisch mit GET, gibt aber keine Daten zurück, sondern Informationen über die Daten (letzte Änderung, Größe usw.). <b>POST:</b> gibt die URL einer Ressource an, die mit der Datenlieferung in der Anfrage umgehen kann. <b>PUT:</b> fordert, dass die gelieferten Daten unter der angegebenen URL gespeichert werden. Andere: DELETE, OPTIONS, TRACE.

## Karte: Request im Detail
tag: beispiel
quelle: 03-ds-http.pdf, Folien 16-17

Die Request-Zeile besteht aus drei Komponenten: Methoden-Name, URI, http-Version, z. B. <code>GET /test.html HTTP/1.1</code>. Request-Header haben die Form von Namens-Wert-Paaren, z. B. <code>Host: www.xyz.com</code>, <code>Connection: Keep-Alive</code>, <code>Accept: image/gif, image/jpeg, */*</code>.

## Karte: Response und Statuszeile
tag: wichtig
quelle: 03-ds-http.pdf, Folie 19

Die Statuszeile besteht aus: <b>HTTP-Version</b> (HTTP/1.0 oder HTTP/1.1), <b>status-code</b> (dreistellige Zahl, die das Ergebnis widerspiegelt) und <b>reason-phrase</b> (kurze Erklärung). Häufige Statuscodes: „200 OK“, „404 Nicht gefunden“, „403 Verboten“, „500 Interner Serverfehler“.

## Karte: Marshaling und MIME-Types
tag: def
quelle: 03-ds-http.pdf, Folie 23

Requests und Responses werden als ASCII-String übertragen; Ressourcen können als Byte-Sequenzen repräsentiert und komprimiert werden. Multipurpose Internet Mail Extensions (MIME)-Typen kennzeichnen die Inhalte: z. B. text/plain, text/html, image/gif, image/video.

## Frage: Welche besonderen Funktionen hat http?
id: 159wt7
quelle: 03-ds-http.pdf, Folien 4-5

Request-Reply-Protokoll, asymmetrisch (Client ruft Ressourcen ab), zustandslos, Inhaltstypen nach MIME-Typ, eine Anfrage pro Ressource, einfache Zugriffskontrolle. Es baut auf dem TCP/IP-Stack auf.

## Frage: Wozu dienen MIME-Types?
id: 1f2qvxg
quelle: 03-ds-http.pdf, Folien 4, 23

Sie kennzeichnen die Inhaltstypen der übertragenen Ressourcen (z. B. text/plain, text/html, image/gif), damit Inhalte je nach Typ unterschiedlich behandelt werden können.

## Frage: Was unterscheidet URI und URL?
id: 1ycfjrg
quelle: 03-ds-http.pdf, Folie 6

Eine URI ist ein Name, der eine Ressource identifiziert; eine URL ist eine URI, aus der man zusätzlich den Ort der Ressource ablesen kann.

## Frage: Aus welchen vier Teilen besteht eine URL?
id: owyrd9
quelle: 03-ds-http.pdf, Folie 7

Protokoll, Hostname (DNS-Name oder IP), Port (TCP-Portnummer) sowie Pfad- und Dateiname der Ressource.

## Frage: Aus welchen drei Teilen besteht eine http-Nachricht?
id: ju7ioh
quelle: 03-ds-http.pdf, Folien 8, 11

Startzeile, Block von Headern und optionaler Textkörper, gesendet als ASCII-Text über einen TCP-Stream.

## Frage: Was unterscheidet GET und HEAD?
id: 1qjn0lf
quelle: 03-ds-http.pdf, Folie 13

HEAD ist identisch mit GET, gibt aber keine Daten zurück; nur Informationen über die Daten (z. B. letzte Änderung, Größe).

## Frage: Wofür stehen GET, HEAD, POST und PUT?
id: eycprb
quelle: 03-ds-http.pdf, Folie 13

GET ruft eine Ressource ab, HEAD nur Metainfos, POST liefert Daten an eine Ressource und PUT speichert Daten unter einer URL.

## Frage: Woraus besteht die Statuszeile einer Antwort?
id: m1ebmn
quelle: 03-ds-http.pdf, Folie 19

HTTP-Version, dreistelligem Statuscode und einer reason-phrase. Beispiele: 200 OK, 404 Not Found, 403 Forbidden, 500 Internal Server Error.
