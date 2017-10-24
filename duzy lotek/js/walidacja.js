/*
Trik przy SELECT ! Opcja "tematyczna" gdzie jest "disabled selected" jest ustawiona domyslnie ALE NIE POZWALA NA NIA WROCIC gdy juz uzytkownik wybierze kotras z innych opcji

 <select name="your-subject" data-error="Wybierz temat wiadomości">
                <option value="" disabled selected>- Temat wiadomości -</option>
                <option value="pytanie">Pytanie</option>
                
placeholder - opis pola w formularzu, nie ma tego w wartosci value

data-error  -  COKOLWIEK co wpiszemy w atrybucie data-cokolwiek, mozemy sobie pozniej korzystac w naszym kodzie, czyli ustawiac wlasne atrybuty
                */

// PAMIĘTAJ ŻE JEST MILION SPOSOBÓW NA TO JAK STWORZYĆ WALIDATOR FORMULARZY !!!

//Aby wykonać waldację, MUSIMY STWORZYC ZDARZENIE SUBMIT ! 
(function(){
console.log("formularzrzrzrz");       
    
var form = document.querySelector("#myForm"),
    fields = form.querySelectorAll("[data-error]");
// Po bieramy TYLKO TE ATRYBYTY gdzie mamy pole data-error czyli jesli nie chcemy jakiegos z pol formularza edytowac w kodzie to po prostu mozemy mu ten atrybut wypieprzyc


// KOD DODANY W 2 LEKCJI:

function isNotEmpty(field) {
    
    return field.value !== "";  // true lub false
}

function isAtLeast(field, min) {

    return field.value.length >= min;
}

function isEmail(field) {
    
    return field.value.indexOf("@") !== -1;
}

function displayErrors(errors) {
    
    var ul = document.querySelector("ul.errors");
    
    if(!ul) {
        ul = document.createElement("ul");
        ul.classList.add("errors");
    }
    
    ul.innerHTML = "";
    
    errors.forEach(function(error){
       
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
    
    form.parentNode.insertBefore(ul, form);
    
}


    
//Aby wykonać waldację, MUSIMY STWORZYC ZDARZENIE SUBMIT !  
form.addEventListener("submit", function(e){
    e.preventDefault(); // zapobieżenie domyślnej akcji
    
    var errors = []; // tablica do zbierania bledow (przezanoczona na data-error !)
    
    for(var i = 0; i < fields.length; i++) {
        
        var field = fields[i],
            isValid = false; // zakladamy ze false
        
        if(field.type === "text") {
            isValid = isNotEmpty(field);    // zamiana poprzednich instrukcji
//            if(field.value === "") {
        // UWAGA ! Odwołanie się do naszego atrybutu data-error ! Jak widac mozna to zrobic bezposrednio za pomoca "dataset" i nasza wlasna nazwa czyli w tym przypadku dataset.error ! Mozna by tez za pomoca get attribute 
//                errors.push(field.dataset.error);   // wladowanie wartosci wpisanej pod atrybut  "dataset-error" od razu do tablicy errors
        } else if(field.type === "email") {
            isValid = isEmail(field, 2);    // zamiana poprzednich instrukcji
            //            if(field.value.indexOf("@") === -1) {   // sprawdzenie czy jest @
            //                errors.push(field.dataset.error);
            //            }
        } else if(field.type === "select-one") { // TAKI TYP MA ATRYBUT SELECT !
            isValid = isNotEmpty(field);    // zamiana poprzednich instrukcji
            //            if(field.value === "") {    // To samo co w przypadku tekstu
            //                errors.push(field.dataset.error);
            //            }
        } else if(field.type === "textarea") { // TAKI TYP MA ATRYBUT TEXTAREA !

            isValid = isAtLeast(field, 2);    // zamiana poprzednich instrukcji
            //            if(field.value.length < "3") {    // To samo co w przypadku tekstu
            //                errors.push(field.dataset.error);
            //            }
        }
    
        if(!isValid) {
            field.classList.add("error");       // dodanie klasy error
            errors.push(field.dataset.error);
        } else {
            field.classList.remove("error");    // usuniecie klasy error
        }
    
    }
    
    if(errors.length) {
        displayErrors(errors);
    } else {
        form.submit();  // DZIĘKI TEJ METODZIE mozemy wlasnorecznie wyslac formularz z poziomu kodu
    }
    
    console.log(errors);
    
}, false)
    
    
})();