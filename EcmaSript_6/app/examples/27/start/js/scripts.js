// 30. Tworzenie Symboli

// Typ prymitywny typu SYMBOL

const hidden = Symbol("ściśle tajne");
const hidden2 = Symbol("ściśle tajne"); // mimo ze ta sama nazwa to jest to unikat

console.log(hidden);  // Symbol(ściśle tajne)
console.log( typeof hidden ); // TYP TO "SYMBOL" !
// Czyli jest to taki sam typ prymitywny jak NUMBER lub STRING !

// Uzywajac SYMBOL mamy 100% pewnosc ze otrzymujemy UNIKALNA wartosc mimo ze moga nawet tak samo sie nazwyac !
// Uzywa sie tego przede wszystkim do debugowania

let person = {
    [hidden]: "12331aasd+-2133$%aasd"   // uwaga, musi byc w []  !
};

console.log( person );  // {Symbol(ściśle tajne): "12331aasd+-2133$%aasd"}

// I uwaga od teraz jest to NONENUMERABLE !! Czyli nie wyliczy tego np petla for in 
for(let key in person) {
    console.log(key);
};

// Uwaga nie nalezy tego traktowac jako cos ukrtego bo sa metody ktore to wylawiaja, jest to bardziej cos co mozna "zapisac wewnatrz"

// JEDYNY SPOSOB ZEBY SIE DO TEJ ZMIENNEJ ODWOLAC TO WYWOLAC JAK TAK JAK ZAPISANA JEST W OBIEKCIE:
console.log(person[hidden]);  // UWAGA !! BEZ ".' !!!

// Praltyczne zastosowanie:
// ZROBIMY COS NA WZOR PRYWATNEJ MOETODY W KLASIE !
const FORMAT = Symbol("format()");

 class Person {

     constructor(firstName, lastName) {
         this.firstName = firstName;
         this.lastName = lastName;
     }

     sayHello() {
         return this[FORMAT]( `${this.firstName} ${this.lastName}` );  // BEZ "." !!
     }

     [FORMAT](text) {
         return text.toUpperCase();
     }   
 }

let person1 = new Person("Jan", "Kowalski");

console.log( person1.sayHello() );

// DOKOCNZ !!!!!!!!!!!!!!!!!!