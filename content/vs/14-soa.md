---
id: soa
title: SOA & Web Services
icon: 🧭
---

## Karte: SOA
tag: def
quelle: 11-ds-soa.pdf, Folie 4

SOA ist ein Paradigma für die Strukturierung und Nutzung verteilter Funktionalität, die von unterschiedlichen Besitzern verantwortet wird. SOA ist keine Architektur, sondern ein Framework zum Architektur-Management. Typischerweise müssen Interessen verschiedener Stakeholder in Einklang gebracht werden; SOA soll die Steuerung komplexer Unternehmenslandschaften erleichtern (technische und organisationale Hindernisse).

## Karte: Herausforderungen und Framework-Bestandteile
tag: def
quelle: 11-ds-soa.pdf, Folie 6

Herausforderungen: Steuerung von IT-Architekturen nach unternehmerischen Kriterien, Flexibilität, Agilität. Bestandteile des SOA-Frameworks: Dienste (stellen in sich abgeschlossene Funktionalitäten zur Verfügung), spezifische Infrastruktur sowie Policys und Prozesse, die die Steuerung ermöglichen.

## Karte: Services in der SOA
tag: def
quelle: 11-ds-soa.pdf, Folie 11

Dienste sind grobgranulare Bausteine von Softwaresystemen mit loser Kopplung zu komplexen Geschäftsprozessen. Sie kapseln Funktionalität und Daten und machen sie über eine wohldefinierte Schnittstelle verfügbar. Ziel: Interoperabilität über Plattform- und Unternehmensgrenzen hinweg.

## Karte: Eigenschaften von Diensten
tag: wichtig
quelle: 11-ds-soa.pdf, Folie 12

Ein Dienst ist eine IT-Repräsentation fachlicher Funktionalität; in sich abgeschlossen (autark) und eigenständig nutzbar; im Netzwerk verfügbar; hat eine wohldefinierte veröffentlichte Schnittstelle (Vertrag); für die Nutzung reicht die Kenntnis der Schnittstelle; plattformunabhängig (Anbieter und Nutzer können verschiedene Sprachen/Plattformen verwenden); in einem Verzeichnis registriert; dynamisch gebunden (wird erst bei der Ausführung lokalisiert und eingebunden); sollte grobgranular sein, um Abhängigkeiten zwischen verteilten Systemen zu senken.

## Karte: Typische Themen im Architektur-Management
tag: def
quelle: 11-ds-soa.pdf, Folie 15

<b>Redundanzen:</b> Ein Dienst wird von mehreren Dienstleistern gleichzeitig erbracht (Folge von Zusammenschlüssen oder Eigeninitiativen); unternehmensglobal sollte auf denselben Dienst gesetzt werden. <b>Outsourcing:</b> Wenn externe Angebote kostengünstiger sind; Entscheidung mit Bedacht treffen. <b>Insellösungen:</b> Historisch gewachsene Architekturen bilden Silo-Anwendungen ohne Schnittstellen zu den restlichen Anwendungen heraus (Legacy-Anwendungen).

## Karte: SOAP
tag: def
quelle: 11-ds-soa.pdf, Folien 21, 23-24

SOAP stützt sich intern auf ein Transportprotokoll (z. B. http); Parameter werden in XML beschrieben (auf Basis von XML-Schema). Eine SOAP-Nachricht besteht aus einem <b>Envelope</b> („Briefumschlag“), der einen optionalen <b>Header</b> und einen <b>Body</b> enthält. Im Header können beliebige Meta-Informationen codiert werden (z. B. Authentifizierung/Autorisierung); der Body enthält die eigentliche Nutzlast für den Dienstaufruf. Der Envelope kann in andere Protokolle eingebettet und von ihnen übertragen werden. Nachteile: Performance-Einschränkungen durch die XML-basierte Datenrepräsentation; keine automatische Speicherverwaltung oder Referenzen wie bei RMI.

## Karte: WSDL: Beschreibungselemente
tag: def
quelle: 11-ds-soa.pdf, Folie 27

<b>Types:</b> komplexe Datentypen, definiert per XML-Schema, für den Aufruf von Web Services. <b>Message:</b> Beschreibung der Nachrichten zwischen Clients und Web Services beim Aufruf einer Operation; eine Message kann aus mehreren Teilen bestehen, jeder Teil durch einen Datentyp repräsentiert. <b>portType (Interfaces):</b> fasst eine Menge von Operationen zusammen; jede Operation wird auf Basis der definierten Messages und Datentypen definiert.

## Karte: WSDL: Bindings und Endpunkte
tag: def
quelle: 11-ds-soa.pdf, Folie 28

<b>Binding (Protocol):</b> Definition für die Kommunikation mit dem abstrakten Interface eines Web Service: Spezifikation von Nachrichtenformat und Transportprotokoll (z. B. SOAP, http). <b>Port (Communication endpoint):</b> ein einzelner Service-Endpunkt, spezifiziert durch eine IP-Adresse für ein definiertes Binding. <b>Service:</b> Zusammenfassung einzelner Endpunkte unter einem logischen Namen; mehrere Ports können denselben portType referenzieren (ggf. mit verschiedenen Binding-Alternativen).

## Frage: Wie ist SOA definiert?
id: 1u1b576
quelle: 11-ds-soa.pdf, Folie 4

Ein Paradigma für die Strukturierung und Nutzung verteilter Funktionalität, die von unterschiedlichen Besitzern verantwortet wird; keine Architektur, sondern ein Framework zum Architektur-Management.

## Frage: Aus welchen Bestandteilen besteht das SOA-Framework?
id: 16qg2rs
quelle: 11-ds-soa.pdf, Folie 6

Dienste (in sich abgeschlossene Funktionalitäten), spezifische Infrastruktur sowie Policys und Prozesse zur Steuerung.

## Frage: Nennen Sie wesentliche Eigenschaften von Diensten in der SOA.
id: 1n8wpn3
quelle: 11-ds-soa.pdf, Folie 12

IT-Repräsentation fachlicher Funktionalität; autark; im Netzwerk verfügbar; wohldefinierte veröffentlichte Schnittstelle (Vertrag); plattformunabhängig; in einem Verzeichnis registriert; dynamisch gebunden; grobgranular.

## Frage: Welche Granularität sollen Dienste in SOA haben?
id: 1ekpu58
quelle: 11-ds-soa.pdf, Folie 12

Dienste sollen grobgranular sein, um Abhängigkeiten zwischen verteilten Systemen zu senken.

## Frage: Was bedeutet dynamisch gebunden?
id: 1i6klc7
quelle: 11-ds-soa.pdf, Folie 12

Dynamisch gebunden bedeutet, dass der Dienst beim Erstellen der Anwendung nicht vorhanden sein muss; er wird erst bei der Ausführung lokalisiert und eingebunden.

## Frage: Welche typischen Themen behandelt das SOA-Architektur-Management?
id: nxwlo1
quelle: 11-ds-soa.pdf, Folie 15

Redundanzen (derselbe Dienst mehrfach erbracht), Outsourcing (externe, kostengünstigere Angebote) und Insellösungen (Silo-/Legacy-Anwendungen ohne Schnittstellen).

## Frage: Woraus besteht eine SOAP-Nachricht?
id: 93whnx
quelle: 11-ds-soa.pdf, Folien 23-24

Aus einem Envelope, der einen optionalen Header (Meta-Informationen, z. B. Authentifizierung) und einen Body (die eigentliche Nutzlast für den Dienstaufruf) enthält.

## Frage: Welche Nachteile hat SOAP?
id: 12xm1yp
quelle: 11-ds-soa.pdf, Folie 23

Performance-Einschränkungen durch die XML-basierte Datenrepräsentation und keine automatische Speicherverwaltung oder Referenzen wie bei RMI.

## Frage: Welche Elemente beschreibt WSDL?
id: 9yl2bs
quelle: 11-ds-soa.pdf, Folien 27-28

Types (Datentypen per XML-Schema), Messages (ausgetauschte Nachrichten), portType (Interfaces mit Operationen), Binding (Nachrichtenformat und Transportprotokoll), Port (Endpunkt für ein Binding) und Service (logische Zusammenfassung von Endpunkten).
