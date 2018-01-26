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
    
})(jQuery, window, document);