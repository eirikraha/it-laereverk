# CI/CD med GitHub Actions – Automatisert Testing og Deploy

Når vi jobber med kode, er det viktig å sikre at den fungerer som forventet. Det er her **CI/CD** (Continuous Integration / Continuous Deployment) kommer inn. **GitHub Actions** er en innebygd løsning for å automatisere testing og deploy direkte fra GitHub.

---

## **1. Hva er CI/CD?**

**Continuous Integration (CI)** – Automatiserer testing av kode hver gang det pushes til et repo. Dette sikrer at nye endringer ikke ødelegger eksisterende kode.

**Continuous Deployment/Delivery (CD)** – Automatiserer deploy av kode til en server eller plattform etter at testene er bestått.

**Fordeler med CI/CD:**
- Oppdager feil tidlig gjennom automatisert testing.
- Gir raskere utviklingsflyt ved å fjerne manuelle prosesser.
- Sikrer at koden alltid er i en fungerende tilstand.

---

## **2. Hva er GitHub Actions?**

**GitHub Actions** lar oss lage **workflows** som automatiserer prosesser som testing, bygging og deploy av kode. En workflow defineres i en YAML-fil og kan trigges av hendelser som `push`, `pull request` eller `release`.

### 🔹 **Grunnleggende begreper**
- **Workflow**: En automatisert prosess som kjøres basert på en hendelse.
- **Job**: En serie med steg innen en workflow.
- **Step**: En individuell handling i en jobb.
- **Action**: En forhåndsdefinert funksjon som kan brukes i en workflow.

---

## **3. Lage en enkel GitHub Actions workflow for testing**

**Mål:** La GitHub kjøre tester automatisk hver gang vi pusher kode.

### 🔹 **Steg-for-steg**
#### **1. Opprett en workflow-fil**
I GitHub-repoet ditt, opprett denne mappen og filen:
```
.github/workflows/ci.yml
```

#### **2. Legg inn følgende kode i `ci.yml`**
```yaml
name: Kjør tester automatisk

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Hent koden fra repoet
        uses: actions/checkout@v3
      
      - name: Sett opp Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Installer avhengigheter
        run: npm install
      
      - name: Kjør tester
        run: npm test
```

#### **3. Hvordan fungerer dette?**
1. **Trigger workflow** når noen `push`-er kode eller lager en `pull request`.
2. **Henter koden** fra GitHub-repoet.
3. **Setter opp Node.js** for å kjøre tester (kan byttes ut med Python, Java, osv.).
4. **Installerer nødvendige pakker** (`npm install`).
5. **Kjører tester** (`npm test`).

#### **4. Se workflowen kjøre**
1. Gå til repoet ditt på **GitHub**.
2. Klikk på **Actions**-fanen.
3. Her ser du workflows som kjører hver gang du pusher ny kode.
4. Klikk på en jobb for å se detaljene.

**Hvis testen feiler, vil du få en feilmelding**. Du kan da fikse koden før den merges inn i `main`.

---

## **4. Deploye et prosjekt til GitHub Pages med GitHub Actions**

**Mål:** Automatisere deploy av en nettside til GitHub Pages hver gang vi pusher til `main`.

### 🔹 **1. Opprett en deploy-workflow**
Opprett en ny fil:
```
.github/workflows/deploy.yml
```

### 🔹 **2. Legg inn følgende kode i `deploy.yml`**
```yaml
name: Deploy til GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Hent koden
        uses: actions/checkout@v3
      
      - name: Bygg prosjektet
        run: |
          npm install
          npm run build
      
      - name: Deploy til GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: build
```

### 🔹 **3. Aktivere GitHub Pages**
1. Gå til repoet ditt på **GitHub**.
2. Gå til **Settings** → **Pages**.
3. Velg `gh-pages` som **branch**, og trykk **Save**.

Nå vil nettsiden din automatisk bli oppdatert hver gang du pusher kode til `main`!

---

## **5. Oppsummering**
- **CI/CD** sikrer at koden alltid fungerer ved å kjøre automatiserte tester.
- **GitHub Actions** lar oss lage **workflows** for å teste og deploye kode.
- **Vi kan sette opp testing** slik at alle commits sjekkes automatisk.
- **Vi kan bruke GitHub Actions til å deploye** en nettside til GitHub Pages.

Nå kan du automatisere kodeflyten din med GitHub Actions! 🚀
