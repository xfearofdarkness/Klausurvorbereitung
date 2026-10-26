---
id: abtasttheorem
title: Rekonstruktion und Abtasttheorem
icon: 🌀
---

## Karte: Abtasttheorem und Spektralkomponenten
tag: wichtig
quelle: DSV-final.pdf, Folie 251

Von den \(N\) spektralen Werten behalten wir diejenigen bis zur und inklusive der Abtast/Spiegel-Frequenz. Das sind \((N/2) + 1\) spektrale Komponenten zwischen 0 und \(f_s/2\) Hz mit einem Frequenzabstand von \(f_s/N\).

## Karte: Rekonstruktion des Ursprungssignals
tag: wichtig
quelle: DSV-final.pdf, Folien 252-256

Frage: Inwieweit lässt sich aus einem abgetasteten Signal wieder das Ursprungssignal rekonstruieren? Das Spektrum \(X(\omega)\) kann aus dem Spektrum des abgetasteten Signals \(X_A(\omega)\) durch einen idealen Tiefpass mit der Grenzfrequenz \(f_{max}\) wieder rekonstruiert werden, wenn sich die durch periodische Fortsetzung entstandenen Seitenspektren nicht überlappen (Fall a). Überlappen sie sich (Fall b), entsteht Aliasing; im Bild zeigt es sich z. B. als Muster auf einer Ziegelwand.

## Karte: Nyquist-Shannon-Theorem
tag: wichtig
quelle: DSV-final.pdf, Folien 257-258

Die Überlappung findet nicht statt, wenn gilt:
\[\frac{1}{\tau} > 2 f_{max}\]
mit \(f_{max}\): höchste in \(x(t)\) vorkommende Frequenz, \(1/\tau\): Abtastfrequenz. Diese Bedingung heißt Nyquist-Shannon-Theorem. Es besagt, dass ein abgetastetes Signal durch einen idealen Tiefpass exakt dann wieder rekonstruiert werden kann, wenn die Abtastfrequenz mindestens doppelt so hoch ist wie die höchste Signalfrequenz. Beispiel: CD-Player, \(f_{max} = 20\) kHz, \(1/\tau = 44{,}1\) kHz.

## Karte: Allgemeiner Ablauf digitaler Signalverarbeitung
tag: wichtig
quelle: DSV-final.pdf, Folie 258

\(x(t)\) → Tiefpass \(f_{max}\) → Abtastung \(1/\tau \geq 2 f_{max}\) → AD-Wandlung n-Bit → digitale Signalbearbeitung (Signalprozessor) → DA-Wandlung n-Bit → Tiefpass \(f_{max}\) → \(y(t)\).

## Frage: Wie viele spektrale Komponenten behält man nach dem Abtasttheorem, und mit welchem Abstand?
id: abtasttheorem-komponenten
quelle: DSV-final.pdf, Folie 251

\((N/2) + 1\) Komponenten zwischen 0 und \(f_s/2\) Hz (bis inklusive der Abtast/Spiegel-Frequenz), mit dem Frequenzabstand \(f_s/N\).

## Frage: Wann lässt sich X(ω) aus dem Spektrum des abgetasteten Signals rekonstruieren?
id: rekonstruktion-bedingung
quelle: DSV-final.pdf, Folie 254

Durch einen idealen Tiefpass mit Grenzfrequenz \(f_{max}\), wenn sich die durch periodische Fortsetzung entstandenen Seitenspektren nicht überlappen. Überlappen sie sich, entsteht Aliasing.

## Frage: Wie lautet das Nyquist-Shannon-Theorem?
id: nyquist-shannon
quelle: DSV-final.pdf, Folien 257-258

Bedingung \(1/\tau > 2 f_{max}\): Ein abgetastetes Signal kann durch einen idealen Tiefpass exakt rekonstruiert werden, wenn die Abtastfrequenz mindestens doppelt so hoch ist wie die höchste Signalfrequenz.

## Frage: Welche Werte nennt die Folie für den CD-Player?
id: cd-player
quelle: DSV-final.pdf, Folie 258

\(f_{max} = 20\) kHz, Abtastfrequenz \(1/\tau = 44{,}1\) kHz.

## Frage: Wie läuft digitale Signalverarbeitung allgemein ab?
id: ablauf-dsv
quelle: DSV-final.pdf, Folie 258

Tiefpass \(f_{max}\) → Abtastung (\(1/\tau \geq 2 f_{max}\)) → AD-Wandlung n-Bit → digitale Signalbearbeitung (Signalprozessor) → DA-Wandlung n-Bit → Tiefpass \(f_{max}\).
