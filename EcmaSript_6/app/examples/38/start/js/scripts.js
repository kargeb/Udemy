// 41. Delegowanie generatora

function *gen() {
    
    yield 1;
 //   yield [2 ,3 ,4];    // (3) [2, 3, 4] nic szczegolnego, dostajemy po prostu tablice
// TO JEST DELEGOWANIE ! Jesli wsadzimy w yielda COKOWLIEK CO MA ITERATOR ! czy string czy tabile czy jakis nasz wlasny obiekt I DAMY PRZED NIM GWIAZDKĘ to wlasnie koljene iteracje TEGO OBIEKTU bedą wykonywane W KOLEJNYCH YIELDACH ! I właśnie to jest delegowanie generatorów    
    yield *[2, 3, 4];
    yield 5;
    
}

for(let value of gen()){
    
    console.log(value);
}

// JEST TO KLASA Z POPRZEDNICH LEKCJI

 class Model {

     constructor(data = {}) {
         this.data = data;
     }

     get(prop) {
         return this.data[prop];
     }

     set(prop, value) {
         this.data[prop] = value;
     }

 }

 class Collection {

     constructor(models) {

         this.models = [];

         if( Collection.hasIterator(models) ) {
             this.populate(models);
         }

     }

     populate(models) {

         for(let model of models) {
             this.models.push( new Model(model) );
         }

     }

//     [Symbol.iterator]() {
//         var models = this.models,
//             index = 0;
//
//         return {
//             next: function() {
//                 return {
//                     done: (index === models.length) ? true : false,
//                     value: models[index++]
//                 };
//             }
//         };
//     }
     // ZASTĘPUJEMY TEN GÓRNY NOWYM
//             *[Symbol.iterator](){                  // TO JEST DOKLADNIE TO SAMO CO U GÓRY ! :)
//                 for(let model of this.models) {
//                     yield model;
//                 }
//             }
     
**************************************************************************************************************           
///////////////////////////////////////////////////////////////////////////////////////////////////////// 
//---------------------------- PODSUMOWANIE WSZYSTKICH LEKCJI O GENERETORACH ! ---------------------------     
     // TERAZ JUZ TEN CO MA BYC DOCELOWO:
         *[Symbol.iterator](){                  // TO JEST DOKLADNIE TO SAMO CO U GÓRY ! :)
             yield *this.models;    // I TO JEST TEZ DOKLADNIE TO SAMO CO U GÓRY (I TO CO NA POCZĄTKU TEGO SKRYPTU)
         } 
     
//  I WŁAŚNIE TA CZĘŚĆ KODU SPRAWIA ZE MOZESZ W SWOICH WLASNCYH KLASACH KORZYSTAC PÓŹNIEJ Z FOR IN CZY ... !!!!!!!!!!     
//---------------------------- PODSUMOWANIE WSZYSTKICH LEKCJI O GENERETORACH ! ---------------------------        
//////////////////////////////////////////////////////////////////////////////////////////////////////////   
***************************************************************************************************************
     
     static hasIterator(obj) {
         return obj && typeof obj[Symbol.iterator] === "function";
     }

 }

 const USERS = window.USERS;

 let users = new Collection(USERS);

 [...users]
     .filter(user => user.get("email").endsWith(".biz"))
     .forEach(user => user.set("email", user.get("email").replace(".biz", ".org")));

 for(let user of users) {
     console.log(user.get("email"));
 }