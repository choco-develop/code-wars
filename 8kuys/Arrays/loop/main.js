/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/


function squareSum(numbers){
  let sqrSum=0;
numbers.forEach((nums)=>{
let sqr=nums*nums;
   sqrSum+= sqr
  
})
return sqrSum;
}

function squareSum(numbers){
  let sumSqr=0;
numbers.forEach((nums)=>sumSqr+=(nums*nums))
return sumSqr
}

