/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9*/
 function areaOrPerimeter (length,width){
     let area=length* width;
     let perimeter=2*(length +width);
     let result=length===width?area:perimeter;
     return result;
 }
 areaOrPerimeter(5,9)
 areaOrPerimeter(4,4)
