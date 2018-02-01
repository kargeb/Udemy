// 36. Dodawanie iteratora do klasy

// Klasa to taki nowy typ danych z wlasiwosciami i metodami wiec taki ierator moze sie w chuj przydac 

class Model {

    constructor(data = {}) {    // przujmuje dowolny obiekt
        this.data = data;
    }

    get(prop) {                 // pozwala wydobyc tego obiektu dw wlasciwosc
        return this.data[prop];
    }

    set(prop, value) {          // pozwala wlasicowsc ustawic
        this.data[prop] = value;
    }

}

class Collection {

    constructor(models) {   // przyjmuje modele

        this.models = [];

        if( Collection.hasIterator(models) ) {  // spr czy maja iterator
            this.populate(models);        // jak tak to do metody populate
        }

    }

    populate(models) {  // przekazujemy do tablicy tworzac nowe modele

        for(let model of models) {  // FOR OF
            this.models.push( new Model(model) );   // TWORZENIE MODELI Z PRZEKAZANEJ TABLICYi zapisanie ich w [] models
        }

    }

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
    
    static hasIterator(obj) {   // obj &&  to sprawdzenie czy cos zostalo wgl przekazane
        // typeof obj[Symbol.iterator] === "function"  A TO SPRAWDZA CZY JEST ITERATOR
        return obj && typeof obj[Symbol.iterator] === "function";
    }

}

const USERS = window.USERS;  // To sa uzytkownicy w plik HTML jak na dole (tablica z obiektami)

/*  <script>
    window.USERS = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net"
    },
];
</script>    */

/////////// jedziemy:
// mozna to przekazac prosto jako windows.USERS ale zabezpieczylismy sie przed nadpisaniem
let users = new Collection(USERS); 

// No i teraz chcemy ABY NASZA KOLEKCJA utworzona u góry, MOGŁA KORZYSTAĆ Z FOR OF, oraz OPERATORA SPREAD !
console.log(users);     // Collection {models: Array(10)}
console.log( [...users] );  // (10) [Model, Model, Model, Model, Model, Model, Model, Model, Model, Model]
// drugi console dziala dopiero po dodaniu iteratora do klasy ! wczenniej byl blad
// W taki oto sposob zrobilismy podwaliny pod framewrok wlasny

for(let user of users) {
    console.log( user.get("email") );
}
console.log("----------- zamiana mejil z BIZ na ORG -----------");
// Chcemy teraz wykorzystac nasze metody i prefiltorwac nasze dane pod katem takim ze chcemy wlowic wszsytkie osoby posiadajace adres email konczacy sie na ".biz" !
[...users]
    .filter(user => user.get("email").endsWith(".biz")) // wylowi nam 3 modele
    .forEach(user => user.set("email", user.get("email").replace(".biz", ".org")));

for(let user of users) {
    console.log( user.get("email") );
}

// PODSUMOWUJĄC !
// NA DOWOLNYM TYPIE UTWORZONBYM PRZEZ NAS MOŻEMY SOBIE WSTAWIĆ [Symbol.iterator]() DZIĘKI czemu mozemy pozniej korzystac z pętli FOR OF, ..., a takze gdy chcemy korzytac z metod zarezerwowanych dla tablic TO PO PROSTU LADUJEMY W [...obiekt] i zalatwione, NIE MUSIMY DZIEDZICZYC Z ARRAY zeby metody tablic miec