/*
1. WSTĘP

Najwazniejsze nwoosci w ES6

- let i const
- arrow functions
- klasy
- rest spread
- destructiring obiektow	(w innych jezykach bylo, w js niesety nie)
- Domuyslne parametry (tez byly a tu dupa)
- template strings
- symbole
- skrocony zapis obiektow- iteratory i generaotry
- Promises
- Map i Set
- Proxy API
- MODUŁY
- i kilka mniejszych zmian


UWAGA ! 
uruchamiaj ta palikacje na porcie 3001 !!! Wtedy bedzie dzialac automatyczne odswierzanie !!

-------------------------------------
Zmienne utworzone przez VAR i HOISTING  - PRZYPOMIENIE !
Czyli w tej lekcji romawiamy jeszcze o ES5

*/

(function() {
    
    // dzialamy w funkcji anonimowej BO ONA OGRANICZA ZAKRES ZMIENNYCH


    console.log(firstName); // UNDEFINED !! Nie widzi jej przegladarka !    

    var firstName = "Jan";  // WIDOCZNA JEDYNIE W TEJ FUNKCJI !
        // if NIE OGRANICZA !

    console.log(firstName);  // Tutaj juz ja widzi !!    

    // NA TYM POLEGA HOISTING ! Na wynoszeniu na sama gore zakresu widocznosci (tutaj cialo naszej funkcji) SAMEJ DEKLARACJI ZMIENNEJ ! Bez jej przypisywania ! 
    //    CZYLI COS TAKIEGO:    
    //          var firstName;
    //           console.log(firstName);
    //           firstName = "Jan"

    // UWAGA !!!! Z funkcjami jest troche inczaej !! One również są wynoszone na góre zakresu ALE OD RAZU MOZNA Z NICH TEZ KORZYSTAC czyli wraz z deklaracja sa wynoszone !!!

    console.log(firstName + getLastName()); // D Z I A Ł A !!!!!!!!!! mimo ze przed deklaracja !

    function getLastName() {
        return "Kowalski";
    }

    // UWAGA ! Co jest zajebiscie ciekawe i mozna gokos zagiac (albo oni ciebie na rozmowie)

    if(false) {
        var lastName = "Pietruszka"
    }    
    console.log(lastName);    

    // MIMO ŻE w ifie jest FALSE  i nie opcji zeby on sie wykonal, TO ZMIENNA W NIM TWORZONA I TAK JEST HOISTOWANA czyli wynoszona na górę zakresu ! Otrzymamy w consollogu UNDEFINED ! Czyli on widzi tą zmienną ! Gdybysmy ja zakomentowali to bylby blad !   //  var lastName = "Pietruszka"  -> Błąd przy wywołaniu !!

})();

// UWAGA ! Przypomnienie jak dziala deklaracja zmiennej poza zakresem fukncji !
var firstName = "Kornelia";
// TEN ZAPIS U GÓRY to jest dokladnie to samo jak  window.firstName = "Kornelia" !! Czyli przypisalismy ja do obiektu globalnego !! PAMIĘTAj !!
console.log(window.firstName === firstName);  // - > TRUE !!!!!!!

