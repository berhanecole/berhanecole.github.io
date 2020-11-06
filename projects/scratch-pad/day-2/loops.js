// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  /**try this with a for of loop
   * our parameter is an array and we want to loop through the array
   * printing its console.log throughout.
   * With this problem we can use a for of loop because we want to loop through 
   * the array the entire array.
   * syntax of the for of loop is for(var element of array){//some code}
   */
   for(var element of array){
     console.log(element);
   }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /**loop backwards through your array printing the values in reverse.
   * to do this we can make a for loop and have the for loop begin at array.length
   * - 1 and print backwards from there using console.log and the bracket notation of i
   * -the variable that we are iterating through the array with
   */
   for (var i = array.length - 1; i >= 0; i--){
     console.log(array[i]);
   }
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //we want to take an input object and return an array of only the keys
  //to do this we need to use the for var key in loop
  //we need to start by declaring an object we want to return at the end of this problem
  var objectKeys = []
  //next we make our for in loop with the code block executing a push method to 
  //push each key into our variable objectKeys
  for(var key in object){
    objectKeys.push(key)
  }
  return objectKeys;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /**here we simply want to print our keys
   * in order to do this we use a for in loop
   * and use console.log(key) as our code block
   */
   for(var key in object){
     console.log(key);
   }

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /**i want to print out an array from an object's values so we're going to
   * declare a literal array to push values from the object into a new array
   */
   var objectValues = [];
   /** next I need to create a for in loop that iterates through an object and
    * pushes the object's values i.e. object[key] into the literal array I declared
    */
    
    for(var key in object){
     objectValues.push(object[key])
    }
    //finally return the array objectValues
    return objectValues;
    

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /** for this problem we are printing our values so we can take a for in loop
   * and set its code block to console.log(object[key]) which prints out each value
   * at index key.
   */
   for(var key in object){
     console.log(object[key])
   }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  /** we need to get the length property of an object here. Since objects do not have length
   * properties we need to be creative. We know arrays have an length property so we can push
   * our values into an array and call the array.length to find the length property of an object
   */
   var objectValues = [];
   
   for(var key in object){
     objectValues.push(object[key]);
   }
   return objectValues.length;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  /** for this we want to print our object values in reverse. To do this I want to make an 
   * array and push my values into it. After I do that I can go a couple different ways but 
   * i think I'll make a for loop on the object that console.logs the values in reverse order.
   * I start by making my array literal and using a for in loop to push in values.
   */
   
   var objectValues = [];
   
   for(var key in object){
     objectValues.push(object[key]);
   }
   /** once my objectValues array has its values I make a for loop that iterates backwards through
    * my array by setting variable i to the .length property - 1 and as long as we dont go past 0 
    * i decreases. The code block I execute is console.log on each of the values at the i index.
    */
    
   for(var i = objectValues.length - 1; i >= 0; i--){
     console.log(objectValues[i]);
   }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
