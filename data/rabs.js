window.APP_SUBJECTS = window.APP_SUBJECTS || {};

window.APP_SUBJECTS.rabs = {
  id: "rabs",
  title: "RABS",
  subtitle: "Rechnerarchitektur & Betriebssysteme",
  icon: "🖥️",
  topics: [
    {
      id: "rechnerarchitektur",
      title: "Rechnerarchitektur",
      icon: "🖥️",
      cards: [
        {
          t: "Von-Neumann-Architektur",
          b: "Befehle und Daten werden im Speicher gehalten. Die Verbindung und Datenübertragung zwischen CPU und Speicher über den Systembus wird zum Von-Neumann-Flaschenhals. Jeglicher Datenverkehr von und zur CPU wird über den internen Bus abgewickelt.",
          source: "02_rabs_vna1.pdf, Folie 4"
        },
        {
          t: "Harvard-Architektur",
          b: "Problem der Von-Neumann-Architektur: nur ein BUS-System für Daten und Befehle. Idee: logische und physische Trennung von Befehls- und Datenspeicher. Während ein Befehl dekodiert wird, können die Daten eingeladen werden.",
          source: "02_rabs_vna1.pdf, Folie 5"
        },
        {
          t: "Vorteile und Nachteile der Harvard-Architektur",
          b: "Vorteile: Befehle und Daten können gleichzeitig geladen bzw. geschrieben werden. Nachteile: freier Programmspeicher kann nicht für Daten genutzt werden, freier Datenspeicher nicht für Programme. Moderne Prozessoren verwenden eine Mischform aus Harvard- und Von-Neumann-Architektur.",
          source: "02_rabs_vna1.pdf, Folie 6"
        },
        {
          t: "Fetch-Decode-Execute-Zyklus",
          b: "Nächsten Befehl aus dem Speicher in das Befehlsregister laden, Programmzähler hochzählen, Typ des Befehls bestimmen, Operanden aus dem Speicher in ein Register laden, Befehl ausführen, wieder von vorne beginnen.",
          source: "02_rabs_vna1.pdf, Folie 19"
        },
        {
          t: "Pipeline- und superskalare Prozessoren",
          b: "Pipeline-Prozessoren besitzen mehrere getrennte Hol-, Dekodier- und Ausführungseinheiten. Superskalare Prozessoren besitzen mehrere Ausführungseinheiten und können oft auch mehrere Befehle gleichzeitig holen und in einem Puffer bereitstellen.",
          source: "02_rabs_vna1.pdf, Folien 20-21"
        },
        {
          t: "Caching",
          b: "CPU speichert die am häufigsten benötigten Daten in einem kleinen aber sehr schnellen Speicher – Cache. Moderne Prozessoren besitzen mindestens zwei Cache-Ebenen: L1-Cache und L2-Cache. L1-Cache typischerweise 16KB und innerhalb der CPU, L2-Cache typischerweise mehrere MB.",
          source: "02_rabs_vna1.pdf, Folie 25"
        },
        {
          t: "Ausführungsmodi",
          b: "CPUs besitzen zwei Ausführungsmodi: Kernmodus und Benutzermodus. Kernmodus: unbeschränkter Zugriff auf alle Rechnerkomponenten. Benutzermodus: eingeschränkter Zugriff, keine privilegierten Befehle. Der Modus wird in Hardware durch 1 Bit im Programmstatuswort festgehalten.",
          source: "02_rabs_vna1.pdf, Folie 26"
        },
        {
          t: "Exception, Systemaufruf und Interrupt",
          b: "Ausführung eines privilegierten Befehls im Benutzermodus führt zu einer Ausnahme. Kontrollierter Moduswechsel erfolgt mit Systemaufruf, Trap oder System Call. Interrupts reagieren auf externe, asynchrone Ereignisse; das Signal wird jeweils nach der Abarbeitung eines Befehls abgefragt.",
          source: "02_rabs_vna1.pdf, Folien 31-33"
        },
        {
          t: "DMA",
          b: "Alle I/O-Geräte können per Direct Memory Access auf den RAM zugreifen und Interrupts senden. Für DMA-fähige Geräte wird der Kopiervorgang in kleine Teile zerlegt. Für jeden Teil erhält das Gerät den Bus atomar, damit die Wartezeiten anderer Geräte und CPUs nicht zu lang werden.",
          source: "08_rabs-synchro-1.pdf, Folien 16-18"
        }
      ],
      questions: [
        {
          q: "Was ist der Von-Neumann-Flaschenhals?",
          a: "Jeglicher Datenverkehr von und zur CPU wird über den internen Bus abgewickelt. Dessen Transfergeschwindigkeit ist langsamer als die Verarbeitungsgeschwindigkeit der CPU.",
          source: "02_rabs_vna1.pdf, Folie 4"
        },
        {
          q: "Welche Idee verfolgt die Harvard-Architektur?",
          a: "Sie trennt Befehls- und Datenspeicher logisch und physisch. Dadurch können Befehle und Daten gleichzeitig geladen beziehungsweise geschrieben werden.",
          source: "02_rabs_vna1.pdf, Folien 5-6"
        },
        {
          q: "Wie läuft der Fetch-Decode-Execute-Zyklus ab?",
          a: "Befehl in das Befehlsregister laden, Programmzähler hochzählen, Typ des Befehls bestimmen, Operanden laden, Befehl ausführen und wieder von vorne beginnen.",
          source: "02_rabs_vna1.pdf, Folie 19"
        },
        {
          q: "Worin unterscheiden sich Kernmodus und Benutzermodus?",
          a: "Im Kernmodus besteht unbeschränkter Zugriff auf alle Rechnerkomponenten. Im Benutzermodus ist der Zugriff eingeschränkt und privilegierte Befehle sind nicht erlaubt.",
          source: "02_rabs_vna1.pdf, Folie 26"
        },
        {
          q: "Warum werden DMA-Vorgänge in kleine Teile zerlegt?",
          a: "Wenn der vollständige DMA-Vorgang den Bus belegen würde, würden die Wartezeiten der anderen Geräte und CPUs auf den Bus zu lange dauern.",
          source: "08_rabs-synchro-1.pdf, Folie 18"
        }
      ],
      flashcards: [
        {
          front: "Von-Neumann-Flaschenhals",
          back: "Jeglicher Datenverkehr von und zur CPU läuft über den internen Bus.",
          source: "02_rabs_vna1.pdf, Folie 4"
        },
        {
          front: "Harvard-Architektur",
          back: "Logische und physische Trennung von Befehls- und Datenspeicher.",
          source: "02_rabs_vna1.pdf, Folie 5"
        },
        {
          front: "L1- und L2-Cache",
          back: "L1 typischerweise 16KB in der CPU, L2 typischerweise mehrere MB.",
          source: "02_rabs_vna1.pdf, Folie 25"
        },
        {
          front: "Benutzermodus",
          back: "Keine privilegierten Befehle, Zugriff nur eingeschränkt.",
          source: "02_rabs_vna1.pdf, Folie 26"
        },
        {
          front: "DMA",
          back: "Kopiervorgang wird in kleine Teile zerlegt, jeder Teil erhält den Bus atomar.",
          source: "08_rabs-synchro-1.pdf, Folien 17-18"
        }
      ]
    },
    {
      id: "bs-grundlagen",
      title: "BS-Grundlagen",
      icon: "⚙️",
      cards: [
        {
          t: "Aufgaben eines Betriebssystems",
          b: "Ein Betriebssystem leistet Erweiterung oder Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln.",
          source: "01_rabs_grundlagen.pdf, Folie 9"
        },
        {
          t: "Erweiterung und Veredelung",
          b: "Das Betriebssystem stellt komplexe Funktionen bereit, die die Anwendungsprogramme verwenden können. Folge: erhebliche Vereinfachung der Programmierung. Beispiel: Beim Schreiben auf Festplatte findet das Betriebssystem automatisch freie Blöcke auf der Platte.",
          source: "01_rabs_grundlagen.pdf, Folie 10"
        },
        {
          t: "Abstraktion der Hardware",
          b: "Das Betriebssystem realisiert eine einheitliche Sicht für Anwendungen, eine abstrakte Maschine. Dateien abstrahieren externen Speicher; für Anwendungen besteht kein Unterschied zwischen Festplatte, Diskette, CD-ROM, USB-Stick oder Netzlaufwerk.",
          source: "01_rabs_grundlagen.pdf, Folie 11"
        },
        {
          t: "HAL",
          b: "HAL = Hardware Abstraction Layer. Das ist die Schicht des Betriebssystems, die Betriebssystemkern und übrige Software von der Hardware isoliert. Nur der HAL kann auf die Hardware zugreifen.",
          source: "01_rabs_grundlagen.pdf, Folie 13"
        },
        {
          t: "Monolithische Systeme",
          b: "Ansatz: monolithische Betriebssysteme. Das Betriebssystem wird als Super-Programm und Kontrollinstanz verstanden. Direkter Hardwarezugriff ist nur im Systemmodus möglich; Dienste des Betriebssystemkerns werden im Systemmodus ausgeführt.",
          source: "01_rabs_intro-01.pdf, Folien 17-19"
        },
        {
          t: "Mikrokern-Architektur",
          b: "Ziel: Minimierung der im privilegierten Modus ablaufenden Funktionalität. Betriebssystem-Komponenten laufen als Server-Prozesse im nichtprivilegierten Modus. Nur der Mikrokern läuft im Systemmodus. Vorteil: deutlich weniger SLOC. Nachteil: schlechtere Performance durch Nachrichtenaustausch anstatt Systemcalls.",
          source: "01_rabs_grundlagen.pdf, Folien 4-6"
        },
        {
          t: "Virtuelle Maschine",
          b: "Auf der Hardware läuft zunächst ein Basis-Betriebssystem, der Virtual Machine Monitor. Darauf laufen keine Anwendungen, sondern virtuelle Maschinen in Form verschiedener Betriebssysteme. Unabhängigkeit und Isolation werden konsequent fortgeführt.",
          source: "01_rabs_grundlagen.pdf, Folien 7-8"
        }
      ],
      questions: [
        {
          q: "Welche drei Aufgaben nennt die Vorlesung für ein Betriebssystem?",
          a: "Erweiterung oder Veredelung der Hardware, Abstraktion der Hardware und Verwaltung von Betriebsmitteln.",
          source: "01_rabs_grundlagen.pdf, Folie 9"
        },
        {
          q: "Was bedeutet Abstraktion der Hardware?",
          a: "Das Betriebssystem realisiert eine einheitliche Sicht für Anwendungen, eine abstrakte Maschine. Dateien abstrahieren externen Speicher.",
          source: "01_rabs_grundlagen.pdf, Folie 11"
        },
        {
          q: "Was ist die HAL?",
          a: "Die HAL ist die Hardware Abstraction Layer. Sie isoliert Betriebssystemkern und übrige Software von der Hardware; nur der HAL kann auf die Hardware zugreifen.",
          source: "01_rabs_grundlagen.pdf, Folie 13"
        },
        {
          q: "Was kennzeichnet eine Mikrokern-Architektur?",
          a: "Nur der Mikrokern läuft im Systemmodus. Andere Komponenten laufen als Server-Prozesse im nichtprivilegierten Modus und kommunizieren über Nachrichten.",
          source: "01_rabs_grundlagen.pdf, Folien 4-6"
        }
      ],
      flashcards: [
        {
          front: "3 Aufgaben des Betriebssystems",
          back: "Erweiterung/Veredelung, Abstraktion, Verwaltung von Betriebsmitteln.",
          source: "01_rabs_grundlagen.pdf, Folie 9"
        },
        {
          front: "HAL",
          back: "Isoliert Kern und übrige Software von der Hardware.",
          source: "01_rabs_grundlagen.pdf, Folie 13"
        },
        {
          front: "Mikrokern",
          back: "Nur der Mikrokern läuft im Systemmodus.",
          source: "01_rabs_grundlagen.pdf, Folie 4"
        },
        {
          front: "Virtuelle Maschine",
          back: "Virtual Machine Monitor auf der Hardware, darauf virtuelle Maschinen mit verschiedenen Betriebssystemen.",
          source: "01_rabs_grundlagen.pdf, Folie 7"
        }
      ]
    },
    {
      id: "prozesse",
      title: "Prozesse",
      icon: "🔄",
      cards: [
        {
          t: "Prozessbegriff",
          b: "Ein Prozess ist ein Programm in Ausführung mit zusätzlicher Kontextinformation. Prozess ist das zentrale Konzept in jedem Betriebssystem. Jeder Prozess besitzt einen eigenen Adressraum.",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          t: "Programm und Prozess",
          b: "Programm: Folge von Anweisungen und dazugehöriger Daten. Prozess: Programm in Ausführung und dessen aktuelle Daten, etwa aktueller Wert des Programmzählers. Ein Prozess stellt die Ausführungsumgebung bereit.",
          source: "05_rabs-process.pdf, Folie 10"
        },
        {
          t: "Prozesskontrollblock",
          b: "Der Prozesskontrollblock beschreibt den Kontext eines Prozesses. Er enthält eindeutigen Namen, Prozesszustand, Warteereignis, Scheduling-Informationen, Registerinhalte, Accounting-Information, Prozesshierarchie, Informationen für das Speichermanagement und die Dateiverwaltung.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          t: "Prozesserzeugung",
          b: "Ereignisse für das Erzeugen von Prozessen sind Systeminitialisierung, Erzeugen durch einen anderen Prozess per Systemaufruf, Benutzeranfrage und Initiierung einer Stapelverarbeitung.",
          source: "05_rabs-process.pdf, Folie 16"
        },
        {
          t: "fork unter UNIX",
          b: "fork erzeugt einen exakten Klon des aufrufenden Prozesses. Beide Prozesse sind danach voneinander unabhängig und laufen nach fork weiter. Der Kindprozess erbt das Speicherabbild, die offenen Dateien und weitere Ressourcen.",
          source: "05_rabs-process.pdf, Folie 17"
        },
        {
          t: "Ändern des Speicherabbilds",
          b: "Um das Speicherabbild zu ändern und ein neues Programm auszuführen, muss der Kindprozess zum Beispiel execl ausführen. Das ersetzt den aktuellen Programmcode durch die Binärdatei und erzeugt keinen neuen Prozess.",
          source: "05_rabs-process.pdf, Folie 19"
        },
        {
          t: "Prozesshierarchien und init",
          b: "In UNIX bildet ein Prozess mit allen Kind- und Kindeskindprozessen eine Prozessgruppe. init ist als spezieller Prozess im Bootimage vorhanden, liest beim Start eine Datei mit der Anzahl der Terminals und erzeugt einen neuen Kindprozess pro Terminal.",
          source: "05_rabs-process.pdf, Folien 21-22"
        },
        {
          t: "Prozesszustände",
          b: "Ein Prozess befindet sich während der Abarbeitung in einem der folgenden Zustände: erzeugt, bereit, laufend, blockiert oder beendet.",
          source: "05_rabs-process.pdf, Folie 24"
        }
      ],
      questions: [
        {
          q: "Wie definiert die Vorlesung einen Prozess?",
          a: "Ein Prozess ist ein Programm in Ausführung mit zusätzlicher Kontextinformation. Jeder Prozess besitzt einen eigenen Adressraum.",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          q: "Was enthält der Prozesskontrollblock?",
          a: "Er enthält unter anderem Namen, Prozesszustand, Warteereignis, Scheduling-Informationen, Registerinhalte, Accounting-Information, Prozesshierarchie sowie Informationen zu Speicher- und Dateiverwaltung.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          q: "Was macht fork unter UNIX?",
          a: "fork erzeugt einen exakten Klon des aufrufenden Prozesses. Beide Prozesse laufen unabhängig weiter und der Kindprozess erbt das Speicherabbild und offene Dateien.",
          source: "05_rabs-process.pdf, Folie 17"
        },
        {
          q: "Welche Prozesszustände nennt die Vorlesung?",
          a: "erzeugt, bereit, laufend, blockiert und beendet.",
          source: "05_rabs-process.pdf, Folie 24"
        }
      ],
      flashcards: [
        {
          front: "Prozess",
          back: "Programm in Ausführung mit zusätzlicher Kontextinformation.",
          source: "05_rabs-process.pdf, Folie 8"
        },
        {
          front: "PCB",
          back: "Beschreibt den Kontext eines Prozesses.",
          source: "05_rabs-process.pdf, Folie 11"
        },
        {
          front: "fork",
          back: "Exakter Klon des aufrufenden Prozesses.",
          source: "05_rabs-process.pdf, Folie 17"
        },
        {
          front: "init",
          back: "Spezielle Wurzel des Prozessbaums unter UNIX.",
          source: "05_rabs-process.pdf, Folien 21-22"
        }
      ]
    },
    {
      id: "threads",
      title: "Threads",
      icon: "🧵",
      cards: [
        {
          t: "Definition Thread",
          b: "Threads sind parallele Kontrollflüsse innerhalb eines Prozesses. Sie sind nicht voneinander abgeschottet, da sie sich gemeinsame Ressourcen, insbesondere Speicher, teilen. Ein oder mehrere Threads pro Prozess sind möglich.",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          t: "Gründe für Threads",
          b: "Gründe für die Verwendung von Threads sind parallele Ausführung mehrerer Aktivitäten, geringeres Gewicht gegenüber Prozessen, Performanzgewinn bei nebenläufigen Ein- und Ausgaben und Verteilung auf mehrere Prozessoren.",
          source: "06_rabs-threads.pdf, Folie 7"
        },
        {
          t: "Eigenschaften eines Threads",
          b: "Ein Thread besitzt eigene Identität als Thread-ID, eigenen Programmzähler, eigenes Registerset, eigenen Stack und eigenen Zustand.",
          source: "06_rabs-threads.pdf, Folie 12"
        },
        {
          t: "Gemeinsamer Adressraum",
          b: "Threads des gleichen Prozesses teilen sich den gemeinsamen Prozessadressraum und gemeinsame Ressourcen. Jeder Thread kann auf die Speicheradressen des Prozesses und der anderen Threads dieses Prozesses zugreifen.",
          source: "06_rabs-threads.pdf, Folie 15"
        },
        {
          t: "Multithreading und Hyperthreading",
          b: "Multithreading ist das gleichzeitige Abarbeiten mehrerer Threads innerhalb eines einzelnen Prozesses oder Tasks. Hyperthreading ist hardwareseitiges Multithreading in Intel-Prozessoren; intern parallel arbeitende Pipeline-Stufen werden zwei parallelen Befehls- und Datenströmen zugeteilt.",
          source: "06_rabs-threads.pdf, Folien 17-18"
        },
        {
          t: "Thread-Operationen",
          b: "Prozesse starten normalerweise mit einem einzigen Thread. Der Start-Thread kann neue Threads erzeugen. Bibliotheksfunktionen sind thread_create, thread_exit, thread_join und thread_yield. Threads müssen freiwillig von Zeit zu Zeit die CPU abgeben.",
          source: "06_rabs-threads.pdf, Folie 19"
        },
        {
          t: "User-Level-Threads",
          b: "User-Level-Threads werden im User Mode erzeugt, synchronisiert und vernichtet. Vorteile: keine Unterstützung durch das Betriebssystem notwendig, schnelle Threaderzeugung und Threadwechsel. Nachteile: blockierender Systemaufruf blockiert alle Threads eines Prozesses.",
          source: "06_rabs-threads.pdf, Folien 22-25"
        },
        {
          t: "Kernel-Level-Threads",
          b: "Kernel-Level-Threads werden vom Kernel verwaltet. Thread-Operationen sind Kernel-Aufrufe. Vorteile: Bei Blockierung eines Threads kann das Betriebssystem einen anderen Thread desselben Prozesses auswählen; echte Parallelität innerhalb eines Prozesses ist möglich. Nachteil: hoher Overhead.",
          source: "06_rabs-threads.pdf, Folien 26-28"
        }
      ],
      questions: [
        {
          q: "Wie definiert die Vorlesung einen Thread?",
          a: "Ein Thread ist ein paralleler Kontrollfluss innerhalb eines Prozesses. Threads teilen sich die Ressourcen des Prozesses und damit den Adressraum.",
          source: "06_rabs-threads.pdf, Folien 6, 15"
        },
        {
          q: "Welche Eigenschaften besitzt ein Thread?",
          a: "Thread-ID, Programmzähler, Registerset, Stack und Zustand.",
          source: "06_rabs-threads.pdf, Folie 12"
        },
        {
          q: "Was macht thread_yield?",
          a: "thread_yield erlaubt es dem Thread, freiwillig Rechenzeit abzugeben, um einen anderen Thread rechnen zu lassen.",
          source: "06_rabs-threads.pdf, Folie 19"
        },
        {
          q: "Worin unterscheiden sich User-Level-Threads und Kernel-Level-Threads?",
          a: "User-Level-Threads werden im User Mode durch eine Bibliothek verwaltet. Kernel-Level-Threads werden vom Kernel verwaltet; Thread-Operationen sind Kernel-Aufrufe.",
          source: "06_rabs-threads.pdf, Folien 22-28"
        }
      ],
      flashcards: [
        {
          front: "Thread",
          back: "Paralleler Kontrollfluss innerhalb eines Prozesses.",
          source: "06_rabs-threads.pdf, Folie 6"
        },
        {
          front: "Thread-Eigenschaften",
          back: "Thread-ID, Programmzähler, Registerset, Stack, Zustand.",
          source: "06_rabs-threads.pdf, Folie 12"
        },
        {
          front: "User-Level-Threads",
          back: "Schnell, aber blockierender Systemaufruf blockiert alle Threads des Prozesses.",
          source: "06_rabs-threads.pdf, Folien 22-25"
        },
        {
          front: "Kernel-Level-Threads",
          back: "Vom Kernel verwaltet; echte Parallelität möglich, aber hoher Overhead.",
          source: "06_rabs-threads.pdf, Folien 26-28"
        }
      ]
    },
    {
      id: "scheduling",
      title: "Scheduling",
      icon: "⏱️",
      cards: [
        {
          t: "FCFS",
          b: "First Come First Serve oder First In First Out: Bearbeitung der Prozesse in der Reihenfolge ihrer Ankunft in der Bereitliste. Prozessorbesitz bis zum Ende oder zur freiwilligen Aufgabe. Simpelste Lösung. FCFS ist fair: Alle Prozesse werden berücksichtigt.",
          source: "07_rabs-scheduling.pdf, Folien 15-17"
        },
        {
          t: "FCFS-Beispiel",
          b: "Im FCFS-Beispiel ergeben sich Wartezeiten 0, 1, 5, 7 und 10. Die mittlere Wartezeit beträgt 4,6 ms.",
          source: "07_rabs-scheduling.pdf, Folie 17"
        },
        {
          t: "SJF",
          b: "Shortest Job First: Prozess mit der kürzesten Bedienzeit wird als nächster bis zum Ende oder zur freiwilligen Aufgabe bearbeitet. Nicht-unterbrechender Scheduling-Algorithmus. Kenntnis der Bedienzeit wird benötigt und längere Prozesse können verhungern.",
          source: "07_rabs-scheduling.pdf, Folien 18-21"
        },
        {
          t: "Round Robin",
          b: "Nach Ablauf einer vorher festgesetzten Frist τ findet eine Verdrängung statt. Neu ankommende und verdrängte Prozesse gehen an das Ende der Warteschlange. Die Zugriffszeit auf die CPU wird fair auf die Prozesse aufgeteilt. Round Robin eignet sich für interaktive Systeme.",
          source: "07_rabs-scheduling.pdf, Folien 22-23"
        },
        {
          t: "Zeitquantum bei Round Robin",
          b: "Je kürzer das Zeitquantum ist, desto mehr Prozesswechsel müssen stattfinden und desto höher ist der Overhead. Je länger es ist, desto mehr geht die Gleichzeitigkeit verloren; das System hängt oder ruckelt.",
          source: "07_rabs-scheduling.pdf, Folie 23"
        },
        {
          t: "RR-Beispiele",
          b: "Bei τ = 1 ergeben sich im Beispiel Wartezeiten 1, 10, 9, 9 und 5 mit mittlerer Wartezeit 6,8 ms. Bei τ = 4 ergeben sich Wartezeiten 0, 9, 3, 9 und 9 mit mittlerer Wartezeit 6 ms.",
          source: "07_rabs-scheduling.pdf, Folien 25-28"
        },
        {
          t: "RMS",
          b: "Raten Monotones Scheduling ist ein prioritätsbasiertes Scheduling-Verfahren für unterbrechbare, periodische Jobs. Die Priorität eines Prozesses entspricht seiner Aufrufperiode. Ist die Auslastung u kleiner oder gleich einer Auslastungsschranke, ist die Job-Menge einplanbar.",
          source: "07_rabs-scheduling.pdf, Folien 36-37"
        },
        {
          t: "EDF",
          b: "Earliest Deadline First: Der Prozess kündigt seine Präsenz und seine Deadline an, wenn er CPU-Zeit benötigt. Der Scheduler sortiert alle Prozesse nach der kürzesten Deadline. EDF kann die CPU zu 100 Prozent auslasten.",
          source: "07_rabs-scheduling.pdf, Folien 38-39"
        }
      ],
      questions: [
        {
          q: "Wie arbeitet FCFS?",
          a: "FCFS bearbeitet Prozesse in der Reihenfolge ihrer Ankunft in der Bereitliste. Ein Prozess behält den Prozessor bis zum Ende oder bis zur freiwilligen Aufgabe.",
          source: "07_rabs-scheduling.pdf, Folie 15"
        },
        {
          q: "Welche Nachteile nennt die Vorlesung für SJF?",
          a: "Die Bedienzeit muss bekannt sein und kann nur vom Benutzer geschätzt werden. Längere Prozesse können verhungern, wenn stets kürzere vorhanden sind.",
          source: "07_rabs-scheduling.pdf, Folie 18"
        },
        {
          q: "Wovon hängt bei Round Robin die Systemgeschwindigkeit ab?",
          a: "Von der Größe des Zeitquantums. Ist es kurz, steigt der Overhead durch viele Prozesswechsel. Ist es lang, geht die Gleichzeitigkeit verloren.",
          source: "07_rabs-scheduling.pdf, Folie 23"
        },
        {
          q: "Was sagt das Beispiel zu RMS und EDF?",
          a: "Im Beispiel ist 0,808 größer als 0,78, also ist kein Scheduling für RMS möglich. EDF kann die CPU bis 100 Prozent auslasten.",
          source: "07_rabs-scheduling.pdf, Folien 38-39"
        }
      ],
      flashcards: [
        {
          front: "FCFS",
          back: "Ankunftsreihenfolge in der Bereitliste, nicht-unterbrechend.",
          source: "07_rabs-scheduling.pdf, Folie 15"
        },
        {
          front: "SJF",
          back: "Kürzeste Bedienzeit zuerst; längere Prozesse können verhungern.",
          source: "07_rabs-scheduling.pdf, Folie 18"
        },
        {
          front: "Round Robin",
          back: "Zeitscheibe τ, faire Aufteilung der CPU-Zeit, geeignet für interaktive Systeme.",
          source: "07_rabs-scheduling.pdf, Folien 22-23"
        },
        {
          front: "EDF",
          back: "Kürzeste Deadline zuerst; CPU-Auslastung bis 100 Prozent.",
          source: "07_rabs-scheduling.pdf, Folie 38"
        }
      ]
    },
    {
      id: "synchronisation",
      title: "Synchronisation",
      icon: "🔒",
      cards: [
        {
          t: "Race Condition",
          b: "Race Condition ist eine Situation, in der mehrere Prozesse konkurrierend auf gemeinsame Daten zugreifen und mindestens einer diese manipuliert. Das Ergebnis ist nicht vorhersagbar und kann im Fall überlappender Zugriffe inkorrekt sein.",
          source: "08_rabs-synchro-1.pdf, Folie 28"
        },
        {
          t: "Kritischer Abschnitt",
          b: "Zugriffscode wird als kritischer Abschnitt bezeichnet. Das ist der Abschnitt eines Programms, der Zugriffe auf ein gemeinsam genutztes Objekt enthält.",
          source: "08_rabs-synchro-1.pdf, Folien 28, 30"
        },
        {
          t: "Anforderungen an wechselseitigen Ausschluss",
          b: "Keine Annahmen über Geschwindigkeit und Anzahl der CPUs. Mutual exclusion. Progress – no deadlock. Bounded waiting – no starvation. Prozess außerhalb des kritischen Abschnitts darf andere nicht behindern. Sofortiger Zugang zum kritischen Abschnitt, wenn kein anderer Prozess darin ist.",
          source: "08_rabs-synchro-1.pdf, Folien 36-37"
        },
        {
          t: "Sperren der Interrupts",
          b: "Sperren der Interrupts als Lösungsversuch hat Probleme: Ein-/Ausgabe ist blockiert und die Lösung funktioniert nur bei Einprozessor-Rechnern.",
          source: "08_rabs-synchro-1.pdf, Folie 35"
        },
        {
          t: "Sperrvariable, strikter Wechsel, interested",
          b: "Die Sperrvariable scheitert an einer Race Condition. Beim strikten Wechsel müssen Prozesse abwechselnd in den kritischen Abschnitt. Beim Ansatz mit interested kann Verklemmung auftreten, falls beide Prozesse interested gleichzeitig auf true setzen.",
          source: "08_rabs-synchro-1.pdf, Folien 39-41"
        },
        {
          t: "Semaphore",
          b: "Semaphore sind ein allgemeines Synchronisationskonstrukt. Wait dekrementiert den Zähler, Signal inkrementiert ihn. Semaphor-Operationen sind atomar, weil Unterbrechung zu Inkonsistenzen in Warteschlangen oder im Semaphorzähler führen kann.",
          source: "09_rabs-synchro-2.pdf, Folien 8-10"
        },
        {
          t: "Mutex und Reihenfolgesynchronisation",
          b: "Beim wechselseitigen Ausschluss mit Semaphoren wird der Semaphor mit 1 initialisiert. Für Reihenfolgesynchronisation wird er mit 0 vorbelegt. Wait steht an der Stelle, wo gewartet werden muss; Signal zeigt an, dass die Wartebedingung erfüllt ist.",
          source: "09_rabs-synchro-2.pdf, Folien 12-14"
        },
        {
          t: "Realisierung von Semaphoren",
          b: "Bei Kernel-Threads werden Semaphore im Betriebssystem-Kern implementiert. Die Operationen sind Systemaufrufe. Die atomare Ausführung wird durch Interrupt-Sperre und gegebenenfalls Spinlocks gesichert.",
          source: "09_rabs-synchro-2.pdf, Folie 15"
        }
      ],
      questions: [
        {
          q: "Was ist eine Race Condition?",
          a: "Mehrere Prozesse greifen konkurrierend auf gemeinsame Daten zu und mindestens einer manipuliert sie. Das Ergebnis ist nicht vorhersagbar und kann inkorrekt sein.",
          source: "08_rabs-synchro-1.pdf, Folie 28"
        },
        {
          q: "Welche sechs Anforderungen nennt die Vorlesung für wechselseitigen Ausschluss?",
          a: "Keine Annahmen über Geschwindigkeit und Anzahl der CPUs, mutual exclusion, progress, bounded waiting, keine Behinderung durch Prozesse außerhalb des kritischen Abschnitts und sofortiger Zugang wenn frei.",
          source: "08_rabs-synchro-1.pdf, Folien 36-37"
        },
        {
          q: "Warum scheitert die einfache Sperrvariable?",
          a: "Weil eine Race Condition auftritt.",
          source: "08_rabs-synchro-1.pdf, Folie 39"
        },
        {
          q: "Wie arbeiten Wait und Signal?",
          a: "Wait dekrementiert den Zähler und blockiert den Prozess bei negativem Ergebnis. Signal inkrementiert den Zähler und entblockt gegebenenfalls einen Prozess aus der Warteschlange.",
          source: "09_rabs-synchro-2.pdf, Folien 8-9"
        }
      ],
      flashcards: [
        {
          front: "Race Condition",
          back: "Konkurrierender Zugriff auf gemeinsame Daten, Ergebnis kann inkorrekt sein.",
          source: "08_rabs-synchro-1.pdf, Folie 28"
        },
        {
          front: "Kritischer Abschnitt",
          back: "Programmabschnitt mit Zugriff auf ein gemeinsam genutztes Objekt.",
          source: "08_rabs-synchro-1.pdf, Folie 30"
        },
        {
          front: "Wait",
          back: "Dekrementiert den Zähler; blockiert bei negativem Ergebnis.",
          source: "09_rabs-synchro-2.pdf, Folie 8"
        },
        {
          front: "Signal",
          back: "Inkrementiert den Zähler; entblockt gegebenenfalls einen wartenden Prozess.",
          source: "09_rabs-synchro-2.pdf, Folie 9"
        }
      ]
    },
    {
      id: "deadlocks",
      title: "Deadlocks",
      icon: "💀",
      cards: [
        {
          t: "Deadlock",
          b: "Deadlocks sind Situationen, in denen sich Prozesse gegenseitig sperren, weil sie auf Ereignisse warten, die von einem anderen wartenden Prozess nicht freigegeben werden können. Konsequenz: alle beteiligten Prozesse warten ewig.",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          t: "Livelock",
          b: "Livelock ist eine spezielle Art von Verklemmung, in der Prozesse nicht in einem Wartezustand verharren, sondern ständig zwischen einer Reihe sich wiederholender Zustände wechseln, aus denen kein Entkommen möglich ist.",
          source: "09_rabs-synchro-2.pdf, Folie 21"
        },
        {
          t: "Entziehbare und nichtentziehbare Betriebsmittel",
          b: "Entziehbare Betriebsmittel können einem Prozess ohne Schaden wieder entzogen werden, etwa Prozessor oder Hauptspeicher. Nichtentziehbare Betriebsmittel können nicht entzogen werden, ohne dass die Ausführung fehlschlägt, etwa ein CD-Brenner.",
          source: "09_rabs-synchro-2.pdf, Folie 22"
        },
        {
          t: "Vier Bedingungen für Deadlocks",
          b: "Wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit und zyklisches Warten. Alle vier Bedingungen zusammen sind notwendig und hinreichend für eine Verklemmung.",
          source: "09_rabs-synchro-2.pdf, Folien 30-31"
        },
        {
          t: "Belegungsanforderungsgraph",
          b: "Ein Deadlock liegt genau dann vor, wenn der Graph einen Zyklus enthält.",
          source: "09_rabs-synchro-2.pdf, Folie 32"
        },
        {
          t: "Strategien zur Behandlung",
          b: "Vier Strategien zur Behandlung von Deadlocks: Ignorieren des Problems, Erkennen und Beheben, Vermeidung und Verhinderung.",
          source: "09_rabs-synchro-2.pdf, Folie 50"
        }
      ],
      questions: [
        {
          q: "Wie definiert die Vorlesung einen Deadlock?",
          a: "Prozesse sperren sich gegenseitig, weil sie auf Ereignisse warten, die von einem anderen wartenden Prozess nicht freigegeben werden können. Alle beteiligten Prozesse warten ewig.",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          q: "Was ist ein Livelock?",
          a: "Eine spezielle Art von Verklemmung, bei der Prozesse nicht blockiert stehen bleiben, sondern zwischen wiederkehrenden Zuständen wechseln, ohne zu entkommen.",
          source: "09_rabs-synchro-2.pdf, Folie 21"
        },
        {
          q: "Welche vier Bedingungen nach Coffman werden genannt?",
          a: "Wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit und zyklisches Warten.",
          source: "09_rabs-synchro-2.pdf, Folie 30"
        },
        {
          q: "Welche Strategien zur Behandlung von Deadlocks nennt die Vorlesung?",
          a: "Ignorieren des Problems, Erkennen und Beheben, Vermeidung und Verhinderung.",
          source: "09_rabs-synchro-2.pdf, Folie 50"
        }
      ],
      flashcards: [
        {
          front: "Deadlock",
          back: "Alle beteiligten Prozesse warten ewig auf nicht freigegebene Ereignisse oder Ressourcen.",
          source: "09_rabs-synchro-2.pdf, Folien 19-20"
        },
        {
          front: "Livelock",
          back: "Wechsel zwischen Zuständen ohne Fortschritt statt dauerhaftem Blockieren.",
          source: "09_rabs-synchro-2.pdf, Folie 21"
        },
        {
          front: "Vier Bedingungen",
          back: "Wechselseitiger Ausschluss, Halten und Warten, Ununterbrechbarkeit, zyklisches Warten.",
          source: "09_rabs-synchro-2.pdf, Folie 30"
        },
        {
          front: "Zyklus im Graphen",
          back: "Ein Deadlock liegt genau dann vor, wenn der Graph einen Zyklus enthält.",
          source: "09_rabs-synchro-2.pdf, Folie 32"
        }
      ]
    },
    {
      id: "speicherverwaltung",
      title: "Speicherverwaltung",
      icon: "💾",
      cards: [
        {
          t: "Adressraum",
          b: "Adressraum ist die Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann. Jeder Prozess besitzt einen eigenen Adressraum. Benutzerprozesse haben keinen Zugriff auf den Adressraum des Betriebssystems und die Adressräume anderer Prozesse.",
          source: "02_rabs_speicher.pdf, Folien 20-21"
        },
        {
          t: "Virtueller Speicher",
          b: "Grundidee ist das Aufbrechen des Adressraums eines Prozesses in Einheiten, sogenannte Seiten. Ein weiterer Vorteil: Der Adressraum kann auf Hauptspeicher und Hintergrundspeicher aufgeteilt werden.",
          source: "02_rabs_speicher.pdf, Folie 28"
        },
        {
          t: "Paging",
          b: "Physikalischer Speicher wird in Seitenrahmen fester Größe unterteilt. Logischer Adressraum wird in Seiten unterteilt. Die virtuelle Adresse wird durch die MMU in eine reale Adresse umgewandelt. Die Seitentabelle gibt das Mapping der Seiten auf Seitenrahmen an.",
          source: "02_rabs_speicher.pdf, Folien 31-33"
        },
        {
          t: "Page Fault",
          b: "Wenn eine virtuelle Adresse auf eine ausgelagerte Seite führt, entsteht ein Systemaufruf Seitenfehler. Das Betriebssystem lagert einen wenig benutzten Seitenrahmen aus, lädt die angeforderte Seite, aktualisiert die Seitentabelle und führt den Befehl erneut aus.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          t: "Seitengröße",
          b: "Große Seiten bedeuten mehr Treffer pro Seitenaufruf und weniger Einlagerungen, aber auch mehr interne Fragmentierung. Kleine Seiten bedeuten lange Seitentabellen.",
          source: "02_rabs_speicher.pdf, Folie 35"
        },
        {
          t: "Seitenersetzungsstrategien und TLB",
          b: "Genannt werden NRU, FIFO, LRU, Working-Set und WSClock. Der TLB ist ein spezieller Teil der MMU, der Teile der Seitentabelle cached.",
          source: "02_rabs_speicher.pdf, Folie 35"
        }
      ],
      questions: [
        {
          q: "Was ist ein Adressraum?",
          a: "Die Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann.",
          source: "02_rabs_speicher.pdf, Folie 20"
        },
        {
          q: "Wie beschreibt die Vorlesung Paging?",
          a: "Physikalischer Speicher wird in Seitenrahmen, der logische Adressraum in Seiten unterteilt. Die MMU bildet virtuelle auf reale Adressen ab, und die Seitentabelle liefert das Mapping.",
          source: "02_rabs_speicher.pdf, Folien 31-33"
        },
        {
          q: "Was passiert bei einem Page Fault?",
          a: "Das Betriebssystem lagert einen wenig benutzten Seitenrahmen aus, lädt die angeforderte Seite, aktualisiert die Seitentabelle und führt den Befehl erneut aus.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          q: "Welche Seitenersetzungsstrategien werden genannt?",
          a: "NRU, FIFO, LRU, Working-Set und WSClock.",
          source: "02_rabs_speicher.pdf, Folie 35"
        }
      ],
      flashcards: [
        {
          front: "Adressraum",
          back: "Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann.",
          source: "02_rabs_speicher.pdf, Folie 20"
        },
        {
          front: "Paging",
          back: "Unterteilung in Seiten und Seitenrahmen; Übersetzung über MMU und Seitentabelle.",
          source: "02_rabs_speicher.pdf, Folien 31-33"
        },
        {
          front: "Page Fault",
          back: "Ausgelagerte Seite wird nachgeladen, Seitentabelle aktualisiert, Befehl erneut ausgeführt.",
          source: "02_rabs_speicher.pdf, Folie 33"
        },
        {
          front: "TLB",
          back: "Spezielle Hardwareunterstützung durch einen Teil der MMU, der Teile der Seitentabelle cached.",
          source: "02_rabs_speicher.pdf, Folie 35"
        }
      ]
    },
    {
      id: "ipc-kommunikation",
      title: "IPC & Kommunikation",
      icon: "📡",
      cards: [
        {
          t: "Synchrone und asynchrone Kommunikation",
          b: "Synchron: Der Sender wartet, bis der Empfänger die Information entgegengenommen hat; die Empfangsoperation blockiert den Empfänger, bis Information eintrifft. Asynchron: Der Sender setzt sofort seine Arbeit fort; der Empfänger arbeitet auch dann weiter, wenn nichts empfangen wurde.",
          source: "10_rabs-ipc.pdf, Folie 18"
        },
        {
          t: "Pipes als Byte-Strom",
          b: "Pipes übertragen einen Strom von Bytes in FIFO-Reihenfolge zwischen Prozessen. Es gibt keine Nachrichtengrenzen oder Längenbeschränkungen.",
          source: "10_rabs-ipc.pdf, Folie 25"
        },
        {
          t: "Lesen und Schreiben auf Pipes",
          b: "Beim Schreiben in die Pipe wird der Schreiber bei vollem Puffer blockiert. Beim Lesen aus der Pipe wird der Leser bei leerem Puffer blockiert.",
          source: "10_rabs-ipc.pdf, Folien 26-27"
        },
        {
          t: "Unbenannte und benannte Pipes",
          b: "Eine unbenannte Pipe ist zunächst nur dem erzeugenden Prozess bekannt; Dateideskriptoren werden an Kindprozesse vererbt. Eine benannte Pipe ist als spezielle Datei im Dateisystem sichtbar und wird mit mkfifo erzeugt.",
          source: "10_rabs-ipc.pdf, Folien 28-30"
        },
        {
          t: "Pipes in der Shell",
          b: "Mit dem Pipe-Operator | wird die Ausgabe eines Kommandos an das nächste Kommando übergeben, zum Beispiel cat foo.txt | lpr oder set | grep PATH.",
          source: "10_rabs-ipc.pdf, Folie 31"
        },
        {
          t: "Shared Memory",
          b: "Gemeinsamer Speicher muss beim Betriebssystem explizit angefordert werden, von Sender und Empfänger gleichermaßen. Die Adresse des gemeinsamen Speichersegments wird in den Prozessadressraum integriert. Sender und Empfänger müssen denselben Datentyp benutzen und synchronisiert zugreifen.",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        },
        {
          t: "Shared Memory in UNIX",
          b: "shmget fordert ein Shared-Memory-Segment an oder erzeugt es. shmat bindet es ein, shmdt entfernt es aus dem eigenen Prozessraum und shmctl führt Steuerfunktionen aus.",
          source: "10_rabs-ipc.pdf, Folie 44"
        }
      ],
      questions: [
        {
          q: "Was unterscheidet synchrone und asynchrone Kommunikation?",
          a: "Bei synchroner Kommunikation wartet der Sender, bis der Empfänger die Information entgegengenommen hat. Bei asynchroner Kommunikation setzt der Sender sofort seine Arbeit fort.",
          source: "10_rabs-ipc.pdf, Folie 18"
        },
        {
          q: "Wie beschreibt die Vorlesung Pipes?",
          a: "Pipes übertragen einen Strom von Bytes in FIFO-Reihenfolge zwischen Prozessen. Es gibt keine Nachrichtengrenzen oder Längenbeschränkungen.",
          source: "10_rabs-ipc.pdf, Folie 25"
        },
        {
          q: "Wodurch unterscheiden sich unbenannte und benannte Pipes?",
          a: "Unbenannte Pipes sind zunächst nur dem erzeugenden Prozess bekannt. Benannte Pipes sind als spezielle Datei im Dateisystem sichtbar und werden mit mkfifo erzeugt.",
          source: "10_rabs-ipc.pdf, Folien 28-30"
        },
        {
          q: "Was gilt für Shared Memory?",
          a: "Es muss beim Betriebssystem explizit angefordert werden, die Adresse wird in den Prozessadressraum integriert und Sender und Empfänger müssen denselben Datentyp benutzen sowie synchronisiert zugreifen.",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        }
      ],
      flashcards: [
        {
          front: "Asynchrone Kommunikation",
          back: "Sender setzt nach dem Senden sofort seine Arbeit fort.",
          source: "10_rabs-ipc.pdf, Folie 18"
        },
        {
          front: "Pipe",
          back: "Byte-Strom in FIFO-Reihenfolge zwischen Prozessen.",
          source: "10_rabs-ipc.pdf, Folie 25"
        },
        {
          front: "Named Pipe",
          back: "Spezielle Datei im Dateisystem; Erzeugung mit mkfifo.",
          source: "10_rabs-ipc.pdf, Folie 30"
        },
        {
          front: "Shared Memory",
          back: "Muss explizit angefordert werden; gleicher Datentyp und synchronisierter Zugriff nötig.",
          source: "10_rabs-ipc.pdf, Folien 38-40"
        }
      ]
    },
    {
      id: "dateisysteme",
      title: "Dateisysteme",
      icon: "📁",
      cards: [
        {
          t: "Dateisysteme",
          b: "Dateisysteme speichern Daten und Programme persistent in Dateien. Sie bilden die Betriebssystemabstraktion zur Nutzung von Hintergrundspeichern und bestehen aus Dateien, Verzeichnissen und Partitionen.",
          source: "03_rabs_dateisystem.pdf, Folie 18"
        },
        {
          t: "Datei- und Verzeichnisbegriffe",
          b: "Dateien sind einfache, unstrukturierte Folgen von Bytes mit beliebigem Inhalt. Verzeichnisse sind baumförmig strukturiert. Bei UNIX sind die Blätter des Baums Verweise auf Dateien.",
          source: "03_rabs_dateisystem.pdf, Folien 50-52"
        },
        {
          t: "Unix I-Nodes",
          b: "Ein spezieller Plattenblock, der Indexblock, enthält alle Blocknummern der Datenblöcke einer Datei. Problem: Der Indexblock ist nur ein Plattenblock, daher ist seine Kapazität begrenzt. Für größere Dateien gibt es mehrere Indexstufen.",
          source: "03_rabs_dateisystem.pdf, Folie 47"
        },
        {
          t: "VFAT",
          b: "VFAT wurde mit MS-DOS eingeführt und ist heute gebräuchlich bei eingebetteten Systemen, Digitalkameras, MP3-Playern und USB-Sticks. Zugriffsrechte: nur lesbar oder schreib- und lesbar.",
          source: "03_rabs_dateisystem.pdf, Folien 50-51"
        },
        {
          t: "UFS",
          b: "UFS = UNIX File System. Dateien sind einfache, unstrukturierte Folgen von Bytes. Verzeichnisse sind baumförmig strukturiert. Zugriffsrechte sind lesbar, schreibbar und ausführbar.",
          source: "03_rabs_dateisystem.pdf, Folie 52"
        },
        {
          t: "Backup-Arten",
          b: "Komplett-Backup sichert alle Daten, also die komplette Platte. Inkrementelles Backup sichert Änderungen ab einem bestimmten Zeitpunkt. Differenzielles Backup sichert Änderungen immer bezogen auf das letzte Komplett-Backup.",
          source: "03_rabs_dateisystem.pdf, Folie 53"
        },
        {
          t: "3-2-1-Regel",
          b: "Drei Kopien der Daten einschließlich Original, auf mindestens zwei unterschiedlichen Datenträgern, davon mindestens ein Backup außer Haus.",
          source: "03_rabs_dateisystem.pdf, Folie 54"
        }
      ],
      questions: [
        {
          q: "Was leisten Dateisysteme laut Vorlesung?",
          a: "Sie speichern Daten und Programme persistent in Dateien und bilden die Betriebssystemabstraktion zur Nutzung von Hintergrundspeichern.",
          source: "03_rabs_dateisystem.pdf, Folie 18"
        },
        {
          q: "Was ist das Problem von Unix I-Nodes?",
          a: "Der Indexblock ist nur ein Plattenblock und seine Kapazität ist begrenzt. Deshalb werden mehrere Indexstufen für größere Dateien benötigt.",
          source: "03_rabs_dateisystem.pdf, Folie 47"
        },
        {
          q: "Wie unterscheiden sich Komplett-, inkrementelles und differenzielles Backup?",
          a: "Komplett-Backup sichert alle Daten. Inkrementelles Backup sichert Änderungen ab einem bestimmten Zeitpunkt. Differenzielles Backup sichert Änderungen immer bezogen auf das letzte Komplett-Backup.",
          source: "03_rabs_dateisystem.pdf, Folie 53"
        },
        {
          q: "Was fordert die 3-2-1-Regel?",
          a: "Drei Kopien der Daten, mindestens zwei unterschiedliche Datenträger und mindestens ein Backup außer Haus.",
          source: "03_rabs_dateisystem.pdf, Folie 54"
        }
      ],
      flashcards: [
        {
          front: "Dateisystem",
          back: "Speichert Daten und Programme persistent in Dateien.",
          source: "03_rabs_dateisystem.pdf, Folie 18"
        },
        {
          front: "Unix I-Nodes",
          back: "Indexblock mit Blocknummern; Kapazität eines einzelnen Indexblocks ist begrenzt.",
          source: "03_rabs_dateisystem.pdf, Folie 47"
        },
        {
          front: "Komplett-Backup",
          back: "Sichert alle Daten, also die komplette Platte.",
          source: "03_rabs_dateisystem.pdf, Folie 53"
        },
        {
          front: "3-2-1-Regel",
          back: "3 Kopien, 2 Datenträger, 1 Backup außer Haus.",
          source: "03_rabs_dateisystem.pdf, Folie 54"
        }
      ]
    },
    {
      id: "syscalls-shell",
      title: "Syscalls & Shell",
      icon: "🐚",
      cards: [
        {
          t: "Systemaufrufe",
          b: "Systemaufrufe sind die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem. Sie sind meist in Bibliotheksfunktionen gekapselt. In der Regel sind Systemaufrufe durchnummeriert; die Nummer wird vor Ausführung des TRAP-Befehls in ein festes Register geschrieben.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          t: "Ablauf eines Systemaufrufs",
          b: "Das Betriebssystem sichert zunächst den vollständigen Prozessorstatus in der Threadtabelle oder Prozesstabelle. Der aufrufende Thread kann blockiert werden. Die Rückkehr aus dem Betriebssystem erfolgt über den Scheduler und nicht unbedingt sofort zum aufrufenden Thread.",
          source: "04_rabs-os-konzepte.pdf, Folie 8"
        },
        {
          t: "Beispiel read",
          b: "read ist mit Dateihandler, Buffer und Anzahl der Zeichen parametrisiert und liefert die Anzahl der tatsächlich gelesenen Zeichen zurück. Im Fehlerfall wird der Rückgabewert auf -1 gesetzt.",
          source: "04_rabs-os-konzepte.pdf, Folie 9"
        },
        {
          t: "Typische Systemaufrufe",
          b: "Genannt werden fork, waitpid, execve, exit, open, close, read, write, lseek, mkdir, mount, chdir, chmod, chown, kill und time.",
          source: "04_rabs-os-konzepte.pdf, Folien 10-11"
        },
        {
          t: "Zugriffskontrolle",
          b: "UNIX nutzt Rechtebits für Eigentümer, Eigentümergruppe und andere Benutzer. Literale Rechte sind r, w und x. Programme, Benutzer und Systeme sollen nur so viele Privilegien bekommen, wie unbedingt notwendig ist.",
          source: "04_rabs-os-konzepte.pdf, Folien 21-23"
        },
        {
          t: "Shell",
          b: "Die Shell ist kein Teil des Betriebssystems, nutzt aber dessen Eigenschaften. Textuelle Shells bieten Kommandos, Ein- und Ausgabeumleitung, Pipes und Ausführung im Hintergrund. UNIX-Philosophie: viele kleine Kommandos, die man über Pipes kombinieren kann.",
          source: "04_rabs-os-konzepte.pdf, Folien 28-31"
        }
      ],
      questions: [
        {
          q: "Was sind Systemaufrufe?",
          a: "Sie sind die Schnittstelle zwischen Benutzerprogrammen und Betriebssystem und meist in Bibliotheksfunktionen gekapselt.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          q: "Was passiert beim Ablauf eines Systemaufrufs?",
          a: "Das Betriebssystem sichert den Prozessorstatus, der aufrufende Thread kann blockiert werden und die Rückkehr erfolgt über den Scheduler.",
          source: "04_rabs-os-konzepte.pdf, Folie 8"
        },
        {
          q: "Welche typischen Systemaufrufe nennt die Vorlesung?",
          a: "fork, waitpid, execve, exit, open, close, read, write, lseek, mkdir, mount, chdir, chmod, chown, kill und time.",
          source: "04_rabs-os-konzepte.pdf, Folien 10-11"
        },
        {
          q: "Was bietet die textuelle Shell?",
          a: "Kommandos zum Start neuer Prozesse, Ein- und Ausgabeumleitung, Pipes und Ausführung im Hintergrund.",
          source: "04_rabs-os-konzepte.pdf, Folien 28-31"
        }
      ],
      flashcards: [
        {
          front: "Systemaufruf",
          back: "Schnittstelle zwischen Benutzerprogrammen und Betriebssystem.",
          source: "04_rabs-os-konzepte.pdf, Folie 6"
        },
        {
          front: "read",
          back: "Liest Daten in einen Buffer; im Fehlerfall Rückgabewert -1.",
          source: "04_rabs-os-konzepte.pdf, Folie 9"
        },
        {
          front: "Least Authority",
          back: "Nur so viele Privilegien wie unbedingt notwendig.",
          source: "04_rabs-os-konzepte.pdf, Folie 21"
        },
        {
          front: "Shell",
          back: "Kommandos, Umleitung, Pipes und Hintergrundausführung.",
          source: "04_rabs-os-konzepte.pdf, Folien 28-31"
        }
      ]
    }
  ]
};
