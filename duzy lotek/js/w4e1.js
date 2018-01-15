(function($) {

    $(document).ready(function() {
        
        console.log("tydzien 4 nadupcanie")
    
        var buttons = $("button");
        
        console.log(buttons[2]);     
        console.log(buttons);

        
        $(buttons[0]).on("click", function(){
           
            var grids = $("div .grid.grid-12"); 
 
            if($(grids[0]).css("background-color") == "rgb(255, 255, 255)") {
                grids.css("background-color", "");
            } else {
                grids.css("background-color", "#fff");
            }
            
        });
        
        $(buttons[1]).on("click", function(){
           
            var linsk_http = $(".nav a[href^='http']");
            
            if($(linsk_http[0]).css("font-size") == "30px") {
                linsk_http.css("font-size", "");
            } else {
                linsk_http.css("font-size", "30px");
            }            
        });
        
        $(buttons[2]).on("click", function(){
           
            var inputs = $("input[type='radio']:not(:checked), input[type='checkbox']:not(:checked)"); 
 
            console.log(inputs);
            
           // var zmien = inputs[0].innerHTML();
            
            
            
            
//            inputs[0].nextSibling
            console.log(inputs[0].nextSibling.nextSibling);
//            
//            inputs[0].nextSibling.innerText = "dupa";
//            
//            console.log(inputs[0].nextSibling);
            
            
//            if($(grids[0]).css("background-color") == "rgb(255, 255, 255)") {
//                grids.css("background-color", "");
//            } else {
//                grids.css("background-color", "#fff");
//            }
            
        });
        
        
    });
    
})(jQuery);
