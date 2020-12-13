// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
 return  array.reduce(
    (acc, value) => {
      return acc.concat(value);
    });

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunc, updateFunc, bodyFunc) {
/**So we are making an imitation for loop
 * 
 * 
 * so lets just write a common for loop:
 * 
 * for(let i = 0; i < array.length; i++){console.log(i)}
 * 
 * the (value) of i is 0
 * 
 * the (testFunc) here is *i < array.length*
 * this will provide a boolean value 
 * 
 * to begin the loop testFunc(i) === true
 * 
 * once this is true we can execute something 
 * 
 * that something will be our bodyFunc
 * in our example this was console.log
 * 
 * next we need to update our value until it fails our test.
 * we can use a for loop to execute this...
 * 
 * where to start
 */
 
if(testFunc(value) === false){
  return;
} else if(testFunc(value) === true){
  bodyFunc(value);
}
 
// value = updateFunc(value);
return(loop(updateFunc(value), testFunc, updateFunc, bodyFunc));

// for(let currentVal = value; testFunc(currentVal) === false; updateFunc(currentVal)){
// bodyFunc();
// }


}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  let filterArr = [];
  filterArr = array.filter(e => test(e));
  return filterArr.length === array.length;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// //letter we pass in mus be its unicode #
// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => {
//         return code >= from && code < to;
//       })) {
//       return script;
//     }
//   }
//   return null;
// }

// //items is iterable and groupName will be a function
// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({
//         name,
//         count: 1
//       });
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts; //return an array of objects []
// }

function dominantDirection(str) {
  //dominant direction on characters
  //input strings
  //output ltr || rtl
  //needs to implement helper cunctions
  
 let dom = countBy(str, function(char){
    //get the unicode value for the current character
    const unicode = char.charCodeAt();
    const script = characterScript(unicode);
    if(script !== null){
      return script.direction;
    } else {
      return script;
    }
  });
  
  // find the highes count by sorting.
  
  dom.sort((a, b) => {return b.count - a.count})
  return dom[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
