/*
    var e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false;
 */

window.onload = function()
{
    var email = document.getElementById("email");
    var submitFormButton = document.querySelector("#newsletter input[type='submit']");
  
    submitFormButton.onclick = function(e)
    {
        
        var e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
        var tmp = document.getElementById("tmp");
        
        tmp.innerHTML = email.value;
        
        if (email.value === 'videokurspl@gmail.com')
            this.parentNode.submit();
    };
    
    submitFormButton.oncontextmenu = function(e)
    {
         var e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;       
    };
 
};




