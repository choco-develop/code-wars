/**You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

FUNDAMENTALSARRAYS */

function smallEnough(a, limit){
    let b= a.filter((x)=>x<=limit)
    return a.length===b.length? true:false
    }

    //every is a js method that returns a boolean.
    //it tests whether the e3lements in the array meets the conditions specified in the function

    function smallEnough(a, limit){
        return a.every(x => x <= limit);
      }