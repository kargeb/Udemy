console.log("parsowanie adresu");

var span = document.querySelector("#content"),
    button = document.querySelectorAll("button"),
    input = document.querySelector("#url"),
    zm = "";

console.log(span, button, input);


button[0].onclick = function() {
    
    zm = input.value;
    location.href = zm;
    
}

button[1].onclick = function() {
    
    input.value += "?page=2"
    
}

button[2].onclick = function() {
    
    var arr = location.href.split("/");
    
    for(var key in arr) {
        console.log(arr[key]);
    }
    
    var ost = arr[arr.length-1];
    var output = "";
    
    if(ost.indexOf("?page=") === -1) {
        output = "NIE MA PAGE !";
    } else {
        var poz = ost.indexOf("?page=");
        if(isNaN(Number(ost[poz+6]))) {
            output = "JEST PAGE ale BEZ NUMERKA !!!";
        } else {
            output = ost[poz+6];
        }
    }
    
    span.textContent = output;
}

