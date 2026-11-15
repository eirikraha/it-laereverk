const express = require("express");
const app = express();
const port = 8080;

// Gjør filene i mappa "public" (index.html og style.css) tilgjengelige i nettleseren
app.use(express.static("public"));

// Mellomlager: her tar vi vare på Pokémon vi allerede har hentet,
// så vi slipper å spørre PokeAPI om det samme mange ganger
const lager = {};

// PokeAPI gir navnene på egenskapene på engelsk. Her oversetter vi dem
const egenskaper = {
    "hp": "helse",
    "attack": "angrep",
    "defense": "forsvar",
    "special-attack": "spesialangrep",
    "special-defense": "spesialforsvar",
    "speed": "fart"
};

// Gjør første bokstav stor: "pikachu" blir "Pikachu"
function storForbokstav(tekst) {
    return tekst[0].toUpperCase() + tekst.slice(1);
}

// Endepunkt: GET /pokemon/25 eller GET /pokemon/pikachu
app.get("/pokemon/:id", async (req, res) => {
    const id = req.params.id.toLowerCase();  // PokeAPI vil ha små bokstaver

    // Har vi hentet denne før? Da sender vi den fra mellomlageret
    if (lager[id]) {
        console.log(`Hentet ${id} fra mellomlageret`);
        return res.json(lager[id]);
    }

    try {
        // Her er serveren vår KLIENT: den spør PokeAPI
        const svar = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (svar.status === 404) {
            return res.status(404).json({ feil: `Fant ingen Pokémon med «${id}»` });
        }
        if (!svar.ok) {
            return res.status(502).json({ feil: "Noe gikk galt hos PokeAPI" });
        }

        const data = await svar.json();
        const navn = storForbokstav(data.name);

        // PokeAPI gir høyde i desimeter og vekt i hektogram. Vi deler på 10 for å få meter og kilo.
        // toLocaleString("nb-NO") gir komma i stedet for punktum: 0,4 i stedet for 0.4
        const hoyde = (data.height / 10).toLocaleString("nb-NO");
        const vekt = (data.weight / 10).toLocaleString("nb-NO");

        // Lag en liste med bare navnene på typene, f.eks. ["grass", "poison"]
        const typer = data.types.map(t => t.type.name);

        // Finn egenskapen med høyest verdi
        let beste = data.stats[0];
        for (const stat of data.stats) {
            if (stat.base_stat > beste.base_stat) {
                beste = stat;
            }
        }

        // Faktasetninger. Nettsida velger én tilfeldig av dem
        const fakta = [
            `${navn} er nummer ${data.id} i Pokédexen.`,
            `${navn} er av typen ${typer.join(" og ")}.`,
            `${navn} er ${hoyde} meter høy.`,
            `${navn} veier ${vekt} kg.`,
            `Det ${navn} er best på, er ${egenskaper[beste.stat.name]} (${beste.base_stat}).`
        ];

        const pokemon = {
            navn: navn,
            nummer: data.id,
            // Ikke alle Pokémon har official-artwork. Da bruker vi det vanlige bildet i stedet
            bilde: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
            fakta: fakta
        };

        lager[id] = pokemon;
        console.log(`Hentet ${id} fra PokeAPI`);

        // Her er serveren vår SERVER: den svarer nettsida
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ feil: "Fikk ikke kontakt med PokeAPI" });
    }
});

app.listen(port, () => {
    console.log(`Pokédexen kjører på http://localhost:${port}`);
});
