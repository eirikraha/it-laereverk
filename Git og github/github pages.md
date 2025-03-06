## Deploy av Nettside med GitHub Pages

**GitHub Pages** lar deg enkelt publisere en nettside direkte fra et GitHub-repository. Det brukes ofte til dokumentasjon, personlige prosjekter og open-source nettsider.

---

## **1. Hva er GitHub Pages?**

GitHub Pages er en gratis hosting-tjeneste som lar deg kjøre en statisk nettside rett fra et repository. Det støtter HTML, CSS, JavaScript og kan generere sider fra Markdown via Jekyll.

**Fordeler med GitHub Pages:**
- Enkel å sette opp og gratis å bruke.
- Ingen behov for ekstra hosting eller serveroppsett.
- Automatisk oppdatering når du pusher kode til GitHub.

---

## **2. Aktivere GitHub Pages i et repository**

### 🔹 **Steg-for-steg**
1. Gå til repoet ditt på **GitHub**.
2. Klikk på **Settings** → **Pages** i venstre meny.
3. Under **Branch**, velg `main` (eller `gh-pages` hvis du bruker en dedikert branch).
4. Klikk **Save**.
5. GitHub gir deg nå en URL, f.eks. `https://ditt-brukernavn.github.io/repo-navn/`.

Nå er nettsiden din live!

---

## **3. Deploy en nettside automatisk med GitHub Actions**

Hvis du jobber med et byggesystem (f.eks. React, Vue, Svelte eller Jekyll), kan du bruke **GitHub Actions** til å automatisere deploy.

### 🔹 **1. Opprett en workflow-fil**
Opprett en ny fil i repoet ditt:
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

### 🔹 **3. Aktivere GitHub Pages for `gh-pages`-branchen**
1. Gå til repoet ditt → **Settings** → **Pages**.
2. Under **Branch**, velg `gh-pages`.
3. Klikk **Save**.

Nå vil nettsiden automatisk oppdateres hver gang du pusher til `main`.

---

## **4. Sette opp et tilpasset domene (valgfritt)**

Hvis du vil bruke et eget domene, kan du:
1. Gå til **Settings** → **Pages**.
2. Under **Custom domain**, skriv inn domenenavnet ditt.
3. Oppdater DNS-innstillingene dine for å peke til GitHub Pages (CNAME-fil).

---

## **5. Oppsummering**
- **GitHub Pages** lar deg publisere statiske nettsider direkte fra GitHub.
- **Du kan aktivere GitHub Pages via Settings → Pages.**
- **Bruk GitHub Actions for automatisk deploy fra `main` til `gh-pages`.**
- **Mulighet for å bruke et tilpasset domene for en profesjonell URL.**

Nå har du en enkel og gratis måte å hoste nettsider på! 🚀
