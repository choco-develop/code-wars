/**
 * Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 */

 function getSize(w, h, d){
    let b=2
    let a=b*w*h+b*w*d+b*h*d
    let vol=w*h*d
    return [a,vol]
  }
  