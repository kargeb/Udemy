console.log("bulin");

var button = document.querySelector("button");

button.onclick = function() {
    
    var input = prompt("Podaj co:");

    function toBoolean(data) {
        return Boolean(data);
    }

    console.log(toBoolean(input));
    
    var dupa = null;
    console.log(toBoolean(dupa));
}

