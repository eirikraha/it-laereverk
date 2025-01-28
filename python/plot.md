# Plotting 

Det å plotte i programmering betyr å lage en graf. Dette er ekstra nyttig å kunne dersom en jobber mye med naturfag, statistikk eller visualisering av data.

I kapittelet om [arrays](arrays.md) lærte vi om biblioteker. For å plotte trenger vi flere funksjoner enn det som er standard i python og da må vi importere fra biblioteket `matplotlib.pyplot`. Her får vi mange funksjoner som hjelper oss å lage grafer og illustrere dataene våre.

```python
import matplotlib.pyplot as plt

# Data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Lage et plot
plt.plot(x, y)
plt.title("Eksempel på plot")
plt.xlabel("X-akse")
plt.ylabel("Y-akse")
plt.show()
```

I dette eksempelet lager vi to lister, `x` og `y`. Disse tallene vil vi bruke til å lage en graf. Derfor skriver vi `plt.plot(x,y)`. 
- `plt` betyr at vi vil bruke en funksjon fra `matplotlib.pyplot`-biblioteket.
- `plot` betyr tegn en graf
- ``(x, y)`` er argumentene vi gir til `plot()`. `x` gir verdiene vi vil ha på x-aksen og `y` gir verdiene vi vil ha på y-aksen.

`plt.xlabel` og `plt.ylabel` gir oss teksten vi vil ha under henholdsvis x- og y-aksen.  
Til slutt skriver vi ``plt.show()`` som  forteller koden at den skal åpne et vindu for å vise figuren.

## Plotting av flere grafer
Hvis vi ønsker flere grafer på samme plot, så skriver vi bare to `plt.plot()`-kommandoer:

```python
import matplotlib.pyplot as plt

# Data
x = [1, 2, 3, 4, 5]
y1 = [2, 4, 6, 8, 10]
y2 = [1, 2, 3, 4, 5]

# Plotting
plt.plot(x, y1, label="Linje 1", color="blue") # Graf 1
plt.plot(x, y2, label="Linje 2", color="green") # Graf 2
plt.title("Flere datasett")
plt.xlabel("X-akse")
plt.ylabel("Y-akse")
plt.legend()
plt.show()
```
Her har vi også lagt til `plt.title()` som skriver en overskrift på plottet og `plt.legend()` som lager en boks for å vise hva de forskjellige linjene heter.  
På selve plot-funksjonen ser vi at det er lagt til to nye argument, `label` og `color`. `label` er navnet på den enkelte grafen og `color` er fargen den grafen får.

## Histogram
Hvis vi ønsker å heller lage histogram, så kan vi det også:
```python
# Data
import numpy as np
import matplotlib.pyplot as plt

data = np.random.normal(0, 1, 1000)  # Generer 1000 tilfeldige verdier

# Plot histogram
plt.hist(data, bins=30, color="purple")
plt.title("Histogram")
plt.xlabel("Verdi")
plt.ylabel("Frekvens")
plt.show()
```

Her bruker vi `plt.hist` istedenfor `plt.plot`. Dette betyr at vi lager histogram fremfor graf.

## Flere nyttige matplotlib.pyplot-funksjoner
### plt.savefig()
`plt.savefig` lar deg lagre plotet ditt på pcen din. Bare skriv inn navnet på plottet og legg til filtype (.png eller .jpg). Da vil det lagres i samme mappe som scriptet ditt ligger i. For eksempel kan en skrive:
```python
import matplotlib.pyplot as plt

# Data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Lage og lagre et plot
plt.plot(x, y)
plt.title("Lagre plot")
plt.xlabel("X-akse")
plt.ylabel("Y-akse")
plt.savefig("plot.png")  # Lagre plottet som en PNG-fil
plt.show()
```

### plt.xlim / plt.ylim
Av og til vil vi begrense hvor mye av x-aksen eller y-aksen vi ser. Da er det nyttig å bruke `plt.xlim` eller `plt.ylim`
```python
import matplotlib.pyplot as plt

# Data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Tilpasse akser
plt.plot(x, y)
plt.title("Tilpassede akser")
plt.xlabel("X-akse")
plt.ylabel("Y-akse")
plt.xlim(2, 4)  # Viser kun delen av grafen mellom x = 2 og x = 4
plt.ylim(4, 8)  # Viser kun delen av grafen mellom y = 4 og y = 8
plt.show()
```