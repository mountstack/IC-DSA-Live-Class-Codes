

class Heap { 
    constructor(value) {
        this.arr = [null, value];
    } 

    insert(value) { 
        this.arr.push(value); 
        this.upHeap(this.arr.length-1);
    } 

    upHeap(index) {
        if(!index) {
            return; 
        }
        const parentIndex = Math.floor(index / 2);
        if(this.arr[index] < this.arr[parentIndex]) {
            // swap 
            const temp = this.arr[parentIndex]; 
            this.arr[parentIndex] = this.arr[index];
            this.arr[index] = temp;

            this.upHeap(parentIndex);
        }
    } 

    deleteRoot(index = 1) {
        this.arr[1] = this.arr[this.arr.length - 1]; 
        this.arr.pop(); 

        this.lowHeap(index)
    }

    lowHeap(index) {
        const leftChildIndex = 2 * index;
        const rightChildIndex = 2 * index + 1;
        
        let isLeftSmall = this.arr[leftChildIndex] < this.arr[rightChildIndex];

        if(isLeftSmall) {
            if(this.arr[index] > this.arr[leftChildIndex]) {
                const temp = this.arr[index];
                this.arr[index] = this.arr[leftChildIndex];
                this.arr[leftChildIndex] = temp;
                this.lowHeap(leftChildIndex); 
            } 
        }
        else {
            if(this.arr[index] > this.arr[rightChildIndex]) {
                const temp = this.arr[index];
                this.arr[index] = this.arr[rightChildIndex];
                this.arr[rightChildIndex] = temp;
                this.lowHeap(rightChildIndex);
            }
        }
    }
} 


const heap = new Heap(10);
heap.insert(20)
heap.insert(30)
heap.insert(6)
heap.insert(3)

console.log(heap.arr);

heap.deleteRoot(); 

console.log(heap.arr);

heap.deleteRoot(); 

console.log(heap.arr);
