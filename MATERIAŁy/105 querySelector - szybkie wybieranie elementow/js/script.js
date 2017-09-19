/*
    getElementById()
    getElementsByTagName()

    słabiej wspierane:
    getElementsByClassName() - brak wsparcia w ie6,7,8
    getElementsByName() - brak wsparcia w ie6,7,8,9
    
    brak wsparcia w ie 6 i 7 i połowiczne w ie8:
    querySelector() - wybranie pierwszego napotkanego elementu spełniającego warunek
    querySelectorAll() - wybieranie wszystkich elementów spełniających warunek

 */


var kursyProgramowania = document.querySelector("#kursyTworzeniaStronWWW li:nth-child(4)");

alert(kursyProgramowania.innerHTML);


