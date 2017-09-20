/*
    altKey, ctrlKey, shiftKey - czy podczas wywołania eventu były wciśnięte klawisze alt, ctrl, shift?
    button - które przyciski myszy zostały kliknięte (nie działa w każdym evencie)
    clientX, clientY - w którym miejscu jest mycha względem 0,0
    keyCode - zwraca w postaci liczby jaki klawisz został wciśnięty, String.fromCharCode(e.keyCode) zwróci jaka to wartość
    target.tagName - nazwa tagu elementu który wywołał zdarzenie wspierane w każdej przeglądarce prócz IE 6-8 
                     użyj srcElement dla IE na starcie można napisać: var srcElement = e.target ? e.target : e.srcElement;

 */
function wykonaj(event, str)
{
    var e =  event || window.event;
    var srcElement = e.target || e.srcElement;
    
    var tmp = document.getElementById("tmp");
    
    tmp.innerHTML = e.clientX + " " + srcElement.tagName;
    
    var tooltip = document.getElementById("tooltip");
    
    tooltip.style.display = "block";
    
    tooltip.style.left = e.clientX + 10 + "px";
    tooltip.style.top = e.clientY + 10 + "px";
    
}

window.onload = function()
{
    var test = document.getElementById("test");
    
    test.onmousemove = function(event)
    {
        
        wykonaj(event, this.tagName);
    };
   
};




