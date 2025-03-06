# Prosjektstyring med GitHub Issues & Projects

Når man jobber i et team, er det viktig å ha gode verktøy for å organisere oppgaver, følge fremdrift og samarbeide effektivt. **GitHub Issues & Projects** gir oss enkle, men kraftige verktøy for prosjektstyring rett i GitHub.

---

## **1. GitHub Issues – Oppgavehåndtering**

**GitHub Issues** fungerer som oppgavelister der vi kan registrere feil, foreslå nye funksjoner og følge fremdriften til et prosjekt.

### 🔹 **Hvordan opprette en Issue**
1. Gå til GitHub-repoet ditt.
2. Klikk på **Issues**-fanen.
3. Trykk på **New Issue**.
4. Gi den en beskrivende tittel, f.eks. *“Feil ved innlogging”*.
5. Skriv en detaljert beskrivelse av oppgaven eller problemet.
6. Velg eventuelt **labels**, **assignees** og **milestones**.
7. Klikk **Submit new issue**.

### 🔹 **Hvordan bruke labels, assignees og milestones**
- **Labels**: Brukes for å kategorisere issues, f.eks. `bug`, `enhancement`, `documentation`.
- **Assignees**: Tildel en person som er ansvarlig for oppgaven.
- **Milestones**: Grupper flere issues sammen for å spore fremdriften på større oppgaver.

**Fordeler med Issues:**
- Enkel måte å holde oversikt over oppgaver og problemer.
- Kobles direkte til Pull Requests for oppfølging.
- Gir strukturert samarbeid i et team.

---

## **2. GitHub Projects – Planlegging og oppfølging**

**GitHub Projects** lar oss lage interaktive **kanban-tavler** for å organisere oppgaver visuelt.

### 🔹 **Hvordan lage et GitHub Project**
1. Gå til repoet ditt og klikk på **Projects**.
2. Trykk på **New Project**.
3. Velg et navn, f.eks. *“Sprint 1”*.
4. Velg **Board**-visning for en klassisk kanban-tavle.
5. Klikk **Create project**.

### 🔹 **Hvordan bruke et Project Board**
1. **Legg til kolonner** – Standard er `To Do`, `In Progress`, `Done`, men du kan tilpasse disse.
2. **Legg til Issues eller Pull Requests** – Dra eksisterende Issues inn på tavlen.
3. **Opprett nye kort** – Legg til oppgaver direkte i tavlen.
4. **Flytt oppgaver mellom kolonner** etter hvert som de blir jobbet med.

**Fordeler med GitHub Projects:**
- Gjør det enkelt å visualisere fremdrift.
- Automatiserer flyt mellom Issues og Pull Requests.
- Kan brukes for både enkeltprosjekter og store team.

---

## **3. Kobling mellom Issues, Pull Requests og Projects**

For å knytte alt sammen kan vi:
- **Nevne en Issue i en Pull Request** ved å skrive `#123` i PR-beskrivelsen.
- **Automatisk lukke en Issue** når en PR merges, ved å skrive `Fixes #123` i commit-meldingen.
- **Bruke Projects til å spore Issues** og deres tilhørende Pull Requests.

**Eksempel på commit-melding som lukker en Issue automatisk:**
```sh
git commit -m "Fikset innloggingsfeil. Fixes #45"
git push
```
Når denne PR-en merges, lukkes Issue #45 automatisk!

---

## **4. Oppsummering**
- **GitHub Issues** brukes for oppgavehåndtering og bug-tracking.
- **GitHub Projects** gir en visuell oversikt over prosjektets fremdrift.
- **Issues og PRs kan kobles sammen** for effektiv sporing.
- **Automatisering** med `Fixes #issue`-kommandoen sparer tid.
