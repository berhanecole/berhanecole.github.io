
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(limit) {
  for (let i = "#"; i.length <= limit; i += "#") {
  console.log(i);
  }
  
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(let i = 1; i <= 15; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    } else if(i % 3 === 0){
      console.log("fizz");
    } else if(i % 5 === 0){
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function drawChessboard(dimension) {
  
  /**we need an 8 x 8 grid
   * either a # or a space
   * 
   *  #  #  #  #
   * #  #  #  #
   *  #  #  #  #
   * #  #  #  #
   *  #  #  #  #
   * #  #  #  #
   *  #  #  #  #
   * #  #  #  #
   * 
   * /n = newLine
   */
      
  
  for( let i = " "; i.length < dimension * dimension; i += "#"){
    for(let j = 1; j < i.length; j++){
      
       if(i.replace(/\n/g, '').length === dimension * dimension){
        console.log(i)}
       else if(i[j] === " " && i.replace(/\n/g, '').length % dimension !== 0){
        i += "#"
        continue;
      } else if(i[j] === "#" && i.replace(/\n/g, '').length % dimension !== 0){
        i += " "
        continue; 
        } else if(i[j] === "\n" && i[j - 1] === " "){
        i += " "
        continue;
      } else if(i[j] === "\n" && i[j - 1] === "#"){
        i += "#" 
        continue;
       } else if(i.replace(/\n/g, '').length % dimension === 0){
        i += "\n"}
        continue;
        
     
      // break;
      
    
    
    
    // break;
   

} 

}
// }
}
drawChessboard(8)



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
