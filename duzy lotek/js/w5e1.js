console.log("ES6 - Dekompozycja JSON");

const btn = document.querySelector(".btn"),
      output = document.querySelector("p"),
      url = "http://code.eduweb.pl/bootcamp/json/";

let data;
      



btn.onclick = function(){
    console.log(btn);
    console.log(output);
    
    getJSON(url);
    
    format(data, output);
}

function getJSON(url) {
    
    console.log("get jeson start");
    
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", url, false);
    
    xhr.onreadystatechange = function(e){
        
        if( this.readyState === 4 && this.status === 200 ) {
             
             data = JSON.parse(xhr.response);
        }        
    }

    
   xhr.setRequestHeader("Accept", "application/json");    
    
    xhr.onerror = function(e) {
        
        fnFail("Zjebało się");
    }    
    
    xhr.send();  
}

function format(data, output) {
    console.log(data);

            let text = "";
    
            for(let key of data) {
//                console.log(key.name);
                let { 
                    id, 
                    name,
                    username,
                    email,
                    address: {
                    geo:[first, second],
                    },
                    website,
                    company: {
                        name: companyName
                    }
                } = key || {};
                
                let template = 
                    `Nr: ${id}, <br>
Imię: ${name},<br> 
<strong>Username: ${username},</strong> 
Email: ${email}, website, ${companyName},
<a href=“http://bing.com/maps/default.aspx?cp=${first}~${second}”>Pokaż na mapie</a><br>`;
                
                console.log( template);
                text += template;
            }
            
            output.innerHTML = text;    
    
}