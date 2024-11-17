
class LinkedList {
    constructor(value) {
        let node = {
            node: value, 
            next: null
        }
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    }

    append(value) {
        const newNode = {
            node: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;  
        this.length++; 
    } 

    prepend(value) { 
        const newNode = { 
            node: value, 
            next: this.head 
        } 
        this.head = newNode; 
        this.length++; 
    } 

    findAtPosition(pos) {
        let count = 1; 
        let currentNode = this.head;
        while(count < pos) { 
            count++; 
            currentNode = currentNode.next;
        }
        return currentNode; 
    }

    insertAt(value, position) {
        if(position === 1) {
            this.prepend(value); 
            return; 
        } 
        else if(position >= this.length) {
            this.append(value); 
            return;
        } 


        const newNode = {
            node: value,
            next: null
        } 

        let node = this.findAtPosition(position-1); 

        newNode.next = node.next; 
        node.next = newNode; 
        this.length++; 
    } 


    updateAt(value, position) {
        const node = this.findAtPosition(position); 
        node.node = value;
    } 

    deleteAt(position) {
        if(position === 1) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        if(position === this.length) {
            this.tail = this.findAtPosition(position-1);
            this.tail.next = null;
            this.length--;
            return; 
        }

        let node = this.findAtPosition(position-1);
        node.next = node.next.next;
        this.length--;
    } 

    traverse() { 
        let string = ''; 
        let currentNode = this.head;
        while(currentNode) {
            string += currentNode.node + ' --> ';
            currentNode = currentNode.next; 
        }
        string += ' x';
        console.log(string); 
    } 
} 


const list = new LinkedList(10); 

list.append(45); 
list.append(20); 
list.append(30); 
list.prepend(5); 

list.insertAt(15, 3);
list.insertAt(1, 1);
list.insertAt(3, 100);

list.updateAt(25, 7);

console.log('Before...');
list.traverse(); 

list.deleteAt(8);

console.log('After...');
list.traverse(); 

// console.log(list);




