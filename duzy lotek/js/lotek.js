    window.onload = function() {

        var button = document.querySelector("button"),  // przycisk
            wynik = document.querySelector("#wynik");   // pole z wynikiem

        var wynik_losowania = null;

        button.onclick = function() {
            
            wynik_losowania = draw();   // przypisanie wyniku FUNKCJI LOSUJACEJ
            wynik_losowania.sort(function(a, b) {   // SORTOWANIE
                return a-b;
            })

            wynik_losowania = wynik_losowania.join(" | ");  // Rozdzielenie wyników znakiem "|"

            wynik.textContent = wynik_losowania;
        };       

        function draw() {       // FUNCKJA LOSUJĄCA, zwracająca tablicę z 6 liczbami 

            var arr = [],
                num = null;

            for(var i = 0; i<=6; i++) {

                num = rand();
                if(arr.indexOf(num) !== -1){        // Jeśli już taja liczba znajduje sie w tabeli to licznik--
                    i--;
                    console.log("mamy juz " + num);
                } else {
               arr[i] = num;                        // dopisanie liczby do tablicy
                }                         
            }
            return arr;
        }

        function rand() {
            return Math.floor(Math.random()*49) + 1;    // funkcja losujaca miedzy 1 a 49
        }
    };