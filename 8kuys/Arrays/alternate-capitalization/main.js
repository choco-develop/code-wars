/**Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */
function capitalize(s){
    let even=s.split('').map((x,i)=>(i+1)%2!=0?x.toUpperCase():x).join("")
    let odd=s.split('').map((x,i)=>(i+1)%2===0?x.toUpperCase():x).join("")
    return [even,odd];
  };

  //alternative solution
  function capitalize(s){
    let even=s.split('').map((x,i)=>i%2===0?x.toUpperCase():x).join("")
    let odd=s.split('').map((x,i)=>i%2!=0?x.toUpperCase():x).join("")
    return [even,odd];
  };