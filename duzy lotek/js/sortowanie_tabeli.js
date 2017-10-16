console.log("dupa");

var table = document.querySelector("#myTable"),
    headers = table.querySelector("thead"),
    tbody = table.querySelector("tbody"),
    tab = document.querySelector("#tab");

console.log(table);
console.log(headers);
console.log(tbody);

headers.onclick = function(e) {
    console.log(e.target.innerHTML);
    console.dir(e);
    
    var wiersze = tbody.querySelectorAll("tr");

    console.log(wiersze);

    if(e.target.innerHTML == "Wiek") {
    
        var arr = [];

        for (var i = 0; i<wiersze.length; i++) {
            console.log(wiersze[i].lastElementChild.textContent);
            arr[i] =  wiersze[i].lastElementChild.textContent;
        }

        console.log(arr);
        arr.sort(compareNumbers);
        console.log(arr);

        for (var j = 0; j<arr.length; j++) {

            for(var k = 0; k<arr.length; k++) {
                if(wiersze[k].lastElementChild.textContent == arr[j]) {
                    console.log(wiersze[k]);
                    tbody.appendChild(wiersze[k]);
                } 
            }
        }

    } else if (e.target.innerHTML == "Imię") {
        console.log(e.target.innerHTML)
        
        var arr = [];

        for (var i = 0; i<wiersze.length; i++) {
            console.log(wiersze[i].firstElementChild.textContent);
            arr[i] =  wiersze[i].firstElementChild.textContent;
        }

        console.log(arr);
        arr.sort(compareChar);
        console.log(arr);

        for (var j = 0; j<arr.length; j++) {

            for(var k = 0; k<arr.length; k++) {
                if(wiersze[k].firstElementChild.textContent == arr[j]) {
                    console.log(wiersze[k]);
                    tbody.appendChild(wiersze[k]);
                } 
            }
        }        
        
    } else  {

        console.log(e.target.innerHTML)
        
        var arr = [];

        for (var i = 0; i<wiersze.length; i++) {
            console.log(wiersze[i].firstElementChild.nextElementSibling.textContent);
            arr[i] =  wiersze[i].firstElementChild.nextElementSibling.textContent;
        }

        console.log(arr);
        arr.sort(compareChar);
        console.log(arr);

        for (var j = 0; j<arr.length; j++) {

            for(var k = 0; k<arr.length; k++) {
                if(wiersze[k].firstElementChild.nextElementSibling.textContent == arr[j]) {
                    console.log(wiersze[k]);
                    tbody.appendChild(wiersze[k]);
                } 
            }
        } 
    }
}

function compareNumbers(a, b) {
    return a - b;
}

function compareChar(a, b)  {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}



