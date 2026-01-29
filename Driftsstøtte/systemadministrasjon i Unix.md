# Systemadministrasjon i Unix
Når vi har opprettet et Unix-system (som for eksempel en Ubuntu-server), har vi ofte et ønske om å administrere systemet. Systemadministrasjon handler om å opprette en god filstruktur, legge til og fjerne brukere, sørge for korrekte tilganger og holde systemet ved like. For å gjøre dette må vi ha et språk for å kommunisere med datamaskinen. For å gjøre dette trenger vi et verktøy for å kommunisere med systemet. På Unix-systemer skjer dette som regel via terminalen ved hjelp av forhåndsdefinerte kommandoer. Forskjellige operativsystem har ulike kommandoer. I denne teksten skal vi se nærmere på kommandoene som trengs i et Unix-system.

## Bash og shell-script
Et Shell (skall) er en tekst-basert flate for å kommunisere med datamaskiner. Bash står for "Bourne Again SHell". Dette er et veldig popluært Shell og brukes til å navigere, administrere filer og styre systemet.

## Historien til Bash
Bash ble utviklet av Brian Fox i 1989 som et alterantiv til det eksisterende Bourne Shell. Over tid har det utviklet seg og blitt et robust språk med mange funksjoner.

## Viktige kommandoer
Bash har mange forskjellige kommandoer. Noen viktige er:
- ``sudo`` (lar deg kjøre kommandoer som administrator)
- [``ls``](https://www.w3schools.com/bash/bash_ls.php) (lister opp innholdet i mappa du står i)
- [``cd``](https://www.w3schools.com/bash/bash_cd.php) (lar deg navigere til ei annen mappe)
- [``pwd``](https://www.w3schools.com/bash/bash_pwd.php) (printer "working directory", dvs viser hvilken mappe du "står i")
- [``echo``](https://www.w3schools.com/bash/bash_echo.php) "*tekst*" (viser *tekst* i neste linje på kommandolinja)
- [``cat``](https://www.w3schools.com/bash/bash_cat.php) "*filnavn*" (viser innholdet til ei fil rett i terminalen)
- [``cp``](https://www.w3schools.com/bash/bash_cp.php) (kopierer ei fil)
- [``mv``](https://www.w3schools.com/bash/bash_mv.php) (flytter ei fil)
- [``rm``](https://www.w3schools.com/bash/bash_rm.php) (sletter ei fil permanent)
- [``mkdir``](https://www.w3schools.com/bash/bash_mkdir.php) (oppretter ei ny mappe)
- ``ip a`` (viser infomrasjon nettverkskonfigurasjonen)

Hvis du vil lese mer om disse kommandoene; hva de gjør og hvilke ekstrakommandoer en kan legge til, gå til [W3Schools.com](https://www.w3schools.com/bash/bash_commands.php)


## Brukere og grupper
I unix-systemer kan en sette opp én eller flere brukere for å strukturere tilganger og ansvarsområder. Hver av disse brukerne kan tilhøre én eller flere grupper, men de må ha én gruppe som er deres primærgruppe.  Ved å bruke kommandoen `adduser <username>` oppretter du en bruker med det navnet du skrev i feltet `<username>`. Det opprettes også en tilhørende gruppe med samme navn som blir satt som brukerens primærgruppe.

Hver bruker som opprettes med `adduser` får også sitt eget hjemmeområde under `/home/<username>` som bare brukeren får tilgang til.

```
Fun fact: adduser er ikke en innebygd Bash‑kommando, men et Perl‑skript som automatiserer oppretting av brukere. Det egentlige systemverktøyet heter useradd. Hvis du bruker useradd, må du selv spesifisere flere flagg, opprette hjemmekatalog manuelt og sette passord etterpå.
```

### Viktige kommandoer for brukere og grupper
- `adduser <username>` (legger til ny bruker)
- `deluser <username>` (sletter bruker)

## Tilgangsstyring
Når et system har brukere og grupper, er det naturlig å bruke det til å gi tilganger til de ulike gruppene og brukerne. Dette kalles *tilgangsstyring*. Et godt system har noen brukerspesifikke tillatelser (som hjemmeområde), men at de fleste andre tilganger er styrt ut fra gruppetilhørighet. Dette skaper et mer robust system som sikrer at tillatelser og tilganger ikke er personavhengig, men heller systemavhengig.

Hver fil i Unix-system er satt opp med én eier og éi eiergruppe. Utover dette har filen et sett med instrukser på hvem som kan lese (r, read), endre (w, write) og kjøre (x, execute) filen.  
Denne tilgangen kan skrives kjapt med tre bokstavgrupper med de tre bokstavene "r, w, x" i hver gruppe. Har du en fil med tilgangene `rwxr-xr--` så betyr det at eierbruker har tilgang til read, write og execute (første tre bokstaver `rwx`), eiergruppe har tilgang til read og execute, men ikke write (midterste tre bokstaver `r-x`) og andre har kun tilgang til å lese (siste tre bokstaver `r--`).

Det blir litt langt å forholde seg til 9 bokstaver og derfor kan tilgangsnivå ofte representert med tall istedenfor:
- 0: ingen tilgang
- 1: kun executetillatelse 
- 2: kun skrivetillatelse
- 3: skrive- og executetillatelse
- 4: kun lesetillatelse
- 5: lese- og executetillatelse
- 6: lese- og skrivetillatelse
- 7: lese-, skrive- og executetillatelse

Hvis vi tar en ny kikk på tillatelsen vi så på ovenfor `rwxr-xr--`, kan dette skrives som `754` med tall. Når en skriver kommandoer i terminalen er det vanlig å bruke tall. De vanligste kommandoene å bruke er:
- [`chmod`](https://www.w3schools.com/bash/bash_chmod.php) (endrer filtilgang)
- [`chown`](https://www.w3schools.com/bash/bash_chown.php) (endrer fileier)
- [`chgrp`](https://www.w3schools.com/bash/bash_chgrp.php) (endrer gruppeeier)

## Automatisering
Å kunne grunnleggende Bash‑kommandoer er nyttig når du skal gjøre enkle oppgaver på en server, men det er først når du begynner å automatisere arbeid at Bash virkelig viser styrken sin. Automatisering gjør du ved å lage såkalte shell-script. Dette er filer som inneholder Bash-kommandoer som kjøres i rekkefølge.

Et eksmepel på dette kan være scriptet `hello.sh`:
```bash
echo "Hello, World!"
```

Her bruker vi kommandoen `echo` for å skrive teksten "Hello, World!" i terminalen.

---
Selv om dette eksemplet er trivielt, illustrerer det poenget: alt du kan skrive i terminalen, kan du også legge i et script. Og det er nettopp denne muligheten som gjør Bash nyttig i drift og serveradministrasjon. Mange oppgaver er tidkrevende å gjøre manuelt, særlig når de må gjentas mange ganger, og da er scripts en effektiv måte å redusere feil og spare tid på.

Bash er derfor et kraftig språk med mange muligheter. Det er et språk med egen syntax og vanlige element som variabler, if, for-loops og mye mer. Dokumentet ``bash-scripting.md`` vil gå i dybden på dette.

## Oppgaver
1. Hva betyr begrepet systemadministrasjon, med egne ord?
2. Nevn tre oppgaver som en systemadministrator må kunne gjøre.
3. Hvorfor vil vi bruke `sudo`?
4. Kommandoen `mkdir` er en sammensetning av forkortelsene `mk` og `dir`, hva står disse forkortelsene for?
5. Forklar forskjellen på ``cp``, ``mv`` og ``rm``.
6. Opprett ei mappe, opprett ei fil i mappa. Kopier fila til ei annen mappe, slett mappa som nå er tom (OBS! Vær veldig forsiktig når du bruker `rm` for å være sikker på at du bare sletter det du vil slette.)
7. Hva er forskjellen på en bruker og en gruppe?
8. Hvorfor er det lurt at hver bruker har sin egen gruppe?
9. Hva skjer når du kjører adduser elev01?
10. Hvor på systemet finner du hjemmeområdet til en bruker?
11. Hva er forskjellen på adduser og useradd? (kort)
12. Hva står bokstavene r, w og x for?
13. Hvem gjelder den midterste gruppen av tillatelser (rwxr-xr--)?
14. Konverter disse tilgangene til tall:
    - rwx------
    - rwxr-xr-x
    - rw-r--r--
15. Hva gjør denne kommandoen? `sudo chown elev01:elev01 fil.txt`