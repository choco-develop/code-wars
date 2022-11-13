/**Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){ 
    return x.reduce((a,c)=>a+(+c),0)
     
   }
   /**How to convert a string to a number in JavaScript using the unary plus operator ( + ) The unary plus operator ( + ) will convert a string into a number. The operator will go before the operand. We can also use the unary plus operator ( + ) to convert a string into a floating point number. */