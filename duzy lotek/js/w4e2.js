(function($) {

    $(document).ready(function() {
        
        console.log("dupa");
    
        var bar = $(".fa-bars");
        var menu = $(".menu_animated");
        
        $(bar).on("click", function(){
           
            console.log("cos cosa cos");
            
           // $(menu).toggleClass("menu_animated_hidden");
            
            menu.slideToggle();
            
        });
        
    });
    
})(jQuery);
