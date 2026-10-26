---
id: audioeffekte
title: Systeme am Beispiel von Audioeffekten
icon: 🎸
---

## Karte: Equalizer und Filter
quelle: DSV-final.pdf, Folien 266-269

Ein grafischer Equalizer (EQ) regelt die Pegel vieler Frequenzbänder einzeln, im Beispiel von 20 Hz bis 20 kHz. Folie 268 zeigt eine EQ-Schaltung mit dem IC LA3600 (Audio In, Audio Out). Ein Filter glättet die Originaldaten \(x(n)\) zu den gefilterten Daten \(y(n)\) (Original Data / Filtered Data).

## Karte: Distortion
quelle: DSV-final.pdf, Folien 271-274

Beispiele: Effektpedal Boss Distortion DS-1 (Regler Tone, Level, Dist) und ein Software-Distortion mit Drive-Regler. In der Schaltung verstärkt ein Verstärker V das Eingangssignal; zwei gegeneinander geschaltete Dioden begrenzen es, sodass aus einer Sinusschwingung am Ausgang eine oben und unten abgeflachte Schwingung wird. Ein Schalter S führt entweder dieses Signal oder das Eingangssignal zum Ausgang.

## Karte: Delay
tag: wichtig
quelle: DSV-final.pdf, Folien 276-280

Beispiele: Echo im Gebirge, Effektpedal Visual Sound Dual Tap Delay, Plugin „Tape Delay“ mit den Reglern Time, Feedback, Damage und Level. Blockschaltbild: Das Input-Signal läuft über eine Delay line; deren Ausgang wird über einen Feedback gain auf den Eingang der Delay line zurückgeführt und über Delay mix mit dem Input zum Output addiert. Im Signal erscheint der Klang ein zweites Mal, zeitlich versetzt.

## Karte: Reverb
tag: wichtig
quelle: DSV-final.pdf, Folien 281-286

Beispiel: der Nachhall in einer Kathedrale. Am Mikrofon kommen an: das Direct Signal von der Schallquelle, die Early Reflections und das Late Field (Reverb Tail Ambience, alle Reflexionen). Über die Zeit folgen auf den Direct Sound die Early Reflections und dann die dichte Reverberation, deren Lautstärke abnimmt. Hall-Geräte und -Plugins (z. B. Lexicon) haben Parameter wie Reverb Type, Pre-delay, Room Size, RT 60, Damping, Mix und Level.

## Karte: Künstlicher Nachhall nach Schroeder
quelle: DSV-final.pdf, Folien 287-288

„System for natural sounding artificial reverberation“ nach Schroeder (1962): Vier parallele Zweige mit Rückkopplung und Verzögerungen \(\tau_1 \approx 30\) ms, \(\tau_2 \approx 35\) ms, \(\tau_3 \approx 40\) ms, \(\tau_4 \approx 45\) ms werden summiert und durchlaufen dann zwei All-Pass-Stufen (\(\tau \approx 5\) ms und \(\tau \approx 1{,}7\) ms); am Ausgang wird das Originalsignal hinzuaddiert. Folie 288 vergleicht ein Sprachsignal ohne (a) und mit (b) Nachhall in Zeitverlauf und Spektrogramm.

## Karte: Chorus und weitere Modulationseffekte
quelle: DSV-final.pdf, Folien 290-293

Beispiele: Effektpedal Boss Super Chorus CH-1, Effekt-Rack mit Filter, Phaser, Flanger, Chorus, Delay und Reverberation. Blockschaltbild des Chorus: Das Input-Signal läuft über eine Delay line, deren Verzögerung ein LFO steuert; das Ergebnis wird mit dem Input zum Output addiert.

## Karte: Effektkette
tag: wichtig
quelle: DSV-final.pdf, Folie 294

Reihenfolge der Effektpedale von der Gitarre zum Ausgang: Tuner → WAH → Compressor → Distortion/Overdrive → EQ → Modulation → Ambience.

## Frage: Wie ist ein Delay-Effekt aufgebaut?
id: delay-aufbau
quelle: DSV-final.pdf, Folie 279

Input → Delay line; der Ausgang der Delay line wird über einen Feedback gain auf ihren Eingang zurückgeführt und über Delay mix mit dem Input zum Output addiert.

## Frage: Woraus besteht der Nachhall, den ein Mikrofon in einem Raum aufnimmt?
id: reverb-anteile
quelle: DSV-final.pdf, Folien 283-284

Aus dem Direct Signal, den Early Reflections und dem Late Field (Reverb Tail Ambience, alle Reflexionen).

## Frage: Wie ist der künstliche Nachhall nach Schroeder (1962) aufgebaut?
id: schroeder-reverb
quelle: DSV-final.pdf, Folie 287

Vier parallele rückgekoppelte Verzögerungszweige (ca. 30, 35, 40, 45 ms) werden summiert und durchlaufen zwei All-Pass-Stufen (ca. 5 ms und 1,7 ms); dazu wird das Originalsignal addiert.

## Frage: Was steuert beim Chorus die Delay line?
id: chorus-lfo
quelle: DSV-final.pdf, Folie 292

Ein LFO; das verzögerte Signal wird mit dem Input zum Output addiert.

## Frage: Was macht die Distortion-Schaltung aus einer Sinusschwingung?
id: distortion-schaltung
quelle: DSV-final.pdf, Folie 273

Der Verstärker V verstärkt das Signal, zwei Dioden begrenzen es; am Ausgang entsteht eine oben und unten abgeflachte Schwingung.

## Frage: In welcher Reihenfolge stehen die Effektpedale in der Effektkette?
id: effektkette
quelle: DSV-final.pdf, Folie 294

Tuner → WAH → Compressor → Distortion/Overdrive → EQ → Modulation → Ambience.
