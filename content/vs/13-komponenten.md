---
id: komponenten
title: Komponenten & EJB
icon: 🫘
---

## Karte: Komponenten (Szyperski)
tag: def
quelle: 07_ds-concept-components.pdf, Folien 4, 6

Eine Softwarekomponente ist eine Kompositionseinheit mit vertraglich spezifizierten Schnittstellen und nur expliziten Kontextabhängigkeiten. Komponenten geben die Schnittstellen an, die sie bieten und die sie benötigen — die Beziehungen werden oft als Vertrag bezeichnet. Dazu kommen: strukturierte und transparente Kommunikation mit der Middleware, Nutzung von Infrastrukturdiensten, Unterstützung beim Deployment. Verteilte Objekte können als Vorläufer von Komponenten betrachtet werden.

## Karte: Komponenten-basierte Programmierung
tag: def
quelle: 07_ds-concept-components.pdf, Folie 9

Befasst sich mit der Entwicklung von Komponenten und deren Komposition. Ziel ist ein Stil der Software-Entwicklung ähnlich der Hardware-Entwicklung: Komponenten von der Stange verwenden und zusammensetzen — ein Übergang von der Software-Entwicklung zur Software-Zusammenstellung. Das unterstützt Drittanbieter-Komponenten und erleichtert die Anpassung von Systemkonfigurationen zur Laufzeit durch Austausch passgenauer Komponenten.

## Karte: Kernanliegen vs. Plumbing
tag: wichtig
quelle: 07_ds-concept-components.pdf, Folien 11-13

Der Fokus der Softwareentwicklung sollte auf den Kernanliegen der Anwendung liegen — allgemein als Geschäftslogik bezeichnet. Daneben gibt es das „Plumbing“: Auf Komponenten muss über Schnittstellen zugegriffen werden, für unterschiedliche Datenformate müssen Adapter erstellt werden. Anwendungen bestehen aus funktionalen, wiederverwendbaren Komponenten mit generischen Schnittstellen.

## Karte: Container
tag: def
quelle: 07_ds-concept-components.pdf, Folien 7, 15-16

Ein Container ist ein Host, der Dienste für Gastanwendungen bereitstellt. Er stellt nicht zum Kerngeschäft gehörende Funktionen entkoppelt bereit; die Anwendung kann sich auf generische Dienste verlassen. Container sind die Schnittstelle zwischen einer Komponente und der plattformspezifischen Low-Level-Funktionalität: Komponenten müssen in ein Java-EE-Modul assembliert und im Container bereitgestellt werden. Container verwalten Lebenszyklus, Datenpersistenz, Ressourcenpooling, Transaktionen, Sicherheit und Low-Level-Kommunikation (transparenter Remote-Zugriff auf EJBs). Die EJB-Spezifikation definiert die geforderten Fähigkeiten.

## Karte: Container Services
tag: wichtig
quelle: 07_ds-concept-components.pdf, Folien 17-18

Registrierung, Dependency Injection und Suche; Transaction Management (JTA — Komponenten sind automatisch transaktional); Pooling (Instanzen werden von Clients gemeinsam genutzt und nach Gebrauch in den Pool zurückgegeben); Sicherheit per Konfiguration; Thread-Sicherheit und Nebenläufigkeit; Lifecycle-Management; Fernzugriff (Beans werden zu netzwerkfähigen verteilten Komponenten); Unterstützung für gleichzeitige Anfragen; Clustering und Lastausgleich.

## Karte: Vereinfachtes Entwicklungs-Modell
tag: def
quelle: 07_ds-concept-components.pdf, Folien 19-20

XML und Annotationen (Deployment Descriptor vs. Annotations), Dependency Injection (EJBs werden nach der Instanziierung vom Container initialisiert), Interceptors und Callback-Methoden, POJO-Implementierung, intelligente Nutzung von Default-Werten. Annotationen sind Metadaten, die das Verhalten der POJOs im Container definieren (z. B. <code>@Stateful</code> oder <code>@Stateless</code>).

## Karte: Dependency Injection und Interception
tag: def
quelle: 07_ds-concept-components.pdf, Folien 21-22

<b>Dependency Injection:</b> Der Container kümmert sich um die Beziehung einer Komponente zu ihren Abhängigkeiten — beschrieben über Annotationen (z. B. <code>@EJB MyBean m;</code>): Das Attribut wird deklariert, der Container fügt zur Laufzeit die richtige Abhängigkeit ein. <b>Interception:</b> Mechanismus, das Default-Verhalten eines Containers durch eigene Methoden zu verändern — bei Methodenaufrufen (<code>@AroundInvoke</code>) und Lifecycle-Events (<code>@PostConstruct</code>, <code>@PreDestroy</code>).

## Karte: Enterprise Java Bean (EJB)
tag: def
quelle: 07_ds-concept-components.pdf, Folien 23-24

Ein EJB ist eine in Java geschriebene serverseitige Komponente, die die Geschäftslogik einer Anwendung enthält und (Teile davon) als Dienste für andere Anwendungen bereitstellt. Benefits: Der Container liefert Dienste auf Systemebene (Transaktionsverwaltung, Sicherheitsautorisierung), sodass sich der Programmierer auf die Geschäftslogik konzentrieren kann; Client-Entwickler können sich auf die Präsentationsebene konzentrieren (Thin Clients); EJBs sind in hohem Maße wiederverwendbar. Zwei Arten: Session Beans (führen Aufgaben für Clients aus, optional als Webdienst) und Message-Driven Beans (Listener für Nachrichten, z. B. JMS).

## Karte: Session Beans
tag: def
quelle: 07_ds-concept-components.pdf, Folien 26-27

Eine Session Bean kapselt Geschäftslogik, die ein Client programmgesteuert über lokale, Remote- oder Webservice-Clientansichten aufruft. Die Lebensdauer entspricht der Interaktion mit dem Client-Code; Instanzen werden nicht von mehreren Clients geteilt und stellen keine Daten in einer Datenbank dar. Der EJB-Container erstellt eine Instanz beim ersten Kontakt; endet die Client-Sitzung, wird die Bean ggf. zerstört. Drei Arten: Stateful, Stateless und Singleton.

## Karte: Stateless Session Beans
tag: wichtig
quelle: 07_ds-concept-components.pdf, Folien 28-32

Enthalten keine Konversationen, die sich über einen einzelnen Methodenaufruf hinaus erstrecken — kein für den Client sichtbarer Status. Instanzvariablen können nur für die Dauer eines Aufrufs Status enthalten; außerhalb sind alle Instanzen gleichwertig, sodass der Container jedem Client eine beliebige Instanz zuweisen kann. Bessere Skalierbarkeit (mehrere Clients); können Webdienste implementieren. Beispiel: <code>@Stateless public class HelloUserBean { public String sayHello(String name) {...} }</code> — automatisch threadsicher, transaktional und gepoolt. Einbettung ins Servlet per <code>@EJB</code>-Injektion.

## Karte: Pooling und Lifecycle-Callbacks
tag: def
quelle: 07_ds-concept-components.pdf, Folien 33-34

Stateless Beans werden gepoolt: Der Container weist bei einer Anfrage eine Instanz zu und stellt sie nach Methodenende zurück in den Pool; bei Überschreitung der Obergrenze werden Anfragen in eine Warteschlange gestellt; Beans werden bei Leerlauf entfernt. Callbacks: <code>@PostConstruct</code> wird sofort nach Erstellung, Einrichtung und Ressourcen-Injektion aufgerufen; <code>@PreDestroy</code> direkt vor der Zerstörung.

## Karte: Stateful Session Beans und Passivierung
tag: def
quelle: 07_ds-concept-components.pdf, Folien 36-38

Für Geschäftsprozesse konzipiert, die mehrere Methodenanforderungen oder Transaktionen umfassen — sie behalten den Status eines einzelnen Clients bei (Konversationszustand). Ähnlich einer interaktiven Sitzung: nur ein Client; entfernt der Client die Bean, endet die Sitzung und der Status verschwindet. Pooling ist auch hier nötig; da der Konversationszustand groß sein kann, wird ähnlich wie bei Betriebssystemen Swapping eingesetzt — die <b>Passivierung</b>: Die Bean wird ausgelagert und wieder aktiviert, wenn ein Client sie aufruft.

## Karte: Singleton Session Beans
tag: def
quelle: 07_ds-concept-components.pdf, Folien 39-40

Werden nur einmal pro Anwendung instanziiert und existieren für deren Lebenszyklus. Eine einzelne EJB-Instanz wird von allen Clients gemeinsam genutzt und gleichzeitig zugegriffen; sie können Webdienste implementieren. Sie sind zustandslosen Session Beans sehr ähnlich (gleiche Callbacks), bieten die Möglichkeit, den gleichzeitigen Zugriff zu steuern, und können einen anwendungsglobalen gemeinsamen Status bereitstellen.

## Frage: Wie definiert Szyperski eine Softwarekomponente?
id: 1487s3
quelle: 07_ds-concept-components.pdf, Folie 6

Eine Kompositionseinheit mit vertraglich spezifizierten Schnittstellen und nur expliziten Kontextabhängigkeiten — alle Kontextabhängigkeiten müssen explizit sein.

## Frage: Was ist ein Container und was verwaltet er?
id: 1ptmupx
quelle: 07_ds-concept-components.pdf, Folien 15-16

Ein Host, der Dienste für Gastanwendungen bereitstellt — die Schnittstelle zwischen Komponente und plattformspezifischer Low-Level-Funktionalität. Er verwaltet Lebenszyklus, Datenpersistenz, Ressourcenpooling, Transaktionen, Sicherheit und Low-Level-Kommunikation.

## Frage: Welche Rolle haben @Stateless und @Stateful?
id: 19d63
quelle: 07_ds-concept-components.pdf, Folie 20

@Stateless und @Stateful sind Annotationen, die das Verhalten eines POJO als Session Bean im Container definieren.

## Frage: Was ist Dependency Injection?
id: 7knx37
quelle: 07_ds-concept-components.pdf, Folie 21

Der Container kümmert sich um die Beziehungen einer Komponente zu ihren Abhängigkeiten. Per Annotation (z. B. @EJB) wird ein Attribut deklariert; der Container stellt zur Laufzeit sicher, dass die richtige Abhängigkeit eingefügt wird.

## Frage: Was ist eine Enterprise Java Bean und welche Arten gibt es?
id: 18i3qts
quelle: 07_ds-concept-components.pdf, Folien 23-24

Eine serverseitige Java-Komponente mit der Geschäftslogik einer Anwendung, bereitgestellt als Dienst. Zwei Arten: Session Beans (Aufgaben für Clients, optional Webdienst) und Message-Driven Beans (Nachrichten-Listener, z. B. JMS).

## Frage: Welche drei Arten von Session Beans gibt es?
id: amknsy
quelle: 07_ds-concept-components.pdf, Folie 26

Die drei Arten von Session Beans sind Stateless, Stateful und Singleton.

## Frage: Worin unterscheiden sich Stateless und Stateful Session Beans?
id: 1iju7ix
quelle: 07_ds-concept-components.pdf, Folien 28-29, 36

Stateless: kein für den Client sichtbarer Status über den Methodenaufruf hinaus, Instanzen gleichwertig und poolbar, bessere Skalierbarkeit, Webdienste möglich. Stateful: behalten den Konversationszustand eines einzelnen Clients über mehrere Aufrufe; nur ein Client; kein Webdienst.

## Frage: Wofür stehen @PostConstruct und @PreDestroy?
id: mrra3q
quelle: 07_ds-concept-components.pdf, Folie 34

@PostConstruct wird sofort nach Erstellung, Einrichtung und Ressourcen-Injektion einer Bean-Instanz aufgerufen; @PreDestroy direkt vor ihrer Zerstörung.

## Frage: Was ist Passivierung?
id: 1mo4uy5
quelle: 07_ds-concept-components.pdf, Folie 38

Das Swapping des EJB-Containers für Stateful Session Beans: Weil der Konversationszustand groß sein kann, wird die Bean ausgelagert und wieder aktiviert, wenn ein Client sie aufruft.

## Frage: Was zeichnet Singleton Session Beans aus?
id: edkvra
quelle: 07_ds-concept-components.pdf, Folien 39-40

Eine Instanz pro Anwendung für deren gesamten Lebenszyklus, von allen Clients gemeinsam und gleichzeitig genutzt; Steuerung des gleichzeitigen Zugriffs; anwendungsglobaler gemeinsamer Status; Webdienste möglich.
