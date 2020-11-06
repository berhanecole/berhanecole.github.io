// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //use .length method to get the length property of the string
    
return string.length

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

//the .toLowerCase method lower cases the string. Here I use that method for the function
return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //the .toUpperCase method lower cases the string. Here I use that method for the function


return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
/** With this function I need to lowercase the string I am provided and also
 * separate the spaces with dashes. I can do this by utilizing my toLowerCase 
 * function as well as the split and join methods. I learned here you can combine
 * all a function and two methods in the same return statement;
 */
 
 return toLowerCase(string.split(" ").join("-"))

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
/**with this function we need to use bracket notation to get the first index 
 * of a string and see if its equal to the firs character in an argument
 * regardless of it is lower or uppercase. 
 * in order to do this we use an if, else if, else statement
 * we take index 0 and make sure it is equal to char as our if statement
 * we then use our toLowerCase function to make index 0 lowercase and check
 * to make sure it is equal to char as our else if statement
 * if neither is true we put false as our else statement
 * */
 
    if(string[0] === char){
        return true;
    } else if (toLowerCase(string[0]) === char){
        return true;
    } else {return false}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    /** With the following function we use basically the inverse of the beginsWith
     * function. Somehow we should use the index of .length - 1 of the string to 
     * access the last index of the string. We must use the toLowerCase function as well
     * to return true if char is same regardless of tense. We Also need to use the toUpperCase
     * function to check the uppercase tense
     * 
     */

  if(toUpperCase(string[string.length - 1]) === char){
        return true;
    } else if (toLowerCase(string[string.length - 1]) === char){
        return true;
    } else {return false}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//use the plus operator to concatenate two strings

return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    /**given any number of strings return them as one string. To do this we must
     * create a for loop that iterates through an array of all our arguments (strings)
     * and concantenates them into one long string.
     * To do this I think I need to use a for loop to iterate through an array.
     * The array I am looping through is args and since I do not know how big the array
     * is I need to use the .length - 1 property to tell my for loop where to stop.
     *
     
     for( var i = 0; i < args.length; i++){
         return concat(args[i]);
     }
     */
     return args.join('');



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

/**return longest string. We can use an if statement and a comparison operator to 
 * to return the longest of the strings.
 */
 
 if (stringOne.length > stringTwo.length){
     return stringOne;
 } else {return stringTwo;}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    /** we must use the sort method to sort values in ascending order. 
     * the next issue in this problem is we want to return different things
     * depending on which string is higher in alphabetical order.
     * we want to return 1 if string 1 is higher in alphabetical order
     * we want to return -1 if string 2 is higher in alphabetical order
     * we want to return 0 if they are equal
     * to do this we need an if else if else statement 
     * first I want to create an array of my strings.
     */
     var myStrings = [stringOne, stringTwo];
    /** I created an array so I can access each string value as an index when I 
     * do subsequent steps. This helps me to see where each string is in the order
     * of the array.
     * Next I use the sort method to alphabetically order the strings.
     * After this I construct my if else if else statement. 
     * I see if index 0 of myStrings array is whatever string value and I return 
     * the value given in the instructions to correspond with where the string is.
     * you can also do this by using the character code.
     */
     myStrings.sort();
     if (myStrings[0] === stringOne && myStrings[0] === stringTwo){
         return 0;
     } else if (myStrings[0] === stringOne){
         return 1;
     } else {
         return -1
     }
    



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
/** I can use the method I used above and simply change the bracket notation to index 1 to get the answer.
 */
 
 var myStrings = [stringOne, stringTwo];
  myStrings.sort();
     if (myStrings[0] === stringOne && myStrings[0] === stringTwo){
         return 0;
     } else if (myStrings[1] === stringTwo){
         return -1;
     } else if (myStrings[1] === stringOne){
         return 1;
     }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
