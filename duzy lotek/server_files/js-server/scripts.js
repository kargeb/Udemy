console.log("testy serwera");

var xhr = new XMLHttpRequest();

var content = null;
//xhr.open("GET", "o-nas.html", false); // Specjalnie zamieniony na FALSE ! (asnych wył)

xhr.open("GET", "http://code.eduweb.pl/bootcamp/users/", true);

xhr.onreadystatechange = function(e) {
    
    console.log( this.readyState );
    
    if( this.readyState === 4 && this.status === 200 ) {
        console.log( this.response );
        content = this.response;
        console.log(content);
        
//        document.write(this.response);
    }
    
}

xhr.setRequestHeader("Accept", "application/json");  // zmiana na JSON

//xhr.timeout = 1;

xhr.send(null);

//console.log(xhr.readyState);
//window.addEventListener("load", function(){
//    console.log(content);
//}, false);
setTimeout(function(){
    console.log(content);
    console.log(JSON.parse(content));
},1000);