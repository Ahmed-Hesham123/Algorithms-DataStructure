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