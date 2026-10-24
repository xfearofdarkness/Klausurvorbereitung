---
id: summen-binomial
title: Summen, Fakultät und Binomialkoeffizient
icon: ➕
---

## Karte: Summen- und Produktzeichen
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folien 60-61

Für ganze Zahlen \(m\) und \(n\) mit \(n \ge m\): \[\sum_{k=m}^{n} x_k := x_m + x_{m+1} + \ldots + x_n, \qquad \prod_{k=m}^{n} x_k := x_m x_{m+1} \cdots x_n.\] Im Fall \(m = n\) gilt \(\sum_{k=m}^{m} x_k = x_m\) und \(\prod_{k=m}^{m} x_k = x_m\).

## Karte: Fakultät
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 62

\[n! := \prod_{k=1}^{n} k = 1 \cdot 2 \cdots n \quad \text{für } n \in \mathbb{N},\ n > 0, \qquad 0! := 1.\]

## Karte: Binomialkoeffizient
tag: def
quelle: DiskreteMathematikVLHO.pdf, Folie 63

\[\binom{n}{k} := \frac{n!}{k!\,(n-k)!} \quad \text{für } n, k \in \mathbb{N},\ n \ge k,\] gelesen „\(n\) über \(k\)“. Der Binomialkoeffizient gibt die Anzahl der Möglichkeiten an, \(k\) Zahlen aus \(n\) auszuwählen.

## Karte: Binomischer Lehrsatz
tag: satz
quelle: DiskreteMathematikVLHO.pdf, Folien 64-65

\[(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k.\] Beispiel \(n = 2\): \[(a+b)^2 = \binom{2}{0}a^2b^0 + \binom{2}{1}a^1b^1 + \binom{2}{2}a^0b^2 = 1 \cdot a^2 \cdot 1 + 2 \cdot a \cdot b + 1 \cdot 1 \cdot b^2 = a^2 + 2ab + b^2.\]

## Frage: Was ergibt \(\sum_{k=m}^{n} x_k\) im Fall \(m = n\)?
id: summe-m-gleich-n
quelle: DiskreteMathematikVLHO.pdf, Folie 61

\(x_m\); ebenso ist das Produkt \(\prod_{k=m}^{m} x_k = x_m\).

## Frage: Wie ist \(n!\) definiert, und was ist \(0!\)?
id: fakultaet
quelle: DiskreteMathematikVLHO.pdf, Folie 62

\(n! := 1 \cdot 2 \cdots n\) für \(n > 0\) und \(0! := 1\).

## Frage: Wie ist \(\binom{n}{k}\) definiert, und was gibt er an?
id: binomialkoeffizient
quelle: DiskreteMathematikVLHO.pdf, Folie 63

\(\binom{n}{k} := \frac{n!}{k!(n-k)!}\) für \(n, k \in \mathbb{N}\), \(n \ge k\). Er gibt die Anzahl der Möglichkeiten an, \(k\) Zahlen aus \(n\) auszuwählen.

## Frage: Wie lautet der binomische Lehrsatz?
id: binomischer-lehrsatz
quelle: DiskreteMathematikVLHO.pdf, Folie 64

\((a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k\).
