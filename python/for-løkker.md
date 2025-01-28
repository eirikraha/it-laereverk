# For-løkker i Python

Tenk deg at du skal programmere et program som teller fra 1 til 10. En måte vi kan gjøre dette på er å skrive:
```python
print("Nå skal vi telle fra 1 til 10:")
print(1)
print(2)
print(3)
print(4)
print(5)
print(6)
print(7)
print(8)
print(9)
print(10)
```

Kjører vi dette programmet, vil det gi oss tallene fra 1 til 10, og vi har fått til det vi vil. Burde vi ikke da være fornøyd?

Programmet gjør det vi vil, men det er ikke lurt å bruke så mange linjer når vi kan gjøre det enklere. Hvor lang ville koden blitt dersom vi ville telle til 100 eller 1000?  
Det finnes heldigvis en bedre og mer oversiktlig måte å gjøre dette på med det vi kaller for-løkker.

For-løkker er en grunnleggende del av all programmering. Vi kaller dem løkker fordi de gjør samme bit kode igjen og igjen til de når et satt mål. Litt som en skiskytter som må ta strafferunder, går koden i ei løkke helt til den kan "slippes videre". `For` kommer av at koden må gå i løkka si mens vi endrer på en variabel litt og litt.

La oss se på eksempelet ovenfor og skrive det om til ei for-løkke vi kan bruke til å forklare hva som skjer:
```python
print("Nå skal vi telle fra 1 til 10:")
for tall in range(1, 11):
    print(tall)
```
Første linje kjenner vi til fra før:
```python
print("Nå skal vi telle fra 1 til 10:")
```
Denne linja med kode forteller programmet at det skal skrive setningen "Nå skal vi telle fra 1 til 10:" til konsoll.

Andre linje starter selve for-løkka:
```python
for tall in range(1, 11):
```
Ei for-løkke starter alltid med ordet `for`, og derfor er det først på linja. Etterpå kommer variabelen vi bruker (`tall`), deretter `in` etterfulgt av sekvensen vi skal iterere over, i dette tilfellet `range(1, 11)`.
1) La oss starte med å se på **sekvensen** `range(1, 11)`. Denne genererer tall fra og med 1 opp til, men ikke inkludert, 11.
2) Deretter brukes variabelen `tall` til å holde hver verdi i sekvensen mens løkka kjøres.

Den siste delen av linja er kolon `:`. I Python bruker vi kolon til å indikere at en blokk med kode følger etter.

Tredje linje i eksempelet
```python
    print(tall)
```
forteller programmet at det skal skrive verdien til variabelen `tall` til konsoll. Legg merke til at koden er innrykket. Dette brukes i Python for å vise at denne biten av kode hører til inne i løkka. I vårt tilfelle er denne linja inne i for-løkka, og denne biten med kode vil gjøres igjen og igjen helt til sekvensen i `range()` er ferdig. Første gang løkka kjører vil denne linja skrive tallet 1 til konsoll. Neste gang vil den skrive 2, så 3 osv.

Fjerde linje i eksempelet
```python
```
forteller programmet at all koden som skal gjøres inne i for-løkka er nå slutt, og hvis du har kommet hit må du:

1) Oppdatere variabelen `tall`.
2) Sjekke om den har nådd grensa si.
3) Hvis variabelen ikke har nådd grensa si, må for-løkka gjøres om igjen.
4) Hvis variabelen har nådd grensa si, er programmet ferdig med løkka og kan gå videre.

## Hvorfor for-løkker?
Går vi helt tilbake til det aller første eksempelet med å telle til 10, er det kanskje ikke så mye å tjene på å lage ei for-løkke, men det er to viktige moment som gjør at vi foretrekker å bruke for-løkka.

Tenk deg at vi skal telle til 1000000 i stedet for 10. Dette er enkelt å endre på ei for-løkke:
```python
print("Nå skal vi telle fra 1 til 1000000:")
for tall in range(1, 1000001):
    print(tall)
```
Koden er like lang, og det er lett å lese ut fra for-løkka at vi går fra 1 til 1000000. Skulle vi gjort det samme med å skrive `print()` for hvert tall hadde det tatt veldig lang tid å skrive hele programmet.

Den andre grunnen til at vi ønsker å bruke for-løkker er at det samler mye viktig kode på ett sted og gjør at det er lett å endre på den ved behov. La oss nok en gang tenke oss at vi vil telle til 10, men denne gangen vil vi fortelle en vits samtidig. Vi har den originale koden fra det aller første eksempelet og skal bare endre på den for å fortelle vitsen. Da blir det som følger:
```python
print("Nå skal vi fortelle en vits og telle fra 1 til 10:")
print(f"Poli{1}")
print(f"Poli{2}")
print(f"Poli{3}")
print(f"Poli{4}")
print(f"Poli{5}")
print(f"Poli{6}")
print(f"Poli{7}")
print(f"Poli{8}")
print(f"Poli{9}")
print(f"Poli{10}")
```
For å endre på koden må en gå inn på hver av de ti linjene og oppdatere dem.

Da er det mye enklere å endre på ei for-løkke:
```python
print("Nå skal vi telle fra 1 til 10:")
for tall in range(1, 11):
    print(f"Poli{tall}")
```
Begge kodesnuttene ovenfor vil gjøre det samme, men for-løkka går mye kjappere å skrive og endre på.

## For-løkker og lister
I [variabler](variabler.md)-kapittelet lærte vi om lister. Det finnes en egen måte å skrive for-løkker når vi henter ut hvert element i ei liste (itererer gjennom lista).

```python
farger = ["rød", "orange", "gul", "grønn", "blå", "indigo", "fiolett"]

for farge in farger:
    print(farge)
```
Kjører vi eksempelet over, får vi:
```
rød
orange
gul
grønn
blå
indigo
fiolett
```
### For-løkker og lister med indeks

Det er også mulig å bruke indeksen, men det regnes som en mer tungvindt metode

```python
farger = ["rød", "orange", "gul", "grønn", "blå", "indigo", "fiolett"]

for indeks in range(0, len(farger)):
    print(farger[indeks])
```
I eksempelet bruker vi `len(farger)` som er en funksjon for å hente ut lengden på ei liste. Mer om [funksjoner i dette kapittelet](funksjoner.md).  
Kjører vi eksempelet over, får vi akkurat det samme som sist:
```
rød
orange
gul
grønn
blå
indigo
fiolett
```
