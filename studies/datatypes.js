/**
 * DATATYPES
 * 
 * BOTTOMLINE: Datatypes are the types of value that the program recognizes. 
 * Each Datatype has its own properties, uses, and restrictions designated by
 * the program. Simply put, Datatypes are types of values.
 * 
 * 0. Datatypes are separated into to two categories Simple Datatypes and Complex
 * Datatypes.
 * 
 * 1. Simple Datatypes, also referred to as primitive by some, are simple 
 * because their values are atomic or immutable. This means they do not hold 
 * or aggreagate any other Datatypes. Examples of simple Datatypes are: numbers, 
 * booleans, strings, NaN, undefined, and null
 */
 
 //Simple Datatypes
 var aNumber = 4 + 4; 
 // Number: holds numeric data
 
 var aString = "Sanaa Lathan" + " " + "Morris Chestnut" + " " + "Michael Ealy";  
 // String: holds character data
 
 var aBoolean = false; 
 // Boolean: holds true or false data
 
 var notANumber = NaN;
 // NaN: numeric data but is classified as not a number
 
 var unDefined = undefined; 
 //undefined: Without value
 
 var _null = null; 
 //null: value nullified by programmer
 
 var infinity = Infinity; 
 //Infinity: a numeric value representing infinity
 
/**
 * 2. Numbers are numeric data. They can be altered with arithmetic operators as well 
 * as compared against each other with comparison operators. 
 * 
 * 3. Strings are character data. To alert the program you are using a string you 
 * must surround your characters with "". Strings are zero-indexed and each index can
 * be accessed with bracket notation. Since Strings are zero-indexed they also have a 
 * length property. Strings have an index because they are sequence-based data. Each 
 * character that makes up has a character code that can be found with the .charCodeAt(index)
 * method. Strings have many means of manipulation which will be detailed in the String
 * Methods and Manipulation section.
 * 
 * 4. Booleans are True and False data. These values serve as the engine of conditional 
 * statements and executing code blocks throughout code as they are binary values that the 
 * program can evaluate with comparison operators and the programmer can set with assignment 
 * operators.
 * 
 * 5. NaN is a numeric data that evaluates to NaN (Not-A-Number). Compares unequal to 
 * any other value, even another NaN value. A NaN datatype can be checked with the isNaN(value)
 * function. NaN can be returned if a number is undefined, a math function that does not 
 * yield areal number like Math.sqrt(-1) or any operation that uses arithmetic operators
 * on strings besides the + operator.
 * 
 * 6. undefined is a datatype where the variable of something may be declared but the 
 * value is hitherto not specified or initialized. Declared variables without assigned 
 * values return undefined. Functions without a value return undefined as well.
 * 
 * 7. null is a datatype that represents an intentional absence of value placed by
 * a developer. Within boolean operators this value is treated as falsy.
 * 
 * 8. infinity is numeric data that stands for greater than any other number. the
 * property of the number Global Object Number.POSITIVE_INFINITIY is the same value
 * as infinity. The property of the number Global Object Number.NEGATIVE_INFINITY 
 * is equal to the negative value of infinity or -infinity. 
 * 
 * 9. Simple Datatypes are copied by value. Variables hold a definite size of 
 * memory topping off at 8 bytes. Simple Datatypes take at most 8 bytes of 
 * memory, so they are able to live inside the variable's memory. This means that when 
 * data is transferred the actual values are copied between variables.
 * 
 * 10. Complex Datatypes are Datatypes that can hold other Datatypes. Complex 
 * Datatypes are atlternatively known as collections. Examples of Complex Datatypes 
 * are Arrays, Objects, and Functions.
 */
 
 //Complex DataTypes
 
 var anArray = ["I Think I Love My Wife", "Four Brothers", "Juice",];
 
 /** Array: Zero-indexed list that can contain different values. The values of 
  * an Array are contained within [] and are separated with commas. Seen commonly
  * as a list. Values can be any Type.
  */
 
 var anObject = {movies: ["I Think I Love My Wife", "Four Brothers", "Juice"], 
                watched: true};  
 
  /** Object: A collection of Key/Value pairs. Objects have no index instead values 
  * are accessed through their Keys. Key/Value pairs are also known as an object's 
  * properties. An Objects propersties are contained within {}. Each Key is a string 
  * followed by a colon and each Key/Value pair is separated by a comma. Values can 
  * be any type. 
  */
  
  function aFunction(parameter){
      anArray.push(parameter);}
      
     
  /** Function: A Datatype encapsulating reusable code. Uses the keyword 
   * function to be identified. While it is a complex Datatype because it can hold 
   * different types of data values, it is distinct from Arrays and objects and its
   * distinctions are covered within the function section.
   * 
   * Function syntax is the function name followed by (), these hold the function's parameters if
   * any, they are followed by {} which is where the function's code block is held.
   */
   

// Working With Arrays and Objects //

   
  /**
   * 11. Arrays can be thought of as lists of values that are alike. They are 
   * zero-indexed and have a length property. The value at each index is called an 
   * element and can be engaged with through various methods as detailed below:
   */
   
   let testArrayMethods = ["salt", "cumin", "coriander", "pepper", "lemmon pepper"];
   
   // .pop and .push: Working with the last index of an array
   
   testArrayMethods.pop(); 
   //removes element from end of array. 
   console.log(testArrayMethods); 
   //=> prints [ 'salt', 'cumin', 'coriander', 'pepper' ]
   
   testArrayMethods.push("red pepper flakes"); 
   // adds specified element to end of array
   console.log(testArrayMethods);
   //=> prints [ 'salt', 'cumin', 'coriander', 'pepper', 'red pepper flakes' ]
   
   // .shift and .unshift: Working with index [0] of an array
   testArrayMethods.shift(); 
   // removes element from beginning of array
   console.log(testArrayMethods); 
   //=> Prints [ 'cumin', 'coriander', 'pepper', 'red pepper flakes' ]
   
   testArrayMethods.unshift("Kosher Sea Salt");
   //adds specified element to beginning of array
   console.log(testArrayMethods); 
   //=> Prints ['Kosher Sea Salt', 'cumin', 'coriander', 'pepper', 'red pepper flakes' ]
  
   //Elements can be changed at their index using bracket notation//
   testArrayMethods[0] = "onion salt";
   console.log(testArrayMethods); 
   //=> Prints [ 'onion salt', 'cumin', 'coriander', 'pepper', 'red pepper flakes' ]
   
   //.splice method: adding and removing elemments
   testArrayMethods.splice (0, 3); 
   // code specifies at index 0 remove 3 elements
   console.log(testArrayMethods);
   //=> prints [ 'pepper', 'red pepper flakes' ]
   
   testArrayMethods.splice(1, 0, "flour", "sugar"); 
   //code specifies at index 1, remove 0 elements, and add "flour" and "sugar"
   
   console.log(testArrayMethods); 
   //=> prints [ 'pepper', 'flour', 'sugar', 'red pepper flakes' ]
  
   //.slice method to create new arrays from elements inside an array
   let slice = testArrayMethods.slice(0, 2); 
   // code specifies slicing array from index 0 to 2 and assigning that array to slice
   console.log(slice); 
   //=> prints [ 'pepper', 'flour' ]
   console.log(testArrayMethods); 
   //=> prints [ 'pepper', 'flour', 'sugar', 'red pepper flakes' ] 
   //.slice does not change value of original array
   
   //.toString and .join: concatenating arrays
   
   let toStringMethod = testArrayMethods.toString(); 
   // converts elements in an array into a string
   
   console.log(toStringMethod);
   //=> prints pepper,flour,sugar,red pepper flakes
   
   let joinMethod = testArrayMethods.join("-"); 
   //converts elements in an array to a string with a chosen separator
   console.log(joinMethod); 
   //=> prints pepper-flour-sugar-red pepper flakes
   
   //.includes method: checking whether an array contains an element
   console.log(testArrayMethods.includes("salt"));
   //=> prints false
   console.log(testArrayMethods.includes("pepper")); 
   // => prints true
   
   /**
   * 12. Objects are a collection of key-value pairs. These key value pairs 
   * are also known as properties. Objects can also be known as associative 
   * arrays as their properties should be related to each other and work together 
   * to inform what the object is in some way. Objects are not zero-indexed since
   * they are collections of key value pairs and thus do not have a proper length 
   * property. We will go over accessing and altering an object below.
   */
   
   let chezLoule = {address: "140 evergreen dr.", 
                    chef: "Mme. Loule",
                    occupancy: 85,
                    open: true,
                    dishes: ["creme broullee", "beef taretare", "pain aux fruits"]};
  
   // adding / altering key value pairs using bracket and dot notation
   chezLoule.valet = true; 
   //adds key of valet and value of true to chezLoule using bracket notation
   chezLoule["occupancy"] = 100; 
   // reassigns key occupancy to value 100. Keys are always strings in objects
   console.log(chezLoule);
   
   //prints=>
   /*{ address: '140 evergreen dr.',
   chef: 'Mme. Loule',
   occupancy: 100,
   open: true,
   dishes: [ 'creme broullee', 'beef taretare', 'pain aux fruits' ],
   valet: true }
   */
   
   
   //Deleting Object Properties: Usind Delete
   delete chezLoule.dishes; // code specifies to delete key dishes from object chezLoule
   console.log(chezLoule);
   
   //prints =>
   /*{ address: '140 evergreen dr.',
   chef: 'Mme. Loule',
   occupancy: 100,
   open: true,
   valet: true }
   */
   
    // Checking for Keys Using .HasOwnProperty method //
   console.log(chezLoule.hasOwnProperty('occupancy'));
   //prints => true
   
   console.log(chezLoule.hasOwnProperty('dishes'));
   //prints => false
   
   
   
   
   /**
   * 13. Arrays and Objects have values that are to large to store 
   * within variables instead their values are stored as references 
   * to the value not the actual value. 
   * 
   * 14. Discerning Data Types: for the most part the Unary operator typeOf
   * returns what type of datatype its operand is. In the case of array, null, 
   * and Date the typeOf operator returns object instead. In order to 
   * differentiate Array, null, and Date values from objects javascript 
   * allows us to use Array.isArray(); value === null; value instanceof Date.
   */
   
   console.log(typeof 100); //=> prints number
   console.log(typeof "test me"); //=> prints string
   console.log(typeof true); //=> prints boolean
   console.log(Array.isArray([])); //=> prints true
   console.log(null === null); //=> prints true
   console.log(typeof {}); //=> prints object
   
   
   
   
   