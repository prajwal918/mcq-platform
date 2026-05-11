import { QuizQuestion } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: "u2_q1",
    text: `What is the primary idea behind the "Decrease and Conquer" technique?`,
    options: [
      { id: "a", text: `Increase the problem size incrementally` },
      { id: "b", text: `Solve the entire problem in one step` },
      { id: "c", text: `Reduce the problem size at each step and solve it recursively` },
      { id: "d", text: `Divide the problem into multiple subproblems of equal size` }
    ],
    correctOptionId: "c",
    explanation: "Decrease and Conquer reduces the problem size at each step and solves the reduced problem recursively."
  },
  {
    id: "u2_q2",
    text: `Which of the following is a characteristic of the "Decrease and Conquer" method?`,
    options: [
      { id: "a", text: `It always involves dividing the problem into two equal parts` },
      { id: "b", text: `It solves the problem by repeatedly reducing it to a smaller subproblem` },
      { id: "c", text: `It uses dynamic programming to store intermediate results` },
      { id: "d", text: `It is only applicable to sorting problems` }
    ],
    correctOptionId: "b",
    explanation: "Decrease and Conquer repeatedly reduces the problem to a smaller subproblem until it becomes trivial."
  },
  {
    id: "u2_q3",
    text: `In Insertion Sort, the problem size is reduced by:`,
    options: [
      { id: "a", text: `Splitting the array into two parts of equal size` },
      { id: "b", text: `Sorting only the largest element in each iteration` },
      { id: "c", text: `Sorting a single element at a time` },
      { id: "d", text: `Exchanging adjacent elements` }
    ],
    correctOptionId: "c",
    explanation: "Insertion sort reduces the problem by sorting one element at a time into its correct position in the sorted portion."
  },
  {
    id: "u2_q4",
    text: `Which algorithm uses a variable-size decrease approach?`,
    options: [
      { id: "a", text: `Exponentiation by squaring` },
      { id: "b", text: `Binary search` },
      { id: "c", text: `Euclid's algorithm` },
      { id: "d", text: `Insertion sort` }
    ],
    correctOptionId: "c",
    explanation: "Euclid's algorithm uses variable-size decrease—the problem size reduction depends on the remainder (a mod b)."
  },
  {
    id: "u2_q5",
    text: `Binary Search is a classic example of which variation of Decrease and Conquer?`,
    options: [
      { id: "a", text: `Decrease by a constant` },
      { id: "b", text: `Decrease by a constant factor` },
      { id: "c", text: `Decrease by one` },
      { id: "d", text: `Divide and conquer` }
    ],
    correctOptionId: "b",
    explanation: "Binary search decreases the problem size by a constant factor (halving the search space each time)."
  },
  {
    id: "u2_q6",
    text: `What type of data structure is used in Depth-First Search (DFS)?`,
    options: [
      { id: "a", text: `Queue` },
      { id: "b", text: `Stack` },
      { id: "c", text: `Priority Queue` },
      { id: "d", text: `Heap` }
    ],
    correctOptionId: "b",
    explanation: "DFS uses a stack (either explicitly or implicitly via recursion) to explore as deep as possible along each branch."
  },
  {
    id: "u2_q7",
    text: `DFS is more suitable than BFS for which of the following?`,
    options: [
      { id: "a", text: `Finding the shortest path in an unweighted graph` },
      { id: "b", text: `Exploring all vertices in a level-by-level manner` },
      { id: "c", text: `Detecting cycles in a graph` },
      { id: "d", text: `Solving shortest path problems in weighted graphs` }
    ],
    correctOptionId: "c",
    explanation: "DFS is better for cycle detection because it explores deep paths and can detect back edges."
  },
  {
    id: "u2_q8",
    text: `What is the key difference between BFS and DFS in their approach?`,
    options: [
      { id: "a", text: `BFS uses a stack; DFS uses a queue` },
      { id: "b", text: `BFS explores neighbors level by level; DFS explores as deep as possible along one branch` },
      { id: "c", text: `BFS works only on trees; DFS works only on graphs` },
      { id: "d", text: `BFS is recursive; DFS is iterative` }
    ],
    correctOptionId: "b",
    explanation: "BFS explores level by level (breadth-first), while DFS explores as deep as possible along one branch before backtracking."
  },
  {
    id: "u2_q9",
    text: `Which of the following is true for BFS?`,
    options: [
      { id: "a", text: `It always uses recursion` },
      { id: "b", text: `It can handle graphs with cycles by avoiding revisits using a "visited" array` },
      { id: "c", text: `It cannot be used to check graph connectivity` },
      { id: "d", text: `It is suitable only for weighted graphs` }
    ],
    correctOptionId: "b",
    explanation: "BFS can handle cycles by tracking visited nodes to avoid infinite loops and redundant visits."
  },
  {
    id: "u2_q10",
    text: `Which of the following problems can be solved using DFS?`,
    options: [
      { id: "a", text: `Finding connected components in a graph` },
      { id: "b", text: `Finding the shortest path in an unweighted graph` },
      { id: "c", text: `Topological sorting of a directed acyclic graph (DAG)` },
      { id: "d", text: `Both a and c` }
    ],
    correctOptionId: "d",
    explanation: "DFS can find connected components and perform topological sorting. BFS is used for shortest paths in unweighted graphs."
  },
  {
    id: "u2_q11",
    text: `What is the primary application of topological sorting?`,
    options: [
      { id: "a", text: `Finding the shortest path in a graph` },
      { id: "b", text: `Sorting a list of elements in ascending order` },
      { id: "c", text: `Ordering the vertices of a directed acyclic graph (DAG) such that for every edge (u,v), vertex u comes before vertex v` },
      { id: "d", text: `Finding the minimum spanning tree of a graph` }
    ],
    correctOptionId: "c",
    explanation: "Topological sort orders vertices such that for every directed edge (u,v), u appears before v in the ordering."
  },
  {
    id: "u2_q12",
    text: `Which of the following is a necessary condition for a graph to have a topological sorting?`,
    options: [
      { id: "a", text: `The graph must be a tree` },
      { id: "b", text: `The graph must be a DAG` },
      { id: "c", text: `The graph must be a complete graph` },
      { id: "d", text: `The graph must be a bipartite graph` }
    ],
    correctOptionId: "b",
    explanation: "A graph must be a Directed Acyclic Graph (DAG) to have a valid topological sort. Cycles prevent topological ordering."
  },
  {
    id: "u2_q13",
    text: `What is the time complexity of the topological sorting algorithm using Kahn's algorithm?`,
    options: [
      { id: "a", text: `O(V + E)` },
      { id: "b", text: `O(V * E)` },
      { id: "c", text: `O(E²)` },
      { id: "d", text: `O(V²)` }
    ],
    correctOptionId: "a",
    explanation: "Kahn's algorithm for topological sort runs in O(V + E) time."
  },
  {
    id: "u2_q14",
    text: `Which of the following is a correct statement about topological sorting?`,
    options: [
      { id: "a", text: `Topological sorting is only possible for graphs with a single source vertex` },
      { id: "b", text: `Topological sorting is only possible for graphs with a single sink vertex` },
      { id: "c", text: `Topological sorting can be performed on any DAG` },
      { id: "d", text: `Topological sorting can only be performed on graphs with a single cycle` }
    ],
    correctOptionId: "c",
    explanation: "Any DAG can be topologically sorted, regardless of the number of sources or sinks."
  },
  {
    id: "u2_q15",
    text: `What happens if a graph has a cycle and we try to perform topological sorting on it?`,
    options: [
      { id: "a", text: `The algorithm will produce a correct topological sorting` },
      { id: "b", text: `The algorithm will produce an incorrect topological sorting` },
      { id: "c", text: `The algorithm will detect the cycle and report an error` },
      { id: "d", text: `The algorithm will go into an infinite loop` }
    ],
    correctOptionId: "c",
    explanation: "Topological sorting algorithms detect cycles and report an error because cycles make valid topological ordering impossible."
  },
  {
    id: "u2_q16",
    text: `Which of the following is an example of the Transform and Conquer method?`,
    options: [
      { id: "a", text: `Merge Sort` },
      { id: "b", text: `Binary search` },
      { id: "c", text: `matrix multiplication` },
      { id: "d", text: `Heap sort` }
    ],
    correctOptionId: "d",
    explanation: "Heap sort transforms the array into a heap structure, then repeatedly extracts the maximum to sort."
  },
  {
    id: "u2_q17",
    text: `What operation is performed on an AVL tree when the balance factor of a node becomes greater than 1 or less than -1?`,
    options: [
      { id: "a", text: `Rotation` },
      { id: "b", text: `Deletion` },
      { id: "c", text: `Insertion` },
      { id: "d", text: `Search` }
    ],
    correctOptionId: "a",
    explanation: "AVL trees perform rotations (single or double) to restore balance when the balance factor exceeds ±1."
  },
  {
    id: "u2_q18",
    text: `What is the condition for a binary search tree to be considered an AVL tree?`,
    options: [
      { id: "a", text: `The height of the left subtree and the right subtree of every node differs by at most 2` },
      { id: "b", text: `The height of the left subtree and the right subtree of every node differs by at most 1` },
      { id: "c", text: `The height of the left subtree and the right subtree of every node is always equal` },
      { id: "d", text: `The height of the left subtree and the right subtree of every node differs by at least 1` }
    ],
    correctOptionId: "b",
    explanation: "An AVL tree requires the height difference (balance factor) between subtrees of every node to be at most 1."
  },
  {
    id: "u2_q19",
    text: `What is the time complexity of search, insert, and delete operations in a 2-3 tree?`,
    options: [
      { id: "a", text: `O(log n)` },
      { id: "b", text: `O(n)` },
      { id: "c", text: `O(n log n)` },
      { id: "d", text: `O(2ⁿ)` }
    ],
    correctOptionId: "a",
    explanation: "2-3 trees guarantee O(log n) time for search, insert, and delete operations due to their balanced nature."
  },
  {
    id: "u2_q20",
    text: `What happens when a node in a 2-3 tree is split due to the insertion of a new key?`,
    options: [
      { id: "a", text: `The node is replaced by two new nodes, each with one key` },
      { id: "b", text: `The node is replaced by three new nodes, each with one key` },
      { id: "c", text: `The node is not split, and the new key is added to the existing node` },
      { id: "d", text: `The node is replaced by two new nodes, each with one or two keys` }
    ],
    correctOptionId: "a",
    explanation: "When a 3-node (full node) receives a new key, it splits into two 2-nodes, each with one key, and the middle key is promoted to the parent."
  },
  {
    id: "u2_q21",
    text: `In a max-heap, which of the following is true?`,
    options: [
      { id: "a", text: `The parent node is smaller than its child nodes` },
      { id: "b", text: `The parent node is greater than or equal to its child nodes` },
      { id: "c", text: `The tree is a binary search tree` },
      { id: "d", text: `The elements are stored in ascending order` }
    ],
    correctOptionId: "b",
    explanation: "In a max-heap, every parent node is greater than or equal to its children."
  },
  {
    id: "u2_q22",
    text: `What is the time complexity to build and heapify a heap of n elements?`,
    options: [
      { id: "a", text: `O(n log n)` },
      { id: "b", text: `O(log n)` },
      { id: "c", text: `O(n)` },
      { id: "d", text: `O(n²)` }
    ],
    correctOptionId: "c",
    explanation: "Building a heap using bottom-up heapification takes O(n) time, which is more efficient than the naive O(n log n) approach."
  },
  {
    id: "u2_q23",
    text: `You are given an array: [3, 9, 2, 1, 4, 8]. After building a max-heap from this array, what will be the root element?`,
    options: [
      { id: "a", text: `1` },
      { id: "b", text: `9` },
      { id: "c", text: `2` },
      { id: "d", text: `8` }
    ],
    correctOptionId: "b",
    explanation: "In a max-heap, the root is the maximum element. The maximum in [3, 9, 2, 1, 4, 8] is 9."
  },
  {
    id: "u2_q24",
    text: `Which of the following applications is a heap NOT suited for?`,
    options: [
      { id: "a", text: `Implementing a priority queue` },
      { id: "b", text: `Finding the median of a data stream` },
      { id: "c", text: `Sorting data in ascending order` },
      { id: "d", text: `Depth-first search of a graph` }
    ],
    correctOptionId: "d",
    explanation: "Heaps are not used for DFS; DFS uses stacks. Heaps are used for priority queues, median finding, and heap sort."
  },
  {
    id: "u2_q25",
    text: `Which of the following is NOT true about heap sort?`,
    options: [
      { id: "a", text: `It is an in-place sorting algorithm` },
      { id: "b", text: `It is a stable sorting algorithm` },
      { id: "c", text: `It has a time complexity of O(n log n)` },
      { id: "d", text: `It uses the heap data structure` }
    ],
    correctOptionId: "b",
    explanation: "Heap sort is NOT stable—it does not preserve the relative order of equal elements. It is in-place with O(n log n) complexity."
  },
  {
    id: "u2_q26",
    text: `What makes Counting Sort a distribution-based algorithm?`,
    options: [
      { id: "a", text: `It uses element frequencies to determine sorted positions.` },
      { id: "b", text: `It divides the array into smaller subarrays.` },
      { id: "c", text: `It recursively splits and merges data.` },
      { id: "d", text: `It compares each pair of elements to sort the array.` }
    ],
    correctOptionId: "a",
    explanation: "Counting sort uses element frequencies (distribution) to determine the position of each element in the sorted output."
  },
  {
    id: "u2_q27",
    text: `Which sorting algorithm explicitly trades off space for time by using extra space to count occurrences of elements?`,
    options: [
      { id: "a", text: `Merge Sort` },
      { id: "b", text: `Bubble sort` },
      { id: "c", text: `Sorting by counting` },
      { id: "d", text: `Quick sort` }
    ],
    correctOptionId: "c",
    explanation: "Sorting by counting (counting sort) trades space for time by using extra memory to count occurrences."
  },
  {
    id: "u2_q28",
    text: `What is the time complexity of distribution counting sort?`,
    options: [
      { id: "a", text: `Θ(n²)` },
      { id: "b", text: `Θ(n)` },
      { id: "c", text: `O(n)` },
      { id: "d", text: `O(n²)` }
    ],
    correctOptionId: "b",
    explanation: "Distribution counting sort has Θ(n) time complexity when the range of input is O(n)."
  },
  {
    id: "u2_q29",
    text: `What is the time complexity of comparison counting sort?`,
    options: [
      { id: "a", text: `Θ(n²)` },
      { id: "b", text: `O(n)` },
      { id: "c", text: `O(n²)` },
      { id: "d", text: `Θ(n)` }
    ],
    correctOptionId: "a",
    explanation: "Comparison counting sort has Θ(n²) time complexity because it compares each element with every other element."
  },
  {
    id: "u2_q30",
    text: `Sorting by counting trades off space for time efficiency by:`,
    options: [
      { id: "a", text: `Using recursion to divide the array into smaller parts.` },
      { id: "b", text: `Allocating extra memory for the frequency and cumulative arrays.` },
      { id: "c", text: `Avoiding comparisons between elements.` },
      { id: "d", text: `Reducing the overall size of the input` }
    ],
    correctOptionId: "b",
    explanation: "Counting sort allocates extra memory for frequency and cumulative arrays to achieve linear time complexity."
  },
  {
    id: "u2_q31",
    text: `In Horspool's algorithm, when the last character of the pattern does not match the text, what action does the algorithm take?`,
    options: [
      { id: "a", text: `Shift the pattern by 1 character to the right` },
      { id: "b", text: `Perform a full re-check from the beginning of the pattern` },
      { id: "c", text: `Shift the pattern by the value stored for the text character in the shift table` },
      { id: "d", text: `Abort the search` }
    ],
    correctOptionId: "c",
    explanation: "Horspool's algorithm uses a precomputed shift table to determine how far to shift the pattern based on the mismatched text character."
  },
  {
    id: "u2_q32",
    text: `In Horspool's algorithm, when does the algorithm perform a full comparison of the pattern with the text?`,
    options: [
      { id: "a", text: `Every time a mismatch occurs` },
      { id: "b", text: `Only when a match is found` },
      { id: "c", text: `Only when the shift table suggests no shift` },
      { id: "d", text: `Initially, when the first character in the pattern is compared with the first character of the text` }
    ],
    correctOptionId: "d",
    explanation: "Horspool's algorithm first aligns the pattern, then performs a full right-to-left comparison starting from the last character."
  },
  {
    id: "u2_q33",
    text: `In Horspool's algorithm, what is the primary purpose of the shift table?`,
    options: [
      { id: "a", text: `To store the indices of pattern matches` },
      { id: "b", text: `To store the positions of all characters in the pattern` },
      { id: "c", text: `To store the number of shifts required for each character in the pattern` },
      { id: "d", text: `To store the hash values of pattern characters` }
    ],
    correctOptionId: "c",
    explanation: "The shift table stores the number of positions to shift the pattern for each possible character in the alphabet."
  },
  {
    id: "u2_q34",
    text: `In Horspool's algorithm, which table is used to store the shift values for the pattern matching process?`,
    options: [
      { id: "a", text: `Shift Table` },
      { id: "b", text: `Hash Table` },
      { id: "c", text: `Match Table` },
      { id: "d", text: `Character Table` }
    ],
    correctOptionId: "a",
    explanation: "Horspool's algorithm uses a Shift Table to store shift values for each character."
  },
  {
    id: "u2_q35",
    text: `What is the primary advantage of Horspool's algorithm over the naive string matching algorithm?`,
    options: [
      { id: "a", text: `It guarantees finding all occurrences in linear time` },
      { id: "b", text: `It uses a precomputed shift table to skip unnecessary comparisons` },
      { id: "c", text: `It always matches patterns in fewer comparisons than the naive algorithm.` },
      { id: "d", text: `It works in constant space` }
    ],
    correctOptionId: "b",
    explanation: "Horspool's algorithm precomputes a shift table to skip over portions of the text, reducing comparisons compared to naive matching."
  },
  {
    id: "u2_q36",
    text: `Which of the following is an example of a problem that can be solved using dynamic programming?`,
    options: [
      { id: "a", text: `Binary search` },
      { id: "b", text: `Knapsack problem` },
      { id: "c", text: `Merge sort` },
      { id: "d", text: `Depth First Search` }
    ],
    correctOptionId: "b",
    explanation: "The Knapsack problem is a classic dynamic programming problem with optimal substructure and overlapping subproblems."
  },
  {
    id: "u2_q37",
    text: `In dynamic programming, the solution to a problem is built up from:`,
    options: [
      { id: "a", text: `A single recursive call` },
      { id: "b", text: `A series of overlapping subproblems` },
      { id: "c", text: `A greedy approach` },
      { id: "d", text: `A divide and conquer method` }
    ],
    correctOptionId: "b",
    explanation: "Dynamic programming builds solutions by solving and combining solutions to overlapping subproblems."
  },
  {
    id: "u2_q38",
    text: `When solving a problem using dynamic programming, what is the role of "optimal substructure"?`,
    options: [
      { id: "a", text: `It ensures that solving subproblems will always result in the correct solution for the entire problem.` },
      { id: "b", text: `It guarantees that the problem can be solved in constant time.` },
      { id: "c", text: `It allows for efficient recursion without overlapping subproblems.` },
      { id: "d", text: `It simplifies the problem by eliminating unnecessary variables.` }
    ],
    correctOptionId: "a",
    explanation: "Optimal substructure means an optimal solution can be constructed from optimal solutions to its subproblems."
  },
  {
    id: "u2_q39",
    text: `What is the time complexity of solving the 0/1 knapsack problem using dynamic programming with an array-based approach?`,
    options: [
      { id: "a", text: `O(n²)` },
      { id: "b", text: `O(n * W) where n is the number of items and W is the maximum weight` },
      { id: "c", text: `O(W)` },
      { id: "d", text: `O(n)` }
    ],
    correctOptionId: "b",
    explanation: "The 0/1 knapsack DP solution uses a 2D table of size n × W, giving O(nW) time complexity."
  },
  {
    id: "u2_q40",
    text: `What does the term "overlapping subproblems" refer to in dynamic programming?`,
    options: [
      { id: "a", text: `Problems that can be solved using greedy algorithms` },
      { id: "b", text: `Subproblems that appear multiple times in the recursive solution` },
      { id: "c", text: `Subproblems that are completely independent` },
      { id: "d", text: `Subproblems that cannot be solved independently` }
    ],
    correctOptionId: "b",
    explanation: "Overlapping subproblems are subproblems that are solved multiple times in a naive recursive approach; DP stores their solutions to avoid recomputation."
  },
  {
    id: "u2_q41",
    text: `What is the primary purpose of the Floyd-Warshall algorithm?`,
    options: [
      { id: "a", text: `Finding the shortest path between two specific nodes` },
      { id: "b", text: `Finding the shortest paths between all pairs of nodes in a graph` },
      { id: "c", text: `Finding the minimum spanning tree of a graph` },
      { id: "d", text: `Finding the longest path in a weighted graph` }
    ],
    correctOptionId: "b",
    explanation: "Floyd-Warshall finds shortest paths between all pairs of vertices in a weighted graph."
  },
  {
    id: "u2_q42",
    text: `Which type of graph is required for the Floyd-Warshall algorithm?`,
    options: [
      { id: "a", text: `Directed or undirected weighted graphs` },
      { id: "b", text: `Only directed weighted graphs` },
      { id: "c", text: `Only undirected graphs` },
      { id: "d", text: `Only acyclic graphs` }
    ],
    correctOptionId: "a",
    explanation: "Floyd-Warshall works on both directed and undirected weighted graphs."
  },
  {
    id: "u2_q43",
    text: `How does the Floyd-Warshall algorithm handle negative weight cycles?`,
    options: [
      { id: "a", text: `It detects them and stops execution` },
      { id: "b", text: `It ignores them and continues finding shortest paths` },
      { id: "c", text: `It gives incorrect results` },
      { id: "d", text: `It runs indefinitely` }
    ],
    correctOptionId: "a",
    explanation: "Floyd-Warshall can detect negative weight cycles by checking diagonal elements after execution."
  },
  {
    id: "u2_q44",
    text: `Which technique is used to solve the 0/1 Knapsack problem efficiently?`,
    options: [
      { id: "a", text: `Greedy algorithm` },
      { id: "b", text: `Divide and conquer` },
      { id: "c", text: `Dynamic programming` },
      { id: "d", text: `Depth-first search` }
    ],
    correctOptionId: "c",
    explanation: "The 0/1 Knapsack problem is solved efficiently using dynamic programming due to optimal substructure and overlapping subproblems."
  },
  {
    id: "u2_q45",
    text: `What does the Floyd-Warshall algorithm store in its intermediate matrix?`,
    options: [
      { id: "a", text: `Edge weights only` },
      { id: "b", text: `Shortest path distances` },
      { id: "c", text: `Number of edges in the shortest path` },
      { id: "d", text: `The longest path in the graph` }
    ],
    correctOptionId: "b",
    explanation: "The Floyd-Warshall matrix stores the shortest path distances between all pairs of vertices."
  },
  {
    id: "u2_q46",
    text: `Which of the following is a major limitation of the Floyd-Warshall algorithm?`,
    options: [
      { id: "a", text: `Cannot handle negative weights` },
      { id: "b", text: `High space complexity` },
      { id: "c", text: `Cannot find shortest paths for undirected graphs` },
      { id: "d", text: `Cannot find shortest paths for large graphs efficiently` }
    ],
    correctOptionId: "b",
    explanation: "Floyd-Warshall has O(V³) time and O(V²) space complexity, making it impractical for very large graphs."
  },
  {
    id: "u2_q47",
    text: `What is the space complexity of the Floyd-Warshall algorithm?`,
    options: [
      { id: "a", text: `O(V)` },
      { id: "b", text: `O(V²)` },
      { id: "c", text: `O(V³)` },
      { id: "d", text: `O(V log V)` }
    ],
    correctOptionId: "b",
    explanation: "Floyd-Warshall requires O(V²) space for the distance matrix."
  },
  {
    id: "u2_q48",
    text: `What is the Knapsack problem primarily used for?`,
    options: [
      { id: "a", text: `Finding the shortest path in a graph.` },
      { id: "b", text: `Maximizing the value of items in a knapsack without exceeding its capacity.` },
      { id: "c", text: `Sorting a list of items.` },
      { id: "d", text: `Finding the minimum spanning tree of a graph.` }
    ],
    correctOptionId: "b",
    explanation: "The Knapsack problem maximizes total value of selected items without exceeding weight capacity."
  },
  {
    id: "u2_q49",
    text: `Which of the following is true about memory function?`,
    options: [
      { id: "a", text: `It is a top-down approach` },
      { id: "b", text: `It is a bottom-up approach.` },
      { id: "c", text: `It does not use recursion.` },
      { id: "d", text: `It is only applicable to sorting algorithms.` }
    ],
    correctOptionId: "a",
    explanation: "Memory function (memoization) is a top-down dynamic programming approach that stores results of subproblems."
  },
  {
    id: "u2_q50",
    text: `Which of the following problems can be solved using memory function?`,
    options: [
      { id: "a", text: `0/1 Knapsack` },
      { id: "b", text: `Travelling salesman problem` },
      { id: "c", text: `Job assignment` },
      { id: "d", text: `All of the above` }
    ],
    correctOptionId: "d",
    explanation: "Memory function (memoization) can be applied to all these problems to avoid redundant computations."
  }
];
