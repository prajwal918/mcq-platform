import { QuizQuestion } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  {
    id: "u1_q1",
    text: `Main objective of analysing the algorithm is`,
    options: [
      { id: "a", text: `To design algorithms` },
      { id: "b", text: `To implement algorithms` },
      { id: "c", text: `To evaluate for efficiency` },
      { id: "d", text: `To debug algorithms` }
    ],
    correctOptionId: "c",
    explanation: "The primary objective of algorithm analysis is to evaluate and compare algorithms for their efficiency in terms of time and space complexity."
  },
  {
    id: "u1_q2",
    text: `Which of the following is NOT a characteristic of a good algorithm?`,
    options: [
      { id: "a", text: `Clarity and simplicity` },
      { id: "b", text: `Efficiency in terms of time and space` },
      { id: "c", text: `Correctness` },
      { id: "d", text: `The use of complex data structures` }
    ],
    correctOptionId: "d",
    explanation: "Good algorithms prioritize clarity, efficiency, and correctness. Complex data structures are not inherently a characteristic of a good algorithm—they should only be used when necessary."
  },
  {
    id: "u1_q3",
    text: `What does "optimization" refer to in the context of algorithms?`,
    options: [
      { id: "a", text: `The process of making an algorithm more complex` },
      { id: "b", text: `The process of improving an algorithm's efficiency` },
      { id: "c", text: `The process of making an algorithm run slower` },
      { id: "d", text: `The process of making an algorithm more clear` }
    ],
    correctOptionId: "b",
    explanation: "Optimization in algorithms refers to improving efficiency—reducing time complexity, space complexity, or both."
  },
  {
    id: "u1_q4",
    text: `What is the purpose of pseudocode in algorithm development?`,
    options: [
      { id: "a", text: `To provide a step-by-step implementation guide` },
      { id: "b", text: `To prevent others from understanding the algorithm` },
      { id: "c", text: `To hide the algorithm's logic` },
      { id: "d", text: `To succinct the algorithm` }
    ],
    correctOptionId: "a",
    explanation: "Pseudocode provides a high-level, language-agnostic step-by-step description of an algorithm's logic."
  },
  {
    id: "u1_q5",
    text: `Characteristics of an algorithm are`,
    options: [
      { id: "a", text: `Input, output, definite, finite, connective.` },
      { id: "b", text: `input, output, definite, finite, effective.` },
      { id: "c", text: `input, output, reflective, finite, effective` },
      { id: "d", text: `input, output, reflective, finite, connective.` }
    ],
    correctOptionId: "b",
    explanation: "The five key characteristics of an algorithm are: input, output, definiteness (each step is precisely defined), finiteness (terminates after finite steps), and effectiveness (each step is basic and can be done exactly)."
  },
  {
    id: "u1_q6",
    text: `When an algorithm is written in the form of a programming language, it becomes a`,
    options: [
      { id: "a", text: `Flowchart` },
      { id: "b", text: `Program` },
      { id: "c", text: `Pseudo code` },
      { id: "d", text: `Syntax` }
    ],
    correctOptionId: "b",
    explanation: "When an algorithm is implemented in a programming language, it becomes a program."
  },
  {
    id: "u1_q7",
    text: `Pseudocode is written using`,
    options: [
      { id: "a", text: `Combination of Native & programming language` },
      { id: "b", text: `High level Programming language only` },
      { id: "c", text: `Natural language only` },
      { id: "d", text: `Low level programming language` }
    ],
    correctOptionId: "a",
    explanation: "Pseudocode uses a combination of natural language and programming language constructs to describe algorithm logic."
  },
  {
    id: "u1_q8",
    text: `Which of the following is incorrect? Algorithms can be represented:`,
    options: [
      { id: "a", text: `as pseudo codes` },
      { id: "b", text: `as syntax` },
      { id: "c", text: `as programs` },
      { id: "d", text: `as flowcharts` }
    ],
    correctOptionId: "b",
    explanation: "Syntax is the set of rules defining the structure of statements in a programming language, not a representation of an algorithm itself."
  },
  {
    id: "u1_q9",
    text: `What will be the output of the following pseudocode if the driver is fun(5)? function fun(n) if n==1 return 1 else return n + fun(n-1)`,
    options: [
      { id: "a", text: `120` },
      { id: "b", text: `24` },
      { id: "c", text: `6` },
      { id: "d", text: `15` }
    ],
    correctOptionId: "d",
    explanation: "This computes 5 + 4 + 3 + 2 + 1 = 15. It is a recursive summation, not factorial."
  },
  {
    id: "u1_q10",
    text: `What will be the output of the following pseudocode if the driver is fun(18, 24) function fun(a,b) while(b!=0) fun(b, a mod b) return a`,
    options: [
      { id: "a", text: `18` },
      { id: "b", text: `24` },
      { id: "c", text: `6` },
      { id: "d", text: `2` }
    ],
    correctOptionId: "c",
    explanation: "This is Euclid's GCD algorithm. GCD(18, 24) = 6."
  },
  {
    id: "u1_q11",
    text: `Given the following time complexities, which one is the slowest growing function as n → ∞?`,
    options: [
      { id: "a", text: `O(n)` },
      { id: "b", text: `O(n²)` },
      { id: "c", text: `O(log n)` },
      { id: "d", text: `O(2ⁿ)` }
    ],
    correctOptionId: "c",
    explanation: "O(log n) grows the slowest. The order from slowest to fastest is: O(log n) < O(n) < O(n²) < O(2ⁿ)."
  },
  {
    id: "u1_q12",
    text: `Which of the following best describes the Big-Ω notation?`,
    options: [
      { id: "a", text: `Describes the lower bound of the time complexity of an algorithm` },
      { id: "b", text: `Describes the upper bound of the time complexity of an algorithm` },
      { id: "c", text: `Describes the exact time complexity of an algorithm` },
      { id: "d", text: `Describes the average-case time complexity of an algorithm` }
    ],
    correctOptionId: "a",
    explanation: "Big-Ω (Omega) notation describes the lower bound—the best-case scenario or minimum growth rate."
  },
  {
    id: "u1_q13",
    text: `What does the Big-O notation, O(f(n)), represent?`,
    options: [
      { id: "a", text: `The average-case time complexity of an algorithm` },
      { id: "b", text: `The worst-case time complexity of an algorithm` },
      { id: "c", text: `The best-case time complexity of an algorithm` },
      { id: "d", text: `The exact time taken by the algorithm` }
    ],
    correctOptionId: "b",
    explanation: "Big-O notation represents the upper bound (worst-case) time complexity of an algorithm."
  },
  {
    id: "u1_q14",
    text: `The time complexity of an algorithm is O(n²). Which of the following statements is correct about this algorithm?`,
    options: [
      { id: "a", text: `The algorithm's running time grows linearly with respect to the size of the input` },
      { id: "b", text: `The algorithm's running time grows quadratically with respect to the size of the input` },
      { id: "c", text: `The algorithm's running time grows logarithmically with respect to the size of the input` },
      { id: "d", text: `The algorithm's running time is constant irrespective of the input size` }
    ],
    correctOptionId: "b",
    explanation: "O(n²) indicates quadratic growth—the running time grows proportionally to the square of the input size."
  },
  {
    id: "u1_q15",
    text: `If an algorithm's time complexity is O(2ⁿ), what can you infer about the algorithm?`,
    options: [
      { id: "a", text: `The algorithm will be efficient for large inputs` },
      { id: "b", text: `The algorithm's time complexity grows exponentially with the input size` },
      { id: "c", text: `The algorithm will run in constant time for all inputs` },
      { id: "d", text: `The algorithm's runtime will decrease as the input size increases` }
    ],
    correctOptionId: "b",
    explanation: "O(2ⁿ) represents exponential growth, which becomes impractical very quickly as input size increases."
  },
  {
    id: "u1_q16",
    text: `In asymptotic analysis, what does it mean if a function is said to be O(n)?`,
    options: [
      { id: "a", text: `The time complexity increases exponentially as n increases` },
      { id: "b", text: `The algorithm's runtime grows linearly with the input size` },
      { id: "c", text: `The runtime of the algorithm is independent of the input size` },
      { id: "d", text: `The algorithm's runtime grows logarithmically as n increases` }
    ],
    correctOptionId: "b",
    explanation: "O(n) means linear growth—the runtime grows proportionally with the input size."
  },
  {
    id: "u1_q17",
    text: `If an algorithm has a worst-case time complexity of O(n³), which of the following time complexities would indicate a faster algorithm for large n?`,
    options: [
      { id: "a", text: `O(n²)` },
      { id: "b", text: `O(n⁴)` },
      { id: "c", text: `O(n³)` },
      { id: "d", text: `O(2ⁿ)` }
    ],
    correctOptionId: "a",
    explanation: "O(n²) grows slower than O(n³), making it faster for large inputs."
  },
  {
    id: "u1_q18",
    text: `Consider an algorithm with the following time complexities for different scenarios: Best Case: O(n), Worst Case: O(n²), Average Case: O(n log n). In which case will the algorithm perform the fastest?`,
    options: [
      { id: "a", text: `Best Case` },
      { id: "b", text: `Worst Case` },
      { id: "c", text: `Average Case` },
      { id: "d", text: `All cases will perform equally fast` }
    ],
    correctOptionId: "a",
    explanation: "The best case O(n) is the fastest scenario. The order is: O(n) < O(n log n) < O(n²)."
  },
  {
    id: "u1_q19",
    text: `Which of the following is the correct asymptotic notation for expressing the upper bound of an algorithm's running time?`,
    options: [
      { id: "a", text: `Big-O` },
      { id: "b", text: `Big-Ω` },
      { id: "c", text: `Big-Θ` },
      { id: "d", text: `Little-o` }
    ],
    correctOptionId: "a",
    explanation: "Big-O notation is used to express the upper bound (worst-case) of an algorithm's running time."
  },
  {
    id: "u1_q20",
    text: `If an algorithm has a time complexity of O(n³), which of the following functions represents its growth rate?`,
    options: [
      { id: "a", text: `Linear` },
      { id: "b", text: `Cubic` },
      { id: "c", text: `Exponential` },
      { id: "d", text: `Logarithmic` }
    ],
    correctOptionId: "b",
    explanation: "O(n³) represents cubic growth—the runtime grows with the cube of the input size."
  },
  {
    id: "u1_q21",
    text: `What is the first step in the general plan for analyzing the time efficiency of recursive algorithms?`,
    options: [
      { id: "a", text: `Identify the basic operation` },
      { id: "b", text: `Decide on a parameter indicating input size` },
      { id: "c", text: `Set up a recurrence relation` },
      { id: "d", text: `Check whether the number of times the basic operation is executed can vary on different inputs` }
    ],
    correctOptionId: "b",
    explanation: "The first step is to decide on a parameter indicating input size, then identify the basic operation, check execution variability, set up recurrence relation, and solve it."
  },
  {
    id: "u1_q22",
    text: `Which is the fundamental operation that is considered while analysing the algorithms?`,
    options: [
      { id: "a", text: `Count of basic operation` },
      { id: "b", text: `Arithmetic operation` },
      { id: "c", text: `Recurrence Equation` },
      { id: "d", text: `Geometric operation` }
    ],
    correctOptionId: "a",
    explanation: "The fundamental operation considered is the count of the basic operation (the operation contributing most to running time)."
  },
  {
    id: "u1_q23",
    text: `What is the goal of the Tower of Hanoi problem?`,
    options: [
      { id: "a", text: `To move all the disks to the second peg` },
      { id: "b", text: `To move all the disks to the first peg` },
      { id: "c", text: `To move all the disks to the third peg` },
      { id: "d", text: `To move all the disks to the fourth peg` }
    ],
    correctOptionId: "c",
    explanation: "The goal of Tower of Hanoi is to move all disks from the source peg to the destination (third) peg, following the rules."
  },
  {
    id: "u1_q24",
    text: `The time complexity of the solution tower of hanoi problem using recursion is`,
    options: [
      { id: "a", text: `O(n²)` },
      { id: "b", text: `O(2ⁿ)` },
      { id: "c", text: `O(n log n)` },
      { id: "d", text: `O(n)` }
    ],
    correctOptionId: "b",
    explanation: "Tower of Hanoi has time complexity O(2ⁿ) because it requires 2ⁿ - 1 moves for n disks."
  },
  {
    id: "u1_q25",
    text: `What is the typical time complexity of a non-recursive algorithm that processes each element in an array of size n exactly once?`,
    options: [
      { id: "a", text: `O(1)` },
      { id: "b", text: `O(n log n)` },
      { id: "c", text: `O(n)` },
      { id: "d", text: `O(n²)` }
    ],
    correctOptionId: "c",
    explanation: "Processing each of n elements exactly once results in linear time complexity O(n)."
  },
  {
    id: "u1_q26",
    text: `Which of the following statements about brute force algorithms is true?`,
    options: [
      { id: "a", text: `They always provide the optimal solution but are inefficient for large problem sizes.` },
      { id: "b", text: `They are the most efficient algorithms for all types of problems` },
      { id: "c", text: `They exhaustively search all possibilities, making them simple but often inefficient for large inputs` },
      { id: "d", text: `They reduce the problem size in each iteration, unlike recursive algorithms` }
    ],
    correctOptionId: "c",
    explanation: "Brute force algorithms exhaustively search all possibilities. They are simple to implement but often inefficient for large inputs."
  },
  {
    id: "u1_q27",
    text: `What is the primary characteristic of a brute force algorithm?`,
    options: [
      { id: "a", text: `It uses a divide-and-conquer strategy to break problems into smaller subproblems.` },
      { id: "b", text: `It attempts to solve the problem by checking all possible solutions until the correct one is found.` },
      { id: "c", text: `It uses dynamic programming to avoid redundant calculations` },
      { id: "d", text: `It uses a greedy strategy to find an optimal solution.` }
    ],
    correctOptionId: "b",
    explanation: "Brute force checks all possible solutions systematically until finding the correct one."
  },
  {
    id: "u1_q28",
    text: `What is the number of times the comparison operation is executed in the algorithm for finding the largest element in a list of numbers?`,
    options: [
      { id: "a", text: `C(n) = n` },
      { id: "b", text: `C(n) = n - 2` },
      { id: "c", text: `C(n) = n + 1` },
      { id: "d", text: `C(n) = n - 1` }
    ],
    correctOptionId: "d",
    explanation: "To find the largest element, we compare each element with the current maximum. For n elements, we need n-1 comparisons."
  },
  {
    id: "u1_q29",
    text: `What is considered as the basic operation in the algorithm for finding the largest element in an array of integers?`,
    options: [
      { id: "a", text: `The assignment operation` },
      { id: "b", text: `The comparison operation` },
      { id: "c", text: `The addition operation` },
      { id: "d", text: `The multiplication operation` }
    ],
    correctOptionId: "b",
    explanation: "The comparison operation (comparing elements to find the maximum) is the basic operation."
  },
  {
    id: "u1_q30",
    text: `Which of the following recursive algorithms has a time complexity of O(n)?`,
    options: [
      { id: "a", text: `Fibonacci sequence using naive recursion.` },
      { id: "b", text: `Merge sort.` },
      { id: "c", text: `Binary search on a sorted array.` },
      { id: "d", text: `Factorial computation using recursion.` }
    ],
    correctOptionId: "d",
    explanation: "Factorial computation using recursion has O(n) time complexity. Fibonacci is O(2ⁿ), merge sort is O(n log n), binary search is O(log n)."
  },
  {
    id: "u1_q31",
    text: `The Selection Sort algorithm finds the lowest value to sort in ascending order in an array and moves it to the ___ of the array.`,
    options: [
      { id: "a", text: `end` },
      { id: "b", text: `front` },
      { id: "c", text: `middle` },
      { id: "d", text: `particular location` }
    ],
    correctOptionId: "b",
    explanation: "Selection sort finds the minimum element and moves it to the front (beginning) of the unsorted portion."
  },
  {
    id: "u1_q32",
    text: `The Bubble Sort algorithm finds the lowest value to sort in descending order in an array and moves it to the ___ of the array.`,
    options: [
      { id: "a", text: `end` },
      { id: "b", text: `front` },
      { id: "c", text: `middle` },
      { id: "d", text: `particular location` }
    ],
    correctOptionId: "a",
    explanation: "In descending order bubble sort, the smallest value bubbles to the end of the array."
  },
  {
    id: "u1_q33",
    text: `Linear search algorithm, also known as____`,
    options: [
      { id: "a", text: `Binary search` },
      { id: "b", text: `simple search` },
      { id: "c", text: `sequential search` },
      { id: "d", text: `Difficult search` }
    ],
    correctOptionId: "c",
    explanation: "Linear search is also known as sequential search because it checks elements sequentially."
  },
  {
    id: "u1_q34",
    text: `Exhaustive Search algorithm checks every possible solution to find the ____one`,
    options: [
      { id: "a", text: `Worst` },
      { id: "b", text: `Average` },
      { id: "c", text: `amortized` },
      { id: "d", text: `Best` }
    ],
    correctOptionId: "d",
    explanation: "Exhaustive search checks all possible solutions to find the best (optimal) one."
  },
  {
    id: "u1_q35",
    text: `Exhaustive search falls under which algorithm technique`,
    options: [
      { id: "a", text: `Brute force` },
      { id: "b", text: `Decrease and Conquer` },
      { id: "c", text: `Divide and Conquer` },
      { id: "d", text: `Greedy` }
    ],
    correctOptionId: "a",
    explanation: "Exhaustive search is a brute force technique that checks all possibilities."
  },
  {
    id: "u1_q36",
    text: `A string-searching algorithm, sometimes called string-matching algorithm, is an algorithm that searches a body of text for portions that match by____.`,
    options: [
      { id: "a", text: `pattern` },
      { id: "b", text: `word` },
      { id: "c", text: `index` },
      { id: "d", text: `text` }
    ],
    correctOptionId: "a",
    explanation: "String-searching algorithms search for portions of text that match a given pattern."
  },
  {
    id: "u1_q37",
    text: `The time complexity of the naive string matching algorithm`,
    options: [
      { id: "a", text: `O(nm)` },
      { id: "b", text: `O(n+m)` },
      { id: "c", text: `O(n-m+1)` },
      { id: "d", text: `O(n)` }
    ],
    correctOptionId: "a",
    explanation: "Naive string matching has O(nm) complexity where n is text length and m is pattern length."
  },
  {
    id: "u1_q38",
    text: `The time complexity of the linear Search algorithm`,
    options: [
      { id: "a", text: `O(nm)` },
      { id: "b", text: `O(n+m)` },
      { id: "c", text: `O(n-m+1)` },
      { id: "d", text: `O(n)` }
    ],
    correctOptionId: "d",
    explanation: "Linear search has O(n) time complexity in the worst case."
  },
  {
    id: "u1_q39",
    text: `The time complexity of the Bubble sort algorithm`,
    options: [
      { id: "a", text: `O(nm)` },
      { id: "b", text: `O(n²)` },
      { id: "c", text: `O(n-m+1)` },
      { id: "d", text: `O(n)` }
    ],
    correctOptionId: "b",
    explanation: "Bubble sort has O(n²) time complexity in the worst and average cases."
  },
  {
    id: "u1_q40",
    text: `The time complexity of the Selection sort algorithm`,
    options: [
      { id: "a", text: `O(nm)` },
      { id: "b", text: `O(n²)` },
      { id: "c", text: `O(n-m+1)` },
      { id: "d", text: `O(n)` }
    ],
    correctOptionId: "b",
    explanation: "Selection sort has O(n²) time complexity for all cases (best, average, worst)."
  },
  {
    id: "u1_q41",
    text: `What is the primary characteristic of the Divide and Conquer approach?`,
    options: [
      { id: "a", text: `Solving problems by iteration` },
      { id: "b", text: `Solving problems by dividing them into overlapping sub problems` },
      { id: "c", text: `Dividing a problem into smaller independent subproblems, solving them recursively, and combining their results` },
      { id: "d", text: `Dividing a problem into smaller problems and linearly solving` }
    ],
    correctOptionId: "c",
    explanation: "Divide and Conquer divides problems into independent subproblems, solves recursively, and combines results."
  },
  {
    id: "u1_q42",
    text: `In Quick Sort, what is the worst-case time complexity?`,
    options: [
      { id: "a", text: `O(n²)` },
      { id: "b", text: `O(n log n)` },
      { id: "c", text: `O(log n)` },
      { id: "d", text: `O(n)` }
    ],
    correctOptionId: "a",
    explanation: "Quick sort's worst-case is O(n²) when the pivot selection is poor (e.g., already sorted array with first element as pivot)."
  },
  {
    id: "u1_q43",
    text: `Binary Search works only on which type of arrays?`,
    options: [
      { id: "a", text: `Unsorted arrays` },
      { id: "b", text: `Sorted arrays` },
      { id: "c", text: `Arrays with distinct elements` },
      { id: "d", text: `Arrays of integers` }
    ],
    correctOptionId: "b",
    explanation: "Binary search requires a sorted array to function correctly."
  },
  {
    id: "u1_q44",
    text: `Which of the following algorithms is NOT based on the Divide and Conquer approach?`,
    options: [
      { id: "a", text: `Merge Sort` },
      { id: "b", text: `Quick Sort` },
      { id: "c", text: `Binary Search` },
      { id: "d", text: `Selection sort` }
    ],
    correctOptionId: "d",
    explanation: "Selection sort is not divide and conquer; it is a brute force/in-place comparison sort."
  },
  {
    id: "u1_q45",
    text: `Which of the following is true about Merge Sort?`,
    options: [
      { id: "a", text: `It is an in-place sorting algorithm` },
      { id: "b", text: `It has a worst-case time complexity of O(n²)` },
      { id: "c", text: `It uses additional memory for merging subarrays` },
      { id: "d", text: `It always selects the first element as a pivot` }
    ],
    correctOptionId: "c",
    explanation: "Merge sort uses O(n) additional memory for merging subarrays. It is not in-place."
  },
  {
    id: "u1_q46",
    text: `During the merging process of Merge Sort, what is the time complexity to merge two sorted subarrays?`,
    options: [
      { id: "a", text: `O(n)` },
      { id: "b", text: `O(log n)` },
      { id: "c", text: `O(n²)` },
      { id: "d", text: `O(n log n)` }
    ],
    correctOptionId: "a",
    explanation: "Merging two sorted subarrays takes O(n) time where n is the total number of elements."
  },
  {
    id: "u1_q47",
    text: `What is the average-case time complexity of merge sort?`,
    options: [
      { id: "a", text: `Θ(log n)` },
      { id: "b", text: `Θ(n)` },
      { id: "c", text: `Θ(n²)` },
      { id: "d", text: `Θ(n log n)` }
    ],
    correctOptionId: "d",
    explanation: "Merge sort has Θ(n log n) time complexity for all cases (best, average, worst)."
  },
  {
    id: "u1_q48",
    text: `How many sub arrays does the quick sort algorithm divide the entire array into?`,
    options: [
      { id: "a", text: `one` },
      { id: "b", text: `two` },
      { id: "c", text: `three` },
      { id: "d", text: `four` }
    ],
    correctOptionId: "b",
    explanation: "Quick sort divides the array into two subarrays based on the pivot element."
  },
  {
    id: "u1_q49",
    text: `What is the recurrence relation for merge sort algorithm?`,
    options: [
      { id: "a", text: `C(n) = 2C(n) + 1` },
      { id: "b", text: `C(n) = 2C(n/2) - 1` },
      { id: "c", text: `C(n) = 2C(n/2) + n` },
      { id: "d", text: `C(n) = 2C(n²/2) + n` }
    ],
    correctOptionId: "c",
    explanation: "The recurrence for merge sort is T(n) = 2T(n/2) + n, representing two subproblems of half size plus linear merge time."
  },
  {
    id: "u1_q50",
    text: `What is the time complexity of Binary Search in the best case?`,
    options: [
      { id: "a", text: `Θ(n)` },
      { id: "b", text: `Θ(log n)` },
      { id: "c", text: `Θ(n log n)` },
      { id: "d", text: `Θ(1)` }
    ],
    correctOptionId: "d",
    explanation: "Best case for binary search is Θ(1) when the target is found at the middle element on the first comparison."
  }
];
