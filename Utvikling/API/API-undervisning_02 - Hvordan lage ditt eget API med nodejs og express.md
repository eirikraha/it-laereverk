# Ditt første API
## node.js
Først av alt: skriv inn følgende i terminalen din i VSCode:
```
node --version
```

hvis du får et svar på denne formen:
```
 node --version
v24.21.0
```
Er alt i orden og du har node installert. Hvis du **ikke** har node.js installert, [installer det fra denne linken.](https://www.w3schools.com/nodejs/nodejs_get_started.asp)

### Aktivere node.js i prosjektet ditt
Når du har installert node.js, opprett ei ny mappe på PCen for et nytt prosjekt og åpne det i VSCode. Når dette er gjort åpner du terminalen og skriver:
```
npm init -y
```
OBS! Sjekk at filstien i terminalen er den samme som prosjektet ditt, ellers fungerer ikke dette.

Dette vil legge til ei ``package.json``-fil til prosjektet ditt. Dette lar oss bruke npm (node package manager) i prosjektet til å installere bibliotek (eller pakker) med ferdigdefinerte funksjoner i prosjektet vårt. Dette vil være veldig nyttig når vi installerer express.

## Express
For å installere express må du ha node.js og ha kjørt `npm init -y` i terminal for prosjektet ditt allerede.

Neste steg er å installere pakken Express.js:
```
npm install express
```

[Express kan du lese mer om her.](https://www.w3schools.com/nodejs/nodejs_express.asp) Vi skal bruke det til å til å være en server som tar imot forespørsler (request) og bestemmer hvordan den skal svare på dem (response)

## Ditt første API
Vi skal nå lage ditt første API.
Åpne ei fil i prosjektet ditt og kall den `server.js`. Inne i denne fila skriver du:
```javascript
const express = require('express');
const app = express();
const port = 8080;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

La oss gå gjennom linje for linje.
Første linje definerer en konstant variabel og gir den navnet ``express``. ``require('express')`` forteller koden at den skal lete etter modulen med navnet `express`.

`const app = express()` definerer en konstant variabel og gir den navnet app. ``express()`` sier at appen skal være en kopi av express som vi hentet fra modulene til NPM i forrige linje. Du kan tenke det som at express() er en ferdiglaget fabrikk som er klar til bruk, app er produktet fabrikken lager.
Tredje linje forteller oss hvilken port vi skal ha serveren vår på.
```javascript
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});
```
Denne delen av koden sier at når noen prøver å snakke med Express-serveren på filbanen `'/'` skal det leses som en `req` (forkortelse for request) og det skal sendes en `res` (forkortelse for response) tilbake. `=>` er javascript sin måte å si at nå kommer det en funksjon. Funksjonen står inne i krøllparantesene ``{}`` og det som står der er `res.send('Hello World from Express!')`. 

Det betyr at hver gang noen prøver å nå Express-serveren vår på `'/'` skal de få svaret: `'Hello World from Express'`

Tilsvarende sier neste funksjon:
```javascript
// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```
At hver gang Express-serveren starter opp skal den kjøre på port (som vi satte til 8080 tidligere) og skrive setningen `'Example app listening at http://localhost:${port}'`

## Start serveren din!
Gå til terminal og sørg for at du står i samme mappe som prosjektet ditt. Skriv inn:
`node server.js` (husk å sjekke at du har save'et server.js først!)


## Oppgaver

### Del 1: Få serveren til å kjøre
**Oppgave 1: Start serveren**
Skriv dette i terminalen:
```
node server.js
```
Åpne nettleseren og gå til `http://localhost:8080`.
- Hva står det i terminalen?
- Hva står det i nettleseren?
- Legg merke til at terminalen ikke blir ferdig. Hvorfor tror du det er slik?

Du stopper serveren ved å trykke `Ctrl + C` i terminalen. Det gjelder både på Windows og Mac.

**Oppgave 2: Endre svaret**
Endre teksten i `res.send()` til noe annet. Last inn sida i nettleseren på nytt.
- Endret teksten seg? Hvorfor ikke?
- Stopp serveren med `Ctrl + C` og start den på nytt. Hva skjer nå?

Tips: Hvis du starter serveren med `node --watch server.js`, starter den på nytt av seg selv hver gang du lagrer fila.

**Oppgave 3: Bytt port**
Endre porten til `3000` og start serveren på nytt.
- Hva skjer hvis du går til `http://localhost:8080` nå?
- Hvilken adresse må du bruke i stedet?

**Oppgave 4: En adresse som ikke finnes**
Gå til `http://localhost:3000/hei`.
- Hva står det på sida?
- Åpne utviklerverktøyene i nettleseren med `F12` (Windows) eller `Cmd + Option + I` (Mac), og gå til fanen **Network**. Last inn sida på nytt og klikk på forespørselen. Hvilken statuskode fikk du? Hva betyr den?

### Del 2: Lag egne endepunkter
**Oppgave 5: Om meg**
Lag et nytt endepunkt, `/om-meg`, som svarer med navnet ditt og hvilken klasse du går i. Test det i nettleseren.

**Oppgave 6: HTML og JSON**
a) Lag et endepunkt, `/overskrift`, som svarer med `res.send('<h1>Hei!</h1>')`. Hva skjer i nettleseren?

Hvordan ser dette ut i nettleseren? Sjekk fanen **Network** igjen og se på headeren `Content-Type` i svaret. Hva er forskjellen fra `res.send()` med tekst?

### Del 3: Gjør serveren smartere (dette er avansert og kun for de som er interessert i å lære mer med en gang)
**Oppgave 7: Hils på hvem som helst**
Lag et endepunkt som hilser på den som er nevnt i adressa. Går du til `/hei/Kari`, skal svaret være `Hei, Kari!`.

Hint: Skriv `'/hei/:navn'` som adresse, og hent ut navnet med `req.params.navn`.

**Oppgave 8: Kalkulator**
Lag et endepunkt, `/pluss`, som legger sammen to tall fra adressa. Går du til `/pluss?a=2&b=3`, skal svaret være `5`.

Hint: Tallene finner du i `req.query.a` og `req.query.b`. Prøv først uten å gjøre noe mer. Hvorfor blir svaret `23` og ikke `5`? Hvordan kan du fikse det?

**Oppgave 9: Statuskoder**
a) Lag et endepunkt, `/hemmelig`, som svarer med statuskoden `403` og en passende melding:
```javascript
res.status(403).send("Du har ikke tilgang hit!");
```
Sjekk statuskoden i fanen **Network**.

b) Utvid kalkulatoren fra oppgave 9: Hvis `a` eller `b` mangler eller ikke er et tall, skal serveren svare med statuskoden `400` og en feilmelding.

**Oppgave 10: Hva med de andre metodene?**
Åpne en ny terminal (serveren må fortsatt kjøre i den første) og send en `POST`-forespørsel til serveren din:
```
curl -i -X POST http://localhost:3000/
```
Hvilken statuskode får du? Hvorfor, når `GET` til samme adresse virker fint?

### Utfordringer
**Terning:** Lag et endepunkt, `/terning`, som svarer med et tilfeldig tall fra 1 til 6. Klarer du å lage `/terning/:sider`, slik at `/terning/20` gir et tall fra 1 til 20?

**Klokke:** Lag et endepunkt, `/klokke`, som svarer med hva klokka er akkurat nå, som JSON.

**Klient og server:** Lag ei ny fil, `klient.js`, som bruker `fetch()` til å hente data fra `/info`-endepunktet ditt og skriver dem ut i terminalen. Kjør den med `node klient.js` i en ny terminal mens serveren kjører. Hvilket program er klienten, og hvilket er serveren?
