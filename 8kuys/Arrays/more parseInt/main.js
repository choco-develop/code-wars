/**You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number. */

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      let age=inputString.charAt(0)
      age=parseInt(age,10)
       return age
    }
    //they all work the same way

    function getAge(inputString){
        // sincxe parseInt only works on numbers,it will only return the number in the string
          return parseInt(inputString)
        }
        function getAge(inputString){
            //10 is added to specify the base of the integer...hence parseInt is used to convert binary to base 10
              return parseInt(inputString,10)
            }