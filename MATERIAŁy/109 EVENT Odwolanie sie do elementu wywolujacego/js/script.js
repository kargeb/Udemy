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

var test = document.getElementById("test");
var button_plus = document.querySelector("#plus");
var button_minus = document.querySelector("#minus");

test.onmouseover = zmienKolor;
test.onmouseout = zmienKolor2;

button_plus.onclick = powieksz;
button_minus.onclick = pomniejsz;

function powieksz()
{
	//var r = test.style.fontSize;
//	= (parseInt(test.style.fontSize) * 2).toString + "px";
//	console.log(r);
//window.getComputedStyle(document.body).getPropertyValue('font-size');
	var r = parseInt(window.getComputedStyle(test, null).getPropertyValue('font-size'))*2;
	console.log(r);
	r += "px";
	console.log(r);
	test.style.fontSize = r;
}

function pomniejsz()
{
	var r = parseInt(window.getComputedStyle(test, null).getPropertyValue('font-size'))/2;
	console.log(r);
	r += "px";
	console.log(r);
	test.style.fontSize = r;
}






