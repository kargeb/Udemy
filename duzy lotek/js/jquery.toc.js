(function($, window, document, undefined) {
   
    $.fn.toc = function() {
            
        var div = $("<div>"),
            head = $("<h2>Spis Treści</h2>"),
            ul = $("<ul></ul>"),
            id = 1,
            snip;
            
            div.addClass("toc");
            div.append(ul);    
            div.prepend(head);
            
            this.each(function(){

                 var that = $(this),
                     h2 = that.find("h2");

                  h2.attr("id", id);  

                   snip = $("<a></a>", {
                        text: id + ". " + h2.text(),
                        href: "#" + id++ 
                    }).appendTo(div);

                    snip.appendTo(ul);
                    snip.wrap("<li></li>");
            });
    
        this.parent().prepend(div);
        
        return this;

    };
        
})(jQuery, window, document);    
        