/*
var dupa = document.querySelector("div div");
console.log(typeof dupa);
dupa.textContent = "dupa dupa dupa";
var nowy = document.createElement("P");
nowy.textContent = "widac ?";
dupa.appendChild(nowy);
*/

console.log("CALL $ APPLY & BIND");

function sayHello(text) {
    console.log(text + " " + this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Jan",
    lastName: "Kozioł",
   //say: sayHello
};

sayHello.call(person, "duipa");

var elems = document.querySelectorAll("li");

console.log(elems);

///////// CALL ///////////////////////

elems.forEach(function(el){     // FOREACH juz jest dostepne
    el.style.color = "red";     // wczsie kursu nie bylo
});

Array.prototype.forEach.call(elems, function(elem){ // FOREACH porzyczone
    elem.style.color = "blue";                      // dogrzebalismy sie do funkcji ktora jest w protorypie
});


[].forEach.call(elems, function(elem){ // Tutaj js musial sprawdzic czy ta funkcja
    elem.style.fontSize = "20px";       // jest w obiekcie [] a pozniej na zasadzie dziediczenia
});                                     // pojechala do prototypu Array czyli to co u góry

//////////////// APPLY /////////////////////

function sum(first, second, third) {
    console.log(first + second + third);
}

sum.apply(this, [1, 2, 3]);

//sum.call(this, 1,2,3);
// CALL musialobybyć sum.call(this, 2, 3, 4);

/////////////////////////// BIND ///////////////////////



var hello = sayHello.call(person, "krowa");

hello();