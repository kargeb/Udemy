// 35. Operator SPREAD na iteratorach

// - do tej pory wiemy o iteratorach ze mozemy korzystac z metody next ale bedziemy to robic bardzo zadko manualnie
// - a takze ze potrafi go wykorzystac petla FOR OF
// - No i teraz kolejna wlasciwosc ze SPREAD tez operuje na iteratorach

let numbers = [12, 3, 9, 22, 11, 6];
// PRZYPOMNIENIE:
console.log( Math.max(...numbers) );  // 22  // (math.max przyjmuje docelowo numbersy a nie tablice)

let it = {
    [Symbol.iterator]() {
        var numbers = [1, 2, 3, 4, 5],
            index = 0;

        return {
            next: function() {
                return {
                    done: (index === numbers.length) ? true : false,
                    value: numbers[index++]
                };
            }
        };
    }
};

// Uwaga wiec od razu proboujemy czy nasz napisany przyklad zostanie dobrze zinterpretowany przez SPREAD:
console.log( Math.max(...it) );  // 5 ! Dziala !
console.log( Math.max(...it, 100, 20) ); // mozna nawet tak

// NO I TO JEST ZAJEBISTE !!
// Ze po dodaniu iteratora DO DOWOLNEGO OBIEKTU mozemy sobie operawac na nim zarowno klasa FOR OF jak i takim SPREADem
// np. mozemy sobie bez problemy wszystko zamienic na tablice ! :
console.log( [...it] ); // (5) [1, 2, 3, 4, 5]

//Czyli ze jako string tez jest iterables no to mozemy sobie tez na tablice rozstrzelic:
console.log( [..."dupkaaaa"] ); // (8) ["d", "u", "p", "k", "a", "a", "a", "a"]

// NO I TERAZ BARDZO PRAKTYCZNY PRYKLAD I PORADA
// Jak cos sobie pobierzemy z DOM, jakis zbior obiektow to JEDYNIE forEach pozwala nam na iterowanie po tym !
// Nie damy rady zrobic np metody filter() !
// Ale juz teraz wiemy jak sobie z tym radzic! 

var lista = document.querySelectorAll(".edu-content ul li");
console.log(lista);

lista.forEach(function(elem){   // Dziala
    console.log(elem);
});
//    lista.filter();  // DUPA BŁĄD !, filter potrzebuje tablicy

[...lista].filter(li => li.textContent.includes("2")).forEach(li => li.style.fontWeight = "bold");
// INCLUDES to jest ta nowa metoda w STRING
// Przypomnij sobie dzialanie FILTER ! On zwraca w tablicy wszyskie elementy ktore spelniaja dany warunek

// I WLASNIE TO JEST GENIALNE ze nawet jak jakis obiekt nie ma metod ktore dzialaja na tablicach to rozstrzeliwoujemy sobie go na tblice i juz do tych metod mamy dostep !!! Oczywicie musi byc ITERABLE ten obiekt