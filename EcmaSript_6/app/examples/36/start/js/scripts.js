// 39. Obsługa błędów

// W dowolnym genetatorze mozna przechwycic bledy i je wywołać

function ajax(url) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    return xhr;

}

function makeRequest(url, gen) {

    let it = gen(url);

    let xhr = it.next().value;
    
/// UWAGA ! WAŻNA SPRAWA ! Nigdy nie da się wyłapać błędu w ASYNCHRONICZNYM KODZIE !!!
//  WIĘC zapomij o bloku try CATCH()  NA OBIEKCIE XHR !!!!
// ALE ZE GENERATOR JEST SYNCHRONICZNY ! no to juz bledy mozna lapac !    
//try { --------------------------------------------------- NIE MA SZANS !!!!!
    xhr.onload = function() {
        if(xhr.status === 200) {
            it.next(xhr.responseText);
        }
    };

/////// funckja bledu //////////////////////////////
// Chodzi o to zeby wywolac blad w generatorze w razie WU no bo ten yield bedzie czekal w chuj
    xhr.onerror = function() {
//        it.throw(); // OTO BLAD GENERATORA  scripts.js:41 Uncaught undefined
        it.throw( new Error("Wystąpił błąd") );     // OTO BLAD GENERATORA  scripts.js:30 Uncaught Error: Wystąpił błąd
        // TEN BLAD BEDZIEMY LAPAC W NASZYM GENERATORZE !
    }
    
//} catch()   --------------------------------------------- NIE MA SZANS !!!
    xhr.send();

}

function *showData(url) {

    let output = document.querySelector("#pre-36");  // jedyna zmiana wzgledem poprz zadania

/////////////// lapiemy blad NO BO TO JEST SYNCHRONICZNA FUNKCJA !!        
    try {    
        let result = yield ajax(url);
        output.textContent = result;
    } catch(e)  {
        output.textContent = e.message; // NASZA WIADOMOSC W it.throw( new Error("Wystąpił błąd") ); 
    }
/////////////////////// lapiemy blad !!
}

makeRequest("ttp://code.eduweb.pl/kurs-es6/json/", showData);

// CZYLI PAMIETAJ ze mozesz wywolywac bledy w GENERATORZE ale pamietaj zeby obsluzyc je w bloku TRY CATCH !