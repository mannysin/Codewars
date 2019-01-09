/*
Problem:
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).


My approach:

Set a variable set to the base cost.

Set up different conditionals based on days rented.

Finally, return the value depending on the condition.

*/

function rentalCarCost(d) {
    const base = 40
        if (d >= 7){
            return d * base - 50
        }
        if (d >= 3) {
            return d * base - 20
        }
        if (d < 3) {
            return d * base
        }
}


/* Test Cases
Test.describe("Regular Tests:", function() {
  Test.it("Should work for under 3 days:", function() {
    Test.assertEquals(rentalCarCost(1), 40);
    Test.assertEquals(rentalCarCost(2), 80);
  });
  Test.it("Should work for under 7 days:", function() {
    Test.assertEquals(rentalCarCost(3), 100);
    Test.assertEquals(rentalCarCost(4), 140);
    Test.assertEquals(rentalCarCost(5), 180);
    Test.assertEquals(rentalCarCost(6), 220);
  });
  Test.it("Should work for 7 or more days:", function() {
    Test.assertEquals(rentalCarCost(7), 230);
    Test.assertEquals(rentalCarCost(8), 270);
    Test.assertEquals(rentalCarCost(9), 310);
    Test.assertEquals(rentalCarCost(10), 350);    
  });
});
*/

rentalCarCost(4) //returned 140

/*
Best Practice:

function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if ( days >= 7 ) {
    return 50;
  }
  else if ( days >= 3 ) {
    return 20;
  }
  else {
    return 0;
  }
}

function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}
*/