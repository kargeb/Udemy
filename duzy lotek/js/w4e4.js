(function($) {

    $(document).ready(function() {
    
        console.log("dupa 4");
        
        var btn_basic = $("#btn_basic"),
            btn_advanced = $("#btn_advanced"),
            output1 = $("#output1"),
            output2 = document.getElementById("output2"),
            source = document.getElementById("tpl").innerHTML,
            snip1, snip2;
        
        
        
        btn_basic.on("click", function(){
            
            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data){
                
                $(data).each(function(i, elem){

                    snip2 = "username: " + elem.username + "   |  email: " + elem.email + '   |  tel.: ' + elem.phone;    

                    snip1 = document.createElement("li");

                    snip1.innerHTML = "<b>" + elem.name + "</b><br>" + snip2;    

                    output1.append(snip1);  

                });        
           });
        });
        
        btn_advanced.on("click", function(){
            
            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data){
                
            var template = Handlebars.compile(source);
                
            var dane = {
                imie: data[1].name,
                nazwisko: data[1].username
            }    
            
            var html = template(dane);
                
            output2.innerHTML = html;    
                
            });    
                    
        });
        
        
        
        
        

    });
    
})(jQuery);
