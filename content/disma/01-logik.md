---
id: logik
title: Aussagen- und Prädikatenlogik
icon: 🔣
---

## Karte: Regeln bei Bezeichnungen
quelle: DiskreteMathematikVLHO.pdf, Folien 5-6

Werden ähnliche mathematische Objekte auf einmal verwendet, drückt man die Ähnlichkeit durch gleiche Buchstaben in verschiedenen Ausführungen aus, z. B. \(a\), \(\tilde{a}\), \(\hat{a}\) für drei reelle Zahlen. Ist eine Reihenfolge wichtig, verwendet man Indizes: \(a_1, a_2, a_3, \ldots, a_n\) mit einer natürlichen Zahl \(n\); auch Doppelindizes wie \(a_{ij}\) sind möglich.

## Karte: Beweis und Satz
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 8

Ein <em>Beweis</em> in der Mathematik ist die gültige Herleitung der Wahrheit (oder Falschheit) einer Aussage aus einer Menge von <em>Axiomen</em> (nicht weiter beweisbarer Grundtatsachen) und bereits bewiesener Aussagen mithilfe logischer Regeln. Solche bewiesenen Aussagen werden <em>Sätze</em> genannt.

## Karte: Definition
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 9

Viele Aussagen in der Mathematik sind nicht zu beweisende Namensgebungen oder Abkürzungen, die man <em>Definitionen</em> nennt.

## Karte: Aussage
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 10

Eine <em>Aussage</em> ist ein sprach-schriftlicher Satz in umgangssprachlicher oder mathematischer Formulierung, der einen Sachverhalt beschreibt, dem als <em>Wahrheitswert</em> stets „1“ (wahr) oder „0“ (falsch) zugeordnet werden kann. Eine Aussage kann dabei stets nur einen Wahrheitswert annehmen.

## Karte: Und, Oder, Implikation, Äquivalenz
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folien 11-14

Für Aussagen \(A_1\), \(A_2\) gelten die Wahrheitstabellen: <table><thead><tr><th>\(A_1\)</th><th>\(A_2\)</th><th>\(A_1 \land A_2\)</th><th>\(A_1 \lor A_2\)</th><th>\(A_1 \to A_2\)</th><th>\(A_1 \leftrightarrow A_2\)</th></tr></thead><tbody><tr><td>wahr</td><td>wahr</td><td>wahr</td><td>wahr</td><td>wahr</td><td>wahr</td></tr><tr><td>wahr</td><td>falsch</td><td>falsch</td><td>wahr</td><td>falsch</td><td>falsch</td></tr><tr><td>falsch</td><td>wahr</td><td>falsch</td><td>wahr</td><td>wahr</td><td>falsch</td></tr><tr><td>falsch</td><td>falsch</td><td>falsch</td><td>falsch</td><td>wahr</td><td>wahr</td></tr></tbody></table> Für die Implikation verwendet man auch das Synonym „es folgt“ und das Symbol \(\Rightarrow\), für die Äquivalenz auch \(\Leftrightarrow\).

## Karte: Negation
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 15

Die <em>Negation</em> \(\neg\) ändert den Wahrheitswert einer Aussage in das Gegenteil: Ist \(A\) wahr, ist \(\neg A\) falsch, und umgekehrt.

## Karte: Implikation oder Äquivalenz?
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 16

i) \(x = 1 \Rightarrow x^2 = 1\), ii) \(x = 1 \Leftrightarrow x^2 = 1\). Richtig ist nur i), denn \(x^2 = 1\) wird auch von \(x = -1\) erfüllt.

## Karte: Wahrheitstabelle zusammengesetzter Aussagen
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 17

Zusammengesetzte Aussagen werden spaltenweise ausgewertet, z. B. \(A_1 \leftrightarrow (\neg A_1 \land \neg A_2)\): <table><thead><tr><th>\(A_1\)</th><th>\(A_2\)</th><th>\(\neg A_1\)</th><th>\(\neg A_2\)</th><th>\(\neg A_1 \land \neg A_2\)</th><th>\(A_1 \leftrightarrow (\neg A_1 \land \neg A_2)\)</th></tr></thead><tbody><tr><td>wahr</td><td>wahr</td><td>falsch</td><td>falsch</td><td>falsch</td><td>falsch</td></tr><tr><td>wahr</td><td>falsch</td><td>falsch</td><td>wahr</td><td>falsch</td><td>falsch</td></tr><tr><td>falsch</td><td>wahr</td><td>wahr</td><td>falsch</td><td>falsch</td><td>wahr</td></tr><tr><td>falsch</td><td>falsch</td><td>wahr</td><td>wahr</td><td>wahr</td><td>falsch</td></tr></tbody></table>

## Karte: Prädikat
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 19-21

Ein <em>Prädikat</em> ist eine Aneinanderreihung von Wörtern einer Sprache (der natürlichen oder derjenigen der Mathematik), die mindestens null Leerstellen hat, welche zu einer – wahren oder falschen – Aussage wird, wenn in jede Leerstelle ein Objekt eingesetzt wird. Mit genau einer Leerstelle heißt es einstelliges Prädikat, sonst zweistelliges usw. Ein nullstelliges Prädikat ist eine Aussage. „\(x\) ist eine Primzahl“ ist keine Aussage, da der Wahrheitswert davon abhängt, was \(x\) ist. Die Schreibweise \(A(\cdot)\) bedeutet, dass an der Stelle des Punktes noch etwas einzusetzen ist; meist dürfen nur Objekte eingesetzt werden, für die die Aussage einen Sinn ergibt.

## Karte: Beispiele für Prädikate
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folien 22-23

„Ein Mensch ist ein Säugetier.“ ist ein nullstelliges Prädikat, „… ist kleiner als …“ ein zweistelliges. Setzt man nur in die erste Leerstelle ein, entsteht das einstellige Prädikat „Tim ist kleiner als …“, mit zwei Eigennamen der Satz „Tim ist kleiner als Don.“ Für natürliche Zahlen \(x, y\): \(A_1(x)\): „\(x\) ist eine gerade Zahl.“, \(A_2(x)\): „\(x + 1\) ist eine gerade Zahl.“, \(A_3(x)\): „Wenn \(x\) eine gerade Zahl ist, dann ist \(x + 1\) eine ungerade Zahl.“, \(A_4(x, y)\): „\(x\) ist eine gerade Zahl, und \(y\) ist eine ungerade Zahl.“

## Karte: Allquantor und Existenzquantor
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 24-27

Gilt \(A(x)\) für alle Einsetzungen \(x\), schreibt man die wahre Aussage \(\forall x A(x)\), sprich „Für alle \(x\) gilt \(A(x)\).“; \(\forall\) heißt Allquantor. Beispiel: \(A_3(\cdot)\) ist für alle natürlichen Zahlen wahr. Ist \(A(x)\) wenigstens für ein \(x\) wahr, schreibt man \(\exists x A(x)\), „Es gibt/existiert ein \(x\) mit \(A(x)\)“; \(\exists\) heißt Existenzquantor. Beispiel: \(A_1(x)\), denn \(x = 42\) liefert eine wahre Aussage; wie viele Einsetzungen wahr werden, ist unerheblich. Ist \(A(x)\) nur für ein \(x\) wahr, sagt man „Es gibt <em>genau</em> ein \(x\) mit \(A(x)\).“

## Karte: Tautologien mit Quantoren
tag: wichtig
quelle: DiskreteMathematikVLHO.pdf, Folie 28

Für ein einstelliges Prädikat \(A(\cdot)\) und ein zweistelliges \(B(\cdot,\cdot)\) sind stets wahr: \[\neg\forall x A(x) \leftrightarrow \exists x \neg A(x),\qquad \neg\exists x A(x) \leftrightarrow \forall x \neg A(x),\] \[\neg\forall x \exists y B(x,y) \leftrightarrow \exists x \forall y \neg B(x,y),\] \[\forall x \forall y B(x,y) \leftrightarrow \forall y \forall x B(x,y),\qquad \exists x \exists y B(x,y) \leftrightarrow \exists y \exists x B(x,y),\] \[\exists x \forall y B(x,y) \to \forall y \exists x B(x,y).\]

## Karte: Beispiel zur letzten Tautologie
tag: beispiel
quelle: DiskreteMathematikVLHO.pdf, Folie 29

Mit \(B(x, y)\): „\(x\) ist ein Mann, der zur Frau \(y\) passt“ ist \(\exists x \forall y B(x,y) \to \forall y \exists x B(x,y)\) äquivalent zu: „Wenn es einen Mann gibt, der zu jeder Frau passt, dann gibt es für jede Frau einen Mann, der zu ihr passt.“

## Karte: Aussagenlogik vs. Prädikatenlogik
quelle: DiskreteMathematikVLHO.pdf, Folie 30

Bei manchen Sachverhalten zeigt sich die Praktikabilität der Prädikatenlogik deutlich: Für die Aussage „Roboter 7 befindet sich an Position (11,77)“ auf einem 100×100-Feld bräuchte man bei 100 Robotern \(10^6\) verschiedene Aussagen.

## Frage: Was ist ein Beweis, was ein Satz?
id: beweis-satz
quelle: DiskreteMathematikVLHO.pdf, Folie 8

Ein Beweis ist die gültige Herleitung der Wahrheit (oder Falschheit) einer Aussage aus Axiomen und bereits bewiesenen Aussagen mithilfe logischer Regeln. Bewiesene Aussagen heißen Sätze.

## Frage: Was sind Axiome?
id: axiome
quelle: DiskreteMathematikVLHO.pdf, Folie 8

Nicht weiter beweisbare Grundtatsachen.

## Frage: Was ist eine Aussage?
id: aussage
quelle: DiskreteMathematikVLHO.pdf, Folie 10

Ein sprach-schriftlicher Satz, der einen Sachverhalt beschreibt und dem stets genau ein Wahrheitswert „1“ (wahr) oder „0“ (falsch) zugeordnet werden kann.

## Frage: Wann ist die Implikation \(A_1 \to A_2\) falsch?
id: implikation-falsch
quelle: DiskreteMathematikVLHO.pdf, Folie 13

Nur wenn \(A_1\) wahr und \(A_2\) falsch ist. In allen anderen Fällen ist sie wahr.

## Frage: Wann ist die Äquivalenz \(A_1 \leftrightarrow A_2\) wahr?
id: aequivalenz-wahr
quelle: DiskreteMathematikVLHO.pdf, Folie 14

Wenn \(A_1\) und \(A_2\) denselben Wahrheitswert haben, also beide wahr oder beide falsch sind.

## Frage: Warum gilt \(x = 1 \Rightarrow x^2 = 1\), aber nicht \(x = 1 \Leftrightarrow x^2 = 1\)?
id: implikation-quadrat
quelle: DiskreteMathematikVLHO.pdf, Folie 16

Weil \(x^2 = 1\) auch von \(x = -1\) erfüllt wird; aus \(x^2 = 1\) folgt also nicht \(x = 1\).

## Frage: Was ist ein Prädikat?
id: praedikat
quelle: DiskreteMathematikVLHO.pdf, Folie 19

Eine Aneinanderreihung von Wörtern mit mindestens null Leerstellen, die zu einer wahren oder falschen Aussage wird, wenn in jede Leerstelle ein Objekt eingesetzt wird.

## Frage: Warum ist „\(x\) ist eine Primzahl“ keine Aussage?
id: primzahl-keine-aussage
quelle: DiskreteMathematikVLHO.pdf, Folie 20

Weil der Wahrheitswert davon abhängt, was \(x\) ist. Es ist ein einstelliges Prädikat; ein nullstelliges Prädikat wäre eine Aussage.

## Frage: Was bedeuten \(\forall x A(x)\) und \(\exists x A(x)\)?
id: quantoren
quelle: DiskreteMathematikVLHO.pdf, Folien 24 und 26

\(\forall x A(x)\): Für alle \(x\) gilt \(A(x)\) (Allquantor). \(\exists x A(x)\): Es gibt wenigstens ein \(x\) mit \(A(x)\) (Existenzquantor).

## Frage: Wie lautet die Negation von \(\forall x A(x)\) und von \(\exists x A(x)\)?
id: negation-quantoren
quelle: DiskreteMathematikVLHO.pdf, Folie 28

\(\neg\forall x A(x) \leftrightarrow \exists x \neg A(x)\) und \(\neg\exists x A(x) \leftrightarrow \forall x \neg A(x)\).

## Frage: Darf man in \(\exists x \forall y B(x,y)\) die Quantoren vertauschen?
id: quantoren-vertauschen
quelle: DiskreteMathematikVLHO.pdf, Folien 28-29

Nicht als Äquivalenz: Es gilt nur die Implikation \(\exists x \forall y B(x,y) \to \forall y \exists x B(x,y)\). Gleichartige Quantoren (\(\forall\forall\) oder \(\exists\exists\)) dürfen vertauscht werden.

## Aufgabe: De Morgan
id: aufgabe-1-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 1

Seien \(A_1\) und \(A_2\) Aussagen. Beweisen oder widerlegen Sie mit einer Wahrheitstabelle: \[\neg(A_1 \land A_2) \leftrightarrow (\neg A_1 \lor \neg A_2)\]

## Aufgabe: Der Lügner
id: aufgabe-2-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 2

Entlarven Sie durch explizite Verwendung der Aussagenlogik den Lügner: In einer Welt, in der jeder Mensch entweder stets lügt oder stets die Wahrheit sagt, fragt eine Kommissarin den Verdächtigen Herrn K. nach ihm und seinem Bruder. Herr K. antwortet: „Mindestens einer von uns beiden ist ein Lügner.“ Was weiß die Kommissarin nun über Herrn K. und seinen Bruder?

## Aufgabe: Mehrstellige Prädikate
id: aufgabe-3-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 3

Formulieren Sie ein drei- und ein fünfstelliges Prädikat aus dem Bereich der Mathematik.

## Aufgabe: Aussagen mit Quantoren
id: aufgabe-4-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 4

Formulieren Sie mit Prädikaten und Quantoren: a) Alle Katzen haben Schnurrhaare. b) Alles ist Pflanze und braucht Licht. c) Es gibt wenigstens einen Fluss nördlich von Dessau. d) Es existiert ein gemeinsamer Onkel von Mia und Leon. Hinweis: Dass ein Objekt \(x\) eine Banane ist, würden Sie als Prädikat durch „Banane(\(x\))“ ausdrücken.

## Aufgabe: Quantoren im Gitter
id: aufgabe-5-variante
quelle: ÜbungsaufgabenDisMa.pdf, Aufgabe 5

Betrachten Sie das Prädikat \(Mxy\): \(x\) mag \(y\). Stellen Sie in einem 4 mal 4 Felder großen Gitter dar: a) \(\exists x \forall y\, Mxy\) b) \(\forall y \exists x\, Mxy\) c) \(\exists x \exists y\, Mxy\) d) \(\forall x\, \neg Mxx\)
