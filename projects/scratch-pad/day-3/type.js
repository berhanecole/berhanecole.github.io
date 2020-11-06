// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //we want a function that returns if our array is an array. We cannot use our typeof 
    //operator since it will return object so we will use the Array.isArray() function. 
    //We format it as an if statement. returning true if our Array.isArray() function 
    //resolves as true else returns as false.
    
    if (Array.isArray(value)){
        return true;
    } else {
        return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //we need to make a function tjhat determines if a object is an object and not 
    //an array, date, or Null value.
    //We want to start by formulating an if statement
    
    /**the first first thing we are checking for is if our object is an array. In order
     * to do this we use the Array.isArray() prooperty built into arrays. We return false
     * if our object is not an array. 
     * The next value we check for is the null value. If our value isn't strictly equal to 
     * null we return false.
     * Subsequently we check to see if our object is actually a Date. In order to do this we 
     * use the instanceof operator which checks if this our value is a Date. Then we return 
     * false
     * Now we can use the typeof value to check if our value is strictly equal to "object"
     * null Date and Arrays will flag as object if using the typeof operator so we check to
     * see if any of those are true before we check to see if our type of value is an object
     * lastly in case we get any value that is of any other type in our parameter e.g. strings
     * booleans, numbers etc we return false.
    */
    if(Array.isArray(value)){
        return false;
    } else if(value === null){
        return false;
    } else if(value instanceof Date){
        return false
    } else if(typeof value === "object"){
        return true;
    } else {
        return false;
    }
     
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //we are seeing if our input value type is a collection i.e. an array or object
    //we can copy and past our above code here and change the Array.isArray(value)
    //to return true because arrays are collections. We have to do this before we deal
    //with seeing if the typeof value === object resolves to true because arrays are
    //objects to the typeof property so we need to declare an array is an array first.
    
      if(Array.isArray(value)){
        return true;
    } else if(value === null){
        return false;
    } else if(value instanceof Date){
        return false
    } else if(typeof value === "object"){
        return true;
    } else {
        return false;
    }
     
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    /** with this function we want to return the value type as a string
     * to do this we can make an if else if chain including some of our 
     * functions  we have done earlier in this problem as our conditions.
     * I'll start with is Array
     */
     
     if(isArray(value)){
         return "array";
     } else if (isObject(value)){
     //next ill check if the value is an object
        return "object";
     } else if (value === true || false){
     //next I check for a boolean
        return "boolean"
     } else if (value === null){
     //next I check for a null value
        return "null"
     } else if (value instanceof Date){
         return "date"
     //next I will check if the input value is a date
     } else {
         return typeof value;
     }
     //lastly I will use the type of operatro to handle everything else.
     //I could have checked for boolean values at this step as well.
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
