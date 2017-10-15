console.log("bulin");

var dupa = "null";
var cos = "12";
var ktos = null;
var pies = "sra";

var zm = Boolean(dupa);
var zm2 = Boolean(cos);
var zm3 = Boolean(ktos);
var zm4 = Boolean(pies);

var bool = true;

console.log(typeof bool);

console.log(zm, zm2, zm3, zm4);

var _in = document.querySelector('input[name="in"]');
console.log(_in);
console.log(_in.value);

var myValue = _in.value;

console.log(myValue);

console.log(myValue == bool);

var isTrueSet = (Boolean(myValue) == true);

console.log(isTrueSet);

var napis = String(isTrueSet);

console.log(napis);