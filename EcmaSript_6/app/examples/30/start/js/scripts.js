// 33. Tworzenie iteratorów 

//Co to jest ? Jak skorzystać i jak stworzyć zarówno w ES6 jak i ES5
// musisz zrozumiec jak on dziala i jak je napisac recznie
// Pozwalaja one uporzadkowac i lepiej zorzumiec kod w zbyt zagniezdzonych petlach

// GENERALNIE iterator ma metode NEXT i gdy ja wywolujemy to zwraca ona kolejna wartosc

// TO JEST SPOSOB NA ITERATOR W ES5 !!! ////////////////////////////////////////////////////////////
// TWORZYMY FUNCKJE ktora PO PIERWSZYM WYWOLANIU zwraca "it" (czyli obiekt).
// Obiekt ten przypisujemy do "iterator" i ZAWIERA ON TA KLUCZOWA METODE NEXT !
// I mamy tutaj DOMKNIĘCIE ! (tam gdzie numbers i index). Czyli metoda NEXT ma dostęp do tych 2 zmiennych NIEZALEZNIE OD MIEJSCA W KTORYM ZOSTANIE WYWOLANA !
// NASZ RETURN MUSI zwracac to co w TYM MIEJSCU*** czyli OBIEKT kotry ma VALUE oraz DONE
const it = function() {
    
    var numbers = [1, 2, 3, 4, 5],
        index = 0;
    
    return { // uwaga ! stary zapis funkcji z ES5
        next: function() {
            return {
                done: (index === numbers.length) ? true : false, // u dolu wyjasnienie
                value: numbers[index++]
            };
            
        }
    };
};
///////////////////////////////////////////////////  koniec ES5

let iterator = it();
let iteratorLoop = it();

// UWAGA PIERWSZE WYKONANIE:
console.log( iterator.next() );  // {done: false, value: 1}
// wszystko ok wiec kolejne wywolania:
console.log( iterator.next() ); //  {done: false, value: 2}
console.log( iterator.next() ); //  {done: false, value: 3}
console.log( iterator.next() ); //  {done: false, value: 4}
console.log( iterator.next() ); //  {done: false, value: 5}
console.log( iterator.next() ); //  {done: true, value: undefined}
// WSZYSTKO DZIALA ! 

// Przechodzimy do meritum czyli do wykonania PĘTLI !

for (let o = iteratorLoop.next(); o.done !== true; o = iteratorLoop.next() ) {
    
    console.log(o);  // caly obiekt
    console.log(o.value); // o to bedzie nam z reguly chodzic
}

////////////////////////////////////////// ES6 ///////////////
////// UWAGA TO TYLKO KONCEPCJA I POKAZANIE JAK TO BEDZIE DZIALAC !
// W kolejnej lekcji zostanie pokazane JAK SIE TO ROBI JUZ DOCELOWO!!
// Na razie jeszcze nie docelowe tworzenie iteratorwo ale pokazanie koncepcji
let itES6 = {
    
    [Symbol.iterator]() {      
        var numbers = ["z iteratoraES6", 11, 222, 33, 444, 55],
            index = 0;

        return { // uwaga ! stary zapis funkcji z ES5
            next: function() {
                return {
                    done: (index === numbers.length) ? true : false, // u dolu wyjasnienie
                    value: numbers[index++]
                };

            }
        };        
    }
};


let iteratorES6 = itES6[Symbol.iterator]();

for (let o = iteratorES6.next(); o.done !== true; o = iteratorES6.next() ) {
    
    console.log(o);  // caly obiekt
    console.log(o.value); // o to bedzie nam z reguly chodzic
}

/////////////////////////////////////////////////////////////////////////
////////// TO JEST NAJWAZNIEJSZE ! CO SIE MUSI SKLADAC NA ITERATOR:   
/*  ***************************************
        iterator.next() 
// next mozna ja wieloktrotnie wywolywac i ma ona zwracac za kazdym taki oto obiekt:
        {
            value: 1,       // dowolna wartosc obiekt czy co chcesz
            done: false     // false (wtedy koljeny) lub true (wtedy undefined i stop) !! WAZNE !!!
        }
******************************************** */