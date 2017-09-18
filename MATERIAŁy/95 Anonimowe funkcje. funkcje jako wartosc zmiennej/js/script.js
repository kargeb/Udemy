/*  
 *  Funkcja jako wartość zmiennej / anonimowe funkcje
 * 
 */
/*
var x = function()
{
    alert("xxxx");
};


x();
*/
/*
function test(f, y)
{
    f(y+10);
}

test(
  function(x){
   alert("cosik " + x);   
  },
  20
);
*/

var hi = function(type)
{
    if (type === "szef")
        return function(name){
          alert("Cześć szefie, " + name + "!");  
        };
    else
        return function(name){
          alert("Cześć " + name + "!");  
        };
};

var zwroconaFunkcja = hi("fasfasf");

zwroconaFunkcja("Arek");