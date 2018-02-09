console.log("ES6 - Dekompozycja JSON");

const btn = document.querySelector(".btn"),
      output = document.querySelector(".table-hover"),
      url = "http://code.eduweb.pl/bootcamp/json/";

let data;
      
btn.onclick = function(){

    getJSON(url);
    format(data, output);
}

function getJSON(url) {
    
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

            let text = "",
                header = "";
    
            header = `<thead"> 
            <tr> 
            <th>#</th> 
            <th>Imię</th> 
            <th>Nick</th> 
            <th>Email</th>
            <th>Strona</th>
            <th>firma</th>
            <th>Mapka</th> 
            </tr> 
            </thead>
            <tbody>`;    
    
            for(let key of data) {
                
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
                    `<tr>
                    <th scope="row">${id}</th>
                    <td>${name}</td>
                    <td>${username}</td>
                    <td>${email}</td>
                    <td>${website}</td>
                    <td>${companyName}</td>
                    <td><a href=“http://bing.com/maps/default.aspx?cp=${first}~${second}”>Pokaż na mapie</a></td>
                    </tr>`;

                text += template + `</tbody>`;
            }
            output.innerHTML = header + text;    
}