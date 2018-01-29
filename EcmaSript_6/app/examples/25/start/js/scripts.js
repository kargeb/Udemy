// 28. Uzycie super na obiektach 

// Z Super mozemy korzystac rowniez w przypadku obiektow

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

const employee1 = {
    firstName: "Jan",
    lastName: "Kowalski",
    position: "programista",
    sayHello() {
        
        // ---2--- Po ustawieniu prototypu WYTARCZU WPISAC TO Z SUPER !
        return `Nazywam sie ${super.sayHello()} i pracuję jako ${this.position}`;
    }
};
// Chcemy sobie wylacznie dla 1 obiektu pozyczyc metode sayHello z Person bez robiecnia calej dodatkowej klasy pochodnej
// Musimy przede wszytkim ustawić NOWY PROTOTYP dla emplotee1, w tym momemcnie jest to OBJECT a my chcemy go przestawić na Person !

Object.setPrototypeOf(employee1, Person.prototype); // ---1---TO NAJPIERW !!!
//  I wlasnie w ten sposób to robimy, teraz BEZPOŚREDNIM prototypem employee1 jest Person a dobiero pozniej Object

// STARY SPOSÓB NA SKORZYSTANIE Z metody sayHello na obiekcie employee1:
console.log( Person.prototype.sayHello.call(employee1) );  // działa

console.log( employee1.sayHello() );  // Nazywam sie Jan Kowalski i pracuję jako programista DZIALA

// Czyli z SUPER mozna korzystac w obiektach, nie tylko w klasach ALE MUSI TAKI OBIEKT MIEC USTAWIONY PROTOTYP, gdyby nie bylo SUPER to JS szukalnby tej funkcji sayHello na Object.prorotype
// Dziala to na ZASADZIE WYPORZYCZENIA ! Czyli THIS z metody sayHello() bedzie kierowac na wlasciowsci z obiektu employee1 !

// UWAGA ! SUPER DZIALA WYLACZNIE NA SKROCONYM ZAPISIE FUNKCJI  sayHello() {} !
// Nie zdzaiala na  sayHello: function()  ANI NA STRZAŁKOWEJ

// JEST jeszcze przyklad o statcznej metodzie ktora automatcyznie robi z danego obiektu takie pseudodziedziczenie ale kurwa juz wymieakam
////////// (mozna ta jedna minute jeszcze keidsy tam odkonczyc)