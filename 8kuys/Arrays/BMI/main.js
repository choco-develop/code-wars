/*Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmiCalculator(weight,height){
    let bmi=weight /Math.pow(height,2);
    let result=''
    if( bmi <= 18.5){result= "Underweight"}
    else if(bmi <= 25.0) {result="Normal"}
    else if (bmi <= 30.0) {result= "Overweight"}
    else if (bmi > 30){result= "Obese"}
    return result
}
