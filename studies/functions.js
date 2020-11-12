/**
 * FUNCTIONS
 * 
 * BOTTOM LINE: Functions are sequences of code encapsulated by programmers 
 * for the ease of implementation throughout the code.
 * 
 * 0. The life of a Function is split into two phases: Function Declaration 
 * and Function Calls.
 * 
 * 1. Function Declaration works similarly to variable declaration except 
 * that the function AND its value are declared simultaneously.The Syntax of
 * a Function Declaration is also distinct as it uses the keyword Function
 * and is proceeded by a name, parameters within () and a code block within {}. 
 * Functions do not require a name. This differentiates anonymous functions from 
 * named functions. Functions also do not require parameters. Parameters are 
 * placeholders for arguments that are specified during a function call. 
 * Parameters allow for further specificity to how a function interacts with
 * its data. If parameters are specified, the parameter name(s) are expected to
 * appear in the function's code detailing what how the program is expected to 
 * evaluate the data as it relates to the parameters. Parameters should have
 * names that correspond to their type or use for clarity. Parameters can be
 * as numerous as necessary but must correspond to the amount of arguments the
 * programmer means to input.
 * 
 * 2. In Function declaration the return keyword is used to return a value from
 * the function. This is also known as the functions output. By default a 
 * function's output is undefined if no value is returned.
 */
 
  //Function Declaration//
  
 function addNum(num1, num2){
 let sumNum = 0;
 sumNum = num1 + num2;
 return sumNum;
 }
 
 /**
  * 3. Function Calls are the instance in which a programmer calls upon or
  * implements a declared function. In Order to perform a function call a programmer
  * inputs the function name followed by parentheses and within those parentheses 
  * the programmer inputs the arguments if any. As we outlined above, parameters 
  * in a function declaration stand in for arguments. Whatever happens to the parameters
  * in our Function Declaration will happen to our arguments in our Function Call.
  * 
  * We can think of the arguments in a function call as the inputs to the function
  * where what the code block returns is seen as the function's output. Remember, 
  * Functions do not require parameters or return statements thus a function's input
  * and output is ultimately up to the discretion of the programmer. Functions are
  * comlex and are implemented in many different ways.
  */
  
  // Function Call //
  addNum(2, 4);
  //returns 6 
  console.log(addNum(2, 4));
  //prints 6
  
  // Assigning Anonymous Function to Variable //
  
  let modNum = function(num1, num2){
      console.log(num1 % num2);
  };
  
  modNum(17, 13);
  // => prints 4
  
/**
 * 4. Function Properties: Functions have various particularities such as being 
 * a first class object which allows functions to contain any datatype, return any 
 * datatype even other functions, be assigned to variables, etc.
 * 
 * Functions are function-scoped meaning that declared and initialized variables
 * within the function's code block can only be accessed by the function. However
 * function's are able to access variables declared and initialized outside the 
 * function. You can think of function scope as the vip area of a nightclub. 
 * Functions have a special menu on top of the regular menu of variables to utilize.
 * 
 * Another particularity is that functions are hoisted. Unlike variables functions 
 * are hoisted with their entire value so functions may be used before they are declared
 * in code as long as the function is declared somewhere in the code.
 * 
 * Another fun fact is that all functions are expressions since they produce values.
 *
 * 5. Function Closures are a biproduct of functions being function-scoped. 
 * Functions can be nested within functions and also be returned from functions,
 * this coupled with functions' property of being able to see variables in scopes
 * outside the function's scope allow functions to interact with and incorporate
 * other variables into its code. This way functions can become be little (or big) 
 * factories.
 * 
 */
 
  //Function Closure//
  
  let dubya = "Where";
  function wya(){
      let why = "yah";
      function incave(){
          let aye = "at";
          console.log(`${dubya} ${why} ${aye}`);
          
      }
      return incave();
  }
  
  wya();
  // => prints Where yah at
  

