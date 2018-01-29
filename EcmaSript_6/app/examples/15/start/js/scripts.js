// 18. Dekompozycja zagniezdzonych struktur

// Wyciaganie danych z takich struktur bedzie wygladac strasznie ale jest do ogarneicia
// Mozna rowniez bez problemu laczyc destructuring tablic oraz obiektow

let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49,
    job: {
        name: "Programista",
        experience: 20
    },
    favNumbers: {
        list: [2, 7, 3]
    }
};

// Przypomienie na poczatek:
let { firstName: imie, age: wiek } = person || {};
console.log( imie, wiek );      // Dziala

// Wyciagniemy teraz zagniezdzone wlasciowsci z person, ZEBY BYLO LATWIEJ ODPOWIEDNO TO SFORMATUJEMY:
// Uwaga na wlasicowsc JOB !!! To moze wprowadzac w blad ale w przypadku takiego formatowania WSZYSKO JEST DO OGARNIECIA !
let {
    firstName: fName,
    age,    // pamietaj ze to jest skrócony zapis  age: age  w ES6 !!
    job: {
        name: jobName,
        experience: jobExperience
    },
    favNumbers: {
        list: [, second]  // !! Tak sie wyciaga tablice !
    }                     // skomplikowany zapis ale to jest to co w poprz lekcji !!!
} = person || {};

console.log( fName, age, jobName, jobExperience, second );  // DZIALA !

// PAMIETAJ ze utworzyles wylacznie te zmienne ktore sa po : oraz maja ta sama nazwe !
// To jest naprawde dobra techika i tylko trzeba torche sie z nia obyc a z czasem bedziesz to napierdalac w jednej linijce !