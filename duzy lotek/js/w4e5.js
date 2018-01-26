(function($){
    
    $(document).ready(function(){
       
        console.log("duoasasdasd piessss");
        
        var headers = $(".section > h2"),
            id = 1,
            ul = $("<ul>"),
            header = $("<h2>Spis treści</h2>"), 
            inner = "",
            snip;
        
        
        console.log(id);
        console.log(ul);
        
        headers.each(function(){
           
            var that = $(this);
            
            console.dir(that);
            console.log(that.text());
            
            that.attr("id", id);
            
            inner = id + ". " + that.text();
            
            snip = $("<a></a>", {
                text: inner,
                href: "#" + id++,
            });
            
            snip.appendTo(ul);
            
            snip.wrap("<li></li>");
            
        });
        

        $(".container").prepend(ul);
        
        ul.wrap('<div class="toc"></div>').parent().prepend(header);
        
        console.log(ul);
//        headers.highlight();
        
    });
    
})(jQuery);

/*
(function($, window, document, undefined) {
   
    $.fn.highlight = function(userOptions) {
        
        var defaults = {
            shortColor: "red",
            longColor: "green" 
        };
        
        var options = $.extend({}, defaults, userOptions);
        
        console.log(options);
        
        return this.each(function(){
           
            var that = $(this),
                text = that.text();
            
            if(text.length > 100) {
                that.css("color", options.longColor);
            } else {
                that.css("color", options.shortColor);
            }
        });
    };
    
    $(document).ready(function(){
        
        $("p").highlight({
           shortColor: "blue" 
        });
        
    })
    
})(jQuery, window, document);
*/
