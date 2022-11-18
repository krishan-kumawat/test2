/**
 *      Syntax
 */
        let arrr = new Array();
        let arr1 = [];

        let fruits = ["Apple", "Orange", "Plum"];

        alert( fruits[0] ); // Apple
        alert( fruits[1] ); // Orange
        alert( fruits[2] ); // Plum

        fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
        fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

        alert(fruits.length);

// NOTE--->  An array can store elements of any type.

    // mix of values
    let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
    // get the object at index 1 and then show its name
    alert( arr[1].name ); // John
    // get the function at index 3 and run it
    arr[3](); // hello


// We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].
    let fruits = ["Apple", "Orange", "Plum"];
    alert( fruits[fruits.length-1] ); // Plum

//  there’s a shorter syntax: fruits.at(-1):
    let fruits = ["Apple", "Orange", "Plum"];
    // same as fruits[fruits.length-1]
    alert( fruits.at(-1) ); // Plum

    /**
        In other words, arr.at(i):
            1. is exactly the same as arr[i], if i >= 0.
            2. for negative values of i, it steps back from the end of the array.
    */

    // pop : 
    // Extracts the last element of the array and returns it:
        let fruits = ["Apple", "Orange", "Pear"];
        alert( fruits.pop() ); // remove "Pear" and alert it
        alert( fruits ); // Apple, Orange
    // Both fruits.pop() and fruits.at(-1) return the last element of the array, but fruits.pop() also modifies the array by removing it.

    // push :
    // Append the element to the end of the array:
        let fruits = ["Apple", "Orange"];
        fruits.push("Pear");
        alert( fruits ); // Apple, Orange, Pear
    // The call fruits.push(...) is equal to fruits[fruits.length] = ....

    // shift :  Extracts the first element of the array and returns it:
        let fruits = ["Apple", "Orange", "Pear"];
        alert( fruits.shift() ); // remove Apple and alert it
        alert( fruits ); // Orange, Pear


    // unshift :  Add the element to the beginning of the array:
        let fruits = ["Orange", "Pear"];
        fruits.unshift('Apple');
        alert( fruits ); // Apple, Orange, Pear

    // Methods push and unshift can add multiple elements at once:
        let fruits = ["Apple"];
        fruits.push("Orange", "Peach");
        fruits.unshift("Pineapple", "Lemon");
        // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
        alert( fruits );


/**
 *      Loops
 */

    let arrq = ["Apple", "Orange", "Pear"];
    for (let i = 0; i < arrq.length; i++) {
    alert( arrq[i] );
    }

    let fruits = ["Apple", "Orange", "Plum"];
    // iterates over array elements
    for (let fruit of fruits) {
    alert( fruit );
    }

    for (let key in arrq) {
    alert( arrq[key] ); // Apple, Orange, Pear
    }

    let arra = [1, 2, 3, 4, 5];
    arra.length = 2; // truncate to 2 elements
    alert( arra ); // [1, 2]

    arra.length = 5; // return length back
    alert( arra[3] ); // undefined: the values do not return

/**
 *  splice
 */

    let arre = ["I", "go", "home"];
    delete arre[1]; // remove "go"
    alert( arre[1] ); // undefined
    // now arr = ["I",  , "home"];
    alert( arre.length ); // 3

    // Syntax ---> The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
        // arr.splice(start[, deleteCount, elem1, ..., elemN])

            let arrl = ["I", "study", "JavaScript"];
            arrl.splice(1, 1); // from index 1 remove 1 element
            alert( arrl ); // ["I", "JavaScript"]

        // In the next example we remove 3 elements and replace them with the other two:
            let arrj = ["I", "study", "JavaScript", "right", "now"];
            // remove 3 first elements and replace them with another
            arrj.splice(0, 3, "Let's", "dance");
            alert( arrj ) // now ["Let's", "dance", "right", "now"]

        
        // Here we can see that splice returns the array of removed elements:
            let arro = ["I", "study", "JavaScript", "right", "now"];
            // remove 2 first elements
            let removed = arro.splice(0, 2);
            alert( removed ); // "I", "study" <-- array of removed elements

        // The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
            let arri = ["I", "study", "JavaScript"];
            // from index 2
            // delete 0
            // then insert "complex" and "language"
            arri.splice(2, 0, "complex", "language");
            alert( arri ); // "I", "study", "complex", "language", "JavaScript"

    // Negative indexes allowed
        let arrf = [1, 2, 5];
        // from index -1 (one step from the end)
        // delete 0 elements,
        // then insert 3 and 4
        arrf.splice(-1, 0, 3, 4);
        alert( arrf ); // 1,2,3,4,5


        
/** 
 *      slice  : 
 *          Syntax --->     arr.slice([start], [end])
    *          It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
    *          It’s similar to a string method str.slice, but instead of substrings it makes subarrays.
*/
            let arrd = ["t", "e", "s", "t"];
            alert( arrd.slice(1, 3) ); // e,s (copy from 1 to 3)
            alert( arrd.slice(-2) ); // s,t (copy from -2 till the end)
            // NOTE---> We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.


/**
 *      concat
 *          The method arr.concat creates a new array that includes values from other arrays and additional items.
 *      Syntax ---> arr.concat(arg1, arg2...)
 *          It accepts any number of arguments – either arrays or values.
 */

        let arru = [1, 2];
        // create an array from: arr and [3,4]
        alert( arru.concat([3, 4]) ); // 1,2,3,4
        // create an array from: arr and [3,4] and [5,6]
        alert( arru.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
        // create an array from: arr and [3,4], then add values 5 and 6
        alert( arru.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

        let arrc = [1, 2];
        let arrayLike = {
        0: "something",
        length: 1
        };
        alert( arrc.concat(arrayLike) ); // 1,2,[object Object]

    // NOTE---->  …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:
        let arrg = [1, 2];
        let arrayLikeg = {
        0: "something",
        1: "else",
        [Symbol.isConcatSpreadable]: true,
        length: 2
        };
        alert( arrg.concat(arrayLikeg) ); // 1,2,something,else


/**
 * 
 *      Iterate: forEach : The arr.forEach method allows to run a function for every element of the array.
 *          Syntax-> 
 *                  arr.forEach(function(item, index, array) {
                        // ... do something with item
                    });
 */

        // for each element call alert
        ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

        ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
            alert(`${item} is at index ${index} in ${array}`);
        });


/**
 *      Searching in array
 * 
 *  1. indexOf/lastIndexOf and includes
 *          The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:
 *              a. arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
 *              b. arr.includes(item, from) – looks for item starting from index from, returns true if found.
 */

                let arrv = [1, 0, false];
                alert( arrv.indexOf(0) ); // 1
                alert( arrv.indexOf(false) ); // 2
                alert( arrv.indexOf(null) ); // -1
                alert( arrv.includes(1) ); // true

                let fruits = ['Apple', 'Orange', 'Apple']
                alert( fruits.indexOf('Apple') ); // 0 (first Apple)
                alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

                // NOTE----> The includes method handles NaN correctly
                    const arrft = [NaN];
                    alert( arrft.indexOf(NaN) ); // -1 (wrong, should be 0)
                    alert( arrft.includes(NaN) );// true (correct)

    /** 
     *      find and findIndex/findLastIndex
        *      Imagine we have an array of objects. How do we find an object with the specific condition?
                Here the arr.find(fn) method comes in handy.

                Syntax 
                        let result = arr.find(function(item, index, array) {
                            // if true is returned, item is returned and iteration is stopped
                            // for falsy scenario returns undefined
                        });
     */