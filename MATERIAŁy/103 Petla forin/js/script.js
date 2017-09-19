/*
 * pętla for / in
 * 
 */

person = {
   imie: "Arek",
   nazwisko: "Włodarczyk",
   wiek: "26"
};

var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");

kursy = [
    "Java",
    "C++",
    "PHP"
];


for (var property in kursyProgramowania)
{
   if (typeof(kursyProgramowania[property]) !== "object")
        break;
    
   alert(kursyProgramowania[property].innerHTML);
}

