
class BST {
    constructor(value) {
        this.root = {
            value: value,
            left: null,
            right: null,
            height: 1
        };
    }

    insertValue(value) {
        const newNode = {
            value: value,
            left: null,
            right: null,
            height: 1
        };

        this.insert(this.root, newNode); 
    }

    insert(currentNode, newNode) {
        if (!currentNode) {
            return newNode;
        }

        if (newNode.value < currentNode.value) {
            currentNode.left = this.insert(currentNode.left, newNode);
        } 
        else {
            currentNode.right = this.insert(currentNode.right, newNode);
        }


        this.updateHeight(currentNode); 

        const balance = this.getBalanceFactor(currentNode); // { -1, 0, 1 } 


        // LL Rotation 
        if(balance > 1 && currentNode.left.value > newNode.value) {
            // 1 step -> Right rotation
            this.rightRotation(currentNode); 
        }

        // LR Rotation
        if(balance > 1 && currentNode.left.value < newNode.value) {
            // 2 step -> Left rotation >> Right rotation
            this.leftRotation(currentNode);
            this.rightRotation(currentNode);
        }

        // RR Rotation
        if(balance < -1 && currentNode.right.value < newNode.value) {
            // 1 step -> Left rotation
            this.leftRotation(currentNode);
        }

        // RL Rotation 
        if(balance < -1 && currentNode.right.value > newNode.value) {
            // 2 step -> Right rotation >> Left rotation
            this.rightRotation(currentNode);
            this.leftRotation(currentNode);
        }

        return currentNode; 
    } 

    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    getHeight(node) {
        return node ? node.height : 0;
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }


    leftRotation(node) {}

    rightRotation(node) {}


    bfs() {
        let queue = [this.root];

        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log([currentNode.value, currentNode.height]);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
}

let bst = new BST(50);

bst.insertValue(30);
bst.insertValue(70);
bst.insertValue(20);
bst.insertValue(15);

bst.bfs();
