"use strict";

const numbers = [23, 56, 78, 11, 44, 89, 33, 67, 7, 92];
//comparing adjacent elems in array and swapping if needed
//flip to b - a for descending order
numbers.sort((a, b) => a - b);

console.log(numbers);
