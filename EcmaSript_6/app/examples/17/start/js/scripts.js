// 20. Dekompozycja parametrów funkcji

// DESTRUCTURINGu mozna rowniez uzywac dla parametrow funkcji
// na poczatku wyglada dziwnie ale jest niesamowicie przydatne

function setSliderSpeed(options) {

    let slider = {};

    slider.speed = options.speed;
    slider.easing = options.easing;

    console.log(slider);

}
// Pamietaj ze NIE MOZNA NADPISAC CONT ! Ale mozna ZMIENIAC JEGO WLASCIWOSCI !
const config = {
    autoPlay: true,
    speed: 500,
    pause: 2000,
    easing: "linear",
    infinite: true
};

// Przekazujemy nasz obiekt CONFIG do funckji powyzej:
setSliderSpeed(config); // {speed: 500, easing: "linear"}   

///////////////////////////
// UWAGA ! Alternatywa, czyli gdy wiemy ze bedziemy tylko te 2 wlasciwosci przyjmowac to mozna tak:

function setSliderSpeed2(speed, easing) {

    let slider = {};

    slider.speed = speed;
    slider.easing = easing;

    console.log("setSliderSpeed2: ")
    console.log( slider);
}

setSliderSpeed2( config.speed, config.easing );  

///////////////////////////////////////////////////////////////
/// WLASCIWY PRZYDKLAD TERAZ !! 
// JAKO PARAMETRY PRZEKAZUJEMY DESTRUCTUERING !!!
// Zabezpoeczamy sie przed bleada dokladnie tak samo jak w poprzedenich lekcjach !
function setSliderSpeedDestructuring( {speed, easing} = {} ) {
    
    let slider = {};

    slider.speed = speed;
    slider.easing = easing;

    console.log("setSliderSpeedDestructuring: ")
    console.log( slider);
}

setSliderSpeedDestructuring(config);

// Czyli w parametrze funkcji robimy dokladnie to   { speed, easing } = config
// UWAGA ! w przypadku parametrow funkcji NIE DAJEMY OBIEKTU BO PRAWEJ STRONIE = !!!
// Interpeter juz sie sam kapuje o jaki obiekt chodi

// CZYLI mozemu DESCTRUCTURINGOWAC tablice, obiekty I parametry funkcji !