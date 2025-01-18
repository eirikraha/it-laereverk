# Funksjoner i javascript
Programmeringsfiler kan ofte bli lange og uoversiktlige om vi ikke har god struktur og samler koden på en god måte. En viktig måte å rydde i kode på er å ta kodesnutter vi gjør mange ganger og samle dem i det vi kaller `funksjoner`.

En `funksjon` er enklest forklart som et stykke kode vi skriver én plass i kode fila og så `kaller` vi på den hver gang vi trenger å bruke funksjonen. Noen funksjoner er korte og gjør veldig lite, mens andre funksjoner kan være lange og `kalle` på andre funksjoner selv. Når vi kaller på en funksjon, skriver vi navnet på funksjonen med `()` bak navnet. Hvis funksjonen krever et eller flere `argument` (input som funksjonen gjør noe med), så skriver vi det inne i parantesen.

Hvis du har brukt denne læreressursen til nå, så har du allerede brukt funksjonen `console.log()` en hel del. Som kjent skriver denne funksjonen det du putter inn i parantesen til konsoll. For eksempel kan vi skrive:
```javascript
console.log("Dette er en funksjon")
```
I eksempelet vårt er `console.log()` funksjonen og `"Dette er en funksjon"` argumentet vi gir inn for at funksjonen skal gjøre noe med det.

## Hvordan lage sin egen funksjon
Å skrive sin egen funksjon er nokså enkelt. La oss lage en funksjon som får inn to variabler, `dinAlder` og `minAlder`. Vi ønsker at funksjonen skal legge sammen aldrene våre og så skrive resultatet til konsoll.

```javascript
function leggeSammenAldre(dinAlder, minAlder) {
    let vaarAlder = dinAlder + minAlder;
    console.log(`Vår alder er ${vaarAlder}`);
}
```
La oss ta det steg for steg:
1) I eksempelet ser vi at vi innleder med kodeorder `function`. Dette bruker vi for å fortelle programmet at her kommer det en funksjon.
2) Deretter kommer navnet på funksjonen. Vi kaller funksjonen `leggeSammenAldre`.
3) Etter navnet kommer det en parantes med to variabelnavn inni `(dinAlder, minAlder)`. Dette er navnene vi gir variablene slik at vi kan bruke dem senere i koden.
4) Som vanlig betyr `{}` at inni krøllparantesen skjer all koden som funksjonen skal gjøre.
5) `let vaarAlder = dinAlder + minAlder;` lager en ny variabel som vi kaller ``vaarAlder`` og sier at den skal være lik summen av `dinAlder` og `minAlder`.
6) `console.log("Vår alder er ${vaarAlder}");` skriver resultatet vårt til konsoll.

## Hvordan kalle på en funksjon
Eksempelet ovenfor viser hvordan vi lager (definerer) en ny funksjon. Hadde det vært alt som sto i koden, hadde koden ikke gjort noe som helst. En funksjon må `kalles` på før kodesnutten blir gjort. Det kan vi gjøre på følgende vis:
```javascript
let dinAlder = 17;
let minAlder = 16;

leggeSammenAldre(dinAlder, minAlder);
```
Og det er alt vi trenger å skrive. De to første linjene definerer variablene våre og den siste linja kaller på funksjonen `LeggeSammenAldre` med de to variablene `dinAlder` og `minAlder` som argument. Det koden vil gjøre når den kommer til kallet er å hoppe til stedet hvor funksjonen ble skrevet (definert) for å se hva den skal gjøre. Koden ovenfor er derfor helt lik om vi skulle ha skrevet:
```javascript
let dinAlder = 17;
let minAlder = 16;

let vaarAlder = dinAlder + minAlder;
console.log(`Vår alder er ${vaarAlder}`);
```
## Hvorfor bruke funksjoner?
Når vi sammenligner eksemplene ovenfor ser vi at det egentlig er kortere å droppe funksjonen og bare skrive alt rett ut. Hvorfor skal vi da bruke funksjoner? Funksjoner virker best det er kode som skal gjøres mange ganger, men stort sett er lik ellers. Når vi først har definert funksjonen én gang, kan vi kalle på den så mange ganger vi vil. Dette gjelder også på å vedlikeholde koden. Hvis det er en bit kode som gjøres igjen og igjen, men med en feil i seg, kan det være mye arbeid å finne alle stedene feilen forekommer og rette på den. Har vi heller lagt den gjentagende koden i en funksjon, kan vi gå til funksjonen for å rette opp i feilen der og det vil påvirke alle steder hvor funksjonen brukes automatisk.

## Hvordan få noe tilbake fra en funksjon
Vi har spart det beste med funksjoner til slutt. Funksjoner kan også gi noe tilbake. For at en funksjon skal gi noe tilbake, må vi skrive inn et `return`-uttrykk (engelsk: return-statement). Det gjør at funksjonen returnerer en del av seg selv tilbake til der den ble kalt og dette kan så brukes videre.

For eksempel kan vi skrive:
```javascript
function changeHP(attackDamage, currentHP) {
    let newHP = currentHP - attackDamage;
    return newHP
}

let playerHP = 20;
let enemyAttackDamage = 5;

playerHP = changeHP(enemyAttackDamage, playerHP);
console.log(`Etter 1 angrep har spilleren ${playerHP} HP.`)
```
Vi ser at denne funksjonen ikke skriver noe til konsoll selv. Istedenfor gir vi `newHP`-variabelen tilbake (vi returnerer den) og så bruker vi den videre i koden.

## Navn på funksjoner
Funksjoner skal ha navn som beskriver hva funksjonen gjør og de skrives med `camelCase` (liten forbokstav, men stor bokstav i alle påfølgende ord i navnet). En kan også gjerne legge inn en kommentar før funksjonen eller som første linje inne i funksjonen for å beskrive hva funksjonen gjør.

## Oppgaver
1) Lag en funksjon som heter dobbeltTall(tall) som dobler tallet som blir gitt inn som argument.
2) Forklar når det er lurt å bruke funksjoner.
3) Forklar hva `return` gjør.
4) Lag en funksjon for å sjekke alderen til en person. La funksjonen returnere `true` hvis personen er over 18 år og `false` hvis personen er under 18 år. (Her må du bruke en if-test. Trenger du en oppfrisker på hva det er, kan du lese om det [her](if-tester.md))
5) Lag en funksjon som legger sammen to tall og returnerer svaret.
6) Pythagoras er en formel i matte som kan finne lengden på sidene i en rettvinklet trekant. Formelen er som følger: ``a*a + b*b = c*c``. Skriv dette som en funksjon som returnerer `c**2`.
7) Bruk det siste eksempelet fra teksten og kall på ``changeHP`` to ganger til.

## Større oppgave
1) Utvid det siste eksempelet. Lag en if-test som sjekker om playerHP er større enn 0. Hvis den er det, så angriper fienden igjen. 
2) Legg til fienden sin HP og la spilleren angripe tilbake.
3) Søk opp funksjonen Math.Random(). Klarer du å endre funksjonen ``changeHP`` slik at `attackDamage` blir tilfeldig?