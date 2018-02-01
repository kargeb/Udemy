// 40. Zwracanie generatora

//Jak zakończyć działanie iteratora zeby nie zwracał już później rzadnych wartości
// Nie jest to za często wykorzystywane ale warto wiedziec że to istnieje
// Oprócz metody NEXT i THROW mamy takze RETURN

function *getRandom() {

    while(true) {   // jest ok BO TO GENERATOR WIEC CZEKA NA ITEROWANIE, inaczej od razu zawiecha przegladarki
        yield Math.floor(Math.random()*100) + 1   // Proszę jaka piękna funkcja random 1-100 ! Do portfela kurwa !
    }
    // Czyli ten random bedzie sie odpalac za kazdym wywolaniem ITERATOR.NEXT
}

let iterator = getRandom();
let randomNumbers = [];

for(let number of iterator) {
    // TUTAJ UWAGA BO CONSOLLOG juz by zajebal przegladarke !
    // Trzeba wiedziec jak iterator zatrzymac
    
        randomNumbers.push(number);
    
        if(randomNumbers.length === 10) {
            iterator.return();   // I WŁAŚNIE TEN RETURN pozwala nam zakończyć iterator ! Po prostu po dostaniu RETURNA wartosc DONE dostaje TRUE !
        }
}

console.log(randomNumbers); //(10) [47, 34, 31, 78, 97, 31, 9, 70, 2, 32]
console.log( iterator.next() ); // {value: undefined, done: true}

// Jak widac zawieszki nie ma ! Kazde nastepne wywolanie ITERATOR.NEXT pokazuje ze jego DONE jest na true !

// PAMIĘTAJ ŻE jest to po prostu JEDEN ZE SPOSOBÓW zakończenia takiej pętli (for of) no bo zawsze moglismy dac BREAK przy wrunku i tez bysmy z niej wyszli ! Tyle ze bez konczenia definitywnego tego iteratora.