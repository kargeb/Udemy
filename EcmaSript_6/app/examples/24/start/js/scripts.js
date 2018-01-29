// 27. Metody Statyczne

// Mozna to bylo zrobic w ES5 ale w inny sposob niz ES6
// Czym rozni sie metoda STATYCZNA od zwyklej, czyli dodanej na prototypie ?
// OTÓŻ metoda dodana na prototypie, taka jak sayHello() moze byc wywolania JEDYNIE na OBIEKCIE danej klasy czyli dopiero po jego UTWORZENIU ! 
// person1.sayHello();      ->  na obiekcie
// A metody statyczne MOZNA WYWOLYWAC BEZPOSREDNIO NA KLASIE ! Np TAK JAK METODY MATH !!!
// Person.statisMethod();   ->  na klasie


class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    ////////////////// NOWA METODA NA STATYCZME METODY ES 6///
    static createES6(firstName, lastName) {
        return new Person(firstName, lastName);
    }   // to pieknie dziala ale teraz bedzie zabawa z desructuring
    //////////////////////////////////////////////////////////   
    
///////////////////////////// MERITUM START ////////////////////////////////////////////////////    
    static create( {fName: firstName, lName: lastName} = {} ) {
        return new Person(firstName, lastName);
    }
}

let json = `{
    "fName": "Anna",
    "lName": "Kowalska"
}`;

let personDes = Person.create(  JSON.parse(json)  );

console.log("Obiekt z destructuring: ")
console.log( personDes );
console.log("-------------------------")
/// TO JEST BARDZO PRZYDATNY PRZYKLAD GDYBYS CHCIAL FAKTYCZNIE COS REGULARNIE Z JSONA POBIERAC !

// UWAGA ! Metod statycznych nie da sie wywolac na obiektach ! Wylacznie na klasie !
// UWAGA ! Dziedziczone klasy TEZ DZIEDZICZNA METOSY STATYCZNE !
// UWAGA ! Gdybys chcial do klasu dodac sobie STATYCZNE WLASCIWOSCI no to trzeba to juz robic POZA KLASA !
Person.ID = 10;
console.log( Person.ID );  // 10
/////////////////////////////// MERITUM END /////////////////////////////////////////////////////

///////////// STARA METODA NA METODE STATYCZA W ES5
Person.createOld = function(firstName, lastName){
    return new Person(firstName, lastName);
}

let person2 = Person.createOld("Anna", "Nowak");
console.log( person2 );  // ok
/////////////////////////////////////////////////

let person1 = new Person("Jan", "Kowalski");

let person3 = Person.createES6("PIes", "kot");
console.log( person3 );         // dziala !