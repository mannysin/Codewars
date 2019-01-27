/*
Problem:
Write a function called whatday() which returns the day according to the number

1 returns 'Sunday'

2 returns 'Monday'

3 returns 'Tuesday'

4 returns 'Wednesday'

5 returns 'Thursday'

6 returns 'Friday'

7 returns 'Saturday'

if it's not a number between 1-7 return "Wrong, please enter a number between 1 and 7"

My approach:

Make a switch/case statement with each num case and the corresponding day of the week with each case. Default value will be anything besides those numbers.

*/

function whatday(num) { 
    switch(num) {
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday"
            break;
        case 3:
            return "Wednesday"
            break;
        case 4:
            return "Thursday"
            break;
        case 5:
            return "Friday"
            break;
        case 6:
            return "Saturday"
            break;
        case 7:
            return "Sunday"
            break;
        default:
          return "Wrong, please enter a number between 1 and 7"
    }
}


/* Test Cases
describe( "whatday", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(whatday(1),'Sunday')
    Test.assertEquals(whatday(2), 'Monday')
    Test.assertEquals(whatday(3),'Tuesday')
       Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
    Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')

      });
});
*/

whatday(1) //outputs: Sunday

/*
Best Practice:

function whatday(num) { 
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}

*/