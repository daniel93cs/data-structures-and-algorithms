// Import Graph
const Graph = require('./Graph');

// Using the above implemented graph class
const g = new Graph(6);
const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
g.bfs('B');
