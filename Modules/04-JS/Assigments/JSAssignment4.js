/*
Find the nth Tetrahedral Number
A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

Create a function that takes an integer n and returns the nth tetrahedral number.

Examples:

tetra(2) ➞ 4

tetra(5) ➞ 35

tetra(6) ➞ 56
*/

//Starter code:

function tetra(n){  
  // Calculate the nth Tetrahedral number
  const tetrahedralNumber = (n * (n + 1) * (n + 2)) / 6;

  return tetrahedralNumber;
}

console.log(tetra(2)); //4
console.log(tetra(5)); //35
console.log(tetra(6)); //56

