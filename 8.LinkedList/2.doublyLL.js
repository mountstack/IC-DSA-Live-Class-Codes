
class LinkedList {
    constructor(value) {
        let node = {
            node: value, 
            prev: null, 
            next: null 
        } 
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    }

    append(value) {
        const newNode = { 
            node: value, 
            prev: this.tail, 
            next: null 
        } 

        this.tail.next = newNode;
        this.tail = newNode;  
        this.length++; 
    } 

    prepend(value) { 
        const newNode = { 
            node: value, 
            prev: null, 
            next: this.head 
        } 
        this.head.prev = newNode;
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

        let node = this.findAtPosition(position-1); // 10
        let prevNextNode = node.next; // 25

        const newNode = {
            node: value,
            prev: node, 
            next: prevNextNode
        } 

        

        // newNode.next = node.next; 
        node.next = newNode; 
        prevNextNode.prev = newNode; 
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
