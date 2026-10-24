---
id: speicherverwaltung
title: Speicherverwaltung
icon: 🧠
---

## Karte: Ziele der Speicherverwaltung
tag: wichtig
quelle: 02_rabs_speicher.pdf, Folie 5

Speicherverwaltung soll effizienten Zugriff auf physikalischen Arbeitsspeicher bereitstellen, Adressräume von Betriebssystem und Prozessen gegen illegale Zugriffe schützen und eine Schnittstelle für gemeinsame Speichernutzung bieten.

## Karte: Probleme der Speicherverwaltung
quelle: 02_rabs_speicher.pdf, Folie 6

Das Betriebssystem muss Speicherbereiche an Prozesse zuteilen, genug Speicher finden, zusätzliche Speicheranforderungen behandeln, Programme trotz Adressen verschiebbar machen, Prozesse schützen, begrenzten Hauptspeicher verwalten und Transparenz für Anwendungen bieten.

## Karte: Speicherhierarchie
quelle: 02_rabs_speicher.pdf, Folie 8

Der Prozessor greift direkt auf Register und internen Hauptspeicher zu. Registerzugriffe liegen innerhalb eines Taktzyklus, RAM-Zugriffe dauern länger, externe Speichermedien noch länger. Deshalb nutzt man eine Hierarchie verschieden schneller und verschieden großer Speicher.

## Karte: Zeitliche und räumliche Lokalität
quelle: 02_rabs_speicher.pdf, Folie 9

Caching funktioniert, weil gut strukturierte Programme zuletzt verwendete Adressen wahrscheinlich erneut verwenden (zeitliche Lokalität) und häufig auf Adressen in der Nähe vorheriger Zugriffe zugreifen (räumliche Lokalität).

## Karte: Prozessor-Caches
quelle: 02_rabs_speicher.pdf, Folie 11

L1-Cache speichert häufig benötigte Befehle und Daten. L2-Cache speichert Daten des RAM. L3-Cache wird bei Multicore-Prozessoren zur Sicherstellung des Cache-Kohärenz-Protokolls und zum Abgleich der Caches aller Kerne genutzt.

## Karte: Cache-Hit und Cache-Miss
tag: def
quelle: 02_rabs_speicher.pdf, Folie 13

Bei einem Cache-Hit befinden sich die Daten im Cache beziehungsweise auf der obersten Cache-Ebene. Bei einem Cache-Miss müssen Daten von einer unteren Speicherebene nachgeladen werden; Trefferzeit ist deutlich kleiner als Fehlschlagszeit.

## Karte: Hit-Ratio und Gründe für Cache-Misses
tag: formel
quelle: 02_rabs_speicher.pdf, Folie 14

Die Performanz eines Caches misst die Hit-Ratio = Hits / (Hits + Misses). Gründe für Misses: Cold-Start-Misses beim ersten Zugriff auf einen Speicherblock, Capacity-Misses wegen der begrenzten Cachegröße und Collision-Misses in nicht-assoziativen Caches, wenn der zugewiesene Cache-Platz schon belegt ist.

## Karte: Direkte Speicherverwaltung
quelle: 02_rabs_speicher.pdf, Folien 17-18

Bei direkter Speicherverwaltung läuft immer genau ein Programm neben dem Betriebssystem. Der Speicher wird nur zwischen beiden geteilt, beide liegen an festen Adressen, eine MMU ist nicht nötig. Das gibt es nur noch in einfachen eingebetteten Systemen. Die weiteren Mechanismen der Folien sind Auslagerung (logischer Adressraum, Swapping) und virtueller Speicher (Paging).

## Karte: MMU und Adressumsetzung
quelle: 02_rabs_speicher.pdf, Folie 19

Bei Mehrprogrammbetrieb schützt die MMU Betriebssystem und Programme voneinander und erlaubt das Laden an unterschiedlichen Adressen. Virtuelle Adressen werden durch Hardware-MMU auf physische Adressen umgesetzt, wobei Zugriffsrechte geprüft werden.

## Karte: Adressraum
tag: def
quelle: 02_rabs_speicher.pdf, Folie 20

Ein Adressraum ist die Menge von Adressen, die ein Prozess zur Adressierung des Speichers benutzen kann. Jeder Prozess erhält einen eigenen Adressraum; eine reale Adresse ergibt sich in der einfachen Variante aus Basisadresse plus Adresse im Adressraum.

## Karte: Speicherschutz
quelle: 02_rabs_speicher.pdf, Folie 21

Das Betriebssystem muss sicherstellen, dass jeder Prozess einen eigenen Adressraum besitzt. Es selbst hat Zugriff auf alle Prozess-Adressräume; Benutzerprozesse haben keinen Zugriff auf den Adressraum des Betriebssystems oder anderer Prozesse.

## Karte: Basis- und Limit-Register
quelle: 02_rabs_speicher.pdf, Folie 22

Das Basis-Register hält die kleinste Adresse, auf die der Prozess Zugriff hat. Das Limit-Register enthält die Größe des Adressraums. Zugriffe außerhalb dieses Bereichs führen zu einem Ausnahmefehler beziehungsweise Trap.

## Karte: Swapping
quelle: 02_rabs_speicher.pdf, Folien 24-26

Beim Swapping wird ein Prozess komplett in den Speicher geladen, kann eine Zeit laufen und wird dann komplett ausgelagert. Ein Teil der Festplatte dient dazu, gerade nicht ausgeführte Prozesse aus dem Hauptspeicher auszulagern.

## Karte: Fragmentierung beim Swapping
quelle: 02_rabs_speicher.pdf, Folie 27

Beim Swapping entstehen Lücken im Speicher. Sie lassen sich durch Speicherverdichtung zusammenfassen, das ist aber zeitaufwändig und wird normalerweise nicht eingesetzt. Für dynamisch wachsenden Speicher wird beim Einlagern mehr reserviert, nicht genutzter Speicher nicht mit ausgelagert, und jeder Prozess hat ein spezielles Speicherlayout mit Heap und Stack.

## Karte: Virtueller Speicher und Paging
tag: wichtig
quelle: 02_rabs_speicher.pdf, Folien 28-33

Virtueller Speicher bricht den Adressraum in Seiten auf. MMU und Betriebssystem bilden virtuelle auf physische Adressen ab. Paging teilt physischen Speicher in Frames und logischen Adressraum in gleich große Pages; die Seitentabelle enthält das Mapping und ein Present-/Absent-Bit.

## Karte: Page Fault
quelle: 02_rabs_speicher.pdf, Folie 33

Führt eine virtuelle Adresse auf eine ausgelagerte Seite, entsteht ein Seitenfehler. Das Betriebssystem lagert einen wenig benutzten Seitenrahmen aus, lädt die angeforderte Seite, aktualisiert die Seitentabelle und führt den auslösenden Befehl erneut aus.

## Karte: Seitengröße und TLB
quelle: 02_rabs_speicher.pdf, Folie 35

Große Seiten bedeuten mehr Treffer pro Seitenaufruf und weniger Einlagerungen, aber mehr interne Fragmentierung. Kleine Seiten führen zu langen Seitentabellen. Der Translation Lookaside Buffer ist spezielle Hardwareunterstützung, im Prinzip ein Teil der MMU.

## Karte: Virtueller Speicher: Vor- und Nachteile
tag: wichtig
quelle: 02_rabs_speicher.pdf, Folie 36

Vorteile: Programme dürfen größer als der Arbeitsspeicher sein, Prozesse müssen nicht komplett im Speicher liegen, Adressierung ist aus Programmierersicht linear ohne Fragmentierung, Code und Daten können gemeinsam genutzt werden, und Speicherschutz ist einfach. Nachteile: aufwendige Adressierung, zusätzliche Verwaltungsstrukturen (Page-Tables), ein Teil der Festplatte dient als Auslagerungsdatei, komplexe Seitenersetzungsstrategien.

## Karte: Windows-Speicherbereiche
quelle: 02_rabs_speicher.pdf, Folien 38-46

Die Windows-Beispiele nennen unter anderem für Hardware reservierten Speicher, verwendeten Speicher, geänderte Seiten, freien Speicher, Auslagerungsdatei, ausgelagerten Pool und nicht ausgelagerten Pool.

## Frage: Welche drei Ziele hat Speicherverwaltung laut Folien?
id: 1yrt5nn
quelle: 02_rabs_speicher.pdf, Folie 5

Effizienter Zugriff auf physikalischen Arbeitsspeicher, Schutz der Adressräume gegen illegale Zugriffe und eine Schnittstelle für gemeinsame Speichernutzung.

## Frage: Warum funktioniert Caching?
id: x9ljdp
quelle: 02_rabs_speicher.pdf, Folie 9

Wegen zeitlicher Lokalität und räumlicher Lokalität gut strukturierter Programme.

## Frage: Was ist ein Cache-Hit?
id: 1vtcz9l
quelle: 02_rabs_speicher.pdf, Folie 13

Bei einem Cache-Hit liegen die Daten im Cache beziehungsweise auf der obersten Cache-Ebene.

## Frage: Was ist ein Cache-Miss?
id: t0f068
quelle: 02_rabs_speicher.pdf, Folie 13

Bei einem Cache-Miss müssen Daten von einer unteren Speicherebene nachgeladen werden.

## Frage: Wie berechnet sich die Hit-Ratio eines Caches?
id: 1xfydb8
quelle: 02_rabs_speicher.pdf, Folie 14

Hit-Ratio = Hits / (Hits + Misses).

## Frage: Welche drei Arten von Cache-Misses nennen die Folien?
id: 16sofan
quelle: 02_rabs_speicher.pdf, Folie 14

Cold-Start-Misses (erster Zugriff auf einen Block), Capacity-Misses (begrenzte Cachegröße) und Collision-Misses (zugewiesener Platz in nicht-assoziativen Caches schon belegt).

## Frage: Wann genügt direkte Speicherverwaltung?
id: gn7jtp
quelle: 02_rabs_speicher.pdf, Folie 18

Wenn genau ein Programm neben dem Betriebssystem läuft, etwa in einfachen eingebetteten Systemen; dann ist keine MMU erforderlich.

## Frage: Was macht die MMU?
id: 1buc1gz
quelle: 02_rabs_speicher.pdf, Folie 19

Sie setzt virtuelle Adressen auf physische Adressen um und prüft Zugriffsrechte.

## Frage: Was ist ein Adressraum?
id: ajyvt4
quelle: 02_rabs_speicher.pdf, Folie 20

Ein Adressraum ist die Menge der Adressen, die ein Prozess zur Speicheradressierung benutzen kann.

## Frage: Was passiert beim Swapping?
id: 136j2be
quelle: 02_rabs_speicher.pdf, Folie 24

Beim Swapping wird ein Prozess komplett eingelagert, kann laufen und wird danach wieder komplett ausgelagert.

## Frage: Wie wird Fragmentierung beim Swapping behandelt?
id: 1ofrpas
quelle: 02_rabs_speicher.pdf, Folie 27

Lücken können durch Speicherverdichtung zusammengefasst werden; das ist aber zeitaufwändig und wird normalerweise nicht eingesetzt.

## Frage: Was passiert bei einem Page Fault?
id: 1xk2vpt
quelle: 02_rabs_speicher.pdf, Folie 33

Das Betriebssystem lädt die ausgelagerte Seite in den Speicher, aktualisiert die Seitentabelle und führt den auslösenden Befehl erneut aus; dafür kann ein wenig benutzter Seitenrahmen ausgelagert werden.

## Frage: Welche Information liefert das Present-/Absent-Bit?
id: gdgiwl
quelle: 02_rabs_speicher.pdf, Folie 33

Das Present-/Absent-Bit im Seitentabelleneintrag zeigt, ob eine Seite im Speicher liegt oder ausgelagert ist.

## Frage: Welche Nachteile haben große beziehungsweise kleine Seiten?
id: 1jjdsr0
quelle: 02_rabs_speicher.pdf, Folie 35

Große Seiten verursachen mehr interne Fragmentierung; kleine Seiten führen zu langen Seitentabellen.

## Frage: Welche Vor- und Nachteile hat virtueller Speicher?
id: orhch4
quelle: 02_rabs_speicher.pdf, Folie 36

Vorteile: Programme größer als der Arbeitsspeicher, Prozesse nur teilweise im Speicher, lineare Adressierung, gemeinsamer Code, einfacher Speicherschutz. Nachteile: aufwendige Adressierung, Page-Tables, Auslagerungsdatei, komplexe Seitenersetzung.
