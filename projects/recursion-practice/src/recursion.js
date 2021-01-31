// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n) {
  //base case
  if(n === 1 || n === 0){
    return 1
  } else if (n < 0){
    return null;
  }
  
  //recursive case
  return n * factorial(n - 1)
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case
  if(array.length === 0)
  return 0;
  
  //recursive case
  return array[0] + sum(array.slice(1));
  
  
};

//AUDIT
// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
   let nest = [];
  if(array.length === 0){
    return 0
  } else if(Array.isArray(array[0])){
    let nest = array[0]
    return arraySum(nest) + arraySum(array.slice(1))
  }
  
  
  return array[0] + arraySum(array.slice(1)) 
};

// 4. Check if a number is even.

var isEven = function(n) {
  
  // base case
 if (n === 1){
   return false;
 } else if (n === 0){
   return true;
 } else if (n < 0){
   return isEven(n + 2);
 }
 
 return isEven(n - 2);
  
  //recursive case
  
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){
    return 0;
  } else if (n < 0){
    return sumBelow(n + 1) + (n + 1);
  }
  
  return sumBelow(n - 1) + (n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]


var range = function(x, y) {
  let ranger = [];
  if (x === y){
    return ranger.concat(ranger);
    
  }
   else if(x === y - 1){
    return ranger;
    
  } else if( x > y){
    if(x - 1 !== y ){
    ranger.push(x - 1)};
    return ranger.concat(range(x - 1, y));
    
  } else if (x < 0 && x < y){
    ranger.push(x + 1);
    return ranger.concat(range(x + 1, y));
    
  }
  ranger.push(x + 1);
  return ranger.concat(range(x + 1, y));
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
/**so we have two imput params which are both numbers base and   
 * exponent... 
 * output should be a number
 */
 
//base case
// let powerOf = null;
if(exp === 0)
// && base^exp === 1
{ return 1 
  
  } else if (exp > 0){
    // base * base;
      return base * exponent(base, exp - 1);
     
    
  } else if (exp < 0){
    // 1/base * 1/base;
    return 1/(base * exponent(base, exp * -1 - 1));
    
  }
  
  // return base * exponent(base, exp - 1);
  
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
// so power of two means if n reaches 1 by continuously dividing n by two it is a power of two
// n === 1 should be our base case and it  should  return 
  
    if (n === 1){
        return true}
    else if (n > 1){
        return powerOfTwo(n/2)}
    else{
        return false}
  
  
};





// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
 if(string.length === 0){
    return string
     
  }
  return reverse(string.slice(1)) + string[0]
};



// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //so we want to return true or false whether or not a word repeats its letters backwards from the middle 
  //an example would be H A N N A H 
  
  //I chose string.length === 1 because if I am taking two letters(one from  beginning and one from end) if
  //strings length === 0 the word has an even number of characters, if its 1 the number is odd. Since we are using
  //the slice method we're hitting 1 first. 
  // match in either case the word is a palindrome.
  
  
  let protoStr = string.toLowerCase().split(" ").join("");
  
 if(protoStr.length === 1) {return true;
 
 // when length is at two we will compare the first and last element to see if they are equivalent. Their
 // result is our boolean statement
 
   } else if(protoStr.length === 2){ return protoStr[0] === protoStr[1];
   
 //here is our recurasice call; if the first and element are equivalent we return the string modified with the
 // elements that passed lopped off. 
   
   } else if(protoStr[0] === protoStr.slice(-1)){ return palindrome(string.slice(1,-1));
   
// if nothing is true resolve to false
   } else {
    return false;
    
   }

};


//AUDIT
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var modulo = function(x, y) {
if(x === 0 && y === 0){
    return NaN;
  } else if(y === 1 || x === 0 || x === y){
    return 0;
  } else if(x < 0 && y > 0 && -x > y){
    return modulo(-x, y); 
  } else if(x < 0 && y > 0 && -x < y){
    return x;
  } else if(x < 0 && y < 0 && y < x){
    return x;
  } else if(x < 0 && y < 0 && x < y){
    return -modulo(-x, -y) ;
  } else if(y > x && x > 0){
    return x;
  } 
  
  return modulo(x -= y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

//you'd need to use addition so multiplication at its root is one number added to
//another number times. To make our base case we would need to think about where we want
// all this to end... and what we want to return in that case. so when y === 1 we want to
// return x because that's the last time we'll want to add x to x

var multiply = function(x, y) {
  

if(y === 0){

   return 0;
   
 }  else if(x < 0 && y < 0){
  return -x + multiply(x, y + 1);
   
 } else if(x < 0){
  return  multiply(x, y - 1) + x;

} else if(x === 0){
  return 0;
}

return  x + multiply(x, y - 1);

};

//AUDIT
// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.   // remainder += (x - y);
var divide = function(x, y, remainder = 0) {
  if(x === 0 && y === 0){
    return NaN;
  
  }else if (x < y){
  
    return remainder;
  } else if(x < 0 && y < 0){
    return divide(-x, -y, remainder)
  } else if (x >= y){
    x -= y
    remainder ++;
  
  
  return divide(x, y, remainder);}


};

//AUDIT
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y, commonD = 0, count = 0) {
  
  // if x and y are 0 the gcd is 0
  if(x === 0 && y === 0){
    return 0;
    
  // if count reaches x / base case / and is a denominator of x  
  // x is the gcd
  } else if (count === x && y % x === 0){
    return x;
    
  //if count reaches x / base case / and is not a denominatore return
  // the commonD or greatest common denominator
  } else if (count === x && y % x !== 0){
    return commonD;
  
  //if the x is zero return y as it is the greatest common denominator
  }  else if (x === 0){
    return y;
    
  //if y is zero return x as it is the greatest common denominator
  } else if (y === 0){
    return x;
  
  //if either argument is negative return null
  } else if (x < 0 || y < 0){
    return null;
    
  //if x is greater that y shift variables around so x is alwaws less than y so we 
  //we reach the base case
  } else if(x > y){
    let z = y;
    y = x;
    x = z;
  
  //if count is a modulo of x and y it becomes the gcd as we increment
  } else if(x % count === 0 && y % count === 0){
    commonD = count;
  }
  count++;
  
  //recursive case;
  return gcd(x, y, commonD, count);
  
};
  








// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  /** Output= Boolean
   * 
   * we want a base case of 0 and we want to return true
   */
   
   if(str1.length + str2.length === 0){
     return true;

  // } else if(str1.length !== str2.length){
  //   return false;
     
  } else if(str1.length + str2.length === 2){
     return(str1[0] === str2[0]);
     
  } else if(str1.length + str2.length >= 2){
  
     return compareStr(str1.slice(1), str2.slice(1));
     
  } else {
     return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
let stray = [];
  if(str === ""){
    return stray;
  } else if (str.length >= 1){
    stray.push(str[0]);
    return stray.concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //so we are taking an array and deleting an element each recursion until there is only one element left and then
  //we're adding each element to the array. 
  
  //base case if array is empty return the array // base case should return the type of data you want in the end
   if(array.length === 0){ 
     return array;
  }
  
  else if(array.length > 0){
   // when the length has not hit the terminating condition slice off the array barring the first element.
   // when the recursion is over go back and concatenate every element at index 0
     return reverseArr(array.slice(1)).concat(array[0]);
   
  }
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = function(value, length) {
  // what is the terminating condition well we want to return an array ...
  // we want someArray.length to ultimately === length
  // maybe the base case is when length === 0?? and we subtract from it
  
  let listArr = [];
  
  if(length === 0){
    return listArr;
  }
  
  else if(length > 0 && Array.isArray(value) === true){
  return buildList(value, length - 1).concat([value])
  
  
 }  else if (length > 0){
    // listArr.push(value)
    return buildList(value, length - 1).concat(value)
  }
  
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //base case we're cycling through the array and seeing if items === value 
  //we want to add one to every item that meets that..
  //so the base case will be if array.length === 0 
  //I think we want to return value at this terminating condition
  
  let occur = 0;
  
  if(array.length === 0){
    return occur;
  } else if(array.length > 0 && array[0] === value){
  occur++;
  return countOccurrence(array.slice(1), value) + occur;
   
  } else {
  return countOccurrence(array.slice(1), value) + occur;
  }
  
 
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  /**so we want a recursive version of map
   * we want to output a array so we need to return array
   * the base case should be when array.length === 0 because 
   * that when all of the elements will be purged from the array
   * 
   */
     if(array.length === 0){
     return array;
   } 
   
   else if(array.length > 0){
  // when the array is greater than 0 we want to run the callback function 
  //on the element and return the array concatenated with all the values 
  //we don't need to modify the callback function only the array
  return rMap(array.slice(0, -1), callback).concat(callback(array.length));

   }
};


// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2


// var countKeysInObj = function(obj, key, count = 0, keys) {
//   if(!keys){
//   keys = Object.keys(obj);
//   } else if(keys.length === 1 && key === keys[0]){
//     count ++;
//     return count;
//   } else if (keys.length === 1 && key === keys[0]){
//     return count;
//   } else if (key === keys[0]){
//     count++;
//   }
//   return(obj, key, count, keys.slice(1));
// };


var countKeysInObj = function(obj, key) {
let count = 0
for (var prop in obj) {
if (prop === key) {
count++;
} if (obj[prop] instanceof Object) {
 count += countKeysInObj(obj[prop], key, count);
}
}
return count;
}








// var countKeysInObj = function(obj, key) {
// var count = 0;
// for (var prop in obj) {
// if (prop === key) {
// count++;


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for(let prop in obj){
    if(obj[prop] === value){
      count++
    } else if(obj[prop] instanceof Object ){
      count += countValuesInObj(obj[prop], value)
    } 
    // else if(prop instanceof Object){
    //   count += countValuesInObj(prop, value)
    // }
  }
  return count
  };





// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// var replaceKeysInObj = function(obj, key, newKey) {
// for(let prop in obj){
//   if(obj[prop] instanceof Object){
//     replaceKeysInObj(obj[prop], key, newKey)
//   }
//   else if (prop === key){
//     prop = newKey
//   } 
//   else if (prop !== key){
//     prop = undefined;
//   }
// }

// return obj

// var replaceKeysInObj = function(obj, oldKey, newKey, newObj = {}){
// if (typeof obj !== "object") return obj; 
// for (let key in obj) {
//     newObj[key === oldKey ? newKey : key] = replaceKeysInObj(obj[key], oldKey, newKey);
// }
//   return newObj;
// };

var replaceKeysInObj = function(obj, oldKey, newKey) {
  let newObj = {};
for(let prop in obj){
  if (prop === oldKey && typeof obj[prop] !== "object"){
    newObj[newKey] = obj[prop]
  } else if(prop === oldKey && typeof obj[prop] === "object"){
    newObj[newKey] = replaceKeysInObj(obj[prop], oldKey, newKey)
  } else if(prop !== oldKey && typeof obj[prop] !== "object"){
    newObj[prop] = obj[prop]
  } else if(prop !== oldKey && typeof obj[prop] === "object"){
    newObj[prop] = replaceKeysInObj(obj[prop], oldKey, newKey)
}
} return newObj
}




// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.

/**With this problem we need to basically create the fibonacci sequence as an array and 
 * take it to the index provided as n. 
 * 
 * This being the case n === 0 should be our base case and it should return an empty array
 * that we will build up using the recursive calls
 * 
 * so the question is how do we create the fibonacci sequence?? 
 * the sequence starts as [0, 1] //maybe we can write something like if fibArray.length === 1
 * fibArray.length [1] = 1?? 
 * 
 * after the first two elements the fibonacci sequence works as the two preceding elements added together
 * produces the succeding element
 * 
 * i = [ 0, 
 * 0 + 1, 
 * i[1] + i[0] = i[2],
 * i[2] + i[1] = i[3],
 * i[3] + i[2] = i[4],
 * i[4] + i[3] = i[5]]
 * 
 * i[0] will always be 0
 * i[1] will always be 1 or 1 + i[0]
 * 
 * n = how many indices we want of the fib sequence
 * 
 */
var fibonacci = function(i, fibArray = [0, 1]) {
  let nextElement = 0
  
  //our base case if if n === 0 we want to return our fibArray
  
  if (i === 1){
  return fibArray
  
  } 
  
  //edge case for negative inputs
  
  else if(i <= 0){
    return null;
  }
  
  else if(i >= 2){
    nextElement = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    fibArray.push(nextElement)
    return fibonacci(i - 1, fibArray)
  }
  return fibArray
}

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n){
  //base case in this case we want to return a number
  
  // let fibArray = [0, 1];
  
  if (n === 0){
    return n
  }
  
  else if (n === 1){
    return nthFibo(n - 1) + 1
  
  //edge case for negative inputs
  
 } else if(n < 0){
    return null;
  
  
  } else if(n > 1){
    return nthFibo(n - 1) + nthFibo(n - 2)
  }
  

  
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  /** the input is an array of words all lowercase we want an array of words with all the 
   * letters uppercased.
   * 
   * each element is a word so we just need to return the element using the toUpperCase method
   * 
   * our base case should be when the array is empty and we want to return our input in that case
   * 
   * our recursive case should slice the input array and concatenate the input uppercased
   *
   */
   
   if(input.length === 0){
     return input;
   } else if(input.length > 0){
     return capitalizeWords(input.slice(0, -1)).concat(input[input.length - 1].toUpperCase());
   }
};







// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
     if(array.length === 0){
     return array;
   } else if(array.length > 0){
     return capitalizeFirst(array.slice(0, -1)).concat(array[array.length - 1][0].toUpperCase() + array[array.length - 1].substring(1, array[array.length - 1].length));
   }


};



// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10

  var nestedEvenSum = function(obj) {
  let sum = 0
// base case //
if(typeof obj !== "object"){
  return sum
}

for(let key in obj){
  if(typeof obj[key] === 'object'){
    sum += nestedEvenSum(obj[key])
  } else if(obj[key] % 2 === 0){
   sum += obj[key]
  } 
}


return sum
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays, flatArray = []) {

  //base case //
  if (arrays.length === 0){
    return flatArray
  } else if (Array.isArray(arrays[0]) === true){
   flatten(arrays[0], flatArray)
  } else {
    flatArray.push(arrays[0])
  }
  flatten((arrays.slice(1)), flatArray)
  return flatArray
};







// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

  /**Here our base case should be when there are no more characters in our string
   * since our output is meant to be an object we should return obj once string.length
   * === 0. 
   * 
   * We have key value pairs so we're going to need to have the individual characters
   * in each string become a key at some point  
   * 
   * something like
   * 
   * if(obj[string[0]] === undefined){
     obj[string[0] = 1] }
   *
   * to initialize each key[value]
   * 
   * if the key is already present
   * we want something like
   * if(obj[string[0]] !== undefined){
     obj[string[0]] += 1
   }]
   *
   * for our recursive case we want to return something like
   * else if(str.length > 0){
     return letterTally(str - 1, obj) + obj
   }
   * 
   */
   
  var letterTally = function(str, obj = {}) {
   
   
   
  if(str.length === 0){
    return obj;
    
  } else if(str.length > 0 && obj[str[0]] !== undefined){
    obj[str[0]] += 1
    return letterTally(str.slice(1), obj); 
    
  } else if(str.length > 0 && obj[str[0]] === undefined){
    obj[str[0]] = 1
    return letterTally(str.slice(1), obj); 
  }
  
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]


// var compress = function(list) {
//   /**in this case we have duplicates within an array
//   * since we are dealing with an array and we want to return an array
//   * our base case should be 
//   * 
//   * if(array.length === 0){
//     return array
//   }
//   * 
//   * the thing we are checking for is if we have consecutive duplicates
//   * so we're are going to need a way to campare indices right next to 
//   * one another. 
//   * 
//   * also since we want an array that is proceeds the same way our original array did
//   * in our recursion calls we'll need to list.slice(0, -1)
//   * 
//   * once we get our full array we're going to need to use the concat method as well.
//   * 
//   * there may be something with closures here...
//   * 
//   * 
//   */
   
//   if(list.length === 0 || 1){
     
//     return list;
//   } else if(list.length > 1 && list[0] !== list[1]){
//     return compress(list.slice(0, -2).concat(list[0]));
//   } else if(list.length > 1 && list[0] === list[1]){
//     return compress(list.slice(0, -2));
//   }
// }

var compress = function(list, noDupes = []) {
        if (list.length === 0) {
            return noDupes;
        } 
//if list.length is empty we return our default parameter noDupes

        else if (list.length === 1) {
            noDupes.push(list[0]);
            return noDupes;
        }
        
//if list.length has only 1 element we push that element into noDupes.
//this gives us something to compare our incoming data to to decifer if
//we need to push data or not.

        else if (list[0] !== list[1]) {
            noDupes.push(list[0]);
        }
//the recursive call is slicing list and we are looking at list to see if
//we should add to noDupes. Using a default parameter allows us to think forwards
//instead of the usual backwards way I do with recursion. As we remove items from
//list we decide whether or not to add them to noDupes. 
        return compress(list.slice(1), noDupes);
    };




// // 32. Augment every element in a list with a new value where each element is an array
// // itself.
// // Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  // base case //
if(array.length === 0){
  return []
  
  } else if (Array.isArray(array[0]) === true){
  array[0].push(aug)
  } else if (Array.isArray(array[0]) === false){
  array.push(array[0])  
  } 

augmentElements(array.slice(1), aug)
return array
};


// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, oneZero = []) {
  /**so we have to return an array with no consequetive zeroes
   * our base case should be when array === 0 return our default 
   * parameter, oneZero.
   * 
   * our recursive call should be 
   * return minimizeZeroes(array.slice(1), oneZero)
   * 
   * our recursive cases should be similar to the compress cases
   */
   
   if(array.length === 0){
     return oneZero;
   }
   
   else if(array.length === 1){
      oneZero.push(array[0]);
      return oneZero;
   } 
   
   //in the case of consecutive zeroes
   
   else if(array[0] === 0 && array[1] !== 0){
   oneZero.push(array[0]);
   }
   
   //in any other case
   
   else if(array[0] !== 0)
   oneZero.push(array[0]);
   
   
   return minimizeZeroes(array.slice(1), oneZero);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, alternate = []) {

/**
 * With what we have here we need to use % to alternate between negative and positive
 * we can multiply by -1 if array[0] < 1 && ...
 * 
 * base case should be the same as mizZero
 * recursive call should be the same as well
 * 
 * recursive cases will be a little tricky
 * 
 */
  
  if (array.length === 0){
    return alternate;
  }
  
  else if(array.length === 1 && array[0] < 0 && alternate[alternate.length -1] < 0){
  alternate.push(-array[0]);
  return alternate;
  }
  
  else if(array.length === 1 && array[0] > 0 && alternate[alternate.length -1] > 0){
  alternate.push(-array[0]);
  return alternate;
  }
  
  else if(array.length === 1 && array[0] > 0 && alternate[alternate.length -1] < 0){
  alternate.push(array[0]);
  return alternate;
  }
  
   else if(array.length === 1 && array[0] < 0 && alternate[alternate.length -1] > 0){
  alternate.push(array[0]);
  return alternate;
  }
  
  //if preceding number is positive and current number is positive
 else if(alternate.length === 0 && array[0] > 0){
   alternate.push(array[0])
 } 

 else if(alternate.length === 0 && array[0] < 0)
 alternate.push(-array[0])

  else if(array[0] > 0 && alternate[alternate.length - 1] > 0){
    alternate.push(-array[0]);
  }
  
  //if current number is negative and preceding number is positive
  else if(array[0] < 0 && alternate[alternate.length - 1] > 0){
    alternate.push(array[0]);
  }
  
  //if current number is negative and preceding number is negative
  else if(array[0] < 0 && alternate[alternate.length - 1] < 0){
    alternate.push(-array[0]);
  }
  
  //if current number is positive and preceding number is negative
  else if(array[0] > 0 && alternate[alternate.length - 1] < 0){
    alternate.push(array[0]);
  }
  
  
  return alternateSign(array.slice(1), alternate);
};

// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newStr = "") {
  if(str.length === 0){
    return newStr;
  } 
  
  else if(str.length === 1){
    newStr += str[0];
    return newStr;
  } 
  
  else if(str[0] !== "0" &&
  str[0] !== "1" &&
  str[0] !== "2" &&
  str[0] !== "3" &&
  str[0] !== "4" &&
  str[0] !== "5" &&
  str[0] !== "6" &&
  str[0] !== "7" &&
  str[0] !== "8" &&
  str[0] !== "9" ){
  newStr += str[0]}
  
  else if(str[0] === "0"){
  // str[0] === "zero"
   newStr += "zero"}
  
  else if(str[0] === "1"){
    newStr += "one"
  }
  
  else if(str[0] === "2"){
    newStr += "two"
  }
  
  else if(str[0] === "3"){
    newStr += "three"
  }
  
  else if(str[0] === "4"){
     newStr += "four"
  }
  
  else if(str[0] === "5"){
    newStr += "five"
  }
  
  else if(str[0] === "6"){
    newStr += "six"
  }
  
  else if(str[0] === "7"){
    newStr += "seven"
  }
  
  else if(str[0] === "8"){
    newStr += "eight"
  }
  
  else if(str[0] === "9"){
    newStr +="nine"
  }
  
  
  
  return numToText(str.slice(1), newStr);
  
 
}; 
// numToText("I have 5 dogs and 6 ponies"); 
  // "I have five dogs and six ponies"

// let test = " I have 5"
// console.log(typeof test[test.length - 1] == "number") // false












// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
