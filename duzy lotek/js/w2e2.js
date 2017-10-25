(function(){

console.log("formularz psa");

var entryForm = document.querySelector("#entryForm"),
    fields = entryForm.querySelectorAll("[name]"),
    button = entryForm.querySelector("button");

console.log(fields);
console.log(button);


entryForm.addEventListener("submit", function(e){
    
    e.preventDefault();
    console.log("poszlo submit");
    
    fields.forEach(function(){
        console.log(this);
    });
    
}, false);
    
})();