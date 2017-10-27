(function(){
 
console.log("dupa dupa");

var zygorInt = document.querySelector("#interval"),
    zygorTime = document.querySelector("#timeout"),
    buttonInt = document.querySelector("button[name='int']"),
    buttonTime = document.querySelector("button[name='time']"),
    counter = 10;
    
    console.log(zygorInt, zygorTime, buttonInt, buttonTime);
    
function executeInt() {
    buttonInt.style.color = "white";
    buttonInt.style.background = "black"
}     
    
function executeTime() {
    buttonTime.style.color = "yellow";
    buttonTime.style.background = "blue"
}         
    
function nadupcajInt(fun) {
    var stop = setInterval(function(){
        counter--;
        zygorInt.textContent = counter;
        if(!counter){
            console.log("dupa dfupa dupa udfpa");
            clearInterval(stop);
            fun();
            counter = 10;
            
        }
        
    },500);
}    

    
    
buttonInt.onclick = function(){
    
    nadupcajInt(executeInt);
    
    console.log("koniec");
}    

function nadupcajTime(fn, time, count) {
    
    if(count+1){
        setTimeout(function(){
            zygorTime.textContent = count;
            console.log(count);
            count--;
            nadupcajTime(fn, time, count);
        }, time);
    } else {
        fn();
    }

}

buttonTime.onclick = function(){
    nadupcajTime(executeTime, 1000, 9);
}
    
 })();



