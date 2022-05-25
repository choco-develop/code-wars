/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F* */

function abbrevName(name){

    // code away
  return name.split(' ').map((letter)=>letter.substr(0,1).toUpperCase()).join(".")

}

function abbrevName(name){

    // code away
  return name.split(' ').map((letter)=>letter.charAt(0).toUpperCase()).join(".")

}
function abbrevName(name){

    // code away
  return name.split(' ').map((letter)=>letter[0].toUpperCase()).join(".")

}