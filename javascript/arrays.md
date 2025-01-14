# Arrays i JavaScript
Før denne seksjonen er det lurt å ha lest om [variabler](kommer).

## Hva er Arrays?
Arrays (norsk:tabell) brukes i JavaScript for å samle verdier i en bestemt rekkefølge. En array er derfor en variabel som kan inneholde flere verdier. I en array kaller vi hver del Et eksempel på en array kan være:
```javascript
let nodnummer = [110, 113, 112];
```
Her kan vi legge merke til flere ting:
1) Vi mennesker ser kjapt at dette er nødnummer for å ringe til brannvesen, ambulanse og politi. Hver del av arrayen (hvert nummer) kalles element.
2) Variabelnavnet skulle egentlig vært nødnummer, men siden ø er en særnorsk bokstav, prøver vi å unngå den. Noen koder takler det, andre ikke. Det er derfor best å bruke o istedenfor.
3) Verdiene i arrayen er rammet inn av hakeparantes. Dette må være med for at javascript skal forstå at det er en array.
4) Verdiene står ikke i stigende rekkfølge, men hultert i bultert.


### Indeks
Som regel vil vi hente ut enkeltverdier fra en array for å bruke dem til noe. I vårt eksempel kan det være vi vil hente ut nummeret til ambulansen, men hvordan gjør vi det?\
Hvert element i en array har en tilhørende indeks. En indeks kan du tenke på som om hvert element fikk sitt tall som sa noe om hvor i rekkefølgen de står. For de fleste av oss er det naturlig å tenke at element nr. 1 får indeks 1, element nr. 2 får indeks 2 osv. Slik er det i noen kodespråk, men i JavaScript begynner element nr 1 med indeks 0, element nr 2 har indeks 1 osv.

For eksempelet vårt vil indeksene se slik ut:
```javascript
indeks          [0]   [1]  [2]
let nodnummer = [110, 113, 112];
```
Hvis vi vet indeksen til elementet vi vil ha tak i, kan vi enkelt hente det ut ved å skrive følgende:
```javascript
let nodnummer = [110, 113, 112];    // Vi lager array'en
let ambulansenummer = nodnummer[1]; // Vi bruker indeksen til å hente ut akkurat det elementet vi trenger 
console.log(ambulansenummer);       //110     
```
```
OBS! Når det står en kommentar etter en console.log()-kommando, viser det hva som ville blitt skrevet til konsoll av kommandoen
```

### Array-verdier
Array'er kan inneholde andre verdier enn tall. Det kan være alle typer variabler og det kan også være forskjellige typer i én og samme array.

```javascript
let blandaArray = [110, "brann", true, null, {lokasjon: "Haugalandet"}];
```

### Lengde på array
For å finne ut hvor mange elementer en array innholder, kan vi bruke en innebygd egenskap som heter `length` (lengde):
```javascript
let nodnummer = [110, 113, 112];
console.log(nodnummer.length) // 3
```

### Array-metoder
Det finnes mange `metoder` som endrer på en array. Disse har forskjellige funksjoner og er nyttige å ha når de trengs. Nedenfor kan du lese om de mest nyttige metodene.

#### push()
Push-metoden "skubber" (pusher) inn et nytt element på slutten av arrayen. Dermed blir lengden på arrayen ett hakk lenger.

```javascript
let nodnummer = [110, 113, 112];
nodnummer.push(116117);
console.log(nodnummer); //[110, 113, 112, 116117]
```

#### pop()
Pop-metoden henter ut det siste elementet i en array og fjerner det fra arrayen. Da kan elementet lagres i en ny variabel hvis en ønsker det.
```javascript
let nodnummer = [110, 113, 112];
let sisteElement = nodnummer.pop());
console.log(nodnummer); //[110, 113]
console.log(sisteElement); // 112
```

#### shift()

#### unshift()

#### splice()

#### slice()