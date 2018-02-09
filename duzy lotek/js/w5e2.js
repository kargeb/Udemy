console.log("ES6 - Funkcja tagująca");

// Zakładamy, że taki obiekt byłby dodany
// gdzieś w kodzie HTML w tagu <script>
// przez system CMS generujący widok strony
window.currencies = {
    "USD": 3.8078,
    "EUR": 4.1794,
    "GBP": 4.9456
};

let transform = function(n){

    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
} 

function formatPrice(currency) {
    

    let countryPrice,
        sum;
      
    let format = function(strings, ...values){

        countryPrice = transform( values[1] / currencies[currency] );
        sum = transform( values[2] / currencies[currency] );
        
        let output = strings[0] + values[0] + 
                     strings[1] + countryPrice + " " + 
                     currency + strings[2] + sum +
                     " " + currency + strings[3];
        
        return output;          
    } 
    
    return format;
}

let product = {
    name: "Pendrive 16GB",
    price: 23,
    quantity: 4
};


let { name: pName, price: pPrice, quantity: pQuantity } = product;
 

let info = formatPrice("GBP")`Kupiłeś produkt '${pName}' w cenie ${pPrice} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;

console.log(info);
// Kupiłeś produkt 'Pendrive 16GB' w cenie 4.65 GBP za sztukę. Łączna wartość zamówienia to 18.60 GBP.

let p = document.querySelector("p");

p.textContent = info;