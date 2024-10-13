Understand:
A box with buttons for digits 0-9 and the basic math operators +-*/. Pressing these buttons will add their value to a display in the box. The order in which the values of the buttons will be added is: (Number 1) (Operator) (Number 2), after this the outcome will be displayed.

Plan:
UI: a calculator (big rectangle div, with a smaller display div and buttons)
Input: numbers, operators, remove/operate
Output: outcome of equation

Pseudocode:
layout for calculator (give every button the right id)
functions for the following math operators (make sure they work with the specified inputs in mind):
- add
- subtract
- multiply
- divide
three variables for each part of the equation: Number 1, Operator, Number 2
function operate() that will process the two numbers and the operator when the equals button gets clicked
maybe declare a variable that will hold the outcome which then can be used as Number 1 of the next equation
function clear() that removes the input (from the variables)
