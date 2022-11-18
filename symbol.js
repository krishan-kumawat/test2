/**
 *      Symbol type
 * 
 *          By specification, only two primitive types may serve as object property keys:
 *              1. string type, or
 *              2. symbol type.
 */

/**
 *      Symbols
 *          A “symbol” represents a unique identifier.
 *          A value of this type can be created using Symbol(): 
 */

let id = Symbol();

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1==id2);

// alert(id1);  //error   Cannot convert a Symbol value to a string
alert(id1.toString());  //
alert(id1.description);

let user = {}
user[id1] = 10;

console.log(user[id1]);
console.log(user);

let id4 = Symbol("id");

let user2 = {
  name: "John",
  [id4]: 123 // not "id": 123
};

console.log(user2[id4])

/**
 * 
 *      Symbols are skipped by for…in
 *          Symbolic properties do not participate in for..in loop.
 */

        let id = Symbol("id");
        let user = {
        name: "John",
        age: 30,
        [id]: 123
        };
        
        for (let key in user) alert(key); // name, age (no symbols)
        
        // the direct access by the symbol works
        alert( "Direct: " + user[id] ); // Direct: 123

    // NOTE====> Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle.

    // In contrast, Object.assign copies both string and symbol properties:

        let id = Symbol("id");
        let user = {
        [id]: 123
        };
        let clone = Object.assign({}, user);
        alert( clone[id] ); // 123


/**
 * 
 *      Global symbols
 */
        // read from the global registry
        let id = Symbol.for("id"); // if the symbol did not exist, it is created
        // read it again (maybe from another part of the code)
        let idAgain = Symbol.for("id");
        // the same symbol
        alert( id === idAgain ); // true

/**
 *      Symbol.keyFor
 */
        // get symbol by name
        let sym = Symbol.for("name");
        let sym2 = Symbol.for("id");
        // get name by symbol
        alert( Symbol.keyFor(sym) ); // name
        alert( Symbol.keyFor(sym2) ); // id
        alert( Symbol.keyFor(sym1) ); //ERROR===> Uncaught ReferenceError: sym1 is not defined


/**
 *      The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined.
 * 
 */
        let globalSymbol = Symbol.for("name");
        let localSymbol = Symbol("name");
        alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
        alert( Symbol.keyFor(localSymbol) ); // undefined, not global
        alert( localSymbol.description ); // name