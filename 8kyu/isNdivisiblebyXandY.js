/*
Problem:
Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y.
All inputs are positive, non-zero digits.

Example:
isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
isDivisible(100,5,3)--> false because 100 is not divisible by 3
isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

My approach:

Set two consts for the modulus division of first num(x) and second num(y).
Check if both divisions equal 0, if so, return true. 

*/

function isDivisible(n, x, y) {
    const oneNum = n % x 
    const twoNum = n % y

    if (oneNum === 0 && twoNum === 0){
      return true
    } else {
      return false
    }

}


/* Test Cases
Test.assertSimilar(isDivisible(3,3,4),false);
Test.assertSimilar(isDivisible(12,3,4),true);
Test.assertSimilar(isDivisible(8,3,4),false);
Test.assertSimilar(isDivisible(48,3,4),true);
*/

isDivisible(12, 3, 4) // output: true

/*
Best Practice:

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

*/