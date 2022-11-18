let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

/**
* Literals and properties
*/
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;

// To remove a property, we can use the delete operator:
    delete user.age;


    
// We can also use multiword property names, but then they must be quoted:
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};


//  The last property in the list may end with a comma:

    let user = {
        name: "John",
        age: 30,
    } // That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.



let user = {};
// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;


let user = {
    name: "John",
    age: 30
  };
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user[key] ); // John (if enter "name")



/**
    Computed properties
    We can use square brackets in an object literal, when creating an object. That’s called computed properties.
**/
    let fruit1 = prompt("Which fruit to buy?", "apple");
    let bag1 = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
    };
    alert( bag.apple ); // 5 if fruit="apple"

    // same as the above
    let fruit2 = prompt("Which fruit to buy?", "apple");
    let bag2 = {};
    // take property name from the fruit variable
    bag[fruit] = 5;


    let fruit3 = 'apple';
    let bag3 = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
    };


    /**
        Property value shorthand

    */
        function makeUser(name, age) {
            return {
            name: name,
            age: age,
            // ...other properties
            };
        }
        let user = makeUser("John", 30);
        alert(user.name); // John

        function makeUser(name, age) {
            return {
              name, // same as name: name
              age,  // same as age: age
              // ...
            };
        }

/**
    Property names limitations
*/

// these properties are all right
    let obj = {
        for: 1,
        let: 2,
        return: 3,
        $:23,
        _:45,
        0:0
    };

    alert( obj.for + obj.let + obj.return );  // 6
    alert(obj[$]) // undefined
    alert(obj['$']) // 23
    alert(obj['0']) // 0
    alert(obj[0]) // 0

// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

    let obj1 = {};
    obj1.__proto__ = 5; // assign a number
    alert(obj1.__proto__); // [object Object] - the value is an object, didn't work as intended


/**
 *      Property existence test, “in” operator
 *              There will be no error if the property doesn’t exist! , Reading a non-existing property just returns undefined. 
 */

        let user = {};
        alert( user.noSuchProperty === undefined );     // true means "no such property"

        // There’s also a special operator "in" for that.

        //  Syntax 
            "key" in object

        let user = { name: "John", age: 30 };
        alert( "age" in user ); // true, user.age exists
        alert( "blabla" in user ); // false, user.blabla doesn't exist

        // left side of in there must be a property name. That’s usually a quoted string.
        // If we omit quotes, that means a variable should contain the actual name to be tested.
        let user = { age: 30 }; 
        let key1 = "age";
        alert( key1 in user ); // true, property "age" exists


        /**
         * Why does the in operator exist? Isn’t it enough to compare against undefined?
         * Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.
         * It’s when an object property exists, but stores undefined.
         */

        let obj = {
           test: undefined
        };
        alert( obj.test ); // it's undefined, so - no such property?
        alert( "test" in obj ); // true, the property does exist!


/**
 * The "for..in" loop
 *      To walk over all keys of an object, there exists a special form of the loop: for..in.
 */

        // Syntax 
        for (key in object) {
            // executes the body for each key among object properties
        }

        // Example 

        let user = {
            name: "John",
            age: 30,
            isAdmin: true
        };
          
        for (let key in user) {
          // keys
          alert( key );  // name, age, isAdmin
          // values for the keys
          alert( user[key] ); // John, 30, true
        }

/**
 * Ordered like an object
 *      The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order.
 */

        let codes = {
           "49": "Germany",
           "41": "Switzerland",
           "44": "Great Britain",
           "1": "USA"
        };

        for (let code in codes) {
          alert(code); // 1, 41, 44, 49
        }

        let codes1 = {
            "49": "Germany",
            "41": "Switzerland",
            "44": "Great Britain",
            "name": "Krishan",
            "1": "USA"
        };

        for (let code in codes1) {
            alert(code); // 1, 41, 44, 49, name  // all numbers first then strings
        }

/**
 * Integer properties? What’s that?
 *      The “integer property” term here means a string that can be converted to-and-from an integer without a change.
 */
        // Number(...) explicitly converts to a number
        // Math.trunc is a built-in function that removes the decimal part
        alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
        alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
        alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

        //On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:

        let user = {
            name: "John",
            surname: "Smith"
          };
          user.age = 25; // add one more
          
          // non-integer properties are listed in the creation order
        for (let prop in user) {
          alert( prop ); // name, surname, age
        }