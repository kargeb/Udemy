console.log("jquery dupa");

console.log($);

(function($){

    $(document).ready(function(){
        
        var button_search_p = $("[name='search_p']"),
            button_search_ul = $("[name*='ul']"),
            button_search_p_link = $("[name^='wit']"),
            button_show = $("[name$='ow']");

        console.log(button_search_p);
        console.log(button_search_ul);
        console.log(button_search_p_link);
        console.log(button_show);
        
        button_search_p.click(function(){
            $(this).toggleClass("hl_button");
            $("p").toggleClass("hl");
        });
        
        button_search_ul.on("click", function(){
            $(this).toggleClass("hl_button");
            $("li").toggleClass("hl");
        });
        
        button_search_p_link.on("click", function(){
            $(this).toggleClass("hl_button");
            $("p:has('[href]')").toggleClass("hl");
        });
       
        button_show.on("click", function(){
            $(this).toggleClass("hl_button");
            if(button_search_p.is(':disabled')) {
                button_search_p.removeAttr("disabled");
            } else {
                button_search_p.attr("disabled", true); 
            }
            
        });
        
    });
    
})(jQuery);
/*
var p = $("P"),
    klasa = $(".line"),
    button = $("button"),
    pierw = $(".pierw");
    

console.log(p);
console.log(klasa);
console.log(button);
console.log(pierw);
console.log($(pierw));

var pierszy = $(".pierw p + p");

console.log(pierszy);
*/
