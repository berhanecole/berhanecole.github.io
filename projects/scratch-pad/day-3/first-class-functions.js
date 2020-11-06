// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /** We want to create a function that is a greater than filter, meaning we want
     * an umbrella function we can assign in with different base numbers to be able to
     * push functions into to be able to tell if the succeeding arguments of these new 
     * functions are greater than the new assigned function.
     * to do this we create an additional function within our createGreaterThanFilter
     * function. This function is anonymous.
     * Within this function we have a new parameter dubbed value. We then create an if
     * statement that compares the values of the value and the base parameters of these
     * two parent/child functions. We return true or false depending on how our logic 
     * resolves.
     */
    
    return function(value) {
        if (value > base) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //we can recreate our code from above here and change the comparison operator as 
    //the functions are doing essentially the same thing but now we want to know if 
    //our child parameter is less than.
    
    return function(value) {
        if (value < base) {
            return true;
        } else {
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
/** here we want to return a function that test whether a character is the first character 
 * in a string. With this I'm assuming we are looking for a boolean value. I'll create an
 * anonymous function that asks if a string parameter lets say givenString[0] === startsWith
 * if this is true return true otherwise return false.
 * 
 * originally i did this without paying attention to case and I got an error so I changed
 * my statement to be change the case as I need while keeping the strictly equal sign
 */
    
    return function(givenString){
        if (givenString[0] === startsWith.toUpperCase()){
            return true;
        } else if (givenString[0] === startsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //here we can copy and paste our code from above and just change the index of 
    //given string to reflect we are accessing the last index of the string
    
        return function(givenString){
        if (givenString[givenString.length -1] === endsWith.toUpperCase()){
            return true;
        } else if (givenString[givenString.length - 1] === endsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    /** parameters are an array of strings and a function designed to modify a string.
     * we want to return an array of the strings modified. First question is how do you 
     * return an array of strings modified. You need to iterate through an array using a 
     * loop. Now that I know that what is this question asking? It seems to me we are 
     * thinking about how to use a function as a parameter. I'm gonna start by putting
     * together a for loop.
     * 
     * I need a variable to push the new values into so I create a modified strings variable
     * which is an array literal. 
     * 
     * Inside my function for my code block I push the values of modify(strings[i]) into
     * modified strings to create a new array with my new values. I return modified strings
     * in the end.
     */
     var modifiedStrings = [];
     for (var i = 0; i < strings.length; i++){
          modifiedStrings.push(modify(strings[i]));
     } 
     
     return modifiedStrings
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    /**for (var element of array){} -- for loop syntax
     * 
     *
     * So we need to loop a test through an array of strings check if each string passes
     * and return true if all strings pass. So the test is a function that takes a string
     * (index of the strings parameter) and returns a boolean value. We need all of the 
     * tests to pass to return a value of true. Im thinking we're going to need to create 
     * an array variable to push in all the boolean values from our array of strings. Then we 
     * may need to loop again.
     * 
     * to start I'll create a var tested strings
     */
     
     var trueOrFalse = [];
     
     //next i'll use a for loop to loop through our strings array and push values
     //from the strings into the trueOrFalse array
     
     for (var i = 0; i < strings.length; i++){
          trueOrFalse.push(test(strings[i]));
         
     }
     
     //now trueOrFalse contains all true or false values now we must check if all the statements
     //are true so that we can return the boolean true for the function.
     
      
      return trueOrFalse.every(v => v === true);
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}