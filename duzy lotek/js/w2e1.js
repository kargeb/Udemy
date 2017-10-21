console.log("poka");

var button = document.querySelector("button"),
    poka = document.querySelectorAll("div");

button.onclick = function(){
    
    poka[1].classList.toggle("ukryj");
    
}