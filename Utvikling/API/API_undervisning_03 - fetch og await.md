# Snakk med serveren fra nettsida med fetch og await
I forrige del laget du din egen server med Express. Da var det *du* som snakket med serveren ved å skrive en adresse i nettleseren. Nå skal vi la *nettsida* gjøre det selv, ved hjelp av javascript. Til det bruker vi `fetch` og `await`.

## Hvorfor bruker vi det?
Til nå har nettsidene dine vært *statiske*: Alt innholdet står skrevet rett inn i HTML-fila, og det er det samme hver gang sida lastes. Men de fleste nettsider du bruker til daglig er ikke slik. Tenk på yr.no, Instagram eller Snapchat. Innholdet endrer seg hele tiden, og det ligger ikke i HTML-fila. Det ligger på en server, og nettsida *henter* det når den trenger det.

Det har flere fordeler:
- **Ferske data:** Nettsida kan vise værmeldinga akkurat nå, ikke den som gjaldt da noen skrev HTML-fila.
- **Slipper å laste hele sida på nytt:** Nettsida kan hente bare den biten som har endret seg, for eksempel en ny melding i en chat.
- **Skille mellom utseende og data:** HTML-fila bestemmer *hvordan* ting ser ut, serveren bestemmer *hva* som skal vises. Samme server kan da brukes av både en nettside og en mobilapp.
- **Hemmeligheter blir på serveren:** Passord og API-nøkler skal aldri ligge i HTML-fila, for den kan alle lese. Serveren kan bruke dem og bare sende videre det nettsida trenger.

## Hva er `fetch` og `await`?
**`fetch`** er en funksjon som er innebygd i javascript. Den sender en forespørsel (request) til en adresse og henter svaret (response). Det er det samme som skjer når du skriver en adresse i nettleseren, men nå er det koden din som gjør det i stedet for deg.
```javascript
fetch('/info')
```
betyr altså: *"Spør serveren etter `/info`."*

**`await`** handler om tid. Når du spør en server om noe, kommer ikke svaret med en gang. Det må sendes over nettverket, serveren må finne fram dataene og sende dem tilbake. Javascript venter ikke av seg selv, men går rett videre til neste linje. Da prøver koden å bruke svaret før det har kommet!

`fetch` gir deg derfor ikke svaret med en gang. Den gir deg et **Promise**, et *løfte* om at svaret kommer etter hvert. Skriver du `await` foran, venter koden til løftet er innfridd og du har fått det faktiske svaret:
```javascript
const svar = fetch('/info');        // svar er bare et løfte (Promise)
const svar = await fetch('/info');  // svar er det faktiske svaret fra serveren
```

**`async`** må stå foran en funksjon for at du skal kunne bruke `await` inne i den. Det forteller javascript at denne funksjonen kommer til å vente på ting underveis:
```javascript
async function hentInfo() {
    const svar = await fetch('/info');
}
```

Kort oppsummert:
| Ord | Betyr |
|---|---|
| `fetch` | Spør en server om noe |
| `await` | Vent på svaret før du går videre |
| `async` | Denne funksjonen inneholder `await` |

## Hvordan henger det sammen?
Når du åpner nettsida vår, skjer dette:
```
Nettleser                              server.js
   |   ---- GET /  ----------------------->  |
   |   <--- index.html ---------------------  |
   |                                          |
   |   (scriptet i index.html starter)        |
   |   ---- GET /info -------------------->  |
   |   <--- JSON: { "navn": "Kari", ... } --  |
   |                                          |
   |   (scriptet skriver dataene på sida)     |
```
Nettleseren spør altså serveren **to** ganger: Først etter selve nettsida, og deretter etter dataene.

## Filstruktur
Lag ei ny mappe til prosjektet og sett den opp slik:
```
html-await/
├── server.js
└── index.html
```
Gå til terminal og "stå" i mappa html-await. Skriv inn:
```
npm init -y
npm install express
```
Akkurat som i forrige del.

## server.js
Åpne `server.js` og skriv:
```javascript
const express = require('express');
const app = express();
const port = 8080;

// Send nettsida når noen går til http://localhost:8080
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Send data som JSON når noen spør etter /info
app.get('/info', (req, res) => {
  res.json({ navn: 'Eirik', klasse: '2IM', favorittfag: 'Utvikling' });
});

// Start serveren
app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
```

Det meste kjenner du igjen fra forrige del. Det er to nye ting:

`res.sendFile(__dirname + '/index.html')` sender ei hel fil i stedet for en tekst. `__dirname` er mappa som `server.js` ligger i, så `__dirname + '/index.html'` betyr "fila index.html som ligger i samme mappe som meg".

`res.json({ ... })` sender data som JSON. Det som står inne i krøllparentesene `{}` er et javascript-objekt med tre egenskaper: `navn`, `klasse` og `favorittfag`. Express gjør det om til JSON-tekst før det sendes.

## index.html
Lag ei fil som heter `index.html` og skriv:
```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Snakk med serveren</title>
</head>
<body>
    <h1>Info fra serveren</h1>
    <p id="resultat">Henter …</p>

    <script>
        async function hentInfo() {
            const svar = await fetch('/info');
            const data = await svar.json();

            document.getElementById('resultat').textContent =
                `${data.navn} går i ${data.klasse} og liker ${data.favorittfag} best.`;
        }

        hentInfo();
    </script>
</body>
</html>
```

La oss gå gjennom scriptet linje for linje.

```javascript
async function hentInfo() {
```
Her lager vi en funksjon som heter `hentInfo`. Ordet `async` foran betyr at funksjonen kommer til å *vente* på noe underveis. Du **må** skrive `async` foran funksjonen hvis du skal bruke `await` inne i den.

```javascript
const svar = await fetch('/info');
```
`fetch('/info')` sender en `GET`-forespørsel (request) til serveren vår på adressa `/info`. Det er akkurat det samme som du gjorde da du skrev `http://localhost:8080/info` i nettleseren, men nå er det javascript som gjør det.

Det tar litt tid før serveren svarer. Kanskje bare noen millisekunder, men for en datamaskin er det lenge. `await` betyr: *vent her til svaret har kommet, og gå ikke videre før det.* Svaret (response) lagres i variabelen `svar`.

Du kan tenke på det som å bestille mat på en restaurant: `fetch` er å bestille, og `await` er å vente på maten før du begynner å spise.

```javascript
const data = await svar.json();
```
`svar` inneholder mye: statuskode, headere og selve innholdet. `svar.json()` leser innholdet og gjør JSON-teksten om til et javascript-objekt. Også dette tar litt tid, så vi må bruke `await` her også. Nå ligger objektet `{ navn: 'Kari', klasse: '2STA', favorittfag: 'IT2' }` i variabelen `data`.

```javascript
document.getElementById('resultat').textContent =
    `${data.navn} går i ${data.klasse} og liker ${data.favorittfag} best.`;
```
Her finner vi `<p>`-elementet med `id="resultat"` og bytter ut teksten i det. `data.navn` henter ut navnet fra objektet, `data.klasse` henter klassen, osv.

```javascript
hentInfo();
```
Til slutt kaller vi funksjonen, slik at den kjører med en gang sida lastes.

## Start serveren din!
Husk å lagre begge filene! Gå til terminalen og skriv:
```
node server.js
```
Gå til `http://localhost:8080`. Står det "Kari går i 2STA og liker IT2 best."?

## Oppgaver

### Del 1: Se hva som skjer
**Oppgave 1: To forespørsler**
Åpne utviklerverktøyene med `F12` (Windows) eller `Cmd + Option + I` (Mac) og gå til fanen **Network**. Last inn sida på nytt.
- Hvor mange forespørsler ser du til serveren din? Hva heter de?
- Klikk på `info`. Hva står det under **Response**? Hvilken `Content-Type` har svaret?

**Oppgave 2: Spør serveren direkte**
Gå til `http://localhost:8080/info` i nettleseren.
- Hva ser du? Hvorfor ser det annerledes ut enn på `http://localhost:8080`?

**Oppgave 3: Se på dataene i konsollen**
Legg til denne linja rett under `const data = await svar.json();`:
```javascript
console.log(data);
```
Last inn sida og åpne fanen **Console** i utviklerverktøyene. Hva står der? Klikk på pila ved siden av for å se hele objektet.

### Del 2: Hva gjør egentlig `await`?
**Oppgave 4: Fjern `await`**
Fjern `await` foran `fetch` og legg til `console.log(svar);` på linja under. Last inn sida på nytt.
- Hva står det i konsollen nå? (Se etter ordet `Promise`)
- Hva skjer med teksten på sida?

Et `Promise` er et *løfte* om at svaret skal komme senere. Uten `await` venter ikke koden på at løftet blir innfridd, og går videre med en gang. Sett `await` tilbake når du er ferdig.

**Oppgave 5: Fjern `async`**
Fjern `async` foran `function hentInfo()`. Hva står det i konsollen nå? Sett `async` tilbake når du er ferdig.

**Oppgave 6: Rekkefølge**
Legg til `console.log('1');`, `console.log('2');` og `console.log('3');` slik:
```javascript
async function hentInfo() {
    console.log('1');
    const svar = await fetch('/info');
    console.log('3');
    ...
}

hentInfo();
console.log('2');
```
I hvilken rekkefølge kommer tallene i konsollen? Hvorfor?
