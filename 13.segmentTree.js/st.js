
class SegmentTree {
    constructor(arr) {
        this.arr = arr; 
        this.treeArr = [];
        this.buildTree(1, 0, 6);

        console.log(this.treeArr);
    } 

    buildTree(node, a, b) { 
        if(a === b) { 
            this.treeArr[node] = this.arr[a]; 
            return; 
        } 
        

        let leftNode = node*2;
        let rightNode = node*2 + 1;
        let mid = Math.floor((a+b)/2);

        this.buildTree(leftNode, a, mid); 
        this.buildTree(rightNode, mid+1, b); 

        this.treeArr[node] = this.treeArr[leftNode] + this.treeArr[rightNode];
    } 


    queryTree(node, a, b, q1, q2) {
        if(b < q1 || a > q2) {
            return 0;
        }

        if(a >= q1 && b <= q2) {
            return this.treeArr[node];
        } 

        // Partially Lap 
        let leftNode = node*2;
        let rightNode = node*2 + 1;
        let mid = Math.floor((a+b)/2);

        return this.queryTree(leftNode, a, mid, q1, q2) + this.queryTree(rightNode, mid+1, b, q1, q2);
    }

    query(q1, q2) {
        return this.queryTree(1, 0, this.arr.length-1, q1, q2);
    } 

    update(node, a, b, index, value) {
        if(a === index && b === index) {
            this.treeArr[node] = value;
            return;
        } 

        if(b < index || a > index) {
            return;
        }

        // Partially Lap 
        let leftNode = node*2;
        let rightNode = node*2 + 1;
        let mid = Math.floor((a+b)/2);


        this.update(leftNode, a, mid, index, value);
        this.update(rightNode, mid+1, b, index, value);

        this.treeArr[node] = this.treeArr[leftNode] + this.treeArr[rightNode];
    }
} 


const arr = [10, 20, -5, 12, 87, 93, 6];

const segmentTree = new SegmentTree(arr); 



console.log(segmentTree.query(2, 5));
console.log(segmentTree.query(2, 6));
console.log(segmentTree.query(0, 2));
console.log(segmentTree.query(2, 4));

segmentTree.update(1, 0, 6, 2, 23); 

console.log(segmentTree.query(0, 6));
console.log(segmentTree.query(2, 6));
console.log(segmentTree.query(0, 2));
console.log(segmentTree.query(2, 4));


// Build Tree -> 0(N)
// Query Tree -> 0(log N)
// Update Tree -> 0(log N) 

