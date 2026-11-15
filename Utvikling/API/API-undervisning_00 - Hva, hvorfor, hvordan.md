# REST API
 
## Hva er API
API står for Application Programming Interface. Hva betyr det? Interface, eller grensesnitt på norsk, er en flate hvor en kan kommunisere med noe. La oss ta en tenkt sosiale medier-app. Denne appen lar deg poste videoer/bilder/tekst og lar deg følge andre brukere og like postene deres. Alt du ser på skjermen med knapper for å søke, følge, laste opp, like osv. er en del av appens grensesnitt. Grensesnittet er med andre ord stedet hvor to ting, deg og appen, møtes for å utveksle informasjon.
 
Et API er det samme, men ment for at to programmer kan snakke sammen. Tenk deg at du skal lage ei nettside som sammenligner priser på tvers av tre nettbutikker. Du kan gjøre alt manuelt og sjekke prisene hos nettbutikkene for å oppdatere sida di hver dag. Dette er enormt tidkrevende. Det er mye lettere hvis du automatiserer prosessen. Hver nettbutikk har etter all sannsynlighet en database hvor de lagrer produkt-ID og pris. Hvis du får tilgang til disse dataene, kan du hente ut prisen automatisk.
 
Å koble seg direkte til et annet selskaps database er både tidkrevende og lite sikkert, og det er her APIet kommer inn. På samme måte som grensesnittet i en sosiale medier-app lar deg gi likes og følge andre brukere uten å tenke mer på det, hjelper et API et program å snakke med et annet program uten mye styr. Dersom hver nettbutikk har et API og du får tilgang til det, kan du med enkle kommandoer hente ut prisene på produktene du sammenligner på nettsida di. Du trenger ikke vite hvordan databasen deres ser ut, APIet skjuler det for deg.
 
API er med andre ord et sett med forhåndsdefinerte regler for hvordan to programmer kan snakke sammen automatisk.
 
## Hva er REST
Det finnes mange måter å lage et API på. Den vanligste på nettet i dag heter REST (Representational State Transfer). Et REST API følger noen enkle prinsipper:
 
- **Alt er ressurser med egen adresse.** Brukere, produkter og ordrer har hver sin adresse, for eksempel `/brukere` eller `/brukere/1`.
- **HTTP-metodene sier hva du vil gjøre.** Den samme adressen kan brukes til å hente, endre eller slette, alt etter hvilken metode du bruker.
- **Hver forespørsel står på egne bein.** Serveren husker ikke tidligere forespørsler, så alt den trenger (for eksempel autentisering) må være med hver gang.
- **Data sendes som regel som JSON.** JSON er et tekstformat som både mennesker og programmer lett kan lese.
 
## Hvorfor bruker vi API
Vi bruker API for å gjøre det lettere for programmer å snakke sammen automatisk. Det finnes utrolig store mengder informasjon rundt omkring som kan brukes, så lenge en kobler seg til rett API.
 
I Norge er [yr.no](https://www.yr.no) værtjenesten til Meteorologisk institutt og NRK. Værdataene og prognosene kommer fra Meteorologisk institutt, som også tilbyr dem gjennom et åpent API: [MET Weather API](https://api.met.no). De aller fleste av oss sjekker været via nett eller app, men hvis du skal lage en app eller ei nettside en dag og ønsker å ha live værmelding på sida di, kan du koble deg til APIet og hente det du trenger.
 
Tilsvarende finnes det API for kart, steder, økonomi, romfart, asteroider, satellittbilder, SSB, valutakurser, kryptovaluta, aksjekurser, bøker, Wikipedia, ord, musikk, filmer, Reddit, YouTube og mye mer. Alle disse APIene kan brukes til å hente informasjon som kan være nyttig i kodeprosjektene dine.
 
Visste du for eksempel at Reddit sitt API ble mye brukt til å samle inn tekst for å trene kunstig intelligens? I 2023 begynte Reddit å ta betalt for stor bruk av APIet, blant annet av den grunnen.
 
## Hvordan koble til en server gjennom et API
Når vi kobler oss til en server gjennom et API, sender vi en API-forespørsel (request). En forespørsel består av fire deler:
 
1. **HTTP-metoden**: hva vi vil gjøre (`GET`, `POST`, `PUT`, `PATCH` eller `DELETE`)
2. **Adressen (endepunktet)**: hvilken ressurs vi vil jobbe med, for eksempel `/brukere/1`
3. **Headere**: tilleggsinformasjon om forespørselen, for eksempel hvilket format dataene har (`Content-Type`) og autentisering (`Authorization`) hvis det trengs
4. **Body** (ikke alltid): selve dataene vi sender inn
 
Metoden og adressen står på den første linja i forespørselen. Deretter kommer headerne, så en tom linje, og til slutt bodyen. En hel forespørsel kan se slik ut:
 
```http
POST /brukere HTTP/1.1
Host: api.eksempel.no
Content-Type: application/json
Authorization: Bearer <token>
 
{
    "navn": "Ola Nordmann",
    "epost": "ola@lvs.no"
}
```
 
Av og til er metode, adresse og headere nok, for eksempel når vi bare skal hente noe. Men hvis vi vil legge inn ny informasjon eller oppdatere eksisterende informasjon på serveren, må vi også sende inn denne informasjonen. Det gjør vi som regel ved å sende JSON-data (JavaScript Object Notation) i bodyen.
 
Kort oppsummert er dette alt vi må gjøre, men hvordan gjør vi det i praksis? Nedenfor går vi gjennom alle elementene steg for steg.
 
### CRUD-operasjoner og HTTP-metoder
CRUD står for Create, Read, Update, Delete og er de fire grunnleggende operasjonene for å håndtere data i en database eller et API. CRUD handler rett og slett om hva du kan gjøre med informasjonen på en server gjennom et API. Hver CRUD-operasjon har sin tilsvarende HTTP-metode:
 
| **CRUD-operasjon** | **Hva den gjør**         | **Tilsvarende HTTP-metode** | **Eksempel**                      |
|-------------------|------------------------|---------------------------|----------------------------------|
| **Create**       | Opprette ny data        | `POST`                    | Legge til en ny bruker          |
| **Read**         | Hente data              | `GET`                     | Hente en liste over produkter   |
| **Update**       | Oppdatere data          | `PUT` eller `PATCH`       | Endre e-post for en bruker      |
| **Delete**       | Slette data             | `DELETE`                  | Slette en bruker                |
 
Kjenner du igjen dette fra SQL? `POST`, `GET`, `PUT`/`PATCH` og `DELETE` tilsvarer omtrent `INSERT`, `SELECT`, `UPDATE` og `DELETE`. Forskjellen er at du ikke snakker med databasen direkte. Du ber APIet om å gjøre det for deg, og hva som ligger bak adressen, er skjult for deg.
 
---
 
**POST – opprette**
 
La oss si at vi vil bruke HTTP-metoden `POST` til å legge til en bruker i ressursen `/brukere`. Så fremt APIet er riktig satt opp, kan vi opprette en bruker slik:
 
```http
POST /brukere
Content-Type: application/json
 
{
    "navn": "Ola Nordmann",
    "epost": "ola@lvs.no"
}
```
 
Første linje bestemmer metoden (`POST`) og adressen (`/brukere`). Headeren `Content-Type: application/json` forteller serveren at dataene våre er JSON. Etter den tomme linja kommer selve informasjonen vi sender inn, altså bodyen.
 
Serveren svarer med statuskoden `201 Created` og gjerne den nye brukeren, inkludert ID-en den har fått:
 
```json
{
    "id": 1,
    "navn": "Ola Nordmann",
    "epost": "ola@lvs.no"
}
```
 
---
 
**GET – hente**
 
Nå har vi oppretta en ny bruker på serveren. Hvis vi vil hente ut informasjonen om denne brukeren, kan vi bruke `GET`-metoden:
 
```http
GET /brukere/1
```
 
Her ser du at vi ikke bare gir inn ressursen vi vil hente fra, men også en ID på slutten. Det betyr at vi vil hente informasjonen til brukeren med ID nr. 1. Her trenger vi ingen body. Svaret kommer som regel som JSON, og i dette tilfellet kan vi få tilbake:
 
```json
{
    "id": 1,
    "navn": "Ola Nordmann",
    "epost": "ola@lvs.no"
}
```
 
Skriver vi bare `GET /brukere`, får vi som regel en liste over alle brukerne.
 
---
 
**PUT og PATCH – oppdatere**
 
Når vi nå har oppretta en bruker og henta informasjonen om den, vil vi kanskje oppdatere den. Til det finnes det to metoder:
 
- `PUT` **erstatter hele ressursen**. Du må sende med alle feltene, også de som ikke endres.
- `PATCH` **endrer bare feltene du sender med**. Resten blir som før.
 
Vil vi bytte både navn og e-post, kan vi bruke `PUT`:
 
```http
PUT /brukere/1
Content-Type: application/json
 
{
    "navn": "Ola Oppdatert",
    "epost": "ola@nytt.no"
}
```
 
Igjen ser du at vi må spesifisere hvilken bruker det gjelder, og at vi må sende med en body. Dette erstatter brukeren med ID 1, så den får nytt navn og ny e-post.
 
Vil vi bare bytte e-postadressen, passer `PATCH` bedre:
 
```http
PATCH /brukere/1
Content-Type: application/json
 
{
    "epost": "ola@nytt.no"
}
```
 
Her blir bare e-posten endret, mens navnet blir som før. Hadde vi sendt den samme bodyen med `PUT`, kunne navnet ha forsvunnet, fordi `PUT` erstatter hele brukeren.
 
---
 
**DELETE – slette**
 
Dersom vi ikke vil ha Ola på serveren vår lenger, kan vi slette ham med `DELETE`-metoden. Denne gangen trenger vi bare ID-en, ingen body:
 
```http
DELETE /brukere/1
```
 
OBS! Det er viktig å være helt sikker på at du skal slette noe før du bruker `DELETE`-metoden. Som regel finnes det ingen angreknapp. Når det er sletta, er det borte.
 
## Statuskoder – hvordan gikk det?
Hver gang serveren svarer, sender den med en statuskode som forteller hvordan det gikk. Det første sifferet sier hva slags svar det er:
 
- **2xx**: alt gikk bra
- **4xx**: noe var feil med forespørselen din
- **5xx**: noe gikk galt på serveren
 
De vanligste statuskodene er:
 
| **Kode** | **Navn**              | **Betydning**                                           |
|---------|----------------------|--------------------------------------------------------|
| `200`   | OK                   | Forespørselen gikk bra (typisk for `GET` og `PUT`)      |
| `201`   | Created              | Noe nytt ble oppretta (typisk for `POST`)               |
| `204`   | No Content           | Det gikk bra, men svaret har ingen body (typisk for `DELETE`) |
| `400`   | Bad Request          | Forespørselen er feil, for eksempel ugyldig JSON        |
| `401`   | Unauthorized         | Du mangler gyldig autentisering                         |
| `403`   | Forbidden            | Du er logget inn, men har ikke lov til å gjøre dette    |
| `404`   | Not Found            | Ressursen finnes ikke, for eksempel `/brukere/99`       |
| `500`   | Internal Server Error| Noe gikk galt på serveren                               |
 
Prøver vi for eksempel `GET /brukere/1` etter at Ola er sletta, får vi `404 Not Found`. Brukeren finnes ikke lenger.
 