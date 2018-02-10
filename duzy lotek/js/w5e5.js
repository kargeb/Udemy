console.log("prelołder 5");

const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
];


function


preloadImages(urls)
    .then(function(imgs) {
        console.log("Obrazy wczytane.");

        // tutaj utwórz dla każdego adresu URL
        // z przekazanej tablicy imgs element <img>
        // i wstaw je wszystkie do fragmentu dokumentu,
        // który na końcu zwrócisz, aby był dostępny
        // w kolejnym bloku .then
    })
    .then(function(docFragment) {
        // wstaw otrzymany fragment dokumentu na stronę,
        // aby wczytane obrazy się pokazały
    })
    .catch(function(err) {
        // na wypadek błędu, wyświetl komunikat w konsoli
        console.log(err.message);
    });