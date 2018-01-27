//5. Nowe metody dla object

// Kilka nowych STATYCZNYCH metod dodanych DO OBIEKTU "OBJECT" !!!

//////////////////////  1  Object.setPrototypeOf();//////////////////////////

// To jest klasyczny zapis "klasy", KONSTRUKTOR, w starym ES5  !!
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function() {    // i dodanie funkcji do prototypu
    return this.firstName + " " + this.lastName;
};

let person1 = new Person("jeden", "ktos"),
    person2 = new Person("drugie", "cos");

console.log(person1.sayHello());    
console.log(person2.sayHello());    // DZIAŁA ! wszystko po staremu

// KURWA zaawansowane to jest ...
// Chodzi o to ze nie da sie zmienic prototypu tylko dla jednego obietku tylko od razu dla calego konstruktora

//    Person.prototype.sayHello = function() {    // i dodanie funkcji do prototypu         // NADPISANIE dla wszystkihc !!!
//        return this.firstName + " " + this.lastName + " dupa dupa nowa funkcja w prototypie";  // NADPIASNIE dla wszystkich !!!
//    };

// No i z ES6 mamy taka mozliwosc, robi sie to funckja ->  Object.setPrototypeOf() !!

let methods = {      // METODA DO NOWEGO KONSTRUKOTRA DLA JEDNEGO OBIEKTU
    sayHello: function() {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}

Object.setPrototypeOf(person1, methods);

console.log(person1.sayHello());    // DZIAŁA ! Tylko ten obiekt sie zmienil !
console.log(person2.sayHello());


//////////////////////  2  Object.assign() //////////////////////////
// Jest to metoda bardzo podobna do tej z hQuery ->  extends() !!

function slider(config) {
    
    let defaults = {
        speed: 300,
        pause: 3000,
        easing: "linear"
    };
// No i chcemy zmiksowac jedno z drugim, czyli zastapic domyslne wartosci tymi przekazanymi w sliderze 
// Metoda ta przyjmuje dowalna liczbe parametrow i łączy je OD PRAWEJ DO LEWEJ !
// UWAGA ! Wstawiamy na początku {} czyli pusty obiekt ZEBY NIE NADPISAC nazwy "defaults" !    
    const options = Object.assign({}, defaults, config)
    
    console.log(options); // Działa ! speed jest 300 ale pause juz jest 1000
}

slider({
    easing: "ease-in-out",
    pause: 1000,
    fn() {
        // TA FUNKCJA W METODZIE ASSIGN będzie REFERENCĄ ! a wieć każda zmiana w niej będzie AUTOMATYCZNIE ZMIENIANA W JEJ WYWOŁANIACH gdzie indziej !
    }
})
// UWAGA ! Pamiętaj ze wartosci prymitywne czyli zmienne i stringi SĄ KOPIOWANE ! A gdybys chcial dodac funkcje TO BĘDZIE TO REFERENCJA !!!

//////////////////////  3  Object.is() //////////////////////////
//  Porównywanie WARTOŚCI !
// i to jest dokladnie to samo co " ==== "
console.log(  Object.is(1, 1)  );//  - > TRUE

// UWAGA ! Ciekawostka !
console.log(NaN === NaN);   // FALSE !!!! I TO JEST DZIWNE ALE TAK JEST !
// Wiec gdy chcemy porownac to trzeba robic tak:
console.log( isNaN(NaN) );  // TRUE !!!!

// No i tez sa jaja z czyms takim ! :
console.log(-0 === +0 ); // TRUE ! A wlasnie chuja bo to sa inne wartości !!!

// I tutaj z pomoca przychodzi Object.is() bo on i przy Nan i przy -0 +0 ZWRACA POPRAWNE PORÓWNANIE !

console.log(  Object.is(NaN, NaN)  );   // TRUE  !!
console.log(  Object.is(-0, +0)  );     // FALSE  !!

// Ogolnie działa ona ZAWSZE jak === ALE w tych 2 konkretnych przypadkach DZIAŁA LEPIEJ niż === !