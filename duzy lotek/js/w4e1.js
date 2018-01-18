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
 
//            var popper = new Popper(inputs[1], onPopper, {
//            placement: 'right'
//});
            
            if($(inputs[0]).prev().text()== "--->") {
                inputs.removeAttr("disabled").prev().remove();
            } else {
                inputs.attr("disabled", true).before('<span style="color:blue;">---></span>');
            }                        
            
        });
        
        $(buttons[3]).on("click", function(){
            console.log("dupad upda"); 

            
            var paragrapf = $("#text p:not(:has(*))").first();
            
            
            if($(paragrapf).css("background-color") === "rgb(124, 252, 0)") {
                paragrapf.css("background-color", "");
                console.log("dtuta jest kolor juz")
            } else {
                paragrapf.css("background-color", "lawngreen");
                 console.log("dtuta nie ma koloru juz")
            }
            
         // $("p:pirst(p:not(p *))")
        //   $("#text p:not(:has(*))")
            
//            var popper = new Popper(paragrapf, bubble, {
//                placement: "top"
//            }); 
  
        }); 
    });
    
})(jQuery);
