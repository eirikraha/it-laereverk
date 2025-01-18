# IF-tester i javascript
Programmering kan en se på som et sett med instrukser vi gir til datamaskinen og så følger datamaskinen instruksene til punkt og prikke. Av og til kan slike instrukser komme til et veiskille og da må vi på forhånd fortelle programmet hvordan det skal velge. Dette gjør vi med if-tester (hvis-tester).

La oss ta et eksempel: Du er en baker i Østre Aker som baker kringler og julekaker. Mange kommer og kikker i vinduet ditt og **hvis** de har penger, så kan de få. Har de ikke, kan de gå.

Dette er et enkelt eksempel på en if-test i programmering. Du har en betingelse (har kunden penger?). **Hvis** svaret er ja, får kunden kjøpe. **Ellers** får kunden ikke kjøpe.

Skal vi programmere eksempelet med bakeren i Østre Aker, kan vi skrive koden som dette:

```javascript
let harPenger = true; // Betingelsen: Har kunden penger?

if (harPenger) {
  console.log("Kunden kan kjøpe kringler og julekaker.");
} else {
  console.log("Kunden har ikke penger og må gå.");
}
```

La oss gå gjennom eksempelet linje for linje.
```javascript
let harPenger = true; // Betingelsen: Har kunden penger?
```
Første linje definerer [en variabel](variabler.md) og setter den til `true`.

```javascript
if (harPenger) {
```
Neste linje starter if-testen. Her står det `if` og så en parantes bak. Kodeordet `if` forteller oss at vi skal sjekke om det som står i parantesen er sant. Hvis det som står i parantesen er sant, så skal vi gjøre det som kommer i krøllparantes (`{}`) etter siste runde parantes `)`.
```javascript
  console.log("Kunden kan kjøpe kringler og julekaker.");
}
```
De to neste linjene inneholder koden som vi skal gjøre hvis if-testen er vellykket. I dette tilfellet skriver vi "Kunden kan kjøpe kringler og julekaker" til konsoll. Andre ganger når vi bruker if-tester så kan det stå mange linjer kode her, men i dette tilfellet trengte vi bare ei linje.

```javascript
} else {
  console.log("Kunden har ikke penger og må gå.");
}
```
Til sist ser vi på de tre siste linjene. Den første `}` avslutter kode-blokken for positiv if-test. Deretter kommer det et nytt ord, nemlig `else`. Ordet "else" betyr "ellers" og i en if-test brukes det for å si hva som skal skje hvis if-testen **ikke** inntraff. I dette tilfellet så sier koden hva som skal skje hvis `harPenger` ikke var `true`. Denne delen er strengt tatt ikke alltid nødvendig, men den brukes så ofte at det er lurt å lære `else` med en gang.

## Oppgaver
1) Skriv ned koden fra eksempelet. Er det if eller else som kommer til å være rett når koden kjøres slik den står i eksempelet?
2) Hva må endres på i eksempelet for å at det motsatte skal være rett?
3) Lag et lite program hvor du har en variabel som heter `erHoyrehendt`. Dersom variabelen er `true`, så skal programmet skrive "Du er høyrehendt" til konsoll. Hvis ikke skal den skrive "Du er venstrehendt".

## If-tester hvor du vil gi flere alternativ
Av og til vil vi skjekke for flere muligheter i en if-test. Da er det lurt å bruke kommandoen `else if`.

La oss si at du har lyst å lage et spill som lar spilleren velge mellom ildkrefter, plantekrefter eller vannkrefter. Etter at spilleren har valgt, skal du gi en tilbakemelding på valget. I vårt eksempel velger spilleren ildkrefter og vi kan skrive koden som følger:
```javascript
let ildkrefter = true;
let plantekrefter = false;
let vannkrefter = false;

if (ildkrefter) {
    console.log("Du valgte ildkrefter");
} else if (plantekrefter) {
    console.log("Du valgte plantekrefter");
} else {
    console.log("Du valgte vannkrefter");
}
```

Vi ser at denne koden er veldig lik koden i det forrige eksempelet, men her legger vi til et alternativ i midten. Dette tester vi for med kommandoen `else if` som kan oversettes med "ellers hvis".

En ting som er viktig å merke seg med denne måten å gjøre if-tester på er at koden gås gjennom linje for linje. Hvis den øverste linja med `if (ildkrefter)` stemmer, så blir ikke de to andre testene (`else if` og `else`) sjekka. I vårt tilfelle er ikke det så farlig, men hvis du vil sjekke for flere betingelser, så er dette viktig å være oppmerksom på.

## If-tester for variabler som ikke er `true`/`false`
Til nå har vi brukt if-tester på det vi kaller boolske verdier. Disse er som regel `true` eller `false`. If-tester sjekker om en betingelse er sann eller usann og derfor er verdier som er `true`/`false` de enkleste å sjekke for. Likevel kan vi sjekke mange andre betingelser også.

Ofte har vi variabler som er tall og vi vil gjerne sammenligne variabelen med et tall. Da må vi skrive betingelser hvor vi bruker det som kalles **sammenligningsoperatorer**. Nedenfor finner du mange eksempler på hva vi vil sammenligne og hvilken operator som blir brukt.

### If-test som sjekker om en variabel er større enn et tall
```javascript
let talletVaart = 10;

if (talletVaart > 5) {
    console.log("Variabelen er større enn 5");
}
```

I eksempelet ovenfor definerer vi en variabel `talletVaart` og setter den lik 10. If-testen på neste linje sjekker om variabelen `talletVaart` er større enn 5 med sammenligningsoperatoren `>` (krokodillemunn). Hvis denne betingelsen stemmer, skriver programmer "Variabelen er større enn 5" til konsoll.  
Legg merke til at dette eksempelet er uten et `else`-uttrykk. Koden fungerer fortsatt, men hvis `talletVaart` hadde vært mindre enn 5, så hadde ikke if-betingelsen vært møtt og da ville det ikke skjedd noe som helst.

### If-test som sjekker om en variabel er mindre enn et tall
Å sjekke om en variabel er mindre enn et tall er lett. Vi bare snur krokkodille-munnen fra forrige eksempel.
```javascript
let talletVaart = 10;

if (talletVaart < 5) {
    console.log("Variabelen er større enn 5");
}
```

### If-test som sjekker om en variabel er lik et tall
Når vi sjekker om en variabel er lik et tall, bruker vi `==` istedenfor krokkodille-munn
```javascript
let talletVaart = 10;

if (talletVaart == 10) {
    console.log("Variabelen er lik 10");
}
```
### If-test som sjekker om en variabel er større enn eller lik et tall
Når vi bruker en krokkedillemunn for seg selv `>`, så sjekker vi om variabelen er større enn et tall. Av og til vil vi sjekke om en variabel er ** større enn eller like stor** som et tall. Da må vi bruke `>=`.

Dette eksempelet vil gi tilbake at du kan stemme dersom `alder` er 19 eller mer. Dersom `alder = 18` vil den gi tilbake at en ikke kan stemme fordi testen bruker `>`.
```javascript
let alder = 18;

if (alder > 18) {
    console.log("Du kan stemme");
} else {
    console.log("Du må bli 18 før du kan stemme");
}
```
Dette endrer vi lett med å bruke `>=`
```javascript
let alder = 18;

if (alder >= 18) {
    console.log("Du kan stemme");
} else {
    console.log("Du må bli 18 før du kan stemme");
}
```

Her kan en gjerne tenke: "Men kan vi ikke bare teste for `alder > 17`?"  
Godt spørsmål! Det hadde fungert det også. Likevel ønsker vi å bruke 18 som grense fordi det gjør koden lettere å lese for oss mennesker.

### If-test som sjekker om en variabel er mindre enn eller lik et tall
Du har gjerne skjønt det allerede, men for å sjekke om en variabel er mindre enn eller lik et tall, så snur vi bare krokodillemunnen fra forrige eksempel:
```javascript
let alder = 99;

if (alder <= 99) {
    console.log("Du er ikke 100 ennå")
} else {
    console.log("Du er 100 eller eldre. Imponert!")
}
```

### If-test som sjekker om en variabel er lik et tall
Ønsker vi å sjekke om en variabel er ulike et tall, bruker vi `!=`
```javascript
let talletVaart = 10;

if (talletVaart != 10) {
    console.log("Variabelen er ulik 10");
}
```

`!` betyr `not` i programmeringspråk. På godt norsk kan vi si at det betyr `ikke`. Derfor betyr `!=` at vi tester om noe er `ikke lik` noe annet. I tester med boolske variabler trenger vi ikke å bruke `!=`, vi kan bare sette utropstegnet rett foran variabelen.

```javascript
let ildkrefter = true;

if (!ildkrefter) {
    console.log("Du valgte IKKE ildkrefter");
}
```

Det er litt vanskelig å se, men i if-testen har vi satt `!` foran variabelnavnet `ildkrefter`. Dette gjør at sjekken ser om variabelen `ildkrefter` er ikke-sann (usann).


## If-tester med flere betingelser sammen
Til nå har vi sett på if-tester hvor det bare er én betingelse som påvirker hvilken "vei" koden går. Som vi vet fra egen erfaring, er det ofte mer enn én faktor som påvirker våre valg. Slik er det i programmering også.

Når vi har mer enn én betingelse som påvirker veivalget til programmet, bruker vi det som kalles **logiske operatorer**. De vanligste logiske operatorene er `&&` som betyr **OG** og `||` som betyr **eller**.

### If-tester med `&&`
Når vi bruker **OG**-operatoren må to (eller flere) betingelser stemme samtidig for at if-testen skal slå inn. Et eksempel på dette kan være at mange land krever gyldig vaksinasjons og visum ved ankomst. Dette kan vi bruke til å lage et program:

```javascript
let visum;
let vaksinert;

//Variant 1: Alt er på plass
visum = true;
vaksinert = true;

//Variant 2: Visum er på plass, men vaksinasjon mangler
visum = true;
vaksinert = false;

//Variant 3: Visum manger, men vaksinasjon er på plass
visum = false;
vaksinert = true;

//Variant 4: Ingenting er på plass
visum = false;
vaksinert = false;

//If-test
if (visum && vaksinert) {
    console.log("Du får reise til landet");
} else {
    console.log("Du får ikke komme inn i landet");
}

```
I dette eksempelet har vi skrevet fire forskjellige varianter av om betingelsene til if-testen er oppfylt. Det gir følgende resultat:
| Variant | Visum | Vaksinert | Hva står i konsoll? |
|:-------:|:-----:|:---------:|:--------------------|
|1| `true` | `true` |Du får reise til landet|
|2| `true` | `false` |Du får ikke komme inn i landet|
|3| `false` | `true` |Du får ikke komme inn i landet|
|4| `false` | `false` |Du får ikke komme inn i landet|

### If-tester med `||`
**ELLER**-operatoren er litt annerledes. Når vi bruker denne kan vi fortsatt si flere betingelser, men så lenge én av dem stemmer, vil if-testen godta det. Hvis vi denne gangen ser på et litt rart land som godtar enten visum **eller** vaksinasjon, kan vi endre på eksempelet ovenfor:
```javascript
let visum;
let vaksinert;

//Variant 1: Alt er på plass
visum = true;
vaksinert = true;

//Variant 2: Visum er på plass, men vaksinasjon mangler
visum = true;
vaksinert = false;

//Variant 3: Visum manger, men vaksinasjon er på plass
visum = false;
vaksinert = true;

//Variant 4: Ingenting er på plass
visum = false;
vaksinert = false;

//If-test
if (visum || vaksinert) {
    console.log("Du får reise til landet");
} else {
    console.log("Du får ikke komme inn i landet");
}

```
Noe som gir følgende resultat:
| Variant | Visum | Vaksinert | Hva står i konsoll? |
|:-------:|:-----:|:---------:|:--------------------|
|1| `true` | `true` |Du får reise til landet|
|2| `true` | `false` |Du får reise til landet|
|3| `false` | `true` |Du får reise til landet|
|4| `false` | `false` |Du får ikke komme inn i landet|

---
Som vi ser vil en if-test med `&&` kreve at begge betingelsene er sanne, alt annet er ikke godt nok. `||`-tester er litt mer avslappa og godtar det meste, men minst én betingelse må være oppfylt.

## Oppgaver
1) Lag et program hvor du har variabelen `klasse`. Skriv så en if-test som skriver til konsoll om eleven går i 1., 2. eller 3. klasse.
2) Jobb videre med programmet fra oppgave 1). Legg til et `else`-uttrykk som skriver til konsoll om det kommer noe annet enn 1, 2 eller 3 i variabelen `klasse`.
3) Lag et program hvor du har variabelen `randomTall`. Skriv så fire if-tester som sjekker om ditt random tall er større enn, mindre enn, lik eller ulik 5.
4) Lag et program som har variablene `klasse` og `randomTall`. Skriv et program som sjekker om `klasse` og `randomTall` er mindre enn 5 begge to.
5) Endre programmet fra oppgave 4 slik at sjekker om `klasse` eller `randomTall` er mindre enn 5.
6) Forklar følgende uttrykk: Logisk operator, sammenligningsoperator, `OG` og `ELLER`

## Bruk det du har lært
1) Lag et program hvor du har variabelen `vær` og en variabel `temperatur`. Lag et program som sjekker vær-type og temperatur og gir anbefalinger ut fra dette. For eksempel kan output fra programmet være: "Det er sol og varmt, perfekt badevær" eller "Det snør og er kaldt. På tide å finne frem skiene". Finn på flere varianter selv.
2) Vi kan også har if-tester inni if-tester. Lag et program med variablene `produktKostnad` og `kortSaldo`. Lag først en test som sjekker om ``produktKostnad`` er større enn 0 og sjekk deretter om ``kortSaldo`` er større enn ``produktKostnad``. Gi tilbakemelidnger til konsoll i alle tilfeller.