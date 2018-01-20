(function($) {

    $(document).ready(function() {
    
        console.log("dupa 4");
        
        var btn = $(".btn"),
            output = $("#output"),
            names = "";
        
        
        
        btn.on("click", function(){
            
                $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data){

                $(data).each(function(i, elem){

                $("<li></li>", {
                    text: elem.name
                }).appendTo(output);    

                    
                    
            });
                
            //output.html(names);
                
            })
            
        })

    });
    
})(jQuery);
