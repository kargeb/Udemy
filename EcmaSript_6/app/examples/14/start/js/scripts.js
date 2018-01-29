// 17. Dekompozycja tablic

//DESTRUCTURING na tablicach, prostszy niz na obiektach

let numbers = [10, 20, 30, 40, 50];
// z powyzszej tablicy chcemy wyjac i utworzyc sobie 2 zmienne
// Stary sposob ES5:
let first = numbers[0],
    second = numbers[1];
console.log(first, second);

// Nwy sposob ES6:
let [jeden, dwa] = numbers;
console.log( jeden, dwa );

// CZYLI zasada bardzo podobna jak przy obiektach ALE zamiast {} dajemy []
// Nie mamy nazwanych elementow w tablicy WIEC ROBIMY TO ZA KOLEJNOSCIA ICH WYSTEPWANIA !
// Kolejne elementy tablicy beda wpadac zgodnie z kolejnoscia naszych zmiennych 
// JESLI CHCEMY PRZESKOCZYC JAKAS ZMIENNA W TABLICY TO ODDZIELAMY JE PRZECINKAMI !!
let [,,,cztery] = numbers;  // wyviagniecie 4 elementu
console.log(cztery); // 40 !!!

// Tak jak poprzednio, ZEBY USTRZEC SIE PRZED BLEDEM a dostac jedynie undefined to robimy to !:
let [jeden1, dwa2] = numbers || [];  // zawwsze warto to robic

// MOZNA ROWNIEZ przypisywac wartosci z tablic JUZ DO WCZESNIEJ UTWORZOMNYCH ZMIENNYCH!
// UWAGA ! Nie musimy juz w tym przypadku oplatac tego w () tak jak w przypadku obiektów

let pies, kot;

[pies, kot] = numbers;
console.log(pies, kot);  // 10 20  działa !

///////////////// CIEKAWOSTKA !! ////////////////////////////
/// VALUE SWAPPING - trick zwiazny z destructuringiem tablic

// aby zamienic wartosciami dwie zmienne zawsze robilo sie to w ten sposob ze twrozylo sie trzecia:
let a = 1,
    b = 2;

console.log(a, b);  // 1 2    
    
let temp = a;
a = b;
b = temp;

console.log(a, b); // 2 1

// DZIEKI DESTRUCTURINGOWI mozna to zrobic duzo szybciej:

let c = 3,
    d = 4;
console.log(c, d); // 3 4

[c, d] = [d, c];  // !!!
console.log(c, d); // 4 3  !!! :)