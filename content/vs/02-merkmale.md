---
id: merkmale
title: Merkmale & Entwurfsziele
icon: 🎯
---

## Karte: Heterogenität
tag: def
quelle: 02_vs-overview.1.pdf, Folien 4-5

Aufgrund unterschiedlicher Technologien kann Heterogenität zu Inkonsistenzen führen, die die Systemstabilität stark beeinträchtigen. Ebenen: <b>Hardware-Heterogenität</b> (verschiedene Rechnerarchitekturen, Befehlssätze, Datenrepräsentation), <b>Netzwerk-Heterogenität</b> (Übertragungsmedien, Signale, Schnittstellen, Protokolle), <b>Software-Heterogenität</b> (verschiedene Betriebssysteme und Anwendungsprogramme).

## Karte: Verteilter Zugriff auf Ressourcen und Dienste
tag: def
quelle: 02_vs-overview.1.pdf, Folie 6

Hardware (z. B. Drucker oder Festplatten) kann geteilt werden; Nutzer können zusammenarbeiten und Dateien bzw. Webseiten teilen. Ein <b>Dienst (Service)</b> verwaltet eine Menge von Ressourcen und bietet ihre Funktion Benutzern und Anwendungen an (z. B. File Service, Print Service, Electronic Payment Service). Dienste bieten eine Menge von Operationen an.

## Karte: Transparenz
tag: def
quelle: 02_vs-overview.1.pdf, Folie 7

Transparenz dient dazu, Details der Implementierung zu verbergen. Sie erleichtert Entwicklung und Betrieb Verteilter Systeme und verbirgt die interne Komplexität vor dem Benutzer.

## Karte: Transparenz-Aspekte
tag: wichtig
quelle: 02_vs-overview.1.pdf, Folie 8

<b>Zugriffstransparenz:</b> Clients wissen nicht, welche Ressourcen sie nutzen. <b>Location-Transparenz:</b> Der geographische Ort einer Ressource spielt keine Rolle. <b>Nebenläufigkeitstransparenz:</b> Die interne Reihenfolge von Ereignissen ist für den Client nicht sichtbar. <b>Replikationstransparenz:</b> Mehrfach vorliegende Instanzen bleiben verborgen (z. B. Load-Balancing). <b>Fehler-Transparenz:</b> Bei Systemfehlern können Clients ihre Aufgaben ohne Störung beenden. <b>Migrationstransparenz:</b> Programme und Daten können auf andere Knoten verlagert werden, ohne die Funktionalität zu stören. <b>Ressourcentransparenz:</b> Nicht sichtbar, welche Ressourcen für eine Aufgabe verwendet werden.

## Karte: Offenheit
tag: def
quelle: 02_vs-overview.1.pdf, Folie 9

Ein offenes System bietet Komponenten an, die leicht in andere Systeme integriert werden können, und besteht umgekehrt oft aus Komponenten anderer Systeme. Allgemeiner Ansatz: standardisierte Schnittstellen, z. B. in einer formalen Sprache definiert (Interface Definition Language, IDL). Dadurch werden auch Interoperabilität und Portabilität erreicht. Offenheit ist die Voraussetzung für Erweiterbarkeit.

## Karte: Dimensionen der Skalierbarkeit
tag: def
quelle: 02_vs-overview.1.pdf, Folie 10

<b>Größen-Skalierbarkeit:</b> Benutzer oder Ressourcen können hinzugefügt werden, ohne Performance-Einbußen. <b>Geografische Skalierbarkeit:</b> Große Entfernungen zwischen Benutzern führen nicht zu Verzögerungen. <b>Administrative Skalierbarkeit:</b> Systeme bleiben einfach zu betreiben und zu warten, auch unter verschiedenen administrativen Organisationen.

## Karte: Skalierbarkeits-Probleme
quelle: 02_vs-overview.1.pdf, Folien 11-13

Zentrale Server werden schnell zu Bottlenecks, aus drei Gründen: begrenzte CPU, begrenzter Speicherplatz bzw. I/O-Transferrate, begrenzte Netzwerkkapazität. Geografische Skalierbarkeit wird häufig durch synchrone Kommunikation beeinträchtigt; Netzwerktechniken skalieren schlecht (was im LAN funktioniert, muss nicht im WAN funktionieren). Bei administrativer Skalierung: widersprüchliche Policys bei Ressourcennutzung, Payment, Management, Security: das System muss sich gegen die neue Domäne schützen und umgekehrt.

## Karte: Skalierungstechniken
tag: wichtig
quelle: 02_vs-overview.1.pdf, Folien 14-17

Zwei Dimensionen: <b>Scaling Up</b> (Kapazitäten der Knoten verbessern: CPU, Memory, Network) und <b>Scaling Out</b> (mehr Maschinen einbeziehen). Drei Strategien: Kommunikations-Latenzen verbergen (asynchrone Kommunikation, nebenläufige Threads, Funktionen auf den Client verlagern), Partitionieren und Verteilen (z. B. DNS auf mehrere Knoten verteilen) und Replikation.

## Karte: Replikation und Caching
tag: def
quelle: 02_vs-overview.1.pdf, Folie 18

Die Replikation einer Komponente erhöht ihre Verfügbarkeit und ermöglicht Load-Balancing. Caching ist eine besondere Form der Replikation: Caching geht auf eine Entscheidung des Clients zurück, Replikation eher auf den Server. Beide führen zu Konsistenzproblemen; wie streng die Konsistenzanforderungen sind, hängt von der Anwendung ab (finanzielle Transaktionen strenger als Web-Browsing). Allgemeine Synchronisierungs-Mechanismen sind schwer zu etablieren.

## Karte: Falsche Annahmen über Netzwerke
tag: wichtig
quelle: 02_vs-overview.1.pdf, Folie 19

Das Netzwerk ist verlässlich; das Netzwerk ist sicher; das Netzwerk ist homogen; die Topologie ändert sich nicht; die Latenz ist null; die Bandbreite ist unendlich; Transport-Kosten sind null; es gibt nur einen Administrator.

## Karte: Security
tag: def
quelle: 02_vs-overview.1.pdf, Folien 21-22

<b>Vertraulichkeit:</b> Daten können nur vom Empfänger gelesen werden (Verschlüsselung). <b>Integrität:</b> Daten wurden nicht verändert. <b>Authentizität:</b> Daten kommen von der Person, die als Sender firmiert. Offene Themen: Nicht alle Komponenten können physikalisch abgesichert werden, Denial-of-Service-Angriffe, Security bei Code-Migration. Annahmen über Angreifer: können Nachrichten unter falscher Identität senden und Nachrichten verändern.

## Karte: Fehler und Fehlermodelle
tag: def
quelle: 02_vs-overview.1.pdf, Folien 23-24

Jede Komponente kann ausfallen, überlastet sein oder die Verbindung verlieren. Fehlermodelle: <b>Unterlassungsfehler</b> (Prozess oder Kanal erbringen einen Dienst nicht: Crash, Nachrichtenverlust), <b>Timing-Fehler</b> (Aktionen nicht im Zeitfenster abgeschlossen bzw. zeitliche Zusicherungen überschritten), <b>willkürliche Fehler / byzantine failures</b> (Prozesse weichen vom intendierten Verhalten ab, Kanäle verfälschen Nachrichten). Ansätze: Checksummen erkennen Verfälschungen, Nummerierung von Paketen erkennt Datenverluste.

## Karte: Nebenläufigkeit als Herausforderung
quelle: 02_vs-overview.1.pdf, Folien 26-27

Geschwindigkeitsgewinne einzelner CPUs sind derzeit nicht leicht zu erzielen, während die Transistordichte zunimmt: Multicore-Architekturen setzen sich durch, nebenläufige Programmierung bestimmt zunehmend die Praxis. Nebenläufige Ausführung ist der Standardfall in Verteilten Systemen; nebenläufiger Zugriff auf Ressourcen muss synchronisiert werden. Lösungsansätze: Java Threads, Java Semaphores, nicht-blockierende Systemaufrufe (z. B. Java NewIO).

## Frage: Auf welchen Ebenen kann Heterogenität auftreten?
id: 1ae145t
quelle: 02_vs-overview.1.pdf, Folie 5

Hardware (Rechnerarchitekturen, Befehlssätze, Datenrepräsentation), Netzwerk (Übertragungsmedien, Signale, Schnittstellen, Protokolle) und Software (Betriebssysteme, Anwendungsprogramme).

## Frage: Was ist ein Dienst (Service)?
id: 1ju8c3s
quelle: 02_vs-overview.1.pdf, Folie 6

Ein Dienst verwaltet eine Menge von Ressourcen und bietet ihre Funktion über eine Menge von Operationen an.

## Frage: Was ist Transparenz und welche Aspekte gibt es?
id: 1dwjybb
quelle: 02_vs-overview.1.pdf, Folien 7-8

Transparenz verbirgt Details der Implementierung. Aspekte: Zugriffs-, Location-, Nebenläufigkeits-, Replikations-, Fehler-, Migrations- und Ressourcentransparenz.

## Frage: Was zeichnet ein offenes System aus?
id: fcssy1
quelle: 02_vs-overview.1.pdf, Folie 9

Es bietet Komponenten an, die leicht in andere Systeme integriert werden können, über standardisierte Schnittstellen (z. B. per IDL definiert). Damit werden Interoperabilität und Portabilität erreicht; Offenheit ist Voraussetzung für Erweiterbarkeit.

## Frage: Welche drei Dimensionen der Skalierbarkeit gibt es?
id: 1lyzngj
quelle: 02_vs-overview.1.pdf, Folie 10

Größen-Skalierbarkeit, geografische Skalierbarkeit und administrative Skalierbarkeit.

## Frage: Aus welchen Gründen werden zentrale Server zu Bottlenecks?
id: 1qs88jh
quelle: 02_vs-overview.1.pdf, Folie 11

Begrenzte CPU, begrenzter Speicherplatz bzw. I/O-Transferrate und begrenzte Netzwerkkapazität.

## Frage: Welche Skalierungstechniken nennen die Folien?
id: snqi74
quelle: 02_vs-overview.1.pdf, Folie 14

Scaling Up (Knoten verbessern) vs. Scaling Out (mehr Maschinen). Strategien: Kommunikations-Latenzen verbergen, Partitionieren und Verteilen, Replikation.

## Frage: Worin unterscheiden sich Caching und Replikation?
id: pwvn2b
quelle: 02_vs-overview.1.pdf, Folie 18

Caching ist eine besondere Form der Replikation, geht aber auf eine Entscheidung des Clients zurück, während Replikation eher vom Server veranlasst wird. Beide führen zu Konsistenzproblemen.

## Frage: Nennen Sie vier falsche Annahmen über Netzwerke.
id: 1a23ba6
quelle: 02_vs-overview.1.pdf, Folie 19

Z. B.: Das Netzwerk ist verlässlich; das Netzwerk ist sicher; die Latenz ist null; die Bandbreite ist unendlich (außerdem: homogen, feste Topologie, Transportkosten null, nur ein Administrator).

## Frage: Was bedeuten Vertraulichkeit, Integrität und Authentizität?
id: hsfccz
quelle: 02_vs-overview.1.pdf, Folie 21

Vertraulichkeit: Daten können nur vom Empfänger gelesen werden (Verschlüsselung). Integrität: Daten wurden nicht verändert. Authentizität: Daten kommen von der Person, die als Sender firmiert.

## Frage: Welche Fehlermodelle unterscheiden die Folien?
id: 7ehwws
quelle: 02_vs-overview.1.pdf, Folie 24

Unterlassungsfehler (Crash, Kommunikationsfehler), Timing-Fehler (synchrone Systeme, Echtzeitsysteme) und willkürliche Fehler (byzantine failures: fehlerhafte Werte, verfälschte Nachrichten).

## Frage: Was sind Byzantine Failures?
id: 3b0ltc
quelle: 02_vs-overview.1.pdf, Folie 24

Byzantine Failures sind willkürliche Fehler: Prozesse weichen vom intendierten Verhalten ab, zum Beispiel durch fehlerhafte Werte, oder Kanäle verfälschen Nachrichten.
