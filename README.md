# Star Wars API
https://inquisitive-caramel-ef74da.netlify.app/

## Betyg: VG 

## React, Typescript, React Router, Axios

# Hygienkrav
Nedan hygienkrav ska vara uppfyllda oavsett betygsnivå.

Använda React (med useState, useEffect och Fetch/axios) och React Router
Kommunikationen med API:et ska finnas i ett eget mellanlager (alltså en ”service”, där själva Fetch/axios-kommunikationen sker)
Mobile first (så klart)
Komponentbaserad
Loading & felhantering 
Skriven i TypeScript 

# Kravspecifikation G
Kunna bläddra bland filmer och personer (inkl. enkel paginering med föregående/nästa-knappar).
Visa all relevant tillgänglig information om resursen.
 
Alla resursers objekt ska ha länkar till respektive relaterad resurs.
På en person ska man till exempel kunna klicka på alla de filmer som hen varit med i och komma till den filmens detaljerade sida, och tvärtom.

# Kravspecifikation VG
Bläddra bland alla resurser
films, people, planets, species, starships, vehicles
 
Paginering med hjälp av query-parametrar 
 
Sökfunktion på varje resurs
Samma sökformulär ska nyttjas oavsett vilken resurs som komponenten används i. Vad man sökt på ska visas (t.ex. “Search results for Yoda…”) och inte vara kopplat till vad som står i sökrutan. Vad man sökt på ska också hamna i query-parametrarna (t.ex. ?query=luke) för sidan, precis som med aktuell sida för pagineringen.


