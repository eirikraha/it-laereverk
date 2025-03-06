# Git og github

## Hva er Git og GitHub?
Git og GitHub brukes daglig av enormt mange utviklere verden over. Det er et nyttig redskap for å sikre deling, kontroll og testing av kode. Git er selve kjernen i det hele og er et program som du installerer lokalt på PCen din. Når Git er installert, kan det brukes til å spore endringer i filer og kode som du jobber med på maskinen din. En slik samling med kode kalles et ``repository``. Et repository kan være lite og inneholde noen få filer eller det kan være enormt stort og inneholde hele program.

GitHub er en av mange tjenester som kan brukes for å lagre og samarbeide om Git-repositories på nett. På GitHub kan en lage både offentlige og private repositories, noe som gjør at du kan jobbe med noe helt privat og ha det lagret hos GitHub (i tillegg til din lokale PC) eller du kan dele det med alle andre. Da kan alle andre laste ned ditt repository og så laste opp sine forslag til endringer på koden din.

## Hvorfor bruker vi Git og GitHub?
Git sin viktigste oppgave er å vite hvilke endringer som har blitt gjort i hvert repository og hvilken versjon som gjelder nå. På denne måten kan en se utviklingen til et prosjekt, men en kan også gå tilbake til gamle versjoner. Dette kalles ``versjonskontroll``.

GitHub sin viktigste oppgave er å legge til rette for lettvindt bruk av Git, deling på tvers og backup av koden din.

Enkelt sagt er Git et verktøy for versjonskontroll, mens  GitHub er en Skyplattform for å lagre og dele Git-prosjekter.

Vi bruker derfor Git og GitHub for å:
1. Vite hvilken versjon vi er på og spore endringer
2. Samarbeid på tvers
3. Bruke GitHub til å automatisere kodetesting (mer om det i [kapittelet om testing](https://www.lvs.no))

## Hvordan setter vi opp Git og GitHub?
Å sette opp Git og GitHub er nokså enkelt. Følg denen guiden for å sette det opp raskt og enkelt:
1. Lag deg en bruker hos [GitHub](https://www.github.com).
2. Last ned Git fra [git-scm.com](https://git-scm.com/)
3. Installer Git
    - Hvis du lurer på om du har Git fra før, så kan du gå til Terminal og skrive `git --version`.
4. Når Git er installert, må du konfigurere Git med egen bruker i VSCode. Åpne VSCode og skriv:
```sh
git config --global user.name "Ditt Navn"
git config --global user.email "din@email.com"
```
5. Logg inn på GitHub fra VSCode ved å installere exstension GitHub Pull Requests og log inn.

## Lag et Git-repo
Nå som vi har satt opp Git og GitHub, ønsker vi å bruke det. Da må vi først lage et Git-repository som vi kan bruke:
1. Gå til din brukerside på GitHub og velg "New Repository"
    - Sett repo som public i denne omgang
2. Når du har laget repositoryet vil du få en klone-link til repositoryet. Denne kopierer du og tar med deg videre.
    - Eksempel: Når jeg med min github-bruker: "eirikraha" lager et repository som heter "opplaeringsrepo", får jeg klone-linken: "https://github.com/eirikraha/opplaeringsrepo.git"
    - Når du har opprettet et repository på GitHub, får du en lenke du kan bruke til å klone det til din lokale PC. Kloning betyr at du laster ned en kopi av repoet og kan jobbe videre med det lokalt.
3. Gå til VSCode sin velkomst-side. Velg Start -> Clone Git Repository
4. Lim inn klone-linken og velg et sted på din lokale PC hvor repositoryet skal lagres. 
5. Velg åpne destinasjonen.

Du vil nå stå i VSCode som vanlig i mappa som du valgte for å lagre Git-repositoryet lokalt. Det ser kanskje helt vanlig ut, men du vil se at det begynner å skje noe når du skriver kode.

I VSCode sitt Explorer-vindu:
1. Velg "New File" og kall den test.txt
2. Legg merke til at filnavnet blir grønt og fanen for fila får en U på siden av navnet.
3. Skriv noe i test.txt og lagre fila
4. Helt til venstre i VSCode vil du nå se at et av symbolene har fått en blå notification-sirkel med et ettall inne i seg. Dette er Source Control (versjonskontroll). Trykk på symbolet.
5. Explorer-ruta endrer seg nå til Source Control-ruta. Her får du en oversikt over hvilke filer som har blitt endret. Øverst ser du en blå knapp hvor det står: Commit. Trykk på pil ned til høyre for den og velg "Commit & Push"
    - Commit lagrer endringene dine lokalt på PC-en, mens Push sender dem til GitHub, slik at de er tilgjengelige på nett.
6. Du blir spurt om du vil lagre, trykk ja
7. Du får nå opp ei fil med mye grønn skrift. Etter alle #-tegnene kan du skrive en liten kommentar om hva du har endret på. I dette tilfellet kan du skrive "Lagde test.txt"
8. Trykk på ✔️-tegnet oppe til høyre.
9. Gå til github og finn repositoryet ditt der.
10. Du vil nå se at du har lastet opp fila di til GitHub. Bra jobba!

## Forking et Repository og Jobbe med det i VSCode

Når du jobber med prosjekter på GitHub, hender det at du vil bidra til et repository som du ikke eier. I slike tilfeller bruker vi **forking**.  
En **fork** er en kopi av et annet GitHub-repository, som du får full kontroll over på din egen konto. Dette lar deg gjøre endringer uten å påvirke originalprosjektet.

Etter å ha laget en fork, kan du:
- Jobbe med koden i din egen versjon av repoet.
- Gjøre endringer lokalt på PC-en din via VSCode.
- Foreslå endringene til det originale prosjektet via en **Pull Request**.

### **1. Lag en fork av et repository**
1. Gå til et GitHub-repositoret [it-laereerk](https://github.com/eirikraha/it-laereverk)
2. Trykk på **Fork**-knappen øverst til høyre.
3. GitHub lager nå en kopi av repoet på din egen GitHub-konto.
4. Når forken er ferdig, blir du automatisk sendt til din egen versjon av repoet.

### **2. Klone forken til din lokale PC via VSCode**
1. Åpne **VSCode**.
2. Gå til **Source Control**-panelet (ikonet med tre linjer og prikker).
3. Trykk på **Clone Repository**.
4. Velg **"Clone from GitHub"**.
5. Logg inn med GitHub-kontoen din hvis du ikke har gjort det før.
6. Velg **forken din** fra listen over tilgjengelige repositorier.
7. Velg en lokal mappe der repoet skal lagres.
8. Når kloningen er fullført, trykker du på **Open Repository** for å åpne det i VSCode.

### **3. Gjøre endringer og committe via GUI i VSCode**
1. Åpne en fil i repositoryet og gjør en liten endring.
2. Trykk på **Source Control**-ikonet i venstre meny.
3. Endrede filer vises nå i listen. Trykk på dem for å se hva som er endret.
4. Skriv en **commit-melding** i tekstfeltet øverst, f.eks. `"Rettet en skrivefeil"`.
5. Trykk på **Commit**-knappen (✔️).
6. Trykk på **Sync Changes** (🔄) øverst i Source Control-panelet for å **pushe** endringene til din fork på GitHub.

### **4. Opprette en Pull Request (PR)**
1. Gå til din fork på **GitHub**.
2. Klikk på **Contribute** → **Open Pull Request**.
3. Skriv en kort beskrivelse av hva du har endret.
4. Trykk på **Create Pull Request**.
5. Nå kan eierne av det originale repoet vurdere endringene dine og eventuelt godkjenne dem!

---

### **Oppsummering**
- **Forking** lar deg jobbe med en kopi av et annet repository.
- **VSCode GUI** kan brukes til å klone forken, gjøre endringer, committe og pushe.
- **Pull Requests** lar deg foreslå endringer tilbake til originalprosjektet.

## Jobbe med Branches og Merge i GitHub & VSCode

Når vi jobber med kodeprosjekter, er det viktig å kunne jobbe parallelt med ulike funksjoner uten å påvirke hovedkoden. Dette gjør vi ved å bruke **branches**.

En **branch** (gren) er en kopi av koden på et gitt tidspunkt, hvor vi kan gjøre endringer uten å påvirke `main`-branchen. Når vi er ferdige med endringene, kan vi **merge** (slå sammen) dem tilbake til `main`.

### **Hvorfor bruke branches?**
- Vi kan utvikle nye funksjoner uten å påvirke hovedkoden.
- Flere personer kan jobbe på ulike oppgaver samtidig.
- Vi kan eksperimentere og enkelt gå tilbake hvis noe går galt.

---

### **1. Opprette en branch i VSCode GUI**
1. Åpne **VSCode** og klon repoet du skal jobbe med.
2. Klikk på **Source Control**-ikonet i venstre meny.
3. Klikk på **"Branch: main"** nederst til venstre i VSCode.
4. Trykk på **"Create New Branch"**.
5. Gi branchen et navn, for eksempel `ny-funksjon`.
6. VSCode bytter automatisk til den nye branchen.

Nå kan du gjøre endringer i denne branchen uten at `main` påvirkes.

---

### **2. Gjøre endringer og committe i en branch**
1. Åpne en fil og gjør en endring.
2. Trykk på **Source Control**-ikonet i venstre meny.
3. Endrede filer vises i listen – klikk på dem for å se hva som er endret.
4. Skriv en **commit-melding** i tekstfeltet øverst, for eksempel `"La til ny funksjon"`.
5. Trykk på **Commit**-knappen (✔️).
6. Trykk på **Sync Changes** (🔄) for å pushe endringene til GitHub.

---

### **3. Opprette en Pull Request i GitHub**
Når vi er ferdige med endringene våre, ønsker vi å få dem inn i `main`. Dette gjøres med en **Pull Request (PR)** på GitHub.

1. Gå til repoet ditt på **GitHub**.
2. Klikk på **Pull Requests** i menyen øverst.
3. Klikk på **New Pull Request**.
4. Velg `main` som **base branch** og `ny-funksjon` som **compare branch**.
5. GitHub viser forskjellene mellom de to branchene.
6. Klikk på **Create Pull Request** og skriv en kort beskrivelse av hva som er endret.
7. Klikk på **Submit**.

---

### **4. Merge branchen tilbake til main**
Når Pull Request-en er opprettet, må den godkjennes og merges.

1. En annen utvikler (eller du selv) kan gå inn på PR-en og sjekke endringene.
2. Når alt ser bra ut, klikk på **Merge Pull Request**.
3. GitHub slår sammen endringene fra `ny-funksjon` inn i `main`.
4. Slett den gamle branchen for å rydde opp.

Nå er funksjonen din en del av hovedkoden

---

### **5. Bytte mellom branches i VSCode**
Hvis du vil jobbe med en annen branch:
1. Klikk på **Branch: [navn]** nederst i VSCode.
2. Velg en annen branch, for eksempel `main`.
3. VSCode bytter nå til den valgte branchen.

---

### **6. Løse merge-konflikter i VSCode**
Noen ganger kan to personer endre samme linje i samme fil, og Git klarer ikke å avgjøre hvilken endring som skal beholdes. Dette kalles en **merge-konflikt**.

🔹 **Slik løser du en merge-konflikt i VSCode:**
1. Git vil markere filen med konflikten i **Source Control**-panelet.
2. Åpne filen – du vil se noe slikt:
   ```sh
   <<<<<<< HEAD
   Dette er koden fra main-branchen
   =======
   Dette er koden fra ny-funksjon-branchen
   >>>>>>> ny-funksjon
   ```
3. Velg hvilken versjon du vil beholde, eller slå dem sammen manuelt.
4. Når du har fikset konflikten, lagre filen.
5. Gå til **Source Control**, skriv en commit-melding og trykk på **Commit & Push**.
6. Fullfør merge-prosessen på GitHub.

---

### **Når bruker vi branches og når bruker vi forks?**
- **Branches** brukes når du jobber med et repository du har tilgang til å endre direkte, for eksempel i et team-prosjekt der alle jobber på samme kodebase.
- **Forks** brukes når du ønsker å bidra til et repository du **ikke har skrive-tilgang til**, for eksempel et open-source-prosjekt.

Generelt sett: Hvis du jobber internt i et prosjekt med teamet ditt, bruk **branches**. Hvis du vil foreslå endringer til et eksternt prosjekt, bruk **forks**.

---

### **Oppsummering**
- **Branches** lar oss jobbe med nye funksjoner uten å påvirke `main`.
- **Pull Requests** brukes for å slå sammen endringer og få kodegjennomgang.
- **Merge-konflikter** kan oppstå, men løses enkelt i VSCode.
- **Bruk branches for teamprosjekter og forks for open-source-bidrag.**

## Rebase vs. Merge – Håndtering av commit-historikk

Når vi jobber med **branches** i Git, må vi til slutt slå sammen endringene tilbake til `main`-branchen. Det er to hovedmåter å gjøre dette på: **merge** og **rebase**. Begge metodene lar oss integrere endringene våre, men de gjør det på forskjellige måter.

---

### **1. Hva er Merge?**

### 🔹 **Hvordan fungerer merge?**
`git merge` tar endringene fra en branch og kombinerer dem med en annen branch, vanligvis `main`. Dette skaper en **ny merge-commit** som binder de to historiene sammen.

### 🔹 **Fordeler med merge**
- Bevarer hele commit-historikken 
- Gjør det tydelig når endringer ble slått sammen
- Trygt for samarbeid, siden det ikke endrer eksisterende commits

### 🔹 **Ulemper med merge**
- Kan føre til en rotete historikk med mange "merge commits"
- Vanskelig å få en ren og lineær commit-logg

### 🔹 **Hvordan merge i VSCode**
1. Bytt til `main`-branchen i VSCode (nederst til venstre, klikk på branch-navnet og velg `main`).
2. Klikk på **Source Control**-ikonet.
3. Klikk på de tre prikkene (`...`) og velg **Pull, Push** → **Fetch**.
4. Klikk igjen på de tre prikkene og velg **Merge Branch**.
5. Velg branchen du vil merge, for eksempel `feature-branch`.
6. Hvis det ikke er konflikter, fullføres merget automatisk.
7. Trykk på **Sync Changes** (🔄) for å pushe endringene til GitHub.

**Kommandolinjealternativ:**
```sh
git checkout main
git merge feature-branch
git push origin main
```

---

### **2. Hva er Rebase?**

### 🔹 **Hvordan fungerer rebase?**
`git rebase` flytter alle commits fra en branch til toppen av en annen branch (vanligvis `main`). Dette gjør historikken **lineær** ved å "omskrive" commit-loggen.

### 🔹 **Fordeler med rebase**
- Ren og ryddig commit-historikk 
- Fjerner unødvendige merge-commits
- Enklere å lese commit-loggen

### 🔹 **Ulemper med rebase**
- Omskriver commit-historikken, noe som kan skape problemer hvis flere personer jobber på samme branch
- Kan være mer risikabelt hvis man rebaser commits som allerede er pushet

### 🔹 **Hvordan rebase i VSCode**
1. Bytt til feature-branchen din i VSCode.
2. Klikk på **Source Control**-ikonet.
3. Klikk på de tre prikkene (`...`) og velg **Rebase Current Branch Onto...**.
4. Velg `main`.
5. Hvis det oppstår konflikter, løser du dem manuelt og committer endringene.
6. Trykk på **Sync Changes** (🔄) for å pushe de rebasede endringene til GitHub.

**Kommandolinjealternativ:**
```sh
git checkout feature-branch
git rebase main
git push --force
```

**OBS:** `git push --force` må brukes forsiktig! Hvis andre har jobbet på samme branch, kan deres commits bli overskrevet.

---

### **3. Når skal du bruke Merge vs. Rebase?**

| Situasjon | Bruk Merge | Bruk Rebase |
|-----------|------------|-------------|
| Samarbeid med team | OK | Bare hvis alle er enige |
| Beholde historikken | Ja | Nei |
| Ren commit-logg | Nei | Ja |
| Lokale endringer før push | Nei | Ja |
| Kombinere mange commits til én | Nei | Ja |

**Generell tommelfingerregel:**
- Bruk **merge** når du jobber med andre og vil bevare historikken.
- Bruk **rebase** hvis du vil ha en ren commit-historikk og jobber alene på en feature-branch.

---

## **4. Oppsummering**
**Merge** kombinerer commits og lager en ny merge-commit. Bra for samarbeid.
**Rebase** omskriver historikken og gir en ren commit-logg. Bra for private feature-branches.
**VSCode støtter både merge og rebase** via GUI-et.
**Bruk merge når du jobber i team** – rebase kun hvis du vet hva du gjør!

## Bidra til Open Source-prosjekter på GitHub

Å bidra til **open source**-prosjekter er en fin måte å lære på, bygge nettverk og forbedre ferdighetene dine. GitHub er hjemmet til millioner av slike prosjekter, og alle kan bidra ved å rapportere feil, foreslå forbedringer eller sende inn kode.

---

### **1. Finne et open-source prosjekt å bidra til**

### **Hvordan finne gode prosjekter?**
1. **GitHub Explore** – [github.com/explore](https://github.com/explore) viser populære prosjekter.
2. **Good First Issues** – [goodfirstissue.dev](https://www.goodfirstissue.dev/) samler oppgaver for nybegynnere.
3. **Søk på GitHub** – Bruk søkefunksjonen med filtre som `label:"good first issue"`.
4. **Organisasjoner** – Store prosjekter som [Mozilla](https://github.com/mozilla) og [TensorFlow](https://github.com/tensorflow) er åpne for bidrag.

---

### **2. Forstå prosjektets retningslinjer**

Før du bidrar, må du lese følgende filer i repoet:
- **`README.md`** – Beskrivelse av prosjektet og hvordan man bruker det.
- **`CONTRIBUTING.md`** – Veiledning for hvordan du kan bidra.
- **`CODE_OF_CONDUCT.md`** – Regler for adferd i prosjektet.

**Hvis `CONTRIBUTING.md` mangler:** Sjekk Issues eller Pull Requests for retningslinjer.

---

### **3. Forke og klone prosjektet**

Siden du ikke har direkte skrivetilgang til prosjektet, må du **forke** repoet:

### **Steg-for-steg:**
1. Gå til prosjektets GitHub-side.
2. Klikk på **Fork** øverst til høyre.
3. Nå har du en kopi av repoet på din egen GitHub-profil.
4. **Klone repoet til din PC:**
```sh
git clone https://github.com/ditt-brukernavn/prosjektnavn.git
cd prosjektnavn
```

---

### **4. Lage en ny branch og gjøre endringer**

### **Opprette en branch for endringen din:**
```sh
git checkout -b feature-navn
```

### **Gjøre endringer og committe**
1. Rediger filer eller legg til ny kode.
2. **Legg til endringene:**
```sh
git add .
```
3. **Skriv en beskrivende commit-melding:**
```sh
git commit -m "Fikset bug i funksjon X"
```
4. **Push endringene til din fork:**
```sh
git push origin feature-navn
```

---

## **5. Opprette en Pull Request (PR)**

📌 **Nå vil du foreslå at prosjektets eiere inkluderer koden din.**

1. Gå til **Pull Requests**-fanen i det originale repoet.
2. Klikk **New Pull Request**.
3. Velg `main`-branchen til originalprosjektet og `feature-navn`-branchen din.
4. Skriv en beskrivelse av hva du har gjort.
5. Klikk **Create Pull Request**.

Nå vil prosjektets vedlikeholdere vurdere bidraget ditt!

---

## **6. Følge opp Pull Requesten**

- Hvis prosjektets vedlikeholdere har **tilbakemeldinger**, gjør du endringer og pusher dem igjen:
```sh
git add .
git commit --amend -m "Oppdatert basert på tilbakemeldinger"
git push --force
```
- Når PR-en godkjennes, blir den **merget inn i hovedprosjektet**.
- **Slett branchen din** etter merge:
```sh
git branch -d feature-navn
git push origin --delete feature-navn
```

---

## **7. Oppsummering**
- **Finn et prosjekt** på GitHub som tar imot bidrag.
- **Les dokumentasjonen** for å forstå retningslinjene.
- **Fork og klon repoet** for å jobbe med det lokalt.
- **Lag en branch, gjør endringer og push til din fork**.
- **Opprett en Pull Request** for å foreslå endringene dine.
- **Følg opp tilbakemeldinger** fra prosjektets vedlikeholdere.