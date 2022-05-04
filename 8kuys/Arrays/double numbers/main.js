/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/

function nums(arr){
    let doubled=arr.map((doubleNum)=>doubleNum+doubleNum)
    return doubled;
}

