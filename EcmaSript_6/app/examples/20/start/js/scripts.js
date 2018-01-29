// 23. Nowe metody dla String

// NOWE METODY DOTĘPNE BEZPOŚREDNIO DLA STRINGÓW

const URL = "https://mojastrona.pl";
const filePath = "/Users/janek/Desktop/app/index.html";

// Uwaga chcemy się dowiedzieć czy jakiś String ---ZACZYNA SIE-- od jakiegoś innego konkretnego Stringu (substringu)!
// STARY SPOSOB ES5 /////////
function isHTTPSOld(text) {
// PRZYPOMNIENIE idexOF dziala tak ze zwrata index pierwszego wystąpienia substringu 
// JAK NIE MA no to zwraca -1
    return text.indexOf("https://") === 0;
}

// NOWY SPOSOB ES6 !!!!!! ///////////////
function isHTTPS(text) {
// startsWith zwraca juz sama true albo falsa, a nie zadne indexy    
    return text.startsWith("https://") // moze byc w "" '' ``       // STARTSWIDTH
}

// funkcja ODWROTNA czyli SZUKANIE CZY DANY STRING ---KONCZY SIE--- na jakis inny

// Jako ES5 on podaje przyklad wyrazenia regularnego a ze gowno z tego wiem co nie przepisuje //
// NOWY SPOSÓB ES6
function hasExt(path, ext) {  // hasExt czyli has extension
 
    return path.endsWith(`${ext}`);                                 // ENDSWITH
}

// Szuaknie czy dany string --- ZAWIERA SIE --- w jakimś innym
// STARY sposób ES5 rowniez z indexOf
function includesOld(text, substr) {
    return text.indexOf(substr) !== -1;
}

// NOWY SPOSOB ES6 !!!! //////////
function includes(text, substr) {
    // zwraca true lub false a nie index
    return text.includes(substr);
}

// JESZCZE JEDNA CIEKAWA FUNKCJA REPEAT !
function powtorz(text, num) {
    
    return text.repeat(num);
}

console.log( isHTTPSOld(URL) ); // TRUE
console.log( isHTTPS(URL) ); // true

console.log( hasExt(filePath, "html") ); // true
console.log( hasExt(filePath, "exe") ); // false

console.log( includesOld("Ala ma kota", "ma") );    // true
console.log( includes("Kot ali sra", "sra") );  // true

console.log ( powtorz("pies", 10) ); // piespiespiespiespiespiespiespiespiespies DOSKONALE