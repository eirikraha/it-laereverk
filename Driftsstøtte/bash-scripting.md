# Bash-scripting
Dette dokumentet antar at du enten har lest gjennom Systemadministrasjon eller har en grunnleggende forståelse for Unix-kommandoer.

## Grunnleggende om Bash-script
Bash-script lagres som filtypen `.sh`.
For å kjøre et bash-script må en stå i samme mappe som scriptet i terminalen og skrive `<navn på bash-fil>.sh`

## Grunnleggende om Bash-syntax
Ethvert Bash-script bør starte med linja
```bash
#!usr/bin/env bash
```
Dette forteller prorammet hvor `Path` til Bash er.

Etter dette bør den neste linja være
```bash
set -euo pipefail
```
Dette forteller programmet at det skal avslutte ved feil og ikke fortsette.

Kommentarer i bash innledes med `#`

Du kan kjøre flere kommandoer på samme linje dersom du skiller dem med `;`

### Variabler
Variabler i Bash skrives på formen `<variabelnavn> = <variabelverdi>`. Eksempel: `mittNavn = "Thomas"`. Når en senere i programmet skal referere til variabelen, så skriver en `$<variabelnavn>`. Eksempel: `echo $mittNavn`.

Variabler kan også gis inn som argument når en kjører et script. La oss anta at vi har et script som heter `minKommando.sh` og det skal ta imot et fornavn og etternavn for så å skrive dem ut på samme linje. Når vi kjører programmet kan vi da skrive: `minKommando.sh <fornavn> <etternavn>`. På denne måten gir vi inn variablene `fornavn` og `etternavn` til scriptet. I selve scriptet kan vi hente ut disse verdiene ved å referere til variabel ``$1`` for fornavn og variabel `$2` for etternavn. Scriptet vil da se slik ut:
```bash
#!usr/bin/env bash
echo "Tar i mot fornavn: $1 og etternavn: $2"
echo "Navnet er: $1 $2"
```

Hvis en skal gå gjennom alle argumenter som ble gitt sammen med kommandoen, kan en skrive ``$@``

Hvis en skal telle hvor mange argument som ble gitt, kan en skrive ``"$#"``

Du kan lese mer om [variabler her](https://www.w3schools.com/bash/bash_variables.php)
### IF/ELSE
IF-statements skrives på følgende form i Bash:
```bash
alder = 19
if [ $alder -gt 18 ]; then
    echo "Du er myndig"
elif [ $alder -eq 18 ]; then
    echo "Du er akkurat myndig"
else
    echo "Du er ikke myndig"
fi
```
Legg merke til at if-blokken starter med ordet `if` før selve sjekken kommer inne i hakeparanteser []. Etter sjekken står det et `;` for å vise at sjekken er ferdig. `then` er vanlig i eldre kodespråk for å indikere at nå skjer det noe etter noe annet. I dette tilfellet skjer en `echo`-kommando hvis, og bare hvis, testen stemmer. Deretter kommer `elif` som fungerer likt if. Til slutt kommer `else` med sin egen `echo` og blokken avsluttes med bokstavene `fi` som er if baklengs.

Legg merke til at `sammenligningsoperatorene` er annerledes i Bash enn i mange andre språk. Hvis du vil [lære mer om operatore i Bash, sjekk ut denne sida.](https://www.w3schools.com/bash/bash_operators.php)

### Loops
Se denne sida: [https://www.w3schools.com/bash/bash_loops.php](https://www.w3schools.com/bash/bash_loops.php)

### Funksjoner
Se denne sida: [https://www.w3schools.com/bash/bash_functions.php](https://www.w3schools.com/bash/bash_functions.php)

### Arrays
Se denne sida: [https://www.w3schools.com/bash/bash_arrays.php](https://www.w3schools.com/bash/bash_arrays.php)

## Eksempelscript
La oss si at vi ønsker å automatisere oppsett av brukere. Vi ønsker en kommando som tar brukernavn (ett eller flere) og gir hver bruker sin egen gruppe, sitt eget område og ber dem sette opp et passord ved første gang de logger på. Da vil scriptet se noenlunde slik ut:
```bash
#!usr/bin/env bash #Gir path til bash
set -euo pipefail #avslutter programmet ved feil

if [ $# -eq 0]; then #Sjekker om det er gitt inn argument
    echo "Du må gi inn minst ett brukernavn" #Beskjed til bruker om hva som må gjøres for at programmet skal kjøre
    exit 1 #avslutter programmet
fi #avslutter if-løkka

midlpass = "Lundeneset1234"  #midlertidig passord

for bruker in $@; do   #går gjennom alle argument gitt inn med kommandoen
    if id -u "$bruker" >/dev/null 2>&1; then  #Sjekker om brukeren finnes allerede
        echo "Bruker '$bruker' finnes allerede – hopper over."
        continue
    fi

    echo "Oppretter bruker $bruker" #tekst til bruker
    sudo useradd -m "$bruker" #Legger til bruker -m lager hjemmeområde, brukernavn i hermetegn for mer robust kode
    echo "$bruker:$midlpass" | sudo chpasswd #skriver brukernavn og passord til terminal. | sender echo inn i neste kommando. sudo chpasswd endrer passord
    sudo chage -d 0 "$bruker" #endrer alder (change age = chage) på passord, -d (dato) for sist endret passord til 0 som betyr at passord er utløpt
    echo "Bruker $bruker er opprettet og har hjemmeområde ved /home/$bruker og må bytte passord ved første innlogging" #tekst til bruker
done #avslutter for-løkke
```
OBS! Sciprtet ovenfor er ikke testet på server ennå