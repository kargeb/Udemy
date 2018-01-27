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

///// Lazy evaluation:

///////////////////   DOKONCZ LEKCJE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///////////////////   DOKONCZ LEKCJE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///////////////////   DOKONCZ LEKCJE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///////////////////   DOKONCZ LEKCJE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


