# Variabler i javascript

Når en lærer et nytt kodespråk er det viktig å starte med det grunnleggende og da er det lurt å starte med variabler. \
Variabler kan en se på som bokser med innhold. Hver boks har en merkelapp og innholdet kan være tall, tekst eller boolske verdier.

## Boksforklaring

For eksempel kan vi skrive følgende
```javascript
let minAlder = 17;
```

Her har vi laget en boks med merkelappen "minAlder". Denne boksen inneholder tallet 17.

```lua
+---------+
|  17     |  <- "minAlder"
+---------+
```

Vi kan tenke på alle variabler som bokser med innhold. Når vi programmerer og vil bruke en variabel, så skrive vi navnet på variabelen, men da mener vi egentlig verdien oppi. For eksempel kan vi skrive:

```javascript
minAlder + 2;
```

Da forteller vi datamaskinen at den skal finne variabelen (boksen) "minAlder", hente ut verdien derfra (17) og legge til 2 slik at vi får 19.

Variabler er en del av de grunnleggende byggesteiene vi bruker når vi jobber med programmering. En god, grunnleggende forståelse for hva variabler er og hva de gjør er helt essensielt når vi lærer programmering.

---

La oss ta en titt til på eksempelet ovenfor og gå gjennom hva som står steg for steg.
```javascript
let minAlder = 17;
```

### let
Det første vi ser er ordet `let`. Dette betyr at denne variabelen er nettopp, variabel. Den kan derfor endre seg etter hvert som vi jobber med koden. Vi bruker `let` fordi alder er noe som endrer seg over tid og den er derfor variabel.

`let` har en motpart som vi kaller `const`. Dette kan du lese mer om [her](#initialisere-variabler).

### minAlder
minAlder er navnet vi gir variabelen. Du kan lese mer om hvordan vi gir navn til variabler [her](#navngi-variabler).

### =
Det er lett å overse dennne delen, men "er lik"-tegnet (=) er viktig å merke seg i programmering. "er lik"-tegnet sier nettopp at et variabelnavn betyr, eller er lik, en verdi. Vi kan kalle dette en tildelingsoperator.

### 17
Dette er verdien som lagres. Verdiene i en variabel kan være heltall som her, desimaltall, tekst eller boolske verdier. Hvis de ordene ikke sier deg så mye, så kan du lese mer om dem [her](#typer-variabler).

## Initialisere variabler

Å initialisere betyr å [gjøre noe klar til bruk.](https://naob.no/ordbok/initialisere)
Dette kan vi gjøre på flere måter. Det vanligste er å gjøre som i eksemepelt vårt hvor vi skrev
```javascript
let minAlder = 17;
```
Denne linja med kode forteller programmet vårt at vi gjør klar variabelen "minAlder" og den har verdien 17.
I eksempelet vårt har vi innledet variabelen med ordet `let`. Det betyr at variabelen kan endre seg underveis.
Dette stemmer for en variabel som "minAlder" fordi alderen endrer seg jo over tid. 

Hvis variabelen ikke skal endre seg, kan vi bruke `const`. Da forteller vi programmet
at her kommer det en variabel som skal være lik gjennom alt vi gjør. Et eksempel på dette
kan være en variabel som holder et navn:
```javascript
const navnetMitt = "Espen";
```
Vi trenger egentlig ikke å gi variabelen en verdi med en gang. Det går også an å initialisere
en variabel uten en verdi. Dersom en velger å gjøre dette, bør en gi variabelen verdi senere i koden.
```javascript
const navnetMitt;
let minAlder;

navnetMitt = "Per";
minAlder = 16;
```

## Bruke variabler

## Variablenes innhold
Som vi allerede har sett, kan variabler inneholde både tekst og nummer. Det finnes mange
forskjellige typer innhold en variabel kan ha. Her skal vi lære litt om de viktigste.

### Heltall
En enkel tommelfingerregel for heltall er at det er tallene vi pleier å bruke når vi teller.
1, 2, 3, 4 osv. er heltall. Og selv om vi ikke alltid teller dem, så er 0, -1, -2, -3 osv. også heltall.

### Desimaltall


## Navngi variabler

Har du lagt merke til at begge variablene "minAlder" og "navnetMitt" er skrevet på en spesiell måte?
Begge navnene består av to ord uten mellomrom mellom dem. Det første ordet er skrevet
med liten forbokstav og det andre med en stor.

Måten å skrive navnene på er gjort helt bevisst. Siden vi ikke kan ha mellomrom mellom
ordene, hjelper denne måten å skrive variabelnavn oss å se hva variabelen heter.
For eksempel kunne vi ha kalt en variabel
```javascript
let dettenavnetblelittlangt;
```
men det er vanskelig å lese. Da er det mye bedre å skrive
```javascript
let detteNavnetBleLittLangt;
```
Denne måten å skrive variabelnavn på kalles for camelCase siden de store bokstavene bortover
ser ut som humper i variabelnavnet.