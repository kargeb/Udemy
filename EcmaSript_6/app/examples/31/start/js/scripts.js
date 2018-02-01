// 34. Pętla for..of

// Jest to specjlana pętla w ES6 służąca do iterowania po obiektach ZAWIERAJĄCYCH ITERATOR czyli tzw ITERABLES
// Tutaj pokazane działanie pętli, zebys zrozumial jak dziala, wciaz nie ma docelowej implementacji iteratorow
// Przyklad z poprzedniego zadania
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

//        let iterator = it[Symbol.iterator]();
//
//        // Pelta zwykla
//        for(var o = iterator.next(); o.done !== true; o = iterator.next()) {
//
//            console.log(o.value);
//
//        }

// PETLA FOR OF  -- musimy jej podac obiekt Z ITERATOREM !
console.log("--------- petla for of ---------")
for( let value of it) {
    console.log(value);
}

// CZYLI TA PETLA ITERUJE PO OBIEKCIE KTORY MA!
//  - Symbol.iterator
//  - a w nic METODE NEXT !

// BARDZO istotne jest to ze petla ta OD RAZU sama wylawia VALUE ! Nie musielismy jej tego pokazywac it.value
// TAK SAMO SAMA WIE KIEDY KONCZYC ! Nie musimy tego pisac w petli: o.done !== true

////// UWAGA ! Peltla ta dziala na kazdym obiekcie ktory ma ITERATOR a wiec np na stringach bez problemu
for(let napis of "dupka"){
    console.log(napis); // dziala !
}

////// TERAZ BARDZO CIEKAWY PRZYKLAD JUZ PROSTO NA DOM i HTML
// Pobieramu li z ul w klasie edu-contnet 
var lista = document.querySelectorAll(".edu-content ul li");
console.log(lista);
console.log( lista.constructor );  //ƒ NodeList() { [native code] }
// JAK WIDZIMY jest to obiekt klasy NodeList I WSZYSTKO CO JEST NODELIST ROWNIEZ MAJA ITERATORY !
// CZYLI zamiast jebac sie z for(;;;)  lub  lista.forEach(function()) piszemy:

for(let li of lista) {
    li.style.color = "#ff0000"; // dziala !
}
// Bardzo dobre jest to let dzieki czemu zmiennej li NIE WIDZIMY POZA BLOKIEM FUNKCJI wiec mozemy sobie nazwac li i nie obchodzi nas nic ze w innej czesci kodu tez mozna by tak cos nazwac !!!

// CZYLI petfla FOR OF jest zajebista i bardzo wygodna I JUZ NAWET WBUDOWANE KLASY TAKIE JAK NODELIST pozwalaja nam uzywac tego na nich !