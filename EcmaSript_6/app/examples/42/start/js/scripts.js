// 45. Wpsółpraca z wieloma promisami

// Pokazane dwie kolejne meotdy STATYCZNE PROMISE - ALL i RACE, które pozwalają pracować na wielu PROMISACH jednocześnie


function $(selector) {
    return document.querySelector(selector);
}

function getJSON(url) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    let p = new Promise(function(resolve, reject) {

        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject( new Error("Wystąpił błąd") );
            }
        };

        xhr.onerror = function() {
            reject( new Error("Wystapił błąd") );
        };

    });

    xhr.send();

    return p;
}
//////////////////////// FUNKCJA DO RACE !!!!! 
function timeout(ms) {
    
    return new Promise( function(resolve, reject){
        setTimeout(() => reject( new Error(`Czas ${ms}ms został przekroczony`) ), ms);
    })
}

$("#btn-42").onclick = function() {

////////////////  PROMISE.ALL /////////////////////////////////////    
// Trzeba podac obiekt ITERABLE ! Czyli tablica sie sprawdzi idalnie, i wlasnie zazwyczaj tuaj jest tablica
// Mozemy PODAC TUTAJ DOWLONA LICZBE PROMISE
// Nasza funkcja getJSON zwraca promise ! Wiec nadaje sie idealnie tez   
// W funkcji PRMISE.ALL mozemy dac dwolona ilosc primisem jak TABLICA A POZNIEJ HANDLERY  I UWAGA ! HANDLERY NIE WYKONAJA SIE DO MOMENTU AZ WSZYSTKO TO CO W PRIOMISE.ALL NIE ZOSTANIE DO KONCA WYKNANE ! I wszystkie musza byc jako RESOLVE ! Nie moze wystapic zaden blad ! Jeli w pierszej wystapil blad TO OD RAZU IDZIEMY DO REJECTED nawet nie czekamy na wykonanie drugiej funkcji w Primise.all
// Pamietaj ze to za nam ladnie wyskakuje blad na stronie ZALEZY OD NAS, ze wpisalismy
           /*
           xhr.onerror = function() {
            reject( new Error("Wystapił błąd") );
        };
        */
// a wcale nie musielismy tego robic    
// To co otrzymamy w "data" BEDZIE TABLICA ! Czyli w data[0] BEdzie to z pierwszego getJSON a w data[1] z drugiego !   
    
Promise.all([
        getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1"),
        getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1")
    ])
    .then(data => {
        $("#pre-42").textContent = `${data[0]}\n\n${"=".repeat(70)}\n\n${data[1]}`; // dziala
    })
    .catch(err => $("#pre-42").textContent = err.message);
    
/////////////////////////////////////////////////////////////////////////////////////////
    
//////////////// PROMISE.RACE ///////////////////////////////////////////////////////////   
// Zapis odencztyny jak wyzej
// CHODZI O TO ZE TO CO W RACE ŚCIGA SIĘ ZE SOBA ! Czyli ta KTORA WYKONA SIĘ PIERWSZA od razu idzie do RESOLVE. Na wynik drugiej juz nie czekamy.   
// Dokladnie to samo jest Z CATCH ! Jesli w którejś wystąpił BLĄD nie będziemy już czekać na wykonanie się innych    
// I ogólnie polega to na tym że RESOLVE i REJECT tez sa w tym wyściu ! Czyli czekamy na dowolna funkcje która się wykona ! Niezaleznie czy zwroci ona wynik poprawny czy błąd !!!!    

    Promise.race([
        getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1"),
        getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1")
    ])
    .then(json => $("#pre-42").textContent = json)
    .catch(err => $("#pre-42").textContent = err.message);    
    
///////////////////////////////////////////////////////////////////////////////////////////
    
// Praktyczny przykłąd RACE z TIMEOUT !!    
// ZAJEBISTY PRZYKLAD ! 
// Jesil zpaytanie do serwera z odpowiedzią BĘDZIE TRWAŁO DŁUŻEJ niz czas podany w timeout TO WYKONA SIĘ TIMEOUT A NIE getJSON !!!    
// Zauwaz ze w grtJSON wywolujemy funkcje RESOLVE a w timeout funckje REJECT !!!    
    Promise.race([
        getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1"),
        timeout(500)
    ])
    .then(json => $("#pre-42").textContent = json)
    .catch(err => $("#pre-42").textContent = err.message);    
        
};

// OGOLNIE MÓWIĄĆ bardzo często zdarza się że chcemy ruszyć z kodem dopiero gdy wykona się kilka zapytań jednocześnie WIĘĆ PRMISE.ALL jest duzo bardziej praktyczne i przydatne ALE JAK WIDZISZ PROMISE.RACE tez odpowiednio wykorzystana URYWA DUPE !!!!!!!