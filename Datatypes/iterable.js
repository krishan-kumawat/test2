let range = {
    from: 1,
    to: 5
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // now it works!
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }




  let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }



  /**
   * 
   *    String is iterable
   *            Arrays and strings are most widely used built-in iterables.
   */
        for (let char of "test") {
            // triggers 4 times: once for each character
            alert( char ); // t, then e, then s, then t
        }

        let str = '𝒳😂';
        for (let char of str) {
            alert( char ); // 𝒳, and then 😂
        }

        /**
         * 
         *  Calling an iterator explicitly
         */
                let strd = "Hello";
                // does the same as
                // for (let char of str) alert(char);
                let iterator = strd[Symbol.iterator]();
                while (true) {
                let result = iterator.next();
                if (result.done) break;
                alert(result.value); // outputs characters one by one
                }


    let arrayLike = { // has indexes and length => array-like
        0: "Hello",
        1: "World",
        length: 2
      };
      
      // Error (no Symbol.iterator)
      for (let item of arrayLike) {}
      // Both iterables and array-likes are usually not arrays, they don’t have push, pop etc. 


/**
 *    Array.from
 *          There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. 
 *          Then we can call array methods on it.
 */

            let arrayLikejk = {
                0: "Hello",
                1: "World",
                length: 2
            };
            let arr = Array.from(arrayLikejk); // (*)
            for(let vb of arr){
                alert(vb)
            }
            alert(arr.pop()); // World (method works)

/**
    The full syntax for Array.from also allows us to provide an optional “mapping” functio  
    Syntax ---->    Array.from(obj[, mapFn, thisArg])
                        The optional second argument mapFn can be a function that will be applied to each element before adding it to the array, and thisArg allows us to set this for it.
*/
                // assuming that range is taken from the example above
                // square each number
                let arrs = Array.from(range, num => num * num);
                alert(arrs); // 1,4,9,16,25

                // Here we use Array.from to turn a string into an array of characters:
                    let strhj = '𝒳😂';
                    // splits str into array of characters
                    let chars = Array.from(strhj);
                    alert(chars[0]); // 𝒳
                    alert(chars[1]); // 😂
                    alert(chars.length); // 2