/*
Problem:
We all love fridays, and even better if it is the last day of the month!

In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

Your work is to return the number of times a month ends with a Friday.

If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

For example, between 1901 and 2000, a month ends on Friday 171 times.

My approach:

Set a counter variable named friday.

Run a nested loop for the year parameters, then all 12 months,
then create a new date instance, then check if that day is a Friday (5).

It it is, increase counter friday by 1.

Finally, return friday counter.

*/

function lastDayIsFriday(initialYear, endYear = initialYear) {

    let friday = 0;
      for(year = initialYear; year <= endYear; year++){
         for(month = 0; month <= 11; month++){
           var days = new Date(year, month+1, 0)
           if(days.getDay() === 5){
             friday++
           }
         }
      }
      return friday
}


/* Test Cases
describe("Function lastDayIsFriday", function(){

  it ("returns a number", function(){
    Test.assertEquals(typeof(lastDayIsFriday(1901, 2000)), "number", "Is not a number"); 
  });

  it ("returns 171 when between 1901 and 2000", function(){
    Test.assertEquals(lastDayIsFriday(1901, 2000), 171, "Not the correct number of Fridays between 1901 and 2000"); 
  });
  
  it ("returns 200 when between 1991 and 2017", function(){
    Test.assertEquals(lastDayIsFriday(1901, 2017), 200, "Not the correct number of Fridays between 1901 and 2017"); 
  });
  
  it ("returns 1 when 1991", function(){
    Test.assertEquals(lastDayIsFriday(1991), 1, "Not the correct number of Fridays in 1991"); 
  });
  
  it ("returns 2 when 2017", function(){
    Test.assertEquals(lastDayIsFriday(2017), 2, "Not the correct number of Fridays in 2017"); 
  });
});
*/

lastDayIsFriday(1901, 2000) // outputs: 171

/*
Best Practice:

function lastDayIsFriday(initialYear, endYear = initialYear) {
  let fridays = 0
  for (let y = initialYear; y <= endYear; y++) {
    for (let month = 0; month < 12; month++) {
      if (new Date(y, month + 1, 0).getDay() === 5) fridays++
    } 
  }
  return fridays
}


*/