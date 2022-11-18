/**
 *      Garbage collection
 *          Reachability--> 
 *              The main concept of memory management in JavaScript is reachability.
 *              Simply put, “reachable” values are those that are accessible or usable somehow. 
 *              They are guaranteed to be stored in memory.
 *                  1. There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.
 *                      For instance:
 *                          a. The currently executing function, its local variables and parameters.
                            b. Other functions on the current chain of nested calls, their local variables and parameters.
                            c. Global variables.
                            d. (there are some other, internal ones as well)
                        These values are called roots.

                    2. Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.
                        For instance, if there’s an object in a global variable, and that object has a property referencing another object,
                        that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.    

 */

    // user has a reference to the object
    let user = {
        name: "John"
    };  // {name: "John"} object is reachable using user raference 

    user = null;   //   Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.

    let user1 = {
        name:"Krishan"
    }

    let admin = user;
    user = null;   // Then the object is still reachable via admin global variable, so it must stay in memory. If we overwrite admin too, then it can be removed.


/**
 *      Interlinked objects
 */
        function marry(man, woman) {
            woman.husband = man;
            man.wife = woman;
        
            return {
                father: man,
                mother: woman
            }
        }
        
        let family = marry({
            name: "John"
        }, {
            name: "Ann"
        });
    
        // console.log(JSON.stringify(family));  /// this is not possibale "Converting circular structure to JSON"

/** 
 *      Internal algorithms
 *          The basic garbage collection algorithm is called “mark-and-sweep”.
 *          The following “garbage collection” steps are regularly performed:
                1. The garbage collector takes roots and “marks” (remembers) them.
                2. Then it visits and “marks” all references from them.
                3. Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
                4. …And so on until every reachable (from the roots) references are visited.
                5. All objects except marked ones are removed.
 */
    
