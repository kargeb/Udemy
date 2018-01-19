(function($) {

    $(document).ready(function() {
        
        console.log("tydzien 4 nadupcanie")
    
        var buttons = $("button");

        $(buttons[0]).on("click", function(){
           
            var grids = $("div .grid.grid-12"); 
            
            console.log(this);
            
            if($(grids[0]).css("background-color") == "rgb(255, 255, 255)") {
                grids.css("background-color", "");
                $(this).css("background-color", "");
            } else {
                grids.css("background-color", "#fff");
                $(this).css("background-color", "Silver");
            }
            
        });
        
        $(buttons[1]).on("click", function(){
           
            var linsk_http = $(".nav a[href^='http']");
            
            if($(linsk_http[0]).css("font-size") == "30px") {
                linsk_http.css("font-size", "");
                $(this).css("background-color", "");
            } else {
                linsk_http.css("font-size", "30px");
                $(this).css("background-color", "Silver");
            }            
        });
        
        $(buttons[2]).on("click", function(){
           
            var inputs = $("input[type='radio']:not(:checked), input[type='checkbox']:not(:checked)"); 
            
            if($(inputs[0]).prev().text()== "--->") {
                inputs.removeAttr("disabled").prev().remove();
                $(this).css("background-color", "");                
            } else {
                inputs.attr("disabled", true).before('<span style="color:blue;">---></span>');
                $(this).css("background-color", "Silver");
            }                        
            
        });
        
        $(buttons[3]).on("click", function(){

            var paragrapf = $("#text p:not(:has(*))").first();
            
            if($(paragrapf).css("background-color") === "rgb(124, 252, 0)") {
                paragrapf.css("background-color", "");
                $(this).css("background-color", "");
            } else {
                paragrapf.css("background-color", "lawngreen");
                $(this).css("background-color", "Silver");
            }
            
        });
        
        $(buttons[4]).on("click", function(){
            
            var pg_item = $(".pagination-item:not(span)");
            
             if($(pg_item).css("background-color") === "rgb(0, 0, 255)") {
                pg_item.css("background-color", "");
                $(this).css("background-color", "");
            } else {
                pg_item.css("background-color", "blue");
                $(this).css("background-color", "Silver");
            }           
            
            
        });
    });
    
})(jQuery);
