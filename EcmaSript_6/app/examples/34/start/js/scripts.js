// 37. Tworzenie generatorów

// Juz wiesz co to iteratory i jak ich uzywac,  TERAZ PORA NA GENERATORY czyli uproszczony sposob na poslugiwanie sie ITERATORAMI !
// Generator nie moze byc utworzony funkcja strzałkową ! Ale moze byc w skórconym zapisie
// GWIAZDKA MOZE BY W KAZDYM MIEJSCU:  fn* it(), fn * it(), chyba ze anonimowa to fn *()
function *it(){
    
}

// GDY WYWOLASZ FUNKCJE GENERATORA (Z *) TO ONA ZWRÓCI ITEARTOR
let iterator = it();

// Zawiera ona ta kluczowa metode NEXT i UWAGA UWAGA oto co ona zwraca:
console.log( iterator.next() );  // {value: undefined, done: true}  !!!!

// Czyli dokladnie to co my zwracalismy we wlasnych iteratorach !
// Done jest TRUE bo nic z funkcji nie zwrocilismy

// UAWAGA TA funkcja * ma zmienna którą tylko ona ma i nazywa YIELD ! 
// i to wlasnie te YIELDy są wurzucane przez iterator.nex przy kazdej iteracji, WIEC BEDZIE ICH TYLE ILE ITERACJI! 

function* it2() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator2 = it2();

console.log( iterator2.next() ); // {value: 1, done: false}
console.log( iterator2.next() ); // {value: 2, done: false}
console.log( iterator2.next() ); // {value: 3, done: false}
console.log( iterator2.next() ); // {value: undefined, done: true}

// I TERAZ UWAGA ! Funkcja * (generator) ma zdolnosc PAUZOWANIA ! Czyli jesli jedna iteracja sie wykona TO ZATRZYMUJE SWOJ STAN ! I to te YIELDy decyduja o kolejnych stanach, czyli mozna w niej nawalic w chuj kodu ale wykona sie ona tylko za jednym razem dopóki kolejny YIELD nie ostanie wywolany
// PRZYKLAD PAUZOWANIA

function* it3() {
    for (let i = 1; i < 50; i++) {
        yield i;
    }
}
let iterator3 =it3(); 

console.log( iterator3.next() );     // {value: 1, done: false}
console.log( iterator3.next() );     // {value: 1, done: false}
console.log( iterator3.next() );     // {value: 1, done: false}

// CZYLI ONA NAWET PETLE POTRAFI ZAPAUZOWAC ! O to wlasnie chodzi w tym pauzowaniu, NIE RUSZY dopoki nextem nie wywolaz kolejnego YIELDa

// Oczywiscie nie bedziemy recznie wywolywac tej funkcji next() tylko pamietamy ze robi to za nas FOR OF lub REST
for ( let value of iterator3) {
    console.log(value);     // do końca, ZACZYNAJAC OD 4 ! (bo 3 razy bylo w consollogu)
}

// UWAGA Dodawanie iteratora do wlasnego obiektu BEZ TWORZENIA METOEDY NEXT:
// TO JEST NAJWAZNIEJSZE -->  *[Symbol.iterator]()  koniecznie z gwiazdka na początku !
// Wlasnie ta * oznacza ze jest to FUNKCJA GENERATORA !
let itObj = {
    *[Symbol.iterator]() {
        
        let numbers = [1, 2, 3, 4, 5, 6 , 7]
    
        for(let number of numbers) {
            yield number;
        }
    
    }
};

for (let value of itObj) {
    console.log( value );
}
/////////////////////////////////// DZIALA !
// I nie trzeba przypisywać tego obiektu do nowej zmiennej jak funkcji ->  let iterator3 =it3(); 
// wystrczy jego prosto wjebac np do FOR OF i dziala !
// Czyli to interpreter JS sam zadba o wywolywanie NEXT(), nie musimy sie z tym dupcyc my
// ZASTAPILISMY TYM SAMYM CALE TEN KOD PONIZEJ !
/*
//////////////// Dodajemy interator:
    [Symbol.iterator]() {
        var models = this.models,  // tablica
            index = 0;
        
        return {
            next: function(){
                return {
                    done: (index === models.length) ? true : false,
                    value: models[index++]
                };
            }
        };
    }
////////////////////////////////////////////  
*/

// Czyli jesli wywolaby FOR OF lub SPREAD na obiekcie no to JS szuka GENERATORA czyli "funkcji iteratora" w tym obiekcie. 
// Znajduje ją tutaj:  *[Symbol.iterator](),  wywoluje się i sam juz zwraca metode next, ktora bedzie wywolywac sobie FOR OF lub SPREAD

// JEST TO ZAJEBISTA KONCEPCJA, trzeba ja znac w ES6 i jeszcze w wielu przykladach bedzie wykorzystana

////////// JESZCZE JEDEN SZYBKI PRZYKŁAD :
function *range(from, to) {
    let i = from;
    
    while(i<=to){
        yield i++;
    }
}

for(let value of range(333, 342)){
    console.log(value);         // dziala !
}

// ZAUWAZ zo podstawilismy GENERATOR BEZPOŚREDNO w pętli -> range(333, 342);  Czyli nie podstawilismy tego po drodze do zadnej zmiennej ! Zwrocila ona iterator i on juz sobie sam ta funkcje FOR OF wykonal

// Zrozum ta roznice ! 
// Tutaj wlasnorecznie wywolalismy generator:  for(let value of range(333, 342)
// a tutaj tylko okazalismy obiekt z generatorem:  for (let value of itObj)  a JS SAM ! znalazl sobie generator i saobie ja odpalil ! *[Symbol.iterator]()
// Moglibysmy to sami zrobic w ten sposob:  for (let value of itObj[Symbol.iterator]())  I TEZ BY DZIALALO !
// CZYLI JS SAM SOBIE MOZE WYSZUKAC GENERATOR W PRZEKAZANYCH OBIEKTACH ! NIE MUSIMY GO PROWADZIC ZA RĄCZKĘ 