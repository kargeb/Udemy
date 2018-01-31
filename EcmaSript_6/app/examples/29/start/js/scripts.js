// 32. Symbole wbudowane 

// Jesli byly watpliwosci czy symbole sa przydatme to tutaj przkonasz sie ze TAK ! No i mimo ze nie bedziesz na codzien z wszystkich z nich korzystal TO NIE SPOSÓB SOBIE WYOBRAZIĆ ŻE KTOŚ MOŻE NIE WIEDZIEĆ O ICH ISTENIENIU I WYKORZYSTANIU !!!
//Najważniejsze w Symbolacvh to to ŻE WARTOŚĆ W NICH JEST ZAWSZE UNIKALNA ! I ES6 daje nam wlasnie takie symbole wbydowane

/*   WSZYSTKIE WELL-KONWN SYMBOLS !

- Symbol.hasInstance
- Symbol.toPrimitive
- Symbol.toStringTag
- Symbol.isConcatSpreadable
- Symbol.species
- Symbol.match, Symbol.replace, Symbol.search, Symbol.split
- Symbol.unscopables
- Symbol.iterator

*/

class Person {  // KLASA ABSTRAKCYJNA DZIĘKI LINIJCE Z new.target

    constructor(firstName, lastName) {

        if(new.target === Person) {     // DZIĘKI TEMU JEST TO KLASA ABSTRAKCYJNA
            throw new Error("Klasa Person nie może być użyta bezpośrednio.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

class Employee extends Person {

    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }

    sayHello() {
        return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`;
    }

}

let employee1 = new Employee("Jan", "Kowalski", "programista");

// TO SĄ KURWA HARDOKOROWE RZECZY, i korzstają z nich raczej sami madzy level 70 ALE mozna to chyba ogranać !
// Chodzi o to ze ES6 Dał możliwość grzebania W SAMYM INTERPETERZE JS ! Np za pomoca PROXY i Symboli wlasnie
// No i pierwszy symbol  Symbol.hasInstance  moze sam ustawic czy dany obiekt BEDZIE instancja danej klasy CZY TEZ NIE !

// PIERDOLE !!! Za duzy Hardkor ...
// JEDEN SYMBOL JEST ZAJEBITY -->  Symbol.iterator  ALE O NIM BEDA OSOBNE LEKCJE I Z NIEGO WLASNIE BEDZIE SIE NAJCZESCIEJ KORZYSTAC !