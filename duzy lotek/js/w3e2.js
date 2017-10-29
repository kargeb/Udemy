console.log("klasy nadupcanie");

var elem = new Toggler("#section");
var button = document.querySelector("#button");
var button2 = document.querySelector("#button2");
var span = document.querySelectorAll("span");
 
button.addEventListener("click", function() {
 
    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }
 
}, false);

button2.addEventListener("click", function() {
    
    span[span.length-1].textContent = elem.getElem();
    
}, false);

function Toggler(elem) {
    this.elem = document.querySelector(elem);
    
    
    this.getElem = function() {
        return this.elem;
    }
    
    this.show = function() {
        this.elem.style.display = "block";
    }
    
    this.hide = function() {
        this.elem.style.display = "none";
    }
    
//    console.log(this.elem);
}