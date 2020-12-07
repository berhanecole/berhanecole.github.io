//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// in put is an object
// output should be an array
// no edge cases
// create array to hold object values

let arrayToReturn = [];

for(var key in object){
    arrayToReturn.push(object[key]);
    
}
return arrayToReturn
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // we want to take keys from an object and return them as a string 
    // separated 

let myString = "";
let myArray = [];

    //make a for in loop that pushed in a value of key which is already
    //
for(var key in object){
    myArray.push(key);

}

myString = myArray.join(" ");
return myString;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //function takes all of string values in an object and display them 
    //as a string
    
    // let's begin by creating a string and array value
    
    let valArr = [];
    let valStr = "";
    
    //we only want the string values so we need to run a for key in loop
    //with an conditional statement within to search for and return a string.
    
    for(var key in object){
        if(typeof object[key] === "string"){
            valArr.push(object[key]);
        }
    }
    
    valStr = valArr.join(" ");
    return valStr;
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    /**this function will take a collection and return a string depending on
     * what sort of collection it is. The collection will either be an array 
     * or an object. We want to return 'array' if collection is array and 
     * 'object' if collection is an object.
     * 
     * This being the case we need to create an if statement that uses
     * Array.isArray property and typeof unary operator to check for these
     * conditions
     */
     if(Array.isArray(collection) === true){
         return "array";
     } else if (typeof collection === "object"){
         return "object";
     }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    /** function will take the provided string and capitalize its first
     * letter. Let's begin this with trying the .replace method and
     * to uppercase method
     */
     return string.replace(string[0], string[0].toUpperCase());
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    /**take a string of words and return the string with each first letter
     * capitalized. To do this we need to split the words into an array
     * of words and then run a for loop that capitalizes the first letter
     * of each string in the array and then join the array back to a string
     * with the strings all having their first letter uppercased.
     * 
     */
     let joinedArray = [];
     let splitArr = string.split(" ");
        for(let element of splitArr){
            joinedArray.push(capitalizeWord(element));
        }
    return joinedArray.join(" ");
        
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    /** input is an object and function will search for a name property
     * and return 'Welcome <//name property>' To do this I think I am going
     * to start by simply returning the name.
     */
     
     
    
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!" ;

}
 

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    /** function takes a object as its input and searches for its name and species
     * keys and returns string "<name> is a <species>"
     * I want to make a function that capitalizes all keys in an object to start.
     */
     
    //  let upperCaseAllKeys = function(object){
    //      for(let key in object){
    //      if(typeof object.key === "string"){
    //       object.key = object.key[0].toUpperCase() + object.key.slice(1);
    //       return object
                   
    //          }
    //      }
    //  }
    //  upperCaseAllKeys(object);
    // return `${object.name} is a ${object.species}`;
    
    return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + object.species[0].toUpperCase() + object.species.slice(1);
}

// let be = {name: "bert", species: "lamb" , age: 12};
// profileInfo(be);


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    /** Should take an object, if this object has a noises array return
     * them as a string separated by a space, if there are
     * no noises return 'there are no noises'
     * 
     * we have an input of object. we look at its noises array if it has 
     * noises return the array as a string with the .join(" ") method
     * 
     * if there are no noises return thereare no noises 
     * so we need to make an if else statement.
     */
     
        if(object.hasOwnProperty('noises') !== true) { 
         return "there are no noises";
         } else if(object.noises.length > 0){
         return object.noises.join(" ");
         } else  { 
         return "there are no noises";
         
     } 

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    /**Should take a string of words and a word and return true if <word>
     * is in <string of words>, otherwise return false
     * 
     * so we have two inputs and we want to see if a sequence of character
     * values equal that string. We can use the .search() method ti do this.
     * Something to note about the search method is that it returns position 
     * of a string (index). If a word is not present the position is -1.
     */
     if(string.search(word) !== -1){
         return true;
         
     } else {
         return false}
// Heres Another Way:

//   let splitArr = string.split(" ");
//   if(splitArr.includes(word) === true){
//      return true
//   } else {
//      return false }
     


    
}

let randoStr = "hare rabbit porcupine";
hasWord(randoStr, "rabbit");

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    /**"addFriend() : Should take a name and an object and add the name 
     * to the object's friends array then return the object"
     * 
     * So our input is a name and an object. We want to add the name
     * to the objects friends array so push in the name into that 
     * object.name array and then return the object.
     */
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    /**"isFriend() : Should take a name and an object and return true 
     * if <name> is a friend of <object> and false otherwise
     * 
     * so we are inputting a name, checking if it is in the friend array
     * and returning a boolean depending on whether it is. We can 
     * use a conditional statement and an includes method here
     */
    if (object.hasOwnProperty("friends") === false){
         return false;
     } else if(object["friends"].includes(name)){
         return true; 
         } else { 
         return false;
     }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    /**"nonFriends() : Should take a name and a list of people, and return
     * a list of all the names that <name> is not friends with
     * 
     * first there is a variable array given in the question.
     */      var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
      
     /** so it looks like we're looking at these person objects
      we want the output to be an array of all the people that the person is not friends with.
      I want to create a for loop 
      
      we can assume the array given is something like [jimmy, bob, liza, sara]
     */
       
//     let theirFriends = []
//     let notFriends = []
// for(let element of data){
//     if(data[element].hasOwnProperty(name) === true){
//         theirFriends = data[element]["friends"];
//         let theirString = theirFriends.join(" ");
//         for(let i = 0; i < array.length; i++){
//         if(theirString.includes(array[i]) === false)
//         {notFriends.push(array[i]);
//         return notFriends;
        
        
//     }
// }

// }
// }
// let notFriends = [];
//     for(var i = 0; i < array.length; i++){
//         if(array[i].name === name || array[i].friends.includes(name)){
//             continue;
//         } else {
//             notFriends.push(array[i].name);
//         }
//     }
// return notFriends;

let alterNotFriends = []
for(var j = 0; j - array.length; j++){
    if(name !== array[j].name && array[j].friends.includes(name) === false){
        alterNotFriends.push(array[j].name)
    }
}
return alterNotFriends;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
/**Should take an object, a key and a value. Should update the property <key> on 
 * <object> with new <value>. If <key> does not exist on <object> create it.
 * 
 * ok so we got an object which we're going to search update and return in the end
 * we need to loop through the object look for a key, if the object has the key
 * return the object with the new key and value if it doesn't we add a new key and 
 * add the value
 */
//  let upObj = object;
//  let update = key;
//  for(let key in upObj){
//      if(upObj.hasOwnProperty(update) === true){
//          upObj.update = value;
//      }
//      else if(upObj.hasOwnProperty(update) === false){
//          upObj.update = value;
//      }
//  }
//  return upObj;
// }

// let agnes = {painter: true, country: "canada", friends: ["arnie glimcher"]};
// updateObject(agnes, "country", "U S A");

// updateObject(agnes, "former city", "new york");

// updateObject(agnes, "painter", true);

let upObj = object;
 let keyAsString = key
 
 for(let key in upObj){
     if(key === keyAsString){
         upObj[keyAsString] = value;
         return upObj
     }
     else if(key !== keyAsString){
     
        upObj[keyAsString] = value
        return upObj;
  
     } else {
       return upObj;
     }
 }

}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    /**Should take an object and an array of strings. 
     * Should remove any properties on <object> that 
     * are listed in <array>
     * 
     * so we have the input of object and an array, we want to cycle through
     * both the object and array and see if any of the elements in the array 
     * are equal to any of the properties in the object. 
     * 
     * if this is true we want to remove any of properties listed 
     * in the array and return the object
     * 
     * looking at the data the array is going to be the keys
     * e.g 
     *
     * var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      assert.deepEqual(data, {b: "two"});
      
      to start this we need to loop through the object and loop through the
      array concurrently to see if any of the object keys are equal to the values
      at array[i]
     */
     
     for(let prop in object){
         for(let i = 0; i < array.length; i++){
             if(array[i] === prop){
                 delete object[prop];
             } 
         }
     }
  
         return(object);
    

}
   var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
    //   assert.deepEqual(data, {b: "two"});
    
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    /**
     * Should take an array and return an array with all the duplicates removed
     * 
     * here are the tests:
     * 
     *var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
      var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
      assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
      assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
      
      so are input is an array and our output is an array with duplicates removed.
      I want to create a new array and only push in values if array does not already
      contain the data. So I'm thinking a for loop into an array followed by a 
      conditional statement
     */
     let arrayNoDupes = [];
     for(let i = 0; i < array.length; i++){
         if(arrayNoDupes.includes(array[i]) === false){
             arrayNoDupes.push(array[i]);
         }
     } return(arrayNoDupes)

}
var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
      var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
  dedup(arrayOne), [1,2,3,4,5,"a","b","c"];
  dedup(arrayTwo), ["hello", "world"];

console.log(typeof undefined);

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}