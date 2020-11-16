/**
 * 
 * STRING METHODS AND MANIPULATION
 * 
 * BOTTOMLINE: The string global object has several properties
 * that allow you to alter and access the string's values. Since
 * strings are often used to represent language, being able to alter 
 * their values is essential for crafting messages intended for
 * human discernment
 * 
 * 0. Combining Strings: Concatenation and Template Literals
 */
 
 //Different Ways to Concatenate// 
 
 let firstStr = "Morris Day";
 let secondStr = "& the Time";
 
 // Using + operator //
 
 const addStr = firstStr + secondStr;
 console.log(addStr);
  //prints => "Morris Day& the Time"
 
 // .concat() Method //
  
 const dotConcat = firstStr.concat(secondStr);
 console.log(dotConcat);
 //prints => "MorrisDay& the Time"
 
  // Template Literals //
 
 const tempLit = `${firstStr} ${secondStr}`; 
 console.log(tempLit);
 //prints => "Morris Day & the Time"
 //template literals automatically take out space between
 //two strings if concatenating with the + operator or
 //.concat() method, you must add in spaces between strings
 //manually.
 
 /**
 * 1. Removing Elements: .slice(), .substr(), and .substring() methods
 */
 
 //Different Ways To Remove Character Values//
 let film = "Purple Rain";
 
 // .slice() method: making a new string starting at specified index //
 let purpleWhat = film.slice(7);
 console.log(purpleWhat);
 // => prints "Rain"
 
 // .substr() method: extracting character values at specified index //
 let color = film.substr(0, 6);
 console.log(color);
 // => Prints Purple
 
 // .substring method: extracting character values at specified indices //
 color = film.substring(0, 6);
 console.log(color);
 // => Prints Purple
 
 // the difference between .substr() and .substring() is that .substring()
 // extracts data between to indices (start, end) while .substr () extracts
 // at a starting index for a length of whatever the programmer specifies. 
 // (start index, length), it happens to be that since Purple is the first word
 // in the so these values are the same but what do we need to do for the 
 // second half of the title?

 
 let subStr = film.substr(7, 4);
 console.log(subStr);
 
 let subString = film.substring(7, film.length);
 console.log(subString);
 //=> both print Rain
 
 /**
 * 2. Replacing Values: .replace() method
 */
 let righteous = "Bill and Ted's Excellent Adventure";
 
 //.replace() method //
 
 let righteousSequel = righteous.replace("Excellent Adventure", "Bogus Journey");
 console.log(righteousSequel);
 // => both print "Bill and Ted's Bogus Journey"
 
 /**
 * 3. Changing a String's Case: .toLowerCase() and .toUpperCase() methods 
 * //helpful for edge cases//
 */
 const dAlbum2018 = "Black Messiah";
 const dAlbum2000 = "VOODOO";
 
 // toUpperCase() and toLowerCase() methods //
 
 const dAlbumUpper = dAlbum2018.toUpperCase();
 console.log(dAlbumUpper);
 // prints => "BLACK MESSIAH"
 
 const dAlbumLower = dAlbum2000.toLowerCase();
 console.log(dAlbumLower);
 // prints => voodoo
 
 /**
 * 4. Removing White Space from a String: .trim() method
 */
 const bigSean = "                    woa                         ";
 const adLib = bigSean.trim();
 console.log(adLib);
 //=> "woa"
 
 /**
 * 5. Changing a String into an Array .split() method
 */
 const liquor = "cognac whiskey bourbon vodka gin tequila rum";
 const liquorArr =  liquor.split(" ");
 console.log(liquorArr);
 // prints => 
 //[ 'cognac', 'whiskey', 'bourbon', 'vodka', 'gin', 'tequila', 'rum' ]
 
 /** 6. Searching within a string: .search() method.
 * We can use the .search() method to look at an array and see if an 
 * element or sequence of elements are present. * Something to note about
 * the search method is that it returns position of a string (index). If a 
 * word is not present the position is -1.
 */

let randoStr = "hare rabbit porcupine";
console.log(randoStr.search("rabbit"));
// => prints 5

console.log(randoStr.search("lion"));
// => prints -1
 