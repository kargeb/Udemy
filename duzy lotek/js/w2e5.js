console.log("callback");

var button = document.querySelector("button");
var counter = 0;

function start() {
    console.log("dupa");
}

//var halt = setTimeout(start, 1000);
//
//function stop(halt) {
//    clearTimeout(halt);
//    console.log("stop funkcja");
//}

var hold = null;

function debounce(fn, time) {

    console.log(time);
    
    return function (){
    
    clearTimeout(hold);
    hold = setTimeout(fn, time);
    console.log("hold: " + hold);
    };
}

var fun = debounce(start, 1000);

button.onclick = function(){
        fun();
    }



