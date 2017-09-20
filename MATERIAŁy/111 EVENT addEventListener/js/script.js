/*
    events - zdarzenia
    addEventListener
    removeEventListener

    attachEvent
    detachEvent
 */
function createEvent(obj, eventName, functionToInvoke)
{
    if (document.addEventListener)
        obj.addEventListener(eventName, functionToInvoke);
    else
        obj.attachEvent("on"+eventName, functionToInvoke);
}

function zmienKolor()
{
    this.className = "zmienKolor";    
}
function zmienKolor2()
{
    this.removeAttribute("class");
}
function powiekszCzcionke()
{
    var fontSize = parseInt(window.getComputedStyle(this).fontSize);
    this.style.fontSize = (++fontSize) + "px";
}

window.onload = function()
{
    var test = document.getElementById("test");
    var stop = document.getElementById("stop");
/*
    test.onmouseover = zmienKolor;
    test.onmouseout = zmienKolor2;*/
    createEvent(test, "mouseover", zmienKolor);
    createEvent(test, "mouseover", powiekszCzcionke);
    createEvent(test, "mouseout", zmienKolor2);
    
    stop.addEventListener("click", function()
    {
       test.removeEventListener("mouseover", powiekszCzcionke); 
    });
    /*
    test.addEventListener("mouseover", zmienKolor);
    test.addEventListener("mouseover", powiekszCzcionke);
    test.addEventListener("mouseout", zmienKolor2);
    
  ;*/
};



