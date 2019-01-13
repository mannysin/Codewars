/*
Problem:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number

My approach:

Set a counter variable to count the amount of multiplicative persistent needed to reach a single digit.

Take the argument and turn it into a string, then while the the num length is greater than 1, 
use the .reduce method and convert back to string.
add the counter each time the loop runs.

Finally, return the counter.

*/

function persistence(num) {
    
    let counter = 0;
    num = num.toString();
    while(num.length > 1){
        num = [...num].reduce((a,b) => a * b).toString();
        counter++;
    }
    return counter;
    
}


/* Test Cases:
describe('Initial Tests', function () {
  Test.assertEquals(persistence(39),3);
  Test.assertEquals(persistence(4),0);
  Test.assertEquals(persistence(25),2);
  Test.assertEquals(persistence(999),4);
});
*/

persistence(39) // outputs: 3

/*
Best Practice:
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}


*/