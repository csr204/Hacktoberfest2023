topologicalSortHelper(node, visited, s) {
   visited.add(node);
   this.edges[node].forEach(n => {
      if (!visited.has(n)) {
         this.topologicalSortHelper(n, visited, s);
      }
   });
   s.push(node);
}

topologicalSort() {
   let s = new Stack(this.nodes.length);
   let visited = new Set();
   this.nodes.forEach(node => {
      if (!visited.has(node)) {
         this.topologicalSortHelper(node, visited, s);
      }
   });
   while (!s.isEmpty()) {
      console.log(s.pop());
   }
}
