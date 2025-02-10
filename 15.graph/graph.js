

class Graph {
    constructor() {
        this.graph = {}
        this.visited = {}
        this.parent = {}
    } 

    add(a, b, direction) { 
        this.visited[a] = false;
        this.visited[b] = false;

        if(this.graph[a]) {
            this.graph[a].push(b);
        }
        else {
            this.graph[a] = [b];
        }

        if(!direction) {
            if(this.graph[b]) {
                this.graph[b].push(a);
            }
            else {
                this.graph[b] = [a];
            }
        }
    } 

    bfs(src) {
        let queue = [src]; 
        this.visited[src] = true;

        while(queue.length > 0) {
            let node = queue.shift();
            let arr = this.graph[node]; 

            console.log(node);
            
            for(let i = 0; i < arr.length; i++) {
                // visited && not parent
                if(!this.visited[arr[i]]) {
                    queue.push(arr[i]);
                    this.visited[arr[i]] = true;
                    this.parent[arr[i]] = node;  
                }
            }
        }
    }

    scc() {
        for(let key in this.visited) { 
            if(!this.visited[key]) {
                this.bfs(+key)
            }
        }
    } 

    dfs(node) {
        console.log(node);
        
        let arr = this.graph[node];
        this.visited[node] = true;

        for(let i = 0; i < arr.length; i++) {
            if(!this.visited[arr[i]]) {
                this.dfs(arr[i]);
            }
        }
    }
}


const mygraph = new Graph(); 

mygraph.add(1,2);
mygraph.add(1,3);
mygraph.add(3,2);
mygraph.add(1,4);
mygraph.add(2,4);
mygraph.add(5,4);
mygraph.add(3,4);
mygraph.add(3,5);
mygraph.add(2,5);

mygraph.add(6, 7); 

// mygraph.bfs(2); 
// mygraph.scc()
mygraph.dfs(1); 

// console.log(mygraph.graph);


