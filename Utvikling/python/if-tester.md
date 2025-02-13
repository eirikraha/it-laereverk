# If-tester i Python

Programmering kan en se på som et sett med instrukser vi gir til datamaskinen, og så følger datamaskinen instruksene til punkt og prikke. Av og til kan slike instrukser komme til et veiskille, og da må vi på forhånd fortelle programmet hvordan det skal velge. Dette gjør vi med if-tester (hvis-tester).

La oss ta et eksempel: Du er en baker i Østre Aker som baker kringler og julekaker. Mange kommer og kikker i vinduet ditt og **hvis** de har penger, så kan de få. Har de ikke, kan de gå.

Dette er et enkelt eksempel på en if-test i programmering. Du har en betingelse (har kunden penger?). **Hvis** svaret er ja, får kunden kjøpe. **Ellers** får kunden ikke kjøpe.

Skal vi programmere eksempelet med bakeren i Østre Aker, kan vi skrive koden som dette:

```python
har_penger = True  # Betingelsen: Har kunden penger?

if har_penger:
    print("Kunden kan kjøpe kringler og julekaker.")
else:
    print("Kunden har ikke penger og må gå.")
```

La oss gå gjennom eksempelet linje for linje.
```python
har_penger = True  # Betingelsen: Har kunden penger?
```
Første linje definerer en variabel og setter den til `True`.

```python
if har_penger:
```
Neste linje starter if-testen. Her står det `if` og så en betingelse bak. Kodeordet `if` forteller oss at vi skal sjekke om det som står bak er sant. Hvis det er sant, vil koden i blokka (den med innrykk) kjøres.
```python
    print("Kunden kan kjøpe kringler og julekaker.")
```
Denne linja inneholder koden som skal kjøres hvis betingelsen er oppfylt. I dette tilfellet skriver vi "Kunden kan kjøpe kringler og julekaker" til konsollen.

```python
else:
    print("Kunden har ikke penger og må gå.")
```
Hvis betingelsen ikke er sann, kjøres koden i `else`-blokka. Her skriver vi "Kunden har ikke penger og må gå" til konsollen.

## If-tester hvor du vil gi flere alternativer

Av og til vil vi sjekke for flere muligheter i en if-test. Da er det lurt å bruke `elif`.

La oss si at du har lyst å lage et spill som lar spilleren velge mellom ildkrefter, plantekrefter eller vannkrefter. Etter at spilleren har valgt, skal du gi en tilbakemelding på valget. I vårt eksempel velger spilleren ildkrefter og vi kan skrive koden som følger:
```python
valg = "ild"

if valg == "ild":
    print("Du valgte ildkrefter")
elif valg == "plante":
    print("Du valgte plantekrefter")
else:
    print("Du valgte vannkrefter")
```

Vi ser at denne koden er veldig lik den i det forrige eksempelet, men her legger vi til et alternativ i midten. Dette tester vi for med kommandoen `elif` som kan oversettes med "ellers hvis".

En ting som er viktig å merke seg med denne måten å gjøre if-tester på er at koden gås gjennom linje for linje. Hvis den øverste linja med `if valg == "ild"` stemmer, så blir ikke de to andre testene (`elif` og `else`) sjekket. I vårt tilfelle er ikke det så farlig, men hvis du vil sjekke for flere betingelser, så er dette viktig å være oppmerksom på.

## If-tester for variabler som ikke er `True`/`False`

Til nå har vi brukt if-tester på det vi kaller boolske verdier. Disse er som regel `True` eller `False`. If-tester sjekker om en betingelse er sann eller usann, og derfor er verdier som er `True`/`False` de enkleste å sjekke for. Likevel kan vi sjekke mange andre betingelser også.

Ofte har vi variabler som er tall, og vi vil gjerne sammenligne variabelen med et tall. Da må vi skrive betingelser hvor vi bruker det som kalles **sammenligningsoperatorer**. Nedenfor finner du mange eksempler på hva vi vil sammenligne og hvilken operator som blir brukt.

### If-test som sjekker om en variabel er større enn et tall
```python
tall = 10

if tall > 5:
    print("Tallet er større enn 5")
```

I eksempelet ovenfor definerer vi en variabel `tall` og setter den lik 10. If-testen på neste linje sjekker om variabelen `tall` er større enn 5 med sammenligningsoperatoren `>` (større enn). Hvis denne betingelsen stemmer, skriver programmet "Tallet er større enn 5" til konsollen.  
Legg merke til at dette eksempelet er uten et `else`-uttrykk. Koden fungerer fortsatt, men hvis `tall` hadde vært mindre enn 5, så hadde ikke if-betingelsen vært oppfylt, og da ville det ikke skjedd noe som helst.

### If-test som sjekker om en variabel er mindre enn et tall
Å sjekke om en variabel er mindre enn et tall er lett. Vi bare bytter til operatoren `<`.
```python
tall = 10

if tall < 15:
    print("Tallet er mindre enn 15")
```

### If-test som sjekker om en variabel er lik et tall
Når vi sjekker om en variabel er lik et tall, bruker vi `==`.
```python
tall = 10

if tall == 10:
    print("Tallet er lik 10")
```

### If-test som sjekker om en variabel er større enn eller lik et tall
For å sjekke om en variabel er **større enn eller lik** et tall, bruker vi `>=`.
```python
alder = 18

if alder >= 18:
    print("Du kan stemme")
else:
    print("Du må bli 18 før du kan stemme")
```

### If-test som sjekker om en variabel er ulik et tall
Ønsker vi å sjekke om en variabel er ulik et tall, bruker vi `!=`.
```python
tall = 10

if tall != 5:
    print("Tallet er ulik 5")
```

`!` betyr "not" i programmeringsspråk. På godt norsk kan vi si at det betyr "ikke". Derfor betyr `!=` at vi tester om noe er "ikke lik" noe annet.

## If-tester med flere betingelser sammen

Til nå har vi sett på if-tester hvor det bare er én betingelse som påvirker hvilken "vei" koden går. Som vi vet fra egen erfaring, er det ofte mer enn én faktor som påvirker våre valg. Slik er det i programmering også.

Når vi har mer enn én betingelse som påvirker veivalget til programmet, bruker vi det som kalles **logiske operatorer**. De vanligste logiske operatorene er `and` som betyr **OG** og `or` som betyr **ELLER**.

### If-tester med `and`
Når vi bruker **OG**-operatoren må to (eller flere) betingelser stemme samtidig for at if-testen skal slå inn. Et eksempel på dette kan være at mange land krever gyldig vaksinasjons- og visum ved ankomst. Dette kan vi bruke til å lage et program:
```python
visum = True
vaksinert = True

if visum and vaksinert:
    print("Du får reise til landet")
else:
    print("Du får ikke komme inn i landet")
```

### If-tester med `or`
**ELLER**-operatoren er litt annerledes. Når vi bruker denne kan vi fortsatt si flere betingelser, men så lenge én av dem stemmer, vil if-testen godta det. Hvis vi denne gangen ser på et litt rart land som godtar enten visum **eller** vaksinasjon, kan vi endre på eksempelet ovenfor:
```python
visum = False
vaksinert = True

if visum or vaksinert:
    print("Du får reise til landet")
else:
    print("Du får ikke komme inn i landet")
```

Som vi ser vil en if-test med `and` kreve at begge betingelsene er sanne, alt annet er ikke godt nok. `or`-tester er litt mer avslappa og godtar det meste, men minst én betingelse må være oppfylt.

## Oppgaver
1) Lag et program hvor du har variabelen `klasse`. Skriv så en if-test som skriver til konsoll om eleven går i 1., 2. eller 3. klasse.
2) Jobb videre med programmet fra oppgave 1). Legg til et `else`-uttrykk som skriver til konsoll om det kommer noe annet enn 1, 2 eller 3 i variabelen `klasse`.
3) Lag et program hvor du har variabelen `random_tall`. Skriv så fire if-tester som sjekker om ditt random tall er større enn, mindre enn, lik eller ulik 5.
4) Lag et program som har variablene `klasse` og `random_tall`. Skriv et program som sjekker om `klasse` og `random_tall` er mindre enn 5 begge to.
5) Endre programmet fra oppgave 4 slik at sjekker om `klasse` eller `random_tall` er mindre enn 5.
6) Forklar følgende uttrykk: Logisk operator, sammenligningsoperator, `OG` og `ELLER`.

## Bruk det du har lært
1) Lag et program hvor du har variabelen `vær` og en variabel `temperatur`. Lag et program som sjekker værtype og temperatur og gir anbefalinger ut fra dette. For eksempel kan output fra programmet være: "Det er sol og varmt, perfekt badevær" eller "Det snør og er kaldt. På tide å finne frem skiene". Finn på flere varianter selv.
2) Vi kan også ha if-tester inni if-tester. Lag et program med variablene `produktkostnad` og `kort_saldo`. Lag først en test som sjekker om `produktkostnad` er større enn 0 og sjekk deretter om `kort_saldo` er større enn `produktkostnad`. Gi tilbakemeldinger til konsoll i alle tilfeller.
