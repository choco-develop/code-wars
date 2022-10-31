/**
 * When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
 */

function position(letter){
    //Write your own Code!
      let index=0
    let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"]
     alphabet.forEach((x,y)=>{
      if (letter==x){
        index=y+1
      }
    })
      return `Position of alphabet: ${index}`
    }
    