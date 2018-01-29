// 21. Template Strings

//Zmiany w ES6 przy pracy ze stringami
let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49
};

let { firstName, lastName, age } = person;

let info = "Imię: " + firstName + ", nazwisko: " + lastName + ", wiek: " + age + " lat.";

// UWAGA ! Od ES6 mozmey stringi oplatac nowym znakiem a jest to ====  ``  !! Czyli to nad ~ !
// i teraz wszystko co wstawimy w ${  }  bedzie traktowane jako wyrazenie JS 
// I TO SIĘ NAZYWA  INTERPOLACJA !!!
let info2 = `Imię: ${firstName}, nazwisko: ${lastName}, wiek: ${age} lat. ${2 + 2} \${2+2}`;
// ZWROĆ uwage na dodawanie w ostatniej czesci info2 !
// JESLI chceszs DOSLOWNIE wpisac cos z dolarem zeby wysiwetlilo to dajemy "\" !!
console.log(info);
console.log(info2); // ok !

// Uwaga ! Druga BARDZO przydatna rzecz to formatowanie stringu dokladnie w taki sam sposob jak w edytorze !

// STARY ES5:
let button = "Wciśnij mnie";
// UWAGA ! "\" jest to zlamanie linii !!!  (przypomnienie)
let template = "\
<button> class='btn'>\
    <span>" + button + "</span>\
</button>"

console.log(template);  // orobilismy sie a i tak DUPA po szystko jest w jednej linii w conoli !

// NOWY ES6 !!!!!
let template2 = `
<button> class='btn'>
    <span> ${button} </span>
</button>`

console.log(template2); // IDEALNIE !

// JAK widzisz nie dosc ze nie lamiemy linii "\" to jest identyczne formatowanie w consoli I MOZNA BEZPOSREDNIO WSTAWIC ZMIENNA bez "+" !!