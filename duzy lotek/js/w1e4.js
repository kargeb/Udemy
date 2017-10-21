console.log("nadupcanie dodawania liczb");

var arr = [],
    input = document.querySelector("input"),
    label = document.querySelectorAll(".label"),
    outputNumbers = label[1],
    outputScore = label[2];

document.onkeypress = function(e) {

    console.log(input.value);
//    console.log(e.keyCode);
    
    if(e.keyCode == 13) {
        console.log("nadupcukes eneter");
        arr.push(input.value);
        input.value = "";
        console.log(arr);
        outputNumbers.nextElementSibling.textContent = arr;
    }

    if(e.keyCode == 32) {
        console.log("Suma liczb: " + sum(arr));
        outputScore.nextElementSibling.textContent = sum(arr);
    }
    
}

function sum(arr){
    
    var total = 0;
    
    for(var i = 0; i < arr.length; i++){
        total += Number(arr[i]);
    }
    
    return total;        
}