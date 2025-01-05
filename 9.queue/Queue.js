

class Queue {
    constructor() {
        this.queue = [];
    } 

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (this.queue.length === 0) {
            return null;
        }
        return this.queue.shift();
    } 
}

const queue = new Queue();

queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue 


