# Koble til API fra frontend med JavaScript

Før du starter på dette kapittelet er det viktig at du har en generell forståelse for JavaScript og spesielt [funksjoner i JavaScript](funksjoner.md). Det er også viktig å ha lest om [REST API](../API/REST%20API.md) og jeg vil anbefale å ha lært om å [sette opp ditt eget API med Node.js og Express](Nodejs/API.md).

## Hva trenger du for å koble ti et API?
For å hente eller sende fra en frontend-applikajson til en backend-server trenger vi:
- Et API vi kan koble oss til
- En JavaScript-metode som kan sende forespørsler
- HTTP-metoder som er definert for et API

## Eksempel: Koble til /api/brukere med `fetch()`-metoden

I kapittelet om å [sette opp API med Node.js og Express](Nodejs/API.md) satte vi opp et API med adresse ``api/brukere``. Hvis vi ønsker å nå dette APIet fra Frontend kan vi bruke `fetch()` metoden. Et eksempel på slik kode kan være:
```javascript
// Hente brukere fra API-et
fetch("http://localhost:<portnummer>/api/brukere", {
    method: "GET"
})
    .then(response => response.json())  // Konverterer svaret til JSON
    .then(data => console.log("Brukere:", data))  // Viser data i konsollen
    .catch(error => console.error("Feil ved henting:", error));
```
Denne koden bruker ``fetch()``-metoden til å gå til adressa `http://localhost:<portnummer>/api/brukere`. Her brukes GET-metoden til å hente brukere. ``.then()`` betyr at etter `fetch()`-metoden har kjørt og er ferdig, så skal det skje noe:
- responsen konverteres til json
- dataene legges i konsoll
- Dersom det kommer en feilmelding, vises den i konsollen

Det er viktig å bruke `fetch()` og `then()` for å sikre at ``fetch()`` får kjøre i sin helhet før programmet prøver å gå videre i koden. Dette kan også gjøres med `async/await`-metoder. Da kan koden se slik ut:
```javascript
// Hente brukere med async/await
async function hentBrukere() {
    try {
        const response = await fetch("http://localhost:<portnummer>/api/brukere");
        const data = await response.json();
        console.log("Brukere:", data);
    } catch (error) {
        console.error("Feil ved henting:", error);
    }
}

hentBrukere();
```

## Metoder som krever informasjon
Når en HTTP-metode krever at du gir informasjon inn med ``fetch()``, kan vi gjøre det i selve `fetch()`-metoden:
```javascript
// Legg til en ny bruker i API-et
fetch("http://localhost:<portnummer>/api/brukere", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ navn: "Per Hansen", epost: "per@example.com" })
})
.then(response => response.json())
.then(data => console.log("Bruker lagt til:", data))
.catch(error => console.error("Feil ved innlegging:", error));
```
Her blir både ``headers`` og ``body`` definert og sendt inn. Legg merke til at vi bruker `JSON.stringify` for å gjøre `body` til JSON.

## Oppgaver
- Lag ei nettside som kobler til et API og viser informasjonen på nettsida
- Koble deg til et API du har laga selv
- Koble deg til et API du finner på nettet (som for eksempel yr sitt API)