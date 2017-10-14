var dupa = document.querySelector("div div");

console.log(typeof dupa);

dupa.textContent = "dupa dupa dupa";

var nowy = document.createElement("P");

nowy.textContent = "widac ?";

dupa.appendChild(nowy);



//dupa = document.textContent("dupa dupa dupa");