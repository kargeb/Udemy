// 12. Domyślne parametry i zmienna arguments

//Zachowanie domyslnych parametrów przy zmiennej arguments

function multiplyBy(x, n = x) {

    console.log( arguments.length );
    
    return x * n;

}

// SKUTEK sie jest taki że arguments NIE IGNORUJE PARAMETRY DOMYSLNE, czyli w tym przypadku pokazuje JEDEN przekazany argument !
console.log( multiplyBy(2) );

// UWAGA ! Bardzo ciekawa opcja ! 
// Wpisujac length po nazwie funkcji MOZNA SIE DOWIEDZIEC ILE PRZYJMUJE PARAMETRÓW !!!
console.log( multiplyBy.length );  // 1 z drugim parametrem jako domyslny !

console.log( console.log.length ); // 1 :)


// JESZCZE JEDNA RZECZ
// w tablicy arguments mozna bylo w ES5 zmieniac juz przekazane tam wartosci (chyba ze byl stric mode to nie),
// W ES6 TO NIE DZIALA !! Nawet jak zmienimy tablice arguments to i tak brane sa do obliczen wartosci PRZEKAZANE podczas wywolywania funckji

function multiplyByArg(x, n = x) {

    console.log( arguments.length );
    
    arguments[1] = 10; /// NIE ZADZIALA PODSTAWIENIE !
    
    return x * n;
};

console.log( multiplyByArg(2) );  // 4 a nie 20 !!!