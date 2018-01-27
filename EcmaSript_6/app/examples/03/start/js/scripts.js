// 3. Kiedy LET a kiedy CONST

(function() {

    console.log("333");
    
    // Wielu dev jest zdania ze nie powinno sie juz korzystac w ogole z VAR, i on tez sie z tym zgadza ! Chyba ze trzeba ci akurat jego zastosowania !
    
    // Jesli wartosc NA BANK sie nie bedzie zmieniac no to CONST
    // rob je na samej gorze projektu
    // np jakies adresy do ajaxa czy inne
    
    // 2 sytuacja to gdy chcemy wyrazenie funkcyjne utworzyc czyli gdy funkcje przypisujemy do zmiennej:
    
    const getname = function() {
        return "Kowalski";
    }
    // Wtedy mamy pewnosc ze nikt nam tego nie nadpisze 
    
    // kiedy LET ? W KAŻDEJ INNEJ SYTUACJI !!!!!!!!!
    // UWAGA ! A co z sytuacja gdy chcemy jakas zmienna z kodu zmienic w IFIE ? Wtedy DEKLARUJESZ JĄ WCZEŚNIEJ a nie w Ifie i masz do niej dostęp i w IFIE jak i w posotałym kodzie !
    
    let zmienna;
    
    if(true) {
        // DOKŁADNIE W TEN SPOSÓB !
        zmienna = "dupa " + getname(); 
    }
    console.log(zmienna);  // DOKŁADNIE W TEN SPOSÓB !

    // NO I KAPITALNY PRZYKŁAD ZASTOSOWANIA LET TO SĄ PĘTLE (FOR) !! Tam to już w ogole zapomnij o istnieniu VAR !!!
     for(let i=0; i<10; i++) {
         console.log("W PETLACH TYLKO LET !");
     }
    
})();