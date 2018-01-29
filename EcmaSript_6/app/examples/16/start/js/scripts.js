// 19. Domyslne wartości i operator REST

//Wykorzystanie REST w destructuringu (dekompozycji) tablic

let numbers = [10, 20, 30, 40, 50];

// NA SZYBKOCSI:

let [jeden, dwa, , ...reszta] = numbers || [];

// Otrzymamy dwie zmienne z 2 pierwszymi elementami, trzeci pomijamy a cala reszta JEST W TABLICY o nazwie jaka podalismy po operatorze REST
console.log( jeden, dwa, reszta );

/////////////////////
// DOMYŚLNE WARTOŚCI PRZY DEKOMPOZYCJACH

let numbers2= [10];

let [first, second] = numbers2 || [];
console.log(first, second);  // second oczywiscie UNDEFINED !

// Aby stworzyc domyslna wartosc WYSTARCZY WSTAWIC = PO NASZEJ ZMIENNEJ !
let [first1, second2 = 2] = numbers2 || [];
console.log(first1, second2);  // 10, 2  !

//Uwaga tutaj tez dziala lazy evaluation 
// w przypadku [third = jakasFunckja()] funkcja nie wykona sie gdy third dostanie wartosc

/////// DOMYŚLNE PRZY OBIEKTACH:

let person = {
    firstName: "jan",
    lastName: "kowalski",
    age: 49
};

let { firstName, lastName, age: wiek = 37, job = "programista", address: adres = "handzlowka" } = person || {};
console.log( firstName, lastName, wiek, job, adres );

// W powyzszym przykładzie JEST WSZYSTKO z czym mozna sie spotkac w przypadku domyslnych watosci
// WRACAJ TUTAJ gdy bedziesz sobie musial przypominec