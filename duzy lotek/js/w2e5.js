//console.log("callback");
//
//var button = document.querySelector("button");
//var counter = 0;
//
//function start() {
//    console.log("dupa");
//}
//
//
//var hold = null;
//
//function debounce(fn, time) {
//
//    return function (){
//    
//    clearTimeout(hold);
//    hold = setTimeout(fn, time);
//    };
//}
//
//var fun = debounce(start, 1000);
//
//button.onclick = function(){
//        fun();
//    }


(function() {

    var span = document.querySelectorAll("span"),
        funScroll = 0,
        funResize = 0;
    
    function debounce(fn, time) {
        // docelowo powinna być wywoływana
        // funkcja fn w ten sposób fn()
        var hold = null;
        // część kodu tutaj

        return function() {
            // pozostały kod tutaj
        clearTimeout(hold);
        hold = setTimeout(fn, time);
        };
    }

    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
        funScroll++;
        span[0].textContent = "Scrollujemy! " + funScroll;
    }, 200);

    // w tym miejscu pod handleScroll
    // powinna być nowa funkcja

    // Przypisanie zdarzenia "scroll"
    window.addEventListener("scroll", handleScroll, false);

    // Możesz również przetestować funkcję
    // ze zdarzeniem "resize" skalując okno
    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
        funResize++;
        span[1].textContent = "Zmieniamy rozmiar okna!" + funResize;
    }, 100);

    window.addEventListener("resize", handleResize, false);

})();


