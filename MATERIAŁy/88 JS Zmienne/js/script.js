/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var a = 5, 
    b = 7, 
    c = 3;
var nazwaZmiennej = 5; //DEKLARACJA ZMIENNEJ

var VAT_POLSKI = 23;
var obliczonyVat = (1 + VAT_POLSKI * 1/100);
var cenaNettoJava = 39;
var cenaNettoAjax = 34;

var cenaBruttoJava = cenaNettoJava * obliczonyVat;
var cenaBruttoAjax = cenaNettoAjax * obliczonyVat;

var imie = "Arkadiusz";
var nazwisko = "Włodarczyk";

alert(imie + " " + nazwisko);

/*
 * typy zmiennych:
 * 1) liczby - number
 * 2) ciąg znaków - string
 * 3) wartość logiczne - true/false
 * 4) tablice, obiekty - o tym później
 * 5) null - pustka
 * 6) undefined - niezdefiniowana
 */

/*
 * NIE WOLNO:
 * 1) zaczynać od liczby nazwy zmiennej
 * 2) nie wolno stosować zarezerwowanych słów (keywords)
 * 3) tworzyc spacji
 * 
 * WIELKOŚĆ LITER W JAVASCRIPT MA ZNACZENIE!!!
 */

