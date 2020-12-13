////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(a, b) {
  if(a < b){
    return a;
  } else {
    return b;
  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if(num === 0){
    return true
  } else if(num === 1){
    //number is odd
    return false
  } else if(num < 0){
    //number is negative
    return isEven(num + 2)
  }
return isEven(num - 2);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  let stringArr = string.split("");
  let charArray = [];
  for(let i = 0; i < stringArr.length; i++){
    if(string[i] === char){
      charArray.push(string[i]);
    }
  } return charArray.length;

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  
let stringArr = string.split("");
  let bArray = [];
  for(let i = 0; i < stringArr.length; i++){
    if(string[i] === "B"){
      bArray.push(string[i]);
    }
  } return bArray.length;

}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
