import type { RawSubject } from "../../types/content";

const rabs = {
  id: "rabs",
  title: "RABS",
  subtitle: "Rechnerarchitektur & Betriebssysteme",
  icon: "🖥️",
  features: {
    math: false
  },
  topics: [
    {
      id: "einordnung-historie",
      title: "Einordnung & Historie",
      icon: "🧭",
      cards: [
        {
          title: "Ziel der Vorlesung",
          body: "Der Rechner ist das zentrale Handwerkszeug des Informatikers. Die Vorlesung zielt darauf, Möglichkeiten und Grenzen der Hardware, das Verhalten komplexer Systeme, das Laufzeitverhalten von Programmen und den Blick unter die Haube besser zu verstehen.",
          tag: "wichtig",
          source: "01_rabs_intro-01.pdf, Folie 4"
        },
        {
          title: "Sicht auf Computer",
          body: "Ein Rechnersystem wird über Eingabe-/Ausgabegeräte, Betriebssystem, Anwendungen aus der Softwareentwicklung und Hardware betrachtet. Die Folien stellen dazu ausdrücklich die Frage, was ein Betriebssystem ist und welche Funktionen es hat.",
          source: "01_rabs_intro-01.pdf, Folien 6-7"
        },
        {
          title: "Eingebettete Systeme",
          body: "Eingebettete Systeme sind in größere technische Komponenten eingebettet, häufig für einen bestimmten Zweck ausgelegt, interagieren in der Regel nicht über Tastatur oder Touchscreen und arbeiten hardwarenah.",
          source: "01_rabs_intro-01.pdf, Folie 8"
        },
        {
          title: "Rechnerarchitektur nach Amdahl, Brooks und Blaauw",
          body: "Rechnerarchitektur beschreibt Eigenschaften und Verhalten eines Computers aus Sicht des Programmierers. Dazu gehören Befehlssatz, Befehlsformate, OP-Codes, Adressierungsarten sowie Register und Speicher, die ein Maschinensprachenprogrammierer direkt verändern kann.",
          tag: "def",
          source: "01_rabs_intro-01.pdf, Folie 10"
        },
        {
          title: "Warum Rechnerarchitektur wichtig ist",
          body: "Grundverständnis der Rechnerarchitektur wird für Geräteauswahl, Fehlersuche, Leistungsoptimierung, Benchmarkentwürfe, Zuverlässigkeitsanalysen, Systementwurf, Compiler-Codeoptimierung und Sicherheitsfragen benötigt.",
          source: "01_rabs_intro-01.pdf, Folie 11"
        },
        {
          title: "Historie: vom Abakus zum Webstuhl",
          body: "Ca. 1100 v. Chr. Abakus, die älteste Rechenhilfe der Welt, noch heute im asiatischen Raum in Gebrauch. 1629 Rechenschieber (William Oughtred). 1642 Pascaline (Blaise Pascal), eine mechanische Rechenmaschine, nur Addition. 1804 automatischer Webstuhl (Joseph Jacquard): Lochkarten bestimmen das Muster, der erste Nur-Lese-Speicher (ROM).",
          source: "01_rabs_intro-01.pdf, Folien 13-14"
        },
        {
          title: "Historie: Boole, Hollerith, Zuse",
          body: "1847 Boolesche Algebra (George Boole): binäre logische Operationen, Basis für heutige Digitalrechner. 1890 Tabelliermaschine (Herman Hollerith): Zähl- und Sortiermaschine für die Volkszählung auf Basis von Lochkarten; Holleriths Firma wurde später IBM. 1940 Z3 (Konrad Zuse): 2.200 Relais, 10 Hertz Taktfrequenz, 22-stellige Binärzahlen im Gleitkomma-Format, dezimale Ein-/Ausgabe, Speicher mit 64 Worten, Steuereinheit mit Sequenzer; Addition in 3, Multiplikation in 16 Takten.",
          source: "01_rabs_intro-01.pdf, Folien 15-16"
        },
        {
          title: "1945: Von-Neumann-Architektur",
          body: "Von Presper Eckert, John Mauchly und John von Neumann: der klassische Universalrechner. Vier wesentliche Komponenten: Leitwerk, Rechenwerk, Speicherwerk sowie Ein- und Ausgabewerk. Programme und Daten liegen in einem Speicher, das Rechenwerk hat ALU und Register, das Leitwerk den <em>fetch-decode-execute</em>-Instruktionszyklus; Codierung binär.",
          tag: "wichtig",
          source: "01_rabs_intro-01.pdf, Folie 17"
        },
        {
          title: "Triebkräfte der Entwicklung",
          body: "Mooresches Gesetz (Gordon Moore, Mitbegründer von Intel, 1965): Die Anzahl der auf einem Chip integrierten Transistoren verdoppelt sich alle 18 Monate. Nathans erstes Softwaregesetz (Nathan Myhrvold, Microsoft): Software ist ein Gas, sie dehnt sich aus und füllt den Behälter, in dem sie sich befindet.",
          source: "01_rabs_intro-01.pdf, Folie 18"
        },
        {
          title: "Entwicklung der Mikroprozessoren",
          body: "Die Transistorzahl der Mikroprozessoren stieg von 1971 (4004) bis 2011 (Core i7, Xeon) exponentiell. Herausforderungen sind Energieverbrauch und Hitzeentwicklung. Strategie: mehrere Prozessoren auf einem Chip, die über Caches kommunizieren, denn Speicher verbraucht nicht viel Energie.",
          source: "01_rabs_intro-01.pdf, Folien 19-20"
        },
        {
          title: "Bestandteile eines Rechnersystems",
          body: "Die Folien unterscheiden Anwendungssoftware, Systemsoftware und Hardware. Zur Systemsoftware zählen unter anderem Compiler, Betriebssystem und Dateimanager; zur Hardware unter anderem CPU, RAM, SSD, HDD, PCIe, USB sowie Netzwerk-, Grafik- und Soundkarten.",
          source: "01_rabs_intro-01.pdf, Folie 23"
        },
        {
          title: "Ebenen eines Rechnersystems",
          body: "Die Ebenen reichen von Anwendungsebene und Assemblerebene über Betriebssystem und Instruction Set Architecture bis zu Mikroarchitektur, digital-logischer Ebene und Transistorebene.",
          source: "01_rabs_intro-01.pdf, Folie 25"
        },
        {
          title: "Mehrschichten-Architektur",
          body: "Die oberen Schichten (4 und 5) sind für den Anwendungsprogrammierer gedacht und nutzen Sprachen mit Wörtern oder Abkürzungen (z. B. Assembler). Die unteren Schichten (0 bis 3) sind für den Systemprogrammierer und nutzen eher numerische Sprachen.",
          source: "01_rabs_intro-01.pdf, Folie 26"
        },
        {
          title: "Eigenschaften einer Rechnerarchitektur",
          body: "Rechnerarchitekturen unterscheiden sich in der Rechnerarithmetik (Addition, Subtraktion, Multiplikation, Division, Gleitkommaarithmetik), im Prozessor mit Datenpfad und Steuerwerk (Entwurf von Logikschaltungen, Implementierungsmethoden, Steuerwerksentwurf) und in der Speicherorganisation (Speicherhierarchie, Cache).",
          source: "01_rabs_intro-01.pdf, Folie 27"
        },
        {
          title: "Klassifikation von Rechnerarchitekturen",
          body: "Nach Rechenprinzip nennt die Vorlesung Von-Neumann-Architektur, Harvard-Architektur, Datenfluss, Reduktion und objektorientierte Architektur. Nach Architekturgrundkonzept werden Vektorrechner, Array-Computer und Assoziativ-Rechner genannt.",
          source: "01_rabs_intro-01.pdf, Folie 28"
        }
      ],
      flashcards: [
        {
          front: "Welche Ziele verfolgt die RABS-Vorlesung laut Einführung?",
          back: "Sie soll Möglichkeiten und Grenzen der Hardware, das Verhalten komplexer Systeme, das Laufzeitverhalten von Programmen und den Blick unter die Haube verständlicher machen.",
          source: "01_rabs_intro-01.pdf, Folie 4"
        },
        {
          front: "Was kennzeichnet eingebettete Systeme in den Folien?",
          back: "Sie sind in größere technische Komponenten eingebettet, häufig zweckgebunden, interagieren meist nicht über Tastatur oder Touchscreen und sind hardwarenah.",
          source: "01_rabs_intro-01.pdf, Folie 8"
        },
        {
          front: "Wie definieren Amdahl, Brooks und Blaauw Rechnerarchitektur?",
          back: "Als Eigenschaften und Verhalten eines Computers, wie dieser von einem Programmierer gesehen wird, einschließlich Befehlssatz, Befehlsformaten, OP-Codes, Adressierungsarten, Registern und direkt veränderbaren Speichern.",
          source: "01_rabs_intro-01.pdf, Folie 10"
        },
        {
          front: "Welche Bedeutung hat der automatische Webstuhl von Jacquard (1804)?",
          back: "Lochkarten bestimmen das Muster, indem Löcher das Anheben und Senken der Kettfäden steuern; das gilt als erster Nur-Lese-Speicher (ROM).",
          source: "01_rabs_intro-01.pdf, Folie 14"
        },
        {
          front: "Was brachten Boole (1847) und Hollerith (1890) für die Rechnerentwicklung?",
          back: "Boole: die Boolesche Algebra mit binären logischen Operationen als Basis heutiger Digitalrechner. Hollerith: die Tabelliermaschine auf Lochkartenbasis für die Volkszählung; seine Firma wurde später IBM.",
          source: "01_rabs_intro-01.pdf, Folie 15"
        },
        {
          front: "Welche Merkmale hat die Von-Neumann-Architektur von 1945?",
          back: "Klassischer Universalrechner mit Leitwerk, Rechenwerk, Speicherwerk und Ein-/Ausgabewerk; Programme und Daten in einem Speicher; Rechenwerk mit ALU und Registern; Leitwerk mit fetch-decode-execute-Zyklus; binäre Codierung.",
          source: "01_rabs_intro-01.pdf, Folie 17"
        },
        {
          front: "Was besagt das Mooresche Gesetz?",
          back: "Die Anzahl der auf einem Chip integrierten Transistoren verdoppelt sich alle 18 Monate (Gordon Moore, 1965).",
          source: "01_rabs_intro-01.pdf, Folie 18"
        },
        {
          front: "Was besagt Nathans erstes Softwaregesetz?",
          back: "Software ist ein Gas: Sie dehnt sich aus und füllt den Behälter, in dem sie sich befindet (Nathan Myhrvold, Microsoft).",
          source: "01_rabs_intro-01.pdf, Folie 18"
        },
        {
          front: "Welche Herausforderungen und welche Strategie nennen die Folien für Mikroprozessoren?",
          back: "Herausforderungen: Energieverbrauch und Hitzeentwicklung. Strategie: mehrere Prozessoren auf einem Chip, Kommunikation über Caches.",
          source: "01_rabs_intro-01.pdf, Folie 19"
        },
        {
          front: "Welche drei großen Bestandteile eines Rechnersystems zeigen die Folien?",
          back: "Anwendungssoftware, Systemsoftware und Hardware.",
          source: "01_rabs_intro-01.pdf, Folie 23"
        },
        {
          front: "Welche Beispiele für Systemsoftware nennen die Folien?",
          back: "Beispiele für Systemsoftware sind Compiler, Betriebssystem und Dateimanager.",
          source: "01_rabs_intro-01.pdf, Folie 23"
        },
        {
          front: "Welche Ebenen liegen zwischen Anwendungsebene und Transistorebene?",
          back: "Assemblerebene, Betriebssystem, Instruction Set Architecture, Mikroarchitektur und digital-logische Ebene.",
          source: "01_rabs_intro-01.pdf, Folie 25"
        },
        {
          front: "Wie unterscheiden sich obere und untere Schichten der Mehrschichten-Architektur?",
          back: "Obere Schichten (4 und 5): für Anwendungsprogrammierer, Sprachen mit Wörtern oder Abkürzungen wie Assembler. Untere Schichten (0 bis 3): für Systemprogrammierer, eher numerische Sprachen.",
          source: "01_rabs_intro-01.pdf, Folie 26"
        },
        {
          front: "In welchen Punkten unterscheiden sich Rechnerarchitekturen?",
          back: "In der Rechnerarithmetik, im Prozessor mit Datenpfad und Steuerwerk und in der Speicherorganisation mit Speicherhierarchie und Cache.",
          source: "01_rabs_intro-01.pdf, Folie 27"
        },
        {
          front: "Welche Rechenprinzipien nennt die Klassifikation?",
          back: "Die Klassifikation nennt Von-Neumann, Harvard, Datenfluss, Reduktion und objektorientierte Rechenprinzipien.",
          source: "01_rabs_intro-01.pdf, Folie 28"
        }
      ]
    },
    {
      id: "architektur-cpu",
      title: "Architektur, CPU & E/A",
      icon: "🖥️",
      cards: [
        {
          title: "Speicherverwaltungseinheit (MMU)",
          body: "Im Mehrprogrammbetrieb müssen Betriebssystem und Programme voreinander geschützt und Programme an unterschiedliche Adressen geladen werden. Lösung: Adressumsetzung. Die Hardware-MMU setzt virtuelle Adressen des Programms auf physische Speicheradressen um und prüft dabei Zugriffsrechte. Einfachste Variante: Basis- und Limit-Register, physische Adresse = Basis + virtuelle Adresse; das Limit-Register legt die Länge des zugreifbaren Adressraums fest.",
          source: "01_rabs_grundlagen.pdf, Folie 26"
        },
        {
          title: "Von-Neumann-Komponenten",
          body: "Die Von-Neumann-Architektur besteht aus ALU, Control Unit, Memory, I/O-Unit und Bus-System. Die ALU führt Rechenoperationen und logische Verknüpfungen aus, die Control Unit interpretiert Anweisungen und steuert die Befehlsabfolge.",
          tag: "def",
          source: "02_rabs_vna1.pdf, Folie 5"
        },
        {
          title: "Von-Neumann-Flaschenhals",
          body: "Befehle und Daten werden im Speicher gehalten. Die Verbindung und Datenübertragung zwischen CPU und Speicher über den Systembus wird zum Von-Neumann-Flaschenhals, weil jeglicher Datenverkehr von und zur CPU über den internen Bus läuft.",
          tag: "wichtig",
          source: "01_rabs_grundlagen.pdf, Folie 4"
        },
        {
          title: "Harvard-Architektur",
          body: "Die Harvard-Architektur trennt Befehls- und Datenspeicher logisch und physisch. Dadurch können Befehle und Daten gleichzeitig geladen beziehungsweise geschrieben werden.",
          tag: "def",
          source: "01_rabs_grundlagen.pdf, Folien 5-6"
        },
        {
          title: "Nachteile der Harvard-Architektur",
          body: "Freier Programmspeicher kann nicht für Daten genutzt werden, freier Datenspeicher nicht für Programme. Selbstmodifizierender Code ist nicht möglich. Moderne Prozessoren verwenden eine Mischform aus Harvard- und Von-Neumann-Architektur.",
          source: "01_rabs_grundlagen.pdf, Folie 6"
        },
        {
          title: "Aufbau eines typischen PCs",
          body: "Stark vereinfacht: Der Prozessor besteht aus Rechenwerk (Register wie R1, R2, R3 und Stack Pointer SP) und Leitwerk (Befehlszähler PC, Programmstatuswort PSW). Prozessor, Speicher und die Ein-/Ausgabe-Controller der Geräte hängen am Systembus mit Adressen, Steuersignalen und Daten. Realistischer: Die CPU enthält CPU-Kern, L1-Befehls- und L1-Daten-Cache, ein L2-Cache-Interface und ein Systembus-Interface; der Chipsatz verbindet Hauptspeicher, Grafikbeschleuniger (AGP) und E/A-Bus (PCI, z. B. USB, IDE, Ethernet), über eine Bus-Brücke auch ältere E/A-Busse (ISA/EISA, z. B. Parallel, RS232).",
          source: "02_rabs_vna1.pdf, Folien 10-11"
        },
        {
          title: "CPU und ihre Komponenten",
          body: "Die CPU führt Programme aus, deren Anweisungen im Hauptspeicher liegen. Zu ihren Komponenten gehören Steuerwerk, ALU, Register, Befehlszähler (PC) und Instruction Register (IR).",
          source: "02_rabs_vna1.pdf, Folien 13-14"
        },
        {
          title: "Fetch-Decode-Execute-Zyklus",
          body: "Der Zyklus lädt den nächsten Befehl in das Befehlsregister, erhöht den Programmzähler, bestimmt den Befehlstyp, lädt Operanden, führt den Befehl aus und beginnt danach erneut.",
          source: "01_rabs_grundlagen.pdf, Folie 19"
        },
        {
          title: "Operationen und Datenpfad",
          body: "Eine CPU führt Lade- und Speicheroperationen, arithmetische und logische Operationen, bedingte und unbedingte Sprünge (Änderung des Befehlszählers) sowie Unterprogramm-Aufrufe und -Rücksprünge aus. Im Datenpfad holt die ALU die Operanden aus den Registern, führt die Operation aus und schreibt das Ergebnis in ein Register.",
          source: "02_rabs_vna1.pdf, Folien 15-16"
        },
        {
          title: "Pipeline, superskalar und Mehrkern",
          body: "Pipeline-Prozessoren besitzen getrennte Hol-, Dekodier- und Ausführungseinheiten und können mehrere Befehle parallel bearbeiten. Superskalare Prozessoren besitzen mehrere Ausführungseinheiten. Mehrkern-Prozessoren enthalten mehrere komplette Prozessoren.",
          source: "02_rabs_vna1.pdf, Folien 18-20"
        },
        {
          title: "Speicherhierarchie und Cache",
          body: "Speicher soll sehr schnell, sehr groß und billig sein; keine Technologie erfüllt alles zugleich. Caches speichern häufig benötigte Daten in schnellem Speicher. L1-Cache liegt typischerweise innerhalb der CPU, L2-Cache ist größer und langsamer.",
          source: "02_rabs_vna1.pdf, Folien 22-24"
        },
        {
          title: "Controller und E/A-Geräte",
          body: "Controller steuern Geräte weitgehend autonom, besitzen Register für Kommandos, Daten und Status und können Interrupts an die CPU senden. E/A-Geräte werden in zeichenorientierte und blockorientierte Geräte unterschieden.",
          source: "02_rabs_vna1.pdf, Folien 26-28"
        },
        {
          title: "Kernmodus, Benutzermodus und Interrupts",
          body: "CPUs besitzen Kernmodus und Benutzermodus; der Modus wird im Programmstatuswort durch ein Bit festgehalten. Privilegierte Befehle im Benutzermodus führen zu einer Exception. Interrupts reagieren auf externe asynchrone Ereignisse.",
          tag: "wichtig",
          source: "02_rabs_vna1.pdf, Folien 30-34"
        },
        {
          title: "Kontrollierter Moduswechsel",
          body: "Ein Programm wechselt kontrolliert mit einem speziellen Befehl in den Systemmodus (Systemaufruf, Trap, System Call): Der Prozessor sichert den PC als Rückkehradresse im Keller, schaltet in den Systemmodus und verzweigt an eine vordefinierte Adresse im Betriebssystem. Dieses analysiert und führt den Aufruf aus; ein Rückkehrbefehl schaltet wieder in den Benutzermodus.",
          source: "02_rabs_vna1.pdf, Folie 32"
        },
        {
          title: "Unterbrechungen des Programmablaufs",
          body: "Unterbrechungen sind synchron oder asynchron. Synchron sind die Ausnahme (Exception) und der Systemaufruf (Trap), asynchron ist der Interrupt.",
          tag: "wichtig",
          source: "02_rabs_vna1.pdf, Folie 35"
        }
      ],
      flashcards: [
        {
          front: "Was ist der Von-Neumann-Flaschenhals?",
          back: "Der gesamte Datenverkehr von und zur CPU läuft über den internen Bus zwischen CPU und Speicher; dessen Transfergeschwindigkeit ist langsamer als die Verarbeitungsgeschwindigkeit der CPU.",
          source: "01_rabs_grundlagen.pdf, Folie 4"
        },
        {
          front: "Welche Idee verfolgt die Harvard-Architektur?",
          back: "Sie trennt Befehls- und Datenspeicher logisch und physisch, sodass Befehle und Daten gleichzeitig geladen oder geschrieben werden können.",
          source: "01_rabs_grundlagen.pdf, Folien 5-6"
        },
        {
          front: "Wie läuft der Fetch-Decode-Execute-Zyklus ab?",
          back: "Befehl laden, Programmzähler hochzählen, Befehlstyp bestimmen, Operanden laden, Befehl ausführen und von vorne beginnen.",
          source: "01_rabs_grundlagen.pdf, Folie 19"
        },
        {
          front: "Wie arbeitet die einfachste Variante der Adressumsetzung durch die MMU?",
          back: "Mit Basis- und Limit-Register: physische Adresse = Basis + virtuelle Adresse; das Limit-Register legt die Länge des zugreifbaren Adressraums fest.",
          source: "01_rabs_grundlagen.pdf, Folie 26"
        },
        {
          front: "Welche Komponenten nennt die Von-Neumann-Architektur?",
          back: "ALU, Control Unit, Memory, I/O-Unit und Bus-System.",
          source: "02_rabs_vna1.pdf, Folie 5"
        },
        {
          front: "Wofür steht ALU und welche Aufgabe hat sie?",
          back: "ALU steht für Arithmetic Logic Unit; sie führt Rechenoperationen und logische Verknüpfungen aus.",
          source: "02_rabs_vna1.pdf, Folie 5"
        },
        {
          front: "Welche Signale überträgt der Systembus eines typischen PCs?",
          back: "Adressen, Steuersignale und Daten.",
          source: "02_rabs_vna1.pdf, Folie 10"
        },
        {
          front: "Was bedeutet PC in der CPU?",
          back: "PC bedeutet Program Counter beziehungsweise Befehlszähler.",
          source: "02_rabs_vna1.pdf, Folie 14"
        },
        {
          front: "Welche Operationen führt eine CPU aus?",
          back: "Lade- und Speicheroperationen, arithmetische und logische Operationen, bedingte und unbedingte Sprünge sowie Unterprogramm-Aufrufe und -Rücksprünge.",
          source: "02_rabs_vna1.pdf, Folie 15"
        },
        {
          front: "Was beschreibt der Datenpfad?",
          back: "Die ALU holt die Operanden aus den Registern, führt die Operation aus und schreibt das Ergebnis in ein Register.",
          source: "02_rabs_vna1.pdf, Folie 16"
        },
        {
          front: "Was unterscheidet Pipeline-, superskalare und Mehrkern-Prozessoren?",
          back: "Pipeline: getrennte Hol-, Dekodier- und Ausführungseinheiten, mehrere Befehle werden parallel bearbeitet. Superskalar: mehrere Ausführungseinheiten, oft werden mehrere Befehle gleichzeitig geholt und gepuffert. Mehrkern: mehrere komplette Prozessoren auf einem Chip.",
          source: "02_rabs_vna1.pdf, Folien 18-20"
        },
        {
          front: "Welche Anforderungen an Speicher führen zur Speicherhierarchie?",
          back: "Speicher soll sehr schnell (schneller als ein Befehl), sehr groß und spottbillig sein; keine Speichertechnologie erfüllt aktuell alle Anforderungen.",
          source: "02_rabs_vna1.pdf, Folie 22"
        },
        {
          front: "Wie groß und wie schnell sind L1- und L2-Cache typischerweise?",
          back: "L1-Cache: typischerweise 16 KB innerhalb der CPU, Zugriff ohne Verzögerung. L2-Cache: typischerweise mehrere MB, Zugriff in 1 bis 2 Taktzyklen.",
          source: "02_rabs_vna1.pdf, Folie 24"
        },
        {
          front: "Was leistet ein Gerätecontroller?",
          back: "Spezielle Hardware, oft mit eigenem Mikroprozessor, die ein Gerät weitgehend autonom steuert; sie hat Register für Kommandos, Daten und Status und kann einen Interrupt an die CPU senden, wenn Eingabedaten vorhanden sind oder eine Ausgabe abgeschlossen ist.",
          source: "02_rabs_vna1.pdf, Folie 26"
        },
        {
          front: "Was unterscheidet speicherbasierte E/A von einem separaten E/A-Adressraum?",
          back: "Speicherbasiert: Die Controller-Register sind in den Speicheradressraum eingeblendet, Zugriff mit normalen Lese-/Schreibbefehlen, Schutz über die MMU. Separater E/A-Adressraum (bei x86 üblich): Zugriff nur über spezielle privilegierte E/A-Befehle. Beide Varianten sind in Gebrauch.",
          source: "02_rabs_vna1.pdf, Folie 27"
        },
        {
          front: "Was unterscheidet zeichen- und blockorientierte E/A-Geräte?",
          back: "Zeichenorientiert: Ein-/Ausgabe einzelner Zeichen, z. B. Tastatur, Maus, Modem. Blockorientiert: größere Datenblöcke, z. B. Festplatte, Netzwerk; Vorteil ist eine geringere Interrupt-Rate.",
          source: "02_rabs_vna1.pdf, Folie 28"
        },
        {
          front: "Worin unterscheiden sich Kernmodus und Benutzermodus?",
          back: "Im Kernmodus hat das Betriebssystem unbeschränkten Zugriff auf Rechnerkomponenten. Im Benutzermodus ist der Zugriff eingeschränkt, Speicher ist nur über Adressabbildung zugreifbar und privilegierte Befehle sind nicht erlaubt.",
          source: "02_rabs_vna1.pdf, Folie 30"
        },
        {
          front: "Wo wird der Ausführungsmodus der CPU festgehalten?",
          back: "In der Hardware im Programmstatuswort (PSW) durch 1 Bit.",
          source: "02_rabs_vna1.pdf, Folie 30"
        },
        {
          front: "Wann entsteht eine Exception im Benutzermodus?",
          back: "Eine Exception entsteht, wenn im Benutzermodus ein privilegierter Befehl ausgeführt wird.",
          source: "02_rabs_vna1.pdf, Folie 31"
        },
        {
          front: "Was passiert, wenn im Benutzermodus ein privilegierter Befehl ausgeführt wird?",
          back: "Es entsteht eine Ausnahme: Der Prozessor bricht den Befehl ab, sichert den PC im Keller und setzt die Ausführung an einer vordefinierten Adresse im Systemmodus fort. Das Betriebssystem behandelt die Ausnahme, z. B. durch Abbruch des Prozesses; ein Rückkehrbefehl schaltet zurück in den Benutzermodus.",
          source: "02_rabs_vna1.pdf, Folie 31"
        },
        {
          front: "Wie läuft ein Systemaufruf (Trap) auf Prozessorebene ab?",
          back: "PC als Rückkehradresse im Keller sichern, in den Systemmodus schalten, an eine vordefinierte Adresse im Betriebssystem verzweigen; das Betriebssystem analysiert und führt den Aufruf aus; ein Rückkehrbefehl schaltet zurück in den Benutzermodus.",
          source: "02_rabs_vna1.pdf, Folie 32"
        },
        {
          front: "Was ist die Hauptanwendung von Interrupts laut Folien?",
          back: "Ein-/Ausgabe; der Prozessor kann auf externe asynchrone Ereignisse reagieren und in eine Unterbrechungsbehandlungsroutine verzweigen.",
          source: "02_rabs_vna1.pdf, Folie 33"
        },
        {
          front: "Wie läuft die Behandlung eines Interrupts ab?",
          back: "Das Unterbrechungssignal wird nach jedem Befehl abgefragt. Ist es gesetzt, sichert der Prozessor den PC im Keller, schaltet in den Systemmodus und verzweigt in die Unterbrechungsbehandlungsroutine (ISR); danach schaltet ein Rückkehrbefehl zurück in den Benutzermodus.",
          source: "02_rabs_vna1.pdf, Folie 33"
        },
        {
          front: "Was ist ein Unterbrechungsvektor?",
          back: "Ein Unterbrechungsvektor ist eine Tabelle von Adressen, über die Interrupts Behandlungsroutinen zugewiesen werden.",
          source: "02_rabs_vna1.pdf, Folie 34"
        },
        {
          front: "Können Interrupts ausgeschaltet werden?",
          back: "Ja, Interrupts können maskiert werden; das ist ein privilegierter Befehl.",
          source: "02_rabs_vna1.pdf, Folie 34"
        },
        {
          front: "Welche Unterbrechungen des Programmablaufs sind synchron, welche asynchron?",
          back: "Synchron: Ausnahme (Exception) und Systemaufruf (Trap). Asynchron: Interrupt.",
          source: "02_rabs_vna1.pdf, Folie 35"
        }
      ]
    },
    {
      id: "betriebssystem-grundlagen",
      title: "Betriebssystem-Grundlagen",
      icon: "⚙️",
      cards: [
        {
          title: "Stellung des Betriebssystems",
          body: "Im Schichtenbild liegen Anwendungsprogramme (z. B. Bankensystem, Flugbuchungen, Web-Browser) und Systemprogramme (Compiler, Editoren, Kommando-Interpreter) über dem Betriebssystem; darunter folgt die Hardware mit Maschinensprache, Mikroarchitektur und physischen Geräten.",
          source: "01_rabs_grundlagen-04.pdf, Folie 4"
        },
        {
          title: "Betriebssystem nach DIN 44300",
          body: "Ein Betriebssystem sind die Programme eines digitalen Rechensystems, die zusammen mit den Eigenschaften der Rechenanlage die Basis der möglichen Betriebsarten bilden und insbesondere die Abwicklung von Programmen steuern und überwachen.",
          tag: "def",
          source: "01_rabs_grundlagen-04.pdf, Folie 5"
        },
        {
          title: "Komplexität von Betriebssystemen",
          body: "Heutige Betriebssysteme sind historisch gewachsen und sehr komplex. Gemessen in Source Lines of Code (SLOC): z. B. Windows NT 4.0 16 Mio., Windows XP 40 Mio., Windows Vista 50 Mio., Linux-Kernel 3.6 15,9 Mio. Richtwert aus Erfahrung: 5 bis 50 Bugs pro 1000 Lines of Code, daher ist strukturiertes Design unabdingbar.",
          source: "01_rabs_grundlagen-04.pdf, Folien 5, 7-8"
        },
        {
          title: "Arten von Betriebssystemen",
          body: "Die Folien nennen unter anderem Mainframe-, Server-, Multiprozessor-, PC-, Smartphone-, eingebettete und Echtzeit-Betriebssysteme. Die Beispiele reichen von z/OS und BS2000 über Windows, Linux, iOS, Android, QNX, VxWorks bis RTOS.",
          source: "01_rabs_grundlagen-04.pdf, Folie 6"
        },
        {
          title: "Entwicklung: 1. Generation",
          body: "1945 bis 1955, vorwiegend Elektronenröhren. Es gab kein Betriebssystem; Teams von Ingenieuren betreuten die Rechner, programmiert wurde in Maschinensprache oder durch Verdrahtung. Beispiele: Zuse Z3, Howard Aikens Mark I (Harvard), Colossus (Bletchley Park).",
          source: "01_rabs_grundlagen-04.pdf, Folie 9"
        },
        {
          title: "Entwicklung: Stapelbetrieb",
          body: "In der zweiten Generation (1955-1965) stehen Transistoren und Stapelverarbeitung im Vordergrund. Jobs werden nacheinander verarbeitet; der Stapelbetrieb wird vom Betriebssystem verwaltet.",
          source: "01_rabs_grundlagen-04.pdf, Folie 10"
        },
        {
          title: "Entwicklung: Multiprogrammierung",
          body: "In der dritten Generation (1965-1980) treten integrierte Schaltkreise und Multiprogrammierung auf. OS/360 wird als erstes Betriebssystem mit Multiprogramming genannt; Mehrprogrammbetrieb verbessert die CPU-Nutzung, verlangt aber Betriebsmittelverwaltung und Schutz.",
          source: "01_rabs_grundlagen-04.pdf, Folie 11"
        },
        {
          title: "Entwicklung: 4. und 5. Generation",
          body: "4. Generation (ab 1980): Zeitalter des PCs mit Mikroprozessoren, zunächst wieder Einbenutzersysteme (DOS, Windows 95), dann zunehmende Vernetzung und Client/Server-Systeme mit mehreren Benutzern (UNIX, Linux, Windows ab NT). Trend: verteilte Betriebssysteme, bei denen mehrere Rechner wie einer erscheinen, für höhere Leistung und Zuverlässigkeit. 5. Generation (ab 1990): mobile Geräte mit Vorläufern wie dem PDA; Symbian OS, RIM Blackberry OS, iOS, Android.",
          source: "01_rabs_grundlagen-04.pdf, Folien 12-13"
        },
        {
          title: "OS-Konzepte im Überblick",
          body: "Zu den Betriebssystemkonzepten zählen Prozesse, Adressräume, Dateisystem, Eingabe/Ausgabe, Schutz der Daten und Kommandozeilen-Interpreter.",
          source: "01_rabs_grundlagen-04.pdf, Folie 15"
        },
        {
          title: "Betriebssystemstruktur",
          body: "Ein Betriebssystem ist ein großes, komplexes Softwaresystem, modularisiert in Komponenten und Subsysteme. Der Kernel umfasst kritische Funktionen; Systemprogramme werden nach Bedarf geladen. Daemons erfüllen Service-Funktionen und werden durch Ereignisse aufgeweckt.",
          source: "01_rabs_grundlagen-04.pdf, Folie 16"
        },
        {
          title: "Monolithische Systeme",
          body: "Monolithische Betriebssysteme kapseln Betriebssystemdienste in einem großen Kern. Dienste werden im Systemmodus ausgeführt; der Systemcall entspricht bei prozedurorientierter Sicht einem Prozeduraufruf.",
          source: "01_rabs_grundlagen-04.pdf, Folien 17-19"
        },
        {
          title: "Monolith: Benutzermodus und Aufbau",
          body: "Im Benutzermodus sind nur nicht-privilegierte Befehle verfügbar, z. B. Zugriff auf den eigenen Prozessadressraum. Ein privilegierter Befehl führt zu einem Trap-Signal; auch der Aufruf eines Systemdienstes per Systemcall führt zu einem Trap mit kontrolliertem Einsprung ins Betriebssystem. Aufbau: Ein Hauptprogramm ruft den gewünschten Dienst auf, Service-Prozeduren führen die System Calls aus, Utility-Prozeduren erledigen Teilaufgaben. Nachladbare Komponenten wie Gerätetreiber gibt es in Unix als statische Libraries, in Windows als DLL.",
          source: "01_rabs_grundlagen-04.pdf, Folien 20-21"
        },
        {
          title: "Mikrokern-Architektur",
          body: "Ziel ist die Minimierung der privilegiert ablaufenden Funktionalität. Betriebssystemkomponenten laufen als Server-Prozesse im nichtprivilegierten Modus und interagieren über Nachrichten. Nur der Mikrokern läuft im Systemmodus.",
          source: "01_rabs_grundlagen-05.pdf, Folien 4-6"
        },
        {
          title: "Virtuelle Maschinen",
          body: "Auf der Hardware läuft ein Basis-Betriebssystem beziehungsweise Virtual Machine Monitor. Darauf laufen virtuelle Maschinen in Form verschiedener Betriebssysteme; Isolation und Unabhängigkeit werden konsequent fortgeführt.",
          source: "01_rabs_grundlagen-05.pdf, Folien 7-8"
        },
        {
          title: "Aufgaben eines Betriebssystems",
          body: "Ein Betriebssystem leistet Erweiterung oder Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln. Beispiele sind Dateiabstraktion, faire Ressourcenzuteilung und Schutz zwischen Anwendungen.",
          tag: "wichtig",
          source: "01_rabs_grundlagen-05.pdf, Folien 9-16"
        },
        {
          title: "Hardwareabstraktion (HAL)",
          body: "Die Hardware Abstraction Layer ist die Schicht des Betriebssystems, die Kern und übrige Software von der Hardware isoliert; nur sie greift auf die Hardware zu. Das erleichtert die Anpassung an andere Prozessorarchitekturen (NetBSD läuft auf über 50 Plattformen). Auch die Firmware (BIOS bzw. UEFI) kann Abstraktionsaufgaben übernehmen; moderne Betriebssysteme setzen nach dem Booten eigene Treiber ein.",
          source: "01_rabs_grundlagen-05.pdf, Folie 13"
        },
        {
          title: "Betriebssystem als Vermittler",
          body: "Anwendungen dürfen nicht direkt, also unkontrolliert, auf die Hardware zugreifen; das Betriebssystem vermittelt. Unterstützende Hardware-Mechanismen sind die Ausführungsmodi des Prozessors (System- und Benutzermodus) und die Adressumsetzung (virtueller Speicher).",
          source: "01_rabs_grundlagen-05.pdf, Folien 16-18"
        },
        {
          title: "Starten des Computers",
          body: "Beim Start läuft das BIOS an, prüft Speicher und wichtige Geräte, durchsucht PCIe/PCI, bestimmt das Bootgerät, kopiert dessen ersten Sektor in den Speicher und lädt danach über Bootloader und Betriebssystem Gerätetreiber, Tabellen, Hintergrundprozesse und Login oder GUI.",
          source: "01_rabs_grundlagen-05.pdf, Folien 20-21"
        }
      ],
      flashcards: [
        {
          front: "Wie definiert DIN 44300 ein Betriebssystem?",
          back: "Die Programme eines digitalen Rechensystems, die zusammen mit den Eigenschaften der Rechenanlage die Basis der möglichen Betriebsarten bilden und insbesondere die Abwicklung von Programmen steuern und überwachen.",
          source: "01_rabs_grundlagen-04.pdf, Folie 5"
        },
        {
          front: "Welchen Richtwert für Fehler in Software nennen die Folien?",
          back: "5 bis 50 Bugs pro 1000 Lines of Code; deshalb ist strukturiertes Design unabdingbar.",
          source: "01_rabs_grundlagen-04.pdf, Folie 5"
        },
        {
          front: "Welche Arten von Betriebssystemen unterscheiden die Folien?",
          back: "Mainframe-, Server-, Multiprozessor-, PC-, Smartphone-, Embedded- und Echtzeit-Betriebssysteme.",
          source: "01_rabs_grundlagen-04.pdf, Folie 6"
        },
        {
          front: "Was kennzeichnet die 1. Generation der Betriebssystem-Entwicklung?",
          back: "1945 bis 1955, Elektronenröhren, noch kein Betriebssystem: Ingenieurteams betreuten die Rechner, programmiert wurde in Maschinensprache oder durch Verdrahtung.",
          source: "01_rabs_grundlagen-04.pdf, Folie 9"
        },
        {
          front: "Was kennzeichnet die 2. Generation der Betriebssystem-Entwicklung?",
          back: "1955 bis 1965, Transistoren und Stapelverarbeitung: Programme auf Lochkarten, später mehrere Jobs nacheinander auf Magnetband (batch), verwaltet vom Betriebssystem.",
          source: "01_rabs_grundlagen-04.pdf, Folie 10"
        },
        {
          front: "Warum führte die 3. Generation Multiprogrammierung ein?",
          back: "Die CPU wartete oft bis zu 90 % der Zeit auf Geräte; statt zu warten wird ein anderer Job bearbeitet. Neues Problem: Verwaltung und Zuteilung der Betriebsmittel.",
          source: "01_rabs_grundlagen-04.pdf, Folie 11"
        },
        {
          front: "Was kennzeichnet die 4. Generation der Betriebssystem-Entwicklung?",
          back: "Ab 1980 PCs mit Mikroprozessoren, zunächst Einbenutzersysteme, dann Vernetzung und Client/Server-Systeme mit mehreren Benutzern; Trend zu verteilten Betriebssystemen.",
          source: "01_rabs_grundlagen-04.pdf, Folie 12"
        },
        {
          front: "Welche Konzepte nennt der Überblick zu Betriebssystemen?",
          back: "Prozesse, Adressräume, Dateisystem, Eingabe/Ausgabe, Schutz der Daten und Kommandozeilen-Interpreter.",
          source: "01_rabs_grundlagen-04.pdf, Folie 15"
        },
        {
          front: "Was umfasst der Kernel?",
          back: "Der Kernel umfasst die kritischen Funktionen des Betriebssystems.",
          source: "01_rabs_grundlagen-04.pdf, Folie 16"
        },
        {
          front: "Was ist ein Daemon?",
          back: "Ein Daemon ist ein Hilfsprozess mit Service-Funktion, der durch Ereignisse aufgeweckt wird.",
          source: "01_rabs_grundlagen-04.pdf, Folie 16"
        },
        {
          front: "Was ist der Unterschied zwischen monolithischem Kern und Mikrokern?",
          back: "Beim monolithischen System sind Betriebssystemdienste in einem großen Kern gekapselt und laufen im Systemmodus. Beim Mikrokern läuft nur der Mikrokern im Systemmodus; andere Komponenten laufen als Server-Prozesse im nichtprivilegierten Modus.",
          source: "01_rabs_grundlagen-04.pdf, Folien 17-19; 01_rabs_grundlagen-05.pdf, Folien 4-6"
        },
        {
          front: "Welche Mechanismen führten monolithische Systeme ein?",
          back: "Verschiedene Ausführungsmodi (System- und User-Modus) mit direktem Hardwarezugriff nur im Systemmodus sowie Traps, Kontextumschaltung und Scheduling.",
          source: "01_rabs_grundlagen-04.pdf, Folie 17"
        },
        {
          front: "Wie ist ein monolithisches Betriebssystem intern aufgebaut?",
          back: "Ein Hauptprogramm ruft den gewünschten Dienst auf, Service-Prozeduren führen die System Calls aus, Utility-Prozeduren erledigen Teilaufgaben; dazu kommen nachladbare Komponenten wie Gerätetreiber.",
          source: "01_rabs_grundlagen-04.pdf, Folie 21"
        },
        {
          front: "Was ist das Ziel der Mikrokern-Architektur?",
          back: "Die im privilegierten Modus ablaufende Funktionalität zu minimieren: Betriebssystemkomponenten laufen als Server-Prozesse im nichtprivilegierten Modus und interagieren über Nachrichten (IPC).",
          source: "01_rabs_grundlagen-05.pdf, Folie 4"
        },
        {
          front: "Wie arbeiten Clients und Server in der Mikrokern-Architektur zusammen?",
          back: "Verwandte Systemdienste werden zu Diensteklassen zusammengefasst und von Serverprozessen realisiert; Clientprozesse nutzen sie über Nachrichtenaustausch.",
          source: "01_rabs_grundlagen-05.pdf, Folie 5"
        },
        {
          front: "Was ist der Nachteil der Mikrokern-Architektur laut Folien?",
          back: "Schlechtere Performance durch Nachrichtenaustausch anstatt Systemcalls.",
          source: "01_rabs_grundlagen-05.pdf, Folie 6"
        },
        {
          front: "Welchen Vorteil hat ein Mikrokern laut Folien?",
          back: "Ein Mikrokern hat deutlich weniger Source Lines of Code als ein monolithischer Kernel.",
          source: "01_rabs_grundlagen-05.pdf, Folie 6"
        },
        {
          front: "Was ist ein Virtual Machine Monitor?",
          back: "Ein Virtual Machine Monitor ist ein Basis-System auf der Hardware, auf dem virtuelle Maschinen als Betriebssysteme laufen.",
          source: "01_rabs_grundlagen-05.pdf, Folie 7"
        },
        {
          front: "Wie laufen virtuelle Maschinen, und welchen Vorteil bieten sie?",
          back: "Sie laufen im User-Mode und müssen trotzdem System Calls absetzen können. Vorteil: Entkopplung, mehrere Server und Betriebssysteme laufen auf einer Hardware, ohne dass der Crash eines Servers die anderen beeinflusst.",
          source: "01_rabs_grundlagen-05.pdf, Folie 8"
        },
        {
          front: "Welche drei Aufgaben eines Betriebssystems nennt der Foliensatz?",
          back: "Erweiterung/Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln.",
          source: "01_rabs_grundlagen-05.pdf, Folie 9"
        },
        {
          front: "Was bedeutet Erweiterung oder Veredelung der Hardware?",
          back: "Die Hardware beschränkt sich auf das Notwendige und ist schwer zu programmieren; das Betriebssystem stellt komplexe Funktionen bereit, z. B. findet es beim Schreiben auf die Festplatte automatisch freie Blöcke.",
          source: "01_rabs_grundlagen-05.pdf, Folie 10"
        },
        {
          front: "Was bedeutet Abstraktion der Hardware?",
          back: "Das Betriebssystem verbirgt die Unterschiede der Rechner und Geräte und bietet Anwendungen eine einheitliche Sicht, eine abstrakte Maschine; z. B. abstrahieren Dateien den externen Speicher.",
          source: "01_rabs_grundlagen-05.pdf, Folie 11"
        },
        {
          front: "Was ist die Hardware Abstraction Layer (HAL)?",
          back: "Die Schicht des Betriebssystems, die Kern und übrige Software von der Hardware isoliert; nur sie kann auf die Hardware zugreifen.",
          source: "01_rabs_grundlagen-05.pdf, Folie 13"
        },
        {
          front: "Was ist ein Betriebsmittel, und was verlangt seine Verwaltung?",
          back: "Alles, was eine Anwendung zur Ausführung benötigt: Prozessor, Speicher, Geräte. Im Mehrprozess- und Mehrbenutzerbetrieb sind Fairness (gerechte Verteilung) und Sicherheit (Schutz voreinander) notwendig.",
          source: "01_rabs_grundlagen-05.pdf, Folie 14"
        },
        {
          front: "Welche Hardware-Mechanismen unterstützen das Betriebssystem als Vermittler?",
          back: "Die Ausführungsmodi des Prozessors (System- und Benutzermodus) und die Adressumsetzung (virtueller Speicher).",
          source: "01_rabs_grundlagen-05.pdf, Folie 16"
        },
        {
          front: "Welche Rolle hat das BIOS beim Starten des Computers?",
          back: "Es startet nach dem Einschalten, prüft Speicher und wichtige Geräte, durchsucht Bussysteme, bestimmt das Bootgerät und kopiert dessen ersten Sektor in den Speicher.",
          source: "01_rabs_grundlagen-05.pdf, Folie 20"
        },
        {
          front: "Was passiert beim Booten, nachdem der erste Sektor des Bootgeräts ausgeführt wurde?",
          back: "Der Bootloader wird von der aktiven Partition geladen und startet das Betriebssystem. Dieses fragt das BIOS nach der Konfiguration, sucht und lädt Gerätetreiber in den Kernel, initialisiert interne Tabellen und Hintergrundprozesse und startet Login-Programm oder GUI.",
          source: "01_rabs_grundlagen-05.pdf, Folie 21"
        }
      ]
    },
    {
      id: "syscalls-schutz-shell",
      title: "Systemaufrufe, Schutz & Shell",
      icon: "🛡️",
      cards: [
        {
          title: "Systemaufrufe",
          body: "Systemaufrufe bilden die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem. Sie sind meist in Bibliotheksfunktionen gekapselt, hardwareabhängig und in der Regel durchnummeriert; die Nummer wird vor dem TRAP-Befehl in ein festes Register geschrieben.",
          tag: "def",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          title: "Ablauf eines Systemaufrufs",
          body: "Das Betriebssystem sichert zunächst den vollständigen Prozessorstatus in der Thread- beziehungsweise Prozesstabelle. Der aufrufende Thread kann blockiert werden; die Rückkehr aus dem Betriebssystem erfolgt über den Scheduler.",
          source: "04_rabs-os-konzepte.pdf, Folie 8"
        },
        {
          title: "Beispiel read()",
          body: "<code>read()</code> wird mit Dateihandler, Buffer und Anzahl der Zeichen parametrisiert. Die Funktion liefert die Zahl der tatsächlich gelesenen Zeichen zurück; im Fehlerfall wird der Wert auf <code>-1</code> gesetzt und sollte geprüft werden.",
          source: "04_rabs-os-konzepte.pdf, Folie 9"
        },
        {
          title: "Typische Systemaufrufe",
          body: "Zum Prozessmanagement gehören unter anderem <code>fork()</code>, <code>waitpid()</code>, <code>execve()</code> und <code>exit()</code>. Zum Dateimanagement gehören <code>open()</code>, <code>close()</code>, <code>read()</code>, <code>write()</code> und <code>lseek()</code>.",
          source: "04_rabs-os-konzepte.pdf, Folie 10"
        },
        {
          title: "Verzeichnis- und sonstige Systemaufrufe",
          body: "Zum Verzeichnismanagement gehören <code>mkdir()</code> (Verzeichnis erzeugen) und <code>mount()</code> (Datenträger in das Dateisystem einhängen). Weitere typische Aufrufe: <code>chdir()</code> (Arbeitsverzeichnis wechseln), <code>chmod()</code> (Zugriffsrechte ändern), <code>chown()</code> (Eigentümer ändern), <code>kill()</code> (Signal an einen Prozess senden) und <code>time()</code> (Uhrzeit).",
          source: "04_rabs-os-konzepte.pdf, Folie 11"
        },
        {
          title: "Systemaufrufe: Windows und UNIX",
          body: "Windows-Programme sind normalerweise ereignisgesteuert. Unter UNIX gibt es praktisch eine 1:1-Abbildung zwischen Systemaufrufen und Bibliotheksfunktionen. Unter Windows sind beide entkoppelt: Die Win32-API bietet eine extrem große Zahl von Funktionen, viele arbeiten im Benutzermodus, und die Schnittstelle ist nicht konsistent, weil sie sich mit der Windows-Version ändert und Kompatibilität zu teils sehr alten Systemen hält.",
          source: "04_rabs-os-konzepte.pdf, Folie 15"
        },
        {
          title: "Aufgabenbereiche der Sicherheit",
          body: "Zugriffskontrolle: Zugriff von Benutzern auf Gesamtsystem, Subsysteme und Daten sowie von Prozessen auf Ressourcen und Objekte. Kontrolle des Informationsflusses: keine Weitergabe vertraulicher Daten an Unautorisierte. Zertifizierung: Nachweis, dass das System die gewünschten Sicherheitseigenschaften durchsetzt.",
          source: "04_rabs-os-konzepte.pdf, Folie 17"
        },
        {
          title: "Sicherheit und Schutz",
          body: "Sicherheit (security) stellt sicher, dass Unautorisierte nicht auf Daten zugreifen können; sie schließt technische, administrative, rechtliche und politische Fragen ein. Schutz (protection) sind die spezifischen Betriebssystemmechanismen, mit denen Sicherheit gewährleistet wird. Die Begriffe sind nicht immer klar abgegrenzt.",
          tag: "def",
          source: "04_rabs-os-konzepte.pdf, Folie 18"
        },
        {
          title: "Schutzziele (CIA)",
          body: "1. Vertraulichkeit: Geheime Daten bleiben geheim; der Besitzer legt fest, wem sie zugänglich sind, das System garantiert die Zugriffskontrolle. 2. Integrität: Unautorisierte Benutzer oder Systemdienste können Daten nicht ohne Erlaubnis des Besitzers ändern, löschen oder verfälschen. 3. Verfügbarkeit: Niemand kann das System so stören, dass es nur eingeschränkt oder gar nicht benutzbar ist, z. B. durch Denial-of-Service; schwerer zu realisieren als 1 und 2. Englisch: confidentiality, integrity, availability.",
          tag: "wichtig",
          source: "04_rabs-os-konzepte.pdf, Folie 19"
        },
        {
          title: "Datenschutz",
          body: "Datenschutz (privacy) schützt Personen vor dem Missbrauch ihrer persönlichen Daten. Er ist das übergeordnete Ziel, dem sich die Schutz- und Sicherheitsmechanismen der Systeme unterordnen, und ein gesellschaftliches, rechtliches und moralisches Thema mit gesetzlichen Regelungen wie der DSGVO.",
          source: "04_rabs-os-konzepte.pdf, Folie 20"
        },
        {
          title: "Principle of Least Authority",
          body: "Programme, Benutzer und Systeme sollen nur so viele Privilegien bekommen, wie unbedingt notwendig ist, um ihre Jobs zu erledigen.",
          tag: "wichtig",
          source: "04_rabs-os-konzepte.pdf, Folie 21"
        },
        {
          title: "UNIX-Zugriffskontrolle",
          body: "UNIX führt Benutzer und Benutzergruppen ein; <code>root</code> ist Administrator. Prozesse und Dateien haben Eigentümer und Eigentümergruppe. Dateizugriff wird über 9 Rechtebits festgelegt: je 3 Bits für Eigentümer, Gruppe und alle anderen.",
          source: "04_rabs-os-konzepte.pdf, Folien 22-23"
        },
        {
          title: "Schutzdomänen und Schutzmatrix",
          body: "Objekte können in mehreren Schutzdomänen enthalten sein, mit gleichen oder unterschiedlichen Rechten. Die Schutzmatrix legt fest, wer welche Operationen auf welchen Objekten ausführen darf: Zeilen sind Domänen, Spalten Objekte, die Einträge die Rechte (z. B. Read, Write, Execute).",
          source: "04_rabs-os-konzepte.pdf, Folien 24-25"
        },
        {
          title: "ACLs und Capabilities",
          body: "UNIX und Windows nutzen eine Mischform aus ACLs und Capabilities. Rechte an Objekten werden über ACLs spezifiziert, die Prüfung erfolgt beim Öffnen; Datei- oder Geräte-Handles wirken anschließend als Capability.",
          source: "04_rabs-os-konzepte.pdf, Folie 26"
        },
        {
          title: "Textuelle Shell",
          body: "Eine textuelle Shell ist ein Command Line Interface. Sie ist komplexer als graphische Shells, aber zuverlässiger, erlaubt einfache Automatisierung mit Skripten oder Batch-Dateien und unterstützt sicheren Fernzugriff via SSH.",
          source: "04_rabs-os-konzepte.pdf, Folie 28"
        },
        {
          title: "Pipes und Umleitungen in der Shell",
          body: "Die Shell unterstützt Eingabe- und Ausgabeumleitung, Hintergrundausführung und Pipes. Mit Pipes dient die Ausgabe eines Prozesses als Eingabe des nächsten; die UNIX-Philosophie kombiniert viele kleine Kommandos über Pipes.",
          source: "04_rabs-os-konzepte.pdf, Folien 30-31"
        },
        {
          title: "Shell-Skripte",
          body: "Shell-Skripte ergänzen Kommandos um Elemente zur Ablaufsteuerung wie Bedingungen, Schleifen und Prozeduren. Beispiel der Folie: Für alle <code>.txt</code>-Dateien wird eine vorhandene Zieldatei zuerst nach <code>.bak</code> umbenannt und dann die Datei verschoben, sodass nichts überschrieben wird.",
          source: "04_rabs-os-konzepte.pdf, Folie 33"
        },
        {
          title: "Graphische Benutzungsschnittstellen",
          body: "Graphische Benutzungsschnittstellen nutzen visuelle Interaktion über Tastatur und Zeigegerät. Elemente sind Windows, Icons, Menus und Pointers. Sie sind intuitiver, bilden aber nicht alle Systemaufgaben ab und erschweren Automatisierung.",
          source: "04_rabs-os-konzepte.pdf, Folie 34"
        }
      ],
      flashcards: [
        {
          front: "Was sind Systemaufrufe?",
          back: "Die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem; meist in Bibliotheksfunktionen gekapselt und hardwareabhängig.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          front: "Warum kehrt ein Systemaufruf nicht unbedingt sofort zum aufrufenden Thread zurück?",
          back: "Weil der aufrufende Thread blockiert werden kann und die Rückkehr aus dem Betriebssystem über den Scheduler erfolgt, der den nächsten fortzuführenden Thread bestimmt.",
          source: "04_rabs-os-konzepte.pdf, Folie 8"
        },
        {
          front: "Was unterscheidet Systemaufrufe unter UNIX und Windows?",
          back: "UNIX: praktisch 1:1-Abbildung zwischen Systemaufrufen und Bibliotheksfunktionen. Windows: beide entkoppelt; die Win32-API hat sehr viele Funktionen, viele im Benutzermodus, und keine konsistente Schnittstelle über die Versionen.",
          source: "04_rabs-os-konzepte.pdf, Folie 15"
        },
        {
          front: "Was unterscheidet Sicherheit von Schutz?",
          back: "Sicherheit stellt sicher, dass Unautorisierte nicht auf Daten zugreifen können. Schutz sind die Betriebssystemmechanismen, mit denen Sicherheit gewährleistet wird.",
          source: "04_rabs-os-konzepte.pdf, Folie 18"
        },
        {
          front: "Welche drei Schutzziele nennt die Vorlesung?",
          back: "Vertraulichkeit, Integrität und Verfügbarkeit (CIA: confidentiality, integrity, availability).",
          source: "04_rabs-os-konzepte.pdf, Folie 19"
        },
        {
          front: "Welches Schutzziel ist am schwersten zu realisieren und warum?",
          back: "Verfügbarkeit: Niemand darf das System so stören können, dass es nur eingeschränkt oder gar nicht benutzbar ist, z. B. durch Denial-of-Service-Angriffe.",
          source: "04_rabs-os-konzepte.pdf, Folie 19"
        },
        {
          front: "Was bedeutet POLA?",
          back: "POLA steht für Principle of Least Authority: Programme, Benutzer und Systeme erhalten nur so viele Privilegien, wie für ihre Aufgabe notwendig sind.",
          source: "04_rabs-os-konzepte.pdf, Folie 21"
        },
        {
          front: "Wie funktionieren UNIX-Rechtebits grundsätzlich?",
          back: "Es gibt je drei Bits für Eigentümer, Eigentümergruppe und alle anderen; literale Rechte sind r, w und x, oktal 4, 2 und 1.",
          source: "04_rabs-os-konzepte.pdf, Folien 22-23"
        },
        {
          front: "Was legt eine Schutzmatrix fest?",
          back: "Wer (Domäne) welche Operationen auf welchen Objekten ausführen darf.",
          source: "04_rabs-os-konzepte.pdf, Folie 25"
        },
        {
          front: "Wie ist die Shell zum Betriebssystem einzuordnen?",
          back: "Die Shell ist kein Teil des Betriebssystems, nutzt aber dessen Eigenschaften.",
          source: "04_rabs-os-konzepte.pdf, Folie 28"
        },
        {
          front: "Was ist eine Pipe in der Shell?",
          back: "Ein Mechanismus, bei dem die Ausgabe eines Prozesses als Eingabe des nächsten dient.",
          source: "04_rabs-os-konzepte.pdf, Folie 30"
        },
        {
          front: "Wofür steht WIMP?",
          back: "WIMP steht für Windows, Icons, Menus und Pointers.",
          source: "04_rabs-os-konzepte.pdf, Folie 34"
        }
      ]
    },
    {
      id: "c-systemprogrammierung",
      title: "C & Systemprogrammierung",
      icon: "💻",
      cards: [
        {
          title: "C im Kontext von UNIX",
          body: "C entstand im Kontext von UNIX. Die Sprache ist laut Folien bis heute für Systemprogrammierung und maschinennahe Programmierung attraktiv; ihre Bedeutung für Anwendungsentwicklung ist dagegen stark zurückgegangen.",
          source: "3_rabs-c-intro.pdf, Folie 5"
        },
        {
          title: "C und Java im Vergleich",
          body: "C steht in den Folien für maschinennahe und prozedurale Programmierung, Quelltext-Kompatibilität und direkte Ausführung auf dem Betriebssystem. Java steht für Anwendungsprogrammierung, Objektorientierung, Bytecode-Kompatibilität und Ausführung auf einer JVM.",
          source: "3_rabs-c-intro.pdf, Folie 6"
        },
        {
          title: "Hello-World-Struktur",
          body: "Header Files ermöglichen den Zugriff auf Bibliotheksfunktionen. Ein C-Programm nutzt eine <code>main()</code>-Methode, Blöcke in geschweiften Klammern, Kommentare, <code>printf()</code>, Strings in Anführungszeichen und ein <code>return</code>-Statement.",
          source: "3_rabs-c-intro.pdf, Folie 7"
        },
        {
          title: "Basistypen",
          body: "Die Tabelle der Folie nennt <code>char</code> (1 Byte, −128 bis 127, Zeichen), <code>int</code> (2 Byte, −32768 bis 32767, ganze Zahlen), <code>float</code> (4 Byte, 3.4E−38 bis 3.4E+38, Gleitkommazahlen) und <code>double</code> (8 Byte, 1.7E−308 bis 1.7E+308, große Gleitkommazahlen).",
          source: "3_rabs-c-intro.pdf, Folie 9"
        },
        {
          title: "Variablen",
          body: "Eine Variable besteht aus Typ, Name und Wert. Durch Deklaration wird ihr Typ festgelegt und damit, wie sie im Speicher repräsentiert wird. Der Wert wird durch Zuweisungen verändert.",
          tag: "def",
          source: "3_rabs-c-intro.pdf, Folie 10"
        },
        {
          title: "Kontrollfluss",
          body: "Bedingte Verzweigung mit <code>if (n > 5) { … } else { … }</code>: Ist die Bedingung wahr, läuft der if-Rumpf, sonst der else-Rumpf; danach geht es mit der Anweisung nach dem if weiter. Schleifen: <code>for (int i = 0; i < 3; i++) { … }</code> oder <code>while (i < 3) { …; i++; }</code>; beide Beispiele geben dreimal „Hello RABS“ aus.",
          source: "3_rabs-c-intro.pdf, Folien 11-13"
        },
        {
          title: "Funktionen",
          body: "Eine Funktion ist ein benannter Code-Block mit Eingabeparametern und Rückgabewerten. In der Funktionsdefinition werden Name, Parameterliste und Rückgabetyp vereinbart.",
          tag: "def",
          source: "3_rabs-c-intro.pdf, Folie 14"
        },
        {
          title: "Pointer",
          body: "Pointer sind Variablen, die direkt Speicheradressen enthalten. Die Folien nennen Pointer als Konstrukt, das C für Systemprogrammierung attraktiv macht.",
          tag: "wichtig",
          source: "3_rabs-c-intro.pdf, Folie 16"
        },
        {
          title: "Adress- und Dereferenzierungsoperator",
          body: "<code>&</code> liefert die Adresse eines Werts, <code>*</code> liefert den Wert, auf den ein Pointer zeigt. Beispiel: <code>char c = 65; char* p = &c; *p = 88; char x = *p;</code> Hier zeigt <code>p</code> auf <code>c</code>, <code>*p = 88</code> ändert also <code>c</code>, und <code>x</code> erhält 88.",
          tag: "wichtig",
          source: "3_rabs-c-intro.pdf, Folie 17"
        },
        {
          title: "Array-Grenzen und Stack",
          body: "Im Beispiel werden zwei <code>char</code>-Arrays nebeneinander auf dem Stack angelegt. Beim Angriff wird über die Grenzen des Arrays hinausgeschrieben und der Inhalt von <code>password</code> überschrieben. C-Style-Arrays bieten nur teilweise Container-Abstraktion.",
          source: "3_rabs-c-intro.pdf, Folien 19-21"
        },
        {
          title: "Systemaufrufe in C",
          body: "Bei Systemprogrammierung werden durch Systemaufrufe Funktionen der Betriebssystem-API genutzt. Dafür sind Kontextwechsel zwischen User Mode und Kernel Mode notwendig; die Library kapselt den Systemaufruf.",
          source: "3_rabs-c-intro.pdf, Folie 23"
        },
        {
          title: "Fehlerbehandlung bei Systemaufrufen",
          body: "Die Fehlerbehandlung erfolgt über den Rückgabewert. Im Fehlerfall geben Systemaufrufe den Wert <code>-1</code> zurück. Weitere Informationen können aus der globalen Variable <code>errno</code> gelesen werden; dafür wird <code>&lt;errno.h&gt;</code> importiert.",
          source: "3_rabs-c-intro.pdf, Folie 24"
        },
        {
          title: "Dateizugriff mit FILE*",
          body: "Das Datei-Beispiel nutzt ein weiteres Header-File mit den Funktionen für den Systemaufruf. Der Datentyp <code>FILE*</code> enthält einen Pointer auf eine Datei.",
          source: "3_rabs-c-intro.pdf, Folie 26"
        }
      ],
      flashcards: [
        {
          front: "Warum ist C laut Folien für Systemprogrammierung attraktiv?",
          back: "Wegen maschinennaher Programmierung im Kontext von UNIX; Pointer als direkte Speicheradress-Variablen sind dabei ein zentrales Konstrukt.",
          source: "3_rabs-c-intro.pdf, Folien 5 und 16"
        },
        {
          front: "Wie wird C laut Vergleich ausgeführt?",
          back: "C wird direkt auf dem Betriebssystem ausgeführt.",
          source: "3_rabs-c-intro.pdf, Folie 6"
        },
        {
          front: "Woraus besteht eine Variable in C?",
          back: "Aus einem Typ, einem Namen und einem Wert.",
          source: "3_rabs-c-intro.pdf, Folie 10"
        },
        {
          front: "Was ist ein Pointer?",
          back: "Ein Pointer ist eine Variable, die direkt eine Speicheradresse enthält.",
          source: "3_rabs-c-intro.pdf, Folie 16"
        },
        {
          front: "Was liefern die Operatoren & und * bei Pointern?",
          back: "<code>&</code> (Adressoperator) liefert die Adresse eines Werts, <code>*</code> (Dereferenzierungsoperator) den Wert, auf den der Pointer zeigt.",
          source: "3_rabs-c-intro.pdf, Folie 17"
        },
        {
          front: "Welchen Wert hat c nach <code>char c = 65; char* p = &c; *p = 88;</code>?",
          back: "88, weil <code>p</code> auf <code>c</code> zeigt und <code>*p = 88</code> den Wert an dieser Adresse überschreibt.",
          source: "3_rabs-c-intro.pdf, Folie 17"
        },
        {
          front: "Was zeigt das Array-Beispiel zum Stack?",
          back: "Dass fehlende Überwachung der Array-Grenzen dazu führen kann, dass über ein Array hinausgeschrieben und ein benachbartes Array überschrieben wird.",
          source: "3_rabs-c-intro.pdf, Folien 19-21"
        },
        {
          front: "Wie wird ein Fehler bei Systemaufrufen angezeigt?",
          back: "Im Fehlerfall geben Systemaufrufe den Wert -1 zurück; Details können über die globale errno-Variable gelesen werden.",
          source: "3_rabs-c-intro.pdf, Folie 24"
        }
      ]
    },
    {
      id: "speicherverwaltung",
      title: "Speicherverwaltung",
      icon: "🧠",
      cards: [
        {
          title: "Ziele der Speicherverwaltung",
          body: "Speicherverwaltung soll effizienten Zugriff auf physikalischen Arbeitsspeicher bereitstellen, Adressräume von Betriebssystem und Prozessen gegen illegale Zugriffe schützen und eine Schnittstelle für gemeinsame Speichernutzung bieten.",
          tag: "wichtig",
          source: "02_rabs_speicher.pdf, Folie 5"
        },
        {
          title: "Probleme der Speicherverwaltung",
          body: "Das Betriebssystem muss Speicherbereiche an Prozesse zuteilen, genug Speicher finden, zusätzliche Speicheranforderungen behandeln, Programme trotz Adressen verschiebbar machen, Prozesse schützen, begrenzten Hauptspeicher verwalten und Transparenz für Anwendungen bieten.",
          source: "02_rabs_speicher.pdf, Folie 6"
        },
        {
          title: "Speicherhierarchie",
          body: "Der Prozessor greift direkt auf Register und internen Hauptspeicher zu. Registerzugriffe liegen innerhalb eines Taktzyklus, RAM-Zugriffe dauern länger, externe Speichermedien noch länger. Deshalb nutzt man eine Hierarchie verschieden schneller und verschieden großer Speicher.",
          source: "02_rabs_speicher.pdf, Folie 8"
        },
        {
          title: "Zeitliche und räumliche Lokalität",
          body: "Caching funktioniert, weil gut strukturierte Programme zuletzt verwendete Adressen wahrscheinlich erneut verwenden (zeitliche Lokalität) und häufig auf Adressen in der Nähe vorheriger Zugriffe zugreifen (räumliche Lokalität).",
          source: "02_rabs_speicher.pdf, Folie 9"
        },
        {
          title: "Prozessor-Caches",
          body: "L1-Cache speichert häufig benötigte Befehle und Daten. L2-Cache speichert Daten des RAM. L3-Cache wird bei Multicore-Prozessoren zur Sicherstellung des Cache-Kohärenz-Protokolls und zum Abgleich der Caches aller Kerne genutzt.",
          source: "02_rabs_speicher.pdf, Folie 11"
        },
        {
          title: "Cache-Hit und Cache-Miss",
          body: "Bei einem Cache-Hit befinden sich die Daten im Cache beziehungsweise auf der obersten Cache-Ebene. Bei einem Cache-Miss müssen Daten von einer unteren Speicherebene nachgeladen werden; Trefferzeit ist deutlich kleiner als Fehlschlagszeit.",
          tag: "def",
          source: "02_rabs_speicher.pdf, Folie 13"
        },
        {
          title: "Hit-Ratio und Gründe für Cache-Misses",
          body: "Die Performanz eines Caches misst die Hit-Ratio = Hits / (Hits + Misses). Gründe für Misses: Cold-Start-Misses beim ersten Zugriff auf einen Speicherblock, Capacity-Misses wegen der begrenzten Cachegröße und Collision-Misses in nicht-assoziativen Caches, wenn der zugewiesene Cache-Platz schon belegt ist.",
          tag: "formel",
          source: "02_rabs_speicher.pdf, Folie 14"
        },
        {
          title: "Direkte Speicherverwaltung",
          body: "Bei direkter Speicherverwaltung läuft immer genau ein Programm neben dem Betriebssystem. Der Speicher wird nur zwischen beiden geteilt, beide liegen an festen Adressen, eine MMU ist nicht nötig. Das gibt es nur noch in einfachen eingebetteten Systemen. Alle anderen Systeme nutzen Auslagerung mit logischem Adressraum, Swapping und Paging.",
          source: "02_rabs_speicher.pdf, Folien 17-18"
        },
        {
          title: "MMU und Adressumsetzung",
          body: "Bei Mehrprogrammbetrieb schützt die MMU Betriebssystem und Programme voneinander und erlaubt das Laden an unterschiedlichen Adressen. Virtuelle Adressen werden durch Hardware-MMU auf physische Adressen umgesetzt, wobei Zugriffsrechte geprüft werden.",
          source: "02_rabs_speicher.pdf, Folie 19"
        },
        {
          title: "Adressraum",
          body: "Ein Adressraum ist die Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann. Jeder Prozess erhält einen eigenen Adressraum; eine reale Adresse ergibt sich in der einfachen Variante aus Basisadresse plus Adresse im Adressraum.",
          tag: "def",
          source: "02_rabs_speicher.pdf, Folie 20"
        },
        {
          title: "Speicherschutz",
          body: "Das Betriebssystem muss sicherstellen, dass jeder Prozess einen eigenen Adressraum besitzt. Es selbst hat Zugriff auf alle Prozess-Adressräume; Benutzerprozesse haben keinen Zugriff auf den Adressraum des Betriebssystems oder anderer Prozesse.",
          source: "02_rabs_speicher.pdf, Folie 21"
        },
        {
          title: "Basis- und Limit-Register",
          body: "Das Basis-Register hält die kleinste Adresse, auf die der Prozess Zugriff hat. Das Limit-Register enthält die Größe des Adressraums. Zugriffe außerhalb dieses Bereichs führen zu einem Ausnahmefehler beziehungsweise Trap.",
          source: "02_rabs_speicher.pdf, Folie 22"
        },
        {
          title: "Swapping",
          body: "Beim Swapping wird ein Prozess komplett in den Speicher geladen, kann eine Zeit laufen und wird dann komplett ausgelagert. Ein Teil der Festplatte dient dazu, gerade nicht ausgeführte Prozesse aus dem Hauptspeicher auszulagern.",
          source: "02_rabs_speicher.pdf, Folien 24-26"
        },
        {
          title: "Fragmentierung beim Swapping",
          body: "Beim Swapping entstehen Lücken im Speicher. Sie lassen sich durch Speicherverdichtung zusammenfassen, das ist aber zeitaufwändig und wird normalerweise nicht eingesetzt. Für dynamisch wachsenden Speicher wird beim Einlagern mehr reserviert, nicht genutzter Speicher nicht mit ausgelagert, und jeder Prozess hat ein spezielles Speicherlayout mit Heap und Stack.",
          source: "02_rabs_speicher.pdf, Folie 27"
        },
        {
          title: "Virtueller Speicher und Paging",
          body: "Virtueller Speicher bricht den Adressraum in Seiten auf. MMU und Betriebssystem bilden virtuelle auf physische Adressen ab. Paging teilt physischen Speicher in Frames und logischen Adressraum in gleich große Pages; die Seitentabelle enthält das Mapping und ein Present-/Absent-Bit.",
          tag: "wichtig",
          source: "02_rabs_speicher.pdf, Folien 28-33"
        },
        {
          title: "Page Fault",
          body: "Führt eine virtuelle Adresse auf eine ausgelagerte Seite, entsteht ein Seitenfehler. Das Betriebssystem lagert einen wenig benutzten Seitenrahmen aus, lädt die angeforderte Seite, aktualisiert die Seitentabelle und führt den auslösenden Befehl erneut aus.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          title: "Seitengröße und TLB",
          body: "Große Seiten bedeuten mehr Treffer pro Seitenaufruf und weniger Einlagerungen, aber mehr interne Fragmentierung. Kleine Seiten führen zu langen Seitentabellen. Der Translation Lookaside Buffer ist spezielle Hardwareunterstützung, im Prinzip ein Teil der MMU.",
          source: "02_rabs_speicher.pdf, Folie 35"
        },
        {
          title: "Virtueller Speicher: Vor- und Nachteile",
          body: "Vorteile: Programme dürfen größer als der Arbeitsspeicher sein, Prozesse müssen nicht komplett im Speicher liegen, Adressierung ist aus Programmierersicht linear ohne Fragmentierung, Code und Daten können gemeinsam genutzt werden, und Speicherschutz ist einfach. Nachteile: aufwendige Adressierung, zusätzliche Verwaltungsstrukturen (Page-Tables), ein Teil der Festplatte dient als Auslagerungsdatei, komplexe Seitenersetzungsstrategien.",
          tag: "wichtig",
          source: "02_rabs_speicher.pdf, Folie 36"
        },
        {
          title: "Windows-Speicherbereiche",
          body: "Die Windows-Beispiele nennen unter anderem für Hardware reservierten Speicher, verwendeten Speicher, geänderte Seiten, freien Speicher, Auslagerungsdatei, ausgelagerten Pool und nicht ausgelagerten Pool.",
          source: "02_rabs_speicher.pdf, Folien 38-46"
        }
      ],
      flashcards: [
        {
          front: "Welche drei Ziele hat Speicherverwaltung laut Folien?",
          back: "Effizienter Zugriff auf physikalischen Arbeitsspeicher, Schutz der Adressräume gegen illegale Zugriffe und eine Schnittstelle für gemeinsame Speichernutzung.",
          source: "02_rabs_speicher.pdf, Folie 5"
        },
        {
          front: "Warum funktioniert Caching?",
          back: "Wegen zeitlicher Lokalität und räumlicher Lokalität gut strukturierter Programme.",
          source: "02_rabs_speicher.pdf, Folie 9"
        },
        {
          front: "Was ist ein Cache-Hit?",
          back: "Bei einem Cache-Hit liegen die Daten im Cache beziehungsweise auf der obersten Cache-Ebene.",
          source: "02_rabs_speicher.pdf, Folie 13"
        },
        {
          front: "Was ist ein Cache-Miss?",
          back: "Bei einem Cache-Miss müssen Daten von einer unteren Speicherebene nachgeladen werden.",
          source: "02_rabs_speicher.pdf, Folie 13"
        },
        {
          front: "Wie berechnet sich die Hit-Ratio eines Caches?",
          back: "Hit-Ratio = Hits / (Hits + Misses).",
          source: "02_rabs_speicher.pdf, Folie 14"
        },
        {
          front: "Welche drei Arten von Cache-Misses nennen die Folien?",
          back: "Cold-Start-Misses (erster Zugriff auf einen Block), Capacity-Misses (begrenzte Cachegröße) und Collision-Misses (zugewiesener Platz in nicht-assoziativen Caches schon belegt).",
          source: "02_rabs_speicher.pdf, Folie 14"
        },
        {
          front: "Wann genügt direkte Speicherverwaltung?",
          back: "Wenn genau ein Programm neben dem Betriebssystem läuft, etwa in einfachen eingebetteten Systemen; dann ist keine MMU erforderlich.",
          source: "02_rabs_speicher.pdf, Folie 18"
        },
        {
          front: "Was macht die MMU?",
          back: "Sie setzt virtuelle Adressen auf physische Adressen um und prüft Zugriffsrechte.",
          source: "02_rabs_speicher.pdf, Folie 19"
        },
        {
          front: "Was ist ein Adressraum?",
          back: "Ein Adressraum ist die Menge der Adressen, die ein Prozess zur Speicheradressierung benutzen kann.",
          source: "02_rabs_speicher.pdf, Folie 20"
        },
        {
          front: "Was passiert beim Swapping?",
          back: "Beim Swapping wird ein Prozess komplett eingelagert, kann laufen und wird danach wieder komplett ausgelagert.",
          source: "02_rabs_speicher.pdf, Folie 24"
        },
        {
          front: "Wie wird Fragmentierung beim Swapping behandelt?",
          back: "Lücken können durch Speicherverdichtung zusammengefasst werden; das ist aber zeitaufwändig und wird normalerweise nicht eingesetzt.",
          source: "02_rabs_speicher.pdf, Folie 27"
        },
        {
          front: "Was passiert bei einem Page Fault?",
          back: "Das Betriebssystem lädt die ausgelagerte Seite in den Speicher, aktualisiert die Seitentabelle und führt den auslösenden Befehl erneut aus; dafür kann ein wenig benutzter Seitenrahmen ausgelagert werden.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          front: "Welche Information liefert das Present-/Absent-Bit?",
          back: "Das Present-/Absent-Bit im Seitentabelleneintrag zeigt, ob eine Seite im Speicher liegt oder ausgelagert ist.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          front: "Welche Nachteile haben große beziehungsweise kleine Seiten?",
          back: "Große Seiten verursachen mehr interne Fragmentierung; kleine Seiten führen zu langen Seitentabellen.",
          source: "02_rabs_speicher.pdf, Folie 35"
        },
        {
          front: "Welche Vor- und Nachteile hat virtueller Speicher?",
          back: "Vorteile: Programme größer als der Arbeitsspeicher, Prozesse nur teilweise im Speicher, lineare Adressierung, gemeinsamer Code, einfacher Speicherschutz. Nachteile: aufwendige Adressierung, Page-Tables, Auslagerungsdatei, komplexe Seitenersetzung.",
          source: "02_rabs_speicher.pdf, Folie 36"
        }
      ]
    },
    {
      id: "dateisysteme",
      title: "Dateien & Dateisysteme",
      icon: "🗂️",
      cards: [
        {
          title: "Datei-Konzept",
          body: "Eine Datei ist das Konzept zur dauerhaften, persistenten Speicherung von Daten, Informationen und Programmen auf Platten oder anderen externen Speichermedien. Sie abstrahiert physikalische Speichereigenschaften als logische Speichereinheit.",
          tag: "def",
          source: "03_rabs_dateisystem.pdf, Folie 4"
        },
        {
          title: "Speichermedien",
          body: "Festplatten erlauben blockorientierten und wahlfreien Zugriff. USB-Sticks und SSDs nutzen Flash-EEPROMs oder SDRAM, haben keine beweglichen Teile und kürzere Zugriffszeiten; Magnetband bietet nur sequenziellen Zugriff und dient heute vor allem Datenspeicherung und Archivierung.",
          source: "03_rabs_dateisystem.pdf, Folien 7-11"
        },
        {
          title: "Dateisysteme",
          body: "Dateisysteme speichern Daten und Programme persistent in Dateien. Sie sind eine Betriebssystemabstraktion zur Nutzung von Hintergrundspeichern und bestehen aus Dateien, Verzeichnissen und Partitionen.",
          source: "03_rabs_dateisystem.pdf, Folie 19"
        },
        {
          title: "Anforderungen an Dateisysteme",
          body: "Dateisysteme sollen Persistenz, flexible Benennung, mehrere Namen für eine Datei, geschützte oder gemeinsame Benutzung, verschiedene Zugriffsmuster und wenig Overhead für Verwaltungs- und Metadaten bieten.",
          source: "03_rabs_dateisystem.pdf, Folie 20"
        },
        {
          title: "Bestandteile und Organisation",
          body: "Ein Dateisystem besteht aus Dateien (speichern Daten oder Programme, repräsentieren auch E/A-Geräte), Verzeichnissen (fassen Dateien und Verzeichnisse zusammen, enthalten Verwaltungsinformationen) und Partitionen (trennen Dateimengen physisch, z. B. Festplatte, oder logisch, z. B. Teilbereich einer Platte). Die Struktur ist meist hierarchisch; das Device-Directory (Volume Table) einer Partition enthält Informationen über deren Dateien.",
          source: "03_rabs_dateisystem.pdf, Folien 21-22"
        },
        {
          title: "Dateien als unstrukturierte Bytefolge",
          body: "Bei heutigen PC- und Server-Betriebssystemen sind Dateien meist unstrukturierte Folgen von Bytes; das Betriebssystem kennt die Struktur nicht. In Mainframe-Systemen können Dateien auch Datensätze fester Struktur mit Index enthalten.",
          source: "03_rabs_dateisystem.pdf, Folie 24"
        },
        {
          title: "Dateitypen",
          body: "Dateitypen sind Klassen von Dateien mit gemeinsamen Eigenschaften. Meist ist der Typ als Extension Teil des Namens (z. B. <code>.exe</code>, <code>.c</code>, <code>.sh</code>, <code>.txt</code>, <code>.zip</code>), sodass das Betriebssystem beim Öffnen die passende Anwendung starten kann. Alternativ steht der Typ in der Datei selbst, unter UNIX z. B. als Magic Number in ausführbaren Dateien. Jedes Betriebssystem muss mindestens die Struktur ausführbarer Dateien kennen, um Programme zu laden.",
          source: "03_rabs_dateisystem.pdf, Folien 26-27"
        },
        {
          title: "Dateiattribute",
          body: "Dateiattribute sind Metadaten. Beispiele sind Name, Flags, interne ID, Typ, Location, Größe, Protection, Zeitpunkte des Erstellens, der letzten Veränderung und der letzten Verwendung sowie Owner.",
          source: "03_rabs_dateisystem.pdf, Folien 29-30"
        },
        {
          title: "Spezialdateien",
          body: "Periphere Geräte werden als Spezialdateien repräsentiert und können wie Dateien mit Lese- und Schreiboperationen angesprochen werden. Es gibt blockorientierte Spezialdateien und zeichenorientierte Spezialdateien.",
          source: "03_rabs_dateisystem.pdf, Folie 31"
        },
        {
          title: "Typische Dateioperationen",
          body: "Typische Operationen sind Create, Delete, Open, Close, Rename, Read, Write, Append, Seek sowie Get und Set Attributes.",
          source: "03_rabs_dateisystem.pdf, Folien 32-33"
        },
        {
          title: "Sequentielles Dateimodell",
          body: "Die Datei ist eine unstrukturierte Byte-Folge. Nach dem Öffnen hat der Prozess einen privaten Dateizeiger auf das nächste zu lesende Byte bzw. die Schreibposition. Lesen und Schreiben kopieren einen Datenblock zwischen Hauptspeicher und Datei und schieben den Zeiger weiter. Über das Dateiende (EOF) hinaus kann nicht gelesen werden; Schreiben dort hängt an. Mit <code>seek</code> lässt sich der Zeiger explizit setzen.",
          tag: "wichtig",
          source: "03_rabs_dateisystem.pdf, Folie 34"
        },
        {
          title: "Verzeichnisse und Pfadnamen",
          body: "Verzeichnisse organisieren Dateien hierarchisch, sind selbst spezielle Dateien und benennen Dateien über Pfadnamen. Absolute Pfadnamen beginnen beim Wurzelverzeichnis, relative beim aktuellen Arbeitsverzeichnis.",
          source: "03_rabs_dateisystem.pdf, Folie 36"
        },
        {
          title: "Operationen auf Verzeichnissen",
          body: "Create legt ein leeres Verzeichnis an (bis auf <code>.</code> und <code>..</code>), Delete löscht ein Verzeichnis (nur leere), Opendir und Closedir öffnen und schließen es, Readdir liefert den nächsten Eintrag, Link verlinkt eine Datei in ein Verzeichnis und Unlink entfernt einen Verzeichniseintrag.",
          source: "03_rabs_dateisystem.pdf, Folie 37"
        },
        {
          title: "Links und Mounten",
          body: "Links erlauben, dass eine Datei oder ein Verzeichnis in mehr als einem Verzeichnis auftritt, physisch aber nur einmal vorhanden ist. Beim Mounten wird ein Dateisystem in den bestehenden UNIX-Dateibaum eingehängt.",
          source: "03_rabs_dateisystem.pdf, Folien 38-39"
        },
        {
          title: "Datenträgerorganisation",
          body: "Datenträger können in Partitionen eingeteilt werden; eine Partition wird als Folge logischer Blöcke betrachtet. Aufgaben sind Formatieren, Lesen und Schreiben von Blöcken, Verwaltung freier Blöcke und Verwaltung defekter Blöcke.",
          source: "03_rabs_dateisystem.pdf, Folien 42-43"
        },
        {
          title: "Speichern von Dateien auf Blöcken",
          body: "Für Dateien, die größer als ein Block sind, nennen die Folien kontinuierliche Speicherung, verkettete Speicherung und indizierte Speicherung. Kontinuierliche Speicherung ermöglicht schnellen Zugriff, führt aber zu Fragmentierung und Problemen bei wachsender Datei.",
          source: "03_rabs_dateisystem.pdf, Folien 44-47"
        },
        {
          title: "Indizierte Speicherung",
          body: "Ein spezieller Plattenblock, der Indexblock, enthält alle Blocknummern der Datenblöcke einer Datei, z. B. bei UNIX-I-Nodes. Problem: Ein Indexblock ist nur ein Plattenblock, seine Kapazität ist begrenzt; für größere Dateien gibt es mehrere Indexstufen. Nachteil: Pro Datei muss der Indexblock (eventuell mehrere) mitgeladen werden.",
          source: "03_rabs_dateisystem.pdf, Folie 48"
        },
        {
          title: "FAT und UNIX-Dateisystem",
          body: "VFAT/FAT32 nutzt einfache, unstrukturierte Bytefolgen und Laufwerksbuchstaben. UFS nutzt ebenfalls unstrukturierte Bytefolgen, aber UNIX-Verzeichnisse sind Knoten, Blätter sind Links, und ein Prozess hat ein Current Working Directory.",
          source: "03_rabs_dateisystem.pdf, Folien 50-52"
        },
        {
          title: "Backups",
          body: "Ein Komplett-Backup sichert alle Daten. Ein inkrementelles Backup sichert Änderungen ab einem Zeitpunkt, sodass der alte Stand aus Komplett-Backup und inkrementellen Backups wiederherstellbar ist. Ein differenzielles Backup sichert Änderungen bezogen auf das letzte Komplett-Backup.",
          source: "03_rabs_dateisystem.pdf, Folie 53"
        },
        {
          title: "3-2-1-Regel",
          body: "Die ideale Datensicherung besteht aus drei Kopien der Daten inklusive Original, auf mindestens zwei unterschiedlichen Datenträgern, wobei mindestens ein Backup außer Haus aufbewahrt wird.",
          tag: "wichtig",
          source: "03_rabs_dateisystem.pdf, Folie 54"
        }
      ],
      flashcards: [
        {
          front: "Was ist eine Datei laut Dateisystem-Folien?",
          back: "Ein Konzept zur persistenten Speicherung von Daten, Informationen und Programmen auf externen Speichermedien.",
          source: "03_rabs_dateisystem.pdf, Folie 4"
        },
        {
          front: "Was ist ein Dateisystem?",
          back: "Ein Dateisystem ist eine OS-Abstraktion zur Nutzung von Hintergrundspeichern und besteht aus Dateien, Verzeichnissen und Partitionen.",
          source: "03_rabs_dateisystem.pdf, Folie 19"
        },
        {
          front: "Wozu dienen Partitionen im Dateisystem?",
          back: "Zum physischen (z. B. eigene Festplatte) oder logischen (z. B. Teilbereich einer Platte) Trennen von Dateimengen.",
          source: "03_rabs_dateisystem.pdf, Folie 21"
        },
        {
          front: "Wie kann ein Betriebssystem den Typ einer Datei erkennen?",
          back: "Über die Extension im Dateinamen oder über eine Typangabe in der Datei selbst, z. B. die Magic Number ausführbarer UNIX-Dateien.",
          source: "03_rabs_dateisystem.pdf, Folie 27"
        },
        {
          front: "Welche typischen Dateioperationen nennt die Vorlesung?",
          back: "Create, Delete, Open, Close, Rename, Read, Write, Append, Seek sowie Get und Set Attributes.",
          source: "03_rabs_dateisystem.pdf, Folien 32-33"
        },
        {
          front: "Was passiert im sequentiellen Dateimodell beim Lesen und Schreiben?",
          back: "Ein Datenblock wird zwischen Hauptspeicher und Datei kopiert und der private Dateizeiger weitergeschoben. Lesen über EOF ist nicht möglich, Schreiben dort hängt an; <code>seek</code> setzt den Zeiger explizit.",
          source: "03_rabs_dateisystem.pdf, Folie 34"
        },
        {
          front: "Woran erkennt man absolute Pfadnamen?",
          back: "Absolute Pfadnamen beginnen beim Wurzelverzeichnis.",
          source: "03_rabs_dateisystem.pdf, Folie 36"
        },
        {
          front: "Welche Verzeichnisse darf Delete löschen?",
          back: "Nur leere Verzeichnisse.",
          source: "03_rabs_dateisystem.pdf, Folie 37"
        },
        {
          front: "Was ist Mounten im UNIX-Dateibaum?",
          back: "Ein anderes Dateisystem wird mit dem Befehl mount in das bestehende System hineinmontiert; das root file system bildet die Wurzel des Gesamtsystems.",
          source: "03_rabs_dateisystem.pdf, Folie 39"
        },
        {
          front: "Wie funktioniert verkettete Speicherung?",
          back: "Bei verketteter Speicherung sind die Blöcke der Datei durch Adressen der Folgeblöcke verkettet.",
          source: "03_rabs_dateisystem.pdf, Folie 46"
        },
        {
          front: "Was ist FAT?",
          back: "FAT ist eine Variante verketteter Speicherung mit Verkettung in speziellen Plattenblöcken.",
          source: "03_rabs_dateisystem.pdf, Folie 47"
        },
        {
          front: "Wie funktioniert indizierte Speicherung und was ist ihr Nachteil?",
          back: "Ein Indexblock enthält alle Blocknummern der Datenblöcke einer Datei (z. B. UNIX-I-Nodes); für große Dateien gibt es mehrere Indexstufen. Nachteil: Pro Datei muss der Indexblock mitgeladen werden.",
          source: "03_rabs_dateisystem.pdf, Folie 48"
        },
        {
          front: "Was sichert ein Komplett-Backup?",
          back: "Ein Komplett-Backup sichert alle Daten, also die komplette Platte.",
          source: "03_rabs_dateisystem.pdf, Folie 53"
        },
        {
          front: "Was sagt die 3-2-1-Regel für Backups?",
          back: "Drei Kopien inklusive Original, auf mindestens zwei unterschiedlichen Datenträgern, davon mindestens ein Backup außer Haus.",
          source: "03_rabs_dateisystem.pdf, Folie 54"
        }
      ]
    },
    {
      id: "prozesse",
      title: "Prozesse",
      icon: "🔄",
      cards: [
        {
          title: "Motivation Multiprogrammbetrieb",
          body: "Im Multiprogrammbetrieb laufen mehrere Programme quasi-parallel. Zu jedem Zeitpunkt läuft nur ein Programm auf der CPU; die CPU wechselt nach etwa 10 bis 100 Millisekunden Rechenzeit von Programm zu Programm.",
          source: "05_rabs-process.pdf, Folie 4"
        },
        {
          title: "Prozessverwaltung",
          body: "Die Folien nennen Konzepte zur Virtualisierung der CPU, prozessindividuelle Adressräume, Datenstrukturen wie Deskriptoren, Tabellen und Warteschlangen sowie Operationen wie Scheduling und Prozesserzeugung.",
          source: "05_rabs-process.pdf, Folie 6"
        },
        {
          title: "Prozessdefinition",
          body: "Ein Prozess ist ein Programm in Ausführung mit zusätzlicher Kontextinformation. Jeder Prozess besitzt einen eigenen Adressraum und durchläuft Zustände wie rechnend, wartend auf E/A oder wartend auf CPU.",
          tag: "def",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          title: "Programm versus Prozess",
          body: "Ein Programm ist eine Folge von Anweisungen und zugehörigen Daten. Ein Prozess ist ein Programm in Ausführung mit aktuellen Daten wie Programmzähler, Registerinhalten und Variablenbelegung.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          title: "Prozesskontrollblock",
          body: "Der PCB beschreibt den Kontext eines Prozesses. Er enthält unter anderem Prozess-ID, Benutzer und Gruppen, Prozesszustand, Warteereignis, Scheduling-Informationen, Registerinhalte, Accounting-Information, Prozesshierarchie sowie Speicher- und Dateiverwaltungsinformationen.",
          tag: "wichtig",
          source: "05_rabs-process.pdf, Folie 12"
        },
        {
          title: "Prozesstabelle",
          body: "Die Prozesstabelle enthält Verweise auf die Prozesskontrollblöcke der existierenden Prozesse. Sie ist meist eine Tabelle fester Länge, die maximale Prozessanzahl ist also durch einen Systemparameter festgelegt. PCB-Verweise werden anhand der Prozess-ID gesucht, z. B. über Hashing oder Suchbäume.",
          source: "05_rabs-process.pdf, Folie 14"
        },
        {
          title: "Prozesserzeugung allgemein",
          body: "Prozesse entstehen bei Systeminitialisierung, durch Systemaufruf eines anderen Prozesses, durch Benutzeranfrage oder bei Initiierung einer Stapelverarbeitung.",
          source: "05_rabs-process.pdf, Folie 17"
        },
        {
          title: "fork unter UNIX",
          body: "<code>fork()</code> erzeugt einen exakten Klon des aufrufenden Prozesses. Eltern- und Kindprozess laufen danach unabhängig weiter; der Kindprozess erbt Speicherabbild, offene Dateien und weitere Ressourcen.",
          source: "05_rabs-process.pdf, Folie 18"
        },
        {
          title: "exec unter UNIX",
          body: "Um das Speicherabbild zu ändern und ein neues Programm auszuführen, muss der Kindprozess zum Beispiel <code>execl()</code> ausführen. Dadurch wird der aktuelle Programmcode durch eine Binärdatei ersetzt; es entsteht kein neuer Prozess.",
          source: "05_rabs-process.pdf, Folie 21"
        },
        {
          title: "CreateProcess unter Windows",
          body: "<code>CreateProcess</code> behandelt Prozesserzeugung und Laden des korrekten Programms zusammen. Es erzeugt keine Prozesshierarchie und keine Vater-Kind-Relation, sondern legt einen neuen Adressraum an.",
          source: "05_rabs-process.pdf, Folie 22"
        },
        {
          title: "Prozesshierarchien und init",
          body: "Prozesshierarchien entstehen durch Prozesserzeugung. Unter UNIX bildet ein Prozess mit allen Kind- und Kindeskindprozessen eine Prozessgruppe; ein Signal von der Tastatur geht an alle Mitglieder der zugehörigen Gruppe. UNIX initialisiert sich durch den Prozess <code>init</code> aus dem Bootimage: Er erzeugt per fork einen Kindprozess pro Terminal, der auf einen Login wartet, danach starten Shells oder GUI. Alle Prozesse bilden einen Baum mit init als Wurzel; Daemons laufen ohne Shell.",
          source: "05_rabs-process.pdf, Folien 23-24"
        },
        {
          title: "Prozesszustände",
          body: "Die Folien nennen erzeugt, bereit, laufend, blockiert und beendet. Blockiert bedeutet, dass ein Prozess auf ein Ereignis wartet, etwa E/A-Fertigstellung, Betriebsmittelzuteilung oder Nachricht.",
          tag: "def",
          source: "05_rabs-process.pdf, Folie 26"
        },
        {
          title: "Zustandsübergänge",
          body: "laufend → blockiert: Das Betriebssystem entdeckt, dass der Prozess nicht fortfahren kann, oder er ruft selbst <code>pause</code> auf. blockiert → bereit: Das externe Ereignis, auf das er gewartet hat, tritt ein. Zwischen bereit und laufend wechselt der Scheduler, wenn ein Prozess lange genug gelaufen ist bzw. wieder die CPU bekommt. Die Übergänge zwischen bereit und laufend bemerkt der Prozess selbst nicht.",
          source: "05_rabs-process.pdf, Folie 28"
        },
        {
          title: "Prozessumschaltung",
          body: "Context Switch bedeutet Wechsel von der Ausführung eines Prozesses zu einem anderen. Der Scheduler teilt Rechenzeit zu, der Dispatcher führt den Wechsel aus.",
          source: "05_rabs-process.pdf, Folie 29"
        },
        {
          title: "Wer löst den Prozesswechsel aus?",
          body: "Unter Kontrolle der Prozesse (Koroutinen) bestimmt der Prozess den Umschaltzeitpunkt: kein transparentes Umschalten, keine Fairness. Daher übernimmt das Betriebssystem: Es wechselt in oder nach Systemaufrufen (Warten auf Ereignisse, Terminieren) und nach Unterbrechungen (Ablauf einer Zeitscheibe, ein bevorzugter Prozess wird laufbereit). Den nächsten Prozess wählt der Scheduler.",
          source: "05_rabs-process.pdf, Folien 30-31"
        },
        {
          title: "Ablauf des Context Switch",
          body: "Der gesamte Prozesszustand wird gespeichert: Register inklusive Programmzähler im PCB des aktiven Prozesses. Danach wird ein neuer Prozess ausgewählt, seine Ablaufumgebung hergestellt und seine gesicherten Register geladen.",
          source: "05_rabs-process.pdf, Folie 32"
        },
        {
          title: "Prozess-Warteschlangen",
          body: "Das Betriebssystem führt Ready-Queues für rechenbereite Prozesse und Warteschlangen für verschiedene Ereignisse. Blockierte Prozesse liegen typischerweise in eigenen Warteschlangen für E/A-Geräte wie Platte oder Terminal.",
          source: "05_rabs-process.pdf, Folie 37"
        },
        {
          title: "Beendigung von Prozessen",
          body: "Prozesse können normal freiwillig enden, freiwillig wegen Fehlern enden, unfreiwillig wegen schwerwiegender Fehler beendet werden oder durch einen anderen Prozess beendet werden, sofern dieser die Rechte besitzt.",
          source: "05_rabs-process.pdf, Folien 39-41"
        },
        {
          title: "UNIX-Prozesskommandos",
          body: "Die Folien nennen unter anderem <code>ps</code>, <code>top</code>, <code>pstree</code>, <code>pgrep</code>, <code>nice</code> und <code>kill</code> zur Prozessbeobachtung und -verwaltung.",
          source: "05_rabs-process.pdf, Folie 43"
        }
      ],
      flashcards: [
        {
          front: "Wie definiert die Vorlesung einen Prozess?",
          back: "Als Programm in Ausführung mit zusätzlicher Kontextinformation; jeder Prozess besitzt einen eigenen Adressraum.",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          front: "Worin unterscheiden sich Programm und Prozess?",
          back: "Ein Programm ist eine Folge von Anweisungen und Daten. Ein Prozess ist dieses Programm in Ausführung mit aktuellen Daten wie Programmzähler, Registerinhalten und Variablenbelegung.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          front: "Was enthält ein Prozesskontrollblock?",
          back: "Unter anderem Prozess-ID, Benutzer- und Gruppeninformationen, Zustand, Warteereignis, Scheduling-Informationen, Registerinhalte, Accounting, Prozesshierarchie sowie Speicher- und Dateiverwaltungsinformationen.",
          source: "05_rabs-process.pdf, Folie 12"
        },
        {
          front: "Was ist ein PCB?",
          back: "Ein PCB ist der Process Control Block; er beschreibt den Kontext eines Prozesses.",
          source: "05_rabs-process.pdf, Folie 12"
        },
        {
          front: "Was enthält die Prozesstabelle?",
          back: "Verweise auf die Prozesskontrollblöcke existierender Prozesse; meist eine Tabelle fester Länge, gesucht wird anhand der Prozess-ID.",
          source: "05_rabs-process.pdf, Folie 14"
        },
        {
          front: "Was macht fork() unter UNIX?",
          back: "Es erzeugt einen exakten Klon des aufrufenden Prozesses; Kind und Elternprozess laufen danach unabhängig weiter.",
          source: "05_rabs-process.pdf, Folie 18"
        },
        {
          front: "Was macht exec?",
          back: "exec ersetzt den aktuellen Programmcode durch eine Binärdatei, ohne einen neuen Prozess zu erzeugen.",
          source: "05_rabs-process.pdf, Folie 21"
        },
        {
          front: "Welche Rolle hat init unter UNIX?",
          back: "init startet aus dem Bootimage, erzeugt einen Kindprozess pro Terminal, der auf einen Login wartet, und ist die Wurzel des Prozessbaums.",
          source: "05_rabs-process.pdf, Folien 23-24"
        },
        {
          front: "Wann geht ein Prozess von blockiert nach bereit über?",
          back: "Wenn das externe Ereignis eintritt, auf das er gewartet hat.",
          source: "05_rabs-process.pdf, Folie 28"
        },
        {
          front: "Welche Aufgabe hat der Dispatcher?",
          back: "Der Dispatcher führt den Prozesswechsel durch.",
          source: "05_rabs-process.pdf, Folie 29"
        },
        {
          front: "Warum reicht Prozesswechsel unter Kontrolle der Prozesse nicht aus?",
          back: "Der Prozess bestimmt den Umschaltzeitpunkt selbst: kein transparentes Umschalten und keine Fairness. Gewünscht ist eine faire Zuteilung der CPU durch das Betriebssystem.",
          source: "05_rabs-process.pdf, Folie 30"
        },
        {
          front: "Bei welchen Ereignissen kann das Betriebssystem einen Prozesswechsel vornehmen?",
          back: "In oder nach Systemaufrufen (Warten auf Ereignisse, Terminieren eines Prozesses) und nach Unterbrechungen (Ablauf einer Zeitscheibe, bevorzugter Prozess wird laufbereit).",
          source: "05_rabs-process.pdf, Folie 31"
        },
        {
          front: "Was passiert bei einem Context Switch?",
          back: "Der Zustand des laufenden Prozesses wird im PCB gespeichert, ein neuer Prozess wird ausgewählt, seine Ablaufumgebung hergestellt und seine Register werden geladen.",
          source: "05_rabs-process.pdf, Folie 32"
        }
      ]
    },
    {
      id: "threads",
      title: "Threads",
      icon: "🧵",
      cards: [
        {
          title: "Threaddefinition",
          body: "Threads sind parallele Kontrollflüsse innerhalb eines Prozesses. Sie sind nicht voneinander abgeschottet, weil sie gemeinsame Ressourcen, insbesondere Speicher, teilen. Ein Prozessende beendet auch alle Threads.",
          tag: "def",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          title: "Gründe für Threads",
          body: "Threads erlauben parallele Aktivitäten in einem Adressraum, sind leichter zu erzeugen und zu zerstören als Prozesse, können bei nebenläufiger Ein-/Ausgabe Performance bringen und auf mehrere Prozessoren verteilt echte Parallelität ermöglichen.",
          source: "06_rabs-threads.pdf, Folie 7"
        },
        {
          title: "Vorteile von Threads",
          body: "Threads vereinfachen bei quasi-parallelen Ausführungssträngen das Programmiermodell, ermöglichen sehr schnellen Datenaustausch durch gemeinsame Daten und sind schneller zu erzeugen und zu terminieren als Prozesse.",
          source: "06_rabs-threads.pdf, Folie 8"
        },
        {
          title: "Webserver-Beispiel",
          body: "Im Webserver-Beispiel nimmt ein Dispatcher-Thread Anfragen aus dem Netz an und leitet sie an Worker-Threads weiter. Ein Worker kann bei Plattenzugriff blockieren, während andere Threads weiterarbeiten.",
          source: "06_rabs-threads.pdf, Folie 10"
        },
        {
          title: "Thread-Charakteristika",
          body: "Ein Thread besitzt eigene Identität, eigenen Programmzähler, eigenes Registerset, eigenen Stack und eigenen Zustand wie blockiert, rechenbereit oder rechnend.",
          source: "06_rabs-threads.pdf, Folie 12"
        },
        {
          title: "Threads und Adressräume",
          body: "Threads desselben Prozesses teilen den gemeinsamen Prozessadressraum und Ressourcen. Jeder Thread kann auf Speicheradressen des Prozesses und anderer Threads dieses Prozesses zugreifen.",
          tag: "wichtig",
          source: "06_rabs-threads.pdf, Folie 15"
        },
        {
          title: "Multithreading und Hyperthreading",
          body: "Multithreading bezeichnet gleichzeitiges Abarbeiten mehrerer Threads innerhalb eines Prozesses oder Tasks. Hyperthreading ist hardwareseitiges Multithreading in Intel-Prozessoren, bei dem ein Prozessorkern zwei Threads parallel bearbeiten kann.",
          source: "06_rabs-threads.pdf, Folien 17-18"
        },
        {
          title: "Thread-Bibliotheksfunktionen",
          body: "Die Folien nennen <code>thread_create</code>, <code>thread_exit</code>, <code>thread_join</code> und <code>thread_yield</code>. <code>thread_yield</code> erlaubt freiwillige Abgabe von Rechenzeit an einen anderen Thread.",
          source: "06_rabs-threads.pdf, Folie 19"
        },
        {
          title: "User-Level-Threads",
          body: "User-Level-Threads werden ohne Wissen des Betriebssystems erzeugt, synchronisiert und vernichtet. Der Kernel verwaltet nur Prozesse; die Threading-Bibliothek verwaltet pro Prozess eine Threadtabelle und bietet Scheduling für Threads des Prozesses.",
          source: "06_rabs-threads.pdf, Folie 22"
        },
        {
          title: "Probleme und Vorteile von User-Level-Threads",
          body: "Vorteile sind keine notwendige Betriebssystemunterstützung, schnelle Threaderzeugung und schnelle Threadwechsel ohne Kerneintritt. Nachteile sind blockierende Systemaufrufe, die alle Threads eines Prozesses blockieren, und freiwillige CPU-Abgabe.",
          source: "06_rabs-threads.pdf, Folien 23-25"
        },
        {
          title: "Kernel-Level-Threads",
          body: "Beim Kernel-Level-Modell verwaltet der Kernel Threads in Thread-Tabellen; Threadoperationen sind Kernel-Aufrufe. Vorteile sind andere Threads desselben Prozesses bei Blockierung und echte Parallelität auf Mehrprozessorsystemen. Nachteil ist höherer Overhead.",
          source: "06_rabs-threads.pdf, Folien 26-28"
        },
        {
          title: "Hybride Threads",
          body: "Die Kombination aus Kernel- und User-Threads ordnet mehrere User-Threads Kernel-Threads zu. Sie gab es z. B. in alten Solaris-Versionen; heute wird sie für Programme mit sehr vielen nebenläufigen Aktivitäten genutzt, etwa Webserver mit mehreren Netzwerkschnittstellen.",
          source: "06_rabs-threads.pdf, Folien 29-30"
        },
        {
          title: "Realisierung von Threads",
          body: "Konzeptionell wird jeder Thread von einer eigenen virtuellen CPU ausgeführt, die Threads laufen quasi-parallel mit den Ressourcen des Prozesses. Real schaltet die CPU zwischen ihnen um, indem sie CPU-Register und Program Counter speichert und lädt.",
          source: "06_rabs-threads.pdf, Folie 32"
        },
        {
          title: "Threads in Windows",
          body: "Seit Windows NT gibt es Kernel-Level-Threads (Win32-API). <code>CreateProcess()</code> legt einen neuen Adressraum an und startet darin den ersten Thread, <code>CreateThread()</code> startet weitere Threads im bestehenden Prozess. Zusätzlich gibt es User-Level-Threads, die Fibers: Mehrere Fibers können in einem Kernel-Level-Thread existieren.",
          source: "06_rabs-threads.pdf, Folie 34"
        },
        {
          title: "Threads in Linux",
          body: "Ab Kernel 2.0 gab es die Bibliothek LinuxThreads. Ab 2002 entwickelte sich die Native POSIX Thread Library (NPTL), voll POSIX-kompatibel, ohne Limitierung der Thread-Anzahl und mit 1:1-Implementierung.",
          source: "06_rabs-threads.pdf, Folie 35"
        }
      ],
      flashcards: [
        {
          front: "Was ist ein Thread?",
          back: "Ein paralleler Kontrollfluss innerhalb eines Prozesses, der gemeinsame Ressourcen, insbesondere Speicher, mit anderen Threads des Prozesses teilt.",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          front: "Welche eigenen Bestandteile hat ein Thread?",
          back: "Thread-ID, Programmzähler, Registerset, Stack und Zustand.",
          source: "06_rabs-threads.pdf, Folie 12"
        },
        {
          front: "Was zeigt Thread_create?",
          back: "Thread_create zeigt, dass ein Start-Thread neue Threads erzeugen kann.",
          source: "06_rabs-threads.pdf, Folie 19"
        },
        {
          front: "Welche drei Ansätze zur Implementierung von Threads gibt es?",
          back: "Im User Space über Thread-Bibliotheken, integriert im Kernel und die Kombination aus beiden.",
          source: "06_rabs-threads.pdf, Folie 21"
        },
        {
          front: "Was kennzeichnet User-Level-Threads?",
          back: "Bei User-Level-Threads weiß der Kernel nichts von ihnen; eine Threading-Bibliothek verwaltet sie.",
          source: "06_rabs-threads.pdf, Folie 22"
        },
        {
          front: "Was ist der zentrale Nachteil von User-Level-Threads bei blockierenden Systemaufrufen?",
          back: "Ein blockierender Systemaufruf blockiert alle User-Level-Threads des Prozesses.",
          source: "06_rabs-threads.pdf, Folie 23"
        },
        {
          front: "Was bedeutet 1:1-Implementierung bei Threads?",
          back: "Jedem Benutzer-Thread ist genau eine Kernel-Aktivität beziehungsweise ein Kernel-Thread zugeordnet.",
          source: "06_rabs-threads.pdf, Folien 26 und 35"
        },
        {
          front: "Was kennzeichnet Kernel-Level-Threads?",
          back: "Bei Kernel-Level-Threads verwaltet der Kernel die Threads, und Operationen sind Kernel-Aufrufe.",
          source: "06_rabs-threads.pdf, Folie 26"
        },
        {
          front: "Was ist der Vorteil von Kernel-Level-Threads bei Blockierung?",
          back: "Wenn ein Thread blockiert, kann das Betriebssystem einen anderen Thread desselben Prozesses auswählen.",
          source: "06_rabs-threads.pdf, Folie 28"
        },
        {
          front: "Wie schaltet die CPU real zwischen Threads um?",
          back: "Durch Speichern und Laden der CPU-Register und des Program Counters.",
          source: "06_rabs-threads.pdf, Folie 32"
        },
        {
          front: "Was sind Fibers unter Windows?",
          back: "User-Level-Threads; mehrere Fibers können in einem Kernel-Level-Thread existieren.",
          source: "06_rabs-threads.pdf, Folie 34"
        },
        {
          front: "Was ist NPTL?",
          back: "NPTL ist die Native POSIX Thread Library und eine 1:1-Implementierung unter Linux.",
          source: "06_rabs-threads.pdf, Folie 35"
        }
      ]
    },
    {
      id: "scheduling",
      title: "Scheduling",
      icon: "⏱️",
      cards: [
        {
          title: "Scheduling",
          body: "Scheduling ist die zeitliche Zuordnung von Aktivitäten zu Ressourcen. Im Betriebssystembereich ist meist die Zuteilung von CPU-Ressourcen gemeint; die Scheduling-Strategie kann die Leistung eines Rechnersystems beträchtlich beeinflussen.",
          tag: "def",
          source: "07_rabs-scheduling.pdf, Folie 5"
        },
        {
          title: "Scheduler und Dispatcher",
          body: "Der Scheduler ist für die Prozessauswahl verantwortlich, der Dispatcher führt den Prozesskontextwechsel durch. Dabei rettet er den Kontext des laufenden Prozesses in dessen Prozesskontrollblock, teilt den Prozessor dem nächsten Prozess der Warteschlange zu und stellt dessen Kontext wieder her. Übergänge vom oder zum Zustand <em>rechnend</em> bedeuten immer einen Wechsel der CPU-Zuteilung.",
          source: "07_rabs-scheduling.pdf, Folien 6 und 8"
        },
        {
          title: "Scheduling-Kriterien",
          body: "Beim Scheduling legt das Betriebssystem die Ausführungsreihenfolge der Prozesse im Zustand <em>bereit</em> fest. Kriterien sind hohe Effizienz, geringe Antwortzeit, hoher Durchsatz, Fairness, Pünktlichkeit, Prioritäten und gleichmäßige Ressourcenauslastung. Keine Strategie ist für jedes System optimal, ein Kompromiss zwischen den Kriterien ist notwendig.",
          source: "07_rabs-scheduling.pdf, Folie 9"
        },
        {
          title: "Ziele nach Systemtyp",
          body: "Alle Systeme verlangen Fairness, Policy Enforcement und Balance. Stapelverarbeitung priorisiert Durchsatz, Turnaround-Zeit und CPU-Belegung. Interaktive Systeme priorisieren Antwortzeit und Proportionalität. Echtzeitsysteme priorisieren Deadline und vorhersagbares Verhalten.",
          source: "07_rabs-scheduling.pdf, Folie 10"
        },
        {
          title: "Nicht-präemptiv und präemptiv",
          body: "Nicht-präemptives (kooperatives) Scheduling lässt einen Prozess bis zur Fertigstellung oder freiwilligen Abgabe laufen; er kann die CPU so lange belegen, wie er will. Präemptives (verdrängendes) Scheduling kann einem Prozess die CPU vorher entziehen; er pausiert dann in seinem Zustand, bis er wieder zugeteilt wird. Nachteil: höherer Overhead.",
          tag: "wichtig",
          source: "07_rabs-scheduling.pdf, Folien 11-12"
        },
        {
          title: "Beispiel-Prozessliste",
          body: "Alle Algorithmen werden auf einem Rechner mit einem Prozessor(kern) verglichen; alle bereiten Prozesse stehen in einer Warteschlange. Prozesse (Ankunftszeit a, Bedienzeit t, Priorität P): P1 (0, 3, 2), P2 (2, 6, 4), P3 (4, 4, 1), P4 (6, 5, 5), P5 (8, 2, 3).",
          tag: "beispiel",
          source: "07_rabs-scheduling.pdf, Folie 14"
        },
        {
          title: "Laufzeit und Wartezeit",
          body: "Die Folien vergleichen die Verfahren über die mittlere Laufzeit und die mittlere Wartezeit der fünf Prozesse. Die Laufzeit reicht von der Ankunft bis zum Ende (FCFS: P2 kommt bei 2 an und ist bei 9 fertig, Laufzeit 7). Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit (P2: 7 − 6 = 1).",
          tag: "formel",
          source: "07_rabs-scheduling.pdf, Folien 17-18"
        },
        {
          title: "FCFS",
          body: "First Come First Serve (FIFO) bearbeitet die Prozesse in der Reihenfolge ihrer Ankunft in der Bereitliste; jeder behält den Prozessor bis zum Ende oder zur freiwilligen Aufgabe. FCFS ist die simpelste Lösung und nicht-unterbrechend. Es ist fair, weil alle Prozesse berücksichtigt werden, verteilt die CPU aber nicht gerecht zwischen E/A-lastigen und berechnungslastigen Aufträgen. Beispiel: Ø Laufzeit 8,6 ms, Ø Wartezeit 4,6 ms.",
          source: "07_rabs-scheduling.pdf, Folien 15-18"
        },
        {
          title: "SJF",
          body: "Shortest Job First bearbeitet den Prozess mit der kürzesten Bedienzeit als nächsten bis zum Ende oder zur freiwilligen Aufgabe. SJF ist optimal bei gleichzeitig verfügbaren Aufträgen, aber nicht, wenn sie zu unterschiedlichen Zeiten eintreffen. Nachteile: Die Bedienzeit muss bekannt sein und kann nur als Schätzung vom Benutzer stammen; längere Prozesse können verhungern. Beispiel: Ø Laufzeit 7,6 ms, Ø Wartezeit 3,6 ms.",
          source: "07_rabs-scheduling.pdf, Folien 19-21"
        },
        {
          title: "Round Robin",
          body: "Round Robin bearbeitet die Prozesse in Ankunftsreihenfolge. Nach Ablauf einer festen Frist τ (Zeitscheibe, Quantum) wird verdrängt; die CPU wird auch weitergegeben, wenn ein Prozess terminiert oder blockiert. Neu ankommende und verdrängte Prozesse gehen ans Ende der Warteschlange, neue haben Vorrang. Alle Prozesse sind gleichberechtigt, die CPU-Zeit wird fair aufgeteilt; RR eignet sich für interaktive Systeme. Beispiel mit τ = 1: Ø Laufzeit 10,8 ms, Ø Wartezeit 6,8 ms.",
          source: "07_rabs-scheduling.pdf, Folien 22-26"
        },
        {
          title: "Zeitquantum bei Round Robin",
          body: "Die Größe des Quantums ist wichtig für die Systemgeschwindigkeit. Ist es kurz, finden viele Prozesswechsel statt und der Overhead ist hoch. Ist es lang, geht Gleichzeitigkeit verloren und das System hängt oder ruckelt. Üblich ist der ein- oder zweistellige Millisekundenbereich. Je länger ein Prozess rechnet, desto mehr Runden braucht er; RR bevorzugt Prozesse mit kurzer Abarbeitungszeit. Beispiel mit τ = 4: Ø Laufzeit 10 ms, Ø Wartezeit 6 ms.",
          source: "07_rabs-scheduling.pdf, Folien 23, 27-28"
        },
        {
          title: "PRIO-NP",
          body: "Beim nicht-präemptiven Priority-Scheduling werden Neuankömmlinge nach ihrer Priorität in die Bereitliste eingeordnet. Der laufende Prozess wird nicht verdrängt. Beispiel: Ø Laufzeit 8,4 ms, Ø Wartezeit 4,4 ms.",
          source: "07_rabs-scheduling.pdf, Folien 29-31"
        },
        {
          title: "PRIO-P",
          body: "Präemptives Priority-Scheduling arbeitet wie PRIO-NP, prüft aber bei jeder Ankunft auf Verdrängung: Der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling. Beispiel: Ø Laufzeit 9 ms, Ø Wartezeit 7 ms.",
          source: "07_rabs-scheduling.pdf, Folien 32-34"
        },
        {
          title: "Multilevel-Priority-Queues",
          body: "MPQ gruppiert Prozesse in Prioritätsklassen mit je einer eigenen Bereitliste; die Übersicht zeigt von hoher zu niedriger Priorität Realtime, System, Interactive und Batch. Pro Liste kann ein eigener Algorithmus laufen, am verbreitetsten ist Round Robin, auch mit unterschiedlichen Quanten (längere auf niedrigen Ebenen). Niedrige Queues laufen erst, wenn die höheren leer sind. Problem: Die optimalen Prioritäten müssen vorher bestimmt werden. MPQ ist bei vielen Betriebssystemen die Top-Level-Strategie.",
          source: "07_rabs-scheduling.pdf, Folien 35-36"
        },
        {
          title: "Echtzeit",
          body: "Echtzeitsysteme müssen auf bestimmte, meist physische Ereignisse in festgelegter Zeit reagieren, z. B. Robotersteuerung, medizinische Überwachung oder Bremssysteme. Harte Echtzeit: Fristen müssen eingehalten werden; dauert die Verarbeitung zu lange, wird sie unterbrochen und das Ergebnis verworfen. Weiche Echtzeit: Fristen sollten eingehalten werden; bei einer Verletzung ist das Ergebnis nicht unbrauchbar.",
          tag: "def",
          source: "07_rabs-scheduling.pdf, Folie 38"
        },
        {
          title: "Einplanbarkeit periodischer Prozesse",
          body: "Echtzeitprozesse werden mit statischer Frequenz aufgerufen und haben Deadlines. Vorab wird geprüft, ob sie überhaupt eingeplant werden können: Die Summe aller CPU(P<sub>i</sub>) / t<sub>Pi</sub> muss ≤ 1 sein (CPU-Verbrauchszeit durch Periode, m Prozesse). Video-Streaming-Beispiel: 10 ms / 30 ms + 15 ms / 40 ms + 5 ms / 50 ms = 0,808, also Scheduling möglich.",
          tag: "formel",
          source: "07_rabs-scheduling.pdf, Folien 39-40"
        },
        {
          title: "Raten-monotones Scheduling (RMS)",
          body: "RMS ist ein prioritätsbasiertes Verfahren für unterbrechbare, periodische Jobs. Bedingungen: Jeder periodische Prozess wird in seiner Periode fertig, kein Prozess hängt von einem anderen ab, jeder braucht in jedem Quantum den gleichen CPU-Anteil, kein nicht-periodischer Prozess hat eine Deadline, und Unterbrechungen erfolgen sofort und ohne Aufwand (in der Realität nicht umsetzbar, hilft beim Modellieren). Die Priorität entspricht der Aufrufperiode (z. B. 33 bei 30 ms Periode). Einplanbar ist die Job-Menge, wenn die Auslastung u ≤ m · (2<sup>1/m</sup> − 1) ist.",
          source: "07_rabs-scheduling.pdf, Folien 42-43"
        },
        {
          title: "Earliest Deadline First (EDF)",
          body: "Ein Prozess kündigt seine Präsenz und seine Deadline an, wenn er CPU-Zeit benötigt. Der Scheduler sortiert nach der kürzesten Deadline und arbeitet aufsteigend ab; ein laufender Prozess wird unterbrochen, wenn ein neuer mit kürzerer Deadline auftaucht. EDF hat keine Begrenzung der CPU-Verbrauchszeit und kann die CPU zu 100 % auslasten; es ist z. B. unter Linux verfügbar.",
          source: "07_rabs-scheduling.pdf, Folie 44"
        },
        {
          title: "RMS und EDF im Vergleich",
          body: "Für das Video-Streaming-Beispiel mit m = 3 liegt die RMS-Schranke bei 0,78. Die Auslastung 0,808 liegt darüber, also ist kein Scheduling mit RMS möglich. Im Diagramm der Folie bricht RMS mit einem Fehler ab, während EDF alle Aufträge einplant.",
          tag: "beispiel",
          source: "07_rabs-scheduling.pdf, Folie 45"
        },
        {
          title: "Strategie und Mechanismus",
          body: "Strategie ist die prinzipielle Entscheidung, welcher Prozess wann die CPU nutzen darf; Mechanismus ist die Art, wie sie durchgesetzt wird. Je nach Ziel gibt es unterschiedliche Strategien, und Ziele können sich widersprechen. Standard-Betriebssysteme bevorzugen häufig Interaktivität; reale Strategien sind meist Mischformen.",
          source: "07_rabs-scheduling.pdf, Folie 47"
        }
      ],
      flashcards: [
        {
          front: "Was bedeutet Scheduling im Betriebssystemkontext?",
          back: "Die zeitliche Zuordnung von CPU-Ressourcen zu Prozessen beziehungsweise Aktivitäten.",
          source: "07_rabs-scheduling.pdf, Folie 5"
        },
        {
          front: "Was ist der Unterschied zwischen Scheduler und Dispatcher?",
          back: "Der Scheduler wählt den Prozess aus; der Dispatcher führt den Prozesskontextwechsel durch.",
          source: "07_rabs-scheduling.pdf, Folien 6 und 8"
        },
        {
          front: "Was muss der Dispatcher bei einem Prozesswechsel tun?",
          back: "Den Kontext des laufenden Prozesses in dessen Prozesskontrollblock retten, den Prozessor einem anderen Prozess zuteilen und dessen Kontext aus seinem Prozesskontrollblock wiederherstellen.",
          source: "07_rabs-scheduling.pdf, Folie 8"
        },
        {
          front: "Was unterscheidet präemptives von nicht-präemptivem Scheduling?",
          back: "Beim präemptiven Scheduling kann einem Prozess die CPU vor Fertigstellung entzogen werden; beim nicht-präemptiven behält er sie bis Fertigstellung oder freiwilliger Abgabe.",
          source: "07_rabs-scheduling.pdf, Folien 11-12"
        },
        {
          front: "Wie werden im Folienbeispiel Laufzeit und Wartezeit eines Prozesses bestimmt?",
          back: "Laufzeit: von der Ankunft bis zum Ende. Wartezeit: Laufzeit ohne die eigene Bedienzeit. Verglichen werden die Mittelwerte über alle fünf Prozesse.",
          source: "07_rabs-scheduling.pdf, Folien 17-18"
        },
        {
          front: "Wie bewerten die Folien FCFS?",
          back: "Simpelste Lösung und nicht-unterbrechend. Fair, weil alle Prozesse berücksichtigt werden, aber keine gerechte CPU-Zuweisung zwischen E/A-lastigen und berechnungslastigen Aufträgen.",
          source: "07_rabs-scheduling.pdf, Folie 15"
        },
        {
          front: "Was bedeutet SJF?",
          back: "SJF bedeutet Shortest Job First: Die kürzeste Bedienzeit kommt zuerst.",
          source: "07_rabs-scheduling.pdf, Folie 19"
        },
        {
          front: "Welche Nachteile hat SJF?",
          back: "Die Bedienzeit muss bekannt sein und kann nur als Schätzung vom Benutzer stammen; längere Prozesse können verhungern, wenn stets kürzere vorhanden sind. Optimal ist SJF nur bei gleichzeitig verfügbaren Aufträgen.",
          source: "07_rabs-scheduling.pdf, Folie 19"
        },
        {
          front: "Was kennzeichnet Round Robin?",
          back: "Round Robin ist präemptives Scheduling mit festem Zeitquantum.",
          source: "07_rabs-scheduling.pdf, Folie 22"
        },
        {
          front: "Wohin kommen bei Round Robin neue und verdrängte Prozesse?",
          back: "Ans Ende der Warteschlange; kommen beide gleichzeitig, haben neue Prozesse Vorrang.",
          source: "07_rabs-scheduling.pdf, Folie 22"
        },
        {
          front: "Warum ist das Zeitquantum bei Round Robin wichtig?",
          back: "Zu kurze Quanten erzeugen viele Prozesswechsel und Overhead; zu lange Quanten lassen Gleichzeitigkeit verloren gehen.",
          source: "07_rabs-scheduling.pdf, Folie 23"
        },
        {
          front: "Wie arbeitet nicht-präemptives Priority-Scheduling (PRIO-NP)?",
          back: "Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der laufende Prozess wird nicht verdrängt.",
          source: "07_rabs-scheduling.pdf, Folie 29"
        },
        {
          front: "Wann wird bei PRIO-P der rechnende Prozess verdrängt?",
          back: "Wenn er geringere Priorität hat als ein Neuankömmling.",
          source: "07_rabs-scheduling.pdf, Folie 32"
        },
        {
          front: "Welche Mittelwerte liefern die Verfahren im Folienbeispiel?",
          back: "Ø Laufzeit / Ø Wartezeit: FCFS 8,6 / 4,6 ms, SJF 7,6 / 3,6 ms, RR mit τ = 1 10,8 / 6,8 ms, RR mit τ = 4 10 / 6 ms, PRIO-NP 8,4 / 4,4 ms, PRIO-P 9 / 7 ms.",
          source: "07_rabs-scheduling.pdf, Folien 17-34"
        },
        {
          front: "Wann laufen bei Multilevel-Priority-Queues Prozesse einer niedrigen Queue?",
          back: "Erst wenn in den Queues mit höherer Priorität keine Prozesse sind.",
          source: "07_rabs-scheduling.pdf, Folie 35"
        },
        {
          front: "Welches Problem haben Multilevel-Priority-Queues?",
          back: "Die optimalen Prioritäten müssen vorher bestimmt werden.",
          source: "07_rabs-scheduling.pdf, Folie 35"
        },
        {
          front: "Was unterscheidet harte und weiche Echtzeit?",
          back: "Harte Echtzeit: Fristen müssen eingehalten werden; dauert die Verarbeitung zu lange, wird sie unterbrochen und das Ergebnis verworfen. Weiche Echtzeit: Fristen sollten eingehalten werden; eine Verletzung macht das Ergebnis nicht unbrauchbar.",
          source: "07_rabs-scheduling.pdf, Folie 38"
        },
        {
          front: "Wie prüft man, ob periodische Echtzeitprozesse eingeplant werden können?",
          back: "Die Summe aller CPU(P<sub>i</sub>) / t<sub>Pi</sub>, also CPU-Verbrauchszeit durch Periode, muss ≤ 1 sein.",
          source: "07_rabs-scheduling.pdf, Folie 39"
        },
        {
          front: "Ist das Video-Streaming-Beispiel der Folien einplanbar?",
          back: "Allgemein ja: 10/30 + 15/40 + 5/50 = 0,808 ≤ 1. Mit RMS nein: Für m = 3 liegt die Schranke bei 0,78, und 0,808 > 0,78.",
          source: "07_rabs-scheduling.pdf, Folien 40, 45"
        },
        {
          front: "Welche Auslastungsschranke gilt bei RMS?",
          back: "Die Job-Menge ist einplanbar, wenn die Auslastung u ≤ m · (2<sup>1/m</sup> − 1) ist; die Schranke hängt nur von der Anzahl m der Jobs ab.",
          source: "07_rabs-scheduling.pdf, Folie 43"
        },
        {
          front: "Welche Priorität bekommt ein Prozess bei RMS?",
          back: "Seine Priorität entspricht seiner Aufrufperiode, z. B. Priorität 33 für einen Prozess mit 30 ms Periode.",
          source: "07_rabs-scheduling.pdf, Folie 43"
        },
        {
          front: "Was bedeutet EDF?",
          back: "EDF bedeutet Earliest Deadline First: Prozesse kündigen Präsenz und Deadline an; der Scheduler sortiert nach kürzester Deadline und unterbricht laufende Prozesse, wenn ein neuer Prozess mit kürzerer Deadline auftaucht.",
          source: "07_rabs-scheduling.pdf, Folie 44"
        },
        {
          front: "Wie hoch kann EDF die CPU auslasten?",
          back: "Bis zu 100 %; EDF hat keine Begrenzung der CPU-Verbrauchszeit.",
          source: "07_rabs-scheduling.pdf, Folie 44"
        },
        {
          front: "Was unterscheidet beim Scheduling Strategie und Mechanismus?",
          back: "Strategie ist die prinzipielle Entscheidung, welcher Prozess wann die CPU nutzen darf; Mechanismus ist die Art und Weise, wie diese Strategie durchgesetzt wird.",
          source: "07_rabs-scheduling.pdf, Folie 47"
        }
      ],
      exercises: [
        {
          ref: "FCFS",
          generator: "scheduling-fcfs",
          note: "Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.",
          source: "07_rabs-scheduling.pdf, Folien 14-18"
        },
        {
          ref: "SJF",
          generator: "scheduling-sjf",
          note: "Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.",
          source: "07_rabs-scheduling.pdf, Folien 14, 19-21"
        },
        {
          ref: "Round Robin",
          generator: "scheduling-rr",
          note: "Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.",
          source: "07_rabs-scheduling.pdf, Folien 14, 22-28"
        },
        {
          ref: "PRIO-NP",
          generator: "scheduling-prio-np",
          note: "Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.",
          source: "07_rabs-scheduling.pdf, Folien 14, 29-31"
        },
        {
          ref: "PRIO-P",
          generator: "scheduling-prio-p",
          note: "Rechenmodul: Die Prozessdaten werden zufällig erzeugt, die Lösung wird nach den Regeln der Folien berechnet.",
          source: "07_rabs-scheduling.pdf, Folien 14, 32-34"
        }
      ],
      walkthroughs: [
        {
          id: "scheduling-fcfs",
          title: "FCFS am Folienbeispiel",
          afterCard: "FCFS",
          source: "07_rabs-scheduling.pdf, Folien 14-18",
          intro: "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms): P1: a = 0, t = 3; P2: a = 2, t = 6; P3: a = 4, t = 4; P4: a = 6, t = 5; P5: a = 8, t = 2. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links.",
          legend: { active: "Bekommt die CPU" },
          visual: {
            kind: "array",
            values: [],
            arrays: [
              {
                id: "cpu",
                label: "CPU",
                values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
              },
              {
                id: "queue",
                label: "Bereit",
                values: ["", "", "", ""]
              }
            ]
          },
          steps: [
            {
              title: "t = 0: P1 rechnet bis t = 3",
              text: "Nur P1 ist bereit. Währenddessen kommen an: P2 (t = 2).",
              explanation: {
                action: "P1 von t = 0 bis t = 3 ausführen.",
                rule: "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                decision: "P1 ist bei t = 3 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 0, role: "active" },
                { kind: "array-index", array: "cpu", index: 1, role: "active" },
                { kind: "array-index", array: "cpu", index: 2, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 0, value: "1" },
                { kind: "array-index", array: "cpu", index: 1, value: "1" },
                { kind: "array-index", array: "cpu", index: 2, value: "1" },
                { kind: "array-index", array: "queue", index: 0, value: "1" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 3: P2 rechnet bis t = 9",
              text: "Nur P2 ist bereit. Währenddessen kommen an: P3 (t = 4), P4 (t = 6), P5 (t = 8).",
              explanation: {
                action: "P2 von t = 3 bis t = 9 ausführen.",
                rule: "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                decision: "P2 ist bei t = 9 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 3, role: "active" },
                { kind: "array-index", array: "cpu", index: 4, role: "active" },
                { kind: "array-index", array: "cpu", index: 5, role: "active" },
                { kind: "array-index", array: "cpu", index: 6, role: "active" },
                { kind: "array-index", array: "cpu", index: 7, role: "active" },
                { kind: "array-index", array: "cpu", index: 8, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 3, value: "2" },
                { kind: "array-index", array: "cpu", index: 4, value: "2" },
                { kind: "array-index", array: "cpu", index: 5, value: "2" },
                { kind: "array-index", array: "cpu", index: 6, value: "2" },
                { kind: "array-index", array: "cpu", index: 7, value: "2" },
                { kind: "array-index", array: "cpu", index: 8, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 9: P3 rechnet bis t = 13",
              text: "Bereitliste: P3, P4, P5. P3 steht vorne in der Bereitliste (angekommen bei t = 4).",
              explanation: {
                action: "P3 von t = 9 bis t = 13 ausführen.",
                rule: "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                decision: "P3 ist bei t = 13 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 9, role: "active" },
                { kind: "array-index", array: "cpu", index: 10, role: "active" },
                { kind: "array-index", array: "cpu", index: 11, role: "active" },
                { kind: "array-index", array: "cpu", index: 12, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 9, value: "3" },
                { kind: "array-index", array: "cpu", index: 10, value: "3" },
                { kind: "array-index", array: "cpu", index: 11, value: "3" },
                { kind: "array-index", array: "cpu", index: 12, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "5" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 13: P4 rechnet bis t = 18",
              text: "Bereitliste: P4, P5. P4 steht vorne in der Bereitliste (angekommen bei t = 6).",
              explanation: {
                action: "P4 von t = 13 bis t = 18 ausführen.",
                rule: "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                decision: "P4 ist bei t = 18 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 13, role: "active" },
                { kind: "array-index", array: "cpu", index: 14, role: "active" },
                { kind: "array-index", array: "cpu", index: 15, role: "active" },
                { kind: "array-index", array: "cpu", index: 16, role: "active" },
                { kind: "array-index", array: "cpu", index: 17, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 13, value: "4" },
                { kind: "array-index", array: "cpu", index: 14, value: "4" },
                { kind: "array-index", array: "cpu", index: 15, value: "4" },
                { kind: "array-index", array: "cpu", index: 16, value: "4" },
                { kind: "array-index", array: "cpu", index: 17, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "5" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 18: P5 rechnet bis t = 20",
              text: "Nur P5 ist bereit.",
              explanation: {
                action: "P5 von t = 18 bis t = 20 ausführen.",
                rule: "FCFS: Bearbeitung in der Reihenfolge der Ankunft in der Bereitliste, Prozessorbesitz bis zum Ende.",
                decision: "P5 ist bei t = 20 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 18, role: "active" },
                { kind: "array-index", array: "cpu", index: 19, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 18, value: "5" },
                { kind: "array-index", array: "cpu", index: 19, value: "5" },
                { kind: "array-index", array: "queue", index: 0, value: "5" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "Ergebnis: Lauf- und Wartezeiten",
              text: "Laufzeit von der Ankunft bis zum Ende: P1 3, P2 7, P3 9, P4 12, P5 12. Wartezeit: P1 0, P2 1, P3 5, P4 7, P5 10. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
              source: "07_rabs-scheduling.pdf, Folie 18",
              formula: "Ø Laufzeit = (3 + 7 + 9 + 12 + 12) / 5 = 8,6 ms",
              product: "Ø Wartezeit = (0 + 1 + 5 + 7 + 10) / 5 = 4,6 ms",
              values: [
                { kind: "array-index", array: "queue", index: 0, value: "" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            }
          ]
        },
        {
          id: "scheduling-sjf",
          title: "SJF am Folienbeispiel",
          afterCard: "SJF",
          source: "07_rabs-scheduling.pdf, Folien 14, 19-21",
          intro: "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms): P1: a = 0, t = 3; P2: a = 2, t = 6; P3: a = 4, t = 4; P4: a = 6, t = 5; P5: a = 8, t = 2. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links.",
          legend: { active: "Bekommt die CPU" },
          visual: {
            kind: "array",
            values: [],
            arrays: [
              {
                id: "cpu",
                label: "CPU",
                values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
              },
              {
                id: "queue",
                label: "Bereit",
                values: ["", "", "", ""]
              }
            ]
          },
          steps: [
            {
              title: "t = 0: P1 rechnet bis t = 3",
              text: "Nur P1 ist bereit. Währenddessen kommen an: P2 (t = 2).",
              explanation: {
                action: "P1 von t = 0 bis t = 3 ausführen.",
                rule: "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                decision: "P1 ist bei t = 3 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 0, role: "active" },
                { kind: "array-index", array: "cpu", index: 1, role: "active" },
                { kind: "array-index", array: "cpu", index: 2, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 0, value: "1" },
                { kind: "array-index", array: "cpu", index: 1, value: "1" },
                { kind: "array-index", array: "cpu", index: 2, value: "1" },
                { kind: "array-index", array: "queue", index: 0, value: "1" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 3: P2 rechnet bis t = 9",
              text: "Nur P2 ist bereit. Währenddessen kommen an: P3 (t = 4), P4 (t = 6), P5 (t = 8).",
              explanation: {
                action: "P2 von t = 3 bis t = 9 ausführen.",
                rule: "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                decision: "P2 ist bei t = 9 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 3, role: "active" },
                { kind: "array-index", array: "cpu", index: 4, role: "active" },
                { kind: "array-index", array: "cpu", index: 5, role: "active" },
                { kind: "array-index", array: "cpu", index: 6, role: "active" },
                { kind: "array-index", array: "cpu", index: 7, role: "active" },
                { kind: "array-index", array: "cpu", index: 8, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 3, value: "2" },
                { kind: "array-index", array: "cpu", index: 4, value: "2" },
                { kind: "array-index", array: "cpu", index: 5, value: "2" },
                { kind: "array-index", array: "cpu", index: 6, value: "2" },
                { kind: "array-index", array: "cpu", index: 7, value: "2" },
                { kind: "array-index", array: "cpu", index: 8, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 9: P5 rechnet bis t = 11",
              text: "Bereitliste: P3, P4, P5. P5 hat mit t = 2 die kürzeste Bedienzeit (P3: 4, P4: 5).",
              explanation: {
                action: "P5 von t = 9 bis t = 11 ausführen.",
                rule: "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                decision: "P5 ist bei t = 11 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 9, role: "active" },
                { kind: "array-index", array: "cpu", index: 10, role: "active" },
                { kind: "array-index", array: "queue", index: 2, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 9, value: "5" },
                { kind: "array-index", array: "cpu", index: 10, value: "5" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "5" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 11: P3 rechnet bis t = 15",
              text: "Bereitliste: P3, P4. P3 hat mit t = 4 die kürzeste Bedienzeit (P4: 5).",
              explanation: {
                action: "P3 von t = 11 bis t = 15 ausführen.",
                rule: "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                decision: "P3 ist bei t = 15 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 11, role: "active" },
                { kind: "array-index", array: "cpu", index: 12, role: "active" },
                { kind: "array-index", array: "cpu", index: 13, role: "active" },
                { kind: "array-index", array: "cpu", index: 14, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 11, value: "3" },
                { kind: "array-index", array: "cpu", index: 12, value: "3" },
                { kind: "array-index", array: "cpu", index: 13, value: "3" },
                { kind: "array-index", array: "cpu", index: 14, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 15: P4 rechnet bis t = 20",
              text: "Nur P4 ist bereit.",
              explanation: {
                action: "P4 von t = 15 bis t = 20 ausführen.",
                rule: "SJF: Der Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende bearbeitet.",
                decision: "P4 ist bei t = 20 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 15, role: "active" },
                { kind: "array-index", array: "cpu", index: 16, role: "active" },
                { kind: "array-index", array: "cpu", index: 17, role: "active" },
                { kind: "array-index", array: "cpu", index: 18, role: "active" },
                { kind: "array-index", array: "cpu", index: 19, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 15, value: "4" },
                { kind: "array-index", array: "cpu", index: 16, value: "4" },
                { kind: "array-index", array: "cpu", index: 17, value: "4" },
                { kind: "array-index", array: "cpu", index: 18, value: "4" },
                { kind: "array-index", array: "cpu", index: 19, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "Ergebnis: Lauf- und Wartezeiten",
              text: "Laufzeit von der Ankunft bis zum Ende: P1 3, P2 7, P3 11, P4 14, P5 3. Wartezeit: P1 0, P2 1, P3 7, P4 9, P5 1. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
              source: "07_rabs-scheduling.pdf, Folie 21",
              formula: "Ø Laufzeit = (3 + 7 + 11 + 14 + 3) / 5 = 7,6 ms",
              product: "Ø Wartezeit = (0 + 1 + 7 + 9 + 1) / 5 = 3,6 ms",
              values: [
                { kind: "array-index", array: "queue", index: 0, value: "" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            }
          ]
        },
        {
          id: "scheduling-rr-1",
          title: "Round Robin mit τ = 1",
          afterCard: "Round Robin",
          source: "07_rabs-scheduling.pdf, Folien 14, 22-26",
          intro: "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms): P1: a = 0, t = 3; P2: a = 2, t = 6; P3: a = 4, t = 4; P4: a = 6, t = 5; P5: a = 8, t = 2. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links.",
          legend: { active: "Bekommt die CPU" },
          visual: {
            kind: "array",
            values: [],
            arrays: [
              {
                id: "cpu",
                label: "CPU",
                values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
              },
              {
                id: "queue",
                label: "Bereit",
                values: ["", "", "", ""]
              }
            ]
          },
          steps: [
            {
              title: "t = 0: P1 rechnet bis t = 2",
              text: "Nur P1 ist bereit. Nach jedem Quantum ist die Bereitliste leer, deshalb rechnet P1 gleich weiter.",
              explanation: {
                action: "P1 von t = 0 bis t = 2 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 2 läuft das Quantum ab; P1 hat noch 1 ms und geht ans Ende der Bereitliste, hinter den gerade angekommenen P2."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 0, role: "active" },
                { kind: "array-index", array: "cpu", index: 1, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 0, value: "1" },
                { kind: "array-index", array: "cpu", index: 1, value: "1" },
                { kind: "array-index", array: "queue", index: 0, value: "1" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 2: P2 rechnet bis t = 3",
              text: "Bereitliste: P2, P1. P2 steht vorne in der Bereitliste.",
              explanation: {
                action: "P2 von t = 2 bis t = 3 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 3 läuft das Quantum ab; P2 hat noch 5 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 2, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 2, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "1" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 3: P1 rechnet bis t = 4",
              text: "Bereitliste: P1, P2. P1 steht vorne in der Bereitliste.",
              explanation: {
                action: "P1 von t = 3 bis t = 4 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P1 ist bei t = 4 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 3, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 3, value: "1" },
                { kind: "array-index", array: "queue", index: 0, value: "1" },
                { kind: "array-index", array: "queue", index: 1, value: "2" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 4: P2 rechnet bis t = 5",
              text: "Bereitliste: P2, P3. P2 steht vorne in der Bereitliste.",
              explanation: {
                action: "P2 von t = 4 bis t = 5 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 5 läuft das Quantum ab; P2 hat noch 4 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 4, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 4, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "3" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 5: P3 rechnet bis t = 6",
              text: "Bereitliste: P3, P2. P3 steht vorne in der Bereitliste.",
              explanation: {
                action: "P3 von t = 5 bis t = 6 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 6 läuft das Quantum ab; P3 hat noch 3 ms und geht ans Ende der Bereitliste, hinter den gerade angekommenen P4."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 5, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 5, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "2" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 6: P2 rechnet bis t = 7",
              text: "Bereitliste: P2, P4, P3. P2 steht vorne in der Bereitliste.",
              explanation: {
                action: "P2 von t = 6 bis t = 7 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 7 läuft das Quantum ab; P2 hat noch 3 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 6, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 6, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "3" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 7: P4 rechnet bis t = 8",
              text: "Bereitliste: P4, P3, P2. P4 steht vorne in der Bereitliste.",
              explanation: {
                action: "P4 von t = 7 bis t = 8 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 8 läuft das Quantum ab; P4 hat noch 4 ms und geht ans Ende der Bereitliste, hinter den gerade angekommenen P5."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 7, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 7, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "3" },
                { kind: "array-index", array: "queue", index: 2, value: "2" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 8: P3 rechnet bis t = 9",
              text: "Bereitliste: P3, P2, P5, P4. P3 steht vorne in der Bereitliste.",
              explanation: {
                action: "P3 von t = 8 bis t = 9 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 9 läuft das Quantum ab; P3 hat noch 2 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 8, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 8, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "2" },
                { kind: "array-index", array: "queue", index: 2, value: "5" },
                { kind: "array-index", array: "queue", index: 3, value: "4" }
              ]
            },
            {
              title: "t = 9: P2 rechnet bis t = 10",
              text: "Bereitliste: P2, P5, P4, P3. P2 steht vorne in der Bereitliste.",
              explanation: {
                action: "P2 von t = 9 bis t = 10 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 10 läuft das Quantum ab; P2 hat noch 2 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 9, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 9, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "5" },
                { kind: "array-index", array: "queue", index: 2, value: "4" },
                { kind: "array-index", array: "queue", index: 3, value: "3" }
              ]
            },
            {
              title: "t = 10: P5 rechnet bis t = 11",
              text: "Bereitliste: P5, P4, P3, P2. P5 steht vorne in der Bereitliste.",
              explanation: {
                action: "P5 von t = 10 bis t = 11 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 11 läuft das Quantum ab; P5 hat noch 1 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 10, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 10, value: "5" },
                { kind: "array-index", array: "queue", index: 0, value: "5" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "3" },
                { kind: "array-index", array: "queue", index: 3, value: "2" }
              ]
            },
            {
              title: "t = 11: P4 rechnet bis t = 12",
              text: "Bereitliste: P4, P3, P2, P5. P4 steht vorne in der Bereitliste.",
              explanation: {
                action: "P4 von t = 11 bis t = 12 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 12 läuft das Quantum ab; P4 hat noch 3 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 11, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 11, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "3" },
                { kind: "array-index", array: "queue", index: 2, value: "2" },
                { kind: "array-index", array: "queue", index: 3, value: "5" }
              ]
            },
            {
              title: "t = 12: P3 rechnet bis t = 13",
              text: "Bereitliste: P3, P2, P5, P4. P3 steht vorne in der Bereitliste.",
              explanation: {
                action: "P3 von t = 12 bis t = 13 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 13 läuft das Quantum ab; P3 hat noch 1 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 12, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 12, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "2" },
                { kind: "array-index", array: "queue", index: 2, value: "5" },
                { kind: "array-index", array: "queue", index: 3, value: "4" }
              ]
            },
            {
              title: "t = 13: P2 rechnet bis t = 14",
              text: "Bereitliste: P2, P5, P4, P3. P2 steht vorne in der Bereitliste.",
              explanation: {
                action: "P2 von t = 13 bis t = 14 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 14 läuft das Quantum ab; P2 hat noch 1 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 13, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 13, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "5" },
                { kind: "array-index", array: "queue", index: 2, value: "4" },
                { kind: "array-index", array: "queue", index: 3, value: "3" }
              ]
            },
            {
              title: "t = 14: P5 rechnet bis t = 15",
              text: "Bereitliste: P5, P4, P3, P2. P5 steht vorne in der Bereitliste.",
              explanation: {
                action: "P5 von t = 14 bis t = 15 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P5 ist bei t = 15 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 14, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 14, value: "5" },
                { kind: "array-index", array: "queue", index: 0, value: "5" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "3" },
                { kind: "array-index", array: "queue", index: 3, value: "2" }
              ]
            },
            {
              title: "t = 15: P4 rechnet bis t = 16",
              text: "Bereitliste: P4, P3, P2. P4 steht vorne in der Bereitliste.",
              explanation: {
                action: "P4 von t = 15 bis t = 16 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 16 läuft das Quantum ab; P4 hat noch 2 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 15, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 15, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "3" },
                { kind: "array-index", array: "queue", index: 2, value: "2" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 16: P3 rechnet bis t = 17",
              text: "Bereitliste: P3, P2, P4. P3 steht vorne in der Bereitliste.",
              explanation: {
                action: "P3 von t = 16 bis t = 17 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P3 ist bei t = 17 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 16, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 16, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "2" },
                { kind: "array-index", array: "queue", index: 2, value: "4" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 17: P2 rechnet bis t = 18",
              text: "Bereitliste: P2, P4. P2 steht vorne in der Bereitliste.",
              explanation: {
                action: "P2 von t = 17 bis t = 18 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P2 ist bei t = 18 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 17, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 17, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 18: P4 rechnet bis t = 20",
              text: "Nur P4 ist bereit. Nach jedem Quantum ist die Bereitliste leer, deshalb rechnet P4 gleich weiter.",
              explanation: {
                action: "P4 von t = 18 bis t = 20 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P4 ist bei t = 20 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 18, role: "active" },
                { kind: "array-index", array: "cpu", index: 19, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 18, value: "4" },
                { kind: "array-index", array: "cpu", index: 19, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "Ergebnis: Lauf- und Wartezeiten",
              text: "Laufzeit von der Ankunft bis zum Ende: P1 4, P2 16, P3 13, P4 14, P5 7. Wartezeit: P1 1, P2 10, P3 9, P4 9, P5 5. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
              source: "07_rabs-scheduling.pdf, Folie 26",
              formula: "Ø Laufzeit = (4 + 16 + 13 + 14 + 7) / 5 = 10,8 ms",
              product: "Ø Wartezeit = (1 + 10 + 9 + 9 + 5) / 5 = 6,8 ms",
              values: [
                { kind: "array-index", array: "queue", index: 0, value: "" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            }
          ]
        },
        {
          id: "scheduling-rr-4",
          title: "Round Robin mit τ = 4",
          afterCard: "Zeitquantum bei Round Robin",
          source: "07_rabs-scheduling.pdf, Folien 14, 22-23, 27-28",
          intro: "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms): P1: a = 0, t = 3; P2: a = 2, t = 6; P3: a = 4, t = 4; P4: a = 6, t = 5; P5: a = 8, t = 2. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links.",
          legend: { active: "Bekommt die CPU" },
          visual: {
            kind: "array",
            values: [],
            arrays: [
              {
                id: "cpu",
                label: "CPU",
                values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
              },
              {
                id: "queue",
                label: "Bereit",
                values: ["", "", "", ""]
              }
            ]
          },
          steps: [
            {
              title: "t = 0: P1 rechnet bis t = 3",
              text: "Nur P1 ist bereit. Währenddessen kommen an: P2 (t = 2).",
              explanation: {
                action: "P1 von t = 0 bis t = 3 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P1 ist bei t = 3 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 0, role: "active" },
                { kind: "array-index", array: "cpu", index: 1, role: "active" },
                { kind: "array-index", array: "cpu", index: 2, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 0, value: "1" },
                { kind: "array-index", array: "cpu", index: 1, value: "1" },
                { kind: "array-index", array: "cpu", index: 2, value: "1" },
                { kind: "array-index", array: "queue", index: 0, value: "1" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 3: P2 rechnet bis t = 7",
              text: "Nur P2 ist bereit. Währenddessen kommen an: P3 (t = 4), P4 (t = 6).",
              explanation: {
                action: "P2 von t = 3 bis t = 7 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 7 läuft das Quantum ab; P2 hat noch 2 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 3, role: "active" },
                { kind: "array-index", array: "cpu", index: 4, role: "active" },
                { kind: "array-index", array: "cpu", index: 5, role: "active" },
                { kind: "array-index", array: "cpu", index: 6, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 3, value: "2" },
                { kind: "array-index", array: "cpu", index: 4, value: "2" },
                { kind: "array-index", array: "cpu", index: 5, value: "2" },
                { kind: "array-index", array: "cpu", index: 6, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 7: P3 rechnet bis t = 11",
              text: "Bereitliste: P3, P4, P2. P3 steht vorne in der Bereitliste. Währenddessen kommen an: P5 (t = 8).",
              explanation: {
                action: "P3 von t = 7 bis t = 11 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P3 ist bei t = 11 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 7, role: "active" },
                { kind: "array-index", array: "cpu", index: 8, role: "active" },
                { kind: "array-index", array: "cpu", index: 9, role: "active" },
                { kind: "array-index", array: "cpu", index: 10, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 7, value: "3" },
                { kind: "array-index", array: "cpu", index: 8, value: "3" },
                { kind: "array-index", array: "cpu", index: 9, value: "3" },
                { kind: "array-index", array: "cpu", index: 10, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "2" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 11: P4 rechnet bis t = 15",
              text: "Bereitliste: P4, P2, P5. P4 steht vorne in der Bereitliste.",
              explanation: {
                action: "P4 von t = 11 bis t = 15 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "Bei t = 15 läuft das Quantum ab; P4 hat noch 1 ms und geht ans Ende der Bereitliste."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 11, role: "active" },
                { kind: "array-index", array: "cpu", index: 12, role: "active" },
                { kind: "array-index", array: "cpu", index: 13, role: "active" },
                { kind: "array-index", array: "cpu", index: 14, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 11, value: "4" },
                { kind: "array-index", array: "cpu", index: 12, value: "4" },
                { kind: "array-index", array: "cpu", index: 13, value: "4" },
                { kind: "array-index", array: "cpu", index: 14, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "2" },
                { kind: "array-index", array: "queue", index: 2, value: "5" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 15: P2 rechnet bis t = 17",
              text: "Bereitliste: P2, P5, P4. P2 steht vorne in der Bereitliste.",
              explanation: {
                action: "P2 von t = 15 bis t = 17 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P2 ist bei t = 17 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 15, role: "active" },
                { kind: "array-index", array: "cpu", index: 16, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 15, value: "2" },
                { kind: "array-index", array: "cpu", index: 16, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "5" },
                { kind: "array-index", array: "queue", index: 2, value: "4" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 17: P5 rechnet bis t = 19",
              text: "Bereitliste: P5, P4. P5 steht vorne in der Bereitliste.",
              explanation: {
                action: "P5 von t = 17 bis t = 19 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P5 ist bei t = 19 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 17, role: "active" },
                { kind: "array-index", array: "cpu", index: 18, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 17, value: "5" },
                { kind: "array-index", array: "cpu", index: 18, value: "5" },
                { kind: "array-index", array: "queue", index: 0, value: "5" },
                { kind: "array-index", array: "queue", index: 1, value: "4" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 19: P4 rechnet bis t = 20",
              text: "Nur P4 ist bereit.",
              explanation: {
                action: "P4 von t = 19 bis t = 20 ausführen.",
                rule: "RR: Ankunftsreihenfolge; nach dem Quantum wird verdrängt. Neue und verdrängte Prozesse gehen ans Ende, neue haben Vorrang.",
                decision: "P4 ist bei t = 20 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 19, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 19, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "Ergebnis: Lauf- und Wartezeiten",
              text: "Laufzeit von der Ankunft bis zum Ende: P1 3, P2 15, P3 7, P4 14, P5 11. Wartezeit: P1 0, P2 9, P3 3, P4 9, P5 9. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
              source: "07_rabs-scheduling.pdf, Folie 28",
              formula: "Ø Laufzeit = (3 + 15 + 7 + 14 + 11) / 5 = 10 ms",
              product: "Ø Wartezeit = (0 + 9 + 3 + 9 + 9) / 5 = 6 ms",
              values: [
                { kind: "array-index", array: "queue", index: 0, value: "" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            }
          ]
        },
        {
          id: "scheduling-prio-np",
          title: "PRIO-NP am Folienbeispiel",
          afterCard: "PRIO-NP",
          source: "07_rabs-scheduling.pdf, Folien 14, 29-31",
          intro: "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms, Priorität P): P1: a = 0, t = 3, P = 2; P2: a = 2, t = 6, P = 4; P3: a = 4, t = 4, P = 1; P4: a = 6, t = 5, P = 5; P5: a = 8, t = 2, P = 3. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links. Im Folienbeispiel läuft bei Konkurrenz der Prozess mit der größeren Zahl P zuerst.",
          legend: { active: "Bekommt die CPU" },
          visual: {
            kind: "array",
            values: [],
            arrays: [
              {
                id: "cpu",
                label: "CPU",
                values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
              },
              {
                id: "queue",
                label: "Bereit",
                values: ["", "", "", ""]
              }
            ]
          },
          steps: [
            {
              title: "t = 0: P1 rechnet bis t = 3",
              text: "Nur P1 ist bereit. Währenddessen kommen an: P2 (t = 2).",
              explanation: {
                action: "P1 von t = 0 bis t = 3 ausführen.",
                rule: "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                decision: "P1 ist bei t = 3 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 0, role: "active" },
                { kind: "array-index", array: "cpu", index: 1, role: "active" },
                { kind: "array-index", array: "cpu", index: 2, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 0, value: "1" },
                { kind: "array-index", array: "cpu", index: 1, value: "1" },
                { kind: "array-index", array: "cpu", index: 2, value: "1" },
                { kind: "array-index", array: "queue", index: 0, value: "1" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 3: P2 rechnet bis t = 9",
              text: "Nur P2 ist bereit. Währenddessen kommen an: P3 (t = 4), P4 (t = 6), P5 (t = 8).",
              explanation: {
                action: "P2 von t = 3 bis t = 9 ausführen.",
                rule: "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                decision: "P2 ist bei t = 9 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 3, role: "active" },
                { kind: "array-index", array: "cpu", index: 4, role: "active" },
                { kind: "array-index", array: "cpu", index: 5, role: "active" },
                { kind: "array-index", array: "cpu", index: 6, role: "active" },
                { kind: "array-index", array: "cpu", index: 7, role: "active" },
                { kind: "array-index", array: "cpu", index: 8, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 3, value: "2" },
                { kind: "array-index", array: "cpu", index: 4, value: "2" },
                { kind: "array-index", array: "cpu", index: 5, value: "2" },
                { kind: "array-index", array: "cpu", index: 6, value: "2" },
                { kind: "array-index", array: "cpu", index: 7, value: "2" },
                { kind: "array-index", array: "cpu", index: 8, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 9: P4 rechnet bis t = 14",
              text: "Bereitliste: P4, P5, P3. P4 hat mit P = 5 die höchste Priorität (P5: 3, P3: 1).",
              explanation: {
                action: "P4 von t = 9 bis t = 14 ausführen.",
                rule: "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                decision: "P4 ist bei t = 14 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 9, role: "active" },
                { kind: "array-index", array: "cpu", index: 10, role: "active" },
                { kind: "array-index", array: "cpu", index: 11, role: "active" },
                { kind: "array-index", array: "cpu", index: 12, role: "active" },
                { kind: "array-index", array: "cpu", index: 13, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 9, value: "4" },
                { kind: "array-index", array: "cpu", index: 10, value: "4" },
                { kind: "array-index", array: "cpu", index: 11, value: "4" },
                { kind: "array-index", array: "cpu", index: 12, value: "4" },
                { kind: "array-index", array: "cpu", index: 13, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "5" },
                { kind: "array-index", array: "queue", index: 2, value: "3" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 14: P5 rechnet bis t = 16",
              text: "Bereitliste: P5, P3. P5 hat mit P = 3 die höchste Priorität (P3: 1).",
              explanation: {
                action: "P5 von t = 14 bis t = 16 ausführen.",
                rule: "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                decision: "P5 ist bei t = 16 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 14, role: "active" },
                { kind: "array-index", array: "cpu", index: 15, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 14, value: "5" },
                { kind: "array-index", array: "cpu", index: 15, value: "5" },
                { kind: "array-index", array: "queue", index: 0, value: "5" },
                { kind: "array-index", array: "queue", index: 1, value: "3" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 16: P3 rechnet bis t = 20",
              text: "Nur P3 ist bereit.",
              explanation: {
                action: "P3 von t = 16 bis t = 20 ausführen.",
                rule: "PRIO-NP: Neuankömmlinge werden nach ihrer Priorität in die Bereitliste eingeordnet; der Prozess an der Spitze läuft bis zum Ende.",
                decision: "P3 ist bei t = 20 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 16, role: "active" },
                { kind: "array-index", array: "cpu", index: 17, role: "active" },
                { kind: "array-index", array: "cpu", index: 18, role: "active" },
                { kind: "array-index", array: "cpu", index: 19, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 16, value: "3" },
                { kind: "array-index", array: "cpu", index: 17, value: "3" },
                { kind: "array-index", array: "cpu", index: 18, value: "3" },
                { kind: "array-index", array: "cpu", index: 19, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "Ergebnis: Lauf- und Wartezeiten",
              text: "Laufzeit von der Ankunft bis zum Ende: P1 3, P2 7, P3 16, P4 8, P5 8. Wartezeit: P1 0, P2 1, P3 12, P4 3, P5 6. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
              source: "07_rabs-scheduling.pdf, Folie 31",
              formula: "Ø Laufzeit = (3 + 7 + 16 + 8 + 8) / 5 = 8,4 ms",
              product: "Ø Wartezeit = (0 + 1 + 12 + 3 + 6) / 5 = 4,4 ms",
              values: [
                { kind: "array-index", array: "queue", index: 0, value: "" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            }
          ]
        },
        {
          id: "scheduling-prio-p",
          title: "PRIO-P am Folienbeispiel",
          afterCard: "PRIO-P",
          source: "07_rabs-scheduling.pdf, Folien 14, 32-34",
          intro: "Beispiel-Prozessliste der Folien (Ankunftszeit a, Bedienzeit t in ms, Priorität P): P1: a = 0, t = 3, P = 2; P2: a = 2, t = 6, P = 4; P3: a = 4, t = 4, P = 1; P4: a = 6, t = 5, P = 5; P5: a = 8, t = 2, P = 3. Zeile CPU: welcher Prozess in welcher Millisekunde rechnet. Zeile Bereit: die Bereitliste im Moment der Entscheidung, vorne links. Im Folienbeispiel läuft bei Konkurrenz der Prozess mit der größeren Zahl P zuerst.",
          legend: { active: "Bekommt die CPU" },
          visual: {
            kind: "array",
            values: [],
            arrays: [
              {
                id: "cpu",
                label: "CPU",
                values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
              },
              {
                id: "queue",
                label: "Bereit",
                values: ["", "", "", ""]
              }
            ]
          },
          steps: [
            {
              title: "t = 0: P1 rechnet bis t = 2",
              text: "Nur P1 ist bereit.",
              explanation: {
                action: "P1 von t = 0 bis t = 2 ausführen.",
                rule: "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                decision: "Bei t = 2 kommt P2 mit höherer Priorität an (4 > 2) und verdrängt P1; P1 hat noch 1 ms."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 0, role: "active" },
                { kind: "array-index", array: "cpu", index: 1, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 0, value: "1" },
                { kind: "array-index", array: "cpu", index: 1, value: "1" },
                { kind: "array-index", array: "queue", index: 0, value: "1" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 2: P2 rechnet bis t = 6",
              text: "Bereitliste: P2, P1. P2 hat mit P = 4 die höchste Priorität (P1: 2). Währenddessen kommen an: P3 (t = 4).",
              explanation: {
                action: "P2 von t = 2 bis t = 6 ausführen.",
                rule: "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                decision: "Bei t = 6 kommt P4 mit höherer Priorität an (5 > 4) und verdrängt P2; P2 hat noch 2 ms."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 2, role: "active" },
                { kind: "array-index", array: "cpu", index: 3, role: "active" },
                { kind: "array-index", array: "cpu", index: 4, role: "active" },
                { kind: "array-index", array: "cpu", index: 5, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 2, value: "2" },
                { kind: "array-index", array: "cpu", index: 3, value: "2" },
                { kind: "array-index", array: "cpu", index: 4, value: "2" },
                { kind: "array-index", array: "cpu", index: 5, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "1" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 6: P4 rechnet bis t = 11",
              text: "Bereitliste: P4, P2, P1, P3. P4 hat mit P = 5 die höchste Priorität (P2: 4, P1: 2, P3: 1). Währenddessen kommen an: P5 (t = 8).",
              explanation: {
                action: "P4 von t = 6 bis t = 11 ausführen.",
                rule: "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                decision: "P4 ist bei t = 11 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 6, role: "active" },
                { kind: "array-index", array: "cpu", index: 7, role: "active" },
                { kind: "array-index", array: "cpu", index: 8, role: "active" },
                { kind: "array-index", array: "cpu", index: 9, role: "active" },
                { kind: "array-index", array: "cpu", index: 10, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 6, value: "4" },
                { kind: "array-index", array: "cpu", index: 7, value: "4" },
                { kind: "array-index", array: "cpu", index: 8, value: "4" },
                { kind: "array-index", array: "cpu", index: 9, value: "4" },
                { kind: "array-index", array: "cpu", index: 10, value: "4" },
                { kind: "array-index", array: "queue", index: 0, value: "4" },
                { kind: "array-index", array: "queue", index: 1, value: "2" },
                { kind: "array-index", array: "queue", index: 2, value: "1" },
                { kind: "array-index", array: "queue", index: 3, value: "3" }
              ]
            },
            {
              title: "t = 11: P2 rechnet bis t = 13",
              text: "Bereitliste: P2, P5, P1, P3. P2 hat mit P = 4 die höchste Priorität (P5: 3, P1: 2, P3: 1).",
              explanation: {
                action: "P2 von t = 11 bis t = 13 ausführen.",
                rule: "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                decision: "P2 ist bei t = 13 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 11, role: "active" },
                { kind: "array-index", array: "cpu", index: 12, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 11, value: "2" },
                { kind: "array-index", array: "cpu", index: 12, value: "2" },
                { kind: "array-index", array: "queue", index: 0, value: "2" },
                { kind: "array-index", array: "queue", index: 1, value: "5" },
                { kind: "array-index", array: "queue", index: 2, value: "1" },
                { kind: "array-index", array: "queue", index: 3, value: "3" }
              ]
            },
            {
              title: "t = 13: P5 rechnet bis t = 15",
              text: "Bereitliste: P5, P1, P3. P5 hat mit P = 3 die höchste Priorität (P1: 2, P3: 1).",
              explanation: {
                action: "P5 von t = 13 bis t = 15 ausführen.",
                rule: "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                decision: "P5 ist bei t = 15 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 13, role: "active" },
                { kind: "array-index", array: "cpu", index: 14, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 13, value: "5" },
                { kind: "array-index", array: "cpu", index: 14, value: "5" },
                { kind: "array-index", array: "queue", index: 0, value: "5" },
                { kind: "array-index", array: "queue", index: 1, value: "1" },
                { kind: "array-index", array: "queue", index: 2, value: "3" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 15: P1 rechnet bis t = 16",
              text: "Bereitliste: P1, P3. P1 hat mit P = 2 die höchste Priorität (P3: 1).",
              explanation: {
                action: "P1 von t = 15 bis t = 16 ausführen.",
                rule: "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                decision: "P1 ist bei t = 16 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 15, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 15, value: "1" },
                { kind: "array-index", array: "queue", index: 0, value: "1" },
                { kind: "array-index", array: "queue", index: 1, value: "3" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "t = 16: P3 rechnet bis t = 20",
              text: "Nur P3 ist bereit.",
              explanation: {
                action: "P3 von t = 16 bis t = 20 ausführen.",
                rule: "PRIO-P: wie PRIO-NP, aber der rechnende Prozess wird verdrängt, wenn er geringere Priorität hat als der Neuankömmling.",
                decision: "P3 ist bei t = 20 fertig."
              },
              highlights: [
                { kind: "array-index", array: "cpu", index: 16, role: "active" },
                { kind: "array-index", array: "cpu", index: 17, role: "active" },
                { kind: "array-index", array: "cpu", index: 18, role: "active" },
                { kind: "array-index", array: "cpu", index: 19, role: "active" },
                { kind: "array-index", array: "queue", index: 0, role: "active" }
              ],
              values: [
                { kind: "array-index", array: "cpu", index: 16, value: "3" },
                { kind: "array-index", array: "cpu", index: 17, value: "3" },
                { kind: "array-index", array: "cpu", index: 18, value: "3" },
                { kind: "array-index", array: "cpu", index: 19, value: "3" },
                { kind: "array-index", array: "queue", index: 0, value: "3" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            },
            {
              title: "Ergebnis: Lauf- und Wartezeiten",
              text: "Laufzeit von der Ankunft bis zum Ende: P1 16, P2 11, P3 16, P4 5, P5 7. Wartezeit: P1 13, P2 5, P3 12, P4 0, P5 5. Die Wartezeit ist die Laufzeit ohne die eigene Bedienzeit.",
              source: "07_rabs-scheduling.pdf, Folie 34",
              formula: "Ø Laufzeit = (16 + 11 + 16 + 5 + 7) / 5 = 11 ms",
              product: "Ø Wartezeit = (13 + 5 + 12 + 0 + 5) / 5 = 7 ms",
              values: [
                { kind: "array-index", array: "queue", index: 0, value: "" },
                { kind: "array-index", array: "queue", index: 1, value: "" },
                { kind: "array-index", array: "queue", index: 2, value: "" },
                { kind: "array-index", array: "queue", index: 3, value: "" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "synchronisation",
      title: "Synchronisation",
      icon: "🔐",
      cards: [
        {
          title: "Prozessinteraktion",
          body: "Prozesse als Teile komplexer Programmsysteme müssen Daten austauschen, sich aufrufen, aufeinander warten, sich auslösen und sich abstimmen. Operationen zur Prozessinteraktion sind neben Prozessverwaltung ein wesentlicher Aufgabenbereich eines Betriebssystemkerns.",
          source: "08_rabs-synchro-1.pdf, Folien 4-6"
        },
        {
          title: "Zeitlicher und funktionaler Aspekt",
          body: "Prozessinteraktion besitzt einen zeitlichen Aspekt, nämlich Ablaufabstimmung beziehungsweise Koordination und Synchronisation, und einen funktionalen Aspekt, nämlich Informationsaustausch beziehungsweise Kommunikation und Kooperation.",
          source: "08_rabs-synchro-1.pdf, Folie 7"
        },
        {
          title: "Nebenläufigkeit",
          body: "Mehrere Abläufe heißen nebenläufig, wenn sie parallel oder quasi-parallel ausgeführt werden und inhaltlich zusammenwirken, also voneinander abhängig sind und sich gegenseitig beeinflussen können: Nebenläufigkeit = Parallelität + Abhängigkeit.",
          tag: "def",
          source: "08_rabs-synchro-1.pdf, Folien 12-13"
        },
        {
          title: "Zentrale Konzepte der Nebenläufigkeit",
          body: "Zentrale Konzepte sind Kommunikation zwischen Prozessen, gemeinsame Nutzung von Ressourcen, Wettbewerb um Ressourcen, Synchronisierung der Aktivitäten mehrerer Prozesse und Zuteilung von Prozessorzeit.",
          source: "08_rabs-synchro-1.pdf, Folie 14"
        },
        {
          title: "Gemeinsame Ressourcen",
          body: "Nebenläufige Prozesse können sich über gemeinsamen Adressbereich oder gemeinsame Ressourcen wie Dateien und Geräte beeinflussen. Dateninkonsistenzen können entstehen; Ergebnisse können von der Ausführungsreihenfolge abhängen.",
          tag: "wichtig",
          source: "08_rabs-synchro-1.pdf, Folie 15"
        },
        {
          title: "Atomare Operationen und DMA",
          body: "Im Mehrprozessorsystem bietet RAM über den Bus atomare Lese-/Schreiboperationen an. DMA-fähige Geräte zerlegen Kopiervorgänge in kleine Teile; für jeden Teil erhält das Gerät den Bus atomar, damit Wartezeiten anderer Geräte und CPUs nicht zu lang werden.",
          source: "08_rabs-synchro-1.pdf, Folien 17-18"
        },
        {
          title: "Allgemeine Bemerkung zur Fehlersuche",
          body: "Threads können sich wegen Pausen überholen und unterschiedliche Geschwindigkeiten haben. Gibt es eine einzige Konstellation, die zu einem Fehler führt, ist die Software fehlerhaft, selbst wenn die Wahrscheinlichkeit minimal ist.",
          source: "08_rabs-synchro-1.pdf, Folie 19"
        },
        {
          title: "Too much milk: Problem",
          body: "Alice und Bob teilen einen Kühlschrank, es soll stets genug, aber nicht zu viel Milch da sein. Naive Lösung: Wer sieht, dass keine Milch da ist, geht welche kaufen. Das scheitert: Beide sehen, dass keine Milch da ist, und beide kaufen, also ist zu viel Milch im Kühlschrank. Ziel mit Notizen am Kühlschrank: Mindestens einer und höchstens einer kauft Milch, wenn keine da ist. Beide sehen sich nicht und kommunizieren nur über Notizen.",
          tag: "beispiel",
          source: "08_rabs-synchro-1.pdf, Folien 22-25"
        },
        {
          title: "Too much milk: Lösungsversuche",
          body: "1. Versuch: Wenn keine Notiz und keine Milch da ist, Notiz schreiben, kaufen, Notiz entfernen. Scheitert bei der Sequenz A1, A2, B1, B2: Beide prüfen, bevor einer die Notiz geschrieben hat. 2. Versuch mit zwei Notizen: Zuerst die eigene Notiz schreiben, dann nur kaufen, wenn keine Notiz des anderen da ist. Scheitert bei A1, B1, A2, B2, A5, B5: Beide sehen die Notiz des anderen, und niemand kauft. Die korrekte Lösung nutzt zusätzliche Notizen, um den Vorrang zu entscheiden, und wartet aktiv (<code>while … do skip</code>), bevor Milch geprüft und gekauft wird.",
          tag: "beispiel",
          source: "08_rabs-synchro-1.pdf, Folien 26-31"
        },
        {
          title: "Mutual-Exclusion-Problem",
          body: "Das Mutual-Exclusion-Problem fordert die Garantie, dass exklusiver Zugriff auf eine gemeinsam genutzte Ressource sichergestellt wird. Zugriffscode heißt kritischer Abschnitt; Ziel ist die Vermeidung von Race Conditions durch Synchronisation.",
          tag: "def",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          title: "Race Condition",
          body: "Eine Race Condition ist eine Situation, in der mehrere Prozesse konkurrierend auf gemeinsame Daten zugreifen und mindestens einer sie manipuliert. Der letztendliche Wert hängt von der Reihenfolge der Zugriffe ab und kann inkorrekt sein.",
          tag: "wichtig",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          title: "Ziel der Synchronisation",
          body: "Synchronisation bringt Aktivitäten verschiedener nebenläufiger Prozesse in eine Reihenfolge. Durch wechselseitigen Ausschluss wird Zugriff auf gemeinsam benutzte Betriebsmittel so abgestimmt, dass Datenkonsistenz und Korrektheit erreicht werden.",
          source: "08_rabs-synchro-1.pdf, Folie 33"
        },
        {
          title: "Kritischer Abschnitt",
          body: "Ein kritischer Abschnitt ist ein Programmabschnitt, der Zugriffe auf ein gemeinsam genutztes Objekt enthält. Zur Vermeidung von Inkonsistenzen muss er geschützt werden; zu jeder Zeit darf nur ein Prozess die Aktivität ausführen.",
          tag: "def",
          source: "08_rabs-synchro-1.pdf, Folie 34"
        },
        {
          title: "Anforderungen an wechselseitigen Ausschluss",
          body: "Die Lösung darf keine Annahmen über Geschwindigkeit oder CPU-Anzahl machen. Sie muss Mutual Exclusion, Progress ohne Deadlock, Bounded Waiting ohne Starvation, Nicht-Behinderung durch Prozesse außerhalb des kritischen Abschnitts und sofortigen Zugang bei freiem Abschnitt sicherstellen.",
          source: "08_rabs-synchro-1.pdf, Folien 36-37"
        },
        {
          title: "Aktives Warten: typische Fehler",
          body: "Interruptsperren blockieren E/A, nehmen dem Betriebssystem Kontrolle und funktionieren nur auf Einprozessorsystemen. Eine einfache Sperrvariable leidet an Race Conditions. Strikter Wechsel verletzt Anforderungen, weil Prozesse abwechseln müssen. Erst belegen, dann prüfen kann zur Verklemmung führen.",
          source: "08_rabs-synchro-1.pdf, Folien 38-41"
        }
      ],
      flashcards: [
        {
          front: "Welche drei Grundformen der Interaktion stehen in Beziehung?",
          back: "Koordination, Kommunikation und Kooperation; Koordination ist elementar, weil Kommunikation und Kooperation zeitliche Abstimmung benötigen.",
          source: "08_rabs-synchro-1.pdf, Folien 7-8"
        },
        {
          front: "Was bedeutet Nebenläufigkeit laut Definition?",
          back: "Parallel oder quasi-parallel ausgeführte Abläufe, die inhaltlich zusammenwirken, voneinander abhängig sind und sich gegenseitig beeinflussen können.",
          source: "08_rabs-synchro-1.pdf, Folie 13"
        },
        {
          front: "Wie arbeitet DMA laut Folie?",
          back: "Bei DMA werden Kopiervorgänge in kleine Teile zerlegt; jeder Teil erhält den Bus atomar.",
          source: "08_rabs-synchro-1.pdf, Folie 18"
        },
        {
          front: "Welche beiden Bedingungen muss die Too-much-milk-Lösung erfüllen?",
          back: "Wenn keine Milch da ist, geht mindestens eine und höchstens eine der beiden Personen Milch kaufen.",
          source: "08_rabs-synchro-1.pdf, Folie 25"
        },
        {
          front: "Warum scheitert der 1. Lösungsversuch bei Too much milk?",
          back: "Bei der Sequenz A1, A2, B1, B2 prüfen beide auf Notiz und Milch, bevor einer seine Notiz geschrieben hat; beide kaufen.",
          source: "08_rabs-synchro-1.pdf, Folie 26"
        },
        {
          front: "Warum scheitert der 2. Lösungsversuch bei Too much milk?",
          back: "Bei der Sequenz A1, B1, A2, B2, A5, B5 schreiben beide ihre Notiz, sehen dann die des anderen und entfernen ihre eigene; niemand kauft Milch.",
          source: "08_rabs-synchro-1.pdf, Folie 29"
        },
        {
          front: "Was ist eine Race Condition?",
          back: "Mehrere Prozesse greifen konkurrierend auf gemeinsame Daten zu, mindestens einer manipuliert sie, und das Ergebnis hängt von der Zugriffsreihenfolge ab.",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          front: "Was bedeutet Mutual Exclusion?",
          back: "Mutual Exclusion bedeutet, dass exklusiver Zugriff auf eine gemeinsam genutzte Ressource garantiert wird.",
          source: "08_rabs-synchro-1.pdf, Folie 32"
        },
        {
          front: "Was ist ein kritischer Abschnitt?",
          back: "Ein Programmabschnitt, der Zugriffe auf ein gemeinsam genutztes Objekt beziehungsweise eine kritische Ressource enthält.",
          source: "08_rabs-synchro-1.pdf, Folie 34"
        },
        {
          front: "Was fordert Bounded Waiting?",
          back: "Bounded Waiting fordert, dass kein Prozess ewig warten muss, bis er in den kritischen Abschnitt eintreten darf.",
          source: "08_rabs-synchro-1.pdf, Folie 37"
        },
        {
          front: "Warum ist eine einfache Sperrvariable problematisch?",
          back: "Sie kann selbst eine Race Condition erzeugen, weil Prüfung und Setzen nicht atomar geschützt sind.",
          source: "08_rabs-synchro-1.pdf, Folie 39"
        }
      ]
    },
    {
      id: "semaphore-deadlocks",
      title: "Semaphore & Deadlocks",
      icon: "🚦",
      cards: [
        {
          title: "Semaphore",
          body: "Semaphore sind ein allgemeines Synchronisationskonstrukt nach Dijkstra. Sie lösen das Mutual-Exclusion-Problem auf Basis von Sperren ohne aktives Warten und erlauben neben wechselseitigem Ausschluss auch Reihenfolgensynchronisation.",
          tag: "def",
          source: "09_rabs-synchro-2.pdf, Folie 5"
        },
        {
          title: "Aufbau eines Semaphors",
          body: "Ein Semaphor besteht aus Semaphorzähler und Warteschlange für Prozesse oder Threads, die am Eingang eines kritischen Abschnitts warten müssen. Zähler und Warteschlange sind geschützt und nur über Semaphoroperationen manipulierbar.",
          source: "09_rabs-synchro-2.pdf, Folie 6"
        },
        {
          title: "Semaphor-Initialisierung",
          body: "Der Semaphorzähler wird mit der Anzahl der Prozesse initialisiert, die gleichzeitig im kritischen Abschnitt sein dürfen; die Warteschlange wird bei der Initialisierung geleert.",
          source: "09_rabs-synchro-2.pdf, Folie 7"
        },
        {
          title: "Wait und Signal",
          body: "<code>Wait()</code>, auch <code>P()</code> oder <code>down()</code>, dekrementiert den Zähler; bei negativem Wert blockiert der Prozess. <code>Signal()</code>, auch <code>V()</code> oder <code>up()</code>, inkrementiert den Zähler und entblockt gegebenenfalls einen wartenden Prozess.",
          tag: "wichtig",
          source: "09_rabs-synchro-2.pdf, Folien 8-9"
        },
        {
          title: "Semaphor-Funktionsweise",
          body: "Semaphoroperationen sind atomar, damit Warteschlange und Zähler konsistent bleiben. Zähler größer oder gleich 0 bedeutet Anzahl freier Ressourcen; Zähler kleiner 0 bedeutet Anzahl wartender Prozesse. Es gibt kein aktives Warten.",
          source: "09_rabs-synchro-2.pdf, Folie 10"
        },
        {
          title: "Mutex-Semaphor",
          body: "Für wechselseitigen Ausschluss wird ein Semaphor mit 1 initialisiert. Ein Prozess tritt mit <code>Wait()</code> in den kritischen Abschnitt ein und verlässt ihn mit <code>Signal()</code>.",
          source: "09_rabs-synchro-2.pdf, Folie 12"
        },
        {
          title: "Betriebsmittel-Zugangskontrolle",
          body: "Für jedes Betriebsmittel gibt es genau einen Semaphor, der wie beim kritischen Abschnitt den wechselseitigen Ausschluss realisiert.",
          source: "09_rabs-synchro-2.pdf, Folie 13"
        },
        {
          title: "Reihenfolgensynchronisation",
          body: "Soll Prozess 1 eine Datei erst lesen, nachdem Prozess 0 sie erzeugt hat, wird der Semaphor mit 0 vorbelegt. Prozess 1 blockiert bei <code>Wait()</code>, bis Prozess 0 mit <code>Signal()</code> die Wartebedingung erfüllt.",
          source: "09_rabs-synchro-2.pdf, Folie 14"
        },
        {
          title: "Realisierung von Semaphoren",
          body: "Bei Kernel-Threads werden Semaphore im Betriebssystemkern realisiert; Operationen sind Systemaufrufe. Atomare Ausführung wird durch Interrupt-Sperre und gegebenenfalls Spinlocks gesichert.",
          source: "09_rabs-synchro-2.pdf, Folie 15"
        },
        {
          title: "Bewertung von Semaphoren",
          body: "Semaphore sind ein allgemeines, leistungsfähiges Konzept zur Koordination nebenläufiger Prozesse. Sie kontrollieren, wie viele Prozesse eine Ressource nutzen; der wechselseitige Ausschluss ist der Spezialfall.",
          source: "09_rabs-synchro-2.pdf, Folie 16"
        },
        {
          title: "Deadlock",
          body: "Ein Deadlock ist eine Situation, in der sich Prozesse gegenseitig sperren, weil sie auf Ereignisse warten, die von einem anderen wartenden Prozess nicht freigegeben werden können. Alle beteiligten Prozesse warten ewig; im OS-Kontext ist das Ereignis meist die Freigabe einer Ressource.",
          tag: "def",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          title: "Livelock",
          body: "Ein Livelock ist eine spezielle Art von Verklemmung, in der Prozesse nicht in einem Wartezustand verharren, sondern ständig zwischen sich wiederholenden Zuständen wechseln, aus denen kein Entkommen möglich ist.",
          source: "09_rabs-synchro-2.pdf, Folie 21"
        },
        {
          title: "Entziehbare und nichtentziehbare Betriebsmittel",
          body: "Entziehbare Betriebsmittel können einem Prozess ohne Schaden wieder entzogen werden, etwa Prozessor oder Hauptspeicher. Nichtentziehbare Betriebsmittel können nicht entzogen werden, ohne dass die Ausführung fehlschlägt, etwa ein CD-Brenner.",
          source: "09_rabs-synchro-2.pdf, Folie 22"
        },
        {
          title: "Coffman-Bedingungen",
          body: "Die vier Deadlock-Bedingungen sind wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit und zyklisches Warten. Alle vier Bedingungen zusammen sind notwendig und hinreichend für eine Verklemmung.",
          tag: "wichtig",
          source: "09_rabs-synchro-2.pdf, Folien 30-31"
        },
        {
          title: "Belegungsanforderungsgraph",
          body: "Im Belegungsanforderungsgraphen liegt ein Deadlock genau dann vor, wenn der Graph einen Zyklus enthält.",
          source: "09_rabs-synchro-2.pdf, Folie 32"
        },
        {
          title: "Strategien gegen Deadlocks",
          body: "Die Folien nennen Ignorieren, Erkennen und Beheben, Vermeidung sowie Verhinderung. Vermeidung lässt Anforderungen nicht zu, wenn dadurch ein Deadlock entstehen könnte; Verhinderung macht eine der vier Bedingungen unerfüllbar.",
          source: "09_rabs-synchro-2.pdf, Folie 50"
        }
      ],
      flashcards: [
        {
          front: "Was ist ein Semaphor?",
          back: "Ein allgemeines Synchronisationskonstrukt mit Zähler und Warteschlange, das ohne aktives Warten wechselseitigen Ausschluss und Reihenfolgensynchronisation ermöglichen kann.",
          source: "09_rabs-synchro-2.pdf, Folien 5-6"
        },
        {
          front: "Womit wird der Zähler eines Semaphors initialisiert?",
          back: "Mit der Anzahl der Prozesse, die gleichzeitig im kritischen Abschnitt sein dürfen; die Warteschlange wird dabei geleert.",
          source: "09_rabs-synchro-2.pdf, Folie 7"
        },
        {
          front: "Was passiert bei Wait() auf einem Semaphor?",
          back: "Der Zähler wird dekrementiert; ist er danach negativ, wird der Prozess blockiert und in die Warteschlange eingereiht.",
          source: "09_rabs-synchro-2.pdf, Folie 8"
        },
        {
          front: "Was macht Signal() bei Semaphoren?",
          back: "Signal() inkrementiert den Semaphorzähler und entblockt gegebenenfalls einen wartenden Prozess.",
          source: "09_rabs-synchro-2.pdf, Folie 9"
        },
        {
          front: "Was bedeutet ein Semaphorzähler kleiner 0?",
          back: "Ein Semaphorzähler kleiner 0 gibt die Anzahl wartender Prozesse an.",
          source: "09_rabs-synchro-2.pdf, Folie 10"
        },
        {
          front: "Was ist ein Deadlock?",
          back: "Eine Situation, in der Prozesse gegenseitig auf Ereignisse oder Ressourcen warten, die von anderen wartenden Prozessen nicht freigegeben werden können.",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          front: "Welche vier Coffman-Bedingungen nennt die Vorlesung?",
          back: "Wechselseitiger Ausschluss (Mutual Exclusion), Halten und Warten (Hold and Wait), Ununterbrechbarkeit (Non-Preemption) und zyklisches Warten (Cyclic Waiting).",
          source: "09_rabs-synchro-2.pdf, Folie 30"
        },
        {
          front: "Wie läuft im Folienbeispiel A–B–C–A–B–C die Verklemmung ab?",
          back: "A belegt R, B belegt S, C belegt T. Dann fordert A S an, B T und C R; alle drei warten. Der Graph enthält den Zyklus A → S → B → T → C → R → A: Deadlock.",
          source: "09_rabs-synchro-2.pdf, Folien 33-40"
        },
        {
          front: "Wie vermeidet das Betriebssystem im Folienbeispiel die Verklemmung?",
          back: "Es erkennt, dass die Belegung von T durch C zum Deadlock führen könnte, und blockiert C. B belegt T und gibt S frei, A bekommt S; sobald B auch T freigibt, kann C T belegen.",
          source: "09_rabs-synchro-2.pdf, Folien 41-49"
        },
        {
          front: "Welche vier Strategien zur Deadlock-Behandlung werden genannt?",
          back: "Ignorieren, Erkennen und Beheben, Vermeidung und Verhinderung.",
          source: "09_rabs-synchro-2.pdf, Folie 50"
        }
      ],
      walkthroughs: [
        {
          id: "deadlock-ablauf",
          title: "Ablauf einer Verklemmung",
          afterCard: "Belegungsanforderungsgraph",
          source: "09_rabs-synchro-2.pdf, Folien 33-40",
          intro: "A braucht R und S, B braucht S und T, C braucht T und R; jeder fordert seine beiden Betriebsmittel nacheinander an und gibt sie danach frei. Reihenfolge der Schritte: A–B–C–A–B–C.",
          legend: {
            done: "Belegung",
            active: "Anforderung"
          },
          visual: {
            kind: "graph",
            nodes: [
              { id: "A", x: 18, y: 18 },
              { id: "B", x: 50, y: 18 },
              { id: "C", x: 82, y: 18 },
              { id: "R", x: 18, y: 80, note: "frei" },
              { id: "S", x: 50, y: 80, note: "frei" },
              { id: "T", x: 82, y: 80, note: "frei" }
            ],
            edges: [
              { from: "A", to: "R" },
              { from: "A", to: "S" },
              { from: "B", to: "S" },
              { from: "B", to: "T" },
              { from: "C", to: "T" },
              { from: "C", to: "R" }
            ]
          },
          steps: [
            {
              title: "A belegt R",
              text: "A fordert R an und bekommt es.",
              source: "09_rabs-synchro-2.pdf, Folie 34",
              explanation: {
                action: "A fordert R an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "R ist frei → A belegt R."
              },
              values: [
                { kind: "graph-edge", from: "A", to: "R", mark: "done" },
                { kind: "graph-node", node: "R", note: "belegt: A" }
              ]
            },
            {
              title: "B belegt S",
              text: "B fordert S an und bekommt es.",
              source: "09_rabs-synchro-2.pdf, Folie 35",
              explanation: {
                action: "B fordert S an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "S ist frei → B belegt S."
              },
              values: [
                { kind: "graph-edge", from: "B", to: "S", mark: "done" },
                { kind: "graph-node", node: "S", note: "belegt: B" }
              ]
            },
            {
              title: "C belegt T",
              text: "C fordert T an und bekommt es.",
              source: "09_rabs-synchro-2.pdf, Folie 36",
              explanation: {
                action: "C fordert T an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "T ist frei → C belegt T."
              },
              values: [
                { kind: "graph-edge", from: "C", to: "T", mark: "done" },
                { kind: "graph-node", node: "T", note: "belegt: C" }
              ]
            },
            {
              title: "A fordert S an",
              text: "S ist von B belegt, A muss warten.",
              source: "09_rabs-synchro-2.pdf, Folie 37",
              explanation: {
                action: "A fordert S an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "S ist belegt → A wartet."
              },
              values: [
                { kind: "graph-node", node: "A", note: "wartet auf S" }
              ],
              highlights: [
                { kind: "graph-edge", from: "A", to: "S", role: "active" }
              ]
            },
            {
              title: "B fordert T an",
              text: "T ist von C belegt, B muss warten.",
              source: "09_rabs-synchro-2.pdf, Folie 38",
              explanation: {
                action: "B fordert T an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "T ist belegt → B wartet."
              },
              values: [
                { kind: "graph-node", node: "B", note: "wartet auf T" }
              ],
              highlights: [
                { kind: "graph-edge", from: "A", to: "S", role: "active" },
                { kind: "graph-edge", from: "B", to: "T", role: "active" }
              ]
            },
            {
              title: "C fordert R an",
              text: "R ist von A belegt, C muss warten.",
              source: "09_rabs-synchro-2.pdf, Folie 39",
              explanation: {
                action: "C fordert R an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "R ist belegt → C wartet."
              },
              values: [
                { kind: "graph-node", node: "C", note: "wartet auf R" }
              ],
              highlights: [
                { kind: "graph-edge", from: "A", to: "S", role: "active" },
                { kind: "graph-edge", from: "B", to: "T", role: "active" },
                { kind: "graph-edge", from: "C", to: "R", role: "active" }
              ]
            },
            {
              title: "Deadlock",
              text: "Der Graph enthält den Zyklus A → S → B → T → C → R → A. Jeder Prozess wartet auf ein Betriebsmittel, das ein anderer wartender Prozess belegt; keiner kann fortfahren.",
              source: "09_rabs-synchro-2.pdf, Folie 40",
              explanation: {
                action: "Graph auf einen Zyklus prüfen.",
                rule: "Im Belegungsanforderungsgraphen liegt ein Deadlock genau dann vor, wenn der Graph einen Zyklus enthält.",
                decision: "Zyklus A → S → B → T → C → R → A → Deadlock."
              },
              values: [
                { kind: "graph-node", node: "A", note: "Deadlock" },
                { kind: "graph-node", node: "B", note: "Deadlock" },
                { kind: "graph-node", node: "C", note: "Deadlock" }
              ],
              highlights: [
                { kind: "graph-edge", from: "A", to: "S", role: "active" },
                { kind: "graph-edge", from: "B", to: "T", role: "active" },
                { kind: "graph-edge", from: "C", to: "R", role: "active" }
              ]
            }
          ]
        },
        {
          id: "deadlock-vermeidung",
          title: "Verklemmung vermeiden",
          afterCard: "Strategien gegen Deadlocks",
          source: "09_rabs-synchro-2.pdf, Folien 41-49",
          intro: "Dieselben Prozesse und Anforderungen wie beim Ablauf der Verklemmung. Jetzt prüft das Betriebssystem vor jeder Zuteilung, ob sie zu einem Deadlock führen könnte.",
          legend: {
            done: "Belegung",
            active: "Anforderung"
          },
          visual: {
            kind: "graph",
            nodes: [
              { id: "A", x: 18, y: 18 },
              { id: "B", x: 50, y: 18 },
              { id: "C", x: 82, y: 18 },
              { id: "R", x: 18, y: 80, note: "frei" },
              { id: "S", x: 50, y: 80, note: "frei" },
              { id: "T", x: 82, y: 80, note: "frei" }
            ],
            edges: [
              { from: "A", to: "R" },
              { from: "A", to: "S" },
              { from: "B", to: "S" },
              { from: "B", to: "T" },
              { from: "C", to: "T" },
              { from: "C", to: "R" }
            ]
          },
          steps: [
            {
              title: "A belegt R",
              text: "A fordert R an und bekommt es.",
              source: "09_rabs-synchro-2.pdf, Folie 42",
              explanation: {
                action: "A fordert R an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "R ist frei → A belegt R."
              },
              values: [
                { kind: "graph-edge", from: "A", to: "R", mark: "done" },
                { kind: "graph-node", node: "R", note: "belegt: A" }
              ]
            },
            {
              title: "B belegt S",
              text: "B fordert S an und bekommt es.",
              source: "09_rabs-synchro-2.pdf, Folie 43",
              explanation: {
                action: "B fordert S an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "S ist frei → B belegt S."
              },
              values: [
                { kind: "graph-edge", from: "B", to: "S", mark: "done" },
                { kind: "graph-node", node: "S", note: "belegt: B" }
              ]
            },
            {
              title: "C fordert T an",
              text: "Das Betriebssystem erkennt, dass die Belegung von T durch C zu einem Deadlock führen könnte, und blockiert C, obwohl T frei ist.",
              source: "09_rabs-synchro-2.pdf, Folie 44",
              explanation: {
                action: "C fordert T an.",
                rule: "Vermeidung: Eine Anforderung wird nicht erfüllt, wenn dadurch ein Deadlock entstehen könnte.",
                decision: "T an C könnte zum Deadlock führen → C wird blockiert."
              },
              values: [
                { kind: "graph-node", node: "C", note: "blockiert" }
              ],
              highlights: [
                { kind: "graph-edge", from: "C", to: "T", role: "active" }
              ]
            },
            {
              title: "A fordert S an",
              text: "S ist von B belegt, A muss warten.",
              source: "09_rabs-synchro-2.pdf, Folie 45",
              explanation: {
                action: "A fordert S an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "S ist belegt → A wartet."
              },
              values: [
                { kind: "graph-node", node: "A", note: "wartet auf S" }
              ],
              highlights: [
                { kind: "graph-edge", from: "C", to: "T", role: "active" },
                { kind: "graph-edge", from: "A", to: "S", role: "active" }
              ]
            },
            {
              title: "B belegt T",
              text: "B fordert T an und bekommt es; B hat damit beide Betriebsmittel.",
              source: "09_rabs-synchro-2.pdf, Folie 46",
              explanation: {
                action: "B fordert T an.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "T ist frei → B belegt T."
              },
              values: [
                { kind: "graph-edge", from: "B", to: "T", mark: "done" },
                { kind: "graph-node", node: "T", note: "belegt: B" }
              ],
              highlights: [
                { kind: "graph-edge", from: "C", to: "T", role: "active" },
                { kind: "graph-edge", from: "A", to: "S", role: "active" }
              ]
            },
            {
              title: "B gibt S frei",
              text: "B ist mit S fertig und gibt es frei.",
              source: "09_rabs-synchro-2.pdf, Folie 47",
              explanation: {
                action: "B gibt S frei.",
                rule: "Ein freigegebenes Betriebsmittel kann einem wartenden Prozess zugeteilt werden.",
                decision: "S ist wieder frei; A wartet darauf."
              },
              values: [
                { kind: "graph-edge", from: "B", to: "S", mark: null },
                { kind: "graph-node", node: "S", note: "frei" }
              ],
              highlights: [
                { kind: "graph-edge", from: "C", to: "T", role: "active" },
                { kind: "graph-edge", from: "A", to: "S", role: "active" }
              ]
            },
            {
              title: "A belegt S",
              text: "A bekommt das freigegebene S und kann weiterlaufen.",
              source: "09_rabs-synchro-2.pdf, Folie 48",
              explanation: {
                action: "S an A zuteilen.",
                rule: "Ein freies Betriebsmittel wird dem anfordernden Prozess zugeteilt; ein belegtes nicht, dann muss der Prozess warten.",
                decision: "S ist frei → A belegt S."
              },
              values: [
                { kind: "graph-edge", from: "A", to: "S", mark: "done" },
                { kind: "graph-node", node: "S", note: "belegt: A" },
                { kind: "graph-node", node: "A", note: null }
              ],
              highlights: [
                { kind: "graph-edge", from: "C", to: "T", role: "active" }
              ]
            },
            {
              title: "B gibt T frei",
              text: "B gibt auch T frei. Jetzt kann C weiterlaufen und T belegen; eine Verklemmung ist nicht entstanden.",
              source: "09_rabs-synchro-2.pdf, Folie 49",
              explanation: {
                action: "B gibt T frei.",
                rule: "Vermeidung: Eine Anforderung wird nicht erfüllt, wenn dadurch ein Deadlock entstehen könnte.",
                decision: "T ist frei und führt nicht mehr zum Deadlock → C kann T belegen."
              },
              values: [
                { kind: "graph-edge", from: "B", to: "T", mark: null },
                { kind: "graph-node", node: "T", note: "frei" },
                { kind: "graph-node", node: "C", note: "kann T belegen" }
              ],
              highlights: [
                { kind: "graph-edge", from: "C", to: "T", role: "active" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ipc",
      title: "IPC & Kooperation",
      icon: "📡",
      cards: [
        {
          title: "Kommunikation und Kooperation",
          body: "Prozessinteraktion hat einen zeitlichen Aspekt der Ablaufabstimmung und einen funktionalen Aspekt des Informationsaustauschs. Kommunikation und Kooperation benötigen zeitliche Abstimmung zwischen den Interaktionspartnern.",
          source: "10_rabs-ipc.pdf, Folien 4-5"
        },
        {
          title: "Kommunikation und Synchronisation",
          body: "Durch das Kausalitätsprinzip sind Kommunikation und Synchronisation verbunden: Wenn A eine Information von B benötigt, muss A warten, bis B diese Information bereitstellt. Nachrichtenbasierte Kommunikation impliziert daher Synchronisation.",
          tag: "wichtig",
          source: "10_rabs-ipc.pdf, Folie 7"
        },
        {
          title: "Nachrichtenbasierte und speicherbasierte Kommunikation",
          body: "Nachrichtenbasierte Kommunikation sendet und empfängt Nachrichten über das Betriebssystem und ist auch über Rechnergrenzen hinweg möglich; Synchronisation ist implizit. Speicherbasierte Kommunikation nutzt gemeinsamen Speicher; Synchronisation muss explizit programmiert werden.",
          source: "10_rabs-ipc.pdf, Folie 8"
        },
        {
          title: "send und receive",
          body: "Nachrichtenaustausch wird abstrakt durch <code>send(Ziel, Nachricht)</code> und <code>receive(Quelle, Nachricht)</code> beschrieben. Ein Empfang ist erst nach dem Senden möglich; <code>receive</code> blockiert, bis eine Nachricht vorhanden ist.",
          tag: "def",
          source: "10_rabs-ipc.pdf, Folie 10"
        },
        {
          title: "Producer/Consumer mit Nachrichten",
          body: "Typisch puffert das Betriebssystem Nachrichten bis zum Empfang. Die Puffergröße wird vom Betriebssystem bestimmt und ist meist konfigurierbar. Ist der Puffer voll, wird der Sender in <code>send()</code> blockiert.",
          source: "10_rabs-ipc.pdf, Folie 11"
        },
        {
          title: "Merkmale von Kommunikationsbeziehungen",
          body: "Kommunikationsbeziehungen unterscheiden sich nach Anzahl der Teilnehmer, zeitlicher Kopplung (synchron oder asynchron), Gleichzeitigkeit von Hin- und Rückkanal (unidirektional oder bidirektional), räumlichen Aspekten (lokal oder entfernt) und direkter oder indirekter Kommunikation.",
          source: "10_rabs-ipc.pdf, Folie 12"
        },
        {
          title: "Direkte und indirekte Kommunikation",
          body: "Bei direkter Kommunikation wird die Nachricht unmittelbar aus dem Speicherbereich des Senders in einen Speicherbereich des Empfängers geschrieben. Bei indirekter Kommunikation über Mailboxen realisiert das Betriebssystem eine Warteschlange.",
          source: "10_rabs-ipc.pdf, Folien 14-15"
        },
        {
          title: "Mailbox und Port",
          body: "Eine Mailbox ist eine Warteschlange im Speicherbereich des Betriebssystems und realisiert n:m-Kommunikation. Ein Port ist eine Mailbox, die einem einzelnen Empfänger zugeordnet ist, realisiert m:1-Kommunikation und wird besonders für Client-Server-Kommunikation eingesetzt.",
          source: "10_rabs-ipc.pdf, Folien 15-16"
        },
        {
          title: "Client-Server",
          body: "Der Server stellt einen Port zur Verfügung, über den Clients ihre Aufträge senden, z. B. Printserver für Druckaufträge oder Fileserver für Zugriffe auf zentrale Dateien.",
          source: "10_rabs-ipc.pdf, Folie 17"
        },
        {
          title: "Zeitliche Kopplung",
          body: "Synchrones Senden blockiert den Sender, bis der Empfänger die Information entgegengenommen hat. Asynchrones Senden setzt sofort fort. Synchrones Empfangen blockiert bis zum Eintreffen der Information; asynchrones Empfangen prüft, ob etwas empfangen wurde, und arbeitet weiter.",
          source: "10_rabs-ipc.pdf, Folie 18"
        },
        {
          title: "Asynchrone und synchrone Nachrichten, Aufträge",
          body: "Asynchrone Message: Der Sender wird nicht mit dem Empfänger synchronisiert; das Betriebssystem muss die Nachricht puffern, falls der Empfänger noch nicht wartet. Synchrone Message: Der Sender blockiert, bis die Nachricht empfangen ist (Rendezvous), es ist keine Pufferung nötig. Synchroner Auftrag: Der Empfänger sendet ein Resultat zurück, der Sender blockiert bis dahin. Erteilt der Sender mehrere Aufträge gleichzeitig, ist Parallelverarbeitung möglich.",
          tag: "wichtig",
          source: "10_rabs-ipc.pdf, Folien 22-25"
        },
        {
          title: "Pipes",
          body: "Pipes übertragen Sequenzen von Bytes in FIFO-Reihenfolge zwischen Prozessen. Sie haben keine Nachrichtengrenzen oder Längenbeschränkungen. Eine Pipe ist ein unidirektionaler Datenstrom.",
          tag: "def",
          source: "10_rabs-ipc.pdf, Folien 26-28"
        },
        {
          title: "Unbenannte und benannte Pipes",
          body: "Eine unbenannte Pipe kennt zunächst nur der erzeugende Prozess; ihre Dateideskriptoren werden an Kindprozesse vererbt. Eine benannte Pipe ist als spezielle Datei im Dateisystem sichtbar und wird wie eine normale Datei mit <code>open</code>, <code>close</code>, <code>read</code> und <code>write</code> benutzt. Erzeugt wird sie mit dem Systemaufruf <code>mkfifo(char *name, mode_t mode)</code>, unter Linux auch mit dem Shell-Kommando <code>mkfifo</code>; gelöscht wird sie mit normalen Dateisystem-Operationen.",
          source: "10_rabs-ipc.pdf, Folien 29-30"
        },
        {
          title: "Pipes in der Shell",
          body: "Der Pipe-Operator unter Linux ist <code>|</code>. Beispiele sind <code>cat foo.txt | lpr -Php1320</code> und <code>set | grep PATH</code>, bei denen Ausgabe eines Prozesses an den nächsten Prozess übergeben wird.",
          source: "10_rabs-ipc.pdf, Folie 31"
        },
        {
          title: "Sockets",
          body: "Sockets sind eine allgemeine Schnittstelle zur Interprozesskommunikation, nicht auf lokale Mechanismen beschränkt. Sie realisieren protokollunabhängigen Zugriff auf Dienste, die normalerweise von einem Transportprotokoll bereitgestellt werden.",
          source: "10_rabs-ipc.pdf, Folien 32-34"
        },
        {
          title: "Shared Memory",
          body: "Shared Memory muss beim Betriebssystem von Sender und Empfänger explizit angefordert werden. Die Adresse des gemeinsamen Speichersegments wird in den Prozessadressraum integriert; Sender und Empfänger müssen denselben Datentyp nutzen und synchronisiert zugreifen.",
          tag: "wichtig",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        },
        {
          title: "Shared Memory in UNIX",
          body: "UNIX verwendet <code>shmget</code> zum Anfordern oder Erzeugen, <code>shmat</code> zum Einbinden, <code>shmdt</code> zum Entfernen und <code>shmctl</code> für Steuerfunktionen. Mit <code>IPC_RMID</code> wird das Segment gelöscht.",
          source: "10_rabs-ipc.pdf, Folie 44"
        }
      ],
      flashcards: [
        {
          front: "Warum sind Kommunikation und Synchronisation verbunden?",
          back: "Wenn ein Prozess eine Information von einem anderen benötigt, muss er warten, bis diese Information bereitgestellt ist.",
          source: "10_rabs-ipc.pdf, Folie 7"
        },
        {
          front: "Was unterscheidet nachrichtenbasierte von speicherbasierter Kommunikation?",
          back: "Nachrichtenbasierte Kommunikation läuft über das Betriebssystem und synchronisiert implizit; speicherbasierte Kommunikation nutzt gemeinsamen Speicher und erfordert explizite Synchronisation.",
          source: "10_rabs-ipc.pdf, Folie 8"
        },
        {
          front: "Was sind send und receive?",
          back: "send und receive sind abstrakte Primitive für Nachrichtenaustausch.",
          source: "10_rabs-ipc.pdf, Folie 10"
        },
        {
          front: "Was ist eine Mailbox?",
          back: "Eine Warteschlange im Speicherbereich des Betriebssystems, über die mehrere Sender und Empfänger n:m kommunizieren können.",
          source: "10_rabs-ipc.pdf, Folie 15"
        },
        {
          front: "Was ist ein Port im IPC-Kontext?",
          back: "Ein Port ist eine Mailbox, die einem einzelnen Empfänger zugeordnet ist; sie steht für m:1-Kommunikation.",
          source: "10_rabs-ipc.pdf, Folie 16"
        },
        {
          front: "Warum muss bei asynchronen Nachrichten gepuffert werden, bei synchronen nicht?",
          back: "Asynchron wird der Sender nicht mit dem Empfänger synchronisiert, das Betriebssystem muss die Nachricht halten, bis der Empfänger sie abholt. Synchron blockiert der Sender, bis die Nachricht empfangen ist (Rendezvous).",
          source: "10_rabs-ipc.pdf, Folien 22-23"
        },
        {
          front: "Was ist ein synchroner Auftrag?",
          back: "Der Empfänger sendet ein Resultat zurück, und der Sender ist blockiert, bis das Resultat vorliegt.",
          source: "10_rabs-ipc.pdf, Folie 24"
        },
        {
          front: "Was ist eine Pipe?",
          back: "Ein unidirektionaler Datenstrom, der Bytes in FIFO-Reihenfolge zwischen Prozessen überträgt.",
          source: "10_rabs-ipc.pdf, Folien 26-28"
        },
        {
          front: "Was unterscheidet unbenannte von benannten Pipes?",
          back: "Unbenannte Pipes kennt zunächst nur der erzeugende Prozess, die Deskriptoren werden an Kinder vererbt. Benannte Pipes sind als spezielle Datei im Dateisystem sichtbar und werden mit <code>mkfifo</code> erzeugt.",
          source: "10_rabs-ipc.pdf, Folien 29-30"
        },
        {
          front: "Was ist Shared Memory?",
          back: "Shared Memory ist gemeinsamer Speicher im Prozessadressraum; der Zugriff muss synchronisiert werden.",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        },
        {
          front: "Welche UNIX-Funktionen nennt der Foliensatz für Shared Memory?",
          back: "<code>shmget</code>, <code>shmat</code>, <code>shmdt</code> und <code>shmctl</code>.",
          source: "10_rabs-ipc.pdf, Folie 44"
        }
      ]
    }
  ]
} satisfies RawSubject;
export default rabs;
