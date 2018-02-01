// 38. Przekazywanie wartośći

// DO GENERATORÓW MOŻNA PRZEKAZWYAĆ WARTOŚCI PRZY KAŻDYM UŻYCIU NEXT

function *it(number) {
    
    let result = (yield) + number * 2;
    console.log("druga linijka");
    yield result;
}

let iterator = it(5);   // nasz iterator z NEXTem   // TI JEST NUMBER

console.log( iterator.next() ); // console.log( iterator.next() ); // 
// Pierwsze wywolanie next() bez parametru DOJDZIE TYLKO DO PIERWSZEGO YIELDA w funckji iteratora !
// jako ze nic pod nim nie ma to dzialanie skonczy sie to UNDEFINED, ALE NAWET NIE WYKONA SIE CONSOLLOG ! 

// UWAGA ! DO FUNKCJI NEXT MOZNA PRZEKAZAC PARAMETR I ON POJAWI SIĘ JAKO YIELD !
console.log( iterator.next(2) ); // {value: 12, done: false}    // TU JESY YIELD !
// Tuatj juz sie pieknie to poobliczalo i nawet consolog sie wykonal czyli caly kod funkcji sie zrobił

// CZYLI WARTOŚĆ PRZEKAZANA NEXT(). WPADA JAKO YIELD !

/// Poprzedni przyklad byl prosty i z dupy wiec teraz bardziej praktyczny z ajaxem

function ajax(url) {
    
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", url);
    
    return xhr;
}

function *showData(url) {
    
    let result = yield ajax(url);
    
    document.querySelector("#pre-35").textContent = result;  // tam w HTMLU dodamy nasza tresc z serwera
    // Czyli chcemy zrobic cos takiego ze: wykonaj zapytanie ajax i dopiero jak cos otrzymasz to wykonaj druga linijke
    // KOZYSTAMY z tego ze GENERATORY moga PAUZOWAC wykonywanie fukncji cdy zobacza YIELD !
}

function makeRequest(url, gen) { // URL i FUNKCJA GENERATORA (*showData)
     
    let it = gen(url);
    // pamietac ze next() zwraca obiekt z done i value
    let xhr = it.next().value; // opdali sie YIELD ajax(url) czuli dostaniemy obiekt xhr
    
    xhr.onload = function() {
        
        if(xhr.status === 200) {
            it.next(xhr.responseText)   // kolejne odpalenie yielda
        }
    };
    
    xhr.send();
}

makeRequest("http://code.eduweb.pl/kurs-es6/json/", showData);

// Najwazniejsze co masz zapamiętać to to że do GENERATORA MOŻNA PRZEKAZYWAĆ WARTOŚCI a za pomocą YIELD SĄ ONE WYRZUCANE !
// Czyli jest taka DWUKIERUNKOWA KOMUNIKACJA, yield nam COŚ WYRZUCA i czeka sobie aż kolejny raz wywoła się gdzieś w kodzie NEXT i wywali nam wartość ponownie

// Tak naprawdę JEST DO WSTĘP DO PROMISE ! Ale dzięki temu lepiej to wszystko ogarniesz !