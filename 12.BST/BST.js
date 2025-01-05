
class BST {
    constructor(value) {
        this.root = {
            value: value, 
            left: null,
            right: null
        }
    } 

    insert(value) {
        const newNode = {
            value: value, 
            left: null,
            right: null
        }

        let currentNode = this.root; 

        while(currentNode) { 
            if(currentNode.value <= value) { 
                if(!currentNode.right) {
                    currentNode.right = newNode; 
                    break;
                }
                currentNode = currentNode.right; 
            } 
            else { 
                if(!currentNode.left) {
                    currentNode.left = newNode; 
                    break;
                }
                currentNode = currentNode.left;
            }
        }
    }

    searching(target) {
        let currentNode = this.root; 
        while(currentNode) {
            if(currentNode.value === target) {
                return `${target} Found!`;
            }
            else if(currentNode.value < target) {
                currentNode = currentNode.right; 
            }
            else {
                currentNode = currentNode.left;
            }
        }

        return `${target} Not Found!`;
    } 

    bfs() { 
        let queue = [this.root];

        while(queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode.value);

            if(currentNode.left) {
                queue.push(currentNode.left);
            }

            if(currentNode.right) {
                queue.push(currentNode.right);
            } 
        } 
    } 

    DFS_preOrderTraversing(parentNode) { 
        // Parent 
        console.log(parentNode.value);
        
        // Left 
        if(parentNode.left) {
            this.DFS_preOrderTraversing(parentNode.left);
        }

        // Right 
        if(parentNode.right) { 
            this.DFS_preOrderTraversing(parentNode.right);
        } 
    } 


    DFS_inOrderTraversing(parentNode) { 
        // Left 
        if(parentNode.left) {
            this.DFS_inOrderTraversing(parentNode.left);
        } 

        // Parent 
        console.log(parentNode.value);

        // Right 
        if(parentNode.right) { 
            this.DFS_inOrderTraversing(parentNode.right);
        } 
    } 


    DFS_postOrderTraversing(parentNode) { 
        // Left 
        if(parentNode.left) {
            this.DFS_postOrderTraversing(parentNode.left);
        }

        // Right 
        if(parentNode.right) { 
            this.DFS_postOrderTraversing(parentNode.right);
        } 

        // Parent 
        console.log(parentNode.value);
    } 


    depthFinder(node, depth, arr) { 
        arr.push(depth);

        if(node.left) { 
            this.depthFinder(node.left, depth + 1, arr);
        }

        if(node.right) { 
            this.depthFinder(node.right, depth + 1, arr);
        }
    }

    optimumDepthFinder(node) { 
        if(!node) { 
            return 0;
        } 

        let max = Math.max(this.optimumDepthFinder(node.left), this.optimumDepthFinder(node.right));
        return max + 1;
    } 
} 


const mybst = new BST(25);

mybst.insert(10); 
mybst.insert(40); 
mybst.insert(5); 
mybst.insert(15); 
mybst.insert(30); 
mybst.insert(1); 


mybst.bfs(); 

let arr = []; 
mybst.depthFinder(mybst.root, 1, arr); 

console.log(arr); 

console.log(mybst.optimumDepthFinder(mybst.root));



mybst.DFS_preOrderTraversing(mybst.root); 
mybst.DFS_inOrderTraversing(mybst.root); 
mybst.DFS_postOrderTraversing(mybst.root); 


// console.log(JSON.stringify(mybst)); 




