# Variabler i Python

## Boksforklaring

For eksempel kan vi skrive følgende:
```python
min_alder = 17
```

Her har vi laget en "boks" med navnet "min_alder". Denne boksen inneholder tallet 17.

```plaintext
+---------+
|  17     |  <- "min_alder"
+---------+
```

Når vi programmerer og vil bruke en variabel, skriver vi navnet på variabelen, men da mener vi egentlig verdien oppi. For eksempel kan vi skrive:

```python
min_alder + 2
```

Dette forteller datamaskinen at den skal finne variabelen (boksen) "min_alder", hente ut verdien derfra (17) og legge til 2, slik at vi får 19.

Variabler er en del av de grunnleggende byggesteinene vi bruker i programmering. 

---

La oss ta en titt på eksempelet ovenfor og gå gjennom hva som skjer steg for steg:
```python
min_alder = 17
```

### `=`
I Python brukes `=` som en tildelingsoperator. Den sier at variabelnavnet skal få en bestemt verdi.

### `min_alder`
"min_alder" er navnet vi gir variabelen. Navn på variabler bør være beskrivende for hva de inneholder.

### `17`
Dette er verdien som lagres i variabelen. Verdiene kan være heltall, desimaltall, tekst eller boolske verdier. 

## Initialisere variabler

Å initialisere betyr å gjøre en variabel klar til bruk. Det vanligste er å gi den en verdi med en gang:
```python
min_alder = 17
```
Hvis variabelen ikke skal endres, kan vi velge å bare ikke oppdatere verdien senere.

Det er også mulig å opprette en variabel uten å gi den en verdi med en gang:
```python
min_alder = None
```
Senere i koden kan vi oppdatere variabelen:
```python
min_alder = 16
```

## Endre variabler
Variabler kan oppdateres underveis:
```python
min_alder = 17
print("Min alder er:", min_alder)

min_alder = 18
print("Min oppdaterte alder er:", min_alder)
```
Utdata:
```
Min alder er: 17
Min oppdaterte alder er: 18
```

## Variablenes innhold
Variabler kan inneholde forskjellige typer data. Her er noen eksempler:

### Heltall
Heltall (integer) er tall uten desimaler:
```python
min_alder = 17
```

### Desimaltall
Desimaltall (float) er tall med desimaler:
```python
min_lengde = 1.7
```

### Tekst (strenger)
Tekst (string) er tekstverdier omgitt av anførselstegn:
```python
mitt_navn = "Espen"
```

### Boolsk
Boolsk (boolean) variabler kan enten være `True` eller `False`:
```python
norge_er_et_land = True
bergen_er_et_land = False
```

## Navngi variabler
Variabler i Python bør ha navn som er lette å lese og forstå. En vanlig konvensjon er å bruke snake_case:
```python
dette_er_et_langt_variabelnavn = 42
```

# Oppgaver
1) Forklar forskjellen mellom heltall, desimaltall, tekst og boolske verdier.
2) Skriv et enkelt program som definerer en variabel kalt `min_alder` og skriver den til konsoll:
```python
min_alder = 17
print(min_alder)
```
3) Forklar hva som skjer hvis du oppdaterer en variabel underveis i koden.
