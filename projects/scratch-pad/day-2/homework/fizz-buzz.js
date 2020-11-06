// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//write a function that counts from 1 - 100 by using a for loop
for(var i = 1; i <= 100; i++){
    /** within this code block we need to create an if else if else chain or a switch case
     * I will do an if else if else chain here. We need to use the remainder operator here
     * % or modulo. I like to start with the most complicated condition as my first condition so 
     * that is if i % 3 === 0 && i % 5 === 0 console.log("FizzBuzz")
     */
     if(i % 3 === 0 && i % 5 === 0){
         console.log("FizzBuzz");
    //if number is a multiple of 3 i.e the remainder of i % 3 === 0 print Fizz 
     } else if (i % 3 === 0){
         console.log("Fizz");
    //if number is a multiple of 5 print Buzz
     } else if (i % 5 === 0){
         console.log("Buzz");
    //if neither case is true we are just counting to 100 here! console.log(i) for the counter.
     } else {
         console.log(i)
     }
         
     }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}