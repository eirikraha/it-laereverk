# Koble deg til et API
I denne fila skal vi koble oss til API'et `PokéAPI` for å lage vår egen PokéDex.

## Filstruktur
Sett opp mappestrukturen din slik:
```
pokedex/
├── server.js
└── public/
    ├── index.html
    └── style.css
```

Gå til terminal og "stå" i mappa pokedex. (dette kan du enten gjøre ved å åpne den folderen i VSCode eller ved å bruke kommandoen cd i terminalen)

Når du står i rett mappe, skriv inn følgende i terminalen:
```
npm init -y
npm install express
```

Mappestrukturen vil da endre seg til:
```
pokedex/
├── server.js
├── package.json
├── node_modules/
└── public/
    ├── index.html
    └── style.css
```
Og du er klar for å lage selve applikasjonen.
## HTML
Lag ei fil som du kaller `index.html` og gjør den slik:
```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min Pokédex</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="kort">
        <h1 id="navn">Laster …</h1>

        <div id="midten">
            <button id="forrige" title="Forrige Pokémon">&lt;</button>
            <img id="bilde" alt="">
            <button id="neste" title="Neste Pokémon">&gt;</button>
        </div>

        <p id="fakta" title="Klikk for en ny faktasetning"></p>
    </div>

    <script>
        const ANTALL = 1025;  // Antall Pokémon i Pokédexen (nr. 1 til 1025)

        const navn = document.getElementById("navn");
        const bilde = document.getElementById("bilde");
        const fakta = document.getElementById("fakta");
        const forrige = document.getElementById("forrige");
        const neste = document.getElementById("neste");

        let nummer = Math.floor(Math.random() * ANTALL) + 1;  // Start på en tilfeldig Pokémon
        let faktaListe = [];

        // Velg en tilfeldig faktasetning fra lista og vis den
        function visTilfeldigFakta() {
            const tilfeldig = Math.floor(Math.random() * faktaListe.length);
            fakta.textContent = faktaListe[tilfeldig];
        }

        // Hent Pokémon med nummeret i variabelen "nummer" og vis den på sida
        async function visPokemon() {
            fakta.textContent = "Henter …";

            try {
                // Her er nettsida KLIENT: den spør serveren vår (ikke PokeAPI direkte)
                const svar = await fetch(`/pokemon/${nummer}`);
                const pokemon = await svar.json();

                // Sjekk statuskoden. Gikk noe galt, viser vi feilmeldingen fra serveren
                if (!svar.ok) {
                    fakta.textContent = pokemon.feil;
                    return;
                }

                navn.textContent = pokemon.navn;
                bilde.src = pokemon.bilde;
                bilde.alt = pokemon.navn;
                faktaListe = pokemon.fakta;
                visTilfeldigFakta();
            } catch (error) {
                fakta.textContent = "Fikk ikke kontakt med serveren. Kjører den?";
            }
        }

        // Pil til venstre: gå til forrige. Fra nr. 1 hopper vi til den siste
        forrige.addEventListener("click", () => {
            nummer = nummer - 1;
            if (nummer < 1) {
                nummer = ANTALL;
            }
            visPokemon();
        });

        // Pil til høyre: gå til neste. Fra den siste hopper vi til nr. 1
        neste.addEventListener("click", () => {
            nummer = nummer + 1;
            if (nummer > ANTALL) {
                nummer = 1;
            }
            visPokemon();
        });

        // Klikk på faktasetningen for å få en ny
        fakta.addEventListener("click", visTilfeldigFakta);

        // Piltastene på tastaturet virker også
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") forrige.click();
            if (event.key === "ArrowRight") neste.click();
        });

        visPokemon();  // Vis den første Pokémonen når sida lastes
    </script>
</body>
</html>
```
## CSS
Lag ei fil som heter `style.css` og skriv den slik:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f2f4f8;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

#kort {
    background-color: white;
    width: 500px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
}

#navn {
    color: #d63c3c;
    margin: 0 0 20px;
}

/* Pilene og bildet ved siden av hverandre */
#midten {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#bilde {
    width: 300px;
    height: 300px;
}

button {
    width: 50px;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
    background-color: #d63c3c;
    color: white;
    border: none;
    border-radius: 50%;  /* Gjør knappene runde */
    cursor: pointer;
}

button:hover {
    background-color: #b02e2e;
}

#fakta {
    margin: 20px 0 0;
    font-size: 18px;
    min-height: 50px;  /* Hindrer at kortet hopper når teksten endrer seg */
    cursor: pointer;
}
```
## Javascript
Lag ei fil som heter ``server.js` og skriv den slik:
```javascript
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
```

## Kjør applikasjonen
Husk å lagre alle filene dine!

Gå til terminalen og skriv inn:
```
node server.js
```

Gå så til linken du får opp. Viser PokeDex'en?

## Oppgave
Bruk OBS til å spille inn en film hvor du forklarer index.html og server.js linje for linje og send til læreren.