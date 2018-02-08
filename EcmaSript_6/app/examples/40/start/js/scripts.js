// 43. Łączenie łańcuchowe

// Jak łączyć promisy w sposób łańcychowy CZYLI PRZYPSYWAĆ ODPOWIEDNIE HANLDERY.
// HANLDERY są to funkcje które mają się wywołać na RESOLVE lub na REJECT, i jak wiadomo pierwsza funkcja w THEN to ta na RESOLVE a druga to ta na REJECT
// NO I UWAGA zapis tych dwuch funkcji W THEN nie musi wygladac tak jak w poprzednim przykladzie.
// zamiast tworzyc druga funckja w THEN jako ta n REJECT, MOZNA STWORZYC NOWA FUNCKJE CATCH i wlansie do niej daj funcje NA REJECT
// Przykład z lekcji poprzedniej

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

$("#btn-40").onclick = function() {

//    getJSON("http://code.eduweb.pl/kurs-es6/json/")
//        .then(
//            (json) => $("#pre-40").textContent = json,
//            (err) => $("#pre-40").textContent = err.message
//        );
    
/*
    getJSON("http://code.eduweb.pl/kurs-es6/json/")     // DZIALA, CATCH zamiast 2 arg THEN
        .then(json => $("#pre-40").textContent = json)
        .catch(err => $("#pre-40").textContent = err.message);
        */

// UWAGA ! Łączenie THEN ! Mozesz po kazdfym THEN dac po kropce KOLJENE ! Pierwszy then zwroci DOKLADNIE TEN OBIEKT KTORY OD DOSTAL. MOZEMY SAMI USTALAC CO PIERWSZY THEN MA ZWROCIC DO TEGO PO NIM PO "." !  I robi się to po prostu returnem!    
    
    getJSON("http://code.eduweb.pl/kurs-es6/json/")     // DZIALA, CATCH zamiast 2 arg THEN
        .then(json => {
            $("#pre-40").textContent = json;
//        return 1;   // POD OBJ u dołu BYŁO BY 1 !!!, gdyby nie return to bylby ten sam obiekt co pod JSON (string)
            return JSON.parse(json);    // chcemy samiast string dostaj OBIEKT JS 
        })
        .then(obj => console.log(obj)) // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]  dziala !
        .catch(err => $("#pre-40").textContent = err.message);

// Oczywiscie jesli wywola sie REJECT to kod idzie od razu do CATCH, omijajac wszystkie THEN ALE UWAGA !
// UWAGA ! CATCH wywola nam sie rowniez wtedy GDY W DOWOLNEJ FUNKCJI THEN WYWALI NAM BLAD !
// KOD U DOLU ROWNIEZ SPOWODOWALBY WYKONANIE SIE CATCH !
//        .then(obj => {
//            console.log(obj);
//            throw new Error("Wystapil blad prosto w THEN");
//        }
    
// UWAGA ! BARDZO WAZNA RZECZ TERAZ ! Gdy dokladamy kolejny THEN to mozemy zrobic tak ZE ON TAKZE BEDZIE CZEKAL NA SWOJ WLASNY PROMISE !    
// Trzeba po prostu w tym pierwszym THEN zwrocic funkcje KOTRA ZWRACA OBIEKT PROMISE
// I zeby we lbie sie nie pojebalo to po prostu ZWROCIMY SOBIE JESZZCE RAZ ta sama funkcje getJSON     
// I wlasnie to jest SUPERWAZNE ze nasza funkcja getJSON zwraca PROMISE ! Dzieki czemu zwracamy NOWE PROMISE do naszego drugiego THEN
// (Serwer do ktorego wysylamy zapytanie jest tak zkonfigurowany ze jak dostanie "shuffle" to zwraca te dame w randomowej koljenosci)    
// UWAGA DYGRESJA ! Jak jestesmy w trakcie wykonaywania PROMISE to ma ona status PENDING ! A jak sie wykona to ma status RESOLVE luv REJECTED albo inczej FULLFILLED lub REJECTED    
// No i do drgiego THEN przekazemy ten sam obiekt co to pierwszego czuli zwykly STRING (a nie jak w przykladzie u gory json.PARSE)    
// NO I UWAGA ! W związku z tym co mówione było u góry, KAŻDY BŁĄD WYKONANY W KTORYMŚ Z THENów WYWOAŁA funkjce CATCH dodaną po tych THENACH !    
    getJSON("http://code.eduweb.pl/kurs-es6/json/")  
        .then(json => {
            $("#pre-40").textContent = json;
            return getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1")
        })
        .then(obj => console.log(obj))
        .catch(err => $("#pre-40").textContent = err.message);    
    
};