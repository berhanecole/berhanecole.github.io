// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};



/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    /**input is a value 
     * output: a value unchanged
     * constraints:
     * edge cases:
     */
    return value;
    
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    /**
     * input is any kind of value.
     * output returns the type of <value> as a string
     * constraints:
     * edge cases: array, null, and functions return as object
     */
     if(typeof value === "string"){
         return "string";
     } else if(typeof value === "number"){
         return "number";
     } else if(typeof value === "boolean"){
         return "boolean";
     } else if(Array.isArray(value) === true){
         return "array";
     } else if(value === null){
         return "null";
     } else if(typeof value === "function"){
         return "function";
     } else if(typeof value === "undefined"){
         return "undefined";
     } else if(typeof value === "object"){
         return "object";
     }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

 
 _.first = function(array, num){
  
  /** 
 * inputs: (2) an array and a number
 * outputs: 
 * (1) if param array is not an array, return []
 * (2) if number is not given OR NaN, return the first element in the array param
 * (3) Else return <param> numbers of items of array
 * 
 * edge cases: 
 * (1)what if number is negative? return empty array []
 * (2) what if number is greater than what is present in the array? return full Array
 */
     let arrayBox = [];
     
     if(Array.isArray(array) === false){
         return [];
     } else if (typeof num !== "number" || isNaN(num) === true){
         return array[0];
     } else if (num <= 0){
         return [];
     } else if (num === 1){
         return array[0];
     } else if(num > 1){
         for(let i = 0; i < num; i++){
             if(i < array.length){
                 arrayBox.push(array[i])
                
             }
         }
         return arrayBox;
     }
     };
 

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


 _.last = function(array, num){
  /**
 * input: (2) an array and a number
 * output: 
 * (1) if param array is not an array, return empty array [];
 * (2) if number is not given or not number return last element in array
 * (3) other wise return last number items of the array
 * 
 * edge cases: (2) 
 * if number is negative return empty array
 * if number is greater than array length return entire array
 */

     let arrayBox = [];
     
     if(Array.isArray(array) === false){
         return [];
     } else if (typeof num !== "number" || isNaN(num) === true){
         return array[array.length - 1];
     } else if (num <= 0){
         return [];
     } else if (num === 1){
         return array[array.length - 1];
     } else if(num > 1){
         for(let i = num; i > 0; i--){
             if(i < array.length){
                 arrayBox.unshift(array[i]);
            } else if(i > array.length){
             return array;
            }
         }
         return arrayBox;
     }
     };
 


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


 
 _.indexOf = function(array, value){
  /**
 * input: (2) an array and a value
 * output: 
 * (1) index of array where there is the first appearance of param value
 * (2) return -1 if value is not in array
 * (3) all accomplished without index of
 * edge Cases:
 * (1) if array has multiple occurences, catalogue first occurence
 * (2) if val is not in array return -1
 */
 if(array.includes(value) === true){
    for(let i = 0; i < array.length; i++){
     if(array[i] === value){
      return i;
     } 
    }
 } else if(!array.includes(value)){
  return -1;
 }
 };


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


 
 _.contains = function(array, value){
  /**
 * input: (2) an array and a value
 * Output: (2) boolean 
 * (1) return true if param array contains value
 * (2) return false if otherwise
 * Constraints: MUST USE TERNARY OPERATOR
 * Edge Cases: what if no <value is given>
 * 
 */
 let funkyBool = array.includes(value)? true: false;
 return funkyBool;
 };



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

/**
 * inputs: (2) a collection (array or object) and a function
 * outputs: (2)
 * (1) if collection is array call function for each element i.e. <i> times
 *    with arguments: element, the index, <collection>
 * (2) if collection is an object call function for each property i.e. <# key> times
 *    with arguments: value, the key, <collection>
 */
 
 _.each = function(collection, func){
 if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
* 
*/
_.unique = function(array){
/** inputs: {array} 
 * outputs: an array with duplicates removed
 * constraints: must use _.indexOf() from above
 * edge cases: 
 */
 
 let noDupes = [];

 
 for(let i = 0; i < array.length; i++){
  
  if(i === _.indexOf(array, array[i])){
   noDupes.push(array[i]);
  } 
  
  }
  return noDupes
 }

 

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
 /**inputs: (2) array and a function
  * output:
  * (1) call function for each element in <array> passing arguments
  * : element, index, param <array>
  * (2) return a new ARRAY of elements for which function call returned true.
  * edge case:
  * if edge case returns anything other than true or false treat it as false
  * constraints: try to use _.each function in implementation.
  */
  let filteredArr = [];
  /** so we want to call a function for each element in an array passing element, index, and the param
   * array. We can use a for loop or the each method. lets begin by trying a for loop
   */
   
   for (let i = 0; i < array.length; i++){
    if(func(array[i], i, array) === true){
     filteredArr.push(array[i]);
    }
    
   }
   return filteredArr
   
  // how do we attempt with _.each ??
  
  // if(_.each(array, func) === true){
  //  filteredArr.push(array)
  // }
  // return filteredArr;
   
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
 /**input: (2) an array and a function
  * output: 
  * (1)call <function> for each element in <array> passing the arguments:
  *  the element, it's index, <array>
  * (2) retyrb a new array of elements that returned false.
  * edge cases:
  * constraints:
  */
  
  let rejectArr = [];
  //we can simply invert our above code
  for (let i = 0; i < array.length; i++){
    if(func(array[i], i, array) === false){
     rejectArr.push(array[i]);
    }
    
   }
   return rejectArr
  
  
  
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
 /**input: (2) an array and a function
  * output:
  * (1) Call <function> for each element in <array> passing it the arguments:
  * element, key, <array>
  * return an array that is made up of two sub arrays
  * 0: all arrays that are truthy
  * 1: all arrays that are false
  * edge cases: this is an array of arrays
  */
  
 /** so let's think about this. We want to return return _.reject and _.filter
  * arrays and put them inside a new array.
  */

let trueOrFalse = [];
let trueArray = _.filter(array, func)
let falseArray = _.reject(array, func)
trueOrFalse[0] = trueArray;
trueOrFalse[1] = falseArray;

return trueOrFalse

}
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, func){
/**input: (2) a collection so an array or an object as well as a function
 * output:
 * (1) if array call function with the parameters (element, index, param <collection>)
 * (2) if an object call function with parameters (value, key, <collection>)
 * (3) RETURN value of each function call in a new array and return that array
 */
 
 let dotMap = [];
 
 /**first I want to create an array to hold all my values from my function calls.
  * next I want to iterate through the collection but I do not know which is which so 
  * we need to make an if chain
  */
  
  if(Array.isArray(collection) === true){
     for(let i = 0; i < collection.length; i++){
      dotMap.push(func(collection[i], i, collection))
     } 
  } else {
     for(let key in collection){
      dotMap.push(func(collection[key], key, collection))
     }
  }
return dotMap;
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop){
 /**input: (2) an array of OBJECTS and a property
  * output: 
  * (1) return an array containing the value of property for every element in array
  * (2) must use _.map in implementation.
  */
  
  //first lets create an array to hold our properties
  let plucky = [];
  
  /**with .map we need to take a collection and a 
   * plucky.push(_.map(array, )
   * 
   * what we have to do is create a function that will return the value
   * of the property we want. We basically want Object.key
   */
   
   // function pluckyFunc(){
   //  for(let i = 0; i < array.length; i++){
   //   for(let key in array[i]){
   //     if(key !== prop){
   //      delete array[i][key];
   //       return Object.values(array[i]).join(",")
   //     }
   //   }
   //  }
    
   // }
   
   // function pluckyFunc(){
    
   //  for(let i = 0; i < array.length; i++){
   //   for(let key in array[i]){
   //     if(key === prop){
   //      return array[i][key];
         
   //     }
   //   }
   //  }
    
   // }
   
   
   plucky = _.map(array, function(i){
    return i[prop]
    })
   return plucky
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){

/**input: (2) a collection and a function
 * output: Call <function> for every element of <collection> with the paramaters:
*      
*      (1) if <collection> is an array:
*          param is current element, it's index, <collection>
*      (2) if <collection> is an object:
*          param is current value, current key, <collection>
*      (3) if calling <function> for element is true, if even one is false return false
*      (4) if function is not provided return if every element is truth, otherwise return false
* edge cases: 
* (1)what if <functions> do not return a boolean => 
* (2)what if <function> is not given => 
* Should return true for truthy results when no function is passed in."
* Should return false for falsy results when no function is passed in.
*    
 */
 
 let everyArray = [];
 
 /**we can use .each to satisfy the the first two objectives.
  * we should pass everything through .each. for what we want the code to do we need to
  * make a conditional chain in our anonymous function for .each
  * 
  * what do we want... so we want a single boolean as our output in this code
  * if all the function calls resolve to true we want to return true
  * 
  * if any of the function calls resolves to false we want to return false
  * 
  */
  
  
// _.each(collection, function(){
//  if(collection){
//   everyArray = true;
//  } else {
//   everyArray = false;
//  }
// })



if(Array.isArray(collection) && typeof func === "function"){
 for(let i = 0; i < collection.length; i++){
        if(func(collection[i], i, collection) === false){
        everyArray = false;
        return everyArray;
       } else if (func(collection[i], i, collection) === true) {
        everyArray = true;
        break;
       } else if (collection[i] === true){
       everyArray = true;
       } else if (collection[i] === false){
       everyArray = false;
     } return everyArray;
 }
}

if(typeof collection === "object" && typeof func === "function"){
 for(let key in collection){
  if(func(collection[key], key, collection) === false){
   everyArray = false;
   break;
  } else if(func(collection[key], key, collection) === true){
   everyArray = true;
  } else if(collection[key] === true){
   everyArray = true;
  } else if(collection[key] === false){
   everyArray
  }
 } return everyArray;
}


_.map(collection, function(element){
 if (element === true){
  everyArray = true
 } else if (element === false){
  everyArray = false
 } 
}
)
 return everyArray

 
 
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

/**inputs: a collection and a function
 * outputs: call function if array: element, index, collection
 *         if object: current value, current key, collection
 * if the return value of at least one element is true, return true
 * if it is false for all return false
 */
 
 _.some = function(collection, func){
  let someBox = [];
  
  /**
   * So we want a boolean for this problem basically we want to return true if
   * anything in our collection fulfills the function provided in the parameter
   * we want to return true and then if none fulfill we want to return false. This
   * is something like the inverse of .every, so I will start by importing that code 
   * tweaking it so that I can fulfill this 
   */
   
   
if(Array.isArray(collection) && typeof func === "function"){
 for(let i = 0; i < collection.length; i++){
        if(func(collection[i], i, collection) === true){
        someBox = true;
        return someBox;
       } else if (func(collection[i], i, collection) === false) {
        someBox = false;
        continue;
       } else if (collection[i] === true){
       someBox = true;
       } else if (collection[i] === false){
       someBox = false;
     } return someBox;
 }
}

if(typeof collection === "object" && typeof func === "function"){
 for(let key in collection){
  if(func(collection[key], key, collection) === true){
   someBox = true;
   return someBox;
  } else if(func(collection[key], key, collection) === false){
   someBox = false;
   return someBox;
   } else if(collection[key] === true){
   someBox = true;
  } else if(collection[key] === false){
   someBox = false;
  }
 } return someBox;
}


_.map(collection, function(element){
 if (element === true){
  someBox = true;
 } else if (element === false){
  someBox = false;
 } 
}
);
 return someBox;

 
 

 };


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/**
 * inputs:
 * (1) an array
 * (2) a function
 * (3) a seed
 * outputs:
 * call function for every element in collection with arguments
 * <previous result>, element, index
 * use the return value of the <function as the <previous result>
 * if no seed is given, use the first element/value of collection as <seed> 
 * after last iteration return the return value of the final function call.
 */
 _.reduce = function(array, func, seed){
// // this function can have two routes

//initial value provided (seed)
if(seed !== undefined){
 //if seed is not undefined that meean that seed is provided
 
 //let result be the accumulator value (previous result)
 
 let result = seed;
 // loop through array starting at index 0
 _.each(array, function(element, index, array){
  //assign result of assing each elment to 
  result = func(result, element, index)
  //each and forEach do not return anything so we cannot say return here
 })
 return result

//return result outside of each;

} else {
//there is no initial value (seed) provided
// if no seed is given the first element will be the result
 
 let result = array[0];
 //loop through the array...
 _.each(array, function(element, index, array){
   if(index !== 0 ){
    //assign the result of passing each element
    result = func(result, element, index, array)
 }

})
return result;

}
}

//previous result, element, index;
//if there is a seed that is the first result you take and go with
//if there is no seed the first element of the array is the seed



// if(seed !== undefined){
//  let changeling = seed;
//  for(let i = 0; i < array.length; i++){
//  //I want to loop through the array using the provided function throughout
//  changeling = func(changeling, i, array);
// }
// return changeling;
 
 
// } else if (seed === undefined) {
//  let changeling = array[0];
//  for(let i = 0; i < array.length; i++){
//   if(i > 0){
//   changeling = func(changeling, i, array);
//  }
//  return changeling;


// }


// }

// };

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, ...args){
 
/**
 * input:
 * at least two an object and another object that will its properties to object 1
 * output: 
 * the updated <object 1> no matter how many objs there are their properties
 * are passed on to <object 1>
 * return updated <object 1>
 */

let updObj1 = obj1;
for(let i = 0; i < arguments.length; i++){
  for (let key in arguments[i]){
   if(arguments[i][key] !== undefined){
     updObj1[key] = arguments[i][key];
   } 
  } 
 } 
return updObj1;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
