/*  
 * Arrays - z ang. TABLICE
 * 
 * TAB
 * ------------------------------------------------
 *   [0]  |  [1]  |  [2]  |  [3]  |  [4]  |  [5]  |
 * ------------------------------------------------
 *          
 */

var produkty = [
    "PHP",
    "Mysql",
    "Javascript"    
];

produkty[3] = "PDO";

//produkty.push("PDO");

//var produkty = new Array();

//alert(produkty);

//ASSOCIATIVE ARRAYS

var osoba = [];

osoba["imie"] = "Arek";
osoba["nazwisko"] = "Nazwisko";


//alert(osoba.imie);

var kursyProgramowania = document.getElementsByTagName("li");

alert(kursyProgramowania[6].innerHTML);
