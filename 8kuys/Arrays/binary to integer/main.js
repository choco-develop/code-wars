/**Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11 */
const binaryArrayToNumber = arr => {
    // your code
    let binary=arr.join('')
    let integer=parseInt(binary, 2)
    return integer
  };

  /**Complete the function which converts a binary number
   *  (given as a string) to a decimal number. */
  function binToDec(bin){
    // ...
    let dec=parseInt(bin,2)
    return dec
    
  }