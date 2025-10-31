# Praktisk prosjekt: Fra hypervisor til containere med Proxmox og Docker

## Mål for prosjektet
Etter prosjektet skal eleven kunne:
- forklare hvordan virtualisering fungerer i praksis
- sette opp og konfigurere Proxmox VE som hypervisor
- opprette en virtuell maskin i Proxmox
- installere og bruke Docker for å kjøre applikasjoner i containere
- forstå forskjellen mellom VM og container
- dokumentere arbeidsprosessen med skjermbilder og refleksjon

## Del 1 – Oppsett av Proxmox (hypervisor)
**Scenario:**  
Skogvika AS har en gammel server som skal gjenbrukes til testmiljø. Du får oppdraget med å installere og sette opp Proxmox Virtual Environment (VE) slik at den kan kjøre flere virtuelle maskiner.

**Oppgaver:**
1. Last ned Proxmox ISO fra [https://www.proxmox.com/en/downloads](https://www.proxmox.com/en/downloads)  
2. Installer Proxmox på en fysisk server eller en eksisterende VM  
   - Tildel 4 GB RAM og 32 GB disk (minimum)  
3. Logg inn på webgrensesnittet (`https://<ip-adresse>:8006`)  
4. Opprett én virtuell maskin (Ubuntu Server)  
   - 2 GB RAM, 10 GB disk  
   - Installer OS og aktiver SSH  
5. Test at du kan koble deg til fra en annen maskin via `ssh <bruker>@<ip>`  

**Dokumenter:**  
Skjermbilder fra installasjon, første pålogging og opprettelse av VM.  

**Refleksjon:**  
Hva gjør Proxmox som ikke VirtualBox gjør?  
Hvorfor kan det være nyttig for en bedrift å ha et sentralt system som Proxmox?

## Del 2 – Docker på virtuell maskin
**Scenario:**  
Du har nå en fungerende Proxmox-installasjon. Én av VM-ene skal brukes til testing av containerteknologi.  

**Oppgaver:**
1. Logg inn på Ubuntu-VM-en du laget i del 1  
2. Installer Docker (offisiell metode fra docs.docker.com):  (OBS! Jeg har ikke fått testa koden ennå, men satser på det virker)
```bash
sudo apt update
sudo apt install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable docker
sudo systemctl start docker
```

3. Test installasjonen med:  
```bash
docker run hello-world
```  

**Dokumenter:**  
Beskriv installasjonen, legg ved skjermbilder som viser installasjon og test.  

**Refleksjon:**  
Hva er forskjellen på hvordan Proxmox og Docker “virtualiserer”?  
Hvorfor tror du bedrifter bruker begge?

## Del 3 – Containere i praksis

### Container 1 – Minecraft-server
**Mål:** Oppleve hvordan Docker kan kjøre en komplett applikasjon i en isolert container.  

1. Finn en ferdig Docker-container for Minecraft på [Docker Hub](https://hub.docker.com/_/minecraft-server) eller bruk:  
   ```bash
   docker run -d -p 25565:25565 -e EULA=TRUE --name mc itzg/minecraft-server
   ```
2. Vent 1–2 minutter og test i Minecraft-klient:  
   - Koble til IP-adressen til VM-en.  
3. Se loggene:  
   ```bash
   docker logs -f mc
   ```
4. Test å stoppe og starte containeren igjen.  

**Refleksjon:**  
Hvordan skiller dette seg fra å installere Minecraft-server manuelt?  
Hva gjør Docker enklere?

### Container 2 – Webdashboard (visualisering)
For å vise hvordan Docker brukes profesjonelt, lag en enkel administrasjons-dashboard i container.  
Du kan velge mellom:  

- **Portainer:**  
  ```bash
  docker run -d -p 9000:9000 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce
  ```  
  (webgrensesnitt for å administrere containere)  

- **NGINX:**  
  ```bash
  docker run -d -p 8080:80 nginx
  ```  
  (viser enkel nettside)  

**Dokumenter:**  
Skjermbilder av containerkjøring og tilgang via nettleser.

**Refleksjon:**  
Hvordan hjelper slike containere deg å overvåke eller drifte flere applikasjoner?  
Hva kunne vært utfordringen i et større produksjonsmiljø?

## Leveranse
- Skjermbilder av alle trinn (Proxmox installasjon, VM, Docker installasjon, containere)
- Kort dokumentasjon (½–1 side) med:
  - Hva du gjorde
  - Hva du lærte
  - Hva som var utfordrende
  - Forskjellen mellom Proxmox og Docker
  - Hva som gjør containere nyttige for bedrifter

## Kompetansemål i bruk
- D1: Beskriver hvordan komponentene i driftsarkitekturen henger sammen (Proxmox → VM → Docker → app)
- D2: Planlegger og drifter fysiske og virtuelle løsninger
- D3: Forklarer prinsipper for virtuelle tjenester og containerteknologi
- D6: Dokumenterer arbeidsprosess og forklarer valg
- D10: Reflekterer over sikkerhet, isolasjon og ressursbruk

## Vurderingsrubrikk

| Kompetanseområde | Lav måloppnåelse | Middels måloppnåelse | Høy måloppnåelse |
|------------------|------------------|----------------------|------------------|
| **Faglig forståelse (D1, D3)** | Kan forklare noen begreper, men viser usikkerhet i forskjellen mellom VM og container. | Forklarer hovedforskjellen mellom hypervisor og containerteknologi. | Forklarer presist og bruker eksempler for å vise hvordan virtualisering og containere henger sammen. |
| **Praktisk gjennomføring (D2)** | Trenger mye veiledning for installasjon og kjøring. | Gjennomfører installasjon av Proxmox og Docker selvstendig. | Gjennomfører selvstendig, feilsøker og setter opp flere containere eller bruker ekstra funksjoner i Proxmox. |
| **Refleksjon (D3, D10)** | Beskriver hva som ble gjort uten begrunnelse. | Forklarer forskjeller og viser forståelse for bruksområder. | Drøfter fordeler, ulemper og sikkerhet mellom Proxmox og Docker. |
| **Dokumentasjon (D6)** | Mangelfull dokumentasjon eller få skjermbilder. | Skriver kort rapport med hovedtrinn og skjermbilder. | Leverer strukturert dokumentasjon med refleksjoner, bilder og tydelig fremstilling av prosessen. |
| **Samarbeid og kommunikasjon** | Jobber alene og deltar lite i faglige diskusjoner. | Samarbeider og hjelper til i gruppa. | Bidrar aktivt, forklarer fagstoff for andre og deler løsninger med gruppa. |
