
class WeightedGraph { 
    constructor() {
        this.graph = {}
        this.visited = {}
        this.parent = {}
    } 

    add(a, b, w, direction) {
        this.visited[a] = false;
        this.visited[b] = false;

        if(this.graph[a]) {
            this.graph[a].push({node: b, weight: w});
        }
        else {
            this.graph[a] = [{node: b, weight: w}];
        }

        if(!direction) {
            if(this.graph[b]) {
                this.graph[b].push({node: a, weight: w});
            }
            else {
                this.graph[b] = [{node: a, weight: w}];
            }
        }
    } 

    bfs(src) {
        let queue = [{node: src, weight: 0}]; 
        this.visited[src] = true;
        while(queue.length > 0) {
            
            let obj = queue.shift();
            
            let arr = this.graph[obj.node]; 

            console.log(obj.node);
            
            for(let i = 0; i < arr.length; i++) {
                // visited && not parent
                if(!this.visited[arr[i].node]) {
                    queue.push(arr[i]);
                    this.visited[arr[i].node] = true;
                    this.parent[arr[i].node] = obj.node;  
                }
            }
        }
    }

    
}

const graph = new WeightedGraph(); 

graph.add(1, 2, 10)
graph.add(1, 3, 20)
graph.add(2, 4, 40)
graph.add(3, 4, 50)


// console.log(graph.graph);

graph.bfs(1); 


