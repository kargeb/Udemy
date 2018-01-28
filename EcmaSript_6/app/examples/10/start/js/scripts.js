// 13. Nazwa funkcji i debugowanie

//Kolejna z rzeczy ustandaryzowanych w ES6 a mianowicie NAZYWANIE FUNCKJI

// Przede wszystkim chodzi o to ze kazda funkcja ma cos takiego jak "name" czyli getName.name DA NAZWE FUNKCJI
// Jest to bardzo przydane podczas wywalania bledow bo wtedy wiadomo w komunikacie jaka funkcja wywalila blad, FUNKCJE ANONIMOWE nie maja takiej wlasciwosci i dlatego W HCUJ trudno jest szukac w nich bledu no bo komunikat nie pozwala nam zlokalizowac funkcji na podstawie jej nazwy

function getName() {

    throw new Error("jo jebie !");  // mamy w komuinikacie "at getName"
    
    return "Jan";
};
console.log( getName() );

// ES6 sprawia ze nawet anonimowe funkcje maja swoje "name" ALE MUSZA BYC PRZYPISANE DO ZMIENNEJ (widocznie w ES5 nie mialy wtedy nazwy)

let getName2 = function() {
    
    throw new Error("jo jebie !");  // mamy w komuinikacie "at getName2"
    
    return "Jan";
}
console.log( getName2() );

// W obiektach tez to dziala i name przybiera nazwe po nazwie metody do jakiej jest przypisana 

let person = {
    getNamePerson: () => { throw new Error("jo jebie Person !"); }
}
console.log( person.getNamePerson() );  // error at  Object.getNamePerson

// Ciekawostka ! Jedyny przypadek gdy nie dziala zmienna "name" poprawnie jest nieslychanie rzadki, kiedy tworzymy funkcje przez konstructro new Function !
// PRZYPOMNIENIE co to jest "new Function"
// W TYM SPOSOBIE pierwszy argument TO SA ARGUMENTY DO PRZEKAZANIA DO FUNKCJI a drugi argument TO JEST CIALO FUNKCJI !!!
let newFnNew = new Function("", "return 'Jan z new function';");

console.log( newFnNew() );
console.log( newFnNew.name );  // NIE DZIALA ! Mamy "Anonymous" mimo ze posiada nazwe

// Czyli dzieki ES6 zawsze jeli tylko jest to mozliwe MAMY w funckji wartosc "name" co jest zbawienne przy debugowaniu