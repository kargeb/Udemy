// 29. Ciekawostki odnosnie klas

////////////// KONSTRUKTOR ES5 ////////////
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function() {
    return this.firstName + " " + this.lastName;
};

///////////////////////// CLASS ////////////////
 class PersonCl {

     constructor(firstName, lastName) {
         this.firstName = firstName;
         this.lastName = lastName;
     }

     sayHello() {
         return `${this.firstName} ${this.lastName}`;
     }

 }

// TE DWA ZAPISY U GÓYW ROBIĄ PRAKTYCZNIE TO SAMO ! TO JES TYLKO SYNTACTIC SUGRAR ! 
// Ale jednak jest pewna roznica miedzy tymi dwoma sposobami tworzenia klas i wlasnie teraz o niej:

let person1 = new Person("Jan", "Kowalski");

for ( key in person1) {
    console.log(key);
};
// Dostalismy u gory dokladnie taki wynik:
//firstName,  lastName,  sayHello
// PRZYPOMIENIE ! Metody dodawane bezposrednio na protypie SA TZW ENUMERABLE czyli wyliczalne, i np przy petli IN sa one widocze !

// JEDNAK GDYBY ZROBIMY TO SAMO Z class no to wtedy, mimo ze sayHello jest traktowane jak przyp protorypie TO JEST TA METODA NONENURABLE czyli NIEWYLICZALNA ! Czyli nie widac jej w petli for in !!
let personClll = new PersonCl("Jan", "Kowalski");

for ( key in personClll) {  // firstName, lastName ! (bez sayHello)
    console.log(key);
}

////// TAK OTO MOZEMY ZROBIC W ES5 zeby metoda klasy NIE BYLA WYLICZALNA !
// Trzeba pogrzebac w Object.definePropery i ustawic pozycje enumerable !
// Ten obiekt defineProperty ma pewnie inne ciekawe wlasciwosci ale to juz na inne czasy
Object.defineProperty(Person.prototype, "sayHello", {
    enumerable: false,
    value: function() {
        return this.firstName + " " + this.lastName;
    }
});

let person2 = new Person("cos", "gdzies");

for (key in person2) {  // piesrName, lastName // Tyle ! BRAK SAYHELLO
    console.log(key);
}
//---- 1 ---
/// CZYLI to byla pierwsza ciekawostka ze class tworzy domyslnie metody Nonenumerable a w ES5 jak cos sami musmimy sobie je takimi ustawic !

//--- 2 ---
//Ciekawostka druga to taka ZE ZA POMOCA EXTENDS mozemy dziedziczyc TAKZE PO STARYM ZAPISIE KLAS W ES5 ! Czyli po funkcjach, O ILE NIE SĄ STRZAŁKOWE !

class Employee extends Person {
    
     constructor(firstName, lastName, position) {
         super(firstName, lastName);
         this.position = position;
     }

     sayHello() {
         return `Nazywam się ${super.sayHello()} i pracujęjako ${this.position}`;
     }    
}

var employee1 = new Employee("jakub", "dzik", "dyrektor");
console.log( employee1.sayHello() );    // działa !
// Jak widac mozna class dziedziczyc po KONSTRUKTORZE (funckji) Person w starym zapisie ! 
// Jest to mozliwe dlatego ze wiele nowych klas napisanych juz w ES6 dziedziczy po starych "klasach" pisanych w ES5

//--- 3 ---
// Ciekawostka 3 - WSZYSTKO CO JEST NAPISANE WEWNĄTRZ CLASS BEDZIE TRAKTOWANE JAKO STRICT MODE ! Nie da się tego wyłączyć ! "Klasy" w ES5 nie mialy tego, tam kod zachowywal sie bez Strict Mode !

// --- 4 ---
// Ciekawostka 4 - NA CLASS nie da się korzytsać z metod CALL i APPLY !!! A na "klasach" ES5 dalo sie to robic !

//--- 5 ---
// Jest to takie cos jak "new.target", otoz jak wstawimy taki kod w jakiejs klasie, to gdy cos bedzie po niej dziedziczyc TO TEN NEW.TARGET kieruje NA KLASE KTORY DZIEDZICZY WLASNIE PO NASZEJ ! Czyli jak utworzymy new Employee ktora dziedziczy po Person, To new.target w klasie Person BEDZIE POKAZYWAL NA EMPLOYEE !
// i dzieki tej wklasciwosci mozna stworzyc klasy pseudo abstrakcyjne ! Czyli takie z kotrych nie mozna tworzyc obiektow a sa jedynie szablonami dla klas dziedziczonych. Jesli w takiej klasie kotra ma byc abstrakcyjna wpiszemy cos takiego  
//  if( new.target === nazwaKlasyAbstr) { throw new Error("Klasy abstrakcyjnej nie mozna uzywac do tworzenia obiektow") }
// Jesli tego nie czaisz to jest to minuta 6:00 !

// --- 6 ---
// Mozna tworzyc KLASY ANONIMOWE czyli nie zawierajaca "name":
function createInstance(fromClass, ...args) {
    return new fromClass(...args);
}

let person3 = createInstance(class {    // najpierw cialo klasy
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}, "osoba z ", "klasy anonimowej");     // pozniej parametry

console.log(person3);  
console.log( person3.constructor );  // bezposrednie odowlanie sie do klasy
console.log( person3.constructor.name ); // dowod ze nie ma imienia 

// TO TYLE CIEKAWOSTEK. Najwazniejsza wg niego to ta ze mozna dziedziczyc PO FUNKCJACH ES5 o ile nie są STRZAŁKOWE ! I to w zasadzie po wszystkich chyba funkcjach a nie tylko tych robiacych za Klasy ??