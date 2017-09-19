/*
    dodawanie i usuwanie elementów znajdujących się na stronie

    createElement("nazwa_tagu");

    appendChild

    removeChild

    tmp.parentNode.removeChild(tmp);
    
 */


var x = document.createElement("p");

x.style.color = "red";
x.className = "tesciur";
x.innerHTML = "<p id='testowy2'>nowy tekst<p> 4";

var body = document.querySelector("body");

var newChildNode = body.appendChild(x);

var testowy2 = document.getElementById("testowy2");

testowy2.style.color = "green";


var kursyProgramowania = document.getElementById("kursyProgramowania");

kursyProgramowania.parentNode.removeChild(kursyProgramowania);