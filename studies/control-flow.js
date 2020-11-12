/**
 * CONTROL FLOW
 * 
 * BOTTOMLINE: Control Flow is another way of saying the utilization 
 * of conditional statements to execute some code under certain circumstances
 * and not under others. You can think about this in terms of channel 
 * irrigation. Data flows through your code and you set conditions for the 
 * program to evaluate that data and determine what action to take dependent 
 * on your instructions. Like irrigation led to complex dynamic civilizations,
 * Control Flow allows for complex and dynamic code.
 * 
 * 0. if statements like other conditional statements are utilized to direct 
 * your program to execute code once a certain condition is met. The condition
 * is often formed with a comparative operator comparing data against one 
 * another, however all that is necessary is that the condition resolves to
 * true to execute the code the programmer desires. If condition resolves to
 * false, the code never runs.
 * 
 * The syntax is:
 * if(//conditon){//code block}
 */
 
 // if statement //
 
 const time = "afternoon";
 if(time === "morning"){
   console.log("Have Some Coffee");
 }
 
 // => nothing runs since the condition of morning is never met
 
  if(true){
   console.log("Have Some Coffee");
 }
 
 // prints => Have Some Coffee because condition is the boolean true
 // boolean true is all that the program needs the condition to resolve
 // to
 
 /**
 * 1. else statements can be seen as the default response or code the 
 * program runs if conditions are not met. They must always follow a 
 * if statement and they do not require a condition only a code block.
 * Once an else statement is added to an if statement, the code becomes
 * a conditional chain
 */
 
 // else statement //
 
  if(time === "morning"){
   console.log("Have Some Coffee");
  } else {console.log("Have Some Tea, Instead.")}
  
  // prints => "Have Some Tea, Instead"
  
 /**
 * 2. if, else if chains are utilized when you want to check if another 
 * condition is true, if preceding conditions resolved to false. else if
 * statements are syntactically identical to if statements and always
 * follow them. For an if, else-if chain, it is unneccessary to have an
 * else statement but they are permitted if you want to add a default 
 * code block. It is important to remember that the FIRST condition that 
 * is true will execute its code block. Even if other conditions are true
 * the code will ignore them. This being the case it is important to chain
 * together conditional statements strategically.
 */
 
 // if, else-if chains //
 
 if(time === "morning"){
   console.log("Have Some Coffee");
  } else if (time === "afternoon"){
    console.log("How About Decaf?");
  } else {console.log("Have Some Tea, Instead.")}
  
  // Prints => How About Decaf
  
 /**
 * 3. switch statments are similar to if, else-if, else chains.
 * The syntax is different but switch statements check for conditions and 
 * execute  those conditions if a boolean true is met. Some differences
 * are that you must use the keyword break between conditional statements to
 * stop the code block from bleeding into the next conditional statement. 
 * Additionally within switch statements the default message serves as a 
 * stand-in for the else statement in a if, else-if, else chain. Just like 
 * that chain, the default statement in a switch statement is optional
 * 
 * One crucial difference between switch statements and if, else-if chains
 * is that switch statements are always looking if the condition is === or
 * strictly equal to the condition asserted at the beginning of the 
 * conditional chain. If, else-if statements give the programmer more control
 * over the set condition.
 * 
 * Switch Statement Syntax:
 * 
 * switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
 */
 
 switch(time){
   case "morning": 
   console.log("Have Some Coffee");
    break;
   case "midday": 
   console.log("Single or Double shot");
    break;
   case "afternoon":
   console.log("How About Some Decaf?");
    break;
   case "Midnight":
   console.log("You Might Have a Problem");
    break;
   default: 
   console.log("We Have Caffeinated Tea As Well");
   
 }
 
 //=> prints How About Some Decaf?