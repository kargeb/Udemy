(function($) {

    $(document).ready(function() {
    
        var hamburger_left = $("#ham_left"),
            hamburger_middle = $("#ham_middle"),
            hamburger_right = $("#ham_right"),
            menu_middle = $("#middle_menu"),
            menu_left =$("#left_menu"),
            menu_right = $("#right_menu");
        
        $(menu_left).addClass("menu_animated_hidden");
        $(menu_middle).addClass("menu_animated_hidden");
        $(menu_right).addClass("menu_animated_hidden");
        
        
        $(hamburger_left).on("click", function(){
            menu_left.fadeToggle();
        });
        
        $(hamburger_middle).on("click", function(){
            menu_middle.slideToggle();
        });        
        
        $(hamburger_right).on("click", function(){
            menu_right.animate({
                "witdh": "100%",
                "width": "toggle",
                "height": "100%",
                "height": "toggle"  
            },200);
        });
        
    });
    
})(jQuery);
