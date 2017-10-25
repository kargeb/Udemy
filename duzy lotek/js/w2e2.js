(function(){

console.log("formularz psa");

var entryForm = document.querySelector("#entryForm"),
    fields = entryForm.querySelectorAll("[name]"),
    button = entryForm.querySelector("button"),
    ok = true;
    
entryForm.addEventListener("submit", function(e){
    
    e.preventDefault();
    
    ok = true;
    
    fields.forEach(function(field){
       field.nextElementSibling.textContent = ""; 
    });
    
    
    fields.forEach(function(field){
        if(field.value === ""){
            field.nextElementSibling.textContent = "nie moze byc puste";
            ok = false;
        } else if(field.name == "userEmail" && field.value.indexOf("@") === -1) {
            field.nextElementSibling.textContent = "Małpa musi byc !";
            ok = false;
        } else if ((field.name == "userNumber") && isNaN(Number(field.value))) {
            field.nextElementSibling.textContent = "Wylacznie liczby !";
            ok = false;
        }   
    });
    
    console.log("OK JEST " + ok);
    if(ok) {
        button.nextElementSibling.textContent = "BEJE !!! WYSYŁAJ !";
        //entryForm.submit();  
    }
    
}, false);
    
    
    
})();