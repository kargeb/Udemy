// 22. Funkcje tagujące  TAG FUNCTION

// tyczy sie to bezposrednio Template Strings (czyli tego co w poprzedniej lekcji)
// UWAGA ! Pod pierwszym argumnetem mamy wszystkie zwykle stringi przekazane naszej funkcji:
// (3) ["Dodałeś do koszyka produkt: ", " w cenie ", ".", raw: Array(3)]
// Natepne argumenty to juz sa bezposrednio nasze zmienne ALE ZE NIGDY RACZEJ NIE WIADOMO ILE ICH ODKLADNIE BEDZIE no to korzystamy JUZ Z POZNANEGO WCZESNIEJ OPERATORA REST !
//(2) ["Płyta DVD", 1]
// No i jest taka zasada ze ta pierwsza tablica MA ZAWSZE o jeden element wiecej niz ta druga, nawet gdybysmy nie dali kropki na koncu to bylby w niej pusty string
function formatPrice(strings, ...values){
    
    console.log(strings);   // (3) ["Dodałeś do koszyka produkt: ", " w cenie ", ".", raw: Array(3)]
    console.log(values);    //(2) ["Płyta DVD", 1]
    
    let output = "";
    
    strings.forEach(function(string, index){
       
        let value = values[index];
        
        output += string;
        
        if(value!==undefined) { // no bo pierwsza tablica wieksza o 1
            
            if(typeof value === "number") {
                output += value.toFixed(2) + " PLN"  // toFixed dodaje miejsca dziesiętne 
            } else {
                output += value;               
            }
        }
    });
    
    return output;
}

let product = {
    name: "Płyta DVD",
    price: 1
};

let { name: pName, price: pPrice } = product;
// UWAGA WLASNIE TAK WYWOLUJE SIE TĄ FUNKCJE ! BEZ NAWIASÓW !!!!!
// Mozna dac przed nia spacje i nic sie nie stanie ale niby tak jest lepiej
let info = formatPrice`Dodałeś do koszyka produkt: ${pName} w cenie ${pPrice}.`;

console.log(info);

// JEST TO WLASNIE PRZYKLAD FUNKCJI TAGUJĄCEJ, czyli takiej ktróra WEJŚCIOWY string na podtawie jego zawartości PRZEKSZTAŁCA na inny wyjściowy !
// Oczywiście ta tagująca funkcja jest tylko przykładem wykorzystującym  tą konstrukcję. 
// Stosuje się to bardzo często w przypadku tłumaczenia stron na inne języki !

// CZYLI NAJWAZNIEJSZE TO TO ZE TA FUNKCJA JEST WSTAWIANA BEZ NAWIASÓW i przyjmuje W PIERWSZYM ARGUMNECIE WSZYSTKIE STRINGI a w następnych WSZYSTKIE ZNALEZIONE ZMIENNE w postaci ${} 