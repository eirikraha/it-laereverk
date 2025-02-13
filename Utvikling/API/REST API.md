# REST API

## Hva er API
API står for Application Programming Interface. Hva betyr det? Interface betyr som regel en flate hvor en kan kommunisere med noe. La oss ta en tenkt sosiale medier app. Denne appen lar deg poste videoer/bilder/tekst og lar deg følge andre brukere og like deres poster. Alt du ser på skjermen med knapper for å søke, følge, laste opp, likes osv. er en del av appens interface. Interface'et er med andre ord stedet hvor to ting, deg og appen, møtes for å utveksle informasjon.

Et API er det samme, men ment for at to programmer kan snakke sammen. Tenk deg at du skal lage ei nettside som sammenligner priser på tvers av tre nettbutikker. Du kan gjøre alt manuelt og sjekke prisene hos nettbutikkene for å oppdatere sida di hver dag. Dette er enormt tidkrevende. Det er mye lettere hvis du automatiserer prosessen. Hver nettbutikk har etter all sannsynlighet en database hvor de lagrer produkt-ID og pris. Hvis du får tilgang til disse databasene, kan du hente ut prisen automatisk.

Det å koble seg til et annets selskaps database direkte er både tidkrevende og lite sikkert, men det er her API'et kommer inn. På samme måte som en interface i en sosiale medier app lar deg gi likes og følge andre brukere uten å tenke mer på det, hjelper et API et program å snakke med et annet program uten å mye styr. Dersom hver nettbutikk har et API for sine databaser og du får tilgang til APIene, kan du med enkle kommandoer bruke APIet til å hente ut prisene til produktene du sammenligner på nettsida di.

API er med andre ord et sett med forhåndsdefinerte regler/løsninger for to programmer å snakke sammen automatisk.

## Hvorfor bruker vi API
Vi ønsker å bruke API for å gjøre det lettere for programmer å automatisk snakke sammen. Det finnes utrolig store mengder med informasjon rundt forbi som kan brukes så lenge en kobler seg til rett API.

I Norge er [yr.no](https://www.yr.no) værtjenesten fra meteorologisk institutt. De henter innværdata og prøver å forutsi været i både inn- og utland. De aller fleste av oss sjekker yr via nett eller app, men yr har også et API det går an å koble seg til. Hvis du skal lage en app eller ei nettside en dag og ønsker å ha live værmelding på sida di, er det bare å koble seg opp til yr sitt API og hente det du trenger.

Tilsvarende finnes det API for kart, steder, økonomi, romfart, asteroider, satelittbilder, SSB, valutakurser, kryptovaluta, aksjekurser, bøker, wikipedia, ord, musikk, filmer, reddit, youtube og mye mer. Alle disse APIene kan brukes til å hente ut informasjon som kan være nyttig i dine kodeprosjekt og bruke dem.

Visste du for eksempel at Reddit sitt API har ofte blitt brukt for å trene kunstig intelligens?

## Hva er REST API
API er et sett med regler/instrukser for samhandling mellom programmer. Dette kan gjøres på flere måter og en av de mest vanlige metodene er REST API.

Tanken bak REST API er å lage en enkel, men likevel fleksibel arkitekturstil som bruker standard HTTP-metoder for å hente og sende informasjon mellom program.

REST API bygger på seks prinsipper som støtter opp under dette:
### Uniform samhandling
Alle API-forespørsler som prøver å få tilgang til samme ressurs burde se like ut, uansett hvor forespørselen kommer fra.

Når vi bruker et API så gir vi en adresse som sier noe om hvilken data vi vil ha tilgang til. Et REST API sørger for at alle data en bruker kan få tilgang til, har én egen unik uniform resource identifier (URI). Dette betyr at dersom jeg bruker python og du bruker javascript, skal vi likevel kunne hente ut akkurat de samme dataene så sant vi har rett adresse.

### Klient-server-adskillelse
Klienten (nettside, mobilapp eller lignende) og serveren APIet gir tilgang til, kjører på seperate systemer. Klineten sender en API-forespørsel og serveren svarer.

### Tilstandsløs
REST APIer er tilstandsløse. Det vil si at når de har gjort en jobb, så glemmer de den. Det betyr at alle forspørsler til APIet må inneholde all informasjon som er nødvendig for å hente den ressursen du trenger.

### Mellomlagrende (Caching)
Når mulig, bør APIet tillate at data som hentes kan mellomlagres. Enten hos klienten (den som sender forespørselen) eller hos serveren (den som mottar forespørselen). Dette fører til bedre ytelse i form av at forespørsler som kommer mange ganger kan først sjekke om informasjonen de trenger ligger i mellomlageret og de trenger ikke å hente det ut fra selve serveren hver gang.

La oss si at du lager ei nettside for å vise værdata for din by. Hvis alle i byen din sjekker denne sida hvert sekund, vil det kreve enormt mye av serveren du henter informasjon fra. De færreste av oss trenger nye værdata hvert sekund. Da er det bedre å mellomlagre værdataene og så heller hente ut nye f.eks. hvert tiende minutt.

### Flerlags Systemarkitektur
 I REST API skal alt oppføre seg som om klienten snakker direkte med backend (serveren APIet lar deg snakke med), men det kan være forespørselen din går gjennom mange lag før den kommer dit.
Dette kan for eksempel være Load Balancers (fordeler trafikken som kommer inn mellom servere for bedre ytelse), Autentiseringsservere (sjekker at brukerens API-nøkkel eller token), Caching-servere (mellomlagring) osv. For klienten (den som sender forespørselen), har det ikke noe å si om APIet går rett til serveren med dataene (backend) eller om den går gjennom flere lag først.

Poenget med dette er at backend kan ha så mange lag rundt seg som trengs for å sikre trygg, god og stabil drift, mens Klienten ikke trenger å forholde seg til dette og bare later som om den kobler seg direkte til backend.

---

Det kan fort bli mange ord og mye å holde styr på når det gjelder REST API. Det viktige å huske er at REST API er en effektiv og lettvindt måte for klienten å snakke med serveren på ved hjelp av HTTP-kommandoer. Men hva er disse HTTP-kommandoene?

## Hvordan koble til en server gjennom et API
Når vi kobler oss til en server gjennom et API sender vi en API-forespørsel. Denne forespørselen består gjerne av en ``HEADER`` med informasjon om hva vi vil gjøre og evt autentisering. For REST API inneholder headeren:
- hvilke CRUD-kommandoer/HTTP-metoder du vil kjøre
- adressen til den delen av APIet du vil koble deg til
- hvordan du vil gi informasjon til APIet 
- autentisering hvis nødvendig

Av og til kan headeren være nok, men hvis vi vil legge inn ny informasjon eller oppdatere eksisterende informasjon på serveren, må vi også gi inn denne informasjonen. Dette gjør vi gjerne ved å sende inn ei JSON(Javascript Object Notation)-fil som `BODY`.

Kort oppsummert er dette alt vi må gjøre, men hvordan gjør vi det i praksis? Nedenfor går vi gjennom alle elementene steg for steg:

### CRUD-kommandoer/HTTP-metoder og informasjon
CRUD står for Create, Read, Update, Delete og er de fire grunnleggende opreasjonene for å håndtere data i en database eller et API. CRUD-kommandoene handler rett og slett om hva du kan gjøre med informasjonen på en server gjennom et API. Hver CRUD-kommando har sin tilsvarende HTTP-metode:

| **CRUD-operasjon** | **Hva den gjør**         | **Tilsvarende HTTP-metode** | **Eksempel**                      |
|-------------------|------------------------|---------------------------|----------------------------------|
| **Create**       | Opprette ny data        | `POST`                    | Legge til en ny bruker          |
| **Read**         | Hente data              | `GET`                     | Hente en liste over produkter   |
| **Update**       | Oppdatere data          | `PUT` eller `PATCH`       | Endre e-post for en bruker      |
| **Delete**       | Slette data             | `DELETE`                  | Slette en bruker fra databasen  |

La oss si at vi vil bruke HTTP-metoden `POST` til å legge til en brukre i tabellen `/brukere`. Så sant APIet er rett konfigurert kan vi opprette en bruker med følgende kommando:
```http
POST /brukere      #Her settes HTTP-metoden
Content-Type: application/json  #vi spesifiserer vi vil gi informasjonen vår som ei JSON-fil

#Dette er selve informasjonen vi gir inn (bodyen)
{
    "navn": "Ola Nordmann",
    "epost": "ola@lvs.no"
}
```
---
Med forrige kommando, oppretta vi en ny bruker på serveren APIet er koblet mot. Hvis vi tenker at dette er den eneste brukeren som er registrert på serveren og vi ønsker å hente ut den informasjonen fra serveren, kan vi bruke `GET`-metoden:
```http
GET /brukere/1
```

Her ser du at vi kun gi inn tabellen vi vil hente fra, men også en ID på slutten. Dette betyr at vi ønsker å hente ut informasjon til brukeren med ID nr. 1. Svaret kommer gjerne i form av ei JSON-fil og i dette tilfellet kan vi få tilbake:
```http
{
    "id": 1,
    "navn": "Ola Nordmann",
    "epost": "ola@lvs.no"
}
```
---
Når vi nå har opprettet en bruker og hentet informasjonen dens, vil vi kanskje oppdatere brukeren med en ny e-post adresse. Da kan vi `PUT`-metoden:
```http
PUT /brukere/1
Content-Type: application/json

{
  "navn": "Ola Oppdatert",
  "epost": "ola@nytt.no"
}
```

Igjen kan du se at vi må spesifisere brukeren og vi må nok en gang gi inn en `BODY` med informasjon i tillegg. Dette vil oppdatere brukeren med ID 1 til å få nytt navn og ny e-post.

---

Dersom vi ikke vil ha Ola på serveren vår lenger, kan vi slette ham med `DELETE`-metoden. Denne gangen trenger vi bare en id, ingen `BODY`:
```http
DELETE /brukere/1
```
OBS! Det er viktig å være helt sikker på at du skal slette noe før du bruker `DELETE`-metoden. Når det er sletta, er det borte for godt.

### API-adresse
Når du kobler deg til et API

### Autentisering hos API
Mange API krever at en autentiserer seg før bruk. Dette kan være så enkelt som å oppgi en API-nøkkel i headeren, eller det kan være så sikkert som et token generert bare for deg. Nedenfor skal vi se på noen av de mest vanlige metodene:

#### API-nøkkel
En API-nøkkel er bare en streng som identifiserer hvem du er. Nøkkelen kan enten gis inn i headeren eller som en del av adressa du prøver å koble opp mot:
```http
GET /data HTTP/1.1
Host: api.example.com
Authorization: API_KEY 123456abcdef
Content-Type: application/json
```
Dette er ikke spesielt sikkert og bør kun brukes i testing.

#### Basic authentication
Basic Authentication er vanlig brukernavn og passord som sendes i Base64-format (en annen måte å skrive på).

```http
GET /beskyttet-data HTTP/1.1
Host: api.example.com
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
Content-Type: application/json
```

Her ser vi at Authorization blir satt til basic og så kommer det en rekke med tegn. Dette er brukernavn og passord som er skrevet om fra vanlige bokstaver til Base-64. Dessverre er det veldig lett å konvertere fra Base-64 til vanlig skrift igjen og denne metoden er derfor ikke så sikker.

For å konvertere fra vanlige bokstaver til Base-64, kan du skrive følgende i terminal:

```sh
echo -n "brukernavn:passord" | base64
```

Husk å bytte ut brukernavn og passord med ditt faktiske brukernavn og passord.

#### OAuth2.0
Dersom API-key og Basic authentication ikke er så sikkert, hva er da sikkert?

OAuth 2.0 er en sikker metode for autorisasjon i API-er, som gir tilgang uten å dele passord direkte. Kort forklart handler OAuth2.0 om at brukeren av APIet får et access token (et tegn på tilgang) fra en autentiseringsserver og så gis dette access token'et inn sammen med headern. Dermed blir access token'et litt som en API-key, men access tokens genereres med kort levetid og trackes, og er dermed mye sikrere.

Eksempel på API-forespørsel når en har fått access token:
```http
GET https://api.example.com/user
Authorization: Bearer ACCESS_TOKEN_HER
```

---

Litt lengre forklart om OAuth2.0 er det noen viktige begrep å få med seg:
- Ressurseier: Den som eier serveren et API henter fra.
- Klient: Den som ber om tilgang
- Autentiseringsserver: Egen server som godkjenner klienten og gir et access token
- Ressursserver (APIet): Den som mottar access token/access key og gir tilgang til rett ressurs.

Klienten ber om tilgang til APIet ved å logge seg på med en annen form for autentisering (ofte brukernavn og passord til en annen tjeneste). Klienten får da tilsendt et access token fra Autentiseringsserveren. Denne serveren holder styr på tokens, når de er utstedt og til hvem. Hvert token har relativt kort levetid.

Når klienten har fått et access token, kan klienten bruke det i API-forespørselen sin header som en form for autentisering. Ressursserveren (APIet) sjekker da hvilke tilganger access tokenet gir og om det er gyldig. Hvis alt stemmer, får klienten tilgang til det den skal ha. Hvis ikke, blir forespørselen avvist.

## Hvordan sette opp et API
Hvis du selv har informasjon på en server du har lyst å gjøre tilgjengelig for andre, er det lurt å sette opp et API. Dette kan du gjøre ved å sette opp en serverapplikajson som tar imot forespørsler, behandler dem og returnerer data, gjerne i JSON-format.

Det finnes flere teknologier for å lage en serverapplikasjon. De vanligste er:
- Node.js med Express (JavaScript)
- Flask eller FastAPI (Python)
- Spring Boot (Java)
- Django REST Framework (Python)

Disse rammeverkene er beskrevet i større detalj i sine egne kapitler. Det anbefales å gå til kapittelet for den teknologien du ønsker å bruke og lese videre der.

Når du har valgt en teknologi, kan du bruke den til å sette opp en API-server. Så snart API-serveren er i gang, er det lurt å teste den med [Postmann](Postmann.md) eller [Curl](curl.md). Denne testen kan du gjøre med en gang, før APIet har en database å peke videre til.

Når APIet fungerer, er det lurt å koble det til en database. Dette kan for eksempel være en MySQL-database slik som beskrevet i [SQL-kapittelet (link mangler)](linkmangler).

Til slutt kan du gjøre APIet ditt tilgjengelig på nett, gjerne via en [skyplattform (link mangler)](linkmangler).
## API-oppgaver
- Koble deg til yr sitt API og vis værdata for hjemplassen din
- Lag ei nettside som henter værdata én gang i timen og viser det på nettsida
- Finn et annet API du kan koble deg til og vis noe derfra
- Lag ditt eget API og få en venn til å koble seg til