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
 
            console.log($(inputs[0]).next());
            
            if($(inputs[0]).prev().text()== "--->") {
                inputs.prev().remove();
            } else {
                inputs.before('<span style="color:blue;">---></span>');
            }                        
            
//            $(inputs[0]).before('<span style="color:blue;">---></span>');
            
//            if($(inputs[0]).prev().text() == "--->") {
//                console.log("zgadza sie");
//            } else {
//                console.log("dupa");
//            }
//            
//            console.log($(inputs[0]).prev().text());
//            
//            setTimeout(function(){
//                $(inputs[0]).prev().remove();
//            }, 3000);
            
            
        });
        
        
    });
    
})(jQuery);
