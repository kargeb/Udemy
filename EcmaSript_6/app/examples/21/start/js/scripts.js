// 24. Tworzenie klas

// niestety tylko Syntactic Sugar

//////////////////////////////////////////////////////////////////
// PRZYPOMNIENIE "Klas" z ES5 a w zasadzie tworzenia Konstruktorów

// Po pierwsze funkcja wykorzystujaca THIS
function PersonOld(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Po drugie funckja przpisana do prototypu
PersonOld.prototype.sayHello = function() {
    return this.firstName + " " + this.lastName;
}

// Po 3 obiekt utworzony PRZEZ SLÓWKO NEW !
var person1 = new PersonOld("Jan", "Kowalaski");

console.log( person1.sayHello() );
//////////////////////////// KONIEC POWOTRKI !!! /////////

////////////////////////////////////////////////
//// NOWE KLASY ////// ES6 !!!!!!! /////////////
class Person {
    // uwaga constructor moze byc tylko TAK tworzony !! 
    // Zadne  constructor: function()  bo bedzie blad
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }
//         return this.firstName + " " + this.lastName;
//  zrobilsimy sobie template string zeby bylo nowoczesniej    
}

var personES6 = new Person("ułan", "bator");
console.log( personES6.sayHello() );  // dziala !

// Wiadomosci o KLASACH !
//  - Klasy NIE SA HOISTOWANE ! W przeciwieniscie do FUNKCJI ! Czyli nie moge utworzyc obiektu klasy NAD JEJ DEKLARACJA ! 
//  - Klasy nie sa dodawane jako obiekty WINDOW !!
//      Czyli istnieje  window.PersonOld
//      Ale nie istnieje window.Person !! // undefined !!
//  - Uwaga bardzo przydatne jest to ZE NOWEGO obiektu klasy Peros NIE MOZNA UTWORZYC bez NEW ! Wywali bląd !
//     A starą techniką mozna bylo to zrobic i wtedy przypisywalo sie wszystko wlasnie do obiektu window !
// No i trzeba pamietac ze zarowno nowa klasa jak i stara TO SĄ FUNKCJE czyli maja swoje prototypy, tutaj nic sie nie zmienilo