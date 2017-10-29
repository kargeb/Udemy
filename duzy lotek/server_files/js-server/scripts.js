console.log("testy serwera");

var xhr = new XMLHttpRequest();

//xhr.open("GET", "o-nas.html", false); // Specjalnie zamieniony na FALSE ! (asnych wył)

xhr.open("GET", "o-nas.html", true);

xhr.onreadystatechange = function(e) {
    
    console.log( this.readyState );
    
    if( this.readyState === 4 && this.status === 200 ) {
        console.log( this.response );
        
//        document.write(this.response);
    }
    
}


xhr.timeout = 1;

xhr.send(null);

//console.log(xhr.readyState);