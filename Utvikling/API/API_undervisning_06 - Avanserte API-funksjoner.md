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

Når APIet fungerer, er det lurt å koble det til en database. Dette kan for eksempel være en PostGRESQL-database slik som beskrevet i [SQL-kapittelet (link mangler)](linkmangler).