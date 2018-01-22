(function($) {

    $(document).ready(function() {
    
        console.log("dupa 4");
        
        var btn = $(".btn"),
            output = $("#output"),
            snip1, snip2;
        
        
        
        btn.on("click", function(){
            
            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data){
                
            $(data).each(function(i, elem){

                snip2 = "username: " + elem.username + "   |  email: " + elem.email + '   |  tel.: ' + elem.phone;    

                snip1 = document.createElement("li");

                snip1.innerHTML = "<b>" + elem.name + "</b><br>" + snip2;    

                output.append(snip1);  
         
            });
                
           })
            
        })

    });
    
})(jQuery);
