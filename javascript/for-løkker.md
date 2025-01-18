# For-løkker i javascript
Tenk deg at du skal programmere et program som teller fra 1 til 10. En måte vi kan gjøre dette på er å skrive:
```javascript
console.log("Nå skal vi telle fra 1 til 10:");
console.log(1); // 1
console.log(2); // 2
console.log(3); // 3
console.log(4); // 4
console.log(5); // 5
console.log(6); // 6
console.log(7); // 7
console.log(8); // 8
console.log(9); // 9
console.log(10);// 10
```

Kjører vi dette programmet, vil det gi oss tallene fra 1 til 10 og vi har fått til det vi vil. Burde vi ikke da være fornøyd?

Programmet gjør det vi vil, men det er ikke lurt å bruke så mange linjer når vi kan gjøre det enklere. Hvor lang ville koden blitt dersom vi ville telle til 100 eller 1000?  
Det finnes heldigvis en bedre og mer oversiktlig måte å gjøre dette på med det vi kaller for-løkker.

For-løkker er en grunnleggende del av alle programmering. Vi kaller dem løkker fordi de gjør samme bit kode igjen og igjen til de når et satt mål. Litt som en skiskytter som må ta strafferunder, går koden i ei løkke helt til den kan "slippes videre". `For` kommer av at koden må gå i løkka si mens vi endrer på en variabel litt og litt.

La oss se på eksempelet ovenfor og skrive det om til ei for-løkke vi kan bruke til å forklare hva som skjer:
```javascript
console.log("Nå skal vi telle fra 1 til 10:");
for (let tall = 1; tall<10; tall++) {
    console.log(tall);
}
```
Første linje kjenner vi til fra før:
```javascript
console.log("Nå skal vi telle fra 1 til 10:");
```
Denne linja med kode forteller programmet at det skal skrive setningen "Nå skal vi telle fra 1 til 10:" til konsoll.

Andre linje starter selve for-løkka:
```javascript
for (let tall = 1; tall<11; tall++) {
```
Ei for-løkke starter alltid med ordet `for` og derfor er det først på linja. Etterpå kommer det en parantes med tre argumenter inni. Argumentene er skilt med `;`. Til slutt kommer det en krøllparantes `{`.   
1) La oss starte med å se på **det første argumentet** `let tall = 1`. Som vi husker fra [variabler](variabler.md) bruker vi `let` når vi lager (initierer) en ny variabel. I dette tilfellet lager vi en variabel som heter tall og setter den lik 1.  
2) Nå har vi lyst å telle oppover, men hvor langt skal vi gå? **Det andre argumentet** sier noe om hvor langt vi vil telle. `tall < 11` betyr at vi skal gjøre koden i for-løkka så lenge variabelen `tall` er mindre enn 11. Da blir spørsmålet: hvordan endrer vi på `tall`?  
3) Her trenger vi **det tredje argumentet** som er `tall++`. I javascript (og mange andre språk) betyr to pluss-tegn bak en variabel at vi skal øke variabelen med 1. Her betyr det at når koden i ei for-løkke har blitt gjort en gang, skal variabelen `tall` økes med 1 og så skal for-løkka gjøres igjen. Dette fortsetter helt til `tall = 11` og da stopper for-løkka.

>**OBS!** Legg merke til at det andre argumentet alltid skriver tallet som er én mer enn det vi vil gå til. Dette skriver vi fordi sjekken skjer etter variabelen har blitt oppdatert, men før løkka starter på ny. Vi kan også sjekke for `<10`, men da hadde vi bare telt til 9.

La oss tenke på en skiskytter som må ta tre strafferunder. Hver runde kan sees på som én gjennomgang (iterasjon) i for-løkka. Når skiskytteren starter, har den gått 0 runder, og etter hver fullførte runde (eller iterasjon), er den ett skritt nærmere å bli ferdig. Koden for dette ville se slik ut:
```javascript
for (let straffeRunder = 0; straffeRunder < 4; straffeRunder++)
```

Den siste delen av linja er krøllparantesen `{`. I språk som javascript brukes krøllparanteser for å vise at innenfor dem så skjer det kode som hører sammen. I dette tilfellet forteller vi programmet at alt som er innenfor krøllparantesen `{` og dens motpart `}` på siste linje, er koden som skal gjøres før `tall` skal øke med 1 og løkka begynner på ny.

Tredje linje i eksempelet
```javascript
    console.log(tall);
```
forteller programmet at det skal skrive verdien til variabelen `tall` til konsoll. Legg merke til at koden står ett hakk lengre inne fra venstre side enn resten av koden. Dette brukes i mange programmeringsspråk for å vise at denne biten av kode er inne i ei løkke, en funksjon eller en if-test (det lærer vi mer om i et senere kapittel). I vårt tilfelle er denne linja inne i for-løkka og denne biten med kode vil gjøres igjen og igjen helt til variabelen `tall` når målet sitt og løkka slutter. Første gang løkka kjører vil denne linja skrive tallet 1 til konsoll. Neste gang vil den skrive 2, så 3 osv.  
Hvis vi går tilbake til skiskytter eksempelet så er dette selve det å gå så raskt en kan på ski gjennom strafferundene.

Fjerde linje i eksempelet
```javascript
}
```
forteller programmet at all koden som skal gjøres inne i for-løkka er nå slutt og hvis du har kommet hit må du:

1) Oppdatere variabelen `tall`. (Skiskytteren har gått én mer strafferunde siden sist sjekk)
2) Sjekke om den har nådd grensa si. (Har skiskytteren gått nok strafferunder?)
3) Hvis variabelen ikke har nådd grensa si, må for-løkka gjøres om igjen. (skiskytteren har flere runder å gå)
4) Hvis variabelen har nådd grensa si er programmet ferdig med løkka og kan gå videre (skiskytteren er ferdig med alle strafferunder og kan gå videre)

## Hvorfor for-løkker?
Går vi helt tilbake til det aller første eksempelet med å telle til 10, er det kanskje ikke så mye å tjene på å lage ei for-løkke, men det er to viktige moment som gjør at vi foretrekker å bruke for-løkka.

Tenk deg at vi skal telle til 1000000 istedenfor 10. Dette er enkelt å endre på ei for-løkke:
```javascript
console.log("Nå skal vi telle fra 1 til 1000000:");
for (let tall = 1; tall<1000001; tall++) {
    console.log(tall);
}
```
Koden er like lang og det er lett å lese ut fra for-løkka at vi går fra 1 til 1000000. Skulle vi gjort det samme med å skrive `console.log()` for hvert tall hadde det tatt veldig lang tid å skrive hele programmet.

Den andre grunnen til at vi ønsker å bruke for-løkker er at det samler mye viktig kode på ett sted og gjør at der lett å endre på den ved behov. La oss nok en gang tenke oss at vi vil telle til 10, men denne gangen vil vi fortelle en vits samtidig. Vi har den originale koden fra det aller første eksempelet og skal bare endre på den for å fortelle vitsen. Da blir det som følger:
```javascript
console.log("Nå skal vi fortelle en vits og telle fra 1 til 10:");
console.log(`Poli${1}`); // Poli1
console.log(`Poli${2}`); // Poli2
console.log(`Poli${3}`); // Poli3
console.log(`Poli${4}`); // Poli4
console.log(`Poli${5}`); // Poli5
console.log(`Poli${6}`); // Poli6
console.log(`Poli${7}`); // Poli7
console.log(`Poli${8}`); // Poli8
console.log(`Poli${9}`); // Poli9
console.log(`Poli${10}`); // Poli10
```
For å endre på koden må en gå inn på hver av de ti linjene og oppdatere dem.

Da er det mye enklere å endre på ei for-løkke:
```javascript
console.log("Nå skal vi telle fra 1 til 10:");
for (let tall = 1; tall<10; tall++) {
    console.log(`Poli${tall}`);
}
```
Begge kodesnuttene ovenfor vil gjøre det samme, men for-løkka går mye kjappere å skrive og endre på.