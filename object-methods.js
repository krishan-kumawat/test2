/**
 *      Method examples
 */
        let user = {
            name: "John",
            age: 30
        };
        user.sayHi = function() {
            alert("Hello!");
        };
        user.sayHi(); // Hello!

        // Note---> A function that is a property of an object is called its method.


    // Of course, we could use a pre-declared function as a method, like this:
        let user1 = {
            // ...
        };
        // first, declare
        function sayHi() {
            alert("Hello!");
        }
        // then add as a method
        user1.sayHi = sayHi;
        user1.sayHi(); // Hello!

/**
 *      Method shorthand
 *        There exists a shorter syntax for methods in an object literal:
 */
        // these objects do the same
        user2 = {
            sayHi: function() {
            alert("Hello");
            }
        };
        // method shorthand looks better, right?
        user3 = {
            sayHi() { // same as "sayHi: function(){...}"
            alert("Hello");
            }
        };

        alert(user3.sayHi); // source code of function
        alert(user3.sayHi());  // undefined

/***
 *      “this” in methods
 *          It’s common that an object method needs to access the information stored in the object to do its job.
 *          "To access the object, a method can use the this keyword."
 *          The value of this is the object “before dot”, the one used to call the method.
 * 
 */
        let user = {
            name: "John",
            age: 30,
            sayHi() {
            // "this" is the "current object"
            alert(this.name);
            }
        };
        user.sayHi(); // John
        // during the execution of user.sayHi(), the value of this will be user.

        // Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
        let user = {
            name: "John",
            age: 30,
            sayHi() {
              alert(user.name); // "user" instead of "this"
            }
        };

    
        // But such code is unreliable. If we decide to copy user to another variable, 
        // e.g. admin = user and overwrite user with something else, then it will access the wrong object
        let user = {
            name: "John",
            age: 30,
            sayHi() {
              alert( user.name ); // leads to an error
            }
        };
        let admin = user;
        // user = null; // overwrite to make things obvious
        admin.sayHi(); // TypeError: Cannot read property 'name' of null

/**
 *      “this” is not bound
 *          keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.
 * 
 */
        let user = { name: "John" };
        let admin1 = { name: "Admin" };
        function sayHi() {
          alert( this.name );
        }
        // use the same function in two objects
        user.f = sayHi;
        admin1.f = sayHi;
        // these calls have different this
        // "this" inside the function is the object "before the dot"
        user.f(); // John  (this == user)
        admin1.f(); // Admin  (this == admin)
        admin1['f'](); // Admin (dot or square brackets access the method – doesn't matter)

        // Note---> The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.

    // Nnote---> Calling without an object: this == undefined
        function sayHi() {
            alert(this);
        }
        sayHi(); // undefined, when we use strict mode otherwise it will be considered as object Window object

/**
 *      Arrow functions have no “this”
 *          Arrow functions are special: they don’t have their “own” this. 
 *          If we reference this from such a function, it’s taken from the outer “normal” function. 
 * 
 */
        let user = {
            firstName: "Ilya",
            sayHi() {
                let arrow = () => alert(this.firstName);
                arrow();
            }
        };
        user.sayHi(); // Ilya

/**
 *      Task 
 */

//  Task 1

    function makeUser() {
        return {
        name: "John",
        ref: this
        };
    }
    let user = makeUser();
    alert( user.ref.name ); // output will be blank when mode is non strict 


    "use strict" 
    function makeUser() {
        return {
        name: "John",
        ref: this
        };
    }
    let user = makeUser();
    alert( user.ref.name ); // genertate an error --> Cannot read properties of undefined (reading 'name')

// Task 2

    let calculator = {
        sum() {
        return this.a + this.b;
        },
    
        mul() {
        return this.a * this.b;
        },
    
        read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
        }
    };
    calculator.read();
    alert(calculator.a) // value of a 
    alert(calculator.b) // value of b
    alert( calculator.sum() );
    alert( calculator.mul() );

// Task 3 --> https://javascript.info/task/chain-calls

    let ladder = {
        step: 0,
        up() {
        this.step++;
        return this;
        },
        down() {
        this.step--;
        return this;
        },
        showStep: function() { // shows the current step
        alert( this.step );
        return this;
        }
    };
    console.log(ladder.up().up().down().showStep().down().showStep()) // // shows 1 then 0

        