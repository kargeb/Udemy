// 15. Operator SPREAD 

//operator odrwotny do REST
//Chcemy najwieksza liczbe z tej tablicy
let numbers = [12, 3, 9, 22, 11, 6];
//niesttey ta funkcja max przyjmuje wylacznie liczby po przecinkach a nie tablice
Math.max(12, 3, 9, 22, 11, 6);
console.log( Math.max(12, 3, 9, 22, 11, 6) );   // 22

//Uwaga - ES5 - mozna obejsc to za pomoca APPLY !
// PRZYPOMNIENIE APPYL ! Czyli to jest to samo co CALL ale PRZYJMUJE JAKO PARAMETR TABLICE !!!
// This ustawiamy na Math
console.log( Math.max.apply(Math, numbers) ); 

/// SPREAD !!!!!!!! : ///
// MOWIMY DOSLOWNIE TAK: masz tutaj przekazana tablice ALE ROZSTRZEL JA NA POJEDYNCZE SKLADNIKI !
console.log( "spread:" + Math.max(...numbers) );
// Zapis identyczny jak w REST, rozni sie wylacznie kontekst !
// REST jest PRZY DEKLAROWANIU FUNKCJI  !!!
// SPREAD JEST PRZY PRZEKAZWYANIU PARAMETRÓW !!!

// SPREAD DZIALA NA WSZYSTKIM CO MA W SOBIE TZW  I T E R A T O R
// Czyli nie tylko na liczbach ale tez m.in. na Stringach 

// Dalsze zastosowania SPREAD:
console.log( 100, ...numbers, 20, 30 ); // Jak najbardziej poprawne  // 100,12,3,9,22,11,6,20,30

// ŁĄCZENIE TABLIC !!!
//ES5
let numbers2 = [2, 33, 10].concat(numbers);
console.log(numbers2);
// ES6 ZE SPREAD !!
let numbers3 = [3, 44, 20, ...numbers];
console.log( numbers3 );    // DZIALA !

// Tworzenie tablicy z kilku tablic !
console.log(  [...numbers, ...numbers3, 9999, 888] ); // Pieknie połączone

// UWAGA na stringi bo trzeba dobrze je przypisywac:
//let s = ..."Piotr";  // Źle !!
let s = [..."Piotr"];
console.log(s);  // Dziala ! :  ["P", "i", "o", "t", "r"]

// Mozna robic kombo:
console.log( [...numbers2, 123, ..."dupka", "cos", 12] );  // dziala
//[2, 33, 10, 12, 3, 9, 22, 11, 6, 123, "d", "u", "p", "k", "a", "cos", 12]

/// Rozdzielanie stringu na pijedyncze znaki ES5 vs ES6:
function stringToArray( string = "" ) {     // ES5 
    return string.split("");
};
console.log( stringToArray("piesss") );

function stringToArrayES6( string = "" ) {  // ES6
  return [...string];  
};
console.log( stringToArrayES6("myszszszsz") ); // idelanie :)
// Uwga dzieli domylsnemu parametrowi "" funckja nie wywali bledu w przypadku nie podania zadnego parametru !
// bedzie jeszcze wielokrotnie w tym kursie SPREAD wykorzystyway (co swiadczy o jego przydatnosci)