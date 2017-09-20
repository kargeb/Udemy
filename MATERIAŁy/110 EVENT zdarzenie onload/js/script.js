/*
    events - zdarzenia

 */

function zmienKolor()
{
    this.className = "zmienKolor";
}
function zmienKolor2()
{
    this.removeAttribute("class");
}

window.onload = function()
{
    var test = document.getElementById("test");

    test.onmouseover = zmienKolor;
    test.onmouseout = zmienKolor2;
};



