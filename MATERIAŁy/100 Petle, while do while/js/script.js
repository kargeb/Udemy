var kursyProgramowania  = [
"C++",
"Java",
"C#",
"Pascal"
];

var rezultat = document.getElementById("rezultat");
/*
var i = 0;

while(i < kursyProgramowania.length)
{
    rezultat.innerHTML += kursyProgramowania[i] + "<br>";
    
    i++;
}
*/

var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");

var i = 0;

while(i < kursyProgramowania.length)
{
    if (kursyProgramowania[i].innerHTML === "C++")
        kursyProgramowania[i].innerHTML += " HIT";
    else
        kursyProgramowania[i].innerHTML += " PROMOCJA";
    
    i++;
}

/*
do
{
    alert(i);
    i++;
}while(i < 5);
*/