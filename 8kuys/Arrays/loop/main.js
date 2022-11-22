/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/


/*function squareSum(numbers){
  let sqrSum=0;
numbers.forEach((nums)=>{
let sqr=nums*nums;
   sqrSum+= sqr
  
})
return sqrSum;
}
*/ 
function squareSum(numbers){
  let sumSqr=0;
numbers.forEach((nums)=>sumSqr+=(nums*nums))
return sumSqr
}

let numbers=[45,34,78,21,14,94]

/*numbers=numbers.forEach(function(element,index,array){
 console.log(element*2)}
)*/
let newNumbers=[]
numbers.forEach((element)=>newNumbers.push(element*2))
console.log(newNumbers)
let arr=[45,34,78,21,14,94]

arr=arr.forEach(function(element,index,array){
 console.log(element*element)}
)
console.log(arr)
//numbers=numbers.forEach((element)=>console.log(element*2))

/**
 * We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
 */

function arr (N){
  let nums=[]
  for(i=0;i<N;i++){
    nums.push(i)
  }
  return nums
}
