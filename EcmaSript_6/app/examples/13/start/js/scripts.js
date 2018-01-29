// 16. Dekompozycja obiektów

// DESTRUCTURING !!!
// niezwykle przydatna funkcjonalnosc - dekompozyjca 
// DEKOMPOZYCJA jest to wyciągnięcie odpowiednich danych z jakiejś struktury
// Czyli mamy taki obiekt i chcemy wszystkie jego wlasciowsci zamienic na zmienne !
// Inne jezyki dawno mialy takie mechanizmy a JS nie, OTO jak trzebabylo sobie radzic z tym do tej pory:

let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49
};
// ES5:
let firstName1 = person.firstName,
    lastName1 = person.lastName,
    age1 = person.age;

console.log(firstName1, lastName1, age1);
//ES6  // DESTRUCTURING
let { firstName, lastName, age } = person; // 

console.log(firstName, lastName, age); // DZIALA !
// Dziwnie to wyląda ale wlasnie tak to działą ! 
// Czyli po lewej stronie tworzymy jakby wzór tego, co chcemy wyciągnąć z obiektu przekazanego po prawej stronie =
// DESTRUCTURING tablic bedzie wygladal dokladnie tak samo tyle ze zmiast {} bedzie []

// UWAGA ! Mozna tego tez uzywac do wyciagania danych Z FUNKCJI !
// i od razu przechodzimy do tego jak zabezpieczac sie przed bledami !
function getData() {
  return ;  
};

//let { day, year } = getData();
//console.log( day, year );   // DOSYANIEMY BŁĄD !!
// ZBAEZPIECZNIE:
let { day, year } = getData() || {};
console.log( day, year );   // DOSTANIEMY UNDEFINED !! Wiec wlasnie tak sie zabezpieczamy  || {}

//Zmienne utworzone w ten sposob NIE ROZNIA SIE NICZYM od tych utworzonych zwyklym przypisaniem i moga to byc let const i var

// UWAGA !!! Tworzenie innej nazwy zmiennej NIZ TA W PODAWANYM OBIECKIE !
// MUSISZ TO ZAPAMIETAC i sie do tego przyzwyczaic bo zapis jest NA ODWROT niz moglo by sie wydawac !

let { firstName: fName, lastName: lName, age: old } = person;
console.log( fName, old ,lName );
// UWAGA ! gdy przypiszemy inne nazwy TO TE PIERWOTNE NAZWY Z OBIEKTU NIE ISTNIEJA !!!!
console.log(firstName, lastName, age);   // BEDZIE BŁAD !!

// CZYLI !!! Jesli chcesz wyciagnac zmienne MAJACA IDENCZTYNA NAZWE JAK W OBIEKCIE 
// to robisz to w nowym skroconym zapisie ES6 czyli { firstName, lastName, age }
// ale jak chcesz ZMIENIC NAZWE no to przypisuja nazwe zmiennej PO PRAWEJ STRONIE !!
// I TA PRAWA STRONA JEST DO ZAPAMIETANIA BO NA BANK TO JEST CHACZYK NA ROZMOWACH CZY CHUJ WIE GDZIE !
//  { firstName: fName, lastName: lName, age: old }

// UWAGA !!! Wazne i podchwytliwe !! 
// Mozna zrobic destructuring PRZY UZYCIU JUZ WCZESNIEJ UTWORZONYCH ZMIENNYCH
// ALE nie daje sie wtedy TYPU ZMIENNEJ I TRZEBA TO WRZYCIĆ W NAWIAS () !!!!
// Bo inaczej interpreter uzna to jako osobny blok kodu !

let jeden, dwa, trzy;

( { firstName: jeden, lastName: dwa, age: trzy } = person );  // DOKLADNIE W TEN SPOSOB !!
console.log( dwa, trzy, jeden + " to sa ze wczesniej utworzonych zmiennych"); // ok

// DESTRUCTURING jest w chuj przydatny przy wyciaganych danych z JSON !!!