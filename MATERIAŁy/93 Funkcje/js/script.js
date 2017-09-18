/*  
 *  Functions - funkcje - kawałek napisanego kodu, który może być ponownie wykorzystane w wielu miejscach 
 *                        w kodzie bez potrzeby ponownego pisania treści.
 *  
 *  
 */

function dodaj(x, y)
{    
  return parseInt(x + y);
}

function dzielenie(x, y)
{
   if(y === 0)
   {
       //alert("Cholero nie dziel przez zero!");
       return;
   }
//   else 
   return x / y;
}
/*
var sumaZmiennych = dodaj(2, 7);

alert(sumaZmiennych);
*/
var wynikDzielenia = dzielenie(10, 0);

alert(wynikDzielenia);