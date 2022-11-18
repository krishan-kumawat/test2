/**
 *      Optional chaining '?.'
 *          The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
 */

/**
 *      The “non-existing property” problem
 *          As an example, let’s say we have user objects that hold the information about our users.
            Most of our users have addresses in user.address property, with the street user.address.street, but some did not provide them.
            In such case, when we attempt to get user.address.street, and the user happens to be without an address, we get an error:
 */
            let user = {}; // a user without "address" property
            alert(user.address.street); // Error!
            // user.address is undefined, an attempt to get user.address.street fails with an error.
        
        // In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”).

        /**
            and another example. In Web development, we can get an object that corresponds to a web page element using a special method call,
            such as document.querySelector('.elem'), and it returns null when there’s no such element.
        */

            // document.querySelector('.elem') is null if there's no element
            let html = document.querySelector('.elem').innerHTML; // error if it's null

        // we’d like to avoid the error and just accept html = null as the result.

        // The obvious solution would be to check the value using if or the conditional operator ?, before accessing its property
                let user1 = {};
                alert(user1.address ? user1.address.street : undefined);  // not goog approach 


        let user3 = {}; // user has no addres
        alert(user3.address ? user3.address.street ? user3.address.street.name : null : null);  // That’s just awful, one may even have problems understanding such code.

        // There’s a little better way to write it, using the && operator:
            alert( user3.address && user3.address.street && user3.address.street.name ); // undefined (no error)
                // AND’ing the whole path to the property ensures that all components exist (if not, the evaluation stops), but also isn’t ideal.


/**
 *      Optional chaining
 *          The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
 *          Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined.       
 *          
 *      In other words, value?.prop:
            1. works as value.prop, if value exists,
            2. otherwise (when value is undefined/null) it returns undefined.
 */
            let user4 = {}; // user has no address
            alert( user4?.address?.street ); // undefined (no error)

            // example with document.querySelector:
            let html1 = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element


            
    // NOTE--->  Reading the address with user?.address works even if user object doesn’t exist:

                let user5 = null;
                alert(user5.address) // error -->  Cannot read properties of null (reading 'address')
                alert( user5?.address ); // undefined
                alert( user5?.address.street ); // undefined

    // IMP ====> "Please note: the ?. syntax makes optional the value before it, but not any further"

    // For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street.

    // The variable before ?. must be declared 
        // ReferenceError: user is not defined
        user?.address;  // The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.

/**
 *      Short-circuiting
 *          As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.
 *          So, if there are any further function calls or operations to the right of ?., they won’t be made.
 */
        let user6 = null;
        let x = 0;
        user6?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
        alert(x); // 0, value not incremented


/**
 *      Other variants: ?.(), ?.[]
 *          The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.
 *          For example, ?.() is used to call a function that may not exist.
 */
            let userAdmin = {
                admin() {
                    alert("I am admin");
                }
            };
            let userGuest = {};
            userAdmin.admin?.(); // I am admin
            userGuest.admin?.(); // nothing happens (no such method)  // undefined

            // Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors.

        
        // The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.
            let key = "firstName";
            let user9 = {
            firstName: "John"
            };
            let user2 = null;
            alert( user9?.[key] ); // John
            alert( user9?.key ); // undefined
            alert( user2?.[key] ); // undefined

    // Also we can use ?. with delete:
        delete user?.name; // delete user.name if user exists


/***
 *  NOTE===>    We can use ?. for safe reading and deleting, but not writing
 *              The optional chaining ?. has no use on the left side of an assignment.
 * 
 */
                let user0 = null;
                user0?.name = "John"; // Error, doesn't work
                // because it evaluates to: undefined = "John"