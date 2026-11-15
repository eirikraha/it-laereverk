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
