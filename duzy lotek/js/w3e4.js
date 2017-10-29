console.log("JSONparse");

var button = document.querySelector("button"),
    span = document.querySelectorAll("span"),
    adres = document.querySelector("#url");
    
button.style.width = "200px";

function fecz(url, fnSuccess, fnFail) {

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", url, true);
      
    xhr.onreadystatechange = function(e) {

        if( this.readyState === 4 && this.status === 200 ) {
            
            fnSuccess(JSON.parse(xhr.response));
        }
    }

    xhr.setRequestHeader("Accept", "application/json");
    
    xhr.onerror = function(e) {
        
        fnFail("Zjebało się");
    }

    xhr.onload = function(e) {
        console.log("onload");
    }
    
    xhr.send(null);
}

function sukces(data) {
    
    console.log(data);
    console.log(data.length);
    
    var cos = "";
    for(var i = 0; i < data.length; i++) {
        for (var key in data[1]){
            cos += key + " " + data[1][key] + "\n";
        }
        cos += " ------------------ \n";
    }
            console.log(cos);
        span[1].textContent = cos;
//    span[1].textContent = data;
//    console.log("sukcees pelem");
    return data;
}

function porazka(err) {
    
    span[1].textContent = err;
    return err;
}

button.onclick = function() {
//    span.textContent = fecz("http://code.eduweb.pl/bootcamp/users/", sukces, porazka);
    var url = adres.value;
    fecz(url, sukces, porazka);
}


