

class HashMap { 
    constructor() {
        this.map = {
            '0': 'Zero', 
            '1': 'One',
            '2': 'Two',
            '3': 'Three',
            '4': 'Four',
            '5': 'Five',
            '6': 'Six',
            '7': 'Seven',
            '8': 'Eight',
            '9': 'Nine', 
        }; 
    }

    set(key, value) { 
        this.map[key] = value; 
    } 

    get(key) { 
        return this.map[key]; 
    } 

    input(num) {
        let key; 
        for(let i = 0; i < num.length; i++) { 
            key = num[i]; 
            console.log(this.map[key]);
            
        }
    }
} 


let map = new HashMap();
map.input('185306783')



