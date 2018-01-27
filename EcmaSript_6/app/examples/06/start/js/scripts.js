// 9. Nowa konstrukcja ARROW FUNCTION 

// Jest to zwykła funckja anonimowa w tym przypadku tzw wyrażenie funkcyjne (function expresion)
let getName = function() {
    return "Jan";
};
// OTO NOWY ZAPISC FUNKCJI ANONIMOWYCH, tutaj nie przyjmujemy zadnych parametorw a zwracamy string
// TAK WŁAŚNIE WYGLĄDA FUNKCJA STRZAŁKOWA
let getName2 = () => "Jan2";    
console.log(  getName2()  );    // DZIAŁA !

// Uwaga:
// Gdy nie przyjmujemy zadnych parametrow i chcemy szybko wyrzucic jakies wyrazenie proste to " => " zonacza RETURN tak jak w naszym wypadku
// ALE gdy juz chcemy sobie zrobic konkretne cialo funckji NO TO MOSIMY standardowo wpisaywac return
let getName3 = function(kid) {  // STARY ZAPIS ES5 !!!!
  
    if(kid) {
        return "Jaś";
    } else {
        return "Jan";
    }     // Pamiętaj ze mozna to zapisac krocej za pomoca tych operatorów  :  ?
};

let getname4 = (kid) => {       // NOWY ZAPIS ES6 !!
    if(kid) {
        return "Jaś";
    } else {
        return "Jan";
    }
}
console.log( getname4(),  getname4("dupka") );  // działa ! 

// ALE UWAGA ! Jeżeli mamy tylko jeden argument TO MOZNA POMINĄC NAWIASY !!!!

let getName5 = kid => kid ? "Jaś" : "Jan";  // Jedziemy juz po bandzie kurwa, moze byc bez ciala bo mamy tylko jedno wyrazenie
console.log( getName5(true) );  // DZIAŁA !!

////// Problemy przy iterałąch obiektów:  ///

let getObject = function() {
    return { firstName: "Piotr" };      // STARY ZAPIS ES5
}

let getObject2 = () => { firstName: "Piotr2" }; // NOWY ZAPIS ES6
console.log( getObject2() );    // UNDEFINED !!

// Dzieje się tak dlatego ze interpeter JS nie traktuje w tym przypadku {} jako iterału obiektu tylko jako CIAŁO funkcji strzałkowej no i lekarstwem na to jest OPLECENIE TEGO W ()

let getObject3 = () => ({ firstName: "Piotr3" }); // NOWY ZAPIS ES6
console.log( getObject3() );    // DZIAŁA !!!  mamy zwrocony nowy obiekt

///// Zmienna ARGUMENTS  ///////

function args() {
    console.log( arguments );
}
args(1, 2, 3);  // Zwrocone kolejne argumenty i kilka innych rzeczy czyli ok

let args2 = () => {
    console.log( arguments );
}
//args2(1, 2, 3, 4, 5);   // BLĄD !! FUNKCJA STRZAŁKOWA NIE POSIADA DOSTĘPU DO AMIENNEJ ARGUMENTS !!!!!!!!! WAŻNE !!!!

// Istnieje pułapka ! No bo jak stworzymy funckje strzałkową WEWNĄTRZ INNEJ FUNKCJI ! No to posiada ARGUMENTS właśnie tej nadrzędnej funkcji ! A nie jej własne !!

function getArgs() {
    
    let args3 = () => {
        console.log( arguments );   // TO NIE JEST ZMIENNA args3 TYLKO getArgs !!!
    }
    
    args3();
}
getArgs(4, 5, 6, 7);  // DZIAŁA, ALE TO SĄ ARGUMENTY FUNKCJI getArgs !! A nie args3 !!!

///// KIEDY KORZYSTAC Z FUNKCJI STRZAŁKOWYCH ??
// Otóż są idelane jako funkcje CallBack ! np w sortowaniu tablicy albo co np:

let arr = [10, 22, 12, 4, 0, 67, 34];

// STARY ZAPIS ES5 !!!!!!!
let gt20 = arr.filter(function(value) { // TO JEST FUNKCJA CALLBACK
    return value > 20;
    // gdy bedzie wieksza niz 20 to metoda ta zwroci te liczby
})
console.log( gt20 ); // zwraca [22, 67, 34]

// NOWY ZAPIS ES6 
let gt30 = arr.filter( value => value > 30 ); // NOWY ZAPIS ES6 !!

console.log( gt30 ); // DZIAŁA !! (sam napisalem :)