(function($) {

    $(document).ready(function() {
    
        console.log("dupa 3");
        
        var btn_go = $("#btn_go");
        var ul = $("ul");
        var input = $("input");
        
        btn_go.on("click", function(){

            if(!input.val()) {
                input.attr("placeholder", "MUSISZ COS WPISAC !!!!!");
            } else {
                input.attr("placeholder", "Wpisz co ...");
                $("<li></li>", {
                "text": input.val(),
                "class": "list-group-item",
            }).appendTo(ul);
                        
            input.val("");
            }
        })
        
    });
    
})(jQuery);
