// 14. Operator REST

//Nowy operator wprowadzony w ES6

//Najpierw ES5, tworzymy funkcje przyjmujaca DOWOLNA liczne argumnetow, ktora bedzie robic obliczenia zaczynajac OD 2 ktory podamy, bo pierwszy to bedzie info co ta funkcja ma wlansie z tymi argumentami zrobic czy pomnozyc zsumowac czy co

function calculate(type) {
    
    console.log( arguments );   // tak mozna sie dobrac do wszystkich argumnetow
    
// Uwaga !  Bedziemy pozyczac funckje SLICE z ARRAY bo argumnets to jest obiekt tablicopodobny wiec nie ma slice !    
    let args = [].slice.call(arguments, 1);   // innymi slowy:  arguments.slice(1)  // wyciecie wszystkich poza 1
    
    console.log(args);
    
// Uwaga ! Kolejna zajebista wspominana juz kiedys funkcja REDUCE, uzyjemy jej do dodania wszsytkich argumentow
// Funkcja ta działa na zasadzie PĘTLI i za kazdym obrotem robi to co chcemy z PravVal i val, a następnie WYNIK USTAWIA JAKO PREVVAL !
// Czyli pierwszy raz bedzie 2 + 22, a pozniej juz prevVal to 22 a val to 3 ITD
    return args.reduce(function(prevVal, val){
        console.log("prevVal: " + prevVal + ", val: " + val);  // dokladnie tak to dziala jak opisane wyzej
       return prevVal + val; 
    });
}

console.log( calculate("sum", 2, 22, 3, 7, 13) );   // 47

/////////// NOWA, ta sama FUNKCJA, NAPSIANA Z REST i ze STRZALKOWA ! 

// REST wygląda TAK:  "...zmienna" i dziala tak ze WSZYSTKO co jest przeslane i trafia od niego JEST DOSTEPNE W ZWYKLEJ TABLICY o nazwie taka jak po kropkach !
// Moze byc uzyty WYLACZNIE NA KONCU przyjmwoanych parametrow wiadomo dlaczego ! (gdy nie bedzie ostatni to nawet dostaniemy blad)
// tutaj mamy go na drugim miejsci WIEC WSZYSTKO WPADA DO NIEGO OD 2 PARAMETRU, gdyby byl np na 3 miejscu NO TO DOPIERO OD 3 parametru wpadaloby do niego 
// gdy nic od niego nie trafi do dostaniemy pusta tablice

function calculateES6(type, ...args) {
    
    // args jest NORMALNA TABLICA, NIE TRZEBA JEJ PRZEKSZTALCAC !
    console.log(args);  
    
    // TO JEST DOKLADNIE TA SAMA funkcja co u góry tyle zapisana jako STRZALKOWA
    return args.reduce( (prevVal, val) => prevVal + val );
    
}
console.log( calculateES6("sum", 2, 5, 6, 7) );

// Teraz 3 funkcja JUZ ZAJEBISCIE NAPISANA tak ze mozemy wybrac czy chcemy mnozyc czy dodawac:

function calculateSumOrMult(type, ...args) {
    
    //Bardzo ciekawa konstrukcja
    let calculate = {
        sum: (prevVal, val) => prevVal + val,
        multiply: (prevVal, val) => prevVal * val,
    };
    // reduce przyjmuje funkcje wiec wystrczy mu wskazac jaka:
    return args.reduce(calculate[type]);
}

console.log( calculateSumOrMult("sum", 1, 2, 3, 4, 5) );        // 15
console.log( calculateSumOrMult("multiply", 1, 2, 3, 4, 5) );   // 120

// CZYLI REST POZWALA PRZYJAC DOWOLNA ILOSC PARAMETROW I PRZEDSTAWIC JE JAKO ZWYKLA TABLICE ! A co my juz z tym zrobimy to zalezy wylacznie od nas.