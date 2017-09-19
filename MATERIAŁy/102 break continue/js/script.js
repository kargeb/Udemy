/*
 * break i continue
 * 
 */

var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");

for (var i = 0; i < kursyProgramowania.length; i++)
{    
    
    if (i % 2 !== 0)
        kursyProgramowania[i].innerHTML = "parzysty: " + kursyProgramowania[i].innerHTML;
    else
        continue; //przerwij wykonywanie danej iteracji i kontynuuj, następne instrukcje po continue nie zostaną wywołane
    
    
}

for (var i = 0; i < 6; i++)
{
    if (i === 4)
        break;
    
    alert(i);
}