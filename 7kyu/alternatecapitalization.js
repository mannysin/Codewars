/*
Problem:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

My approach:

Split string s.

Iterate through split string with a for each loop.
Check if odd index is divisible by 2, if so, make uppercase and push to first string array.
Check if even index is divisible by 2, if so, make uppercase and push to second string array.


Finally, join both string arrays result variable and return result.

*/

function capitalize(s){
    let stringArray = s.split('')
    let resString1 = [], resString2 = []

        stringArray.forEach((letter,index)=>{ index%2===0? resString1.push(letter.toUpperCase()) : resString1.push(letter)})
        stringArray.forEach((letter,index)=>{ index%2===0? resString2.push(letter) : resString2.push(letter.toUpperCase())})

            return [resString1.join(''),resString2.join('')];
};


/* Test Cases
describe("Basic tests", function(){
Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
});
*/

capitalize("abcdef") // outputs: ['AbCdEf', 'aBcDeF']

/*
Best Practice:

function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

*/