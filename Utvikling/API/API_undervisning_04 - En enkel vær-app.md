# En enkel vær-app
I denne fila skal vi koble oss til API'et til `Yr` (Meteorologisk institutt) og hente værmeldingen for Oslo.

## Filstruktur
Sett opp mappestrukturen din slik:
```
vaer-app/
├── server.js
└── index.html
```

> Tips: Bruk bare små bokstaver og ingen æ, ø, å eller mellomrom i mappenavnet. Ellers klager `npm init -y`.

Gå til terminal og "stå" i mappa vaer-app. (dette kan du enten gjøre ved å åpne den folderen i VSCode eller ved å bruke kommandoen cd i terminalen)

Når du står i rett mappe, skriv inn følgende i terminalen:
```
npm init -y
npm install express
```

Mappestrukturen vil da endre seg til:
```
vaer-app/
├── server.js
├── index.html
├── package.json
└── node_modules/
```
Og du er klar for å lage selve applikasjonen.
## HTML
Lag ei fil som du kaller `index.html` og gjør den slik:
```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Enkel vær-app</title>
</head>
<body>
    <h1>Været i Oslo</h1>
    <pre id="resultat"></pre>

    <script>
        async function hentVaer() {
            const svar = await fetch("/vaer");
            const data = await svar.json();

            document.getElementById("resultat").textContent = JSON.stringify(data, null, 2);
        }

        hentVaer();
    </script>
</body>
</html>
```
## Javascript
Lag ei fil som heter `server.js` og skriv den slik:
```javascript
const express = require("express");
const app = express();
const port = 8080;

// Send index.html når noen åpner http://localhost:8080
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Endepunkt: GET /vaer
app.get("/vaer", async (req, res) => {
    // Koordinatene til stedet vi vil ha vær for (her: Oslo)
    const lat = 59.91;
    const lon = 10.75;

    // Spør Yr om været. Yr krever at vi sier hvem vi er (User-Agent)
    const svar = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
        { headers: { "User-Agent": "IT2-vaerapp-skoleprosjekt/1.0" } }
    );

    // Gikk det galt? Send feilkoden fra Yr videre
    if (!svar.ok) {
        return res.sendStatus(svar.status);
    }

    // Send JSON-en fra Yr rett videre
    const data = await svar.json();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Værappen kjører på http://localhost:${port}`);
});
```

## Kjør applikasjonen
Husk å lagre alle filene dine!

Gå til terminalen og skriv inn:
```
node server.js
```

Gå så til linken du får opp. Ser du en lang liste med værdata?

> Får du feilmelding om at porten er i bruk? Da kjører du sikkert en annen server (f.eks. PokéDex'en). Stopp den med `Ctrl + C` i terminalen der den kjører.

## Oppgave
1. Finn temperaturen akkurat nå i JSON-en på nettsida. Hvor ligger den?
2. Bytt ut `lat` og `lon` i `server.js` med koordinatene til der du bor (finn dem f.eks. på yr.no eller Google Maps). Husk å endre overskriften i `index.html` også.
3. Bruk OBS til å spille inn en film hvor du forklarer index.html og server.js linje for linje og send til læreren.
