/**
 * OPERATORS
 * 
 * BOTTOMLINE: Operators are the ways in which data relate and connect
 * to each other. Without operators. Data would unable to be linked in 
 * meaningful ways that would foster code. Instead the data values would
 * be floating around and not of any use to programmers. Operators enable
 * us to interact with data.
 * 
 * 0. There are several types of operators and ways the operators interact
 * with their operand(s). An operand is the data that the operator takes 
 * and interacts with. You can have one, two, or three operands with the 
 * operators we will review in this section. The Operators we will discuss
 *  are Arithmentic, Comparison, Logical, Assignment, Unary, and Ternary 
 * Operators.
 */
 
 //Arithmetic Operators: +, -, *, /, % //
 
 /**
  * 1. Arithmetic Operators allow programmers to do math on values. Arithmetic 
  * Operators are used exclusively with numbers besides the + operator which
  * can be used with strings to concantenate strings, meaning to add them 
  * together and return a new string of the two combined strings. Any other 
  * Arithmetic operators used with strings will return NaN. Examples of 
  * Arithmetic operators in use are as follows.
  */
  
  // + operator: addition or concatenation//
  let mathAdd = 2 + 2;
  console.log(mathAdd);
  // => prints 4
  
  let concaStrng = "A String" + " " + "Combined";
  console.log(concaStrng);
  // => Prints "A String Combined"
  
  // - opearator: subtraction//
  let mathSub = 6 - 4;
  console.log(mathSub);
  // => prints 2
  
  // * operator: multiplication
  let mathMult = 5 * 10;
  console.log(mathMult);
  // => prints 50
  
  // / operator: division
  let mathDiv = 50 / 10;
  console.log(mathDiv);
  // => prints 5
  
  // % operator: modulo returns remainder
  let mathRemainder = 4 % 3;
  console.log(mathRemainder);
  // => prints 1
  
  
  
 //Comparision Operators: ==, ===, >=, <=, >, < //
  /**
   * 2. Comparison Operators allow programmers to check data values
   * against one another. These are essentially the engines of 
   * control flow and loops as they return a boolean true or false
   * when evaluated. All comparison data can be used to evaluate 
   * nemeric data, while strictly equal to (===) can be used to 
   * evaluate assigned data. There are two comparison operators that
   * check if values are equal to each other == and ===. We use ===
   * or strictly equal to instead of == because == can return data 
   * values of different data types. Examples of all below.
  */
  
  // == vs ===: are these values equal?//
  console.log(2 == '2');
  // prints => true
  
  console.log(2 === '2');
  // prints => false
  
  let word = "apple";
  console.log(word === "apple");
  // prints => true
  
  // > and >=: is value greater than succeeding value
  console.log( 9 > 2);
  // prints => true
  
  console.log(8 > 8);
  // prints => false
  
  console.log(8 >= 8);
  // prints => true
  
  //< and <=: is value less than succeeding value
  console.log(6 < 74);
  // prints => true
  
  console.log(67 < 42);
  //prints => false
  
  console.log(0 <= 0);
  //prints => true
  
  
 //Logical Operators: &&, ||, ! //
  /**
  * 3. Logical operators allow us to include, exclude, and give the
  * NOT values of data. They most often work alongside comparison
  * operators within control flow
  */
  
  const state = "hungry";
  const time = "morning";
  const place = "new orleans";
  
  if(state === 'hungry' && time !== "afternoon");
  console.log("get some breakfast!");
  // => if hungry AND time does NOT strictly equal afternoon
  // execute code block, this is the case so message is logged
  
  if(place === "lafayette" || place === "new orleans")
  console.log("They Got a Canes Around Here?");
  // => if place strictly equals lafayette OR place is strictly equal
  // to new orleans, execute code blog, this is the case so message
  // is logged
  
  
 //Assignment Operators: =, +=, -= //
 /** 
  * 3. Assigment operators are how we give our variables values. Often
  * we stick to the = operator but sometimes it is helpful to use 
  * the += and -= in statement expressions
  */
  
  const restaurants = ["la hacienda", 'ancora', 'dat dog', 'midway pizza'];
  console.log(restaurants);
  // => prints [ 'la hacienda', 'ancora', 'dat dog', 'midway pizza' ]
  
  let int = 5;
  int += 2;
  console.log(int);
  // => prints 7
  
  int -= 3;
  console.log(int);
  // => prints 4
  
  
 //Unary Opertatoprs: +, typeOf, !, !!, ++, --, delete //
 /**
  * 4. Unary Operators 
  * Unary operators take one operand or argument and does an
  * operation on it. We have used a couple unary operators already
  * in this section. The ! (bang or NOT) and + operators. We will
  * go over a few more
  */
  
  //typeof: what datatype is this value?
  console.log(typeof "plantain");
  //=> prints string 
  
  /** ++ and --: increment or decrement
  * used withing loops to increment a value by 1 or or decrement
  * by one. Often input as i++ or i--
  */
  
  // ! and !!: bang and double bang
  // ! is the value of NOT the value it is attached to
  // !! always evaluates to true unless number is 0 or value is 
  // undefined, null, etc.
  
  console.log(!!2);
  //prints => true
  
  //delete: 
  //deletes values from arrays and objects by their index or key 
  //respectively
  
  let body = {left: "hand", right: "foot", top: "bottom"};
  delete body.top;
  console.log(body);
  // prints => { left: 'hand', right: 'foot' }
  
 //Ternary Operator: (a ? b : c) //
 /** The Ternary Operator is the only operator that can take on three 
  * operands. It is a conditional operator meaning that in our syntazx
  * above, if a is true return b, if a is false return c.
  */
  
  let age = 16;
  const purchaseTix = age > 17? 'yes': 'no';
  console.log(purchaseTix);
  // => prints no
 
 