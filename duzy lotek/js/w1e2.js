var movies = {
    "Dla dzieci": [
        "Kubuś Puchatek i Przyjaciele",
        "Zwariowane Melodie",
        "Piotruś Pan"
    ],
    "Dla młodzieży": [
        "Szkoła uczuć",
        "Podróż za jeden uśmiech",
        "Szatan z 7-ej klasy"
    ],
    "Dla dorosłych": [
        "Gwiezdne Wojny",
        "Szklana Pułapka",
        "Titanic"
    ]
};

var p = document.querySelector("p");
var poka = "";

for(var key in movies) {
    poka += key + ": \n";
    
    for(var i=0; i<movies[key].length; i++) {
        poka += movies[key][i] + "\n"
    }
    poka += "=================\n";
}

console.log(poka);

p.innerHTML = poka;