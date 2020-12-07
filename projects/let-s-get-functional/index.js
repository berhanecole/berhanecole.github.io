// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-berhanecole");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./berhanecole.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// ### 1: `maleCount`
//  - **Objective**: Find the number of male customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `filter`

/**for this problem we use filter. filter takes a boolean statement and
 * return an array of data that resolves to true from that boolean. For this
 * reason we need to make our filter function equal to a new binding which
 * we will call filteredMales. Since filter returns an array and we want a 
 * number we use the length property of the binding we declare to be our
 * return value.
 */
 
let filteredMales = _.filter(array, function(customerObj){
    return customerObj.gender === "male"; 
});
return filteredMales.length;

};

var femaleCount = function(array){
// ### 2: `femaleCount`
//  - **Objective**: Find the number of female customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `reduce`
/**for this problem we must use an array and return a number. First of all, I'm
 * thinking we're going to want the reduce to act upon an array of all the female
 * customers and then add the indices to return a number. basically just using reduce instead
 * of .length.
 * 
 * or let's try something else first we need to assert a binding
 */

 
 function womenCount(acc, val, element){
    
     if(array[element].gender === "female"){
         acc++;
     }
     return acc;
 }
 let femaleNamesCounted = _.reduce(array, womenCount, 0);
 return femaleNamesCounted;}
;


var oldestCustomer = function(array){
// ### 3: `oldestCustomer`
//  - **Objective**: Find the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:

/**a way to address this is to somehow take the array and return the array in 
 * a way that we return the ages in a new array in ascending or descending order
 * I would like to do descending order and then the value all we would need 
 * to do is return the name of the oldest customer which would be array[0].
 * 
 * it would have to be a new array of names.
 * 
 * maybe another way would be to use reduce and somehow make the the function
 * iterate through an object and look for if age is more or less than the current
 * value then return that new age as the current value. then take the oldest age and 
 * use filter to filter out all the objects that aren't the oldest customer and 
 * return oldestCustomers[0].name
 */
 
   function whosOlder(acc, val){
     if(val.age > acc["age"]){
         acc = val;
     } 
     return acc;
 }
 
 let eldest = _.reduce(array, whosOlder);
 
 return eldest.name;
};

var youngestCustomer = function(array){
// ### 4: `youngestCustomer`
//  - **Objective**: Find the youngest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:
function whosYounger(acc, val){
     if(val.age < acc["age"]){
         acc = val;
     } 
     return acc;
 }
 
 let youngest = _.reduce(array, whosYounger);
 
 return youngest.name;
};


var averageBalance = function(array){
// ### 5: `averageBalance`
//  - **Objective**: Find the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:

// let averager = function(acc, val, element){
//  if(array[element].balance !== undefined){
//  acc += array[element].balance;
//  return acc;}
//  else if(array[element].balance === undefined){
//   return acc;
//  }
// };
// //we want to take the sum of all the balances and divide them by the amount of elements present. 
// //maybe thats array.length??
// let totalBalance = _.reduce(array, averager);

// let balancedCust = _.filter(array, function(element){
// return typeof element.balance === "string";
// });

// return totalBalance / balancedCust.length;

/**since all of these values are sums I have to change the currency first to a number then add them all
 * together and return the value
 */
 
let balancedCust = _.filter(array, function(element){
return typeof element.balance === "string";
});

//frst I filter all of the accounts without balances out. All of the balances are written as 
//strings on our balance sheet.

let deCurr = function(acc, val, element){
  acc += Number(balancedCust[element].balance.replace(/[^0-9.-]+/g,""));
  return acc;
};

//next I creat a callback function for reduce that replaces the values with number representation
//for them. 

let replacedSum = _.reduce(balancedCust, deCurr, 0);
//I create a variable that holds the value of the sum of all balances 

return replacedSum / balancedCust.length;
//I get the average by dividing the replacedSum with the length of balancedCust
};


/**all the balances are strings so I have to alter them into numbers before I can add them together.
 * How to do that...
 */

var firstLetterCount = function(array, letter){
// ### 6: `firstLetterCount`
//  - **Objective**: Find how many customer's names begin with a given letter
//  - **Input**: `Array`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:

let firstLetter = function(acc, val, element){
 if (array[element]["name"][0].toLowerCase() === letter.toLowerCase()){
  acc++;
 // } else if (array[element]["name"][0].toUpperCase() === letter.toUpperCase()){
 //  acc++;
 }
  return acc;
};

let firstLetterReduced = _.reduce(array, firstLetter, 0);
return firstLetterReduced;

};


// ### 7: `friendFirstLetterCount`
// npm start --prefix ./berhanecole.github.io/projects/let-s-get-functional
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:

 
 
 //first we filter out all of the objects that aren't our customer so we can pinpoint our customer
  //next I want to reduce our friends object to only their friends.
 
 var friendFirstLetterCount = function(array, customer, letter){
  
 let targetCustomer = _.filter(array, function(element){
  return element["name"] === customer;
 });
 
 let numFriendsCall = function(acc, val){
   for(var i = 0; i < targetCustomer[0]["friends"].length; i++){
  
 // I had to add this for loop but why??
 
 if (targetCustomer[0]["friends"][i]["name"][0].toLowerCase() === letter.toLowerCase()){
 acc++;
  }}
  return acc;
};
 let buds = _.reduce(targetCustomer, numFriendsCall, 0);
 return buds;
 
};
 



// ### 8: `friendsCount`
// npm start --prefix ./berhanecole.github.io/projects/let-s-get-functional
//  - **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:


 //we are given an array and we want to return an array that has all of the people who list "name" 
 //as their friend. We can use reduce this and maybe filter again
 //I'll start by thinking of it with filter
 
//  let myFriends = _.filter(array, function(element, i){
//  return array[element]["friends"][i]["name"] === name
// })
// return myFriends
// }

var friendsCount = function(array, name){
let holdFriends = [];

// let whosFriend = _.filter(array, (i, j) => {
//  for (let i = 0; i < array.length; i++){
//   for (let j = 0; j < array[i]["friends"].length; j++){
// return array[i]["friends"][j]["name"] === name}}}
//  );

// return whosFriend;


 for (let i = 0; i < array.length; i++){
  for (let j = 0; j < array[i]["friends"].length; j++){
if(array[i]["friends"][j]["name"] === name){
 holdFriends.push(array[i]["name"]);
}
   }
  
     }
 

 

return holdFriends;








};








// ### 9: `topThreeTags`
// npm start --prefix ./berhanecole.github.io/projects/let-s-get-functional
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:

/**So I want an imput array and an output array and then I want to reduce the array further by limiting
 * it to only the top three tags. Pluck can take a property and return all the values in an array of
 * objects which is what we have
 */
 
var topThreeTags = function(array){
let tagsObj = {}
let allTagsArrays = _.pluck(array, "tags");
let allTags = [];
for(let element = 0; element < allTagsArrays.length; element++){
 for(let i = 0; i < allTagsArrays[element].length; i++){
  allTags.push(allTagsArrays[element][i]);
 }
}

/**With this all of the tags are within one array. Now we just need to tally the tags into the top three occurring ones
 */

let alphaAllTags = allTags.sort((a,b) => {a - b})
//this alphabetizes the allTags array

//below is a formula I have found to return an object that will make an object that lists the occurences of a string

let ordObj = _.reduce(alphaAllTags, (acc, val) => {
 acc[val] =  (acc[val]||0)+1; return acc;
 
 // this code either adds one to the count of if acc[val] is present or if 0 aka this is the first occurence of acc[val]  
 // and adds one as its initial value 
 
}, {});

// let checker = [];
// checker.push(ordObj);
// return checker;

var ordTags = Object.keys(ordObj).sort(function(a, b) {
  return ordObj[b] - ordObj[a];
})

return ordTags.slice(0, 3);
}
;

/**you can use .concat to merge two arrays together..
 * 
 */ 

// ### 10: `genderCount`
//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`

/**With this problem we should basically repeat what we did in the first two problems and set them
 * as property values for a new obj
 */
var genderCount = function(array){
 
 let allGend = {};
 
 
function menCount(acc, val, element){
    
     if(array[element].gender === "male"){
         acc++;
     }
     return acc;
 }
allGend["male"] = _.reduce(array, menCount, 0);



function womenCount(acc, val, element){
    
     if(array[element].gender === "female"){
         acc++;
     }
     return acc;
 }
 allGend["female"] = _.reduce(array, womenCount, 0);




function nonBiCount(acc, val, element){
    
     if(array[element].gender === "non-binary"){
         acc++;
     }
     return acc;
 }
 allGend["non-binary"] = _.reduce(array, nonBiCount, 0);


 
 return allGend;
 
}

;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
