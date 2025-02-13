# API i JavaScript

NB! Før du leser dette kapittelet er det lurt å ha lest kapittelet om [REST API](../API/REST%20API.md), kapittelet om [MySQL](../SQL/MySQL.md) og kapittelet om [Node.js (link kommer)](link kommer).

## Nødvendige verktøy for API
I dette kapittelet skal vi bruke Node.js, Express og MySQL til å sette opp et API som lar en klient (nettside/app eller lignende) hente ut informasjon fra en database (MySQL) gjennom et hjemmelaget API.

Først må du installere Node.js på PCen din. Det kan du gjøre fra [Node.js sin nettside](https://nodejs.org/en).

Når Node.js er korrekt installert må du lage ei mappe for prosjektet ditt. Denne mappa kan for eksempel hete `mitt-api`. Mappa kan enten lages via File Explorer eller direkte fra terminal:
```sh
mkdir mitt-api  #Lager mappa
cd mitt-api     #Navigerer til mappa
```

Når du "står" i mappa, er det viktig å initiere npm og så installere nødvendige pakker.

```sh
npm init -y  # Oppretter en package.json-fil
npm install express cors dotenv mysql2  # Installerer nødvendige pakker
```
Du er nå helt klar til å opprette ditt eget API!
## Hvordan sette opp en API-server med Node.js og Express
For å opprette ditt eget API må du skrive ei JavaScript-fil som inneholder logikken (reglene) til APIet. Denne fila kan du kalle hva du vil, men i dette læreverket vil den alltid hete `server.js` og jeg foreslår at du kaller din det samme til du er trygg på prosessen.

Inne i server.js kan du lime inn koden nedenfor. Hvis du ikke forstår hva koden gjør, er det veldig forståelig. Vi går gjennom koden linje for linje litt lengre nede på siden.
```javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // For å håndtere JSON-data

// Eksempel på et API-endepunkt som returnerer data
app.get("/api/brukere", (req, res) => {
    res.json([
        { id: 1, navn: "Ola Nordmann", epost: "ola@example.com" },
        { id: 2, navn: "Kari Nordmann", epost: "kari@example.com" }
    ]);
});

// Starter serveren
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}`);
});
```
De tre første linjene importerer tre nødvendige pakker:
- dotenv: beskrevet nedenfor
- express: bibliotek som brukes til å lage APIer i Node.js
- cors: Tillater at APIet kan brukes av andre domener enn frontend domenet

### dotenv
Denne pakken laster inn miljøvariabler fra en .env-fil dersom den finnes. Miljøvariabler er variabler du ønsker å bruke i APIet ditt, men som ikke skal ligge åpent tilgjengelig i samme kode som resten av APIet. Dette kan for eksempel være passord, portnummer, databaseinformasjon osv.

Hvis du bruker git til versjonskontroll, bør ikke .env-filer lastes opp. De bør legges til i .gitignore. Du kan eventuelt legge til en eksempel .env-fil i git slik at andre vet enkelt hvilke miljøvariabler de må sette for å bruke koden din. .env-filer brukes mest i utvikling og pleier ikke å være en del av et ferdig produkt, da defineres disse variablene hos hostingtjenesten/serveren du bruker.

En .env fil kan se slik ut:
```ini
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=hemmeligpassord
SECRET_KEY=superhemmelig
```
Når disse miljøvariablene kalles i `server.js`, skriver vi:
```javascript
require("dotenv").config(); // Laster miljøvariabler fra .env

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const SECRET_KEY = process.env.SECRET_KEY;
```

```javascript
const app = express();
```
Denne linja lager en Express-applikasjon. Express er et rammeverk for å lage back end web applikasjoner som kan håndtere REST APIer og HTTP-forespørsler.

```javascript
app.use(cors());
app.use(express.json()); // For å håndtere JSON-data
```
Disse linjene forteller `server.js` at Express-appen vi lagde tidligere skal bruke cors-biblioteket og at det skal lese JSON.

```javascript
app.get("/api/brukere", (req, res) => {
    res.json([
        { id: 1, navn: "Ola Nordmann", epost: "ola@example.com" },
        { id: 2, navn: "Kari Nordmann", epost: "kari@example.com" }
    ]);
});
```
Som du husker fra [API-kapittelet](../API/REST%20API.md), bruker REST API CRUD-kommandoer for å utføre HTTP-metodene GET, POST, PUT og DELETE. For at APIet skal kunne vite hva det skal gjøre når det får en GET-forespørsel, må vi definere hva som skal skje. Disse linjene forteller oss at:
- `app.get("/api/brukere", (req, res) => { ... })` når noen ønsker å bruke en GET-metode ved adressa "/api/brukere", så skal funksjonen etter ``=>`` gjøres. Denne funksjonen tar argumentene `req` (står for request) og `res` (står for respons). Request skal da inneholde eventuelle detaljer i forespørselen og respons skal inneholde svaret fra APIet.
- `res.json([...])` sier at responsen (`res`) sin JSON skal inneholde det som står inne i hakeparantesene.
- Linjene med id, navn og e-post er da JSON-informasjonen som skal gis tilbake når dette APIet mottar en GET-forespørsel hos ``api/brukere``.

Legg merke til at vi ennå ikke har koblet til en database. Derfor definerer vi JSON-informasjonen direkte i `res`. Vanligvis vil dette bli hentet fra en database og ikke bli definert slik som her.

```javascript
const PORT = process.env.PORT || 5000;
```
Her definerer vi en variabel PORT og setter den lik miljøvariabelen PORT satt i .env-fila. Hvis det ikke er noen port satt der, settes `const PORT` til 5000.

```javascript
app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}`);
});
```
Denne linja starter serveren og ber den om å **lytte etter forespørsler** ved `PORT`. Linja inne i funksjonen skriver til konsoll hvilken port serveren kjører på. Dette er nyttig for å både se hvilken port vi kjører på og at serveren er i gang.

Her er en tabell med nøkkelbegrepene fra koden:
| **Kode**                                | **Beskrivelse**                                          |
|-----------------------------------------|----------------------------------------------------------|
| `require("dotenv").config();`           | Laster miljøvariabler fra `.env`-fil.                   |
| `const express = require("express");`   | Importerer Express for å lage API.                      |
| `const cors = require("cors");`         | Tillater eksterne klienter å bruke API-et.              |
| `const app = express();`                | Oppretter en Express-applikasjon.                       |
| `app.use(cors());`                      | Aktiverer CORS for å tillate API-kall fra andre domener. |
| `app.use(express.json());`              | Gjør at API-et kan lese JSON-data fra klienten.         |
| `app.get("/api/brukere", ...);`         | Definerer et endepunkt som returnerer en liste med brukere. |
| `app.listen(PORT, ...);`                | Starter API-et på en bestemt port.                      |

---
## Hvordan starte og teste APIet
Når du har skrevet `server.js` er det viktig å teste at APIet ditt fungerer. For å starte serveren skriver du følgende kommando i terminal (når du står i samme mappe som server.js):
```sh
node server.js
```
Deretter åpner du nettleseren og går til `http://localhost:<portnummer>/api/brukere`
Da skal du kunne se JSON-data med brukere slik det ble beskrevet ovenfor.

Mer avanserte API er ikke like lette å teste på denne måten. Da er det lurt å bruke tjenester som [curl](../API/curl.md) eller [Postmann](../API/Postmann.md).

## Hvordan koble APIet til en database 
Når vi har skrevet et API og har testa det, ønsker vi gjerne å koble det til en database slik at det kan brukes til å hente ut informasjon. Vi har allerede installert MySQL i prosjektet og derfor er det naturlig å bruke det videre.

Det første vi må gjøre er å legge til linja `const mysql = require("mysql2");` for å importere mysql2-pakken.

Litt senere kan vi legge til linjene
```javascript
// Opprett databaseforbindelse
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "passord",
    database: "min_database"
});

db.connect();
```

Dette kobler til en mysql-server som kjører lokalt på maskinen din og har en database ved navn "min_datase". Dersom du er usikker på hvordan du setter opp en slik database, kan du lese om det i [kapittelet om MySQL](../SQL/MySQL.md). Legg merke til at databasen lagres i en variabel kalt `db`. Denne har en del metoder knyttet til seg, blant annet `.connect()` som brukes her for å koble til databsen.

---

Etter at vi har koblet til databasen, er det naturlig å lage flere **endepunkter** (regler for HTTP-metoder). Tidligere laget vi et **GET-endepunkt** som returnerte brukere **uten å hente dem fra en database**. Nå skal vi lage **alle CRUD-kommandoene** (Create, Read, Update, Delete) og hente data fra tabellen `brukere` i databasen `min_database`.

Brukerne er lagret med følgende kolonner:
- `id` (unik ID for hver bruker, settes automatisk)
- `navn` (brukerens navn)
- `epost` (brukerens e-postadresse)

### GET
GET-metoden må skrives litt om:
```javascript
app.get("/api/brukere", (req, res) => {
    db.query("SELECT * FROM brukere", (err, result) => {
        res.json(result);
    });
});
```
Igjen ser vi at første linja er `app.get("/api/brukere", (req, res) => {...})`. Her forteller vi APIet at regelen for GET-metoden på adressa "/api/brukere" skal utføre funksjonen definert innenfor ``=> {}``.
```javascript
db.query("SELECT * FROM brukere", (err, result) => {
        res.json(result);
    });
```
Tidligere definerte vi JSON rett i GET-funksjonen, men denne gangen ønsker vi å hente fra en tabell i databasen. Det gjøres ved å bruke `db.query()`-metoden som sier at vi ønsker å sende en SQL-spørring til databasen. I dette tilfellet er spørringen `"SELECT * FROM brukere"`. Når denne spørringen har blitt kjørt får vi tilbake to verdier, `err` og `result`. Dette er henholdsvis feilmelding fra spørringen og resultatet fra spørringen.

Linja `res.json(result)` sier at GET-funksjonens `res` skal fylles med `result` fra SQL-spørringen i JSON-format. Det betyr at det spørringen henter fra tabellen, sendes tilbake til klienten som bruker GET-metoden.

### POST
POST-metoden ønsker å legge til nye brukere i tabellen. Siden tabellen har kolonnene id, navn og epost, må vi gi inn navn og epost sammen med API-forespørselen. ID settes automatisk for hver tabellrad og trenger ikke spesifiseres her.

```javascript
app.post("/api/brukere", (req, res) => {
    const { navn, epost } = req.body;
    db.query("INSERT INTO brukere (navn, epost) VALUES (?, ?)", [navn, epost], (err, result) => {
        res.json({ message: "Bruker lagt til", id: result.insertId });
    });
});
```

Den første linja definerer selve post-metoden `app.post("/api/kunder", (req, res) => {...})`.  
Neste linje er ny for oss. Her sier vi at i API-forespørselen sin body (`req.body`), skal det finnes to verdier `navn` og `epost`. Disse ønsker vi å hente ut for å bruke i SQL-spørringen i neste linje.
```javascript
    db.query("INSERT INTO brukere (navn, epost) VALUES (?, ?)", [navn, epost]);
    res.json({ message: "Bruker lagt til", id: result.insertID });
});
```
Disse linjene sender en SQL-kommando til databasen som sier at i tabellen `brukere` skal det legges til en ny bruker med verdiene `navn` og `epost` som vi hentet fra forespørsel-bodyen. Når dette er gjort skal responsen fra POST-metoden være "Bruker lagt til" og IDen til brukeren.

### PUT
PUT-metoden oppdaterer brukere i tabellen. Her må vi gi ID'en til den brukeren vi vil oppdatere:
```javascript
app.put("/api/brukere/:id", (req, res) => {
    const { id } = req.params;
    const { navn, epost } = req.body;
    db.query("UPDATE brukere SET navn = ?, epost = ? WHERE id = ?", [navn, epost, id], (err, result) => {
        res.json({ message: "Bruker oppdatert" });
    });
});

```
Legg merke til at adressen er `/api/brukere/:id`. Når adressen gir en id, kan vi hente den ut med kommandoen `const { id } = req.params;`.

Resten av koden er nokså lik POST. Prøv å forklare den til en klassekamerat.

### DELETE
Den siste metoden er DELETE-metoden. Her må vi også definere hvilken ID vi vil gjøre noe med. OBS! Vær alltid forsiktig med DELETE da denne metoden sletter data for godt.
```javascript
app.delete("/api/brukere/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM brukere WHERE id = ?", [id], (err, result) => {
        res.json({ message: "Bruker slettet" });
    });
});
```

Denne koden har du alle forutsetninger for å kunne løse selv nå. Klarer du det?

## Koden med databasetilkobling og CRUD-kommandoer
Dersom du har lagt til alle kommandoene skal koden din nå se noenlunde slik ut:
```javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json()); // For å håndtere JSON-data

// Opprett databaseforbindelse
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "passord",
    database: "min_database"
});

db.connect();

// **GET** - Hent alle brukere
app.get("/api/brukere", (req, res) => {
    db.query("SELECT * FROM brukere", (err, result) => {
        res.json(result);
    });
});

// **POST** - Legg til en ny bruker
app.post("/api/brukere", (req, res) => {
    const { navn, epost } = req.body;
    db.query("INSERT INTO brukere (navn, epost) VALUES (?, ?)", [navn, epost], (err, result) => {
        res.json({ message: "Bruker lagt til", id: result.insertId });
    });
});
// **PUT** - Oppdater en bruker
app.put("/api/brukere/:id", (req, res) => {
    const { id } = req.params;
    const { navn, epost } = req.body;
    db.query("UPDATE brukere SET navn = ?, epost = ? WHERE id = ?", [navn, epost, id], (err, result) => {
        res.json({ message: "Bruker oppdatert" });
    });
});


// **DELETE** - Slett en bruker
app.delete("/api/brukere/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM brukere WHERE id = ?", [id], (err, result) => {
        res.json({ message: "Bruker slettet" });
    });
});


// Starter serveren
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}`);
});
```
## Veien videre

Når du nå har en grunnleggende forståelse for oppsett av API og hvordan du lager et selv, er det lurt å lære hvordan en kobler seg til API. Det kan du lære om i kapittelet [koble til API fra frontend](../koble%20til%20API%20fra%20frontend.md)

## Oppgave
- Lag din egen database for dine topp ti filmer
- Lag et API som lar deg gjøre alle CRUD-kommandoene mot databasen din
- Test APIet med Postmann/Curl
- Les om hvordan du kan koble til et API fra frontend. Javascript: [her](../koble%20til%20API%20fra%20frontend.md).
- Lag ei nettside som lar deg vise alle filmene fra databasen
- Oppdater netttsida til å lar deg legge til nye filmer, oppdatere eksisterende filmer og slette eksisterende filmer
## Feilhåndtering
Dessverre er denne koden nokså svak for feil. For å gjøre den mer robust er det lurt å legge inn feilhåndtering. Dette er utenfor hva dette læreverket skal gå inn i detalj på. Likevel er det viktig å være klar over at det finnes og når du føler du har fått et godt grep på API, anbefaler jeg deg å lese gjennom koden nedenfor for å se hvordan feil kan håndteres. Denne koden fikser følgende:
- Sikker tilkobling til MySQL, stopper serveren hvis den ikke kan koble til databasen.
- Feilhåndtering i alle db.query(...) operasjoner, slik at serveren ikke krasjer.
- Sikrer at POST og PUT ikke kjøres uten nødvendige data (navn, epost).
- Gir riktig HTTP-statuskode for ulike feil, i stedet for bare å returnere en melding.

```javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json()); // For å håndtere JSON-data

// Opprett databaseforbindelse med feilhåndtering
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "passord",
    database: process.env.DB_NAME || "min_database"
});

db.connect(err => {
    if (err) {
        console.error("❌ Feil ved tilkobling til databasen:", err);
        process.exit(1); // Stopper serveren hvis tilkoblingen feiler
    }
    console.log("✅ Tilkoblet til MySQL-database");
});

// **GET** - Hent alle brukere
app.get("/api/brukere", (req, res) => {
    db.query("SELECT * FROM brukere", (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Feil ved henting av brukere", details: err.message });
        }
        res.json(result);
    });
});

// **POST** - Legg til en ny bruker
app.post("/api/brukere", (req, res) => {
    const { navn, epost } = req.body;

    if (!navn || !epost) {
        return res.status(400).json({ error: "Navn og e-post er påkrevd" });
    }

    db.query("INSERT INTO brukere (navn, epost) VALUES (?, ?)", [navn, epost], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Feil ved innsetting av bruker", details: err.message });
        }
        res.status(201).json({ message: "Bruker lagt til", id: result.insertId });
    });
});

// **PUT** - Oppdater en bruker
app.put("/api/brukere/:id", (req, res) => {
    const { id } = req.params;
    const { navn, epost } = req.body;

    if (!navn || !epost) {
        return res.status(400).json({ error: "Navn og e-post er påkrevd" });
    }

    db.query("UPDATE brukere SET navn = ?, epost = ? WHERE id = ?", [navn, epost, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Feil ved oppdatering av bruker", details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Bruker ikke funnet" });
        }
        res.json({ message: "Bruker oppdatert" });
    });
});

// **DELETE** - Slett en bruker
app.delete("/api/brukere/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM brukere WHERE id = ?", [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Feil ved sletting av bruker", details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Bruker ikke funnet" });
        }
        res.json({ message: "Bruker slettet" });
    });
});

// **Starter serveren med feilhåndtering**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}`);
});

```