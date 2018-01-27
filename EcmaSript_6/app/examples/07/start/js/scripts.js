// 10. Arrow Function i kontekst 

// Tutaj objaśnione kiedy nalezy korzystac ze strzałkowych a kiedy się nie nadają i POKAZANE ze nie jest to Syntactic Sugar ale Faktyczny Ficzer ktory moze sie naprawde przydac

// this  // tutaj kieruje this z funkcji strzalkowej w obikecie ponizej
//  var firstName = "Piotr";  // this u dolu skorzysta wlasnie z tej zmiennej

let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello: () => {       // Funckja strzałkowa, nic nowego
        console.log( this );
        return this.firstName + " " + this.lastName;
    }
};
console.log( person.sayHello() );  // DUPA ! undefined, undefined

// UWAGA ! W FUNKCJACH STRZAŁKOWYCH THIS NIE POKAZUJE NA OBIEKT KTORY JA DEKLARUJE ! Nie da się tego KONTEKSTU ustawić ! THIS kieruje na POZIOM JEDEN WYZEJ NIZ OBIEKT czyli tak jakby byl wywolany nad obiektem, A WIĘC W NASZYM PRZYPADKU BĘDZIE TO WINDOW !
// Gdyby byl obiekt opleciony jakas inna funkcja NO TO THIS POKAZYWALO BY WLASNIE NA TA FUNKCJE !
// No więc gdybyśmy sobie utworzyli zmienną globlaną  var firstName = "Piotr"; TO WŁAŚNIE NA NIA BEDZIE KIEROWAC THIS !

// I WŁAŚNIE O TO CHODZI żeby wiedzieć że czasmi jest to wada a czasami zjaebista zaleta !

            /////////////////////// ZALETY !!!! ////////////////////////////

////// PRZYPOMNIENIE PROBLEMU Z ZAGNIEŻDŻANIEM FUNKCJI I THIS !!! /////////////////////////////////////////////////////////

// Tutaj wracamy do zadania jeszcze z pierwszych dni w JS kiedy trzebabylo dostac sie do THIS zagniezdzonego w innej funkcji !

        let personThis = {
            firstName: "Karol",
            lestName: "Dupka",
            sayHello: function() {
                // THIS U DOŁU NIE KIERUJE TUTAJ !
                setTimeout(function(){
                    console.log( this.firstName + " " + this.lastName );
                }, 2000);
            }
        };
        // DUPA ! undefined, undefined  THIS WSKAZUJE NA OBIEKT GLOBALNY !!
        personThis.sayHello();  // undefined undefined

//// SĄ 2 wiodące rozwiązania tego problemu:

//////// Obejscie 1:

        let personThisObejscieThat = {
            firstName: "Karol",
            lestName: "Dupka",
            sayHello: function() {
                
                var that = this;    // ROZWIĄZANIE THAT 
                
                setTimeout(function(){
                    console.log( that.firstName + " " + that.lastName );
                }, 2000);
            }
        };
        // DZIAŁA ! Dzięki przypisaniu THIS do THAT i wjebaniu do do zagniezdonej funkcji !
        personThisObejscieThat.sayHello();  // Działa ! Karol Dupka

//////// Obejscie 2:

        let personThisObejscieBind = {
            firstName: "Karol",
            lestName: "Dupka",
            sayHello: function() {
                
                setTimeout( function(){
                    console.log( this.firstName + " " + this.lastName );
                }.bind(this), 2000);    // ROZWIĄZANIE  BIND
        // Tutaj rozwiązanie za pomocą BIND, czyli ustawienia kontkestu, przypomnij sobie ja, ale chodzi o to że daje ona znac NA CO KIERUJE THIS w funkcji na którą wskazuje !        
            }
        };
        // DZIAŁA ! Dzięki przypisaniu wywołaniu BIND
        personThisObejscieBind.sayHello();  // Działa ! Karol Dupka

////// KONIEC PRZYPOMNIENIA /////////////////////////////////////////////////////////

//////// Obejscie 3:
// NO I przechodzimy do MERITUM czyli jak obejść ten problem za pomocą FUNKCJI STRZAŁKOWEJ

let personThisObejscieStrzalka = {
    firstName: "Karol",
    lestName: "Dupka",
    sayHello: function() {

        setTimeout( () => {  // ROZWIĄZANIE STRZAŁKA !!!
            console.log( this.firstName + " " + this.lastName );
        }, 2000);         
    }
};
// DZIAŁA ! Dzięki wywołaniu jako funkcja strzałkowa ! Czyli idealne wykorzytsanie tego że THIS W STRZAŁKACH pokazuje ZAWSZE O JEDEN POZIOM WYZEJ !!!
personThisObejscieStrzalka.sayHello();  // Działa ! Karol Dupka
// UWAGA ! Tylko pamiętaj żeby funkcja sayHello BYLA DEKLAROWANA NIE JAKO STRZALKOA ! Bo chuj z tego bedzie !

////// PRZYPOMNIENIE CALL !!! /////////////////////////////////////////////////////////

            let personCall = {
                firstName: "Jan",
                lastName: "Kowalski",
                sayHello() {      
                    return this.firstName + " " + this.lastName;
                }
            };

        console.log( "z funkcji personCall " + personCall.sayHello() );

        // Call CZYLI wlasnoreczne perfidne przekazanie NA CO MA WSKAZYWAC THIS PODCZAS WYWOLYWANIA FUNKCJI !
        console.log(  personCall.sayHello.call( { firstName: "maciekCall", lastName: "LukaszCall" } )  );
        // efekt:  maciekCall LUkaszCall
        // TAK TO WŁAŚNIE SIĘ ROBI ! I jest to w chuj wazne i dlatego tak sie nad tym spuszczam mimo ze nie na temat

    ///////////////////////////////////////////////////////////////////////////////////////////
    ///// ZAPAMIETAJ KURWA RAZ NA ZAWSZE ! MOZNA TO WYMUSIC NA 3 SPOSOBY !!! /////////////////
    /////  CALL ,  APPLY,   BIND !!!!!!!!!!!!!!!!!!!!!!!! ////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////

////// KONIEC PRZYPOMNIENIA CALL  /////////////////////////////////////////////////////////

// Meritum ! NA FUNKCJACH STRZAŁKOWYCH TE 3 METODY call, apply i bind NIE DZIAŁAJA KURWA !!!!!
// Za zdane zskarby nie wymusisz tam zmiany kontekstu MIMO ZE NIE ZGLASDZA TO BLEDU !!!

    let personCallStrzalka = {
        firstName: "Jan",
        lastName: "Kowalski",
        sayHello: () => {      
            return this.firstName + " " + this.lastName;
        }
    };

console.log( "z funkcji personCallStrzalka " + personCall.sayHello() );

// NIE DZIAŁA !!! BO FUNKCJA STRZAŁKOWA I CALL NI CHUJA !!!!  undefined undiefined
console.log(  personCallStrzalka.sayHello.call( { firstName: "maciekCall", lastName: "LukaszCall" } )  );

// NO I JEST TO PLUUUUUUUUS !!! NO bo mamy pewnosc ze nic tam tego THIS w funkcji strzalkowej NIE ZMIENI !!

                /////////////////////// WADY !!!! ////////////////////////////
// TZN nie tyle wady co trzeba po prostu kurwa o tym pemietac !

//// KLIKNIECIE PRZYSICKU !!

document.querySelector("#button-07").onclick = function(e) {
        console.log ( e.target === this );      // TARGET I THIS POKAZUJA TO SAMO !! BUTTON
    }
// no i UWAGA ! Ze strzalkowa TONIE BEDZIE TRUE !!! bo THIS KIERUJE GDZIE INDZIEJ !
    document.querySelector("#button-07").onclick = (e) => console.log ( e.target === this ); // false !
// ALE spoko bo e.traget KIERUJE TAM GDZIE MA KIEROWAC !


/// JESZCZE JEDEN PRZYKLAD:

let PersonConstructor = (firstName) => {
    this.firstName = firstName;
};

//let personNext = new PersonConstructor("Anna"); // BŁAD !!
// FUNKCJA STRZAŁKOWA NIE MOŻE BYĆ KONSTRUKTOREM !!!
// Nie mozna towrzyc z niej nowcyh obiektow ! No i tym samym:
// NIE ZAWIERA ONA PROTORYPU !
console.log(PersonConstructor.prototype);  // UNDEFINED !!!

            /*
        P O D S U M O W A N I E 
STRZAŁKOWE FUNKCJE:
    - Nie mają prtotypu
    - Nie ma mozliwosci wymuszenia na nich co ma byc pod slowem THIS wewnatrz ich ciala
    - Nie mozna z nich korzystac jak z konstruktorow
    
Moga to byc zarowno zalety jak i wady ! Najelpiej w chuj sprawdzaja sie w filtorwaniu na tablicach ! lub dostep do this gdy jest o zakres wyzej
                */    