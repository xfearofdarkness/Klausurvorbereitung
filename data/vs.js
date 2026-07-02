window.APP_SUBJECTS = window.APP_SUBJECTS || {};

window.APP_SUBJECTS.vs = {
  id: "vs",
  title: "VS",
  subtitle: "Verteilte Systeme",
  icon: "🌐",
  topics: [
    {
      id: "grundlagen",
      title: "Grundlagen & Definitionen",
      icon: "🧩",
      cards: [
        {
          t: "Verteilte Systeme",
          b: "Geografische Verteilung von Komponenten, kein gemeinsamer Speicher, dezentrale Administration. Die Komponenten kooperieren, um ein gemeinsames Ziel zu erreichen.",
          tag: "def",
          source: "02_vs-overview.pdf, Folie 5"
        },
        {
          t: "Weitere Definitionen",
          b: "<b>Tanenbaum:</b> Eine Sammlung unabhängiger Computer, die dem Benutzer als ein einziges, verbundenes System erscheinen. <b>Coulouris:</b> Ein System, in dem Komponenten auf vernetzten Computern miteinander kommunizieren und ihre Aktionen durch Nachrichtenübermittlung koordinieren. <b>Tari:</b> Eine Ansammlung autonomer Computer, über ein Netzwerk verbunden, mit Software zur Koordination von Aktivitäten und gemeinsamen Ressourcennutzung. <b>Lamport:</b> Ein System, mit dem man nicht arbeiten kann, weil ein Computer defekt ist, von dem noch niemand etwas gehört hat.",
          tag: "def",
          source: "02_vs-overview.pdf, Folie 6"
        },
        {
          t: "Anwendungsdomänen",
          b: "Finanz und Handel (eCommerce, ePayment, Online-Banking), Informationsgesellschaft (Web, Social Media), Kreativbereich (Online Gaming, Streaming, User Created Content), Healthcare (elektronische Patientenakte, Telemedizin, Assisted Living), Bildung (E-Learning), Transport und Logistik (Navigation, Track'n'Trace), Wissenschaft (Grid/Cluster, Big Data), Umwelt (sensorbasierte Frühwarnsysteme).",
          source: "02_vs-overview.pdf, Folien 8-9"
        },
        {
          t: "Beispiel: Google Web Search",
          b: "Das größte Verteilte System der Geschichte: ca. 10 Milliarden Suchanfragen/Monat, Indizierung von über 63 Milliarden Webseiten. Dazu gehören eine physikalische Infrastruktur aus vernetzten Knoten in Datenzentren weltweit, ein verteiltes Dateisystem mit sehr schnellen Zugriffen, verteilter Speicher, verteilte Behandlung von Locks und Agreement sowie ein Programmiermodell für verteilte und parallele Berechnungen.",
          tag: "beispiel",
          source: "02_vs-overview.pdf, Folie 10"
        },
        {
          t: "Was ist KEIN Verteiltes System?",
          b: "Zentraler Mainframe mit sternförmig verbundenen Terminals ohne lokale Funktionalität (Thin Clients); Shared-Memory-Hypercube (Multiprozessorsystem, das per Shared Memory kommuniziert); Workstation-Cluster ohne zielgerichtete Zusammenarbeit.",
          tag: "wichtig",
          source: "02_vs-overview.pdf, Folie 12"
        },
        {
          t: "Funktionsprinzipien",
          b: "Ein Verteiltes System besteht aus einer Ansammlung rechnender Elemente (Knoten). Ein Knoten reagiert auf eintreffende Nachrichten, verarbeitet sie und versendet in Reaktion wiederum Nachrichten. Da die Knoten unabhängig arbeiten, gibt es keine gemeinsame global gültige Zeit. Es muss Mechanismen geben, die Zugehörigkeit, Zugang und Verlassen des Systems regeln. Die Verteilung soll transparent bleiben — das System soll einheitlich erscheinen (Verteilungstransparenz).",
          tag: "wichtig",
          source: "02_vs-overview.pdf, Folie 13"
        },
        {
          t: "Konsequenzen der Verteilung",
          b: "<b>Nebenläufigkeit</b> ist der Normalfall — die Knoten arbeiten parallel. <b>Keine globale Uhr:</b> Die Knoten koordinieren ihre Aktivitäten in Form von versendeten Nachrichten. <b>Unabhängige Fehlerfälle:</b> Es können viele Fehlersituationen auftreten; zu den Eigenschaften Verteilter Systeme gehört, dass auch in solchen Fällen Funktionalität erbracht werden kann.",
          tag: "wichtig",
          source: "02_vs-overview.pdf, Folie 14"
        },
        {
          t: "Historische Entwicklung",
          b: "Seit Mitte der 80er Jahre Trend zur Abkehr von zentralisierten Systemen. Einflussfaktoren: schnellere und effizientere Prozessoren bei sinkenden Preisen, schnellere lokale Datennetze (LANs, z. B. Ethernet), Software Engineering mit Modularisierung und Objektorientierung (RPC, Distributed Objects, Service Orientation). Schritte: 1. Klassische Verteilte Systeme (RPC, RMI, JMS), 2. Plattformen (Middleware wie CORBA, Application Server, Componentware, SOA), 3. Web-Technologien (XML, Web-Services, Cloud Computing), 4. Mobile Computing.",
          source: "02_vs-overview.pdf, Folien 16-17"
        },
        {
          t: "Architektur (Motivation)",
          b: "Systemarchitektur ist ein Ansatz zur methodischen Beschreibung komplexer und insbesondere verteilter Systeme. Verteilte Systeme sind heterogen und nicht durchgängig in einer einzigen Programmiersprache realisiert — deshalb sind abstraktere Beschreibungskonzepte notwendig. Wichtige Aspekte: Struktur, Verhalten, Kommunikation, Deployment. Elemente von Architekturbeschreibungen: Komponenten, Schnittstellen, Implementierungen, Relationen, Kommunikation, Constraints.",
          tag: "def",
          source: "02_vs-overview.pdf, Folien 19-20"
        },
        {
          t: "OSI-Modell",
          b: "Open Systems Interconnection Model (1983). Anwendungsbezogene Schichten: 5–7. Schicht 4: Communication Services (TCP/UDP). Schicht 3: Routing, Addressing (z. B. IP-Protokoll). Schicht 2: Data Security. Schicht 1: Physical Transmission (Interaktion mit der Hardware).",
          tag: "def",
          source: "02_vs-overview.pdf, Folie 21"
        },
        {
          t: "Middleware",
          b: "Allgemeine Programme, die zwischen Applikationen vermitteln und dabei die Komplexität des Gesamtsystems verbergen. Eine Middleware implementiert i. d. R. die Grundlagen für Transparenz in Verteilten Systemen und ist normalerweise in den oberen Schichten des OSI-Modells angesiedelt. Sie spielt eine ähnliche Rolle wie das Betriebssystem für laufende Prozesse und bietet generische Dienste an: Kommunikation zwischen Anwendungen, Security, Verwaltungsdienste, Fehlerbehandlung und Robustheit. Oft fungiert sie als Container mit Infrastrukturdiensten.",
          tag: "def",
          source: "02_vs-overview.pdf, Folien 22-24"
        },
        {
          t: "Kommunikation und weitere Plattformdienste",
          b: "Kommunikation spielt sich auf den Anwendungsschichten ab und dient der Koordination zwischen Prozessen. Das OSI-Modell ist zu komplex, um Kommunikation auf Anwendungsebene zu beschreiben — daher das Client-Server-Modell: Server sind Prozesse, die Dienste für andere Prozesse (Clients) anbieten. Weitere Plattformdienste: Transaktionen (alles-oder-nichts), Service Composition (Dienste kombinieren) und Reliability (Zuverlässigkeit der Nachrichtenübermittlung).",
          source: "02_vs-overview.pdf, Folien 25-26"
        }
      ],
      questions: [
        {
          q: "Wie sind Verteilte Systeme definiert?",
          a: "Geografische Verteilung von Komponenten, kein gemeinsamer Speicher, dezentrale Administration — die Komponenten kooperieren, um ein gemeinsames Ziel zu erreichen.",
          source: "02_vs-overview.pdf, Folie 5"
        },
        {
          q: "Wie definiert Tanenbaum ein verteiltes System?",
          a: "Eine Sammlung unabhängiger Computer, die dem Benutzer als ein einziges, verbundenes System erscheinen.",
          source: "02_vs-overview.pdf, Folie 6"
        },
        {
          q: "Nennen Sie Beispiele für Systeme, die KEINE Verteilten Systeme sind.",
          a: "Zentraler Mainframe mit Terminals ohne lokale Funktionalität (Thin Clients), Shared-Memory-Hypercube, Workstation-Cluster ohne zielgerichtete Zusammenarbeit.",
          source: "02_vs-overview.pdf, Folie 12"
        },
        {
          q: "Welche Konsequenzen ergeben sich aus der Verteilung?",
          a: "Nebenläufigkeit ist der Normalfall (Knoten arbeiten parallel), es gibt keine globale Uhr (Koordination über Nachrichten) und unabhängige Fehlerfälle (Funktionalität soll auch bei Fehlern erbracht werden).",
          source: "02_vs-overview.pdf, Folie 14"
        },
        {
          q: "Was ist Middleware und wo ist sie angesiedelt?",
          a: "Programme, die zwischen Applikationen vermitteln und die Komplexität des Gesamtsystems verbergen. Sie implementiert die Grundlagen für Transparenz und ist in den oberen Schichten des OSI-Modells angesiedelt; für Anwendungen spielt sie eine ähnliche Rolle wie das Betriebssystem für Prozesse.",
          source: "02_vs-overview.pdf, Folien 22-24"
        },
        {
          q: "Warum wird das Client-Server-Modell eingeführt, obwohl es das OSI-Modell gibt?",
          a: "Das OSI-Modell ist zu komplex, um die Kommunikation zwischen Prozessen auf der Anwendungsebene zu beschreiben. Verteilte Systeme werden als Menge von Prozessen betrachtet; Server bieten Dienste für Clients an, Kommunikation wird über einfache Routinen ermöglicht.",
          source: "02_vs-overview.pdf, Folie 25"
        },
        {
          q: "Welche Schritte der historischen Entwicklung Verteilter Systeme unterscheiden die Folien?",
          a: "1. Klassische Verteilte Systeme (nebenläufige Betriebssysteme, RPC/RMI/JMS), 2. Plattformen (Middleware wie CORBA, Application Server, Componentware, SOA), 3. Web-Technologien (XML, Web-Services, Cloud), 4. Mobile Computing.",
          source: "02_vs-overview.pdf, Folie 17"
        },
        {
          q: "Welche Elemente enthalten Architekturbeschreibungen?",
          a: "Komponenten, Schnittstellen, Implementierungen, Relationen zwischen den Komponenten, Kommunikation und Constraints.",
          source: "02_vs-overview.pdf, Folie 20"
        }
      ],
      flashcards: [
        {
          front: "3 Kernmerkmale Verteilter Systeme",
          back: "Geografische Verteilung, kein gemeinsamer Speicher, dezentrale Administration — Kooperation für ein gemeinsames Ziel",
          source: "02_vs-overview.pdf, Folie 5"
        },
        {
          front: "Tanenbaum-Definition",
          back: "Sammlung unabhängiger Computer, die dem Benutzer als ein einziges, verbundenes System erscheinen",
          source: "02_vs-overview.pdf, Folie 6"
        },
        {
          front: "Konsequenzen der Verteilung (3)",
          back: "Nebenläufigkeit als Normalfall, keine globale Uhr, unabhängige Fehlerfälle",
          source: "02_vs-overview.pdf, Folie 14"
        },
        {
          front: "Middleware",
          back: "Vermittelt zwischen Applikationen, verbirgt Komplexität, implementiert Transparenz — obere OSI-Schichten",
          source: "02_vs-overview.pdf, Folie 22"
        },
        {
          front: "OSI-Schicht 4 und Schicht 3",
          back: "4: Communication Services (TCP/UDP); 3: Routing, Addressing (IP)",
          source: "02_vs-overview.pdf, Folie 21"
        },
        {
          front: "Weitere Plattformdienste neben Kommunikation",
          back: "Transaktionen (alles oder nichts), Service Composition, Reliability",
          source: "02_vs-overview.pdf, Folie 26"
        },
        {
          front: "Verteilungstransparenz",
          back: "Die Verteilung soll verborgen bleiben — das System soll einheitlich erscheinen",
          source: "02_vs-overview.pdf, Folie 13"
        }
      ]
    },
    {
      id: "merkmale",
      title: "Merkmale & Entwurfsziele",
      icon: "🎯",
      cards: [
        {
          t: "Heterogenität",
          b: "Aufgrund unterschiedlicher Technologien kann Heterogenität zu Inkonsistenzen führen, die die Systemstabilität stark beeinträchtigen. Ebenen: <b>Hardware-Heterogenität</b> (verschiedene Rechnerarchitekturen, Befehlssätze, Datenrepräsentation), <b>Netzwerk-Heterogenität</b> (Übertragungsmedien, Signale, Schnittstellen, Protokolle), <b>Software-Heterogenität</b> (verschiedene Betriebssysteme und Anwendungsprogramme).",
          tag: "def",
          source: "02_vs-overview.1.pdf, Folien 4-5"
        },
        {
          t: "Verteilter Zugriff auf Ressourcen und Dienste",
          b: "Hardware (z. B. Drucker oder Festplatten) kann geteilt werden; Nutzer können zusammenarbeiten und Dateien bzw. Webseiten teilen. Ein <b>Dienst (Service)</b> verwaltet eine Menge von Ressourcen und bietet ihre Funktion Benutzern und Anwendungen an (z. B. File Service, Print Service, Electronic Payment Service). Dienste bieten eine Menge von Operationen an.",
          tag: "def",
          source: "02_vs-overview.1.pdf, Folie 6"
        },
        {
          t: "Transparenz",
          b: "Transparenz dient dazu, Details der Implementierung zu verbergen. Sie erleichtert Entwicklung und Betrieb Verteilter Systeme und verbirgt die interne Komplexität vor dem Benutzer.",
          tag: "def",
          source: "02_vs-overview.1.pdf, Folie 7"
        },
        {
          t: "Transparenz-Aspekte",
          b: "<b>Zugriffstransparenz:</b> Clients wissen nicht, welche Ressourcen sie nutzen. <b>Location-Transparenz:</b> Der geographische Ort einer Ressource spielt keine Rolle. <b>Nebenläufigkeitstransparenz:</b> Die interne Reihenfolge von Ereignissen ist für den Client nicht sichtbar. <b>Replikationstransparenz:</b> Mehrfach vorliegende Instanzen bleiben verborgen (z. B. Load-Balancing). <b>Fehler-Transparenz:</b> Bei Systemfehlern können Clients ihre Aufgaben ohne Störung beenden. <b>Migrationstransparenz:</b> Programme und Daten können auf andere Knoten verlagert werden, ohne die Funktionalität zu stören. <b>Ressourcentransparenz:</b> Nicht sichtbar, welche Ressourcen für eine Aufgabe verwendet werden.",
          tag: "wichtig",
          source: "02_vs-overview.1.pdf, Folie 8"
        },
        {
          t: "Offenheit",
          b: "Ein offenes System bietet Komponenten an, die leicht in andere Systeme integriert werden können — und besteht umgekehrt oft aus Komponenten anderer Systeme. Allgemeiner Ansatz: standardisierte Schnittstellen, z. B. in einer formalen Sprache definiert (Interface Definition Language, IDL). Dadurch werden auch Interoperabilität und Portabilität erreicht. Offenheit ist die Voraussetzung für Erweiterbarkeit.",
          tag: "def",
          source: "02_vs-overview.1.pdf, Folie 9"
        },
        {
          t: "Dimensionen der Skalierbarkeit",
          b: "<b>Größen-Skalierbarkeit:</b> Benutzer oder Ressourcen können hinzugefügt werden, ohne Performance-Einbußen. <b>Geografische Skalierbarkeit:</b> Große Entfernungen zwischen Benutzern führen nicht zu Verzögerungen. <b>Administrative Skalierbarkeit:</b> Systeme bleiben einfach zu betreiben und zu warten, auch unter verschiedenen administrativen Organisationen.",
          tag: "def",
          source: "02_vs-overview.1.pdf, Folie 10"
        },
        {
          t: "Skalierbarkeits-Probleme",
          b: "Zentrale Server werden schnell zu Bottlenecks — aus drei Gründen: begrenzte CPU, begrenzter Speicherplatz bzw. I/O-Transferrate, begrenzte Netzwerkkapazität. Geografische Skalierbarkeit wird häufig durch synchrone Kommunikation beeinträchtigt; Netzwerktechniken skalieren schlecht (was im LAN funktioniert, muss nicht im WAN funktionieren). Bei administrativer Skalierung: widersprüchliche Policys bei Ressourcennutzung, Payment, Management, Security — das System muss sich gegen die neue Domäne schützen und umgekehrt.",
          source: "02_vs-overview.1.pdf, Folien 11-13"
        },
        {
          t: "Skalierungstechniken",
          b: "Zwei Dimensionen: <b>Scaling Up</b> (Kapazitäten der Knoten verbessern: CPU, Memory, Network) und <b>Scaling Out</b> (mehr Maschinen einbeziehen). Drei Strategien: Kommunikations-Latenzen verbergen (asynchrone Kommunikation, nebenläufige Threads, Funktionen auf den Client verlagern), Partitionieren und Verteilen (z. B. DNS auf mehrere Knoten verteilen) und Replikation.",
          tag: "wichtig",
          source: "02_vs-overview.1.pdf, Folien 14-17"
        },
        {
          t: "Replikation und Caching",
          b: "Die Replikation einer Komponente erhöht ihre Verfügbarkeit und ermöglicht Load-Balancing. Caching ist eine besondere Form der Replikation — Caching geht auf eine Entscheidung des Clients zurück, Replikation eher auf den Server. Beide führen zu Konsistenzproblemen; wie streng die Konsistenzanforderungen sind, hängt von der Anwendung ab (finanzielle Transaktionen strenger als Web-Browsing). Allgemeine Synchronisierungs-Mechanismen sind schwer zu etablieren.",
          tag: "def",
          source: "02_vs-overview.1.pdf, Folie 18"
        },
        {
          t: "Falsche Annahmen über Netzwerke",
          b: "Das Netzwerk ist verlässlich; das Netzwerk ist sicher; das Netzwerk ist homogen; die Topologie ändert sich nicht; die Latenz ist null; die Bandbreite ist unendlich; Transport-Kosten sind null; es gibt nur einen Administrator.",
          tag: "wichtig",
          source: "02_vs-overview.1.pdf, Folie 19"
        },
        {
          t: "Security",
          b: "<b>Vertraulichkeit:</b> Daten können nur vom Empfänger gelesen werden (Verschlüsselung). <b>Integrität:</b> Daten wurden nicht verändert. <b>Authentizität:</b> Daten kommen von der Person, die als Sender firmiert. Offene Themen: Nicht alle Komponenten können physikalisch abgesichert werden, Denial-of-Service-Angriffe, Security bei Code-Migration. Annahmen über Angreifer: können Nachrichten unter falscher Identität senden und Nachrichten verändern.",
          tag: "def",
          source: "02_vs-overview.1.pdf, Folien 21-22"
        },
        {
          t: "Fehler und Fehlermodelle",
          b: "Jede Komponente kann ausfallen, überlastet sein oder die Verbindung verlieren. Fehlermodelle: <b>Unterlassungsfehler</b> (Prozess oder Kanal erbringen einen Dienst nicht: Crash, Nachrichtenverlust), <b>Timing-Fehler</b> (Aktionen nicht im Zeitfenster abgeschlossen bzw. zeitliche Zusicherungen überschritten), <b>willkürliche Fehler / byzantine failures</b> (Prozesse weichen vom intendierten Verhalten ab, Kanäle verfälschen Nachrichten). Ansätze: Checksummen erkennen Verfälschungen, Nummerierung von Paketen erkennt Datenverluste.",
          tag: "def",
          source: "02_vs-overview.1.pdf, Folien 23-24"
        },
        {
          t: "Nebenläufigkeit als Herausforderung",
          b: "Geschwindigkeitsgewinne einzelner CPUs sind derzeit nicht leicht zu erzielen, während die Transistordichte zunimmt — Multicore-Architekturen setzen sich durch, nebenläufige Programmierung bestimmt zunehmend die Praxis. Nebenläufige Ausführung ist der Standardfall in Verteilten Systemen; nebenläufiger Zugriff auf Ressourcen muss synchronisiert werden. Lösungsansätze: Java Threads, Java Semaphores, nicht-blockierende Systemaufrufe (z. B. Java NewIO).",
          source: "02_vs-overview.1.pdf, Folien 26-27"
        }
      ],
      questions: [
        {
          q: "Auf welchen Ebenen kann Heterogenität auftreten?",
          a: "Hardware (Rechnerarchitekturen, Befehlssätze, Datenrepräsentation), Netzwerk (Übertragungsmedien, Signale, Schnittstellen, Protokolle) und Software (Betriebssysteme, Anwendungsprogramme).",
          source: "02_vs-overview.1.pdf, Folie 5"
        },
        {
          q: "Was ist Transparenz und welche Aspekte gibt es?",
          a: "Transparenz verbirgt Details der Implementierung. Aspekte: Zugriffs-, Location-, Nebenläufigkeits-, Replikations-, Fehler-, Migrations- und Ressourcentransparenz.",
          source: "02_vs-overview.1.pdf, Folien 7-8"
        },
        {
          q: "Was zeichnet ein offenes System aus?",
          a: "Es bietet Komponenten an, die leicht in andere Systeme integriert werden können — über standardisierte Schnittstellen (z. B. per IDL definiert). Damit werden Interoperabilität und Portabilität erreicht; Offenheit ist Voraussetzung für Erweiterbarkeit.",
          source: "02_vs-overview.1.pdf, Folie 9"
        },
        {
          q: "Welche drei Dimensionen der Skalierbarkeit gibt es?",
          a: "Größen-Skalierbarkeit, geografische Skalierbarkeit und administrative Skalierbarkeit.",
          source: "02_vs-overview.1.pdf, Folie 10"
        },
        {
          q: "Aus welchen Gründen werden zentrale Server zu Bottlenecks?",
          a: "Begrenzte CPU, begrenzter Speicherplatz bzw. I/O-Transferrate und begrenzte Netzwerkkapazität.",
          source: "02_vs-overview.1.pdf, Folie 11"
        },
        {
          q: "Welche Skalierungstechniken nennen die Folien?",
          a: "Scaling Up (Knoten verbessern) vs. Scaling Out (mehr Maschinen). Strategien: Kommunikations-Latenzen verbergen, Partitionieren und Verteilen, Replikation.",
          source: "02_vs-overview.1.pdf, Folie 14"
        },
        {
          q: "Worin unterscheiden sich Caching und Replikation?",
          a: "Caching ist eine besondere Form der Replikation, geht aber auf eine Entscheidung des Clients zurück, während Replikation eher vom Server veranlasst wird. Beide führen zu Konsistenzproblemen.",
          source: "02_vs-overview.1.pdf, Folie 18"
        },
        {
          q: "Nennen Sie vier falsche Annahmen über Netzwerke.",
          a: "Z. B.: Das Netzwerk ist verlässlich; das Netzwerk ist sicher; die Latenz ist null; die Bandbreite ist unendlich (außerdem: homogen, feste Topologie, Transportkosten null, nur ein Administrator).",
          source: "02_vs-overview.1.pdf, Folie 19"
        },
        {
          q: "Was bedeuten Vertraulichkeit, Integrität und Authentizität?",
          a: "Vertraulichkeit: Daten können nur vom Empfänger gelesen werden (Verschlüsselung). Integrität: Daten wurden nicht verändert. Authentizität: Daten kommen von der Person, die als Sender firmiert.",
          source: "02_vs-overview.1.pdf, Folie 21"
        },
        {
          q: "Welche Fehlermodelle unterscheiden die Folien?",
          a: "Unterlassungsfehler (Crash, Kommunikationsfehler), Timing-Fehler (synchrone Systeme, Echtzeitsysteme) und willkürliche Fehler (byzantine failures: fehlerhafte Werte, verfälschte Nachrichten).",
          source: "02_vs-overview.1.pdf, Folie 24"
        }
      ],
      flashcards: [
        {
          front: "3 Ebenen der Heterogenität",
          back: "Hardware, Netzwerk, Software",
          source: "02_vs-overview.1.pdf, Folie 5"
        },
        {
          front: "Dienst (Service)",
          back: "Verwaltet eine Menge von Ressourcen und bietet ihre Funktion über eine Menge von Operationen an",
          source: "02_vs-overview.1.pdf, Folie 6"
        },
        {
          front: "7 Transparenz-Aspekte",
          back: "Zugriff, Location, Nebenläufigkeit, Replikation, Fehler, Migration, Ressourcen",
          source: "02_vs-overview.1.pdf, Folie 8"
        },
        {
          front: "3 Dimensionen der Skalierbarkeit",
          back: "Größe, Geografie, Administration",
          source: "02_vs-overview.1.pdf, Folie 10"
        },
        {
          front: "Scaling Up vs. Scaling Out",
          back: "Up: Kapazitäten der Knoten verbessern; Out: mehr Maschinen einbeziehen",
          source: "02_vs-overview.1.pdf, Folie 14"
        },
        {
          front: "3 Skalierungs-Strategien",
          back: "Latenzen verbergen, Partitionieren und Verteilen, Replikation",
          source: "02_vs-overview.1.pdf, Folie 14"
        },
        {
          front: "Security-Ziele (3)",
          back: "Vertraulichkeit, Integrität, Authentizität",
          source: "02_vs-overview.1.pdf, Folie 21"
        },
        {
          front: "Byzantine Failures",
          back: "Willkürliche Fehler: Prozesse weichen vom intendierten Verhalten ab (z. B. fehlerhafte Werte), Kanäle verfälschen Nachrichten",
          source: "02_vs-overview.1.pdf, Folie 24"
        }
      ]
    },
    {
      id: "netzwerke",
      title: "Netzwerkgrundlagen",
      icon: "🕸️",
      cards: [
        {
          t: "Performance: Latenz und Datenübertragungsrate",
          b: "<b>Latenz:</b> die Verzögerung zwischen dem Versenden und dem Empfangen von Daten; messbar durch das Versenden leerer Nachrichten. <b>Datenübertragungsrate:</b> Geschwindigkeit, mit der Daten zwischen zwei Knoten übertragen werden (in Bit pro Sekunde). Es gilt: <code>Datenübertragungszeit = Latenz + Länge/Datenübertragungsrate</code>. Ab einer bestimmten Länge müssen Nachrichten zerteilt und stückweise übertragen werden.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folie 4"
        },
        {
          t: "Bandbreite",
          b: "Der Umfang von Nachrichtenverkehr, der in einer bestimmten Zeiteinheit durch das Netzwerk transportiert werden kann. In vielen Netzwerken ist die Bandbreite identisch mit der Datenübertragungsrate; in WANs mit mehreren Wegen hat sie keinen direkten Einfluss darauf. Wird die Bandbreite durch den Verkehr überschritten, spricht man von Überlastung.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folie 5"
        },
        {
          t: "Arten von Netzwerken",
          b: "<b>PANs:</b> kleine, kostengünstige Geräte eines Benutzers drahtlos verbunden (z. B. Bluetooth). <b>LANs:</b> Rechner einer Organisation vernetzt (z. B. Ethernet). <b>WANs:</b> transportieren Nachrichten zwischen Knoten verschiedener Organisationen mit geringerer Geschwindigkeit; Latenz durch Routing erhöht. <b>MANs:</b> moderne Glasfaser- und Kupferkabel mit großer Bandbreite (Telefon, Kabel-TV). Jede Art hat eine drahtlose Variante.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folie 9"
        },
        {
          t: "Paketübertragung",
          b: "Bevor eine Nachricht übertragen wird, wird sie in Pakete zerlegt. Ein Paket ist eine Folge binärer Daten mit festgelegter Länge zusammen mit Adressinformationen über Sender und Empfänger. Die Längenbeschränkung ermöglicht das Reservieren von Speicherplatz in den Knoten und vermeidet große Verzögerungen durch sehr lange Nachrichten.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folie 12"
        },
        {
          t: "Streaming",
          b: "Die echtzeitbasierte Übertragung von Audio- und Videodaten. Streaming erfordert höhere Bandbreite und andere Kommunikationsmechanismen; typischerweise werden UDP-Pakete für Video-Frames verwendet. Verspätet eintreffende Pakete können nicht mehr verwendet werden. Von den Standard-Internetprotokollen nicht unterstützt: Es ist ein vordefinierter Kanal (Channel) mit Ressourcen-Reservierung nötig.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folie 13"
        },
        {
          t: "Switching-Schemata",
          b: "Das Switching regelt das Versenden von Nachrichten zwischen den Knoten. <b>Broadcast:</b> Nachricht an alle erreichbaren Knoten (z. B. Ethernet, drahtlose Medien). <b>Circuit Switching:</b> Verbindungen werden gesucht und aus Teilstücken zusammengesetzt. <b>Packet Switching:</b> Pakete werden zwischengespeichert und weitergesendet (store-and-forward). <b>Frame Relay:</b> kleine Pakete (Frames) werden on-the-fly verarbeitet (für Echtzeitsysteme wie Videokonferenzen).",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folie 15"
        },
        {
          t: "Protokolle und Schichten",
          b: "Ein Protokoll definiert die Reihenfolge, in der Nachrichten ausgetauscht werden müssen, und das Format der ausgetauschten Nachrichten. Protokolle ermöglichen die Kommunikation heterogener Komponenten und werden als Paar von Software-Modulen auf Sender und Empfänger implementiert. Protokolle sind in Schichten organisiert: Jede Schicht bietet Funktionalität für die darüberliegende; ganz unten liegt die physikalische Schicht. Nachrichten werden lokal per Prozeduraufruf nach unten weitergegeben und physikalisch ausgetauscht.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folien 17-19"
        },
        {
          t: "Ports und Transportadresse",
          b: "Die Transportschicht stellt einen Transportdienst zwischen zwei Ports bereit. Ports werden Prozessen zugeordnet, um sie eindeutig identifizieren zu können. Die Transportadresse besteht aus Rechneradresse und Portnummer.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folie 22"
        },
        {
          t: "Datagramme vs. verbindungsorientierter Transport",
          b: "<b>Datagramme:</b> wie eine Postkarte — Pakete erhalten Adressinformationen, es wird keine Infrastruktur aufgebaut; verschiedene Pakete können verschiedene Routen nehmen (z. B. IP). <b>Verbindungsorientierter Transport:</b> Es wird zunächst eine virtuelle Verbindung aufgebaut, über die die Pakete geschickt werden. Beide Verfahren können auf jeder Netzwerkebene angewendet werden — bekannte Beispiele: UDP und TCP auf der Transportebene.",
          tag: "wichtig",
          source: "01_ds-concept-networks.pdf, Folie 23"
        },
        {
          t: "Routing",
          b: "Router sind Rechnerknoten an bestimmten Stellen im Netzwerk, die Pakete auf den richtigen Weg schicken. Der Routing-Algorithmus entscheidet, welchen Weg jedes Paket nimmt; bei verbindungsorientierten Protokollen wird die Route beibehalten. Router müssen ihr Wissen über Routen laufend updaten und den Traffic überwachen. Wenn Start- und Zielknoten nicht im gleichen LAN stehen, werden Pakete in mehreren Hops gesendet; die Weiterleitung wird anhand der Routing-Tabellen auf jedem Knoten entschieden.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folien 25-26"
        },
        {
          t: "Internet und IP-Adressierung",
          b: "Das Internet integriert viele Protokolle, Technologien und Sub-Netze. Voraussetzungen: einheitliches Adressschema, einheitliches Paketformat und Verarbeitungsregeln, verbindende Komponenten für das Routing — erfüllt durch IP-Adressen, das IP-Protokoll und Internet-Router. IPv4-Adressen sind 32-Bit-Werte (Bezeichner für Sub-Netz und Knoten), notiert als vier Dezimalzahlen mit Punkten (je ein Byte). Class A: 2²⁴ Knoten pro Subnetz (sehr große Organisationen), Class B: Organisationen mit mehr als 255 Knoten, Class C: alle anderen. IPv4 bietet nur 2³² (4 Milliarden) Adressen — der Hauptgrund für IPv6.",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folien 28-29"
        },
        {
          t: "TCP-Merkmale",
          b: "TCP bietet einen verbindungsorientierten, verlässlichen Transport-Dienst. <b>Sequencing:</b> Streams werden zerteilt und als IP-Pakete versendet; die Reihenfolge bleibt erhalten. <b>Flow Control:</b> Knoten melden dem Sender, wie viele Daten sie im nächsten Zeitintervall aufnehmen können. <b>Retransmission:</b> Segmente ohne Empfangsbestätigung werden erneut versendet. <b>Buffering:</b> Puffer auf der Empfängerseite gleicht Geschwindigkeitsunterschiede aus. <b>Checksum:</b> sichert die Integrität von Header und Daten. UDP fügt dagegen kaum neue Merkmale zum IP-Protokoll hinzu; die Transportschicht führt über Portnummern die Prozess-zu-Prozess-Kommunikation ein.",
          tag: "wichtig",
          source: "01_ds-concept-networks.pdf, Folien 32-33"
        },
        {
          t: "Domain Name Service (DNS)",
          b: "Das Internet unterstützt die Adressierung von Knoten und Sub-Netzen durch symbolische Namen. Die benannten Einheiten heißen Domänen, die Namen Domänen-Namen; sie sind hierarchisch organisiert. Die Übersetzung von Domänen-Namen in IP-Adressen leistet der Domain Name Service (DNS).",
          tag: "def",
          source: "01_ds-concept-networks.pdf, Folie 34"
        }
      ],
      questions: [
        {
          q: "Was ist Latenz und wie berechnet sich die Datenübertragungszeit?",
          a: "Latenz ist die Verzögerung zwischen Versenden und Empfangen von Daten. Datenübertragungszeit = Latenz + Länge/Datenübertragungsrate.",
          source: "01_ds-concept-networks.pdf, Folie 4"
        },
        {
          q: "Welche Arten von Netzwerken gibt es?",
          a: "PAN (persönliche Geräte, z. B. Bluetooth), LAN (Organisation, z. B. Ethernet), WAN (zwischen Organisationen, Latenz durch Routing erhöht) und MAN (Glasfaser/Kupfer mit großer Bandbreite). Jede Art hat eine drahtlose Variante.",
          source: "01_ds-concept-networks.pdf, Folie 9"
        },
        {
          q: "Was ist ein Paket und warum ist die Längenbeschränkung bedeutsam?",
          a: "Eine Folge binärer Daten mit festgelegter Länge plus Adressinformationen über Sender und Empfänger. Die Beschränkung ermöglicht das Reservieren von Speicherplatz und vermeidet große Verzögerungen durch sehr lange Nachrichten.",
          source: "01_ds-concept-networks.pdf, Folie 12"
        },
        {
          q: "Welche Switching-Schemata gibt es?",
          a: "Broadcast (an alle erreichbaren Knoten), Circuit Switching (Verbindung aus Teilstücken), Packet Switching (zwischenspeichern und weitersenden) und Frame Relay (Frames on-the-fly, für Echtzeitsysteme).",
          source: "01_ds-concept-networks.pdf, Folie 15"
        },
        {
          q: "Welche zwei Aspekte definiert ein Protokoll?",
          a: "Die Reihenfolge, in der bestimmte Nachrichten ausgetauscht werden müssen, und das Format der ausgetauschten Nachrichten.",
          source: "01_ds-concept-networks.pdf, Folie 17"
        },
        {
          q: "Worin unterscheiden sich Datagramme und verbindungsorientierter Transport?",
          a: "Datagramme funktionieren wie Postkarten: Adressinfo, keine Infrastruktur, verschiedene Routen möglich. Verbindungsorientiert: erst wird eine virtuelle Verbindung aufgebaut, über die die Pakete geschickt werden. Beispiele auf der Transportebene: UDP bzw. TCP.",
          source: "01_ds-concept-networks.pdf, Folie 23"
        },
        {
          q: "Welche Merkmale bietet TCP?",
          a: "Sequencing (Reihenfolge bleibt erhalten), Flow Control (Rückmeldung der Aufnahmekapazität), Retransmission (erneutes Senden ohne Bestätigung), Buffering (Empfängerpuffer) und Checksum (Integrität von Header und Daten).",
          source: "01_ds-concept-networks.pdf, Folie 33"
        },
        {
          q: "Wozu dient der DNS?",
          a: "Er übersetzt hierarchisch organisierte, symbolische Domänen-Namen in IP-Adressen.",
          source: "01_ds-concept-networks.pdf, Folie 34"
        },
        {
          q: "Warum wurde IPv6 entwickelt?",
          a: "IPv4 stellt nur 2³² (4 Milliarden) Adressen zur Verfügung — das ist der Hauptgrund für die Entwicklung von IPv6.",
          source: "01_ds-concept-networks.pdf, Folie 29"
        }
      ],
      flashcards: [
        {
          front: "Datenübertragungszeit (Formel)",
          back: "Latenz + Länge/Datenübertragungsrate",
          source: "01_ds-concept-networks.pdf, Folie 4"
        },
        {
          front: "Bandbreite",
          back: "Umfang des Nachrichtenverkehrs, der pro Zeiteinheit durch das Netzwerk transportiert werden kann",
          source: "01_ds-concept-networks.pdf, Folie 5"
        },
        {
          front: "PAN / LAN / WAN / MAN",
          back: "Personal, Local, Wide, Metropolitan Area Network",
          source: "01_ds-concept-networks.pdf, Folie 9"
        },
        {
          front: "4 Switching-Schemata",
          back: "Broadcast, Circuit Switching, Packet Switching, Frame Relay",
          source: "01_ds-concept-networks.pdf, Folie 15"
        },
        {
          front: "Transportadresse",
          back: "Rechneradresse + Portnummer",
          source: "01_ds-concept-networks.pdf, Folie 22"
        },
        {
          front: "TCP: 5 Merkmale",
          back: "Sequencing, Flow Control, Retransmission, Buffering, Checksum",
          source: "01_ds-concept-networks.pdf, Folie 33"
        },
        {
          front: "IPv4-Adresse",
          back: "32-Bit-Wert: Bezeichner für Sub-Netz und Knoten, vier Dezimalzahlen (je 1 Byte), durch Punkte getrennt",
          source: "01_ds-concept-networks.pdf, Folie 29"
        },
        {
          front: "DNS",
          back: "Übersetzt hierarchische Domänen-Namen in IP-Adressen",
          source: "01_ds-concept-networks.pdf, Folie 34"
        }
      ]
    },
    {
      id: "sockets",
      title: "Sockets & Java Networking",
      icon: "🔌",
      cards: [
        {
          t: "TCP: verbindungsorientierte Kommunikation",
          b: "In einer Client/Server-Architektur muss Kommunikation in vielen Fällen verlässlich (reliable) sein: Datenverluste vermeiden, Reihenfolge beibehalten. TCP bietet eine verlässliche Punkt-zu-Punkt-Verbindung zwischen zwei Programmen im Netzwerk. Sockets sind als Endpunkte an die Verbindung gebunden; zum Senden und Empfangen schreiben bzw. lesen die Clients in/von den Sockets. Beispielanwendungen: http, ftp, telnet.",
          tag: "def",
          source: "01_ds-concept-sockets.pdf, Folie 5"
        },
        {
          t: "UDP: verbindungslos",
          b: "UDP sendet unabhängige Datenpakete (Datagramme); die Ankunft ist nicht garantiert und es wird keine Verbindung aufgebaut. Gut geeignet für Anwendungen, die große Mengen von Zustandsdaten übertragen — der Verbindungsaufbau wäre zu aufwändig. Beispiel: ein Server, der die aktuelle Uhrzeit sendet (bei Verlust reicht das nächste Datagramm); außerdem ping.",
          tag: "def",
          source: "01_ds-concept-sockets.pdf, Folie 6"
        },
        {
          t: "Ports",
          b: "Ein Rechner hat im Allgemeinen eine einzige physikalische Verbindung zum Internet — verschiedene Anwendungen teilen sich diese Verbindung. Daten für verschiedene Anwendungen werden durch Port-Nummern unterschieden: 16-Bit-Zahlen (Wertebereich 0–65.535), verwendet von TCP und UDP. TCP-Server binden ihren Socket an einen Port, um alle Daten an diesen Port zu empfangen; UDP-Datagramme werden dynamisch zum jeweiligen Port geroutet.",
          tag: "def",
          source: "01_ds-concept-sockets.pdf, Folie 7"
        },
        {
          t: "Socket",
          b: "Endpunkt einer bidirektionalen Kommunikationsverbindung zwischen zwei Programmen. Ein Socket ist an eine Portnummer gebunden, sodass die TCP-Schicht die Anwendung identifizieren kann, die die Daten empfangen soll. Verbindungsaufbau: Der Server wartet und horcht an einem Socket; der Client kennt Rechnername und Portnummer und startet eine Verbindungsanfrage; der Server akzeptiert; danach wird auf der Client-Seite ein Socket erzeugt — Client und Server können kommunizieren.",
          tag: "def",
          source: "01_ds-concept-sockets.pdf, Folie 8"
        },
        {
          t: "Das Paket java.net",
          b: "Socket-Programmierung findet auf der Anwendungsebene statt. Wichtige Klassen — TCP: <code>Socket</code> und <code>ServerSocket</code>, <code>URL</code> und <code>URLConnection</code>; UDP: <code>DatagramSocket</code>, <code>DatagramPacket</code>, <code>MulticastSocket</code>.",
          source: "01_ds-concept-sockets.pdf, Folie 10"
        },
        {
          t: "Generelles Vorgehen (4 Schritte)",
          b: "1. Einen Socket öffnen. 2. Input- und Output-Streams für den Socket erhalten. 3. In bzw. aus den Streams schreiben bzw. lesen. 4. Schließen und Speicherplatz freigeben. Nur im dritten Schritt wird zur eigentlichen Funktionalität der Programme beigetragen.",
          tag: "wichtig",
          source: "01_ds-concept-sockets.pdf, Folie 14"
        },
        {
          t: "Server-Seite in Java",
          b: "ServerSocket anlegen und blockierend auf Verbindungen warten: <code>ServerSocket ss = new ServerSocket(port); Socket cs = ss.accept();</code> — <code>accept</code> wartet blockierend, bis eine Verbindung angefragt wird. Streams erhalten: <code>PrintWriter out = new PrintWriter(cs.getOutputStream(), true);</code> (true aktiviert Auto-Flush) und <code>BufferedReader in = new BufferedReader(new InputStreamReader(cs.getInputStream()));</code>. Danach Server-Logik über die Streams (z. B. Echo). Schließen: im finally-Block oder automatisch über try-with-resources.",
          tag: "beispiel",
          source: "01_ds-concept-sockets.pdf, Folien 15-18"
        },
        {
          t: "Client-Seite in Java",
          b: "Client-Socket anlegen: <code>Socket cs = new Socket(hostname, port);</code> — der Socket startet intern die Verbindungsanfrage. Streams wie beim Server erzeugen, zusätzlich ein Stream für Konsoleneingaben. Client-Logik: <code>readLine()</code> wartet blockierend, bis Benutzer oder Server ihren Input gesendet haben.",
          tag: "beispiel",
          source: "01_ds-concept-sockets.pdf, Folien 20-22"
        },
        {
          t: "Java IO: Streams",
          b: "Streams sind Datenstrukturen, die einen kontinuierlichen Datenfluss repräsentieren — Abstraktionen für verschiedene Datenquellen und -senken (Dateisystem, Netzwerk usw.). Sie haben eine Ausrichtung (Input/Output); <code>InputStream</code> und <code>OutputStream</code> arbeiten auf Byte-Ebene. Objekte müssen für den Netzwerkverkehr umgewandelt werden und dazu das Interface <code>Serializable</code> implementieren. Wichtige Klassen: <code>PrintWriter</code> (formatierter Text), <code>InputStreamReader</code> (Bytes zu Characters), <code>BufferedReader</code> (zeichenbasiert mit Zwischenspeicher), <code>Scanner</code> (zerteilt Eingabe in Tokens).",
          tag: "def",
          source: "01_ds-concept-sockets.pdf, Folien 28-30"
        },
        {
          t: "Asynchrone Server",
          b: "Ein einfacher Server ist während der Bearbeitung einer Anfrage nicht für weitere Clients erreichbar. Lösung: asynchrone Server — der Aufbau einer Verbindung wird von der eigentlichen Verarbeitung der Nachricht getrennt (entkoppelt). Der von <code>accept()</code> erzeugte Client-Socket wird an einen Thread weitergereicht, der die Anfrage bearbeitet; währenddessen kann der ServerSocket asynchron auf weitere Anfragen warten.",
          tag: "wichtig",
          source: "01_ds-concept-sockets.pdf, Folien 31, 33"
        },
        {
          t: "Java Non-Blocking IO (NIO)",
          b: "Charakteristika: <b>Non-Blocking</b> — Java NIO führt nicht blockierende IO-Vorgänge aus; es kann auf Daten gewartet und gleichzeitig andere Arbeit ausgeführt werden. <b>Pufferung</b> — die zu verarbeitenden Daten werden in Puffern zwischengespeichert.",
          tag: "def",
          source: "01_ds-concept-sockets.pdf, Folie 37"
        }
      ],
      questions: [
        {
          q: "Was ist ein Socket?",
          a: "Der Endpunkt einer bidirektionalen Kommunikationsverbindung zwischen zwei Programmen, gebunden an eine Portnummer, damit die TCP-Schicht die empfangende Anwendung identifizieren kann.",
          source: "01_ds-concept-sockets.pdf, Folie 8"
        },
        {
          q: "Wie läuft der Verbindungsaufbau zwischen Client und Server ab?",
          a: "Der Server horcht an einem Socket mit Portnummer; der Client kennt Rechnername und Port und startet eine Verbindungsanfrage; der Server akzeptiert; auf der Client-Seite wird ein Socket erzeugt — dann können beide kommunizieren.",
          source: "01_ds-concept-sockets.pdf, Folie 8"
        },
        {
          q: "Wann ist UDP gut geeignet?",
          a: "Für Anwendungen, die große Mengen von Zustandsdaten übertragen, wo ein Verbindungsaufbau pro Nachricht zu aufwändig wäre — z. B. ein Zeit-Server (verlorene Datagramme werden durch das nächste ersetzt) oder ping.",
          source: "01_ds-concept-sockets.pdf, Folie 6"
        },
        {
          q: "Welche vier Schritte umfasst die Socket-Programmierung generell?",
          a: "1. Socket öffnen, 2. Input-/Output-Streams erhalten, 3. in/aus den Streams schreiben/lesen (die eigentliche Funktionalität), 4. schließen und Speicherplatz freigeben.",
          source: "01_ds-concept-sockets.pdf, Folie 14"
        },
        {
          q: "Was macht die Methode accept() eines ServerSocket?",
          a: "Sie wartet blockierend, bis eine Verbindung vom Client angefragt wird, und liefert dann den Socket für die Kommunikation.",
          source: "01_ds-concept-sockets.pdf, Folie 15"
        },
        {
          q: "Wie funktioniert ein asynchroner Echo-Server?",
          a: "Der von accept() erzeugte Client-Socket wird an einen Thread weitergereicht, der die Anfrage bearbeitet. Währenddessen kann der ServerSocket asynchron auf weitere Anfragen warten — Verbindungsaufbau und Verarbeitung sind entkoppelt.",
          source: "01_ds-concept-sockets.pdf, Folien 31, 33"
        },
        {
          q: "Was müssen Java-Objekte erfüllen, um über Streams versendet zu werden?",
          a: "Sie müssen in eine für den Netzwerkverkehr geeignete Repräsentation umgewandelt werden — ihre Klassen müssen das Interface Serializable implementieren.",
          source: "01_ds-concept-sockets.pdf, Folie 29"
        },
        {
          q: "Was charakterisiert Java NIO?",
          a: "Non-Blocking (nicht blockierende IO-Vorgänge, gleichzeitiges Arbeiten möglich) und Pufferung (Daten werden in Puffern zwischengespeichert).",
          source: "01_ds-concept-sockets.pdf, Folie 37"
        }
      ],
      flashcards: [
        {
          front: "Socket",
          back: "Endpunkt einer bidirektionalen Kommunikationsverbindung, an eine Portnummer gebunden",
          source: "01_ds-concept-sockets.pdf, Folie 8"
        },
        {
          front: "Port-Nummern",
          back: "16-Bit-Zahlen (0–65.535), von TCP und UDP verwendet, unterscheiden Anwendungen auf einem Rechner",
          source: "01_ds-concept-sockets.pdf, Folie 7"
        },
        {
          front: "TCP vs. UDP (Socket-Sicht)",
          back: "TCP: verbindungsorientiert, verlässlich, Punkt-zu-Punkt; UDP: verbindungslos, unabhängige Datagramme ohne Ankunftsgarantie",
          source: "01_ds-concept-sockets.pdf, Folien 5-6"
        },
        {
          front: "Java-Klassen für TCP und UDP",
          back: "TCP: Socket, ServerSocket, URL(Connection); UDP: DatagramSocket, DatagramPacket, MulticastSocket",
          source: "01_ds-concept-sockets.pdf, Folie 10"
        },
        {
          front: "4 Schritte der Socket-Programmierung",
          back: "Öffnen → Streams holen → lesen/schreiben → schließen/freigeben",
          source: "01_ds-concept-sockets.pdf, Folie 14"
        },
        {
          front: "accept()",
          back: "Wartet blockierend auf eine Verbindungsanfrage des Clients",
          source: "01_ds-concept-sockets.pdf, Folie 15"
        },
        {
          front: "Asynchroner Server: Grundidee",
          back: "Verbindungsaufbau von der Verarbeitung entkoppeln — Client-Socket an Thread übergeben, ServerSocket wartet weiter",
          source: "01_ds-concept-sockets.pdf, Folien 31, 33"
        }
      ]
    },
    {
      id: "threads",
      title: "Threads: Grundlagen",
      icon: "🧵",
      cards: [
        {
          t: "Nebenläufigkeit",
          b: "Häufig wird unter Programmierung die Entwicklung sequentieller Programme verstanden — Abarbeitung von Programmschritten in festgelegter Reihenfolge. In Verteilten Systemen und seit dem Aufkommen von Multicore-Systemen ist diese Vorstellung überholt: Nebenläufigkeit ist heute der Standardfall, nicht die Ausnahme. Die Nebenläufigkeit einer Anwendung ermöglicht es, mehrere Prozessorkerne auszunutzen.",
          tag: "wichtig",
          source: "02_ds-java-threads.pdf, Folien 8-9"
        },
        {
          t: "Prozess",
          b: "Ein Prozess hat eine konsistente Ausführungsumgebung, die vom Betriebssystem verwaltet wird. Das Betriebssystem stellt den Prozessen Ressourcen (z. B. Speicher, CPU) zur Verfügung. In Java entspricht eine Instanz der VM einem Prozess.",
          tag: "def",
          source: "02_ds-java-threads.pdf, Folie 11"
        },
        {
          t: "Thread",
          b: "Lightweight Process. Ein Prozess kann einen oder mehrere Threads enthalten; Threads teilen sich die Ressourcen, die dem Prozess vom Betriebssystem zugewiesen werden. System-Threads und Benutzer-Threads werden unterschieden: Java-Anwendungen enthalten einige System-Threads, die nicht direkt vom Programmierer gesteuert werden; beim Programmstart gibt es einen Benutzer-Thread, der weitere Threads erstellen kann. Multithreading in Java: High-Level-APIs in <code>java.util.concurrent</code>, Runtime-Support durch VM und Betriebssystem.",
          tag: "def",
          source: "02_ds-java-threads.pdf, Folien 10, 12"
        },
        {
          t: "Threads erzeugen: Klasse vs. Interface",
          b: "Ableitung von der Klasse <code>Thread</code>: <code>public class HelloThread extends Thread { public void run() {...} }</code> — einfach, aber eingeschränkt, da Java keine Mehrfachvererbung unterstützt. Implementierung des Interface <code>Runnable</code>: <code>new Thread(new HelloRunnable()).start()</code> — allgemeiner: Die Klasse kann von anderen Klassen abgeleitet werden, und der Task (Runnable) ist vom Thread getrennt. Auch anonyme Implementierung und Lambda-Ausdrücke sind möglich.",
          tag: "wichtig",
          source: "02_ds-java-threads.pdf, Folien 15-17"
        },
        {
          t: "start() statt run()",
          b: "Verwenden Sie immer die Methode <code>start()</code>, um einen Thread zu starten. Wenn <code>run()</code> direkt aufgerufen wird, wird es synchron ausgeführt. Threads sind in Java Objekte: Jeder Ausführungs-Thread ist mit einem Thread-Objekt verbunden, das die Steuerung ermöglicht. Der Thread-Name kann im Konstruktor gesetzt und mit <code>getName()</code> ausgegeben werden; <code>Thread.currentThread()</code> liefert eine Referenz auf das aktuell laufende Thread-Objekt; der Status ist über <code>getStatus()</code> zugänglich.",
          tag: "wichtig",
          source: "02_ds-java-threads.pdf, Folien 14, 18-21"
        },
        {
          t: "Thread.sleep()",
          b: "Der Aufruf von <code>sleep()</code> stoppt den Ausführungsfluss des Threads. Eine <code>InterruptedException</code> wird geworfen, wenn die Sleep-Phase von einem anderen Thread unterbrochen wird. Es ist nicht garantiert, dass die angegebene Zeit genau eingehalten wird.",
          tag: "def",
          source: "02_ds-java-threads.pdf, Folie 22"
        },
        {
          t: "yield()",
          b: "Die Methode <code>yield()</code> zeigt der JVM an, dass das Thread-Objekt die CPU für andere Aufgaben verlassen kann. Die JVM garantiert nicht, dass sie dieser Aufforderung nachkommen wird.",
          tag: "def",
          source: "02_ds-java-threads.pdf, Folie 23"
        },
        {
          t: "Interrupts",
          b: "Interrupts stellen eine Aufforderung für einen Thread dar, die Verarbeitung seiner Aktivitäten zu unterbrechen. Sie werden von anderen Threads ausgelöst und müssen von der Implementierung des Threads unterstützt werden; das Auslösen setzt das Interrupt-Flag. Wenn ein Thread keine Methoden aufruft, die die InterruptedException auslösen, muss er das Flag testen: Die statische Methode <code>Thread.interrupted()</code> löscht das Flag; die nicht-statische <code>isInterrupted()</code> löscht es nicht (Prüfung anderer Threads). Wird ein Interrupt erkannt, sollte eine <code>InterruptedException</code> geworfen werden.",
          tag: "def",
          source: "02_ds-java-threads.pdf, Folien 24-26"
        },
        {
          t: "join()",
          b: "Mit der join-Anweisung ist es möglich, dass ein Thread wartet, bis ein anderer Thread beendet wird: <code>t.join();</code> bzw. <code>t.join(1000);</code> (maximal 1 Sekunde warten). <code>join()</code> reagiert wie <code>sleep()</code> auf einen Interrupt, indem es mit einer InterruptedException beendet wird.",
          tag: "def",
          source: "02_ds-java-threads.pdf, Folie 27"
        },
        {
          t: "Beispiel: SimpleThreads",
          b: "Das Beispiel zeigt, wie Threads kommunizieren: Ein Hauptthread (in jedem Programm vorhanden) erzeugt und steuert einen weiteren Thread (MessageLoop). Der Hauptthread wartet mit <code>isAlive()</code> und <code>join()</code>; überschreitet die Wartezeit die Geduld, ruft er <code>t.interrupt()</code> auf. Der Unter-Thread fängt die InterruptedException und beendet sich.",
          tag: "beispiel",
          source: "02_ds-java-threads.pdf, Folien 28-30"
        }
      ],
      questions: [
        {
          q: "Was ist der Unterschied zwischen Prozess und Thread?",
          a: "Ein Prozess hat eine eigene, vom Betriebssystem verwaltete Ausführungsumgebung mit zugewiesenen Ressourcen (in Java: eine VM-Instanz = ein Prozess). Ein Thread ist ein Lightweight Process innerhalb eines Prozesses; Threads teilen sich die Ressourcen des Prozesses.",
          source: "02_ds-java-threads.pdf, Folien 11-12"
        },
        {
          q: "Auf welche zwei Arten können Threads in Java erzeugt werden und welche ist allgemeiner?",
          a: "Ableitung von der Klasse Thread oder Implementierung des Interface Runnable. Runnable ist allgemeiner: Die Klasse kann von anderen Klassen erben (keine Mehrfachvererbung in Java) und der Task ist vom Thread getrennt.",
          source: "02_ds-java-threads.pdf, Folien 15-16"
        },
        {
          q: "Warum sollte man start() und nicht run() aufrufen?",
          a: "start() startet den Thread asynchron. Wird run() direkt aufgerufen, wird der Code synchron im aufrufenden Thread ausgeführt.",
          source: "02_ds-java-threads.pdf, Folie 20"
        },
        {
          q: "Wie verhalten sich Thread.interrupted() und isInterrupted() unterschiedlich?",
          a: "Die statische Methode Thread.interrupted() löscht das Interrupt-Flag beim Aufruf; die nicht-statische isInterrupted() löscht es nicht und wird verwendet, um den Interrupt-Status eines anderen Threads zu prüfen.",
          source: "02_ds-java-threads.pdf, Folie 25"
        },
        {
          q: "Was bewirkt join()?",
          a: "Der aufrufende Thread wartet, bis der andere Thread beendet ist (optional mit Timeout). Auf einen Interrupt reagiert join() wie sleep() mit einer InterruptedException.",
          source: "02_ds-java-threads.pdf, Folie 27"
        },
        {
          q: "Ist garantiert, dass sleep() die angegebene Zeit exakt einhält?",
          a: "Nein — es ist nicht garantiert, dass die angegebene Zeit für die Unterbrechung genau eingehalten wird; außerdem kann sleep() durch einen Interrupt mit InterruptedException abgebrochen werden.",
          source: "02_ds-java-threads.pdf, Folie 22"
        },
        {
          q: "Garantiert die JVM, dass yield() befolgt wird?",
          a: "Nein — yield() zeigt der JVM nur an, dass der Thread die CPU verlassen kann; die JVM garantiert nicht, dass sie dem nachkommt.",
          source: "02_ds-java-threads.pdf, Folie 23"
        }
      ],
      flashcards: [
        {
          front: "Prozess (in Java)",
          back: "Konsistente, vom OS verwaltete Ausführungsumgebung; eine VM-Instanz entspricht einem Prozess",
          source: "02_ds-java-threads.pdf, Folie 11"
        },
        {
          front: "Thread",
          back: "Lightweight Process — teilt sich die Ressourcen seines Prozesses",
          source: "02_ds-java-threads.pdf, Folie 12"
        },
        {
          front: "2 Wege der Thread-Erzeugung",
          back: "extends Thread (einfach, aber keine weitere Vererbung) oder implements Runnable (allgemeiner, Task getrennt)",
          source: "02_ds-java-threads.pdf, Folien 15-16"
        },
        {
          front: "run() direkt aufrufen?",
          back: "Nein — dann läuft der Code synchron. Immer start() verwenden",
          source: "02_ds-java-threads.pdf, Folie 20"
        },
        {
          front: "Thread.sleep()",
          back: "Stoppt den Ausführungsfluss; InterruptedException bei Unterbrechung; Zeit nicht exakt garantiert",
          source: "02_ds-java-threads.pdf, Folie 22"
        },
        {
          front: "Interrupt",
          back: "Aufforderung an einen Thread, seine Aktivität zu unterbrechen — setzt das Interrupt-Flag, muss vom Thread unterstützt werden",
          source: "02_ds-java-threads.pdf, Folie 24"
        },
        {
          front: "t.join()",
          back: "Wartet, bis Thread t beendet ist (optional mit Timeout)",
          source: "02_ds-java-threads.pdf, Folie 27"
        }
      ]
    },
    {
      id: "synchronisation",
      title: "JMM & Synchronisation",
      icon: "🔒",
      cards: [
        {
          t: "Threads und Shared Memory",
          b: "Threads teilen sich Ressourcen, die ihrem Prozess vom Betriebssystem zugewiesen werden, haben aber ihren eigenen Programmzähler und Aufrufstack. Threads kommunizieren über Shared Memory. Der verteilte Zugriff auf Variablen wird dadurch kompliziert, dass oft unklar ist, in welchem Speicherbereich die Variable gehalten wird.",
          tag: "wichtig",
          source: "03_ds-concept-threads-2.pdf, Folie 4"
        },
        {
          t: "Java Memory Model (JMM)",
          b: "Das JMM beschreibt, welche Verhaltensweisen in Multithread-Code zulässig sind und wie Threads über den Speicher interagieren können. Es beschreibt die Beziehung zwischen Variablen im Programm und den Details, wie sie in einem realen Computersystem gespeichert und abgerufen werden — auf eine Weise, die mit vielfältiger Hardware und Compileroptimierungen korrekt implementiert werden kann.",
          tag: "def",
          source: "03_ds-concept-threads-2.pdf, Folie 5"
        },
        {
          t: "Kritische Szenarien",
          b: "In Multiprozessorarchitekturen gibt es neben dem globalen Hauptspeicher lokale Speicher (CPU-Register, Cache). Im Extremfall läuft jeder Thread auf seinem eigenen Prozessor; auf Register anderer CPUs kann nicht zugegriffen werden — Änderungen eines Threads können für andere unsichtbar sein. Zwei Hauptprobleme: <b>Sichtbarkeit</b> von Thread-Aktualisierungen in gemeinsam genutzten Variablen und <b>Race Conditions</b> beim Lesen, Prüfen und Schreiben von Shared-Variablen.",
          tag: "wichtig",
          source: "03_ds-concept-threads-2.pdf, Folien 6-7"
        },
        {
          t: "Sichtbarkeitsproblem und volatile",
          b: "Ein Thread kopiert das gemeinsam genutzte Objekt in seinen CPU-Cache und ändert es dort; die Änderung ist für Threads auf anderen CPUs nicht sichtbar, solange sie nicht in den Hauptspeicher zurückgeschrieben wurde. Das Schlüsselwort <code>volatile</code> sorgt dafür, dass geänderte Werte immer in den Hauptspeicher zurückgeschrieben werden.",
          tag: "wichtig",
          source: "03_ds-concept-threads-2.pdf, Folie 9"
        },
        {
          t: "Race Conditions",
          b: "Zwei Inkremente werden gleichzeitig ohne ordnungsgemäße Synchronisation ausgeführt: Unabhängig davon, welcher Thread seine aktualisierte Version in den Hauptspeicher zurückschreibt, ist der Wert trotz zwei Inkrementen nur um 1 höher. Semaphoren können durch synchronized-Blöcke eingefügt werden.",
          tag: "beispiel",
          source: "03_ds-concept-threads-2.pdf, Folie 10"
        },
        {
          t: "Pitfalls: Reihenfolge nicht garantiert",
          b: "In nicht-synchronisierten nebenläufigen Programmen kann die Reihenfolge der Anweisungen durch Compiler, Prozessor oder Laufzeitumgebung verändert werden — Hypothesen über die Ausführungsreihenfolge sind sehr unsicher. Compiler ordnen Anweisungen um; Variablen liegen in Registern statt im Hauptspeicher; Prozessoren arbeiten parallel oder in anderer Reihenfolge; Caches ändern die Schreib-Reihenfolge in den Hauptspeicher; lokale Cache-Werte sind für andere Prozessoren nicht sichtbar.",
          tag: "wichtig",
          source: "03_ds-concept-threads-2.pdf, Folie 11"
        },
        {
          t: "Ziele des JMM",
          b: "<b>Atomizität:</b> Welche Methoden sind garantiert ununterbrechbar (z. B. Lesen und Schreiben geteilter Variablen)? <b>Sichtbarkeit:</b> Unter welchen Bedingungen sind die Auswirkungen eines Threads für andere sichtbar? <b>Reihenfolge:</b> Unter welchen Bedingungen erscheint die Ausführungsreihenfolge der Anweisungen fehlerhaft?",
          tag: "def",
          source: "03_ds-concept-threads-2.pdf, Folie 12"
        },
        {
          t: "Atomizität",
          b: "Der Zugriff und das Schreiben auf Variablen der Basistypen (außer long und double) ist garantiert atomar; Atomizität gilt auch für volatile long und double. Durch atomare Zugriffe kann sichergestellt werden, dass es keine inkonsistenten Zustände gibt. Atomizität stellt Sichtbarkeit her. Achtung: Zusammengesetzte Operationen wie <code>++</code> sind auch auf volatilen Variablen nicht atomar!",
          tag: "wichtig",
          source: "03_ds-concept-threads-2.pdf, Folien 13, 16, 20"
        },
        {
          t: "Sichtbarkeit: Bedingungen",
          b: "Änderungen an Variablen sind sichtbar bei: Erwerb und Rückgabe eines Locks; volatile Variablen werden vor weiteren Aktionen in den Hauptspeicher zurückgeschrieben (flushed) und vor fremdem Zugriff neu geladen; wenn ein Thread terminiert, werden alle veränderten Variablen in den Hauptspeicher geschrieben. Sichtbarkeitsfehler sind schwer zu reproduzieren.",
          tag: "def",
          source: "03_ds-concept-threads-2.pdf, Folie 14"
        },
        {
          t: "Happens-before-Relation",
          b: "Das JMM definiert eine partielle Ordnung namens happens-before auf allen Aktionen im Programm. Damit garantiert ist, dass Aktion B die Ergebnisse von Aktion A sieht (egal ob in verschiedenen Threads), muss eine happens-before-Beziehung zwischen A und B bestehen.",
          tag: "def",
          source: "03_ds-concept-threads-2.pdf, Folie 18"
        },
        {
          t: "Thread-Interferenz",
          b: "Eine Counter-Klasse mit <code>increment()</code> (c++) und <code>value()</code>: Greifen mehrere Threads nebenläufig auf die Variable zu, resultieren unerwünschte Zustände. Intention im Beispiel: Nach Termination sollte der Zähler 200 sein; Beobachtung: Nach jeder Programmausführung hat er einen anderen Wert.",
          tag: "beispiel",
          source: "03_ds-concept-threads-2.pdf, Folien 22-23"
        },
        {
          t: "synchronized",
          b: "Zur Synchronisierung von Methoden gibt es das <code>synchronized</code>-Schlüsselwort. Das Interleaving von Methoden kann dadurch ausgeschlossen und Thread-Interferenz auf Methoden-Ebene unterbunden werden. Insbesondere wird die Sichtbarkeit der Variablen erreicht.",
          tag: "wichtig",
          source: "03_ds-concept-threads-2.pdf, Folie 24"
        }
      ],
      questions: [
        {
          q: "Was beschreibt das Java Memory Model?",
          a: "Welche Verhaltensweisen in Multithread-Code zulässig sind und wie Threads über den Speicher interagieren — die Beziehung zwischen Programmvariablen und ihrer Speicherung/Abruf in realen Systemen, korrekt implementierbar über verschiedene Hardware und Compileroptimierungen.",
          source: "03_ds-concept-threads-2.pdf, Folie 5"
        },
        {
          q: "Welche zwei Hauptprobleme adressiert das JMM?",
          a: "Sichtbarkeit von Thread-Aktualisierungen (Schreibvorgängen) in gemeinsam genutzte Variablen und Race Conditions beim Lesen, Prüfen und Schreiben von Shared-Variablen.",
          source: "03_ds-concept-threads-2.pdf, Folie 7"
        },
        {
          q: "Was bewirkt das Schlüsselwort volatile?",
          a: "Geänderte Werte werden immer in den Hauptspeicher zurückgeschrieben (und vor Zugriff anderer Threads neu geladen). Aber: Zusammengesetzte Operationen wie ++ sind auch auf volatilen Variablen nicht atomar.",
          source: "03_ds-concept-threads-2.pdf, Folien 9, 16"
        },
        {
          q: "Was ist eine Race Condition (Beispiel der Folien)?",
          a: "Zwei gleichzeitige Inkremente ohne Synchronisation: Egal welcher Thread seinen Wert zurückschreibt, der Zähler ist trotz zweier Inkremente nur um 1 höher als der Ursprungswert.",
          source: "03_ds-concept-threads-2.pdf, Folie 10"
        },
        {
          q: "Welche drei Ziele verfolgen die Regeln des JMM?",
          a: "Atomizität (welche Zugriffe sind ununterbrechbar), Sichtbarkeit (wann sind Auswirkungen sichtbar) und Reihenfolge (wann erscheint die Ausführungsreihenfolge fehlerhaft).",
          source: "03_ds-concept-threads-2.pdf, Folie 12"
        },
        {
          q: "Welche Zugriffe sind in Java garantiert atomar?",
          a: "Lesen und Schreiben von Variablen der Basistypen — außer long und double; für volatile long und double gilt Atomizität ebenfalls.",
          source: "03_ds-concept-threads-2.pdf, Folie 13"
        },
        {
          q: "Unter welchen Bedingungen sind Änderungen an Variablen sichtbar?",
          a: "Bei Erwerb und Rückgabe eines Locks, bei volatilen Variablen (Flush in den Hauptspeicher und Neuladen) und wenn ein Thread terminiert (alle veränderten Variablen werden zurückgeschrieben).",
          source: "03_ds-concept-threads-2.pdf, Folie 14"
        },
        {
          q: "Was ist die happens-before-Relation?",
          a: "Eine vom JMM definierte partielle Ordnung auf allen Aktionen im Programm. B sieht die Ergebnisse von A nur garantiert, wenn zwischen A und B eine happens-before-Beziehung besteht.",
          source: "03_ds-concept-threads-2.pdf, Folie 18"
        },
        {
          q: "Wie wird Thread-Interferenz in Java unterbunden?",
          a: "Mit dem synchronized-Schlüsselwort: Das Interleaving von Methoden wird ausgeschlossen und die Sichtbarkeit der Variablen erreicht.",
          source: "03_ds-concept-threads-2.pdf, Folie 24"
        }
      ],
      flashcards: [
        {
          front: "Wie kommunizieren Threads?",
          back: "Über Shared Memory — eigener Programmzähler und Stack, geteilte Prozess-Ressourcen",
          source: "03_ds-concept-threads-2.pdf, Folie 4"
        },
        {
          front: "2 Hauptprobleme im JMM",
          back: "Sichtbarkeit von Schreibvorgängen und Race Conditions",
          source: "03_ds-concept-threads-2.pdf, Folie 7"
        },
        {
          front: "volatile",
          back: "Werte werden immer in den Hauptspeicher zurückgeschrieben — aber ++ bleibt nicht-atomar",
          source: "03_ds-concept-threads-2.pdf, Folien 9, 16"
        },
        {
          front: "3 Ziele des JMM",
          back: "Atomizität, Sichtbarkeit, Reihenfolge",
          source: "03_ds-concept-threads-2.pdf, Folie 12"
        },
        {
          front: "Atomare Basistypen-Zugriffe: Ausnahme?",
          back: "long und double (außer als volatile deklariert)",
          source: "03_ds-concept-threads-2.pdf, Folie 13"
        },
        {
          front: "happens-before",
          back: "Partielle Ordnung des JMM: B sieht Ergebnisse von A nur bei bestehender happens-before-Beziehung",
          source: "03_ds-concept-threads-2.pdf, Folie 18"
        },
        {
          front: "synchronized",
          back: "Schließt Interleaving aus, unterbindet Thread-Interferenz, stellt Sichtbarkeit her",
          source: "03_ds-concept-threads-2.pdf, Folie 24"
        }
      ]
    },
    {
      id: "threads-fortgeschritten",
      title: "Liveness, Executor & virtuelle Threads",
      icon: "⚙️",
      cards: [
        {
          t: "Deadlock",
          b: "Ein Anwendungszustand, in dem Threads bereits eine Teilmenge von Ressourcen erworben haben, aber keine Chance haben, weitere Ressourcen zu erhalten. Typisches Muster: verschachtelte synchronized-Blöcke auf zwei Objekten in unterschiedlicher Reihenfolge.",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folie 5"
        },
        {
          t: "Starvation",
          b: "Eine Situation, in der bestimmte Threads keine Chance haben, alle notwendigen Ressourcen zu erwerben — häufig verursacht durch andere Threads, die diese Ressourcen stark nutzen. Häufige Gründe: Ändern von Thread-Prioritäten (unvorhersehbare, plattformabhängige Folgen) und Aufrufe von yield oder sleep(0), die Plattformabhängigkeiten einführen.",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folie 9"
        },
        {
          t: "Livelock",
          b: "Eine Situation, in der Threads so sehr damit beschäftigt sind zu kommunizieren, dass sie ihre eigentliche Funktionalität nicht mehr erbringen. Beispiele: fehlerhafte Recovery-Mechanismen; ähnlich wie Menschen, die sich gegenseitig ausweichen wollen. Abhilfe: Zufälligkeit in Retry-Mechanismen einführen.",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folie 10"
        },
        {
          t: "Bibliothek vs. Framework",
          b: "Eine <b>Bibliothek</b> ist eine Sammlung von Unterprogrammen für thematisch zusammengehörende Problemstellungen — keine eigenständig lauffähige Einheit, sondern Hilfsmodule, die von Programmen angefordert werden. Ein <b>Framework</b> ist ein Programmiergerüst: selbst kein fertiges Programm, sondern der Rahmen, in dem der Programmierer eine Anwendung erstellt. Es gibt i. d. R. die Anwendungsarchitektur vor — mit Umkehrung der Steuerung (Inversion of Control): Der Programmierer registriert Implementierungen, die vom Framework gesteuert und benutzt werden.",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folien 12-13"
        },
        {
          t: "Tasks und Nachteile von Threads",
          b: "Ein Task ist ein abstrakter Block von Funktionalität (z. B. ein Client-Request), oft durch ein Runnable abgebildet. Nachteile von Threads: <b>Lifecycle-Overhead</b> (Erzeugung und Verwaltung kosten Zeit und Ressourcen), <b>Ressourcenverbrauch</b> (wartende Threads binden Speicher), <b>Stabilität</b> (Anzahl der Threads durch Speicherplatz begrenzt).",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folien 14-15"
        },
        {
          t: "Thread-Pools und das Executor-Framework",
          b: "Thread-Pools adressieren die Nachteile von Threads: Sie verwalten einen Pool von Worker-Threads plus eine Queue mit zu verarbeitenden Tasks. Worker-Threads laufen dauerhaft; Tasks aus der Queue werden ihnen zugewiesen — das minimiert den Aufwand für Erzeugung und Verwaltung. Das Executor-Framework: <code>public interface Executor { void execute(Runnable command); }</code> — Entkopplung von Task-Einreichung und Task-Ausführung, verschiedene Ausführungs-Policys, Lifecycle-Support und Monitoring.",
          tag: "wichtig",
          source: "06_ds-java-threads-3.pdf, Folien 16, 21"
        },
        {
          t: "Konkrete Executoren und die Klasse Executors",
          b: "<code>ThreadPoolExecutor</code> baut einen Thread-Pool auf; <code>ScheduledThreadPoolExecutor</code> erweitert ihn um zeitgesteuerte und wiederholte Ausführung. Die Klasse <code>Executors</code> bietet statische Factory-Methoden: <code>newCachedThreadPool()</code> (wächst mit den Anfragen), <code>newFixedThreadPool(int)</code> (maximal n Threads), <code>newSingleThreadScheduledExecutor()</code> und <code>newScheduledThreadPool(int)</code>. Diagnose: <code>getPoolSize()</code>, <code>getActiveCount()</code>, <code>getCompletedTaskCount()</code>. Lifecycle: running, shutting down, terminated.",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folien 19, 22, 24-25"
        },
        {
          t: "Herunterfahren eines Executors",
          b: "<code>shutdown()</code> fährt den Thread-Pool herunter: Laufende Threads werden nicht abgebrochen, aber neue Anfragen nicht angenommen. <code>isShutdown()</code> prüft, ob bereits heruntergefahren wurde. <code>shutdownNow()</code> regt ausführende Befehle zum Stoppen an und gibt die Liste der zu beendenden Kommandos zurück.",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folie 28"
        },
        {
          t: "Zeitgesteuerte Tasks",
          b: "Mit <code>schedule(task, delay, TimeUnit)</code> wird ein Task nach einer Verzögerung ausgeführt. Für periodische Ausführung: <code>scheduleAtFixedRate(task, initialDelay, period, TimeUnit)</code>. Ein <code>ScheduledFuture</code>-Objekt bietet Methoden für die periodische Ausführung (z. B. <code>getDelay()</code> für die Zeit bis zur nächsten Ausführung).",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folien 29-31"
        },
        {
          t: "Callables und Futures",
          b: "Ein Thread kann Ergebnisse nur mit Schwierigkeiten liefern — dafür gibt es das Interface <code>Callable</code>: Es unterstützt einen Datentyp V als Rückgabewert der Methode <code>call()</code>. Callables werden mit <code>submit()</code> an den ExecutorService übergeben; der Rückgabewert wird asynchron in einem <code>Future</code>-Objekt gespeichert. Future-Operationen: <code>get()</code> (blockiert bis der Wert verfügbar ist), <code>get(timeout, unit)</code> (wirft TimeoutException) und <code>isDone()</code>.",
          tag: "wichtig",
          source: "06_ds-java-threads-3.pdf, Folien 32-36"
        },
        {
          t: "Virtuelle Threads",
          b: "Java-Threads entsprechen Kernel-Threads, werden vom Betriebssystem gescheduled und heißen Platform Threads. Seit einiger Zeit bietet Java auch User-Threads an: Virtual Threads, gescheduled von der Java Runtime. Schwächen von Platform Threads: großer Ressourcenbedarf (z. B. Arbeitsspeicher) und viele Kontextwechsel durch OS-Scheduling. Virtuelle Threads werden vollständig von der JVM verwaltet — keine Kontextwechsel nötig.",
          tag: "def",
          source: "06_ds-java-threads-3.pdf, Folien 38-39"
        },
        {
          t: "Eigenschaften virtueller Threads",
          b: "Kleinerer Ressourcenbedarf (Footprint) — große Zahlen virtueller Threads können gestartet werden; effizientere Verwaltung durch die JVM; einfache Handhabung ähnlich wie Platform Threads; besonders positiv bei Anwendungen mit vielen I/O-Operationen. Konzept: Beim Scheduling wird der virtuelle Thread auf einen Platform Thread (Carrier) gemountet; er kann unmounted werden, z. B. wenn er blockierend auf ein IO-Ereignis wartet. Da sie nicht ressourcenintensiv sind, müssen virtuelle Threads nicht gepoolt werden; blockierendes Warten ist kein Problem. Erzeugung: <code>Thread.ofVirtual().start(() -> ...)</code> oder <code>Executors.newVirtualThreadPerTaskExecutor()</code>.",
          tag: "wichtig",
          source: "06_ds-java-threads-3.pdf, Folien 40, 42-46"
        }
      ],
      questions: [
        {
          q: "Was ist ein Deadlock?",
          a: "Ein Anwendungszustand, in dem Threads bereits eine Teilmenge von Ressourcen erworben haben, aber keine Chance haben, weitere Ressourcen zu erhalten — z. B. durch verschachtelte synchronized-Blöcke in unterschiedlicher Reihenfolge.",
          source: "06_ds-java-threads-3.pdf, Folie 5"
        },
        {
          q: "Was unterscheidet Starvation und Livelock?",
          a: "Starvation: Threads bekommen die benötigten Ressourcen nicht, weil andere Threads sie stark nutzen. Livelock: Threads sind so mit Kommunikation beschäftigt, dass sie ihre eigentliche Funktionalität nicht mehr erbringen.",
          source: "06_ds-java-threads-3.pdf, Folien 9-10"
        },
        {
          q: "Was unterscheidet ein Framework von einer Bibliothek?",
          a: "Eine Bibliothek liefert Hilfsmodule, die vom Programm angefordert werden. Ein Framework gibt die Anwendungsarchitektur vor — mit Inversion of Control: Der Programmierer registriert Implementierungen, die vom Framework gesteuert und benutzt werden.",
          source: "06_ds-java-threads-3.pdf, Folien 12-13"
        },
        {
          q: "Welche Nachteile von Threads adressieren Thread-Pools?",
          a: "Thread-Lifecycle-Overhead (Erzeugung/Verwaltung kostet), Ressourcenverbrauch (wartende Threads binden Speicher) und Stabilität (Thread-Anzahl durch Speicher begrenzt). Worker-Threads laufen dauerhaft und übernehmen Tasks aus einer Queue.",
          source: "06_ds-java-threads-3.pdf, Folien 15-16, 21"
        },
        {
          q: "Welche Factory-Methoden bietet die Klasse Executors?",
          a: "newCachedThreadPool() (Größe wächst mit den Anfragen), newFixedThreadPool(n) (maximal n Threads), newSingleThreadScheduledExecutor() und newScheduledThreadPool(corePoolSize) (mit Timing-Constraints).",
          source: "06_ds-java-threads-3.pdf, Folie 22"
        },
        {
          q: "Was unterscheidet shutdown() von shutdownNow()?",
          a: "shutdown(): laufende Threads werden nicht abgebrochen, neue Anfragen nicht mehr angenommen. shutdownNow(): ausführende Befehle werden zum Stoppen angeregt, Rückgabe ist die Liste der zu beendenden Kommandos.",
          source: "06_ds-java-threads-3.pdf, Folie 28"
        },
        {
          q: "Wozu dienen Callable und Future?",
          a: "Callable ist ein Runnable mit Rückgabewert (Typparameter V, Methode call()). submit() übergibt es dem ExecutorService; das Ergebnis wird asynchron in einem Future gespeichert, das mit get() (blockierend), get(timeout) oder isDone() abgefragt werden kann.",
          source: "06_ds-java-threads-3.pdf, Folien 32-36"
        },
        {
          q: "Was sind virtuelle Threads und welche Vorteile haben sie?",
          a: "User-Threads, die von der Java Runtime (JVM) gescheduled werden statt vom OS. Vorteile: kleiner Footprint (große Anzahl möglich), keine Kontextwechsel, kein Pooling nötig, blockierendes Warten unproblematisch — besonders gut bei I/O-lastigen Anwendungen.",
          source: "06_ds-java-threads-3.pdf, Folien 38-40, 46"
        },
        {
          q: "Was ist ein Carrier-Thread?",
          a: "Der Platform Thread, auf den ein virtueller Thread beim Scheduling gemountet wird. In bestimmten Situationen (z. B. blockierendes Warten auf IO) wird der virtuelle Thread wieder unmounted.",
          source: "06_ds-java-threads-3.pdf, Folie 45"
        }
      ],
      flashcards: [
        {
          front: "Deadlock",
          back: "Threads halten Teilressourcen und können die restlichen nie erwerben",
          source: "06_ds-java-threads-3.pdf, Folie 5"
        },
        {
          front: "Starvation",
          back: "Threads bekommen nötige Ressourcen nicht, weil andere sie stark nutzen",
          source: "06_ds-java-threads-3.pdf, Folie 9"
        },
        {
          front: "Livelock",
          back: "Threads sind so mit Kommunikation beschäftigt, dass keine eigentliche Funktionalität mehr erbracht wird",
          source: "06_ds-java-threads-3.pdf, Folie 10"
        },
        {
          front: "Inversion of Control",
          back: "Framework steuert registrierte Implementierungen des Programmierers — nicht umgekehrt",
          source: "06_ds-java-threads-3.pdf, Folie 13"
        },
        {
          front: "Interface Executor",
          back: "void execute(Runnable command) — entkoppelt Task-Einreichung von Task-Ausführung",
          source: "06_ds-java-threads-3.pdf, Folien 16, 19"
        },
        {
          front: "Callable vs. Runnable",
          back: "Callable ist ein Runnable mit typisiertem Rückgabewert (call()); Ausführung per submit(), Ergebnis im Future",
          source: "06_ds-java-threads-3.pdf, Folien 32-34"
        },
        {
          front: "Future.get()",
          back: "Blockiert, bis der Wert verfügbar ist; mit Timeout: TimeoutException möglich",
          source: "06_ds-java-threads-3.pdf, Folie 36"
        },
        {
          front: "Platform vs. Virtual Threads",
          back: "Platform: Kernel-Threads, OS-Scheduling, teuer; Virtual: JVM-verwaltet, kleiner Footprint, keine Kontextwechsel",
          source: "06_ds-java-threads-3.pdf, Folien 38-39"
        }
      ]
    },
    {
      id: "architektur",
      title: "Architektur & Architekturstile",
      icon: "🏛️",
      cards: [
        {
          t: "Architectural Views (4+1)",
          b: "Häufig werden 4+1 Sichten unterschieden: <b>Logical View</b> (Funktionalität für den Endnutzer), <b>Development View</b> (Implementierungssicht der Entwickler), <b>Process View</b> (Prozesse im System), <b>Physical View</b> (Verteilung und Deployment der Software auf Hardware-Knoten) und <b>Scenario</b> als fünfte Sicht (relevante Abläufe und Nutzerinteraktion). Quelle: Kruchten, The 4+1 View Model of Architecture (IEEE Software, 1995).",
          tag: "def",
          source: "03-ds-architektur.pdf, Folie 5"
        },
        {
          t: "Physikalisches Modell und drei Generationen",
          b: "Das Physikalische Modell umfasst die Hardware der Knoten und die Netzwerktechnologie; Komponenten koordinieren sich durch Nachrichtenaustausch. Drei Generationen: <b>Frühe verteilte Systeme</b> (70er/80er: 10–100 Knoten im LAN, z. B. geteilte Drucker und Dateiserver), <b>Internet-basierte Systeme</b> (90er: große globale Systeme mit großer Heterogenität), <b>heutige Systeme</b> (mobile Knoten, Ubiquitous Computing, Cloud).",
          tag: "def",
          source: "03-ds-architektur.pdf, Folie 6"
        },
        {
          t: "Architekturstil, Komponente und Schnittstelle",
          b: "Ein Architekturstil beschreibt: die enthaltenen Komponenten, die Verbindungen/Beziehungen zwischen ihnen, die Nachrichten und ausgetauschten Daten sowie Bedingungen/Invarianten über Struktur und Verhalten. Eine Komponente ist eine modulare Einheit mit genau definierten Schnittstellen — solange die Schnittstellen unverändert bleiben, kann sie ausgetauscht werden, insbesondere im laufenden Betrieb.",
          tag: "def",
          source: "03-ds-architektur.pdf, Folie 8"
        },
        {
          t: "Architektur-Elemente",
          b: "<b>Prozesse</b> kommunizieren über Interprozess-Kommunikation (IPC); in vielen Fällen werden sie in Threads verfeinert, die die eigentlichen Endpunkte der Kommunikation sind. <b>Verteilte Objekte</b> kapseln Funktionalität und kommunizieren durch Methodenaufruf über Prozess- und Rechnergrenzen. <b>Komponenten</b> kapseln ebenfalls Funktionalität, sind aber Teil einer Plattform oder eines Frameworks (z. B. EJB). <b>Web Services</b> sind über Web-Standards aufrufbar (z. B. REST über http).",
          tag: "def",
          source: "03-ds-architektur.pdf, Folien 10-11"
        },
        {
          t: "Kommunikationsparadigmen",
          b: "<b>Interprozess-Kommunikation (IPC):</b> niedrigschwelliger Support für Nachrichtenaustausch (z. B. Sockets). <b>Remote Invocation:</b> verbreitetste Art (CORBA, RPC, RMI, SOA) — synchrone Kommunikation nach dem Vorbild des Prozeduraufrufs; dazu gehören Request-Reply-Protokolle, RPC (Orts- und Zugriffstransparenz) und RMI (RPC im OO-Paradigma, teils Objekte als Parameter). <b>Indirekte Kommunikation:</b> weitergehende Abstraktionen (Gruppen, Topics, Queues); Sender und Empfänger sind weitgehend entkoppelt (Orts- und Zeittransparenz).",
          tag: "wichtig",
          source: "03-ds-architektur.pdf, Folien 12, 14"
        },
        {
          t: "Indirekte Kommunikation: Formen",
          b: "<b>Gruppen-Kommunikation:</b> 1:n — Empfänger erhalten Nachrichten als Gruppenmitglieder. <b>Publish-Subscribe:</b> Empfänger melden sich für Themen an. <b>Message Queues:</b> 1:1 — die Queue entkoppelt Sender und Empfänger. <b>Tuple Spaces:</b> Datentupel werden in einem allgemein zugänglichen Speichersegment persistent gespeichert. <b>Distributed Shared Memory (DSM):</b> verschiedene Prozesse greifen auf geteilte Datenstrukturen zu.",
          tag: "def",
          source: "03-ds-architektur.pdf, Folie 15"
        },
        {
          t: "Client-Server und Peer-to-Peer",
          b: "<b>Client-Server:</b> Clients interagieren mit Servern über Rechnergrenzen hinweg, um auf Ressourcen zuzugreifen — die prominenteste und am häufigsten gebrauchte Architektur. <b>Peer-to-Peer:</b> Alle Prozesse haben die gleichen Verantwortlichkeiten und laufen mit dem gleichen Programm. Motivation: Client-Server skaliert schlecht (Last auf zentralem Server); Peers sind Client und Server zugleich, die Verfügbarkeit wächst mit der Nachfrage; Ressourcen werden zwischengespeichert und repliziert (z. B. Napster, BitTorrent).",
          tag: "def",
          source: "03-ds-architektur.pdf, Folien 16-17"
        },
        {
          t: "Deployment-Strategien",
          b: "Das Deployment beschreibt die Zuordnung von Prozessen, Objekten usw. zu den physikalischen Knoten; es beeinflusst Eigenschaften wie Performance stark. Standard-Strategien: Services auf mehreren Servern (Replikation oder Datenpartitionierung), <b>Caching</b> (Zwischenspeicher für bereits angefragte Daten, z. B. Browser-Historie), <b>mobiler Code</b> (Code wird lokal auf dem Client ausgeführt, z. B. JavaScript — Security-Risiken!) und <b>mobile Agenten</b> (laufendes Programm aus Code und Daten bewegt sich von Knoten zu Knoten, z. B. WebCrawler — ebenfalls Sicherheitsrisiken).",
          tag: "def",
          source: "03-ds-architektur.pdf, Folien 18-22"
        },
        {
          t: "Schichtenarchitektur",
          b: "Komponenten sind übereinander geschichtet: Eine Komponente in Schicht Lj setzt Abwärts-Aufrufe zu tieferen Schichten Li (i < j) ab und erwartet eine Antwort; Aufwärts-Aufrufe gibt es nur in Ausnahmefällen. Ein wichtiges Ziel ist die Trennung von Anwendungen und zugrunde liegenden Plattformen durch eine Middleware-Schicht — ihr Hauptzweck ist Verteilungstransparenz. Jede Schicht hat eine klar definierte Funktion und kommuniziert nur mit Nachbarschichten.",
          tag: "def",
          source: "03-ds-architektur.pdf, Folien 26, 28"
        },
        {
          t: "3-Schichten-Architektur",
          b: "<b>Präsentationsschicht:</b> Darstellung und Interaktion mit dem Benutzer. <b>Verarbeitungsschicht:</b> Verarbeitung der Anforderungen und der Daten. <b>Datenschicht:</b> persistente Datenhaltung. Beispiel Suchmaschine: Darstellung von Suchbegriff/Ergebnissen — Query-Generation und Ranking — Datenbank mit indizierten Webseiten.",
          tag: "def",
          source: "03-ds-architektur.pdf, Folien 30-31"
        },
        {
          t: "OOP-Stil und SOA",
          b: "OOP-Stil: Objekte entsprechen Komponenten, verbunden durch Methodenaufruf; interner Zustand gekapselt, nur die Schnittstelle sichtbar; Objekte austauschbar, solange die Schnittstelle bleibt; bei Verteilten Objekten laufen Aufrufe über das Netz. SOA: Dienste beruhen wie Objekte auf Kapselung (öffentliche Schnittstelle, geheime Interna), können von verschiedenen Organisationseinheiten angeboten werden und sind über das Netz zugänglich. Verteilte Systeme in SOA sind ein Problem der Dienstkomposition.",
          tag: "def",
          source: "03-ds-architektur.pdf, Folien 32, 34"
        },
        {
          t: "REST",
          b: "Weiterentwicklung der klassischen SOA (deren Service-Komposition komplex ist). Grundprinzip: Manipulation von Ressourcen. Drei Grundprinzipien: 1. Ressourcen werden durch einfache Namensschemata identifiziert; 2. alle Dienste bieten die gleiche Schnittstelle mit den immer gleichen Operationen; 3. nach einer Operation vergisst die Komponente alle Informationen über den Aufruf (zustandslose Ausführung). Beispiel Amazon S3: Objekte (Dateien) und Buckets (Verzeichnisse), ansprechbar über URIs; PUT erzeugt einen Bucket, GET liefert die enthaltenen Objekte.",
          tag: "def",
          source: "03-ds-architektur.pdf, Folien 35, 37"
        },
        {
          t: "Publish-Subscribe-Architekturen",
          b: "Ziel: die beteiligten Prozesse weitgehend zu entkoppeln — Funktionalität von der Koordination (Kooperation und Kommunikation) trennen. Wesentliches Merkmal: referentielle Entkopplung — die Prozesse „kennen“ einander nicht. Subskriptionen müssen gegen Notifications matchen; zwei Implementierungen: Publisher schicken Daten direkt an die Subscriber, oder Publisher schicken nur eine Benachrichtigung und die Subscriber lesen selbst (ausreichend Speicher im Shared Data Space nötig).",
          tag: "def",
          source: "03-ds-architektur.pdf, Folien 38-40"
        },
        {
          t: "Formen der Koordination",
          b: "<b>Direkte Kommunikation:</b> Prozesse kennen gegenseitig ihre Namen und müssen beide laufen. <b>Mailbox-Kommunikation:</b> Identifikatoren bekannt, aber nicht beide gleichzeitig aktiv. <b>Referentiell entkoppelt:</b> Prozesse kennen sich nicht, publizieren Ereignisse bei gleichzeitigem Laufen; Anmeldung für Ereignistypen. <b>Geteilte Datenräume:</b> Prozesse kennen sich nicht und müssen nicht gleichzeitig laufen.",
          tag: "def",
          source: "03-ds-architektur.pdf, Folie 41"
        },
        {
          t: "Systemarchitektur: Client und Server",
          b: "Die Systemarchitektur beschreibt die Verteilung der Software-Komponenten auf den Knoten (das Deployment); zentralisierte und dezentralisierte Architekturen werden unterschieden. <b>Server:</b> ein Prozess, der einen Dienst implementiert und über eine Schnittstelle anbietet. <b>Client:</b> ein Prozess, der einen Dienst nachfragt — er sendet einen Request und wartet auf einen Reply.",
          tag: "def",
          source: "03-ds-architektur-021.pdf, Folien 4-5"
        },
        {
          t: "Client-Server-Kommunikation und Idempotenz",
          b: "<b>Verbindungslos:</b> Client schickt Anfrage und wartet; bei Nachrichtenverlust kann nur wiederholt gesendet werden — das geht aber nur bei idempotenten Nachrichten. <b>Idempotent:</b> Eine idempotente Nachricht kann beliebig oft wiederholt werden, ohne Schaden anzurichten. <b>Verbindungsorientiert, verlässlich:</b> Vor der Anfrage wird eine Verbindung aufgebaut, der Server nutzt dieselbe Verbindung für die Antwort. Wichtige Implementierungen beider Typen: UDP und TCP.",
          tag: "wichtig",
          source: "03-ds-architektur-021.pdf, Folien 6-7"
        },
        {
          t: "Verteilung der Schichten auf Client und Server",
          b: "Einfachste Verteilung: Client-Knoten implementieren (Teile der) Benutzerschnittstelle, Server-Knoten den Rest (Business-Logik und Datenhaltung) — der Client ist ein „dummes“ Terminal. Weitere Möglichkeiten: gesamte Benutzerschnittstelle auf dem Client mit anwendungsspezifischem Protokoll; Teile der Anwendung auf dem Client (z. B. Formularprüfung); fast die gesamte Anwendung auf dem Client, nur Datenhaltung auf dem Server (ggf. mit Client-Cache). Thin vs. Fat Clients: Viel Client-Funktionalität ist administrativ ungünstig (viele Software-Versionen), aber für Office-Suites oder Multimedia sinnvoll; Browser-basierte Applikationen mildern das Versionsproblem.",
          source: "03-ds-architektur-021.pdf, Folien 8-11"
        },
        {
          t: "Physische 3-Schichten-Architektur",
          b: "Jede der drei Schichten läuft auf einem eigenen Knoten — Server treten dabei auch als Clients auf. Beispiele: Transaktions-Monitoring; Web-Applikationen mit Web-Server, Applikationsserver und Datenbank-Server.",
          tag: "beispiel",
          source: "03-ds-architektur-021.pdf, Folie 12"
        }
      ],
      questions: [
        {
          q: "Welche 4+1 Architectural Views werden unterschieden?",
          a: "Logical View (Endnutzer-Funktionalität), Development View (Entwicklersicht), Process View (Prozesse), Physical View (Verteilung/Deployment auf Hardware) und Scenario als fünfte Sicht (Abläufe und Nutzerinteraktion).",
          source: "03-ds-architektur.pdf, Folie 5"
        },
        {
          q: "Was beschreibt ein Architekturstil?",
          a: "Die enthaltenen Komponenten, die Verbindungen/Beziehungen zwischen ihnen, die Nachrichten und ausgetauschten Daten sowie Bedingungen/Invarianten über Struktur und Verhalten.",
          source: "03-ds-architektur.pdf, Folie 8"
        },
        {
          q: "Welche drei Kommunikationsparadigmen gibt es?",
          a: "Interprozess-Kommunikation (z. B. Sockets), Remote Invocation (Request-Reply, RPC, RMI — synchron nach dem Vorbild des Prozeduraufrufs) und indirekte Kommunikation (Gruppen, Topics, Queues — Sender und Empfänger entkoppelt).",
          source: "03-ds-architektur.pdf, Folie 12"
        },
        {
          q: "Warum skaliert die Client-Server-Architektur schlecht und was macht P2P anders?",
          a: "Die ganze Last betrifft einen zentralen Server. Bei Peer-to-Peer haben alle Prozesse die gleichen Verantwortlichkeiten — Peers sind Client und Server zugleich, sodass die Verfügbarkeit automatisch mit der Nachfrage wächst.",
          source: "03-ds-architektur.pdf, Folie 17"
        },
        {
          q: "Welche Deployment-Strategien nennen die Folien?",
          a: "Services auf mehreren Servern abbilden, Caching, mobiler Code und mobile Agenten.",
          source: "03-ds-architektur.pdf, Folie 18"
        },
        {
          q: "Wie ist die Schichtenarchitektur definiert?",
          a: "Komponenten sind übereinander geschichtet; eine Komponente in Schicht Lj ruft Komponenten tieferer Schichten Li (i < j) auf und erwartet eine Antwort. Aufwärts-Aufrufe gibt es nur in Ausnahmefällen.",
          source: "03-ds-architektur.pdf, Folie 26"
        },
        {
          q: "Aus welchen Schichten besteht die 3-Schichten-Architektur?",
          a: "Präsentationsschicht (Darstellung/Interaktion), Verarbeitungsschicht (Verarbeitung der Anforderungen und Daten) und Datenschicht (persistente Datenhaltung).",
          source: "03-ds-architektur.pdf, Folie 30"
        },
        {
          q: "Welche drei Grundprinzipien hat REST?",
          a: "1. Ressourcen werden durch einfache Namensschemata identifiziert. 2. Alle Dienste bieten die gleiche Schnittstelle mit den gleichen Operationen. 3. Zustandslose Ausführung — nach einer Operation werden alle Informationen über den Aufruf vergessen.",
          source: "03-ds-architektur.pdf, Folie 35"
        },
        {
          q: "Was ist das wesentliche Merkmal von Publish-Subscribe-Architekturen?",
          a: "Die referentielle Entkopplung der Prozesse — sie „kennen“ einander nicht; Funktionalität wird von der Koordination getrennt.",
          source: "03-ds-architektur.pdf, Folie 39"
        },
        {
          q: "Was bedeutet idempotent und warum ist das bei verbindungsloser Kommunikation wichtig?",
          a: "Eine idempotente Nachricht kann beliebig oft wiederholt werden, ohne Schaden anzurichten. Bei Nachrichtenverlust in verbindungsloser Kommunikation kann nur erneut gesendet werden — das ist nur bei idempotenten Nachrichten unproblematisch.",
          source: "03-ds-architektur-021.pdf, Folie 6"
        },
        {
          q: "Was beschreibt die Systemarchitektur?",
          a: "Die Verteilung der Software-Komponenten auf den Knoten — also das Deployment. Unterschieden werden zentralisierte und dezentralisierte Architekturen.",
          source: "03-ds-architektur-021.pdf, Folie 4"
        }
      ],
      flashcards: [
        {
          front: "4+1 Views",
          back: "Logical, Development, Process, Physical + Scenario",
          source: "03-ds-architektur.pdf, Folie 5"
        },
        {
          front: "Komponente",
          back: "Modulare Einheit mit definierten Schnittstellen — austauschbar, solange die Schnittstellen unverändert bleiben",
          source: "03-ds-architektur.pdf, Folie 8"
        },
        {
          front: "3 Kommunikationsparadigmen",
          back: "IPC, Remote Invocation, indirekte Kommunikation",
          source: "03-ds-architektur.pdf, Folie 12"
        },
        {
          front: "Formen indirekter Kommunikation",
          back: "Gruppen, Publish-Subscribe, Message Queues, Tuple Spaces, DSM",
          source: "03-ds-architektur.pdf, Folie 15"
        },
        {
          front: "3-Schichten-Architektur",
          back: "Präsentation — Verarbeitung — Daten",
          source: "03-ds-architektur.pdf, Folie 30"
        },
        {
          front: "REST: 3 Grundprinzipien",
          back: "Namensschema für Ressourcen, einheitliche Schnittstelle, zustandslose Ausführung",
          source: "03-ds-architektur.pdf, Folie 35"
        },
        {
          front: "Idempotente Nachricht",
          back: "Kann beliebig oft wiederholt werden, ohne Schaden anzurichten",
          source: "03-ds-architektur-021.pdf, Folie 6"
        },
        {
          front: "Server / Client (Definition)",
          back: "Server: Prozess, der einen Dienst über eine Schnittstelle anbietet; Client: Prozess, der ihn per Request/Reply nachfragt",
          source: "03-ds-architektur-021.pdf, Folie 5"
        }
      ]
    },
    {
      id: "http",
      title: "HTTP",
      icon: "📨",
      cards: [
        {
          t: "http",
          b: "Das Hypertext Transfer-Protokoll definiert die Art und Weise, wie Browser und andere Clients mit Webservern interagieren. Besondere Funktionen: <b>Request-Reply-Protokoll</b> (Client sendet Anfrage mit URL, erhält Inhalt oder Fehlermeldung), <b>asymmetrisch</b> (der Client ruft die Ressourcen ab), <b>zustandslos</b>, <b>Inhaltstypen</b> nach MIME-Typ, eine http-Anfrage pro Ressource, einfache Mechanismen zur Zugriffskontrolle. http ist das Protokoll des WWW und baut auf dem TCP/IP-Stack auf.",
          tag: "def",
          source: "03-ds-http.pdf, Folien 4-5"
        },
        {
          t: "Ressource, URI und URL",
          b: "Der Begriff <b>Ressource</b> ist eine Abstraktion über Dokumente, Bilder, Dienste usw., die auf einem Webserver verfügbar sind; Ressourcen können über URIs angesprochen werden. Eine <b>URI</b> ist ein Name, der eine Ressource identifiziert. Eine <b>URL</b> ist eine URI, aus der man den Ort der Ressource ablesen kann.",
          tag: "def",
          source: "03-ds-http.pdf, Folie 6"
        },
        {
          t: "Aufbau einer URL",
          b: "Syntax: <code>Protokoll://Hostname:Port/Pfad-und-Dateiname</code>. Vier Teile: <b>Protokoll</b> (z. B. HTTP, FTP, Telnet), <b>Hostname</b> (DNS-Domänenname oder IP-Adresse), <b>Port</b> (TCP-Portnummer, die der Server überwacht), <b>Pfad- und Dateiname</b> (Name und Speicherort der Ressource im Basisverzeichnis).",
          tag: "def",
          source: "03-ds-http.pdf, Folie 7"
        },
        {
          t: "Nachrichten: Aufbau",
          b: "Nachrichten können Anfragen oder Antworten sein und bestehen aus drei Teilen: einer Startzeile, einem Block von Headern und einem optionalen Textkörper. Anfragen und Antworten werden über einen vorhandenen TCP-Stream als Text (ASCII) gesendet. In der Startzeile einer Anfrage steht, was zu tun ist (Methodenname, Ressourcen-URL, http-Version); in der Startzeile einer Antwort steht, was passiert ist (http-Version, Statuscode, Textphrase).",
          tag: "def",
          source: "03-ds-http.pdf, Folien 8, 11-12"
        },
        {
          t: "http-Methoden",
          b: "<b>GET:</b> fordert die Ressource der URL an; verweist die URL auf ein Programm, wird es ausgeführt und die Ausgabe zurückgegeben. <b>HEAD:</b> identisch mit GET, gibt aber keine Daten zurück, sondern Informationen über die Daten (letzte Änderung, Größe usw.). <b>POST:</b> gibt die URL einer Ressource an, die mit der Datenlieferung in der Anfrage umgehen kann. <b>PUT:</b> fordert, dass die gelieferten Daten unter der angegebenen URL gespeichert werden. Andere: DELETE, OPTIONS, TRACE.",
          tag: "wichtig",
          source: "03-ds-http.pdf, Folie 13"
        },
        {
          t: "Request im Detail",
          b: "Die Request-Zeile besteht aus drei Komponenten: Methoden-Name, URI, http-Version — z. B. <code>GET /test.html HTTP/1.1</code>. Request-Header haben die Form von Namens-Wert-Paaren, z. B. <code>Host: www.xyz.com</code>, <code>Connection: Keep-Alive</code>, <code>Accept: image/gif, image/jpeg, */*</code>.",
          tag: "beispiel",
          source: "03-ds-http.pdf, Folien 16-17"
        },
        {
          t: "Response und Statuszeile",
          b: "Die Statuszeile besteht aus: <b>HTTP-Version</b> (HTTP/1.0 oder HTTP/1.1), <b>status-code</b> (dreistellige Zahl, die das Ergebnis widerspiegelt) und <b>reason-phrase</b> (kurze Erklärung). Häufige Statuscodes: „200 OK“, „404 Nicht gefunden“, „403 Verboten“, „500 Interner Serverfehler“.",
          tag: "wichtig",
          source: "03-ds-http.pdf, Folie 19"
        },
        {
          t: "Marshaling und MIME-Types",
          b: "Requests und Responses werden als ASCII-String übertragen; Ressourcen können als Byte-Sequenzen repräsentiert und komprimiert werden. Multipurpose Internet Mail Extensions (MIME)-Typen kennzeichnen die Inhalte: z. B. text/plain, text/html, image/gif, image/video.",
          tag: "def",
          source: "03-ds-http.pdf, Folie 23"
        }
      ],
      questions: [
        {
          q: "Welche besonderen Funktionen hat http?",
          a: "Request-Reply-Protokoll, asymmetrisch (Client ruft Ressourcen ab), zustandslos, Inhaltstypen nach MIME-Typ, eine Anfrage pro Ressource, einfache Zugriffskontrolle. Es baut auf dem TCP/IP-Stack auf.",
          source: "03-ds-http.pdf, Folien 4-5"
        },
        {
          q: "Was unterscheidet URI und URL?",
          a: "Eine URI ist ein Name, der eine Ressource identifiziert; eine URL ist eine URI, aus der man zusätzlich den Ort der Ressource ablesen kann.",
          source: "03-ds-http.pdf, Folie 6"
        },
        {
          q: "Aus welchen vier Teilen besteht eine URL?",
          a: "Protokoll, Hostname (DNS-Name oder IP), Port (TCP-Portnummer) sowie Pfad- und Dateiname der Ressource.",
          source: "03-ds-http.pdf, Folie 7"
        },
        {
          q: "Aus welchen drei Teilen besteht eine http-Nachricht?",
          a: "Startzeile, Block von Headern und optionaler Textkörper — gesendet als ASCII-Text über einen TCP-Stream.",
          source: "03-ds-http.pdf, Folien 8, 11"
        },
        {
          q: "Was unterscheidet GET und HEAD?",
          a: "HEAD ist identisch mit GET, gibt aber keine Daten zurück — nur Informationen über die Daten (z. B. letzte Änderung, Größe).",
          source: "03-ds-http.pdf, Folie 13"
        },
        {
          q: "Woraus besteht die Statuszeile einer Antwort?",
          a: "HTTP-Version, dreistelligem Statuscode und einer reason-phrase. Beispiele: 200 OK, 404 Not Found, 403 Forbidden, 500 Internal Server Error.",
          source: "03-ds-http.pdf, Folie 19"
        },
        {
          q: "Wozu dienen MIME-Types?",
          a: "Sie kennzeichnen die Inhaltstypen der übertragenen Ressourcen (z. B. text/plain, text/html, image/gif), damit Inhalte je nach Typ unterschiedlich behandelt werden können.",
          source: "03-ds-http.pdf, Folien 4, 23"
        }
      ],
      flashcards: [
        {
          front: "http (3 Kerneigenschaften)",
          back: "Request-Reply, asymmetrisch, zustandslos — Protokoll des WWW auf dem TCP/IP-Stack",
          source: "03-ds-http.pdf, Folien 4-5"
        },
        {
          front: "URL-Syntax",
          back: "Protokoll://Hostname:Port/Pfad-und-Dateiname",
          source: "03-ds-http.pdf, Folie 7"
        },
        {
          front: "Aufbau einer http-Nachricht",
          back: "Startzeile + Header-Block + optionaler Textkörper (ASCII über TCP)",
          source: "03-ds-http.pdf, Folien 8, 11"
        },
        {
          front: "GET / HEAD / POST / PUT",
          back: "GET: Ressource abrufen; HEAD: nur Metainfos; POST: Daten an Ressource liefern; PUT: Daten unter URL speichern",
          source: "03-ds-http.pdf, Folie 13"
        },
        {
          front: "Statuszeile",
          back: "HTTP-Version + Statuscode (3-stellig) + reason-phrase",
          source: "03-ds-http.pdf, Folie 19"
        },
        {
          front: "Häufige Statuscodes",
          back: "200 OK, 404 Not Found, 403 Forbidden, 500 Internal Server Error",
          source: "03-ds-http.pdf, Folie 19"
        }
      ]
    },
    {
      id: "servlets",
      title: "Servlets & Application Server",
      icon: "🧰",
      cards: [
        {
          t: "Server-Erweiterungen",
          b: "Zur Bereitstellung statischer Inhalte werden Standard-Webserver verwendet; Webserver-Erweiterungen dienen dem Erstellen dynamischer Inhalte. <b>CGI (Common Gateway Interface):</b> ursprünglich für den Zugriff auf andere Anwendungen vom Webserver; für jede Anfrage wird ein OS-Prozess erstellt, der normalerweise nicht mit dem Server interagieren kann. <b>Servlets:</b> generische Servererweiterungen auf Basis von Java-Klassen, die dynamisch geladen werden können und in der JVM des Servers laufen.",
          tag: "def",
          source: "05_ds-servlets.pdf, Folien 4-6"
        },
        {
          t: "Servlet",
          b: "Ein Servlet ist eine Java-Klasse, die zur Erweiterung der Funktionen von Webservern verwendet wird — für Anwendungen mit Anforderungs-Antwort-Programmiermodell. Vorteile: Portabilität, kein Betriebssystem-Overhead, voller Zugriff auf Java-APIs, Strong Typing. Servlet-Anfragen werden in einem separaten Thread verarbeitet; Servlets können eng mit dem Server interagieren. Hinweis: JSP ist heute veraltet und wird durch Java Server Faces (JSF) ersetzt.",
          tag: "def",
          source: "05_ds-servlets.pdf, Folien 7-9, 11"
        },
        {
          t: "Servlet-API",
          b: "Java bietet zwei Pakete: <code>javax.servlet</code> für generische protokollunabhängige Servlets und <code>javax.servlet.http</code> mit http-spezifischer Funktionalität. Jedes Servlet muss die Schnittstelle <code>Servlet</code> implementieren (definiert Lebenszyklusmethoden); die meisten erweitern <code>GenericServlet</code> oder <code>HttpServlet</code>. Ein generisches Servlet überschreibt <code>service()</code> (Parameter: Anforderungs- und Antwortobjekt); http-Servlets überschreiben <code>doGet()</code> und <code>doPost()</code> (die service-Methode nicht). Support-Klassen: <code>HttpServletRequest/Response</code>, <code>HttpSession</code> (Sitzungsverfolgung), <code>Cookie</code>.",
          tag: "def",
          source: "05_ds-servlets.pdf, Folien 11, 14-17"
        },
        {
          t: "GET und POST bei Servlets",
          b: "GET und POST sind die am häufigsten verwendeten http-Methoden; der ursprüngliche Unterschied ist ins Wanken geraten. GET-Anfragen haben auf vielen Plattformen eine Längenbeschränkung (240 Zeichen), POST kann große Datenmengen übertragen. Ein Servlet sollte für GET und POST das gleiche Verhalten bereitstellen — einfache Implementierung: POST-Anfragen an den GET-Handler weiterleiten. HEAD-Anfragen werden von der Standardimplementierung verarbeitet.",
          tag: "wichtig",
          source: "05_ds-servlets.pdf, Folien 13, 25-26"
        },
        {
          t: "Servlet-Lebenszyklus",
          b: "Der Lebenszyklus wird durch den Container gesteuert. Schritte bei einer Anfrage: 1. Wenn keine Instanz existiert, lädt der Webcontainer die Servlet-Klasse; 2. erstellt eine Instanz; 3. initialisiert sie durch Aufruf von <code>init</code>; 4. ruft die Service-Methode mit Anforderungs- und Antwortobjekten auf; 5. beim Entfernen finalisiert der Container das Servlet über <code>destroy</code>; 6. der Garbage Collector entfernt den Rest. Nach dem Laden sind Servlets multithreaded.",
          tag: "wichtig",
          source: "05_ds-servlets.pdf, Folien 29, 31"
        },
        {
          t: "Servlet-Container und web.xml",
          b: "Servlets laufen im Allgemeinen auf derselben JVM wie der Webserver in einem Betriebssystemprozess; sie können Daten im selben Prozess gemeinsam nutzen und sind durch die Mechanismen von Java geschützt. Im Bereitstellungsdeskriptor <code>web.xml</code> definiert <code>servlet</code> das zu ladende Servlet und <code>servlet-mapping</code> ordnet es einer URL zu.",
          tag: "def",
          source: "05_ds-servlets.pdf, Folien 32-33"
        },
        {
          t: "Informationen aus der Anfrage",
          b: "http-Servlets erhalten ein <code>HttpServletRequest</code>-Objekt mit Anforderungs-URL, Headern, Query-String usw. Anforderungspfad: Kontextpfad + Servlet-Pfad + Pfadinfo (Zugriff über <code>getContextPath</code>, <code>getServletPath</code>, <code>getPathInfo</code>). Query-Strings bestehen aus Parametern und Werten; einzelne Parameter werden mit <code>getParameter</code> abgerufen. Sie können explizit auf einer Webseite erscheinen oder beim Senden eines Formulars mit GET an die URL angehängt werden.",
          tag: "def",
          source: "05_ds-servlets.pdf, Folien 34-36"
        },
        {
          t: "Antworten konstruieren",
          b: "Alle Antworten implementieren <code>ServletResponse</code>: Für Zeichendaten den <code>PrintWriter</code> von <code>getWriter()</code> verwenden; für Binärdaten den <code>ServletOutputStream</code> von <code>getOutputStream()</code>; für gemischte Daten den OutputStream mit manueller Verwaltung. Inhaltstyp mit <code>setContentType()</code> (z. B. text/html) angeben; Pufferung mit <code>setBufferSize(int)</code> — standardmäßig werden Inhalte sofort an den Client gesendet.",
          tag: "def",
          source: "05_ds-servlets.pdf, Folien 38-39"
        },
        {
          t: "Kontext, Session und Cookies",
          b: "Der <b>ServletContext</b> bietet Zugriff auf Initialisierungsparameter, Ressourcen, objektwertige Attribute und Protokollierung. Eine <b>Benutzersitzung</b> enthält Informationen über den Benutzer über mehrere HTTP-Anfragen hinweg: <code>HttpSession session = request.getSession();</code>, Werte per <code>setAttribute/getAttribute</code> — Sitzungen funktionieren auf Serverclustern nicht gut. <b>Cookies</b> sind kleine Datenstücke auf dem Client-Rechner: dem Response-Objekt hinzufügen (<code>response.addCookie(cookie)</code>), vom Request-Objekt abrufen (<code>request.getCookies()</code>); die Ablaufzeit kann bei der Erstellung festgelegt werden.",
          tag: "def",
          source: "05_ds-servlets.pdf, Folien 41-44"
        },
        {
          t: "Application Server und Glassfish",
          b: "Ein Application Server ist ein Server, auf dem Applikationen zum Laufen gebracht werden können — unabhängig von deren Funktionalität. Er stellt Infrastrukturmerkmale wie Clustering, Fail-Over und Load Balancing bereit; ein Application-Server-Framework stellt die APIs bereit. So werden Entwickler von Infrastruktur-Aspekten entlastet. Glassfish ist ein Application Server; jede Glassfish-Instanz läuft in einer JVM, neben den Application-Containern gibt es ein Administrations-Modul.",
          tag: "def",
          source: "04-ds-glassfish.pdf, Folien 9, 11"
        },
        {
          t: "Glassfish: Jakarta-EE-Container",
          b: "Die APIs werden durch Jakarta EE definiert. Man spricht von logischen Containern, in die funktionstragende Applikationskomponenten eingefügt werden: <b>EJB-Container</b> (Enterprise Java Beans als Komponenten), <b>Web-Container</b> (Jakarta-Servlets, Jakarta Server Pages) und <b>JMS-Provider</b> (Java Messaging Service).",
          tag: "def",
          source: "04-ds-glassfish.pdf, Folie 10"
        }
      ],
      questions: [
        {
          q: "Was ist ein Servlet und wo läuft es?",
          a: "Eine Java-Klasse zur Erweiterung von Webservern (Anforderungs-Antwort-Modell). Es wird dynamisch geladen und in der JVM des Servers ausgeführt; Anfragen werden in separaten Threads verarbeitet.",
          source: "05_ds-servlets.pdf, Folien 6-7, 11"
        },
        {
          q: "Welche Vorteile haben Servlets gegenüber CGI?",
          a: "Bei CGI wird für jede Anfrage ein OS-Prozess erstellt, der kaum mit dem Server interagieren kann. Servlets: Portabilität, kein Betriebssystem-Overhead, voller Zugriff auf Java-APIs, Strong Typing, enge Interaktion mit dem Server.",
          source: "05_ds-servlets.pdf, Folien 5, 7-8"
        },
        {
          q: "Welche Methoden überschreibt ein http-Servlet üblicherweise?",
          a: "doGet() und doPost() — die service-Methode wird nicht überschrieben. Zusätzlich können doPut() und doDelete() überschrieben werden; für HEAD, TRACE und OPTIONS gibt es Standardimplementierungen.",
          source: "05_ds-servlets.pdf, Folie 16"
        },
        {
          q: "Beschreiben Sie den Servlet-Lebenszyklus.",
          a: "Der Container lädt bei Bedarf die Servlet-Klasse, erstellt eine Instanz, initialisiert sie mit init, ruft für Anfragen die Service-Methode auf, finalisiert beim Entfernen mit destroy — danach räumt der Garbage Collector auf. Nach dem Laden sind Servlets multithreaded.",
          source: "05_ds-servlets.pdf, Folien 29, 31"
        },
        {
          q: "Wozu dienen servlet und servlet-mapping in der web.xml?",
          a: "servlet definiert das zu ladende Servlet, servlet-mapping ordnet das Servlet einer URL zu.",
          source: "05_ds-servlets.pdf, Folie 33"
        },
        {
          q: "Wie werden Sitzungen in Servlets verwaltet und was ist die Einschränkung?",
          a: "Über HttpSession (request.getSession()), Werte per setAttribute/getAttribute. Einschränkung: Sitzungen funktionieren auf Serverclustern nicht gut.",
          source: "05_ds-servlets.pdf, Folie 42"
        },
        {
          q: "Was ist ein Application Server?",
          a: "Ein Server, auf dem Applikationen zum Laufen gebracht werden können — er stellt Infrastrukturmerkmale wie Clustering, Fail-Over und Load Balancing bereit und entlastet Entwickler von Infrastruktur-Aspekten.",
          source: "04-ds-glassfish.pdf, Folie 9"
        },
        {
          q: "Welche logischen Container definiert Jakarta EE in Glassfish?",
          a: "EJB-Container (Enterprise Java Beans), Web-Container (Jakarta-Servlets, Jakarta Server Pages) und JMS-Provider (Java Messaging Service).",
          source: "04-ds-glassfish.pdf, Folie 10"
        }
      ],
      flashcards: [
        {
          front: "Servlet",
          back: "Java-Klasse zur Webserver-Erweiterung, läuft in der JVM des Servers, Anfragen in separaten Threads",
          source: "05_ds-servlets.pdf, Folien 6-7, 11"
        },
        {
          front: "CGI-Nachteil",
          back: "Für jede Anfrage wird ein eigener OS-Prozess erstellt, der kaum mit dem Server interagieren kann",
          source: "05_ds-servlets.pdf, Folie 5"
        },
        {
          front: "Servlet-Lifecycle-Methoden",
          back: "init → service (doGet/doPost) → destroy",
          source: "05_ds-servlets.pdf, Folie 31"
        },
        {
          front: "web.xml",
          back: "Bereitstellungsdeskriptor: servlet definiert das Servlet, servlet-mapping ordnet es einer URL zu",
          source: "05_ds-servlets.pdf, Folie 33"
        },
        {
          front: "HttpSession",
          back: "Benutzerinformationen über mehrere HTTP-Anfragen hinweg; funktioniert auf Serverclustern nicht gut",
          source: "05_ds-servlets.pdf, Folie 42"
        },
        {
          front: "Cookie",
          back: "Kleines Datenstück auf dem Client; addCookie() am Response, getCookies() am Request",
          source: "05_ds-servlets.pdf, Folien 43-44"
        },
        {
          front: "Application Server",
          back: "Bringt Applikationen zum Laufen und liefert Infrastruktur: Clustering, Fail-Over, Load Balancing",
          source: "04-ds-glassfish.pdf, Folie 9"
        },
        {
          front: "3 Jakarta-EE-Container in Glassfish",
          back: "EJB-Container, Web-Container, JMS-Provider",
          source: "04-ds-glassfish.pdf, Folie 10"
        }
      ]
    },
    {
      id: "jms",
      title: "Messaging & JMS",
      icon: "✉️",
      cards: [
        {
          t: "Messaging und MOM",
          b: "Beim Messaging geht es darum, dass die Softwarekomponenten einer Unternehmensarchitektur Daten miteinander austauschen können — in der Regel ermöglicht durch eine Message-oriented Middleware (MOM). Eine Nachricht ist ein in sich abgeschlossenes Paket von Daten; die MOM stellt sicher, dass die Daten über das Netz verteilt werden. Weitere Features: Fault Tolerance, Load Balancing, Skalierbarkeit, Transaktionen.",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folie 4"
        },
        {
          t: "Nachteile von Remote-Aufrufen (RMI)",
          b: "<b>Synchrones Verhalten:</b> Ein Remote-Aufruf führt zu blockierender Wartezeit, bis der Server fertig ist. <b>Geringe Entkopplung:</b> Der Client benötigt Informationen über die Server, die er nutzt. <b>Zuverlässigkeit:</b> Der Server muss beim Aufruf betriebsbereit sein. <b>Nur ein Sender und Empfänger:</b> Ein einzelner Client interagiert mit einem einzelnen Server.",
          tag: "wichtig",
          source: "04_vvs-jms-intro.pdf, Folie 5"
        },
        {
          t: "Indirektion",
          b: "„Fundamentaler Grundsatz“ des Software-Engineerings (David Wheeler): Alle Probleme in der Informatik können durch eine weitere Ebene der Indirektion gelöst werden. Das Problem der engen Kopplung wird durch die Einführung einer weiteren Ebene der Indirektion — der Messaging-Middleware — gelöst. Sie kann mit mehreren Produzenten und Konsumenten kommunizieren; asynchrone Nachrichtenverarbeitung ist möglich.",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folien 6-7"
        },
        {
          t: "Vorteile des Messagings",
          b: "<b>Blockierungsfreie Anfrageverarbeitung:</b> asynchrone Nachrichtenverarbeitung. <b>Entkopplung:</b> Der Sender muss den Empfänger nicht kennen. <b>Zuverlässigkeit:</b> Nachrichten werden auch zugestellt, wenn der Empfänger vorübergehend nicht erreichbar ist. <b>Mehrere Sender und Empfänger:</b> Broadcasting- und Routing-Mechanismen ermöglichen multilaterale Kommunikation. Messaging reduziert Engpässe (asynchrone Kommunikation) und erhöht Skalierbarkeit (mehrere Listener, mehrere Warteschlangen).",
          tag: "wichtig",
          source: "04_vvs-jms-intro.pdf, Folien 8, 14-15"
        },
        {
          t: "Lose gekoppelte Kommunikation",
          b: "Sender und Empfänger kommunizieren über einen Kommunikationsagenten bzw. ein Kommunikationsmedium — sie müssen sich nicht kennen. Sie müssen lediglich das Nachrichtenformat und das zu verwendende Ziel kennen. Im Gegensatz dazu ist RMI eng gekoppelt: Eine Anwendung muss die Methode der Remote-Anwendung kennen. Anwendungsfälle: Kommunikation ohne Schnittstellen-Informationen, ohne gleichzeitige Ausführung und ohne auf Antworten warten zu müssen.",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folien 11-12"
        },
        {
          t: "JMS API",
          b: "Die Java JMS API definiert eine Reihe von Schnittstellen, die es Java-Programmen ermöglichen, mit anderen Messaging-Implementierungen zu kommunizieren. Ziele: Minimieren der architektonischen Konzepte, Portabilität zwischen Messaging-Anbietern. JMS ist der Standard, hinter dem sich verschiedene Implementierungen (Provider) verbergen können — das sichert Kompatibilität. JMS ist vollständig in Jakarta EE integriert: Anwendungsclients, EJBs und Webkomponenten können Nachrichten senden oder synchron empfangen; Message-Driven Beans konsumieren asynchron; Sende- und Empfangsvorgänge können Teil einer JTA-Transaktion sein.",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folien 10, 18-20"
        },
        {
          t: "Komponenten der JMS-Architektur",
          b: "<b>JMS Provider:</b> ein Nachrichtensystem, das die JMS-Schnittstellen implementiert und Verwaltungsfunktionen bereitstellt. <b>JMS-Clients:</b> Java-Programme oder -Komponenten, die Nachrichten erzeugen und konsumieren. <b>Messages:</b> die Objekte, die Informationen zwischen JMS-Clients kommunizieren. <b>Verwaltete Objekte:</b> für Clients konfigurierte JMS-Objekte — die beiden Arten sind Ziele (Destinations) und Verbindungsfabriken (ConnectionFactorys).",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folie 21"
        },
        {
          t: "Messaging-Stile: Point-to-Point",
          b: "Basiert auf Nachrichtenwarteschlangen, Sendern und Empfängern. Jede Nachricht ist an eine bestimmte Warteschlange adressiert; empfangende Clients extrahieren Nachrichten aus den Warteschlangen. Queues behalten alle Nachrichten, bis sie verbraucht sind oder ablaufen. Jede Nachricht hat nur einen Empfänger; der Empfänger kann die Nachricht abrufen, unabhängig davon, ob er lief, als sie gesendet wurde.",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folien 23-24"
        },
        {
          t: "Messaging-Stile: Publish/Subscribe",
          b: "Clients richten Nachrichten an ein Topic, das wie ein Schwarzes Brett funktioniert; Herausgeber und Abonnenten können dynamisch veröffentlichen oder abonnieren. Nachrichten werden zu den Verbrauchern gepusht (kein Polling); jede Nachricht geht an alle registrierten Verbraucher (je ein Exemplar). Produzenten und Konsumenten sind maximal entkoppelt — aber ein Konsument muss aktiv sein, um eine Nachricht zu konsumieren. Derselbe Code kann je nach Verwaltungsobjekt (Queue oder Topic) beide Stile unterstützen.",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folien 23, 25-26"
        },
        {
          t: "Message Consumption: synchron vs. asynchron",
          b: "<b>Synchron:</b> Der Verbraucher ruft die Nachricht explizit mit <code>receive()</code> ab — die Methode kann blockieren, bis eine Nachricht eintrifft, oder bei Zeitüberschreitung abbrechen. <b>Asynchron:</b> Ein Client registriert einen Message-Listener; wenn eine Nachricht ankommt, ruft der JMS-Provider dessen <code>onMessage</code>-Methode auf. In einer Java-EE-Anwendung dient eine Message-Driven Bean als Nachrichten-Listener.",
          tag: "wichtig",
          source: "04_vvs-jms-intro.pdf, Folie 27"
        },
        {
          t: "JMS-Programmierschritte",
          b: "1. ConnectionFactory des JMS-Anbieters suchen (serverseitige Ressource, per JNDI). 2. JMS-Verbindung mit der ConnectionFactory erstellen. 3. JMS-Sitzung mithilfe der Verbindung erstellen (zum Senden/Empfangen und für Transaktionen). 4. Mit JNDI das richtige JMS-Ziel suchen. 5. Producer oder Consumer erstellen. 6. Nachricht senden oder empfangen. Bausteine: verwaltete Objekte (ConnectionFactorys, Destinations), Connections, Sessions, JMSContext (vereint Verbindung und Sitzung), Produzenten, Konsumenten, Nachrichten.",
          tag: "wichtig",
          source: "04_vvs-jms-intro.pdf, Folien 30, 32"
        },
        {
          t: "Administrierte Objekte",
          b: "Destinations und ConnectionFactorys werden üblicherweise administrativ und nicht programmgesteuert verwaltet — die zugrunde liegende Technologie unterscheidet sich je nach Implementierung erheblich. JMS-Clients greifen über portable Schnittstellen auf sie zu; ein Administrator konfiguriert sie in einem JNDI-Namespace, Clients nutzen Ressourceninjektion. Erstellung z. B. über den Glassfish-Befehl <code>asadmin create-jms-resource</code>, die Administrationskonsole, den Netbeans-Assistenten oder Annotationen.",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folie 33"
        },
        {
          t: "Message Listeners und Message-Driven Beans",
          b: "Ein Message-Listener ist ein Objekt, das als asynchroner Ereignishandler für Nachrichten fungiert: Es implementiert das Interface <code>MessageListener</code> mit der Methode <code>onMessage</code>, in der die Aktionen beim Nachrichteneingang definiert werden. Registrierung: <code>consumer.setMessageListener(myListener)</code>. Im Jakarta-EE-Web- oder EJB-Container übernehmen Message-Driven Beans die asynchrone Nachrichtenzustellung — auch sie implementieren MessageListener mit onMessage. Eigenschaften von MDBs: vom Container erstellt und mit Annotationen versehen; mehrere Instanzen können Nachrichten gleichzeitig verarbeiten; kein direkter Client-Zugriff; ausgelöst durch Nachrichten über die JMS-API.",
          tag: "def",
          source: "04_vvs-jms-intro.pdf, Folien 34-35, 37-39"
        }
      ],
      questions: [
        {
          q: "Was ist Message-oriented Middleware (MOM)?",
          a: "Middleware, die den Datenaustausch zwischen Softwarekomponenten über Nachrichten ermöglicht. Sie stellt die Verteilung der Daten über das Netz sicher und bietet Features wie Fault Tolerance, Load Balancing, Skalierbarkeit und Transaktionen.",
          source: "04_vvs-jms-intro.pdf, Folie 4"
        },
        {
          q: "Welche Nachteile von Remote-Aufrufen motivieren das Messaging?",
          a: "Synchrones (blockierendes) Verhalten, geringe Entkopplung (Client braucht Server-Informationen), Zuverlässigkeit (Server muss betriebsbereit sein) und nur ein Sender/Empfänger pro Interaktion.",
          source: "04_vvs-jms-intro.pdf, Folie 5"
        },
        {
          q: "Welche Vorteile bietet Messaging?",
          a: "Blockierungsfreie (asynchrone) Anfrageverarbeitung, Entkopplung (Sender kennt Empfänger nicht), Zuverlässigkeit (Zustellung auch bei vorübergehend nicht erreichbarem Empfänger) und mehrere Sender/Empfänger durch Broadcasting- und Routing-Mechanismen.",
          source: "04_vvs-jms-intro.pdf, Folie 8"
        },
        {
          q: "Was unterscheidet Point-to-Point und Publish/Subscribe?",
          a: "Point-to-Point: Queues, jede Nachricht hat genau einen Empfänger, Nachrichten bleiben bis zum Verbrauch/Ablauf. Pub/Sub: Topics wie ein Schwarzes Brett, jede Nachricht wird an alle registrierten Abonnenten gepusht; ein Konsument muss aktiv sein.",
          source: "04_vvs-jms-intro.pdf, Folien 24-26"
        },
        {
          q: "Wie funktioniert synchroner vs. asynchroner Nachrichtenkonsum in JMS?",
          a: "Synchron: expliziter Abruf mit receive() (blockierend oder mit Timeout). Asynchron: Message-Listener registrieren — der Provider ruft bei Nachrichteneingang onMessage auf; in Java EE übernimmt das eine Message-Driven Bean.",
          source: "04_vvs-jms-intro.pdf, Folie 27"
        },
        {
          q: "Welche Komponenten hat die JMS-Architektur?",
          a: "JMS Provider (implementiert die Schnittstellen), JMS-Clients (erzeugen/konsumieren Nachrichten), Messages und verwaltete Objekte (Destinations und ConnectionFactorys).",
          source: "04_vvs-jms-intro.pdf, Folie 21"
        },
        {
          q: "Welche Schritte umfasst das JMS-Programmiermodell?",
          a: "ConnectionFactory per JNDI suchen → Connection erstellen → Session erstellen → Destination per JNDI suchen → Producer/Consumer erstellen → Nachricht senden bzw. empfangen.",
          source: "04_vvs-jms-intro.pdf, Folie 30"
        },
        {
          q: "Welche Eigenschaften haben Message-Driven Beans?",
          a: "Vom Container erstellt und annotiert; mehrere Instanzen können Nachrichten gleichzeitig verarbeiten; kein direkter Client-Zugriff; sie werden durch Nachrichten über die JMS-API ausgelöst und implementieren MessageListener mit onMessage.",
          source: "04_vvs-jms-intro.pdf, Folien 38-39"
        }
      ],
      flashcards: [
        {
          front: "MOM",
          back: "Message-oriented Middleware — verteilt in sich abgeschlossene Datenpakete (Nachrichten) über das Netz",
          source: "04_vvs-jms-intro.pdf, Folie 4"
        },
        {
          front: "Wheeler-Grundsatz",
          back: "Alle Probleme der Informatik können durch eine weitere Ebene der Indirektion gelöst werden",
          source: "04_vvs-jms-intro.pdf, Folie 7"
        },
        {
          front: "4 Vorteile des Messagings",
          back: "Asynchron/blockierungsfrei, Entkopplung, Zuverlässigkeit, mehrere Sender und Empfänger",
          source: "04_vvs-jms-intro.pdf, Folie 8"
        },
        {
          front: "Point-to-Point",
          back: "Queue, genau ein Empfänger pro Nachricht, Nachrichten bleiben bis Verbrauch/Ablauf",
          source: "04_vvs-jms-intro.pdf, Folie 24"
        },
        {
          front: "Publish/Subscribe",
          back: "Topic als Schwarzes Brett, Push an alle Abonnenten, maximale Entkopplung — Konsument muss aktiv sein",
          source: "04_vvs-jms-intro.pdf, Folien 25-26"
        },
        {
          front: "2 verwaltete JMS-Objekte",
          back: "Destinations (Ziele) und ConnectionFactorys — konfiguriert im JNDI-Namespace",
          source: "04_vvs-jms-intro.pdf, Folien 21, 33"
        },
        {
          front: "MessageListener",
          back: "Interface mit onMessage — asynchroner Ereignishandler; in Java EE als Message-Driven Bean",
          source: "04_vvs-jms-intro.pdf, Folien 34-35"
        },
        {
          front: "receive()",
          back: "Synchroner Nachrichtenabruf — blockiert bis zum Eintreffen oder Timeout",
          source: "04_vvs-jms-intro.pdf, Folie 27"
        }
      ]
    },
    {
      id: "rmi",
      title: "RPC & RMI",
      icon: "📞",
      cards: [
        {
          t: "Request-Reply-Protokolle",
          b: "Häufig verwendetes Protokoll in Client-Server-Systemen; beruht auf TCP oder UDP. Die Middleware-Schicht liegt zwischen der Netzwerk- und der Anwendungsebene.",
          tag: "def",
          source: "07_ds-java-rmi.pdf, Folien 5-6"
        },
        {
          t: "Remote Procedure Call (RPC)",
          b: "Überträgt den Funktionsaufruf auf Verteilte Systeme. Stubs und Skeletons enthalten Routinen für die Kommunikation und Synchronisierung. <b>Marshaling:</b> Transformation der Daten in verschiedene Zielformate. Drei Aspekte: <b>Schnittstellen</b> (beschreiben die aufrufbaren Operationen; Programmierer stützen sich auf die Schnittstelle, nicht die Implementierung), <b>Aufruf-Semantik</b> (Retransmission, Duplikatbehandlung, Ergebnis-Historie) und <b>Transparenz</b> (Orts- und Zugriffstransparenz, allerdings größere Latenzen bei Remote Calls).",
          tag: "def",
          source: "07_ds-java-rmi.pdf, Folien 7-8"
        },
        {
          t: "RMI",
          b: "RMI erweitert RPC um das Konzept der Objekte. Gemeinsamkeiten mit RPC: Verwendung von Schnittstellen, basiert auf Request-Reply-Protokollen, ähnliche Transparenz. Unterschiede: Objektorientierte Konzepte stehen zur Verfügung (Klassen, Objekte, Vererbung); Objekt-Identität — insbesondere ist call-by-reference möglich.",
          tag: "def",
          source: "07_ds-java-rmi.pdf, Folie 15"
        },
        {
          t: "Verteilte Objekte und Remote Interfaces",
          b: "Lokale und entfernte Objekte können Aufrufe empfangen; entfernte Objekte werden über Remote Object References adressiert und besitzen Remote Interfaces. Objekte von einem anderen Knoten können nur Methoden aus dem Remote-Interface aufrufen. Spezielle Interface-Beschreibungssprachen: CORBA-IDL, SOAP-XML — in Java durch Interfaces abgebildet.",
          tag: "def",
          source: "07_ds-java-rmi.pdf, Folien 16-17"
        },
        {
          t: "RMI-Architektur: Schichten",
          b: "<b>Anwendungsschicht:</b> Client und Server kommunizieren im Hinblick auf den Service. <b>Stub-&-Skeleton-Schicht:</b> realisiert die Schnittstelle des serverseitigen Objekts auf beiden Seiten — der Client-Stub erledigt das Marshalling und sendet die Anfrage an die unteren Schichten. <b>Remote Reference Layer:</b> (in JVM integriert) lokalisiert anhand von Objektreferenzen Serverobjekte und leitet Aufrufe weiter. <b>Transport Layer:</b> stellt basierend auf TCP-Verbindungen die grundlegende Konnektivität bereit.",
          tag: "wichtig",
          source: "07_ds-java-rmi.pdf, Folien 18-20"
        },
        {
          t: "Typische Aufgaben der RMI-Infrastruktur",
          b: "Lokalisierung von verteilten Objekten (Referenzen auf serverseitige Objekte können von der RMI-Registry erfragt werden); Kommunikation mit den Verteilten Objekten (für den Programmierer sieht der Methodenaufruf wie ein lokaler Aufruf aus); dynamisches Nachladen von Code für Objekte, die über RMI versendet wurden (z. B. als Parameter). Dynamisches Laden ermöglicht hohe Flexibilität: Der JVM unbekannte Klassen können lokal oder remote nachgeladen werden.",
          tag: "def",
          source: "07_ds-java-rmi.pdf, Folien 21-22"
        },
        {
          t: "Remote Object und Remote Interface in Java",
          b: "Eine verteilte RMI-Applikation besteht aus Interfaces und Klassen: Interfaces deklarieren Methoden, Klassen implementieren sie. Ein Remote Object implementiert ein Remote-Interface mit zwei Eigenschaften: Das Interface wird von <code>java.rmi.Remote</code> abgeleitet, und jede Methode deklariert <code>java.rmi.RemoteException</code> (oder eine Oberklasse) im throws-Statement. RMI ist Java-spezifisch — die Schnittstelle kann in Java definiert werden (geringere Komplexität als CORBA). Call-by-Value: Beliebig komplexe Objektstrukturen können serialisiert, übertragen und auf der Empfängerseite wiederhergestellt werden.",
          tag: "wichtig",
          source: "07_ds-java-rmi.pdf, Folien 24, 26-27"
        },
        {
          t: "Entwurf und Implementierung",
          b: "1. Definition der Remote Interfaces: Welche Methoden sollen remote aufgerufen werden, welche Objekte übergeben werden? 2. Implementierung der Remote Objects (Klasse implementiert mindestens ein Remote Interface, definiert einen Konstruktor). 3. Implementierung der Clients (Remote-Referenz erzeugen, Methode aufrufen).",
          tag: "wichtig",
          source: "07_ds-java-rmi.pdf, Folien 25, 28, 30"
        },
        {
          t: "Server und RMI-Registry",
          b: "Die Server-Klasse erzeugt eine Instanz des Remote-Objekts und bindet sie an einen Namen in der rmiregistry. Nach der Registrierung können Remote-Referenzen erzeugt und Methoden remote aufgerufen werden. Zur Durchführung eines entfernten Aufrufs wird eine Objektreferenz benötigt: Die Referenz (URL) enthält den Rechnernamen, die Portnummer des Servers und einen Objektidentifikator. Die RMI-Registry steht als Namensdienst zur Verfügung.",
          tag: "def",
          source: "07_ds-java-rmi.pdf, Folien 29, 31"
        }
      ],
      questions: [
        {
          q: "Was leisten Stubs und Skeletons beim RPC?",
          a: "Sie enthalten Routinen für die Kommunikation und Synchronisierung; das Marshaling transformiert die Daten in die Zielformate.",
          source: "07_ds-java-rmi.pdf, Folie 7"
        },
        {
          q: "Welche drei Aspekte des RPC werden betrachtet?",
          a: "Schnittstellen (beschreiben aufrufbare Operationen), Aufruf-Semantik (Retransmission, Duplikatbehandlung, Ergebnis-Historie) und Transparenz (Orts-/Zugriffstransparenz, aber größere Latenzen).",
          source: "07_ds-java-rmi.pdf, Folie 8"
        },
        {
          q: "Was unterscheidet RMI von RPC?",
          a: "RMI erweitert RPC um Objekte: objektorientierte Konzepte (Klassen, Objekte, Vererbung) und Objekt-Identität — insbesondere ist call-by-reference möglich. Gemeinsam: Schnittstellen, Request-Reply-Basis, ähnliche Transparenz.",
          source: "07_ds-java-rmi.pdf, Folie 15"
        },
        {
          q: "Aus welchen Schichten besteht die RMI-Architektur?",
          a: "Anwendungsschicht, Stub-&-Skeleton-Schicht (Marshalling), Remote Reference Layer (lokalisiert Serverobjekte, leitet Aufrufe weiter) und Transport Layer (TCP-basierte Konnektivität).",
          source: "07_ds-java-rmi.pdf, Folie 20"
        },
        {
          q: "Wodurch ist ein Remote-Interface in Java charakterisiert?",
          a: "Es wird vom Interface java.rmi.Remote abgeleitet und jede Methode deklariert java.rmi.RemoteException im throws-Statement.",
          source: "07_ds-java-rmi.pdf, Folie 24"
        },
        {
          q: "Welche Rolle spielt die RMI-Registry?",
          a: "Sie ist der Namensdienst: Der Server bindet Instanzen der Remote-Objekte an Namen; Clients erfragen Referenzen. Die Referenz enthält Rechnername, Portnummer und Objektidentifikator.",
          source: "07_ds-java-rmi.pdf, Folien 29, 31"
        },
        {
          q: "Was bedeutet Call-by-Value-Unterstützung bei RMI?",
          a: "Beliebig komplexe Objektstrukturen können serialisiert, über das Netz übertragen und auf der Empfängerseite wiederhergestellt werden.",
          source: "07_ds-java-rmi.pdf, Folie 26"
        }
      ],
      flashcards: [
        {
          front: "RPC",
          back: "Überträgt den Funktionsaufruf auf Verteilte Systeme — Stubs/Skeletons + Marshaling",
          source: "07_ds-java-rmi.pdf, Folie 7"
        },
        {
          front: "Marshaling",
          back: "Transformation der Daten in verschiedene Zielformate",
          source: "07_ds-java-rmi.pdf, Folie 7"
        },
        {
          front: "RMI vs. RPC",
          back: "RMI = RPC + Objekte: Klassen, Vererbung, Objekt-Identität, call-by-reference möglich",
          source: "07_ds-java-rmi.pdf, Folie 15"
        },
        {
          front: "4 RMI-Schichten",
          back: "Anwendung → Stub & Skeleton → Remote Reference → Transport (TCP)",
          source: "07_ds-java-rmi.pdf, Folie 20"
        },
        {
          front: "Remote-Interface (Java): 2 Eigenschaften",
          back: "Erbt von java.rmi.Remote; jede Methode deklariert RemoteException",
          source: "07_ds-java-rmi.pdf, Folie 24"
        },
        {
          front: "RMI-Registry",
          back: "Namensdienst: Server binden Remote-Objekte an Namen, Clients holen Referenzen",
          source: "07_ds-java-rmi.pdf, Folien 29, 31"
        },
        {
          front: "Inhalt einer Remote-Referenz",
          back: "Rechnername, Portnummer des Servers, Objektidentifikator",
          source: "07_ds-java-rmi.pdf, Folie 31"
        }
      ]
    },
    {
      id: "komponenten",
      title: "Komponenten & EJB",
      icon: "🫘",
      cards: [
        {
          t: "Komponenten (Szyperski)",
          b: "Eine Softwarekomponente ist eine Kompositionseinheit mit vertraglich spezifizierten Schnittstellen und nur expliziten Kontextabhängigkeiten. Komponenten geben die Schnittstellen an, die sie bieten und die sie benötigen — die Beziehungen werden oft als Vertrag bezeichnet. Dazu kommen: strukturierte und transparente Kommunikation mit der Middleware, Nutzung von Infrastrukturdiensten, Unterstützung beim Deployment. Verteilte Objekte können als Vorläufer von Komponenten betrachtet werden.",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 4, 6"
        },
        {
          t: "Komponenten-basierte Programmierung",
          b: "Befasst sich mit der Entwicklung von Komponenten und deren Komposition. Ziel ist ein Stil der Software-Entwicklung ähnlich der Hardware-Entwicklung: Komponenten von der Stange verwenden und zusammensetzen — ein Übergang von der Software-Entwicklung zur Software-Zusammenstellung. Das unterstützt Drittanbieter-Komponenten und erleichtert die Anpassung von Systemkonfigurationen zur Laufzeit durch Austausch passgenauer Komponenten.",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folie 9"
        },
        {
          t: "Kernanliegen vs. Plumbing",
          b: "Der Fokus der Softwareentwicklung sollte auf den Kernanliegen der Anwendung liegen — allgemein als Geschäftslogik bezeichnet. Daneben gibt es das „Plumbing“: Auf Komponenten muss über Schnittstellen zugegriffen werden, für unterschiedliche Datenformate müssen Adapter erstellt werden. Anwendungen bestehen aus funktionalen, wiederverwendbaren Komponenten mit generischen Schnittstellen.",
          tag: "wichtig",
          source: "07_ds-concept-components.pdf, Folien 11-13"
        },
        {
          t: "Container",
          b: "Ein Container ist ein Host, der Dienste für Gastanwendungen bereitstellt. Er stellt nicht zum Kerngeschäft gehörende Funktionen entkoppelt bereit; die Anwendung kann sich auf generische Dienste verlassen. Container sind die Schnittstelle zwischen einer Komponente und der plattformspezifischen Low-Level-Funktionalität: Komponenten müssen in ein Java-EE-Modul assembliert und im Container bereitgestellt werden. Container verwalten Lebenszyklus, Datenpersistenz, Ressourcenpooling, Transaktionen, Sicherheit und Low-Level-Kommunikation (transparenter Remote-Zugriff auf EJBs). Die EJB-Spezifikation definiert die geforderten Fähigkeiten.",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 7, 15-16"
        },
        {
          t: "Container Services",
          b: "Registrierung, Dependency Injection und Suche; Transaction Management (JTA — Komponenten sind automatisch transaktional); Pooling (Instanzen werden von Clients gemeinsam genutzt und nach Gebrauch in den Pool zurückgegeben); Sicherheit per Konfiguration; Thread-Sicherheit und Nebenläufigkeit; Lifecycle-Management; Fernzugriff (Beans werden zu netzwerkfähigen verteilten Komponenten); Unterstützung für gleichzeitige Anfragen; Clustering und Lastausgleich.",
          tag: "wichtig",
          source: "07_ds-concept-components.pdf, Folien 17-18"
        },
        {
          t: "Vereinfachtes Entwicklungs-Modell",
          b: "XML und Annotationen (Deployment Descriptor vs. Annotations), Dependency Injection (EJBs werden nach der Instanziierung vom Container initialisiert), Interceptors und Callback-Methoden, POJO-Implementierung, intelligente Nutzung von Default-Werten. Annotationen sind Metadaten, die das Verhalten der POJOs im Container definieren (z. B. <code>@Stateful</code> oder <code>@Stateless</code>).",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 19-20"
        },
        {
          t: "Dependency Injection und Interception",
          b: "<b>Dependency Injection:</b> Der Container kümmert sich um die Beziehung einer Komponente zu ihren Abhängigkeiten — beschrieben über Annotationen (z. B. <code>@EJB MyBean m;</code>): Das Attribut wird deklariert, der Container fügt zur Laufzeit die richtige Abhängigkeit ein. <b>Interception:</b> Mechanismus, das Default-Verhalten eines Containers durch eigene Methoden zu verändern — bei Methodenaufrufen (<code>@AroundInvoke</code>) und Lifecycle-Events (<code>@PostConstruct</code>, <code>@PreDestroy</code>).",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 21-22"
        },
        {
          t: "Enterprise Java Bean (EJB)",
          b: "Ein EJB ist eine in Java geschriebene serverseitige Komponente, die die Geschäftslogik einer Anwendung enthält und (Teile davon) als Dienste für andere Anwendungen bereitstellt. Benefits: Der Container liefert Dienste auf Systemebene (Transaktionsverwaltung, Sicherheitsautorisierung), sodass sich der Programmierer auf die Geschäftslogik konzentrieren kann; Client-Entwickler können sich auf die Präsentationsebene konzentrieren (Thin Clients); EJBs sind in hohem Maße wiederverwendbar. Zwei Arten: Session Beans (führen Aufgaben für Clients aus, optional als Webdienst) und Message-Driven Beans (Listener für Nachrichten, z. B. JMS).",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 23-24"
        },
        {
          t: "Session Beans",
          b: "Eine Session Bean kapselt Geschäftslogik, die ein Client programmgesteuert über lokale, Remote- oder Webservice-Clientansichten aufruft. Die Lebensdauer entspricht der Interaktion mit dem Client-Code; Instanzen werden nicht von mehreren Clients geteilt und stellen keine Daten in einer Datenbank dar. Der EJB-Container erstellt eine Instanz beim ersten Kontakt; endet die Client-Sitzung, wird die Bean ggf. zerstört. Drei Arten: Stateful, Stateless und Singleton.",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 26-27"
        },
        {
          t: "Stateless Session Beans",
          b: "Enthalten keine Konversationen, die sich über einen einzelnen Methodenaufruf hinaus erstrecken — kein für den Client sichtbarer Status. Instanzvariablen können nur für die Dauer eines Aufrufs Status enthalten; außerhalb sind alle Instanzen gleichwertig, sodass der Container jedem Client eine beliebige Instanz zuweisen kann. Bessere Skalierbarkeit (mehrere Clients); können Webdienste implementieren. Beispiel: <code>@Stateless public class HelloUserBean { public String sayHello(String name) {...} }</code> — automatisch threadsicher, transaktional und gepoolt. Einbettung ins Servlet per <code>@EJB</code>-Injektion.",
          tag: "wichtig",
          source: "07_ds-concept-components.pdf, Folien 28-32"
        },
        {
          t: "Pooling und Lifecycle-Callbacks",
          b: "Stateless Beans werden gepoolt: Der Container weist bei einer Anfrage eine Instanz zu und stellt sie nach Methodenende zurück in den Pool; bei Überschreitung der Obergrenze werden Anfragen in eine Warteschlange gestellt; Beans werden bei Leerlauf entfernt. Callbacks: <code>@PostConstruct</code> wird sofort nach Erstellung, Einrichtung und Ressourcen-Injektion aufgerufen; <code>@PreDestroy</code> direkt vor der Zerstörung.",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 33-34"
        },
        {
          t: "Stateful Session Beans und Passivierung",
          b: "Für Geschäftsprozesse konzipiert, die mehrere Methodenanforderungen oder Transaktionen umfassen — sie behalten den Status eines einzelnen Clients bei (Konversationszustand). Ähnlich einer interaktiven Sitzung: nur ein Client; entfernt der Client die Bean, endet die Sitzung und der Status verschwindet. Pooling ist auch hier nötig; da der Konversationszustand groß sein kann, wird ähnlich wie bei Betriebssystemen Swapping eingesetzt — die <b>Passivierung</b>: Die Bean wird ausgelagert und wieder aktiviert, wenn ein Client sie aufruft.",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 36-38"
        },
        {
          t: "Singleton Session Beans",
          b: "Werden nur einmal pro Anwendung instanziiert und existieren für deren Lebenszyklus. Eine einzelne EJB-Instanz wird von allen Clients gemeinsam genutzt und gleichzeitig zugegriffen; sie können Webdienste implementieren. Sie sind zustandslosen Session Beans sehr ähnlich (gleiche Callbacks), bieten die Möglichkeit, den gleichzeitigen Zugriff zu steuern, und können einen anwendungsglobalen gemeinsamen Status bereitstellen.",
          tag: "def",
          source: "07_ds-concept-components.pdf, Folien 39-40"
        }
      ],
      questions: [
        {
          q: "Wie definiert Szyperski eine Softwarekomponente?",
          a: "Eine Kompositionseinheit mit vertraglich spezifizierten Schnittstellen und nur expliziten Kontextabhängigkeiten — alle Kontextabhängigkeiten müssen explizit sein.",
          source: "07_ds-concept-components.pdf, Folie 6"
        },
        {
          q: "Was ist ein Container und was verwaltet er?",
          a: "Ein Host, der Dienste für Gastanwendungen bereitstellt — die Schnittstelle zwischen Komponente und plattformspezifischer Low-Level-Funktionalität. Er verwaltet Lebenszyklus, Datenpersistenz, Ressourcenpooling, Transaktionen, Sicherheit und Low-Level-Kommunikation.",
          source: "07_ds-concept-components.pdf, Folien 15-16"
        },
        {
          q: "Was ist Dependency Injection?",
          a: "Der Container kümmert sich um die Beziehungen einer Komponente zu ihren Abhängigkeiten. Per Annotation (z. B. @EJB) wird ein Attribut deklariert; der Container stellt zur Laufzeit sicher, dass die richtige Abhängigkeit eingefügt wird.",
          source: "07_ds-concept-components.pdf, Folie 21"
        },
        {
          q: "Was ist eine Enterprise Java Bean und welche Arten gibt es?",
          a: "Eine serverseitige Java-Komponente mit der Geschäftslogik einer Anwendung, bereitgestellt als Dienst. Zwei Arten: Session Beans (Aufgaben für Clients, optional Webdienst) und Message-Driven Beans (Nachrichten-Listener, z. B. JMS).",
          source: "07_ds-concept-components.pdf, Folien 23-24"
        },
        {
          q: "Worin unterscheiden sich Stateless und Stateful Session Beans?",
          a: "Stateless: kein für den Client sichtbarer Status über den Methodenaufruf hinaus, Instanzen gleichwertig und poolbar, bessere Skalierbarkeit, Webdienste möglich. Stateful: behalten den Konversationszustand eines einzelnen Clients über mehrere Aufrufe; nur ein Client; kein Webdienst.",
          source: "07_ds-concept-components.pdf, Folien 28-29, 36"
        },
        {
          q: "Was ist Passivierung?",
          a: "Das Swapping des EJB-Containers für Stateful Session Beans: Weil der Konversationszustand groß sein kann, wird die Bean ausgelagert und wieder aktiviert, wenn ein Client sie aufruft.",
          source: "07_ds-concept-components.pdf, Folie 38"
        },
        {
          q: "Wofür stehen @PostConstruct und @PreDestroy?",
          a: "@PostConstruct wird sofort nach Erstellung, Einrichtung und Ressourcen-Injektion einer Bean-Instanz aufgerufen; @PreDestroy direkt vor ihrer Zerstörung.",
          source: "07_ds-concept-components.pdf, Folie 34"
        },
        {
          q: "Was zeichnet Singleton Session Beans aus?",
          a: "Eine Instanz pro Anwendung für deren gesamten Lebenszyklus, von allen Clients gemeinsam und gleichzeitig genutzt; Steuerung des gleichzeitigen Zugriffs; anwendungsglobaler gemeinsamer Status; Webdienste möglich.",
          source: "07_ds-concept-components.pdf, Folien 39-40"
        }
      ],
      flashcards: [
        {
          front: "Komponente (Szyperski)",
          back: "Kompositionseinheit mit vertraglich spezifizierten Schnittstellen und nur expliziten Kontextabhängigkeiten",
          source: "07_ds-concept-components.pdf, Folie 6"
        },
        {
          front: "Container",
          back: "Host, der Gastanwendungen generische Dienste bereitstellt (Lifecycle, Pooling, Transaktionen, Security …)",
          source: "07_ds-concept-components.pdf, Folien 15-16"
        },
        {
          front: "@Stateless / @Stateful",
          back: "Annotationen, die das Verhalten eines POJO als Session Bean im Container definieren",
          source: "07_ds-concept-components.pdf, Folie 20"
        },
        {
          front: "Dependency Injection",
          back: "Container fügt zur Laufzeit die richtigen Abhängigkeiten ein (z. B. @EJB)",
          source: "07_ds-concept-components.pdf, Folie 21"
        },
        {
          front: "2 Arten von EJBs",
          back: "Session Beans und Message-Driven Beans",
          source: "07_ds-concept-components.pdf, Folie 24"
        },
        {
          front: "3 Arten von Session Beans",
          back: "Stateless, Stateful, Singleton",
          source: "07_ds-concept-components.pdf, Folie 26"
        },
        {
          front: "Passivierung",
          back: "Swapping von Stateful Beans: auslagern und bei Aufruf wieder aktivieren",
          source: "07_ds-concept-components.pdf, Folie 38"
        },
        {
          front: "Lifecycle-Callbacks",
          back: "@PostConstruct (nach Erstellung/Injektion) und @PreDestroy (vor Zerstörung)",
          source: "07_ds-concept-components.pdf, Folie 34"
        }
      ]
    },
    {
      id: "soa",
      title: "SOA & Web Services",
      icon: "🧭",
      cards: [
        {
          t: "SOA",
          b: "SOA ist ein Paradigma für die Strukturierung und Nutzung verteilter Funktionalität, die von unterschiedlichen Besitzern verantwortet wird. SOA ist keine Architektur, sondern ein Framework zum Architektur-Management. Typischerweise müssen Interessen verschiedener Stakeholder in Einklang gebracht werden; SOA soll die Steuerung komplexer Unternehmenslandschaften erleichtern (technische und organisationale Hindernisse).",
          tag: "def",
          source: "11-ds-soa.pdf, Folie 4"
        },
        {
          t: "Herausforderungen und Framework-Bestandteile",
          b: "Herausforderungen: Steuerung von IT-Architekturen nach unternehmerischen Kriterien, Flexibilität, Agilität. Bestandteile des SOA-Frameworks: Dienste (stellen in sich abgeschlossene Funktionalitäten zur Verfügung), spezifische Infrastruktur sowie Policys und Prozesse, die die Steuerung ermöglichen.",
          tag: "def",
          source: "11-ds-soa.pdf, Folie 6"
        },
        {
          t: "Services in der SOA",
          b: "Dienste sind grobgranulare Bausteine von Softwaresystemen mit loser Kopplung zu komplexen Geschäftsprozessen. Sie kapseln Funktionalität und Daten und machen sie über eine wohldefinierte Schnittstelle verfügbar. Ziel: Interoperabilität über Plattform- und Unternehmensgrenzen hinweg.",
          tag: "def",
          source: "11-ds-soa.pdf, Folie 11"
        },
        {
          t: "Eigenschaften von Diensten",
          b: "Ein Dienst ist eine IT-Repräsentation fachlicher Funktionalität; in sich abgeschlossen (autark) und eigenständig nutzbar; im Netzwerk verfügbar; hat eine wohldefinierte veröffentlichte Schnittstelle (Vertrag) — für die Nutzung reicht die Kenntnis der Schnittstelle; plattformunabhängig (Anbieter und Nutzer können verschiedene Sprachen/Plattformen verwenden); in einem Verzeichnis registriert; dynamisch gebunden (wird erst bei der Ausführung lokalisiert und eingebunden); sollte grobgranular sein, um Abhängigkeiten zwischen verteilten Systemen zu senken.",
          tag: "wichtig",
          source: "11-ds-soa.pdf, Folie 12"
        },
        {
          t: "Typische Themen im Architektur-Management",
          b: "<b>Redundanzen:</b> Ein Dienst wird von mehreren Dienstleistern gleichzeitig erbracht (Folge von Zusammenschlüssen oder Eigeninitiativen) — unternehmensglobal sollte auf denselben Dienst gesetzt werden. <b>Outsourcing:</b> Wenn externe Angebote kostengünstiger sind; Entscheidung mit Bedacht treffen. <b>Insellösungen:</b> Historisch gewachsene Architekturen bilden Silo-Anwendungen ohne Schnittstellen zu den restlichen Anwendungen heraus (Legacy-Anwendungen).",
          tag: "def",
          source: "11-ds-soa.pdf, Folie 15"
        },
        {
          t: "SOAP",
          b: "SOAP stützt sich intern auf ein Transportprotokoll (z. B. http); Parameter werden in XML beschrieben (auf Basis von XML-Schema). Eine SOAP-Nachricht besteht aus einem <b>Envelope</b> („Briefumschlag“), der einen optionalen <b>Header</b> und einen <b>Body</b> enthält. Im Header können beliebige Meta-Informationen codiert werden (z. B. Authentifizierung/Autorisierung); der Body enthält die eigentliche Nutzlast für den Dienstaufruf. Der Envelope kann in andere Protokolle eingebettet und von ihnen übertragen werden. Nachteile: Performance-Einschränkungen durch die XML-basierte Datenrepräsentation; keine automatische Speicherverwaltung oder Referenzen wie bei RMI.",
          tag: "def",
          source: "11-ds-soa.pdf, Folien 21, 23-24"
        },
        {
          t: "WSDL: Beschreibungselemente",
          b: "<b>Types:</b> komplexe Datentypen, definiert per XML-Schema — für den Aufruf von Web Services. <b>Message:</b> Beschreibung der Nachrichten zwischen Clients und Web Services beim Aufruf einer Operation; eine Message kann aus mehreren Teilen bestehen, jeder Teil durch einen Datentyp repräsentiert. <b>portType (Interfaces):</b> fasst eine Menge von Operationen zusammen; jede Operation wird auf Basis der definierten Messages und Datentypen definiert.",
          tag: "def",
          source: "11-ds-soa.pdf, Folie 27"
        },
        {
          t: "WSDL: Bindings und Endpunkte",
          b: "<b>Binding (Protocol):</b> Definition für die Kommunikation mit dem abstrakten Interface eines Web Service — Spezifikation von Nachrichtenformat und Transportprotokoll (z. B. SOAP, http). <b>Port (Communication endpoint):</b> ein einzelner Service-Endpunkt, spezifiziert durch eine IP-Adresse für ein definiertes Binding. <b>Service:</b> Zusammenfassung einzelner Endpunkte unter einem logischen Namen; mehrere Ports können denselben portType referenzieren (ggf. mit verschiedenen Binding-Alternativen).",
          tag: "def",
          source: "11-ds-soa.pdf, Folie 28"
        }
      ],
      questions: [
        {
          q: "Wie ist SOA definiert?",
          a: "Ein Paradigma für die Strukturierung und Nutzung verteilter Funktionalität, die von unterschiedlichen Besitzern verantwortet wird — keine Architektur, sondern ein Framework zum Architektur-Management.",
          source: "11-ds-soa.pdf, Folie 4"
        },
        {
          q: "Aus welchen Bestandteilen besteht das SOA-Framework?",
          a: "Dienste (in sich abgeschlossene Funktionalitäten), spezifische Infrastruktur sowie Policys und Prozesse zur Steuerung.",
          source: "11-ds-soa.pdf, Folie 6"
        },
        {
          q: "Nennen Sie wesentliche Eigenschaften von Diensten in der SOA.",
          a: "IT-Repräsentation fachlicher Funktionalität; autark; im Netzwerk verfügbar; wohldefinierte veröffentlichte Schnittstelle (Vertrag); plattformunabhängig; in einem Verzeichnis registriert; dynamisch gebunden; grobgranular.",
          source: "11-ds-soa.pdf, Folie 12"
        },
        {
          q: "Welche typischen Themen behandelt das SOA-Architektur-Management?",
          a: "Redundanzen (derselbe Dienst mehrfach erbracht), Outsourcing (externe, kostengünstigere Angebote) und Insellösungen (Silo-/Legacy-Anwendungen ohne Schnittstellen).",
          source: "11-ds-soa.pdf, Folie 15"
        },
        {
          q: "Woraus besteht eine SOAP-Nachricht?",
          a: "Aus einem Envelope, der einen optionalen Header (Meta-Informationen, z. B. Authentifizierung) und einen Body (die eigentliche Nutzlast für den Dienstaufruf) enthält.",
          source: "11-ds-soa.pdf, Folien 23-24"
        },
        {
          q: "Welche Nachteile hat SOAP?",
          a: "Performance-Einschränkungen durch die XML-basierte Datenrepräsentation und keine automatische Speicherverwaltung oder Referenzen wie bei RMI.",
          source: "11-ds-soa.pdf, Folie 23"
        },
        {
          q: "Welche Elemente beschreibt WSDL?",
          a: "Types (Datentypen per XML-Schema), Messages (ausgetauschte Nachrichten), portType (Interfaces mit Operationen), Binding (Nachrichtenformat und Transportprotokoll), Port (Endpunkt für ein Binding) und Service (logische Zusammenfassung von Endpunkten).",
          source: "11-ds-soa.pdf, Folien 27-28"
        }
      ],
      flashcards: [
        {
          front: "SOA",
          back: "Paradigma zur Strukturierung/Nutzung verteilter Funktionalität verschiedener Besitzer — Framework fürs Architektur-Management",
          source: "11-ds-soa.pdf, Folie 4"
        },
        {
          front: "SOA-Framework: 3 Bestandteile",
          back: "Dienste, Infrastruktur, Policys & Prozesse",
          source: "11-ds-soa.pdf, Folie 6"
        },
        {
          front: "Dienst: Granularität",
          back: "Grobgranular — um Abhängigkeiten zwischen verteilten Systemen zu senken",
          source: "11-ds-soa.pdf, Folie 12"
        },
        {
          front: "Dynamisch gebunden",
          back: "Der Dienst muss beim Erstellen der Anwendung nicht vorhanden sein — er wird erst bei der Ausführung lokalisiert und eingebunden",
          source: "11-ds-soa.pdf, Folie 12"
        },
        {
          front: "SOAP-Nachricht",
          back: "Envelope ⊃ optionaler Header (Metadaten) + Body (Nutzlast)",
          source: "11-ds-soa.pdf, Folie 23"
        },
        {
          front: "WSDL-Elemente",
          back: "types, message, portType, binding, port, service",
          source: "11-ds-soa.pdf, Folien 27-28"
        },
        {
          front: "3 typische SOA-Themen",
          back: "Redundanzen, Outsourcing, Insellösungen (Legacy)",
          source: "11-ds-soa.pdf, Folie 15"
        }
      ]
    }
  ]
};
