/*
        PROPAGACJA (rozmnażanie się) - bąbelkowanie
        var e =  e || window.event;
        if (e.stopPropagation)
            e.stopPropagation(); 
        else
            e.cancelBubble = true; 

 */
function wykonaj(event, eventObj)
{
    var e =  event || window.event;
    var srcElement = e.target || e.srcElement;
    
    var tmp = document.getElementById("tmp");
    
    tmp.innerHTML = "źródło eventu: " + srcElement.tagName + "<br>event przypisany do tagu: "+ eventObj.tagName;
  
    
}

window.onload = function()
{
    var test = document.getElementById("test");
    var pogrubiony = document.getElementById("pogrubiony");
    var przycisk = document.getElementById("przycisk");
    
    test.onclick = function(event)
    {    
        alert("test");
        wykonaj(event, this);
    };
    pogrubiony.onclick = function(event)
    {    
        alert("pogrubiony");
    };
    przycisk.onclick = function(event)
    {    
        var e =  event || window.event;
        if (e.stopPropagation)
            e.stopPropagation(); 
        else
            e.cancelBubble = true;  
        
        alert("przycisk");
        event.stopPropagation();
    };    

};




