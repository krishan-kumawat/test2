let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// In other words, e multiplies the number by 1 with the given zeroes count.

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

// Now let’s write something very small. Say, 1 microsecond (one millionth of a second):

let mсs = 0.000001;

let mcs = 1e-6; // five zeroes to the left from 1

// In other words, a negative number after "e" means a division by 1 with the given number of zeroes:
    // -3 divides by 1 with 3 zeroes
    1e-3 === 1 / 1000; // 0.001
    // -6 divides by 1 with 6 zeroes
    1.23e-6 === 1.23 / 1000000; // 0.00000123
    // an example with a bigger number
    1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

/**
 *      Hex, binary and octal numbers
 *          Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. 
 *          So naturally, there exists a shorter way to write them: 0x and then the number.
 */

        alert( 0xff ); // 255
        alert( 0xFF ); // 255 (the same, case doesn't matter)

    // Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

        let a = 0b11111111; // binary form of 255
        let b = 0o377; // octal form of 255
        alert( a == b ); // true, the same number 255 at both sides

/**
 *      toString(base)
 *          The method num.toString(base) returns a string representation of num in the numeral system with the given base.
 */

            let num = 255;
            alert( num.toString(16) );  // ff
            alert( num.toString(2) );   // 11111111
            // The base can vary from 2 to 36. By default it’s 10.

            alert( 123456..toString(36) ); // 2n9c

/**
 *      Rounding
 *          One of the most used operations when working with numbers is rounding.
            There are several built-in functions for rounding:

            Math.floor
                Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
            Math.ceil
                Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
            Math.round
                Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
            Math.trunc (not supported by Internet Explorer)
                Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
 */

        // For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23.
            /**
             *   There are two ways to do so:
             *         1. Multiply-and-divide
            */    
                            let num1 = 1.3456;
                            alert( Math.round(num1 * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

            /**
             *         2. toFixed(n) 
             *              The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
             */
                            let num3 = 12.34;
                            alert( num3.toFixed(1) ); // "12.3"
                            
                    // This rounds up or down to the nearest value, similar to Math.round:
                            let num4 = 12.36;
                            alert( num4.toFixed(1) ); // "12.4"

                    // Please note that the result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:
                            let num6 = 12.34;
                            alert( num6.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits

/**
 *      Imprecise calculations
 *          Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number: 
 *              52 of them are used to store the digits, 
 *              11 of them store the position of the decimal point, 
 *              and 1 bit is for the sign.
 */
            //  If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity:
                alert( 1e500 ); // Infinity

        
        // Consider this (falsy!) equality test:
            alert( 0.1 + 0.2 == 0.3 ); // false
        // bcz
            alert( 0.1 + 0.2 ); // 0.30000000000000004


    //  Can we work around the problem? Sure, the most reliable method is to round the result with the help of a method toFixed(n):
            let sum = 0.1 + 0.2;
            alert( sum.toFixed(2) ); // "0.30"

            // Hello! I'm a self-increasing number!
            alert( 9999999999999999 ); // shows 10000000000000000

/**
 *      Tests: isFinite and isNaN
 *          1. Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
 *          2. NaN represents an error.
 *      
 *      They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:
 * 
 *          -> isNaN(value) converts its argument to a number and then tests it for being NaN:
 */
                alert( isNaN(NaN) ); // true
                alert( isNaN("str") ); // true

        // But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. 
        //    The value NaN is unique in that it does not equal anything, including itself:
                alert( NaN === NaN ); // false
        
        //  isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:
                alert( isFinite("15") ); // true
                alert( isFinite("str") ); // false, because a special value: NaN
                alert( isFinite(Infinity) ); // false, because a special value: Infinity

        // Sometimes isFinite is used to validate whether a string value is a regular number:
                let num2 = +prompt("Enter a number", '');
                // will be true unless you enter Infinity, -Infinity or not a number
                alert( isFinite(num2) );

    // NOTE--> Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite.
                alert(isFinite(" ")) // true
                alert(isFinite("0")) // true

    /**
     *      NOTE 
     *          Number.isNaN and Number.isFinite methods are the more “strict” versions of isNaN and isFinite functions. 
     *          They do not autoconvert their argument into a number, but check if it belongs to the number type instead.
     * 
     *     1. Number.isNaN(value) returns true if the argument belongs to the number type and it is NaN. In any other case it returns false.
     */         
                alert( Number.isNaN(NaN) ); // true
                alert( Number.isNaN("str" / 2) ); // true
                // Note the difference:
                alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
                alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion
    
    /**
     *      2. Number.isFinite(value) returns true if the argument belongs to the number type and it is not NaN/Infinity/-Infinity. 
     *         In any other case it returns false.
     */
                alert( Number.isFinite(123) ); // true
                alert( Number.isFinite(Infinity) ); // false
                alert( Number.isFinite(2 / 0) ); // false
                // Note the difference:
                alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
                alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123

/** 
 *      Comparison with Object.is
 *          There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases:
 *              1. It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
 *              2. Values 0 and -0 are different: Object.is(0, -0) === false, technically that’s correct, 
 *                  because internally the number has a sign bit that may be different even if all other bits are zeroes.
 */


/**
 *      parseInt and parseFloat
 *          Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:
 */
            alert( +"100px" ); // NaN

    /**
         *  But in real life we often have values in units, like "100px" or "12pt" in CSS. 
         *  Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.
         * 
         *  That’s what parseInt and parseFloat are for.
         *      They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. 
         *      The function parseInt returns an integer, whilst parseFloat will return a floating-point number:
     */
                alert( parseInt('100px') ); // 100
                alert( parseFloat('12.5em') ); // 12.5
                alert( parseInt('12.3') ); // 12, only the integer part is returned
                alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

        // There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:
            alert( parseInt('a123') ); // NaN, the first symbol stops the process

/**
 *      The second argument of parseInt(str, radix)
 *          The parseInt() function has an optional second parameter. 
 *          It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:
 */
            alert( parseInt('0xff', 16) ); // 255
            alert( parseInt('ff', 16) ); // 255, without 0x also works
            alert( parseInt('2n9c', 36) ); // 123456


/**
 *      Math.random()
 *          Returns a random number from 0 to 1 (not including 1).
 */ 
            alert( Math.random() ); // 0.1234567894322
            alert( Math.random() ); // 0.5435252343232
            alert( Math.random() ); // ... (any random numbers)

/**
 *      Math.max(a, b, c...) and Math.min(a, b, c...)
 */
            alert( Math.max(3, 5, -10, 0, 1) ); // 5
            alert( Math.min(1, 2) ); // 1

/**
 *      Math.pow(n, power)
 */
            alert( Math.pow(2, 10) ); // 2 in power 10 = 1024