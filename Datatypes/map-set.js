/**
 *      Map
 *          Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
 * 
 *          Methods and properties are:
                new Map() – creates the map.
                map.set(key, value) – stores the value by the key.
                map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
                map.has(key) – returns true if the key exists, false otherwise.
                map.delete(key) – removes the value by the key.
                map.clear() – removes everything from the map.
                map.size – returns the current element count.
            
 */
            let map = new Map();
            map.set('1', 'str1');   // a string key
            map.set(1, 'num1');     // a numeric key
            map.set(true, 'bool1'); // a boolean key
            // remember the regular Object? it would convert keys to string
            // Map keeps the type, so these two are different:
            alert( map.get(1)   ); // 'num1'
            alert( map.get('1') ); // 'str1'
            alert( map.size ); // 3
            // **--> As we can see, unlike objects, keys are not converted to strings. Any type of key is possible. 
            // map[key] isn’t the right way to use a Map

    // Map can also use objects as keys.
        let john = { name: "John" };
        // for every user, let's store their visits count
        let visitsCountMap = new Map();
        // john is the key for the map
        visitsCountMap.set(john, 123);
        alert( visitsCountMap.get(john) ); // 123

    // Using objects as keys is one of the most notable and important Map features. 
    // The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

        let john1 = { name: "John" };
        let ben = { name: "Ben" };
        let visitsCountObj = {}; // try to use an object
        visitsCountObj[ben] = 234; // try to use ben object as the key
        visitsCountObj[john1] = 123; // try to use john object as the key, ben object will get replaced
        // That's what got written!
        alert( visitsCountObj["[object Object]"] ); // 123
        // As visitsCountObj is an object, it converts all Object keys, such as john and ben above, to same string "[object Object]". Definitely not what we want.

    /**
     *  Chaining---> Every map.set call returns the map itself, so we can “chain” the calls:
     */
            map.set('1', 'str1')
            .set(1, 'num1')
            .set(true, 'bool1');


/**
 *      Iteration over Map
 *          For looping over a map, there are 3 methods:
                1. map.keys() – returns an iterable for keys,
                2. map.values() – returns an iterable for values,
                3. map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 */
                let recipeMap = new Map([
                    ['cucumber', 500],
                    ['tomatoes', 350],
                    ['onion',    50]
                  ]);
                  
                  // iterate over keys (vegetables)
                  for (let vegetable of recipeMap.keys()) {
                    alert(vegetable); // cucumber, tomatoes, onion
                  }
                  
                  // iterate over values (amounts)
                  for (let amount of recipeMap.values()) {
                    alert(amount); // 500, 350, 50
                  }
                  
                  // iterate over [key, value] entries
                  for (let entry of recipeMap) { // the same as of recipeMap.entries()
                    alert(entry); // cucumber,500 (and so on)
                  }

        // Besides that, Map has a built-in forEach method, similar to Array:
            // runs the function for each (key, value) pair
            recipeMap.forEach( (value, key, map) => {
            alert(`${key}: ${value}`); // cucumber: 500 etc
            });

/**
 *      Object.entries: Map from Object
 */
    // If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

        let obj = {
            name: "John",
            age: 30
        };
        let mapj = new Map(Object.entries(obj));
        alert( mapj.get('name') ); // John
        // Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.


/**
 *       Object.fromEntries: Object from Map
 *          We’ve just seen how to create Map from a plain object with Object.entries(obj).
            There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:
 */
            let prices = Object.fromEntries([
                ['banana', 1],
                ['orange', 2],
                ['meat', 4]
              ]);
              // now prices = { banana: 1, orange: 2, meat: 4 }
              alert(prices.orange); // 2

        // We can use Object.fromEntries to get a plain object from Map.

// E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.

    let mapk = new Map();
    mapk.set('banana', 1);
    mapk.set('orange', 2);
    mapk.set('meat', 4);

    let objj = Object.fromEntries(mapk.entries()); // make a plain object (*)

    // done!
    // obj = { banana: 1, orange: 2, meat: 4 }

    alert(objj.orange); // 2


/**
 *  set --->  A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
 * 
 *      Its main methods are:
            1. new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
            2. set.add(value) – adds a value, returns the set itself.
            3. set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
            4. set.has(value) – returns true if the value exists in the set, otherwise false.
            5. set.clear() – removes everything from the set.
            6. set.size – is the elements count.

        The main feature is that repeated calls of set.add(value) with the same value don’t do anything. 
        That’s the reason why each value appears in a Set only once.
 */

        let set = new Set();
        let john2 = { name: "John" };
        let pete = { name: "Pete" };
        let mary = { name: "Mary" };
        // visits, some users come multiple times
        set.add(john2);
        set.add(pete);
        set.add(mary);
        set.add(john2);
        set.add(mary);
        // set keeps only unique values
        alert( set.size ); // 3
        for (let user of set) {
            alert(user.name); // John (then Pete and Mary)
        }


/**
 *      Iteration over Set  
 *          We can loop over a set either with for..of or using forEach:
 */
            let set1 = new Set(["oranges", "apples", "bananas"]);
            for (let value of set1) alert(value);
            // the same with forEach:
            set1.forEach((value, valueAgain, set) => {
                alert(value);  // valueAgain --> same value as Value
            });
        


    let visitsCountMap = new Map();
    function coutnUser(user){
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user,++count);
    }
    let john = {name: "john"};
    coutnUser(john); // 1
    coutnUser(john); // 2
    john = null; // reacheable to Garbadge Collection
    alert(visitsCountMap.get(john));



    let wm = new Map();
    let j = {name:"J"};
    let i = {name:"I"};
    let k = {name:"K"};
    wm.set(j,"J");
    wm.set(i,"I");
    wm.set(k,"K");

    for(let o of wm.keys()){
        console.log(wm.get(o))
        console.log(o)
    }

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();
    for(let o of keys){
        console.log(o)
    }