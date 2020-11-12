/**
 * VARIABLES
 * 
 * BOTTOM LINE: Data values are the building blocks of code. 
 * Variables are the way in which programmers are able to store 
 * distinct types of data within named containers that can be 
 * conveniently called upon throughout the life cycle of the code.
 *
 *
 * 0. Variables are called upon in code to store distinct values. 
 * These values can be statements or expression statements. Expression 
 * statements are values that are evaluated by the program in order to
 * receive a value. Expression sttatements are invaluable when you want to
 * assign a value to a variable but you need the program to evaluate data 
 * to return the exact value the data will be.
 */
 
 //statement//
 var myWeight = 170;
 
 //expression statement//
 var myWeightPlusTwenty = 170 + 20;
 
 /**
 * 1. There are 2 phases of using variables: declaration and initialization 
 * (or assignment).
 * 
 * 2. During a the declaration stage the var keyword is always used.
 * It is the means by which a programmer notifies the program of a new 
 * variable is immminent. The syntax is always var and a variable name 
 * immediately proceeding the var keyword. KEYWORDS are special constructs
 * that Javascript recognizes as having specific properties. You cannot 
 * name variables so that they share the same names as keywords.
 * 
 * 3. The initialization phase is where you give your declared variable
 * a value. Often declaration and initialization is done in the same line 
 * of code. 
 * 
 * 4. Variables can hold or refer to any Datatype. Examples of Datatypes
 * are: Strings, Numbers, Booleans, Arrays, Objects, Functions, and Infinity.
 * More Information about Datatypes will be in the Datatypes section
 * 
 */

// 1. declaration //
var onlyDeclared;

/**
 * Once declared a variable has the value of undefined. Because variables
 * are hoisted to the top of the program at runtime you are able to refer 
 * to the myName variable before you declare it. Each instance you refer to
 * the variable before it is initialized will return a value of undefined.
 */
 
console.log(onlyDeclared); // prints => undefined

/** 
 * If you do not use the var keyword and the program does not hoist any
 * declaration from elsewhere in the code. Referring to an undeclared
 * variable will end in a ReferenceError
 */
 
 // neverDeclared;
 // console.log(neverDeclared); 
 // ReferenceError 

// 2. initialization or assignment //
onlyDeclared = 'One Dependent'; 
console.log(onlyDeclared); // prints => One Dependent

/**
 * initialization is the process where we give our variables values. 
 * Values of variables are not hoisted at runtime so, as mentioned above,
 * if a declared variable is called upon before it is initialized it returns
 * the value of undefined. initialization is also known as assignment because 
 * it requires an assignment operator to transfer the value to the variable.
 * 
 * While our variable is named onlyDeclared it is now declared and initialized.
 * Going forward we will proceed as if the name onlyDeclared does not refer to 
 * if the variable is declared rather it refers to claims on tax forms.
 */

// 3. re-assignment //

onlyDeclared = 'Student Loans';
console.log(onlyDeclared); // prints => Student Loans

/**
 * variable can be reassigned to any other Datatype regardless of what 
 * Datatype preceded the change. While this is the case, variables help the 
 * comprehensibility of code so no matter the change, changes to a variable's
 * type should make sense. Unlike other variable type, var can also be 
 * declared multiple times without throwing error as is demonstrated below.
 */ 
 
var onlyDeclared = 15000;
var onlyDeclared = true;
onlyDeclared = "24 giraffes, a 1957 Chevrolet, and 130 shares of Enron Stock";
console.log(onlyDeclared);
// prints => 24 giraffes, a 1957 Chevrolet, and 130 shares of Enron Stock

/**
 * 5. Variables assist with legibility and comprehensibility within code. 
 * Variables naming convention dictate that variables should be named utilizing
 * camel case. This is the first letter of one word lowercased and each subsequent
 * first letter of each word that follows is uppercased. As we have demonstrated 
 * with our variable onlyDeclared.  
 * 
 * 6. To assist with comprehensibility make sure your variable's name correlates
 * to the value that is within it. This makes understanding your code easier down 
 * the road as you may not be the only one looking through your code. Do not confuse
 * yourself with variables with overly similar/bland names, incorrect spelling, etc.
 */
 
 /**let and const are additional ways to store data in variables. the var keyword
  * is global scoped and hoisted so the var variable can be accessed before initialized
  * and can be accessed throughout the code. This property of var led to the creation
  * of the additional variabl keywords of let and const. Let and const are both block
  * scoped instead of global scoped meaning their declaration and value does not leave
  * the block of code they live in. Additionally unlike var let and const can only be
  * declared once. The major difference between let and const is that let can be 
  * reassigned and const cannot. So to review:
  * 
  * var:
  * global scoped
  * hoisted 
  * reassignable
  * 
  * let
  * block scoped
  * not hoisted
  * reassignable
  * 
  * const: 
  * block scoped
  * not hoisted
  * not reassignable
  */

let carrot = "green";
//let carrot = "red" => throws parsing error

const weather = "cloudy";
// weather = "rainy";
// console.log(weather);
// since we are trying to reassign a const we get a type error