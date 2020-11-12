/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, animalNameString){
    
//make a for loop to check the if key value of name is strictly equal to the input of animalNameString.
//subsequently create a conditional statement that executes returning the name of the object @ index where
//it === animalNameString. Else return null.

    var no = null

    for (var i = 0; i <= arr.length - 1; i++){
    if(animalNameString === arr[i].name){
    no = arr[i];
    }
    }
    return no

}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** Right a function caled replace() takes three parameters: an array for animals, a string that represents mame
 * of animal, and an object that will replace the animals object in the array.
 * 
 * This function will look to see if an animal with that name exists within animals array and replace its entire 
 * object if with the newAnimal object
 * 
 * Create a for loop and search if animalsArr[i].name === animalName using a conditional statement. 
 * 
 * Once the matching name is found reassign the animal @ index i to the newAnimal argument.
 * 
 * 
 */
function replace(animalsArr, animalName, newAnimal){
    for(var i = 0; i < animalsArr.length; i++){
        if(animalsArr[i].name ===  animalName){
            animalsArr[i] = newAnimal;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** Wrtite a function declaration called remove that takes two parameters and array of anima;s
 * and a name of an animal which you will search for. If an animal with that name exists remove 
 * it.
 * 
 * So we want to make a function remove(animalsArr, animalName) 
 * with this function we want to cycle through our code and find where that animal name is === animalsArr[i].name
 * we want to delete that property. We can delete indices of an array using the .splice() method
 */
 
 function remove(animalsArr, animalName){
    for(var i = 0; i < animalsArr.length; i++){
        if(animalsArr[i].name ===  animalName){
            animalsArr.splice(i, 1);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** write a function called add that has two parameters: an array of animals and an object representing a new animal
 * add() checks if animal object has a name property > 0, checks if animal object has a species with a length > 0
 * checks if animal object has a unique name and adds this new animal only if all conditions pass.
 * 
 * Create the add function that take the parameters animalsArr and newAnimal, create a for loop that iterates through
 * the array.
 * 
 * inside the add array create a search function that identifies if a name matches within the array and stops the program
 * if that is the case.
 */

function add(animalsArr, newAnimal){
 
function search(arr){
     for(var i = 0; i < arr.length; i++){
         if(arr[i].name === newAnimal.name) {
             return true
         }
     }
 }
   
    
    for(var i = 0; i < animalsArr.length; i++){
        if( search(animalsArr) !== true &&
            newAnimal.name.length > 0 && 
            newAnimal.species.length > 0 && 
            animalsArr[i].name !== newAnimal.name &&
            animalsArr.includes(newAnimal) === false) {
            animalsArr.push(newAnimal);
             
        }
    }
}



/**lets make a function search for key/value 
 * 
 * function search(arr){
     for(var i = 0; i < arr.length; i++){
         if(arr[i].name === newAnimal.name) {
             return false
         }
     }
 }

/**
 * 
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
