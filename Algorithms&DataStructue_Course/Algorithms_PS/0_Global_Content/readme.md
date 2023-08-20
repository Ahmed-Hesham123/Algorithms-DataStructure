# Algorithms

<h1>What is an Algorithm?</h1>

- An Algorithm is a set of well-defined instructions to solve a particular problem.

## Recipe Analogy:

<h3>Ingredients ===> Recipe ===> Tasty dish</h3>

      = = = = = = = =
    - Cup of Noodles. - ===>\\      1. Boil water.
    - Taste Marker.   - ===>==>>    2. Pour water into cup.
    - Water.          - ===>//      3. Add taste maker.
      = = = = = = = =               4. Close lid and wait 4 minutes.

## Programming: 👋

**An Algorithm to add two numbers.**

<h3>Input ===> Algorithm ===> Output</h3>

      = = = = = = = =
    - Two Numbers.   -  ===>\\      1. Add numbers using `+` => sum of a and b.
                              ===>>
    - `a` and `b`.   -  ===>//      2. Return the value.
      = = = = = = = =

## Characteristics:

- An algorithm should have well defined inputs and outputs.
- Each step should be clear and unambiguous.
- Language independent.

## Whay Algorithms?

1. As a developer you are going to come across problems that you need to solve.
2. Learning algorithms translates to learning different techniques to efficiently solve those problems.
3. One Problem can be solved in many ways using different algorithms.
4. Every algorithm comes with its own tradeoffs when it comes to performance.

## Algorithm Analysis:

1. There are multiple ways to solve one problem.
   -- EX: There are multiple algorithms to sort a list of numbers.
2. How do we analyse which one of them in the most efficient algorithm?
   -- Generally, when we talk about performance, we use an absolute measure.
   --- If I run 100 meters in 12 seconds, I'm faster than someone who takes 15 secondes.

## Algorithm analysis contd:

*The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors.*

    - Programming language used to implement the algorithm.
    - The computer the program runs on.
    - Other programs running at the same time.
    - Quality of the operating system.

*We evaluate the performance of an algorithm in terms of its input size.*

    - Time Complexity => Amount of time taken by an algorithm to runs, as a function of input size.
    - Space Complexity => Amount of memory taken by an algorithm to run, as a function of input size.

## How to represent complexity:

### Asymptotic notations.

  - Mathematical tools to represent time and space complexity.

        1. Big-O Notation (O-notation) - Worst Case Complexity. ✅
          -- This represents the worst-case performance for an algorithm, setting an upper bound on how slow your code can be.
          -- It’s noted as O(n²).
        2. Omega Notation (Ω-notation) - Best Case Complexity. ❌
          -- This represents the average, typical case performance for an algorithm.
          -- It's noted as Θ(n×p).
        3. Theta Notation (Θ-notation) - Average Case Complexity. ❌
          -- This represents the best case performance for an algorithm, setting a lower bound on how fast the code can perform.
          -- It's noted as Ω(n) .

        At all: - Big O (O()) describes the upper bound of the complexity.
                - Omega (Ω()) describes the lower bound of the complexity.
                - Theta (Θ()) describes the exact bound of the complexity.

#### Big-O Notation:
*The worst case complexity of an algorithm is represented using the Big-O notation.*

*Big-O notation describes the complexity of an algorithm using algrbraic terms.*

*It has two important characteristics.*

    - It's expressed in terms of the input.
    - It focuses on the bigger picture without getting caught up in the minute details.

#### Big-O calculation contd.:

  EX1: 
      
      function summation(n){      Time Complexity 
        return (n*(n+1)) / 2;     O(1) - Constant
      }

  EX2: 
      
      function summation(n){      Time Complexity 
         let sum =0;              O(n) - Linear
         for(let i = 1; i <= n; i++){
          sum += i;
         }
         return sum;
      }
  
  EX3:

      for(let i=1; i<=n; i++){    Time Complexity 
        for(let j=1; j<=i; j++){  O(n^2) - Quadratic
          // Some Code
        }
      }

  EX4:

    for(let i=1; i<=n; i++){      Time Complexity
      for(let j=1; j<=i; j++){    O(n^3) - Cubic
        for(let k=1; k<= j; k++){
          // Some Code
        }
      }
    }

  EX5:

    If input size reduces by half every iteration
      - Time Complexity = O(longn) - Logarithmic

### Space Complexity:

    O(1) - Constant
    O(n) - Linear
    O(logn) - Logarithmic

### Few Points to note:

1. Multiple algorithms exist for the same problem and there is no one right solution.
   Different algorithms work well under different constraints.
2. The same algorithms with the same programming language can be implemented in different ways.
3. When writing programs at work, don't lose sight of the big picture. Rather than writing clever code,
   write code that is simple to read and maintain.

### Objects - Big-(o):

*An object is a collection of key value pairs.*

  EX:
    
    const person = {
      firstName: 'Ahmed',
      lastName: 'Hesham'
    }

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search - O(n)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)

### Array - Big-O:

*An array is an order collection of values.*

  EX:

    const odd = [1, 3, 5, 7, 9];

- Insert / remove at end - O(1)
- Insert / remove at beginning - O(n)
- Access - O(1)
- Search - O(n)
- Push / Pop - O(1)
- Shift / unShift / Concat / Slice / Splice - O(n)
- forEach / map / filter / reduce - O(n)

### Math Algorithms:

- Fibonacci Sequence.
- Factorial Of A Number.
- Prime Number.
- Power Of Two.
- Recursion.
- Fibonacci Sequence With Recursion.
- Factorial Of A Number With Recursion.

### Recursion:

*Recursion is a problem solving technique where the solution depends on the solutions to smaller in stances of the same problem.*
*Recursion is when a function calls itself.*

#### Why?

- A great technique to simplify your solution.
- If you find yourself breaking down your problem into smaller versions of the same problems, recursion is very useful.

Analogy:

                                                    ----------
                                                    - Princpal -
                                                    ----------
                                                         ^ 
                                    ------------                   ------------
                                    - Professor B -<------------->- Professor B -
                                    ------------ 100           100 ------------
                                ^                                               ^
              ------------           ------------              ------------           ------------
              - Teacher A -<------->- Teacher B -              - Teacher C -<------->- Teacher D -
              ------------ 50     50 ------------              ------------ 50     50 ------------

### Few points about recursion:

1. Every Recursion solution needs to have a base case - a condition to terminate the recursion.
2. Recursion might simplify solving a problem but it does not always translate to faster solution.
   A recursion solution maybe far worse compared to an iterative solution.
3. Recursion is a topic that is not the most straight forward to understand.
   Don't give up if you struggle with the concept.

### Sorting Algorithms:
- Bubble Sort.
- Insertion Sort.
- Quick Sort.
- Merge Sort.