/*
Problem:

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples:

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')

My approach:

Set a variable to split at '#' and then return that variable's first item in array.

*/

function removeUrlAnchor(url){
    let newUrl = url.split('#')

    return newUrl[0]
  }
  


/* Test Cases
Test.assertEquals(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');

*/

removeUrlAnchor('www.codewars.com#about') // outputs:

/*
Best Practice:

function removeUrlAnchor(url){
  return url.split('#')[0];
}

*/