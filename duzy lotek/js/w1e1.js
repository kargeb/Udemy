console.log("dupa dupa");

var price = document.querySelector('input[name="price"]'),
    amount = document.querySelector('input[name="amount"]'),
    poka = document.querySelector("#poka"),
    buttton = document.querySelector("button");

var discount= null,
    sum = null,
    price_value = null,
    amount_value = null;


buttton.onclick = function(){
    
    price_value = price.value;
    amount_value = amount.value;
    
      console.log(price_value);
    console.log(amount_value);
    
    if(amount_value < 0)
        poka.textContent = "zła wartość";
    else if (amount_value > 0 && amount_value < 5)
    //    poka.textContent = "bez rabatu";
        discount = 0;
    else if (amount_value >= 5 && amount_value < 21)
    //    poka.textContent = "rabat 5%";
        discount = 5;
    else if (amount_value >= 21 && amount_value < 51)
    //    poka.textContent = "rabat 10%";
        discount = 10;
    else if (amount_value >= 51 && amount_value < 101)
    //    poka.textContent = "rabat 15%";
        discount = 15;
    else
    //    poka.textContent = "rabat 20%";
        discount = 20;
    
    sum = amount_value*price_value - amount_value*price_value*discount/100;

    poka.textContent = sum;
}

