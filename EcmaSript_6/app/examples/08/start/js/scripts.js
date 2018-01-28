// 11. Domyślne parametry

// BARDZO DLUGO WYCZEKIWANA FUNKCJONALNOSC !
// Nie jest to cos z czym nie dalo sie poradzic wczesniej ale teraz robi sie to duzo szybciej !

// Funkcja mnozaca jedna liczbe przez druga
// STARY SPOSON Z ES5
function multiply(number, multiplyBy) {
    
    // Oto jak sobie z tym radzono z regoly i wszedzie !
    // Czyli gdy multiply = undefined no to bralo 2
    multiplyBy = multiplyBy || 2; 

    return number * multiplyBy;
}

console.log( multiply(2, 6) ); // 12
console.log( multiply(2) ); // 4

// I TERAZ UWAGA !!
// W JS mnozenie przez 0 JEST POPRAWNE czyli 2*0 = 0 !
// Ale w naszej funkcji ono jest brane jako FALSE czyli BRANA JEST "DOMSYLNA" WARTOSC:

console.log( multiply(2, 0) );  // 4 KURWA !!!! DRAMAT !!

// Przekształcenie funkcji na ES5 jeszcze poki co:
function multiply2(number, multiplyBy) {

    multiplyBy = multiplyBy === undefined ? 2 : multiplyBy; 

    return number * multiplyBy;
}

console.log( multiply2(2, 0) ); // 0 Czyli jest ok

///////// NOWY SPOSOB ES6  - WARTOSC DOMYSLNA:

function multiplyES6(number, multiplyBy = 2) {  // TYLE !!
    return number * multiplyBy;
}
console.log( multiplyES6(5) );

//////////// Lazy evaluation:

// Funkcja zwracajaca kod na podstawie panstwa (przyciecie po 3 pierwszych literach)
// No i UWAGA ! Juz pierwsza rzecz ! MOZNA ODWOLYWAC SIE W POZNIEJ PRZEKAZYWANYCH OBIEKTACH DO TYCH PRZEKAZANYCH JUZ WCZESNIEJ (PO LEWEJ STRONIE, NIE NA ODWRÓT !)
// Czyli w code juz odwolujemy sie do wczesniej przekaznaego contry, i juz go mozna modyfikowac od razu
function getCountryCode(country, code = country.toUpperCase().slice(0,3)) {
  
    console.log("Wykonuje funkcje getCountryCode");
    // UWAGA ! Tutaj juz widzimy skrocny zapis ES6 !
    return {
        country,
        code
    }  
};

console.log( getCountryCode("Polska", "PL") );
console.log( getCountryCode("Polska") );    // Działa 

// Druga funkcja i ona juz pokaze co to jest LAZY EVALUATION
function getCountryInfo( countryInfo = getCountryCode("Polska") ) {
  
    return "Państwo to " + countryInfo.country + ", a jego kod to " + countryInfo.code;
    
};

console.log( getCountryInfo({ country: "Germany", code: "GER" }) );
console.log( getCountryInfo() );
// CHODZI O TO ze w przypadku PODANIA OBIEKTU, czyli gdy getCountryInfo nie korzysta z parametru domyslnego, TO NIE WYKONUJE SIE W OGOLE FUNCKJA getCountryCode ! O czym siwadczy brak consologa z niej. Czyli Gdy podamy sami obiekt to JS NIE BAWI SIE W WYKONYWANIE TEGO CO JEST PODANE JAKO DOMYSLNY, nie trzyma tego w pamieci w razie WU. Co jest w sumie logiczne no ale nazywa sie to wlasnie LAZY EVALUATION. 

/*      NAJWAZNIEJSZE:
- Mozna przekazywac jako domyslne paramtery nie tylko suche zmienne ALE I CALE WYRAZENIA
- Mozna odnoscic sie w domyslnych wyrazneiach DO TYCH JUZ PRZEKAZANYCH po lewej stronie (przed nimi)
- Lazy Evaluation Czyli gdy nie ma potrzeby korzystania z domyslnych paramerow, wyrazenia te NIE SA WYKONYWANE 
*/


