// 25. Dziedziczenie

//PRZYPOMNIENIE ES5 /////////////

function PersonOld(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonOld.prototype.sayHello = function() {
    return this.firstName + " " + this.lastName;
};

function EmployeeOld(firstName, lastName, postion) {
    PersonOld.call(this, firstName, lastName);     //  --1-- te dwie ustawia nam konstruktor Person
    this.position = postion;                    // te dwie ustawiamy sami
}
// teraz rozchodzi sie o wywolywanie funkcji sayHello przez obiekt Emplyee
//Object.create -> Tworzy nowy obiekt ktróego prototypem JEST OBIEKT PODANY W NAWIASIE !
EmployeeOld.prototype = Object.create(PersonOld.prototype);  // --2--
// Jako ze nadpisalismy konctruktor Employee TRZEBA GO NA NOWO USTAWIC
EmployeeOld.prototype.constructor = EmployeeOld; // --3--

// Uwaga ! Nadpisujemy teraz funkcje sayHello dla Employee w ten sposob ze w srodku niej wywolamy sobie sayHeloo dla person i pozniej dodamy jeszcze cos od siebie
EmployeeOld.prototype.sayHello = function() {
    
    var name = PersonOld.prototype.sayHello.call(this);    // tak niestety trzeba wywolywac funckje person ....
    
    return "STARE DZIEDZICZENIE Nazywam sie " + name + " i racuję jako " + this.position + "."; // no i nidby dziala
}

var Employee1= new EmployeeOld("Jan", "Kowalski", "Programista");

console.log( Employee1 );
console.log( Employee1.sayHello() );    // DZIAŁA !

///// OGÓŁLNIE TO JEST TO KURWA PRZEPIERDOLONE !!! ///////////////
/////////// NOWE DZIEDZICZENIE ES6 ///////////////////////////////
//////////////////////////////////////////////////////////////////

class Person {  // TO JEST KLASA NADRZEDNA
    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Przekazujemy ze EMPLOYEE ma ROZSZERZAC PERSON !
class Employee extends Person {
    
    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }
// UWAGA !! 
//  Po pierwsze !  - super()  MUSI ZOSTAC WYWOLANE ! Musi samo z siebie ! Jesli nie bedzie wywolane to bedzie blad !    
//  Po drugie ! - THIS musi byc uzyte dopiero po super ! Nie moze byc przed nim BO ROWNIEZ BEDZIE BLAD !

// Teraz jeszcze nadpiszemy sobie funkcje sayHello
    sayHello() {
        
/*        var name = super.sayHello();    // TYLKO TYLE ! Zadnych prototypow ! Ale pamietaj ze SUPER z KROPKA a nie nawiasami !
        return "NOWE DZIEDZICZENIE Nazywam sie " + name + " i racuję jako " + this.position + ".";*/
// TO u gory JEST OK ale mozna juz zaszalec na maxa:        
        return `NOWE DZIEDZICZENIE Nazywam sie ${super.sayHello()} i racuję jako ${this.position}`;
    }
}

let employee2 = new Employee("Zbyszek", "góra", "kierownik");

console.log(employee2);
console.log( employee2.sayHello() );  // DZIALA ! bez zadnego przestawiania niczego ! Zadnych prototypow !!!

// UWAGA ! BAAARDZO WAZNA RZECZ ! Gdybysmy w klasie Employee nie napisali conctructora TO JS SAM NAPISALBY SOBIE DOMYSLNY ! 
// A wygladalby on tak:
//        constructor(...args) {
//            super(...args);
//        }
/// CZYLI JESLI NIE CHCEMY DOPISYWAC jakiejs wlasciwosci w konstruktorze to mozemy go wcalnie nie pisac ! Ale jesli chcemy jakas wlasiwosc dopisac nowa, charakterystyczna dla klasy Employee no to Trzeba TO ROBIC WLASNIE W KONSTRUKTORZE !
// CZYLI gdybysmy z naszej klasy Employee usueli conctructro to wynik wygladalby tak:
//   NOWE DZIEDZICZENIE Nazywam sie Zbyszek góra i racuję jako undefined    !!!

// NO i jeszcze jedna w chuj wazna rzecz ! Właściwości obiktu można dopisywać WYŁĄCZNIE ZA POMOCĄ JEGO FUNKCJI !!
// Nie przejdzie w zaden sposób że napiszesz sobie w klasie -->  name: "Piotr"  /// BEDZIE DUPA !!

// Ogilnie rzecz biarac to mimo ze jest to wszystko Syntactic Sugar TO KURWA BEZ PORÓWNANIA PISZE SIE DZIEDZICZENIE W NOWYM ES6 niz za pomoca tych pierdolonych prototypw w ES5 !!!