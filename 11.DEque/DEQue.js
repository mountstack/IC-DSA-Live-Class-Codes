

class DEQue {
    constructor() {
        this.items = [];
    }

    addFront(value) {
        this.items.unshift(value);
    } 

    addRare(value) {
        this.items.push(value);
    }

    deleteFront() {
        return this.items.shift();
    }

    deleteRear() {
        return this.items.pop();
    }
}

const deque = new DEQue(); 
