// 4. Zmiany w Iterałach obiektów

// (nie ma funkcji oplatajacej wylacznie ze wzgledu na czytelnosc)

// ITERAŁ OBIEKT to jest obiekt tworzony w ten sposób:  {} a nie zadnym jakims konstruktorem
// tak samo to jest iterał tablicy: []

let firstName = "Jan",
    lastName = "Kowalski";

let person = {
    firstName: firstName,
    lastName: lastName
}
// Uwaga to u gory to podobno czesty przykład ze w obikecie przypisujemy wlasciwosci o dokladnie tych samych nazwach
// W ES6 tworcy wprowadzili w takich sytuacjach o taklie o :

let person2 = {
    firstName,
    lastName
}
// I TO JEST DOKLADNIE TEN SAM EFEKT CO W STARYM ZAPISIE !
console.log(person, person2);

// Uwaga mozna skrócić zapis w ten sposób:

let person3 = { firstName }

// Kolejna zmiana to tzw CONCISE METHODS i jest to skrócony zapis METOD w obiektach
// Stary zapis:

let person4 = {
    firstName,
    lastName,
        getFullName: function() {
            return this.firstName + " " + lastName;
        }
};

// NOWY ZAPIS METOD !!!!  // Wywalenie ": function" !!!
let person5 = {
    firstName,
    lastName,
        getFullName() {     // WYWALENIE  ": function" !!
            return this.firstName + " " + lastName;
        }
};
console.log ( person4.getFullName() );
console.log ( person5.getFullName() );

// Tutaj mamy doskonaly przyklad tzw SYNTACTIC SUGAR czyli czegos co dziala dokladnie tak samo tylko ma zmienioną delikatnie zkładnie

// UWAGA ! Teraz nowa ZAJEBISTA RZECZ dzięki ktorej w iterale obiektu możemy tworzyć DYNAMICZNE WŁAŚCIWOŚCI
// DYNAMICZNE WLASCIWOSCI W OBIEKTACH:

let fnName = "getFullName2";

let person6 = {
    firstName,
    lastName,
//    fnName:  // Tak się nie da botworzysz nowa wlasciwosc calkiem
    // TAK SIĘ ROBI !!!!
    [fnName]() {  // TAK SIĘ ROBI !!!!
        return this.firstName + " " + lastName; // TAK SIĘ ROBI !!!!
    },
// UWAGA ! Wlasciwosci tez mozemy tworzyc dynamicznie !!
// w [] mozna kazde wyrazenie JS wjebac, nawet funkcje wywowal i JS to obliczy i wstawi jako nazwę   
    [fnName + "1"]: "dupaaaaa"
    
}
//    // STARY ZAPIS GYDBYSMY CHCELI:
//    person[fnName] = function() {   // Stary zapis !               
//        return this.firstName + " " + lastName; // Stary zapis !
//    }

console.log(person6.getFullName21); // DZIAŁA !!!

//////// CZYLI PODSUMOWUJĄĆ !!
//    - mozna tworzyc skroce nazwy wlasciwosci jesli nazwyaja sie tak samo poza biektem 
//    - mozna w skrocony sposob tworzyc metody w obiektach bez ": function"
//    - mozna dynamicznie tworzyc nazwy metod i obiektow 