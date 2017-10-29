console.log("polyfill");

var input = document.querySelectorAll("input"),
    span = document.querySelectorAll("span"),
    button = document.querySelector("button");

console.log((typeof String.prototype.repeat === "function") ? "Istnieje repeat" : "Nie ma repeat");


String.prototype.repeatt = function(num) {
    
    var text = "";
    
    while(num) {
        num--
        text += this;
    }
    
    return text;
}


button.onclick = function() {
    
    span[span.length-1].textContent = input[0].value.repeatt(input[1].value);
}