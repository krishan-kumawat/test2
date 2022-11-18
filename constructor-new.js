/**
 *      Constructor, operator "new"
 *          object can be done using constructor functions and the "new" operator.
 */

/**
 *      Constructor function
 *          Constructor functions technically are regular functions. There are two conventions though:
 *              1. They are named with capital letter first.
                2. They should be executed only with "new" operator.
 */
        function User(name) {
            this.name = name;
            this.isAdmin = false;
          }
          let user = new User("Jack");
          alert(user.name); // Jack
          alert(user.isAdmin); // false
    /**
          When a function is executed with new, it does the following steps:
            1. A new empty object is created and assigned to this.
            2. The function body executes. Usually it modifies this, adds new properties to it.
            3. The value of this is returned.
    */
        function User(name) {
            // this = {};  (implicitly)
            // add properties to this
            this.name = name;
            this.isAdmin = false;
            // return this;  (implicitly)
        }


/**
 *      any function (except arrow functions, as they don’t have this) can be used as a constructor.
 */

/**
 *      new function() { … }
 */
        // create a function and immediately call it with new
        let user1 = new function() {
            this.name = "John";
            this.isAdmin = false;
        
            // ...other code for user creation
            // maybe complex logic and statements
            // local variables etc
        };

/**
 *      Constructor mode test: new.target
 *          Inside a function, we can check whether it was called with new or without it, using a special new.target property.
            It is undefined for regular calls and equals the function if called with new:
 */

            function User() {
              alert(new.target);  // source code of User() function
            }
            // without "new":
            User(); // undefined
            // with "new":
            new User(); // function User { ... }


        // That can be used inside the function to know whether it was called with new, 
            // “in constructor mode”, or without it, “in regular mode”.
        // We can also make both new and regular calls to do the same

                //  new.target---> undefined    !new.target----> true
            function User(name) {
                if (!new.target) { // if you run me without new    // 
                return new User(name); // ...I will add new for you
                }
            
                this.name = name;
            }
            
            let john = User("John"); // redirects call to new User
            alert(john.name); // John

/**
 *      Return from constructors
 *          Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.
 *          
 *          But if there is a return statement, then the rule is simple:
 *              1. If 'return' is called with an object, then the object is returned instead of this.
 *              2. If return is called with a primitive, it’s ignored.
 * 
 *          In other words, return with an object returns that object, in all other cases this is returned.
 */
            function BigUser() {
                this.name = "John";
                return { name: "Godzilla" };  // <-- returns this object
            }
            alert( new BigUser().name );  // Godzilla, got that object

            // And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):
                function SmallUser() {
                    this.name = "John";
                    // return 3;   //  it’s ignored.
                    return; // <-- returns this 
                }
                alert( new SmallUser().name );  // John
                alert( new SmallUser() );  // object

/** 
 *      Omitting parentheses
 */

        let user2 = new User; // <-- no parentheses
        // same as
        let user3 = new User();

/**
 *      Methods in constructor
 *          Using constructor functions to create objects gives a great deal of flexibility. 
 *          The constructor function may have parameters that define how to construct the object, and what to put in it.
 *       Of course, we can add to this not only properties, but methods as well.
 */
        
        function User(name) {
           this.name = name;
           this.sayHi = function() {
             alert( "My name is: " + this.name );
           };
         }
         let john1 = new User("J    ohn");
         john1.sayHi(); // My name is: John
         /*
         john = {
            name: "John",
            sayHi: function() { ... }
         }
         */


/**
 *      Tast 1
 */
        function Calculator() {
            this.read = function() {
            this.a = +prompt('a?', 0);
            this.b = +prompt('b?', 0);
            };
            this.sum = function() {
            return this.a + this.b;
            };
            this.mul = function() {
            return this.a * this.b;
            };
        }
        let calculator = new Calculator();
        calculator.read();
        alert( "Sum=" + calculator.sum() );
        alert( "Mul=" + calculator.mul() );