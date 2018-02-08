// 44. Meotdy statyczne promise

// Klasa Promise ma sama w sobie pewne przydatne metody tatyczne

// Chcemy zrobic tak zeby dane nie pobieraly sie za kazdym razem jak klikniemy przycisk, ale zeby raz pobrane, zapisywaly sie w pamieci podrecznej
// pamietaj ze to CACHE w normlabnym przypadku powinno byc oplecione w funkcji zeby ogrniaczyc zasieg, ttuaj to tylko cwiczenia wiec pomijamy
const CACHE = {};   // to jest nasz kesz

function $(selector) {
    return document.querySelector(selector);
}

function getJSON(url) {
    
    if(CACHE[url] !== undefined) {      // SPRAWDZENIE CZY JEST VCOS W CACHE !
        console.log("Zwracam dane z pamieci podrecznej")
// UWAGA ! przez to ze jest pusty return TO WYWALA NAM BLAD BO PROGEAM NIE DOSTAJE ZADNEJ ODPOWIEDZI OD PROMISE !! NIE MA THEN !        
//        return;
// Dlatego wykorzytamy FUNKCJE STATYCZNA PROMISE ! NIE TWORZYMY NOWEGO OBIEKTU !!!!! Zalatwiamy sprawe FUNCKJA STATYCZNA !
        return Promise.resolve( CACHE[url] );
// Powyzsza funkcja ZWRACA NAM PROMISE KTORY JEST OD RAZU W STANIE RESOLVE !!!! (FULFILLED) I mozna jej TAK JAK W ZYKLYM RESOLVE takze przekazac dane !
// Oczywiscie mozna tez wykorzystac tak tez funkcje REJECT, np w ten sposób:
//        return Promise.reject( new Error( "Nie mozna drugi raz pobieraz tych danych !" ) ); // dziala, wyswietla sie na stronie 
    }

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    let p = new Promise(function(resolve, reject) {

        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(xhr.responseText);
                CACHE[url] = xhr.responseText; // TUTAJ ZAPISUJEMY DO CACHE !!!!!!!
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

$("#btn-41").onclick = function() {

    getJSON("http://code.eduweb.pl/kurs-es6/json/")
        .then(json => {
            $("#pre-41").textContent = json;
        })
        .catch(err => $("#pre-41").textContent = err.message);

};