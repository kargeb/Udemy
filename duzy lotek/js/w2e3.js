(function(){
 
console.log("dupa dupa");

var zygor = document.querySelector("#zygor"),
    button = document.querySelector("button"),
    counter = 10;
    
    console.log(zygor);
    
function execute() {
    button.style.color = "white";
    button.style.background = "black"
}     
    
function nadupcaj(fun) {
    var stop = setInterval(function(){
        counter--;
        zygor.textContent = counter;
        if(!counter){
            console.log("dupa dfupa dupa udfpa");
            clearInterval(stop);
            fun();
            
        }
        
    },500);
}    
        
    
button.onclick = function(){
    
    nadupcaj(execute);
    
    console.log("koniec");
}    
    
 })();



