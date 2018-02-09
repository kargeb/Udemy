console.log("lotek na klacjh");

class Lotek {
    
    constructor() {
        this.numbers = new Array(6);
        this.losuj();
    }
    
    *[Symbol.iterator]() {
        for(let num of this.numbers) {
            yield num;
        }
    }
    
    losuj() {     

        let x = null;
        
        for(let i = 0; i < this.numbers.length; i++) {
            
            x = this.rand();
            if( (this.numbers).includes( x ) ) {
                i--;
            } else {
                this.numbers[i] = x;
            }   
        }
    }
    
    checkNumbers(...num) {
        
        let obj = {
            arr: []
        }
        
        for(let i = 0; i < num.length; i++){
            
            if( (this.numbers).includes(num[i]) ){
                obj.arr.push(num[i]);
            }
        }
        
        return obj;
    }
    
    rand() {
        return Math.floor(Math.random()*49) + 1; 
    }
    
}

let dupa = new Lotek();

console.log( dupa.numbers );


