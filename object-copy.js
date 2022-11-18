/**
 * Object references and copying
 * 
 *      One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
 * 
 */

    let message = "Hello!";
    let phrase = message;     // As a result we have two independent variables, each one storing the string "Hello!".

    // A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
    let user = {
        name: "John"
    };

    // When an object variable is copied, the reference is copied, but the object itself is not duplicated.

    let user1 = { name: "John" };
    let admin = user1; // copy the reference

    let user2 = { name: 'John' };    
    let admin2 = user2;   
    admin2.name = 'Pete'; // changed by the "admin" reference    
    alert(user2.name); // 'Pete', changes are seen from the "user" reference

/**
 * Comparison by reference
 *      Two objects are equal only if they are the same object.
 */

    let a = {};
    let b = a; // copy the reference
    
    alert( a == b ); // true, both variables reference the same object
    alert( a === b ); // true

    
    // Note ---> 
                // Const objects can be modified
                const user3 = {
                    name: "John"
                };
                user3.name = "Pete"; // (*)
                alert(user3.name); // Pete

                adminUser = {}
                // user3 = adminUser;   // 
                console.log(user3);

/**
 *  Cloning and merging, Object.assign
 *          So, copying an object variable creates one more reference to the same object.
 *          But what if we need to duplicate an object?
 *          We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.
 */

            let user3 = {
                name: "John",
                age: 30
            };
            let clone = {}; // the new empty object
            // let's copy all user properties into it
            for (let key in user3) {
              clone[key] = user3[key];
            }
            // now clone is a fully independent object with the same content
            clone.name = "Pete"; // changed the data in it
            alert( user3.name ); // still John in the original object

        //  Another method ---->

                // We can also use the method Object.assign.
                // Syntax
                    Object.assign(dest, ...sources)
                    //    1. The first argument dest is a target object.
                    //    2. Further arguments is a list of source objects.
                            // It copies the properties of all source objects into the target dest, and then returns it as the result.

                let user5 ={
                    "name": "Krishan"
                }
                let permission1 = {
                    isAdmin: true
                }
                let permission2 = {
                    onlyEdit: true
                }
                Object.assign(user5,permission1,permission2);
                console.log(user5);

                //  Note1---->
                            //  If the copied property name already exists, it gets overwritten:

                                let user6 = { name: "John" };       
                                Object.assign(user6, { name: "Pete" });     
                                alert(user6.name); // now user = { name: "Pete" }

                // Note2----->
                            // We also can use Object.assign to perform a simple object cloning:
                            let user7 = {
                                name: "John",
                                age: 30
                            };
                            let clone = Object.assign({}, user7);
                            alert(clone.name); // John
                            alert(clone.age); // 30

/**
 *      Nested cloning
 *          Until now we assumed that all properties of user are primitive. But properties can be references to other objects.
 */

        let user8 = {
            name: "John",
            sizes: {
            height: 182,
            width: 50
            }
        };
        
        alert( user8.sizes.height ); // 182

    // Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes
        let user9 = {
            name: "John",
            sizes: {
            height: 182,
            width: 50
            }
        };
        
        let clone = Object.assign({}, user9);
        
        alert( user9.sizes === clone.sizes ); // true, same object
        
        // user and clone share sizes
        user9.sizes.width = 60;    // change a property from one place
        alert(clone.sizes.width); // 60, get the result from the other one

        // To fix that and make user and clone truly separate objects, 
        // we should use a cloning loop that examines each value of user[key] and, 
        // if it’s an object, then replicate its structure as well. 
        // That is called a “deep cloning” or “structured cloning”. 
        // There’s structuredClone method that implements deep cloning.

        /**
         *      1. structuredClone
         *              The call structuredClone(object) clones the object with all nested properties.
         */
                let user10 = {
                    name: "John",
                    sizes: {
                    height: 182,
                    width: 50
                    }
                };
                let clone = structuredClone(user10);
                alert( user10.sizes === clone.sizes ); // false, different objects
                // user and clone are totally unrelated now
                user.sizes.width = 60;    // change a property from one place
                alert(clone.sizes.width); // 50, not related
            // The structuredClone method can clone most data types, such as objects, arrays, primitive values.

            // It also supports circular references, when an object property references the object itself (directly or via a chain or references).
                    let user = {};
                    // let's create a circular reference:
                    // user.me references the user itself
                    user.me = user;
                    let clone = structuredClone(user);
                    alert(clone.me === clone); // true
                    alert(clone.me==user.me)  //  false
            
                // Although, there are cases when structuredClone fails.
                        // error
                        structuredClone({
                            f: function() {}
                        });

            // _.cloneDeep(obj) Method 

                let deepClone = {
                    1: function(){
                        return 1;
                    }
                }

                // let deep_Clone =  structuredClone(deepClone);  // this type of cloning is not possiable 

            /**
             *      JavaScript library lodash (https://lodash.com/).
             */

                // Example 1
                    let deepClone1 = {
                        1: function(){
                            return 1;
                        }
                    }
                    let deep_Clone =  _.cloneDeep(deepClone1); 
                    alert(deep_Clone['1']===deepClone['1'])  // true

                // Example 2
                    var objects = [{ 'a': 1 }, { 'b': 2 }];
                    var deep = _.cloneDeep(objects);
                    console.log(deep[1] === objects[1]);  // true

                // Example 3
                    let deepClone3 = {
                        1:{
                            'A':"Krishan"
                        }
                    }
                    let deep_Clone3 =  _.cloneDeep(deepClone); 
                    alert(deepClone['1']===deep_Clone['1']) // false