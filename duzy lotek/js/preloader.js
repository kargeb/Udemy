(function($) {

    function preload(urls) {
        
        var dfd = $.Deferred(),
            length = urls.length,
            counter = 0;
        
        $.each(urls, function(i, url) {
               
            var img = $("<img>");
        
            img.on("load", function() { // wykona sie jak obrazek bedzie zaladowany
                
                counter++;
                
                dfd.notify(url, counter, length);   // DO PASKA POSTĘPU
                
                if(counter === length) {                
                    dfd.resolve(urls);
                }
            });
        
            img.on("error", function(){
                
//                dfd.reject();
                length--;
                
                dfd.notify(null, counter, length);            
                
                if(counter === length) {                
                    dfd.resolve(urls);
                }                
                

                
            });
            
            img.attr("src", url);   // Tylko pobralismy obrazek, nie wstawilismy go nigdzie jescze
        })
    
        return dfd;
        
    }
    
    $(document).ready(function() {
    
        console.log("preloader");
        
        function appendImage(url) {
            
            var img = $("<img>", {
                src: url,
                css: {
                    width: "25%",
                    float: "left",
                    opacity: 0
                    }                
            });
            
            $(".rte").append(img);
            img.animate({
                opacity: 1
            },500);
            
        }
        
        var imgs = [
            "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-5.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-6.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-7.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-8.jpg"
        ];
        
/// STara funckja przez ktora widac wczytywanie obrazkow na strone        
//        $.each(imgs, function(i, url){
//               appendImage(url);
//            });
    
        preload(imgs).then(
            function(imgs) {
   
            },
            function(){
                
            },
            function(url, counter, length){
                
                if(url){
                    appendImage(url);
                }
                
                var progress = $("#progress");
                
                progress.stop().animate({
                   width: (counter/length*100) + "%" 
                }, 300);
            }
        );
        
        
    });
    
})(jQuery);
