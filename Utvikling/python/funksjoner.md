# Funksjoner i Python

Programmeringsfiler kan ofte bli lange og uoversiktlige om vi ikke har god struktur og samler koden på en god måte. En viktig måte å rydde i kode på er å ta kodesnutter vi gjør mange ganger og samle dem i det vi kaller `funksjoner`.

En `funksjon` er enklest forklart som et stykke kode vi skriver én plass i kodefila og så `kaller` vi på den hver gang vi trenger å bruke funksjonen. Noen funksjoner er korte og gjør veldig lite, mens andre funksjoner kan være lange og `kalle` på andre funksjoner selv. Når vi kaller på en funksjon, skriver vi navnet på funksjonen med `()` bak navnet. Hvis funksjonen krever et eller flere `argument` (input som funksjonen gjør noe med), så skriver vi det inne i parantesen.

Hvis du har brukt denne ressursen til nå, så har du allerede brukt funksjonen `print()` en hel del. Som kjent skriver denne funksjonen det du putter inn i parantesen til konsoll. For eksempel kan vi skrive:
```python
print("Dette er en funksjon")
```
I eksempelet er `print()` funksjonen og `"Dette er en funksjon"` argumentet vi gir inn for at funksjonen skal gjøre noe med det.

## Hvordan lage sin egen funksjon

Å skrive sin egen funksjon er nokså enkelt. La oss lage en funksjon som får inn to variabler, `din_alder` og `min_alder`. Vi ønsker at funksjonen skal legge sammen alderne våre og så skrive resultatet til konsoll.

```python
def legg_sammen_aldre(din_alder, min_alder):
    var_alder = din_alder + min_alder
    print(f"Vår alder er {var_alder}")
```
La oss ta det steg for steg:
1) I eksempelet ser vi at vi innleder med kodeordet `def`. Dette bruker vi for å fortelle programmet at her kommer det en funksjon.
2) Deretter kommer navnet på funksjonen. Vi kaller funksjonen `legg_sammen_aldre`.
3) Etter navnet kommer det en parantes med to variabelnavn inni `(din_alder, min_alder)`. Dette er navnene vi gir variablene slik at vi kan bruke dem senere i koden.
4) Som vanlig betyr `:` at inni blokka nedenfor skal alt være en del av funksjonen.
5) `var_alder = din_alder + min_alder` lager en ny variabel som vi kaller `var_alder` og sier at den skal være lik summen av `din_alder` og `min_alder`.
6) `print(f"Vår alder er {var_alder}")` skriver resultatet til konsoll.

## Hvordan kalle på en funksjon

Eksempelet ovenfor viser hvordan vi lager (definerer) en ny funksjon. Hadde det vært alt som sto i koden, hadde koden ikke gjort noe som helst. En funksjon må `kalles` på før kodesnutten blir utført. Det kan vi gjøre slik:
```python
din_alder = 17
min_alder = 16

legg_sammen_aldre(din_alder, min_alder)
```
De to første linjene definerer variablene våre, og den siste linja kaller på funksjonen `legg_sammen_aldre` med de to variablene `din_alder` og `min_alder` som argument. Det koden vil gjøre når den kommer til kallet er å hoppe til stedet hvor funksjonen ble skrevet (definert) for å se hva den skal gjøre. Koden ovenfor er derfor helt lik om vi skulle ha skrevet:
```python
din_alder = 17
min_alder = 16

var_alder = din_alder + min_alder
print(f"Vår alder er {var_alder}")
```

## Hvorfor bruke funksjoner?

Når vi sammenligner eksemplene ovenfor ser vi at det egentlig er kortere å droppe funksjonen og bare skrive alt rett ut. Hvorfor skal vi da bruke funksjoner? Funksjoner virker best når det er kode som skal gjøres mange ganger, men stort sett er lik ellers. Når vi først har definert funksjonen én gang, kan vi kalle på den så mange ganger vi vil. Dette gjelder også vedlikehold av koden. Hvis det er en bit kode som gjøres igjen og igjen, men med en feil i seg, kan det være mye arbeid å finne alle stedene feilen forekommer og rette på den. Har vi heller lagt den gjentagende koden i en funksjon, kan vi gå til funksjonen for å rette opp i feilen der og det vil påvirke alle steder hvor funksjonen brukes automatisk.

## Hvordan få noe tilbake fra en funksjon

Vi har spart det beste med funksjoner til slutt. Funksjoner kan også gi noe tilbake. For at en funksjon skal gi noe tilbake, må vi skrive inn et `return`-uttrykk. Det gjør at funksjonen returnerer en verdi tilbake til der den ble kalt, og denne verdien kan så brukes videre.

For eksempel kan vi skrive:
```python
def endre_hp(angrepsskade, spiller_hp):
    ny_hp = spiller_hp - angrepsskade
    return ny_hp

spiller_hp = 20
fiende_angrep = 5

spiller_hp = endre_hp(fiende_angrep, spiller_hp)
print(f"Etter 1 angrep har spilleren {spiller_hp} HP.")
```
Vi ser at denne funksjonen ikke skriver noe til konsoll selv. I stedet gir vi `ny_hp`-variabelen tilbake (vi returnerer den) og så bruker vi den videre i koden.

## Navn på funksjoner

Funksjoner skal ha navn som beskriver hva funksjonen gjør, og de skrives med `snake_case` (små bokstaver og understreker mellom ordene). Du kan også legge inn en kommentar før funksjonen eller som første linje inne i funksjonen for å beskrive hva funksjonen gjør.

## Oppgaver

1) Lag en funksjon som heter `dobbelt_tall(tall)` som dobler tallet som blir gitt inn som argument.
2) Forklar når det er lurt å bruke funksjoner.
3) Forklar hva `return` gjør.
4) Lag en funksjon for å sjekke alderen til en person. La funksjonen returnere `True` hvis personen er over 18 år og `False` hvis personen er under 18 år.
5) Lag en funksjon som legger sammen to tall og returnerer svaret.
6) Pythagoras er en formel i matte som kan finne lengden på sidene i en rettvinklet trekant. Formelen er som følger: `a*a + b*b = c*c`. Skriv dette som en funksjon som returnerer `c**2`.
7) Bruk det siste eksempelet fra teksten og kall på `endre_hp` to ganger til.

## Større oppgave

1) Utvid det siste eksempelet. Lag en if-test som sjekker om `spiller_hp` er større enn 0. Hvis den er det, så angriper fienden igjen.
2) Legg til fienden sin HP og la spilleren angripe tilbake.
3) Klarer du å endre funksjonen `endre_hp` slik at `angrepsskade` blir tilfeldig? (Tips: Søk opp hvordan du bruker `random`-biblioteket i Python.)