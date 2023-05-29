/*
Calculate the Factorial of a Number
Return the factorial of a provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function as arguments.
*/

//Starter code:

function factorial(anyNumber) {
    if (anyNumber === 0 || anyNumber === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= anyNumber; i++) {
      result *= i;
    }
  
    return result;
  }
  
  // Test cases
  console.log(factorial(5)); //120
  console.log(factorial(4)); //24
  console.log(factorial(1)); //1
  