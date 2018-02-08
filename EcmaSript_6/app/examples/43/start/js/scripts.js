/////////////////// TO JEST KOMPLETNIE POPIERDOLONE, chuj wie po co to robic i chuj wie o co tu chodzi
// 46. Współpraca z generatorami 

// pokazanie JAK ZAJEBIŚCIE PROMISE moze współpracować z GENERATORAMI !
// Robilismy juz cos takiego we wczesniejszych lekcjach ze laczylismy generatory z ajaxem powodujac ze odbywalo sie to w sposob synchroniczny a nie asynchroniczny, bylo tam sporo kodu i dziwnie to wygladalo
// TERAZ ZROBIMY TO Z PROMISE i bedzie to duzo estetyczniejsze i dzialaalo w sposob dynamiczny



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

function run(gen, ...args) {
    
    let it = gen(...args);
    
    it.next();
    
}



$("#btn-43").onclick = function() {

    run( function *(url) {        
            let json = yield getJSON(url)
            // Z funkcji generatora zwracany to co zwróci getJSON
            // getJSON zwraca PROMISE wiec zworcimy to gdy skorzystamy z iteratora i metody NEXT  
            $("#pre-43").textContent = json;
    }, "http://code.eduweb.pl/kurs-es6/json/");

};