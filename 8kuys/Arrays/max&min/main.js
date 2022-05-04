/*Your task is to make two functions (max and min, or maximum and minimum, etc.,
 depending on the language) that receive a list of integers as input and return, respectively,
  the largest and lowest number in that list.*/
function max(list){
    let first=list.sort((a,b)=>a-b)
    let highest =first[0]
    let last=list.sort((a,b)=>b-a)
    let lowest =last[0]
    return `the lowest is ${highest} and the highest is ${lowest}`
}
