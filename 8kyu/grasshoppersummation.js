/*
Problem:
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


My approach:

Write a loop that begins minus 1 of num, then decreases until 1.
Finally, return num plus the total of looped i.

*/

let summation = function (num) {
    for(i = num-1; i >= 1; i--){
        num += i
      }
    
      return num
    }


/* Test Cases
describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
  })
})
*/

summation(8) // outputs 36

/*
Best Practice:

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

*/