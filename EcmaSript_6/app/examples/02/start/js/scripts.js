// 2. NOWE SLOWA LET I CONST

(function() {
    console.log("2 Nowe słowa let i const"); 
// ES6 wprowadza DWA NOWE slowa CONST i LET 

// UWAGA ! Ponizszy przykład WYGENERUJE BLĄD ! Nie UNDEFINED ale BŁĄD ! 
// W PRZYPADKU LET NIE MA HOISTINGU ! Nie są wynoszone zmienne na góre zakresu ! Nie mozna korzystac ze zmiennej ZANIM JA UTWORZYMY !

    //    console.log(firstName);  - > BLĄD !!    
    let firstName = "Jan";    
    console.log(firstName);  // OK
    
// KOLEJNA BARDZO WAZNA RÓZNICA !
// Let NIE WIDAC TAKZE POZA BLKAMI IF itp !!
    if(true){
        let lastName = "kowalski";
        console.log(lastName);  // OK 
    } 
 //   console.log(lastName);  // BŁĄD ! Nie widac tutaj zmiennej lastName utworzonej w bloku if !!
//    {
//        let age = 30;         // taki blok tez ukrywa let !!
//    }
//        console.log(let);   TUTAJ DOKLADNIE TO SAMO CO u GÓRY

// 3 róznica !!!
// Deklarujac takie same zmienne przez VAR NIE MA BLEDU, po prostu sanadpisane !
//  Deklarujac takie same zmienne prze LET, JEST BLĄD ! Interpreter tego NIE PRZEOUSCI !!
    
    var nextName = "ukasz";
    var nextName = "piter"; 
    
    console.log(nextName);  // BEZ BLEDU
    
    let otherName = "pies";
//    let otherName = "kot";
    
    console.log(otherName); // BŁĄD !!!!
// Gdyby byly w innych blokach to by przeszło !
//  Nawet jak bysmy napisali:  var otherName = "cos"  TO TEZ NIE PRZEJDZIE GDY JEST LET o tej nazwie !
    
// UWAGA ! Temporal Dead Zone !    
// Chodzi o to ze operator typeof jest bardzo bezpieczny bo nawet jak sprawdzamy zmienna ktorej nie ma to nie wywala bledem tylko UNDEFINED:
    console.log(typeof dupka)  // -> undefined
// ALE !! Jesli zadeklarujemy zmienna przez LET i PONAD NIA uzyjemy operatora typeof TO NAWET ON WYWALI BLAD ! Bo wszystko co nad LET z nazwa zmiennej tak zadeklarowanej to jest TEMPORAL DEAD ZONE i wywala bledy, tak bardzo JS restryktuje ta zasade ze zmienne LET moga byc uzyte WYLACZNIE po jej deklaracjach !
    
//   console.log( typeof kupa);  // -> BLĄD !!!!
    let kupa;
    
// WAZNE BARDZO ! Dzięki LET nie mozna odnosic sie do zmiennej UWTORZONEJ W PETLI FOR !
    for(let i=0; i<10; i++){
    }
//    console.log(i);     // MAMY BLĄD !! Bardzo wazne i przydatne
    // var byloby "10"
    
// UWAGA !! TUTAJ W TEJ LECKCJI JEST CIEKAWOSTKA Z LET I DOMKNIĘCIAMI W PĘTLI ! Mozna sobie to powtorzyć 9:00 MINUTA
    
//////////////// CONST ///////////////////////////////
//   Zachowanie DOKLADNIE TO SAMO CO LET U GÓRY !!!!!!!!!!!!!!
// Jedna roznica to jak raz utworzysz CONST to juz NIE DA SIE JEJ ZMIENIC !!!    
    
const person = {
    fisrName: "Jan",
    lastName: "Kowalski"
};    
    
//   person = {};  // BLĄD ! ! !  
// Na CONST mozna mówć nie zmienna a STAŁA 
    
///// UWAGA !!!! W CHUJ WAZNE !!!
// w CONST nie mozna zmieniac tego co jest do niego przypisanego ! A wiec jesli jest to obiekt tak jak u góry, TO JEGO WLASCIWOSCI MOZNA ZMIENIAC !!!!!!!!!!!!

person.fisrName = "Adam";  // MOŻNA ZMIENIAĆ WŁAŚCIWOŚCI !!!!!   
    
console.log(person);    // DZIAŁA !!!!!!!!!!! MOŻNA ZMIENIAĆ WŁAŚCIWOŚCI !!!!!  
    
})();
// UWAGA !!! Jeszcze jedna rzecz ! Let oraz Const POZA ZAKRESEM FUNKCJI NIE SĄ PRZYPISYWANE DO OBIEKTU WINDOW tak jak bylo to z VAR !!

var jeden = 1;
console.log(jeden === window.jeden); // TRUE !!

let dwa = 2;
console.log( dwa === window.dwa); // FALSE !!!!

// No i przez to tez jak utworzymy funkcje np -> let.Alert() to wtedy PRZESLONIMY ta z widnow A NIE NADPISZEMY JA !! (czyli chyba cos bezpieczniejszego)