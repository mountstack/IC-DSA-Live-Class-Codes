

class HashTable { 
    constructor(size) { 
        this.size = size; 
        this.arr = new Array(size); 
    } 

    hash(num) { 
        num = num + '';

        let code = 0; 
        for(let i = 0; i < num.length; i++) {
            code += num.charCodeAt(i);
        }

        return code % this.size;
    } 

    get(num) { 
        const index = this.hash(num);

        const arr = this.arr[index]; 

        if(!arr) return num +' Not Found';

        for(let i = 0; i < arr.length; i++) { 
            if(arr[i] === num) { 
                return num + ' Found'; 
            }
        }

        return num +' Not Found';
    } 

    set(num) { 
        const index = this.hash(num); 

        if(!this.arr[index]) {
            this.arr[index] = [num];
        } 
        else { 
            this.arr[index].push(num);
        }
    } 
} 

const table = new HashTable(5); 

table.set("abcd");
table.set("xyz");
table.set("naim");
table.set("reza");
table.set("shad");


console.log(table.arr);


console.log(table.get("xyz-")); 