import { QuizQuestion } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: "u3_q1",
    text: `Which of the following is true?`,
    options: [
      { id: "a", text: `Prim's algorithm initialises with a vertex` },
      { id: "b", text: `Prim's algorithm initialises with a edge` },
      { id: "c", text: `Prim's algorithm initialises with a vertex which has smallest edge` },
      { id: "d", text: `Prim's algorithm initialises with a forest` }
    ],
    correctOptionId: "a",
    explanation: "Prim's algorithm initializes with a single arbitrary vertex and grows the MST by adding the minimum weight edge that connects a vertex in the tree to a vertex outside."
  },
  {
    id: "u3_q2",
    text: `Prim's algorithm is a ______`,
    options: [
      { id: "a", text: `Divide and conquer algorithm` },
      { id: "b", text: `Greedy algorithm` },
      { id: "c", text: `Dynamic Programming` },
      { id: "d", text: `Approximation algorithm` }
    ],
    correctOptionId: "b",
    explanation: "Prim's algorithm is a greedy algorithm that makes the locally optimal choice at each step to find the global optimum (MST)."
  },
  {
    id: "u3_q3",
    text: `Which of the following is false about Prim's algorithm?`,
    options: [
      { id: "a", text: `It is a greedy algorithm` },
      { id: "b", text: `It constructs MST by selecting edges in increasing order of their weights` },
      { id: "c", text: `It never accepts cycles in the MST` },
      { id: "d", text: `It can be implemented using the Fibonacci heap` }
    ],
    correctOptionId: "b",
    explanation: "Prim's algorithm does NOT select edges in increasing order of weights globally—that's Kruskal's algorithm. Prim adds the minimum edge connecting the growing tree to an outside vertex."
  },
  {
    id: "u3_q4",
    text: `Kruskal's algorithm is used to ______`,
    options: [
      { id: "a", text: `find minimum spanning tree` },
      { id: "b", text: `find single source shortest path` },
      { id: "c", text: `find all pair shortest path algorithm` },
      { id: "d", text: `traverse the graph` }
    ],
    correctOptionId: "a",
    explanation: "Kruskal's algorithm is specifically designed to find the Minimum Spanning Tree (MST) of a connected, undirected, weighted graph."
  },
  {
    id: "u3_q5",
    text: `What is the time complexity of Kruskal's algorithm?`,
    options: [
      { id: "a", text: `O(log V)` },
      { id: "b", text: `O(E²)` },
      { id: "c", text: `O(E log V)` },
      { id: "d", text: `O(V log E)` }
    ],
    correctOptionId: "c",
    explanation: "Kruskal's algorithm has O(E log E) or O(E log V) time complexity due to sorting edges and union-find operations."
  },
  {
    id: "u3_q6",
    text: `Which of the following is true?`,
    options: [
      { id: "a", text: `Prim's algorithm can also be used for disconnected graphs` },
      { id: "b", text: `Prim's algorithm is simpler than Kruskal's algorithm` },
      { id: "c", text: `In Kruskal's sort edges are added to MST in decreasing order of their weights` },
      { id: "d", text: `Kruskal's algorithm can also run on the disconnected graphs` }
    ],
    correctOptionId: "d",
    explanation: "Kruskal's algorithm can handle disconnected graphs and will produce a minimum spanning forest. Prim's requires a connected graph."
  },
  {
    id: "u3_q7",
    text: `Which of the following algorithms is the best approach for solving Huffman codes?`,
    options: [
      { id: "a", text: `exhaustive search` },
      { id: "b", text: `greedy algorithm` },
      { id: "c", text: `brute force algorithm` },
      { id: "d", text: `divide and conquer algorithm` }
    ],
    correctOptionId: "b",
    explanation: "Huffman coding uses a greedy approach—repeatedly combining the two lowest frequency nodes to build an optimal prefix code tree."
  },
  {
    id: "u3_q8",
    text: `Dijkstra's Algorithm is used to solve _____________`,
    options: [
      { id: "a", text: `All pair shortest path` },
      { id: "b", text: `Single source shortest path` },
      { id: "c", text: `Network flow` },
      { id: "d", text: `Sorting` }
    ],
    correctOptionId: "b",
    explanation: "Dijkstra's algorithm finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edges."
  },
  {
    id: "u3_q9",
    text: `Dijkstra's Algorithm is the prime example for`,
    options: [
      { id: "a", text: `Greedy algorithm` },
      { id: "b", text: `Branch and bound` },
      { id: "c", text: `Back tracking` },
      { id: "d", text: `Dynamic programming` }
    ],
    correctOptionId: "a",
    explanation: "Dijkstra's algorithm is a classic example of a greedy algorithm, always selecting the vertex with the minimum distance."
  },
  {
    id: "u3_q10",
    text: `In Huffman coding, data in a tree always occur?`,
    options: [
      { id: "a", text: `roots` },
      { id: "b", text: `left sub trees` },
      { id: "c", text: `leaves` },
      { id: "d", text: `right sub trees` }
    ],
    correctOptionId: "c",
    explanation: "In Huffman coding, the actual data characters always occur at the leaves of the tree. Internal nodes represent combined frequencies."
  },
  {
    id: "u3_q11",
    text: `What is the primary advantage of the Bellman-Ford algorithm over Dijkstra's algorithm?`,
    options: [
      { id: "a", text: `Works only for positive weights` },
      { id: "b", text: `Can handle negative weight edges` },
      { id: "c", text: `More efficient than Dijkstra's algorithm` },
      { id: "d", text: `Uses a priority queue` }
    ],
    correctOptionId: "b",
    explanation: "Bellman-Ford can handle negative weight edges (but not negative cycles), while Dijkstra's requires non-negative weights."
  },
  {
    id: "u3_q12",
    text: `What is the time complexity of the Bellman-Ford algorithm for a graph with V vertices and E edges?`,
    options: [
      { id: "a", text: `O(V)` },
      { id: "b", text: `O(E)` },
      { id: "c", text: `O(V²)` },
      { id: "d", text: `O(VE)` }
    ],
    correctOptionId: "d",
    explanation: "Bellman-Ford runs in O(VE) time because it relaxes all E edges V-1 times."
  },
  {
    id: "u3_q13",
    text: `If a graph contains a negative-weight cycle, what will Bellman-Ford algorithm do?`,
    options: [
      { id: "a", text: `Return shortest path normally` },
      { id: "b", text: `Terminate and output a warning` },
      { id: "c", text: `Enter an infinite loop` },
      { id: "d", text: `Ignore the cycle and compute shortest paths` }
    ],
    correctOptionId: "b",
    explanation: "Bellman-Ford detects negative-weight cycles and reports them; shortest paths are undefined in such cases."
  },
  {
    id: "u3_q14",
    text: `What is the key principle behind edge relaxation in the Bellman-Ford algorithm?`,
    options: [
      { id: "a", text: `Updating distances to adjacent vertices if a shorter path is found` },
      { id: "b", text: `Assigning random weights to edges` },
      { id: "c", text: `Removing unnecessary edges` },
      { id: "d", text: `Checking for cycles in the graph` }
    ],
    correctOptionId: "a",
    explanation: "Edge relaxation updates the distance to a vertex if a shorter path is found through an adjacent vertex."
  },
  {
    id: "u3_q15",
    text: `In the state space tree used for backtracking, what do the nodes represent?`,
    options: [
      { id: "a", text: `The entire solution` },
      { id: "b", text: `Partial solutions leading to the final solution` },
      { id: "c", text: `The weight of an edge` },
      { id: "d", text: `The adjacency matrix` }
    ],
    correctOptionId: "b",
    explanation: "In backtracking, each node in the state space tree represents a partial solution that may lead to a complete valid solution."
  },
  {
    id: "u3_q16",
    text: `What is the purpose of the pruning step in backtracking algorithms?`,
    options: [
      { id: "a", text: `To reduce the number of recursive calls` },
      { id: "b", text: `To guarantee an optimal solution` },
      { id: "c", text: `To avoid checking already visited nodes` },
      { id: "d", text: `To eliminate branches that cannot lead to a valid solution` }
    ],
    correctOptionId: "d",
    explanation: "Pruning eliminates branches of the search tree that cannot possibly lead to a valid solution, improving efficiency."
  },
  {
    id: "u3_q17",
    text: `In the subset-sum problem, when do we backtrack?`,
    options: [
      { id: "a", text: `When the sum of the selected elements exceeds the target sum` },
      { id: "b", text: `When the sum of the selected elements is equal to the target sum` },
      { id: "c", text: `When all elements have been considered` },
      { id: "d", text: `When a subset has been found` }
    ],
    correctOptionId: "a",
    explanation: "In subset-sum backtracking, we backtrack when the current sum exceeds the target, as no valid solution can exist along that branch."
  },
  {
    id: "u3_q18",
    text: `How does backtracking differ from brute force?`,
    options: [
      { id: "a", text: `Backtracking does not explore all possibilities` },
      { id: "b", text: `Backtracking avoids unnecessary computations by pruning` },
      { id: "c", text: `Backtracking is faster in all cases` },
      { id: "d", text: `Backtracking guarantees an optimal solution` }
    ],
    correctOptionId: "b",
    explanation: "Backtracking differs from brute force by pruning invalid branches, avoiding unnecessary computations while still exploring all valid possibilities."
  },
  {
    id: "u3_q19",
    text: `In the subset-sum problem using backtracking, what is the worst-case time complexity?`,
    options: [
      { id: "a", text: `O(N)` },
      { id: "b", text: `O(2^N)` },
      { id: "c", text: `O(N log N)` },
      { id: "d", text: `O(N²)` }
    ],
    correctOptionId: "b",
    explanation: "The worst-case time complexity of subset-sum backtracking is O(2^N) because it may explore all subsets in the worst case."
  },
  {
    id: "u3_q20",
    text: `What does the Bellman-Ford algorithm detects that Dijkstra's algorithm cannot?`,
    options: [
      { id: "a", text: `Shortest paths` },
      { id: "b", text: `Graph cycles` },
      { id: "c", text: `Negative-weight cycles` },
      { id: "d", text: `Directed edges` }
    ],
    correctOptionId: "c",
    explanation: "Bellman-Ford can detect negative-weight cycles, which Dijkstra's algorithm cannot handle."
  },
  {
    id: "u3_q21",
    text: `Which of the following is the primary purpose of the Branch and Bound method?`,
    options: [
      { id: "a", text: `To find the exact solution of a problem` },
      { id: "b", text: `To eliminate suboptimal solutions and prune the search space` },
      { id: "c", text: `To provide approximate solutions` },
      { id: "d", text: `To reduce the problem into smaller sub-problems` }
    ],
    correctOptionId: "b",
    explanation: "Branch and Bound eliminates suboptimal solutions by pruning branches that cannot improve upon the current best solution."
  },
  {
    id: "u3_q22",
    text: `Which of the following is an example of a combinatorial optimization problem solved using Branch and Bound?`,
    options: [
      { id: "a", text: `Sorting numbers in ascending order` },
      { id: "b", text: `Multiplying two matrices` },
      { id: "c", text: `Searching for an element in a list` },
      { id: "d", text: `Solving the traveling salesman problem (TSP)` }
    ],
    correctOptionId: "d",
    explanation: "The Traveling Salesman Problem (TSP) is a classic combinatorial optimization problem solved using Branch and Bound."
  },
  {
    id: "u3_q23",
    text: `In the Job Assignment Problem, what does the objective function typically aim to minimize?`,
    options: [
      { id: "a", text: `The time to complete all tasks` },
      { id: "b", text: `The number of tasks assigned` },
      { id: "c", text: `The total cost of assigning tasks to workers` },
      { id: "d", text: `The total time worked by all workers` }
    ],
    correctOptionId: "c",
    explanation: "The Job Assignment Problem aims to minimize the total cost of assigning tasks to workers, where each worker-task pair has an associated cost."
  },
  {
    id: "u3_q24",
    text: `NP-Complete problems are:`,
    options: [
      { id: "a", text: `Solvable in polynomial time` },
      { id: "b", text: `Solvable using dynamic programming` },
      { id: "c", text: `As hard as the hardest problems in NP` },
      { id: "d", text: `Always solvable using Branch and Bound` }
    ],
    correctOptionId: "c",
    explanation: "NP-Complete problems are the hardest problems in NP—any NP problem can be reduced to an NP-Complete problem in polynomial time."
  },
  {
    id: "u3_q25",
    text: `In the Knapsack problem, if we are maximizing value and minimizing weight, which method would typically be applied?`,
    options: [
      { id: "a", text: `Branch and Bound` },
      { id: "b", text: `Greedy method` },
      { id: "c", text: `Dynamic programming` },
      { id: "d", text: `Backtracking` }
    ],
    correctOptionId: "a",
    explanation: "Branch and Bound is typically applied to the 0/1 Knapsack problem for exact optimization with pruning."
  },
  {
    id: "u3_q26",
    text: `Which of the following statements is true about NP-Hard problems?`,
    options: [
      { id: "a", text: `They are solvable in polynomial time` },
      { id: "b", text: `They are more complex than NP-Complete problems` },
      { id: "c", text: `They cannot be solved in polynomial time, but their solutions can be verified in polynomial time` },
      { id: "d", text: `They are at least as hard as NP-Complete problems` }
    ],
    correctOptionId: "d",
    explanation: "NP-Hard problems are at least as hard as NP-Complete problems. They may not even be in NP (solutions may not be verifiable in polynomial time)."
  },
  {
    id: "u3_q27",
    text: `Which problem is considered NP-Hard?`,
    options: [
      { id: "a", text: `Traveling Salesman Problem (TSP)` },
      { id: "b", text: `Shortest path problem` },
      { id: "c", text: `Knapsack problem` },
      { id: "d", text: `Sorting problem` }
    ],
    correctOptionId: "a",
    explanation: "The Traveling Salesman Problem (TSP) is NP-Hard. Shortest path and sorting are in P; Knapsack is NP-Complete."
  },
  {
    id: "u3_q28",
    text: `Which of the following is NOT a common technique for solving the Job Assignment Problem?`,
    options: [
      { id: "a", text: `Linear Programming` },
      { id: "b", text: `Greedy Algorithm` },
      { id: "c", text: `Branch and Bound` },
      { id: "d", text: `Dynamic Programming` }
    ],
    correctOptionId: "b",
    explanation: "The Greedy Algorithm is NOT commonly used for Job Assignment because it does not guarantee optimality. Linear Programming, Branch and Bound, and DP are used."
  },
  {
    id: "u3_q29",
    text: `Which of the following problems is not NP-Complete?`,
    options: [
      { id: "a", text: `Knapsack Problem` },
      { id: "b", text: `Subset Sum Problem` },
      { id: "c", text: `Finding the longest path in a graph` },
      { id: "d", text: `Sorting a list of integers` }
    ],
    correctOptionId: "d",
    explanation: "Sorting is in P (solvable in polynomial time, O(n log n)) and is NOT NP-Complete."
  },
  {
    id: "u3_q30",
    text: `Which of the following is the most efficient approach to solve a Knapsack problem with a large number of items?`,
    options: [
      { id: "a", text: `Brute force search` },
      { id: "b", text: `Greedy algorithm` },
      { id: "c", text: `Dynamic programming or Branch and Bound` },
      { id: "d", text: `Backtracking` }
    ],
    correctOptionId: "c",
    explanation: "For large instances, Dynamic Programming (pseudo-polynomial) or Branch and Bound with pruning are the most efficient exact approaches."
  }
];
