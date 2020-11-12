/**
 * LOOPS
 * 
 * BOTTOMLINE: Loops like Control Flow are ways that programmers use the program 
 * to evaluate data and behave a certain way without direct input according to that 
 * data. In fact, Loops utilize Control Flow to achieve this. The goal of loops is 
 * to iterate through data and implement certain code related to that data according
 * to conditions programed by the programmer.
 * 
 * 0. There are three loops we will discuss here the for loop, the for-in loop/
 * for-of loop, and the while loop.
 * 
 * 1. for loops iterate through sequenced data. They are most often used to iterate 
 * through arrays and perform actions throughout. In order to do this the programmer
 * inputs start and stop conditions for the loop and sets an increment or decerement
 * to the variable they designate to iterate through the array. this variable is most
 * commonly i. After the condition is set, a code block is designated. As long as
 * the conditions set before the code block resolve to the boolean true, the code block
 * will execute.
 * 
 * variable i iterates through the array at the array's INDEX
 * 
 * This syntax is for(var i = value, i (//some comparison operator) anotherValue;
 * i (increments or decrements)){ //code block}. 
 */
 
 // for loop //
 
 let add2 = [2, 4, 6, 8, 10];
 for(var i = 0; i < add2.length; i++){
     add2[i] += 2}
 console.log(add2);
 // prints => [ 4, 6, 8, 10, 12 ]
 
 // iterating backwards with for loop //
 let div2 = [20, 40, 60, 80, 100];
 let quotientArray = [];
 for(let i = div2.length - 1; i >= 0; i--){
     quotientArray.push(div2[i] /= 2);}
 console.log(quotientArray);
 // prints => [ 50, 40, 30, 20, 10 ]
 
 /**
 * 2. for-of loops operate similarly to for loops albeit with syntax that resembles
 * the for-in loop. The difference between for loops and for-of loops is that with
 * for loops you do not necessarily need to iterate through an entire array in a 
 * specific way. for-of loops are more restrictive. You must iterate through the 
 * entire array.
 * 
 * The Syntax is for(var element of array){//code block}
 */
 
// for of loop //
let sumArray = [];
let add3 = [3, 6, 9];
 for(var element of add3){
     sumArray.push(element + 3);
 }
console.log(sumArray);
// prints => [6, 9, 12]

 /**
 * 3. for-in loops are used to iterate through key value/pairs within objects. The
 * syntax is virtially the same as for-of loops replacing the element with key and
 * the of with in. For-in loops can be used to search through objects and interact
 * with the object's properties.
 * 
 * i.e.: for(var key in object){//code block}
 */
 
 // for in loop //
 let ride = {make: "Jeep", model: "liberty", year: 2007, operational: true};
 for(let key in ride){
  if(key === 'year'){
   ride.year = 2019;
  }
 }
 console.log(ride);
 //prints => { make: 'Jeep', model: 'liberty', year: 2019, operational: true }
 
 /**
 * 4. while loops work similarly to for loops but the programmer declares and initializes
 * the value of the variable that will iterate outside of the while function. The syntax
 * is also slightly flipped compared to for loops. 
 * 
 * The syntax is while(ending condition){//code block; //increment or decrement;}
 */
 
 // while loop //
 
let numI = 1;
while (numI <= 3) {
console.log("The number is " + numI);
numI++;
}

/**prints => 
 * The number is 1
 * The number is 2
 * The number is 3
 */
 