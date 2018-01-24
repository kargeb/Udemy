(function($) {

    $(document).ready(function() {
    
        console.log("dupa 4");
        
        var btn_basic = $("#btn_basic"),
            btn_advanced = $("#btn_advanced"),
            btn_list = $("#btn_list"),
       //     output1 = $("#output1"),
            output = document.getElementById("output"),
            sourceList = document.getElementById("tpl").innerHTML,
            sourceTable = document.getElementById("tpl2").innerHTML,
            snip1, snip2;
        
        
        
        btn_basic.on("click", function(){
            
            $(output).empty();
            
            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data){
                
                
                $(data).each(function(i, elem){

                    snip2 = "username: " + elem.username + "   |  email: " + elem.email + '   |  tel.: ' + elem.phone;    

                    snip1 = document.createElement("li");
                    snip1.innerHTML = "<b>" + elem.name + "</b><br>" + snip2;    

                    output.append(snip1);  
                });        
           });
        });
        
        btn_advanced.on("click", function(){
            
            $(output).empty();
            
            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data){
                
                var template = Handlebars.compile(sourceList);

                var dane  = {
                    pracownicy: data
                }  

                var html = template(dane);

                output.innerHTML = html;    
                
            });           
        });
        
        btn_list.on("click", function(){
           
            $(output).empty();
            
            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data){
                
                var template = Handlebars.compile(sourceTable);

                var dane  = {
                    pracownicy: data
                }  

                var html = template(dane);

                output.innerHTML = html;    
                
            });                
        });
        
    });
    
})(jQuery);
