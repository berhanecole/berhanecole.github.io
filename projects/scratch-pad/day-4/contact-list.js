// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
/** make contact should return an object with the person's contact info
 */
 return{
    id : id,
    nameFirst : nameFirst,
    nameLast : nameLast
} 
}

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        addContact: function(contact){
            contacts.push(contact)
        },
        
        /** findContact function takes a full name string as its parameter and returns the contact object if found
         * in the contacts list or undefined if the fullName does not match the full name of any in the contacts
         * list.
         * 
         * first issue we have here is how do we find the fullName of our object. The givens we have is that 
         * we need to loop through our contacts array looking for the objects that correspond to the fullName 
         * parameter.
         * 
         * Following our for loop we know need an if statement to activate our code in the
         * event that fullName parameter correlates to an object we have in our array. we make our
         * loop length as long as our iterator (i) is lower than the contacts.length (our contacts list)
         * 
         * in order to circumvent the issue of not having a full name variable for each object I use bracket and 
         * dot notation to call those keys and use the + operator to concatenate the keys to become a fullName
         * 
         * once we do this all we need to do is retur contacts[i] i.e. the object that corresponds to the fullName
         * 
         * we do not need a statement to address if the fullName doesn't correlate to an object as the code will
         * naturally resolve to undefined in this case.
         * 
         */
        
        findContact: function(fullName){
             for(var i = 0; i < contacts.length; i++){
                if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                     return contacts[i]
                 }
             }
         },
         
         /**remove contact function will look for a contact and remove it if the remove contact method
          * is called. Here we are given a contact object so like the findContact function we will
          * be able to start this problem by using a for loop coupled with an if statement however unlike
          * the findContact function we can simply check if our parameter is strictly equal to whatever we have 
          * at the index contacts[i]. if contact === contacts[i] we need to remove the data
          * 
          * to remove the data I used the array method .splice(). I take whatever index (i) our if statement 
          * resolves to true and I remove 1 element (i.e. contacts[i])
          */
          
        removeContact: function(contact){
            for(var i = 0; i < contacts.length; i++){
                if(contact === contacts[i]){
                    contacts.splice(i, 1)
                }
            }
        },
        
        /**printAllContacts function will print all of the full names of every contact in our contacts list.
         * We want to return a STRING with the fULLNAMES of every contact with a NEWLINE after each name 
         * This Pattern stops after the LAST fullName
         * 
         * first how are we going to format our string
         * 
         *new line = .join("\n")
         * 
         * first I think I want to make a new array literal that takes the keys of nameFirst and nameLast
         */
          
         
         printAllContactNames: function(){
             
             var collectedFullNames = [];
             
             for (var i = 0; i < contacts.length; i++){
                 collectedFullNames.push(contacts[i].firstName + " " + contacts[i].lastName);
             }
             return collectedFullNames
             
           
         
    }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
