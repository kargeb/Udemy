/*
   setTimeout - która wykonuję operację po określonym czasie z ang. time out - koniec czasu 
   setInterval - która wykonuję operację co interwał (co określony przez nas czas w nieskończoność)

   clearTimeout - powstrzymuje operację, która ma zostać wykonana
   clearInterval - j.w tylko interwał
 */
var timeOutStoper;

function stopwatch(uchwytStopera, liczba)
{
    uchwytStopera.innerHTML = liczba--;
    
    if (liczba < 0)
        return;
    timeOutStoper = setTimeout(function()
    {
        stopwatch(uchwytStopera, liczba);
    }, 1000);
}
function stopwatchInterval(uchwytStopera, liczba)
{
    var timeIntervalRef = setInterval(function()
    {        
        if (--liczba < 0)        
        {
            clearInterval(timeIntervalRef);
            return;
        }
        
        uchwytStopera.innerHTML = liczba; //liczba = 0
    }, 1000);
    
    return timeIntervalRef;
}
window.onload = function()
{
    var przyciskOdpalStoper = document.getElementById("przyciskOdpalStoper");
    var przyciskZatrzymajStoper = document.getElementById("przyciskZatrzymajStoper");
    
    
    var uchwytStopera = document.getElementById("uchwytStopera");
    
    var timeIntervalRef;
    
    przyciskOdpalStoper.onclick = function()
    {
       var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;        
       uchwytStopera.innerHTML = poczatkowaWartosc; 
       timeIntervalRef = stopwatchInterval(uchwytStopera, poczatkowaWartosc);
    };
    przyciskZatrzymajStoper.onclick = function()
    {
        clearInterval(timeIntervalRef);
    };
    
    
    /*
    przyciskOdpalStoper.onclick = function()
    {
       var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;        
       uchwytStopera.innerHTML = poczatkowaWartosc;
       
       if (timeOutStoper)
           clearTimeout(timeOutStoper);
       
       stopwatch(uchwytStopera, poczatkowaWartosc);
 
       
    };
    przyciskZatrzymajStoper.onclick = function()
    {
        clearTimeout(timeOutStoper);
    };
    */
    
};






