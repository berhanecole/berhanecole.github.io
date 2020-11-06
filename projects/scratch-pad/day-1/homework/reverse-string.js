// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    /** we want to create an array literal to push our strings index values into.
     */
     
     var backwardsChars = []
     
     /** next we want to use a for loop to push in values from our string's index as 
      * indexes in our array
      */
       for (var i = input.length; i >= 0; i--){
       backwardsChars.push(input[i])  
       };
       
       /** once the i loop completes backwardsChars should have the input in backwards. 
        * next we use the .join function on backwardsChars and we should get what we want.
        */
        
        return backwardsChars.join('');
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}