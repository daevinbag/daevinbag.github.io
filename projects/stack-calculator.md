---
layout: project
type: project
image: img/image_2024-01-17_181717109.png
title: "Stack Calculator"
date: 2023
published: true
labels:
  - Computer Science
  - Java
summary: "A calculator using stacks."
---

#### What does it do?

The stack calculator is exactly what it sounds like it does basic math equations using stacks. I made this program  in my ICS 211 class and it can perform addition subtraction multiplication and division. The program essentially does math in postfix where it can take 2 numbers, perform the math operator on them, push the number back onto the stack, and continue this process until the user enters '=' to end it. I think this assignment was very helpful for me to understand both how stacks work and how math operations in postfix work. 

Example of the output when performing a couple of operations:

<img class="img-fluid" src="../img/image_2024-01-17_182043297.png">

One major part of this assignment was making an ArrayStack class to store the numbers in. I had to make the push, pop, and peek functions of a typical stack and had to make sure that I didn't violate any of the invariants as I performed them as well as keeping track of what size my stack was at, where the top was, and catching any errors along the way. Then I used this ArrayStack class that I made to implement a StackCalculator that had to keep track of what was input by the user to make sure that it was either a number or an operator, and if it was an operator to make sure that there were 2 numbers in the stack to perform the operator on.

Overall, I think that this assignment was very interesting and helpful in learning how stacks work. They are fairly simple to understand on a surface level but having to go through the invariants and catching various errors helped me understand stacks beyond just the surface level and made me quite familiar with them. Also being able to make a program that can take user input, although  very basic, is always very exciting for me as I prefer making programs that can vary depending on the user input instead of just having something that does the same thing every time.
