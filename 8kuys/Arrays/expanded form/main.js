/**You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
    // Your code here
     return num.toString().split('').reverse().map((x,y)=>x* Math.pow(10,y)).filter(x=>x>0).reverse().join(' + ')
  
  }