// 42. Korzystanie z Promise

// Od zawsze było to w ES5 ale teraz oficjalnie dodano to do specyfikacji JS

// Ogólnie PROMISE jest stworzone do wpółpracy z ASYNCHRONICZNYM KODEM czyli AJAX jest do etgo idealnym przykładem !
// Również w NODE.JS jest sporo asynchorniczności no przy wczytywaniu pliku z dyskum co odbywa się w tle
// Taki timeOut() ROWNIEZ JEST ASYNCHORNICZNY wiec do testow czy cos cos mozna tez go wykorzystywac przy promise !
// Ma to tez z tego co mówi wiele wspólnego z obiektem DEFFERED

// TO JEST JEGO FUNCKJA POMOCNICZA DO WYSZUKIWANIA ELEMENTÓW 
// Kurwa niezle !!!
// Patrz jak latwo mozna obejsc 100 razy wpisywanie tego samego !!!
function $(selector) {
    return document.querySelector(selector);
}

function getJSON(url) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

// TWORZENIE PROMISE ///////////////////////////////////////
// Tak się tworzy w ES6 i ona ZAWSZE potrzebuje 2 parametrów (oczywiscie nazwy dowolne ! ale tak sie przyjelo)    
// No i RESOLVE wykonuje się kiedy wszystko z naszego punktu widzenia poszło OK
// a REJECT gdy gdzies po drodze wyjebało jakiś błąd
// UWAGA ! SEDNO ! KIEDY WYWOŁA SIĘ RESOLVE TO WTEDY WYKONA SIĘ TO CO MAMY POD THEN !!! ALe aby było to możliwe TO TA FUNCKJA getJSON musi zwracać obiekt PROMISE !  
// TO CO PRZEKAZUJEMY W PARAMETRZE RESOLVE dostępne jest jako PIERWSZY PARAMETR W THEN !!!!! A T OC OW REJECT JEST DRUGIM PARAMETREM THEN !! SĄ TO FUUUUNKCJE !!!!   
    let p = new Promise(function(resolve, reject){
        
        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject( new Error("Wystąpił błąd") );
            }
        };
        
// POPATRZ Te REJECTY I RESOLVY mozna umieszcać W RÓZNYCH MIEJSCACH JEDNOCZEŚNIE !       
    xhr.onerror = function() {
        reject( new Error("Wystapił błąd") );
    };
        
    });
    
/*  PRZENIESIONE DO PROMISE ! 
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.log( new Error("Wystąpił błąd") );
        }
    };

    xhr.onerror = function() {
        console.log( new Error("Wystapił błąd") );
    };
*/    

    xhr.send(); // wysyłanie

    return p; /////////// TUTAJ ZWRACAMY PROMISE !!!!!!! JEST TO W CHUJ WAŻNE !!!!!!!!!!!!
    
}

$("#btn-39").onclick = function() {

// No i chodzi o to ze ta dolna linijka NAM TERAZ (bez promise) NIE ZADZIAŁA ! Bo zauwarz że nasza funkcja getJSON NIC NIE ZWRACA ! Czyli nie mamy na czym odwołać się po . i wywołać THEN !  Trzeba więc zwrócić coś z getJSON co będzie zawierało metodę THEN NO I WŁAŚNIE BĘDZIE TO PROMISE !    
// POD json W THEN jest to co PRZESŁALIŚMY W RESOLVE !!! a pod err JEST TO CO W REJECT !   
    getJSON("http://code.eduweb.pl/kurs-es6/json/")
        .then(
            json => $("#pre-39").textContent = json,
            err => $("#pre-39").textContent = err.message
        );
};

// I OTO CAŁE PROMISE !!!!!!!!!!!!
// JESZCZE RAZ:
/*
                let p = new Promise(function(resolve, reject)
zwaraca nam jakjis nowy obiekt, który my zwracamy z danej funkcji   
            return p;   
Ten nowy obiekt zawiera w sobie metode THEN dlatego mozna z niej skorzystac, POW WYWOLANIU getJSON     
            getJSON("http://code.eduweb.pl/kurs-es6/json/")
                .then(
                    json => $("#pre-39").textContent = json,
                    err => $("#pre-39").textContent = err.message
                );
No i PIEWRSZY PARAMETR THEN wywola sie w momencie wywołania RESOLVE w funkcji z PROMISAMI
                resolve(xhr.responseText);
Czyli ASYNCHRONICZNIE, niezaleznie od pozostalego kodu i przebiegu programu, czeka sobie spokojnie na sygnal
No i mówię mu, temu THENowi
 "wywolaj mi funckję THEN z PARAMETREM json A PARAMETREM TYM JEST TO CO PRZEKAZANE JEST RESOLVE czyli xhr.responseText
No i jest tez DRUGI PARAMETR THEN który robie dokładnie to co RESOLVE tylko PRZYJMUJE JAKO PARAMTER TO CO JEST PRZEKAZYWANE W REJECT !
 a więc u nas   err   jest tym ->  new Error("Wystapił błąd")
*/