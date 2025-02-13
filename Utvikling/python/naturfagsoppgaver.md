# Naturfagsoppgaver med python
Nå som du har lært programmering er det på tide å bruke det inn mot naturfag. Nedenfor er det noen oppgaver som kan være relevant i naturfag

## Befolkningsvekst
Vi kan måle befolkningsvekst ved å se på antall individ som finnes i en besetning og så gi det en vekstrate. For eksempel kan vi si at vi har 5000 individ i en befolkning og det vokser med 1% per år. Da kan vi si at befolkningen etter ett år er `5000 * 1.01`.  
1. Bruk programmering for å lage en for-løkke som regner ut befolkningsraten for hvert år i ti år fremover.
2. Legg til en if-test i for-loopen som sier ifra når befolkningen har gått over 6000.
3. Kan du lage økning i befolkning som en funksjon? 

## Klima og miljø
1. Med en array for temparatur gjennom året, hvordan kan en finne gjennomsnittet?
`temperaturer = np.array([3, 5, 10, 15, 20, 25, 30, 28, 22, 16, 8, 4])`  
(tips: numpy ar en funksjon som heter ``np.mean()``)
2. Lag et plot som viser temperaturene fra oppgave 1 gjennom året. (Bruk tall for hver måned, januar = 1, februar = 2 osv)
3. En bil bruker ca 0.2 kg CO2 per km kjørt, et fly bruker ca 90 kg CO2 per km og strøm koster ca 0.1 kg CO2 per km. Lag et program hvor en variabel sier antall kilometer kjørt og skriver ut hvor mange kg CO2 det har blitt brukt.
4. Lag et plot av oppgave 3

## Ernæring
Lag et program som lagrer antall kilokalorier, antall gram fett og antall gram proteiner per 100 gram for et selvvalgt produkt. Legg til en variabel som sier noe om hvor mange gram med produkt du har. Få programmet til å regne ut hvor mye kcal, fett og proteiner du har fått i deg. Sammenlign dette for torsk, kjøttdeig og french fries fra McDonalds.

## DNA og arv
La eg program som går gjennom en DNA-sekvens (for eksempel `DNA = "ACTTGACCGTAATG"`) og teller hvor mange det finnes av hver nitrogenbase.

## Kjemiske bindinger
1. Hvis forskjellen i elektronegativitet mellom to grunnstoff er større enn 1.7, har vi som regel en ionisk binding. Hvis differeansen er 0.4-1.7 er det som regel en kovalent (elektronpar) binbding. Hvis ikke er det en metallisk binding. Skriv et program hvor du skal skrive inn elektronegativiteten til to stoff og så skal programmet sjekke hvilken type binding det er.
2. Lag et program som skal gi informasjon om et grunnstoff ut i fra hvilket grunnstoff brukeren velger (du kan gjøre dette med ``svar = input("Hvilket grunnstoff velger du?")``-kommandoen). Legg inn minst 5 stoff brukeren kan velge mellom og si hvilken gruppe, periode og elektronegativeteten grunnstoffet har.