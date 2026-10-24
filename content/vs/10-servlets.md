---
id: servlets
title: Servlets & Application Server
icon: 🧰
---

## Karte: Server-Erweiterungen
tag: def
quelle: 05_ds-servlets.pdf, Folien 4-6

Zur Bereitstellung statischer Inhalte werden Standard-Webserver verwendet; Webserver-Erweiterungen dienen dem Erstellen dynamischer Inhalte. <b>CGI (Common Gateway Interface):</b> ursprünglich für den Zugriff auf andere Anwendungen vom Webserver; für jede Anfrage wird ein OS-Prozess erstellt, der normalerweise nicht mit dem Server interagieren kann. <b>Servlets:</b> generische Servererweiterungen auf Basis von Java-Klassen, die dynamisch geladen werden können und in der JVM des Servers laufen.

## Karte: Servlet
tag: def
quelle: 05_ds-servlets.pdf, Folien 7-9, 11

Ein Servlet ist eine Java-Klasse, die zur Erweiterung der Funktionen von Webservern verwendet wird — für Anwendungen mit Anforderungs-Antwort-Programmiermodell. Vorteile: Portabilität, kein Betriebssystem-Overhead, voller Zugriff auf Java-APIs, Strong Typing. Servlet-Anfragen werden in einem separaten Thread verarbeitet; Servlets können eng mit dem Server interagieren. Hinweis: JSP ist heute veraltet und wird durch Java Server Faces (JSF) ersetzt.

## Karte: Servlet-API
tag: def
quelle: 05_ds-servlets.pdf, Folien 11, 14-17

Java bietet zwei Pakete: <code>javax.servlet</code> für generische protokollunabhängige Servlets und <code>javax.servlet.http</code> mit http-spezifischer Funktionalität. Jedes Servlet muss die Schnittstelle <code>Servlet</code> implementieren (definiert Lebenszyklusmethoden); die meisten erweitern <code>GenericServlet</code> oder <code>HttpServlet</code>. Ein generisches Servlet überschreibt <code>service()</code> (Parameter: Anforderungs- und Antwortobjekt); http-Servlets überschreiben <code>doGet()</code> und <code>doPost()</code> (die service-Methode nicht). Support-Klassen: <code>HttpServletRequest/Response</code>, <code>HttpSession</code> (Sitzungsverfolgung), <code>Cookie</code>.

## Karte: GET und POST bei Servlets
tag: wichtig
quelle: 05_ds-servlets.pdf, Folien 13, 25-26

GET und POST sind die am häufigsten verwendeten http-Methoden; der ursprüngliche Unterschied ist ins Wanken geraten. GET-Anfragen haben auf vielen Plattformen eine Längenbeschränkung (240 Zeichen), POST kann große Datenmengen übertragen. Ein Servlet sollte für GET und POST das gleiche Verhalten bereitstellen — einfache Implementierung: POST-Anfragen an den GET-Handler weiterleiten. HEAD-Anfragen werden von der Standardimplementierung verarbeitet.

## Karte: Servlet-Lebenszyklus
tag: wichtig
quelle: 05_ds-servlets.pdf, Folien 29, 31

Der Lebenszyklus wird durch den Container gesteuert. Schritte bei einer Anfrage: 1. Wenn keine Instanz existiert, lädt der Webcontainer die Servlet-Klasse; 2. erstellt eine Instanz; 3. initialisiert sie durch Aufruf von <code>init</code>; 4. ruft die Service-Methode mit Anforderungs- und Antwortobjekten auf; 5. beim Entfernen finalisiert der Container das Servlet über <code>destroy</code>; 6. der Garbage Collector entfernt den Rest. Nach dem Laden sind Servlets multithreaded.

## Karte: Servlet-Container und web.xml
tag: def
quelle: 05_ds-servlets.pdf, Folien 32-33

Servlets laufen im Allgemeinen auf derselben JVM wie der Webserver in einem Betriebssystemprozess; sie können Daten im selben Prozess gemeinsam nutzen und sind durch die Mechanismen von Java geschützt. Im Bereitstellungsdeskriptor <code>web.xml</code> definiert <code>servlet</code> das zu ladende Servlet und <code>servlet-mapping</code> ordnet es einer URL zu.

## Karte: Informationen aus der Anfrage
tag: def
quelle: 05_ds-servlets.pdf, Folien 34-36

http-Servlets erhalten ein <code>HttpServletRequest</code>-Objekt mit Anforderungs-URL, Headern, Query-String usw. Anforderungspfad: Kontextpfad + Servlet-Pfad + Pfadinfo (Zugriff über <code>getContextPath</code>, <code>getServletPath</code>, <code>getPathInfo</code>). Query-Strings bestehen aus Parametern und Werten; einzelne Parameter werden mit <code>getParameter</code> abgerufen. Sie können explizit auf einer Webseite erscheinen oder beim Senden eines Formulars mit GET an die URL angehängt werden.

## Karte: Antworten konstruieren
tag: def
quelle: 05_ds-servlets.pdf, Folien 38-39

Alle Antworten implementieren <code>ServletResponse</code>: Für Zeichendaten den <code>PrintWriter</code> von <code>getWriter()</code> verwenden; für Binärdaten den <code>ServletOutputStream</code> von <code>getOutputStream()</code>; für gemischte Daten den OutputStream mit manueller Verwaltung. Inhaltstyp mit <code>setContentType()</code> (z. B. text/html) angeben; Pufferung mit <code>setBufferSize(int)</code> — standardmäßig werden Inhalte sofort an den Client gesendet.

## Karte: Kontext, Session und Cookies
tag: def
quelle: 05_ds-servlets.pdf, Folien 41-44

Der <b>ServletContext</b> bietet Zugriff auf Initialisierungsparameter, Ressourcen, objektwertige Attribute und Protokollierung. Eine <b>Benutzersitzung</b> enthält Informationen über den Benutzer über mehrere HTTP-Anfragen hinweg: <code>HttpSession session = request.getSession();</code>, Werte per <code>setAttribute/getAttribute</code> — Sitzungen funktionieren auf Serverclustern nicht gut. <b>Cookies</b> sind kleine Datenstücke auf dem Client-Rechner: dem Response-Objekt hinzufügen (<code>response.addCookie(cookie)</code>), vom Request-Objekt abrufen (<code>request.getCookies()</code>); die Ablaufzeit kann bei der Erstellung festgelegt werden.

## Karte: Application Server und Glassfish
tag: def
quelle: 04-ds-glassfish.pdf, Folien 9, 11

Ein Application Server ist ein Server, auf dem Applikationen zum Laufen gebracht werden können — unabhängig von deren Funktionalität. Er stellt Infrastrukturmerkmale wie Clustering, Fail-Over und Load Balancing bereit; ein Application-Server-Framework stellt die APIs bereit. So werden Entwickler von Infrastruktur-Aspekten entlastet. Glassfish ist ein Application Server; jede Glassfish-Instanz läuft in einer JVM, neben den Application-Containern gibt es ein Administrations-Modul.

## Karte: Glassfish: Jakarta-EE-Container
tag: def
quelle: 04-ds-glassfish.pdf, Folie 10

Die APIs werden durch Jakarta EE definiert. Man spricht von logischen Containern, in die funktionstragende Applikationskomponenten eingefügt werden: <b>EJB-Container</b> (Enterprise Java Beans als Komponenten), <b>Web-Container</b> (Jakarta-Servlets, Jakarta Server Pages) und <b>JMS-Provider</b> (Java Messaging Service).

## Frage: Was ist ein Application Server?
id: 1j1tjco
quelle: 04-ds-glassfish.pdf, Folie 9

Ein Server, auf dem Applikationen zum Laufen gebracht werden können — er stellt Infrastrukturmerkmale wie Clustering, Fail-Over und Load Balancing bereit und entlastet Entwickler von Infrastruktur-Aspekten.

## Frage: Welche logischen Container definiert Jakarta EE in Glassfish?
id: uvem8w
quelle: 04-ds-glassfish.pdf, Folie 10

EJB-Container (Enterprise Java Beans), Web-Container (Jakarta-Servlets, Jakarta Server Pages) und JMS-Provider (Java Messaging Service).

## Frage: Welche Vorteile haben Servlets gegenüber CGI?
id: obipj4
quelle: 05_ds-servlets.pdf, Folien 5, 7-8

Bei CGI wird für jede Anfrage ein OS-Prozess erstellt, der kaum mit dem Server interagieren kann. Servlets: Portabilität, kein Betriebssystem-Overhead, voller Zugriff auf Java-APIs, Strong Typing, enge Interaktion mit dem Server.

## Frage: Was ist ein Servlet und wo läuft es?
id: mv3fik
quelle: 05_ds-servlets.pdf, Folien 6-7, 11

Eine Java-Klasse zur Erweiterung von Webservern (Anforderungs-Antwort-Modell). Es wird dynamisch geladen und in der JVM des Servers ausgeführt; Anfragen werden in separaten Threads verarbeitet.

## Frage: Welche Methoden überschreibt ein http-Servlet üblicherweise?
id: 1h4jdgp
quelle: 05_ds-servlets.pdf, Folie 16

doGet() und doPost() — die service-Methode wird nicht überschrieben. Zusätzlich können doPut() und doDelete() überschrieben werden; für HEAD, TRACE und OPTIONS gibt es Standardimplementierungen.

## Frage: Beschreiben Sie den Servlet-Lebenszyklus.
id: 1uhh9e0
quelle: 05_ds-servlets.pdf, Folien 29, 31

Der Container lädt bei Bedarf die Servlet-Klasse, erstellt eine Instanz, initialisiert sie mit init, ruft für Anfragen die Service-Methode auf, finalisiert beim Entfernen mit destroy — danach räumt der Garbage Collector auf. Nach dem Laden sind Servlets multithreaded.

## Frage: Welche Rolle hat web.xml?
id: 1tzvg96
quelle: 05_ds-servlets.pdf, Folie 33

web.xml ist der Bereitstellungsdeskriptor: servlet definiert das Servlet, servlet-mapping ordnet es einer URL zu.

## Frage: Wie werden Sitzungen in Servlets verwaltet und was ist die Einschränkung?
id: uukmn9
quelle: 05_ds-servlets.pdf, Folie 42

Über HttpSession (request.getSession()): Sie speichert Benutzerinformationen über mehrere HTTP-Anfragen hinweg, Werte per setAttribute/getAttribute. Einschränkung: Sitzungen funktionieren auf Serverclustern nicht gut.

## Frage: Was ist ein Cookie?
id: 1ct3h8p
quelle: 05_ds-servlets.pdf, Folien 43-44

Ein Cookie ist ein kleines Datenstück auf dem Client; addCookie() wird am Response genutzt, getCookies() am Request.
