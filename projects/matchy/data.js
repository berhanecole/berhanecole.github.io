/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
//created an empty literal object variable animaal
animal.species = "Mammal";
//gave animal object key of species and value of mammal using dot notation
animal["name"] = "Larry";
//gave animal object key of name with value of Larry
animal.noises = [];
//created a key of noises with an empty array as its value.
console.log(animal);
//console.log my progress


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var noises = [];
//created empty array for noises variable
noises[0] = "snicker";
//designated noises first value as snicker using bracket notation
noises.push("guffaw");
//used push method to push in value of guffaw
noises.unshift("zzz");
//used unshift method to add zzz to beginning
noises.push("harumph");
//used used push method to add harumph to noises array
console.log(noises.length);
//console log noises length
console.log(noises[noises.length - 1]);
//used bracket notation to console log value at the end of the array
console.log(noises);
//console logged noises

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises; 
//used bracket notation to add noises key to animal and assign the value 
//to noises
animal.noises[4] = "roar";
//used dot and bracket notation to add roar to noises array in animal object
console.log("animal");
//console logged animal


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
//created an empty array for animals which will hold our animal objects
animals.push(animal);
//pushed animal in to animals array.
console.log(animals);
//console logged animals
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
animals.push(duck);
//declare and initialize duck object and assignned key value pair. 
//subsequenty I push the duck object into animals object
console.log(animals); 
//console logged animals
var giraffe = {species: "giraffe", name: "Porky", noises: ['cough', "lick"]};
animals.push(giraffe);
var lemur = {species: 'mammal', name: "Sebastien", noises: ['sprung', 'groan']};
animals.push(lemur);

//add two  more objects utilising the methods as I used to add duck to animals


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];

function getRandom(array){ 
    return Math.floor(Math.random() * Math.floor(array.length - 1));
    
}
//ceate function to get a random integer that takes an array as its parameter
//and uses the math random property to get a random integet between 0 and the 
//array length

friends.push(animals[getRandom(animals)].name);
//i use this data to push this value into a newly declared variable friends. 
//I use the function within bracket notation to stand in for animals index
//and I push that value into a property of name that is pushed into friends.

console.log(friends);
//console log friends

duck['friends'] = friends;
//I add a new key value of friends to an animal from the animals array. In this case I
//give duck the random friend


// I am using an array because our values are a list. We do not require key/value pairs.



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}