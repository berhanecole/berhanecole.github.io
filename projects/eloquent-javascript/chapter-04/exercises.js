////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let rArr = [];
  if(!step){
    step = 1}
  if(step < 0){
  return rArr}
  if(start < end){
  for (let i = start; i <= end; i += step){
    rArr.push(i)
  } 
  
} else if (start > end){
  for (let j = start; j >= end; j -= step){
    rArr.push(j);
  }
} return rArr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(numArray) {
  let num = 0;
  for(let i = 0; i < numArray.length; i++){
    num += numArray[i];
  }
return num;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(frontwards) {
  let backwards = [];
  for(let i = frontwards.length - 1; i >= 0; i--){
    backwards.push(frontwards[i]);
  }
return backwards;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arbitrary) {
  // we need to flip numbers in place
  let midpoint = Math.floor(arbitrary.length / 2);
  // let arbArr = [];
  
  for(let i = 0; i < midpoint; i++){
    let pouch = arbitrary[i];
    arbitrary[i] = arbitrary[arbitrary.length - i - 1];
    arbitrary[arbitrary.length - i - 1] = pouch;
    
    
  }
return arbitrary;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  /**we want to create a nested object list with tow keys value and rest;
   * the value will be the first value of the array where rest will be an array 
   * of the rest of the values
   * 
   * i know i need to use a for loop
   */
   
   //create list Obj to hold array contents
  // let listObj = {};
   
  // //let me create a dummy array to hold array's contents
  // let dummy = array;
   
  // //last content in dummyArray should be null
   
  // dummy.push(null);
   
  // for(let i = 0; i > dummy.length; i++){
  //   listObj.value = dummy[i];
  //   dummy.shift();
  //   listObj.rest = {
  //     "value": dummy[i],
  //     "rest" : dummy.shift();
  //   if(dummy.length === 1){
  //     listObj.rest = null;
  //   }
  // }
  
  //buiild the list up backwards is so much easier
  
  let listObj = null;
  //build list with a null value very very clever
  for(let i = array.length - 1; i >= 0; i--){
    listObj = {value: array[i], rest: listObj};
  }
   
   return listObj;
}
   




////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//take in an object that is formed sort of like a list  and then return an array
function listToArray(object) {
  //base case when rest === null stop recursion
  if(object.rest === null){
    return [object.value];
  } else {
  
  //recursive case
  return[object.value].concat(listToArray(object.rest));
  }

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, listObj) {
  //prepend takes an element and a list and puts it at the front of the list... basically
  //we need to just put it in front
  
  let prependObj = {value: element, rest: listObj};
return prependObj;
} 

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index){
  
if(list === undefined){
  return undefined;
} else if (index === 0){
  return list.value;
} else if(index < 0){
  return undefined;
}

return nth(list.rest, index - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function deepEqual(thing1, thing2) {
//   if(typeof thing1 === "object" && typeof thing2 === "object"){
//     let thing1Prop = Object.keys(thing1);
//     let thing2Prop = Object.keys(thing2);
//     if(thing1Prop.length === thing2Prop.length){
//       for(let i = 0; i < thing1Prop.length; i++){
//         if(thing1Prop[i] !== thing2Prop[i]){
//           return false;
//         } else {
//           return true;
//         }
//       }
//     } else {
//       return false;
//     }
//   } else if(thing1 === thing2 && typeof thing1 !== "object"){
//     return true;
//   } else if(thing1 === {} && thing2 === {}){
//     return true;
//   }
//   else {
//     return false;
//   }
// }





// function deepEqual(thing1, thing2) {
//   if(typeof thing1 === "object" && typeof thing2 === "object"){
//     let thing1Prop = Object.keys(thing1);
//     let thing2Prop = Object.keys(thing2);
//     if(thing1Prop.length === 0 && thing2Prop.length === 0){
//           return true
//     } else if(thing1Prop.length === thing2Prop.length){
//       for(let i = 0; i < thing1Prop.length; i++){
//         if(thing1Prop[i] !== thing2Prop[i]){
//           return false;
//         } else if(thing1[thing1Prop[i]] !== thing2[thing2Prop[i]]){
//           return false;
//         } else {
//           return true;
//         }
//       }
//     } else {
//       return false;
//     }
//   } else if(thing1 === thing2 && typeof thing1 !== "object"){
//     return true;
//   } 
//   else {
//     return false;
//   }
// }









// function deepEqual(thing1, thing2) {
//   if(typeof thing1 === "object" && typeof thing2 === "object"){
//     let thing1Prop = Object.keys(thing1);
//     let thing2Prop = Object.keys(thing2);
//     if(thing1Prop.length === 0 && thing2Prop.length === 0){
//           return true
//     } else if(thing1Prop.length === thing2Prop.length){
//       for(let i = 0; i < thing1Prop.length; i++){
//         if(thing1Prop[i] !== thing2Prop[i]){
//           return false;
//         } else if(thing1[thing1Prop[i]] !== thing2[thing2Prop[i]] && typeof thing1[thing1Prop[i]] !== "object"){
//           return false;
//         } else if(thing1[thing1Prop[i]] !== thing2[thing2Prop[i]] && typeof thing1[thing1Prop[i]] === "object"){
//           // let innerProp1 = Object.keys(thing1[thing1Prop[i]])
//           // let innerProp2 = Object.keys(thing2[thing2Prop[i]])
//           // for(let j = 0; j < innerProp1; j++){
//           //   if(thing1[thing1Prop][innerProp1][j] !== thing2[thing2Prop][innerProp2][j]){
//           //     return false
//           //     } 
//           //     else { return true
//           //     }
//           // }
//           for(let key in thing1[thing1Prop[i]]){
//             // if(thing1[thing1Prop[i]][key] === null || thing2[thing2Prop[i]][key] !== null){
//             //   return false;
//             // }
//             for(let z = 0; z < thing1[thing1Prop[i]][key].length; z++){
//             if(thing1[thing1Prop[i]][key][z] !== thing2[thing2Prop[i]][key][z]){
//               return false;
//             } else {
//               return true;
//             }
//             }
//           }
//         }
//         else {
//           return true;
//         }
//       }
//     } else {
//       return false;
//     }
//   } else if(thing1 === thing2 && typeof thing1 !== "object"){
//     return true;
//   } 
//   else {
//     return false;
//   }
// }

function deepEqual(thing1, thing2) {
  if (thing1 === thing2) return true;
  
  if (thing1 === null || typeof thing1 !== "object" ||
      thing2 === null || typeof thing2 !== "object")
    return false;
  
  let props1 = 0, props2 = 0;

  for (let prop in thing1)
    props1 += 1;

  for (var prop in thing2) {
    props2 += 1;
    if (!(prop in thing1) || !deepEqual(thing1[prop], thing2[prop]))
      return false;
  }

  return props1 === props2;
}






////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
