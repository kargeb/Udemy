// 31. Metody symboli

//Jest kilka metod dostępnych dla symboli
// W tym samym pliku ktos moze sie niby odniesc do naszego symbolu ALE NIE MA MOZLIWOSCI GO NADPISAC

//const hidden = Symbol("hidden");
// UWAGA poza swyklym symbolem jak u góry, który dostępny jest tylko w tym pliku MOZNA UTWORZYĆ SPEJCALNY SYMBOL który będzie w specjjalnym GLOBALNYM REJESTRZE i będzie można się do niego odwołać W KAŻDYM MIEJSCU W PROGRAMIE niezaleznie w jakim pliku byśmy byli

//---1--- Symbol.for("hidden");
(function() {
    
Symbol.for("hidden");   // normalnie nie ma opcji zebysmy sie do tej zmiennej odwolali, ale wlasnie dzieji temu globalnemu rejestrowi MOZEMY !
// METODA ta sprawdza czy pod podabnnym strigniem  ISTNIEJE JUZ TAKI KLUCZ i jeżeli nie TO GO TWORZY I ZA KAŻDYM ODWOŁANIEM SIĘ 
//  [Symbol.for("hidden")]  będziemy mieć dostęp do tego klucza w dowolnym miejscu w kodzie ! No i mozna sobie pod tymi symbolami trzymac coś czego w żaden sposób nie będzie można zmienić ani nadpisać    
})();

// ---2--- 
// Możemy sprawdzić co zostało użyte (jaki strong) podczas tworzenia danego symbolu. Jemu sie to jeszcze nigdy nie przydało ale można to zrobić 
// za pomocą metody  Symbol.keyFor(hidden)
const hidden2 = Symbol.for("hidden2");

let person = {
    [Symbol.for("hidden2")]: "123jkasdKhasdf$901-123",
    getSecret() {
        return this[Symbol.for("hidden2")];
    }
};

console.log( person.getSecret() );  // "123jkasdKhasdf$901-123"
console.log( Symbol.keyFor(hidden2) );  // hidden2   <--- tu jest wlasnie wywolanie stringu tworzącego Symbol

// ---3---
// PONIŻSZA METODA ZWRACA WSZYSTKIE WŁAŚCIWOŚCI OBIEKTU KTÓEGO DO NIEJ PRZEKAŻEMY !!! (CHyba zajebista mi sie zdaje)
console.log( Object.getOwnPropertyNames(person) );
// Zwraca ona w naszym wypdaku jedynie "getSecret" CZYLI TAK SAMO JAK PETLA FOR NIE WIDZI SYMBOLI !
// UWAGA! No i teraz od ES6 mamy metode KTORA WYPISZE WSZYSTKIE SYMBOLE JAKIE POSIADA OBIEKT !
console.log( Object.getOwnPropertySymbols(person) );  //    [Symbol(hidden2)]
// Dostajemy TABLICE symboli i np jak odwolamy sie do pierwszego elementu TO TAK JAKBYSMY ODWOLYWALI SIE PROSTO DO TEGO SYMBOLU np:
var zmienna = Object.getOwnPropertySymbols(person);
console.log( zmienna[0] );

console.log( Symbol.for("hidden2") === zmienna[0] );  // TRUE !!!
// I WLASNIE DLATEGO RZECZY DODANE DO OBIEKTÓW NIE SĄ PRYWATNE W !00% BO ZAWSZE MOZNA SOBIE TA METODA WYWOLAC, pobrac wszystkie symbole i za ich pomocą WGRYŹĆ się do obiektu !

// KIEDY SYMBOLE SIE PRZYDAJA ?
// Podbno bardzo na klasach gdzie mozna stworzyc juz swego rodzaju prywatność
// A juz najbardziej są pomocne w przypadku tzw WELL-KNOWN SYMBOLS czyli SYMBOLI WBUDOWANYCH co oferuje nam juz JS (kolejna lekcja)