/**Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */

function distinct(a) {
    return[  ...new Set(a)] ;
  }
  //...new Set() return a list in an original array without duplicate
  //the () holds original array
  //[] is used to put in the new list into an array 
  