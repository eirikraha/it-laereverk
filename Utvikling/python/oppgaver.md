# Python-oppgaver
Nedenfor kommer det en del oppgaver knyttet til Python. De blir vanskeligere etter hvert som du jobber deg nedover. Det vil også stå hvilke forkunnskaper du trenger før hver sekson med oppgaver

## Forkunnskap: Variabler og print()
1) Lag et program med variabelen ``min_alder``. Sett denne variabelen lik din alder og print med kommandoen print(min_alder)
2) Fortsett på forrige program. Legg til 10 til din alder og print resultatet.
3) Lag en ny variabel som du kaller ``ny_variabel`` og legg sammen de to variablene, trekk dem fra hverandre, multipliser (gang) dem sammen og del dem på hverandre. Print hvert mattestykke.
4) Lag en ny variabel kalt `tall` og gi den en verdi. Print variabelen. Oppdater `tall` med å legge til 5, print `tall` på ny. Oppdater `tall` igjen ved å gange med to. Print så `tall` på ny. Du skal da få et nytt tall for hver ``print(tall)``

## Forkunnskap: Variabler og for-løkker
1) Lag ei for-løkke som teller fra 1 til 10.
2) Lag ei liste med navn på fem bilmerker (eller fem farger dersom du ikke kan fem bilmerker), lag ei for-løkke som går gjennom lista.

## Forkunnskap: Variabler og if-tester
1) Definer en variabel `tall = 12`. Skriv en if-test som sjekker om tall er større enn ti.
2) Legg til en else-del av if-testen i forrige oppgave. Oppdater `tall` slik at du får testet både if og else.

## Forkunnskap: Variabler, fuksjoner
1) Definer en funksjon som tar ett navn som argument og skriver "Velkommen, {navn}".
2) Definer en funksjon som tar ett tall som argument og skriver "Tallet ditt er {tall}".
3) Definer en funksjon som tar to tall som argument og skriver "Dine to tall sammenlagt er {tall1 + tall2}".
4) Definer en funksjon som tar to tall som argument og returnerer produktet av dem (gangner dem sammen).
5) Definer en funksjon som tar to tall som argument og regner ut `c^2` med Pythagoras-formel (`a^2 + b^2 = c^2`).
6) Definer en funksjon som tar to tall som argument og regner ut `c` med Pythagoras-formel (`a^2 + b^2 = c^2`).

## Forkunnskap: Variabler, for-løkker, if-tester og funksjoner
1) Lag et program som:  
- Bruker en variabel for å lagre en startverdi.  
- Bruker en funksjon til å doble verdien.  
- Bruker en for-løkke til å kjøre funksjonen 5 ganger.  
- Bruker en if-test til å sjekke om verdien er over 100 etter hver runde.  

## Forkunnskap: Arrays og plot
1. Lag et program som plottet en graf basert på følgende data:
    - `x = [0, 1, 2, 3, 4, 5]`
    - `y = [0, 1, 4, 9, 16, 25]`

    Husk å legge til tittel, samt etiketter på x- og y-aksen.

2. Bruk følgende datasett til å lage en graf som viser to forskjellige linjer i samme plot:
    - `x = [0, 1, 2, 3, 4, 5]`
    - `y1 = [0, 1, 4, 9, 16, 25]` (kvadratiske tall)
    - `y2 = [0, 1, 8, 27, 64, 125]` (kubiske tall)

    Bruk `label` for å gi linjene navn og legg til en legende.

3. Generer 1000 tilfeldige tall mellom -5 og 5 ved hjelp av `numpy.random.normal`. Lag et histogram av dataene med 20 søyler. Sett fargen til blå.

4. Plott en graf av følgende data:
    - `x = [1, 2, 3, 4, 5]`
    - `y = [10, 20, 30, 40, 50]`

    Legg til en tittel og etiketter for aksene, og lagre grafen som en PNG-fil med navnet `min_graf.png`.

5. Bruk følgende data til å lage en graf:
    - `x = [0, 1, 2, 3, 4, 5]`
    - `y = [0, 2, 4, 6, 8, 10]`

    Bruk `xlim` for å vise bare verdier mellom 1 og 4 på x-aksen, og bruk `ylim` for å vise verdier mellom 2 og 8 på y-aksen.
