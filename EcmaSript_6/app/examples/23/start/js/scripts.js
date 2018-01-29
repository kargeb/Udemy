// 26. Dziedziczenie z wbudowanych typów

// Uwaga tutaj mowi o NOWOSCI czyli o czyms czego nie bylo w ES5
// Czyli utworzymy sobie klase ktora bedzie dziedziczyc z kontruktora (klasy) Array

class Collection extends Array {
    
    // Bawimy sie teraz ta klasa (to jest juz srodek lekcji a nie poczatek)
    // otoz gdy utowrzymy tablice poprzez  let col = Collection(10)
    // To nie powstanie nam tablica z jednym elementem 10 TYLKO tablica z 10 UNDEFINED !!
    // wiec napiszemy sobie swoj wlasny konstruktor klasy Collection
    
    constructor(...args) {

        if(args.length === 1) {
            super(1); // jest to konstruktor Array wiec teraz stworzylismy tablice majaca jeden element UNDEFINED
            this[0] = args[0];  // tutaj juz robimy swoja modyfikacje czyli przypisujemy mu przesalna wartosc
        } else {
            super(...args);
        }   
    }
}

let col = new Collection(10, 20, 30);

console.log(col);   // [10, 20, 30]
console.log( col.length );      // 3
console.log( col.slice(0,1) );  // [10]
// WSZYSTKO IDENCZTYNIE JAKBY TO BYLA TABLICA !

// No i w chuj ciekawe jest to ze np taka metoda SLICE wywolana na naszej klasie ZWRACA WLASNIE OBIEKT TEJ KLASY !!

let part = col.slice(0,1);

console.log(  part instanceof Collection );  // TRUE !!!

// Wynika z tego to ze jakbysmy sobie w Collection utworzyli jakas funlcje no to "part" miala by do niej dostep ale Obiekt Array juz nie !
// No bo Collection wie o Array ale Array nie wie o Collection

let single = new Collection(23);
console.log(single);  // dziala ! Mamy tablice z jednym 23 a nie 23 pustych komorek !

// UWAGA ! Nie ze wszystkich wbudowanych typw DA SIE DZIEDZICZYC !!!!!!
// Array jest jednym znich, boolean tez, regExp tez ale NIE ZE WSZYSTKICH
// UWAGA !!! To dziala TYLKO W ES6 !! A wiec jesli bedziesz chcial to przetegowac na ES5 jakims babelem TO CHUJA ! Nie bedzie dzialac !