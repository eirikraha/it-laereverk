# Arrays i Python
Arrays ligner veldig på lister. Begge to er en datastruktur som lar oss lagre flere verdier i en enkelt variabel. Forskjellen på ei liste og en array, er at i en array kan vi for eksempel multiplisere alle elementene i arrayen på én gang.

La oss se på et eksempel hvor vi sammenligner lista `liste_med_tall` og arrayen `array_med_tall`
```python
import numpy as np

liste_med_tall = [1, 2, 5, 10]
array_med_tall = np.array([1, 2, 5, 10])

#Multipliserer alle tall i lista med to:
for tall in liste_med_tall:
    tall = tall*2

#Multipliserer alle tall i arrayen med to:
array_med_tall = array_med_tall*2
```

I programmeringsspråk kaller vi pluss, minus, gange og deling for matematiske operasjoner. Det vi ser fra eksempelet er at det er mye enklere å gjøre matematiske operasjoner med arrays.

## Numpy
I første linje til eksempelet ovenfor står det `import numpy as np`, men hva betyr det?  
Når vi programmerer i python har vi noen innebygde funksjoner. For eksempel kan vi skrive `print()` og bruke den i hvilket som helst program. Siden python-språket kan brukes til veldig mye forskjellig, så er ikke alle funksjoner med som standard. Da må vi av og til legge til ekstra selv. Disse ekstrafunksjonene finner vi i bibliotek med ekstrafunksjoner. Numpy er et slikt bibliotek. Ved å skrive `import numpy` i begynnelsen av koden, forteller vi at vi ønsker å bruke disse funksjonene. Videre legger vi til `as np` for å si at når vi bruker funksjoner fra Numpy-biblioteket, så skal vi skrive `np.` før funksjonsnavnet. Dette hjelper koden din til å være oversiktlig og enkel.

Da vi brukte `numpy`-biblioteket i forrige eksempel skrev vi `array_med_tall = np.array([1, 2, 5, 10])`. Her bruker vi funksjonen `array` fra `numpy`-biblioteket til å si at ``[1, 2, 5, 10]`` skal være en array.

## Viktige funksjoner i numpy
Det finnes mange andre funksjoner i `numpy`-biblioteket. Her er noen av dem:

### np.linspace
np.linspace lager en array hvor alle elementene er jevnt fordelt.
```python
linspace = np.linspace(0, 10, 5) #Vi vil ha fem tall fordelt jevnt fra 0 til og med 10
print(linspace) # [ 0.  2.5  5.  7.5 10. ]
```

### np.zeros
np.zeros lager en array hvor alle elementene er 0.
```python
nuller = np.zeros(5)
print(nuller) # [0, 0, 0, 0, 0]
```

### np.ones
Samme som np.zeros(), bare med 1'ere istedenfor 0'er. 

### np.random
np.random lager en array hvor alle elemenete er tilfeldig valgte.

## Når bruker vi arrays?
Arrays har mange bruksområder, men de er spesielt nyttige når vi skal  lage grafer, regne på statistikk og lage modeller.