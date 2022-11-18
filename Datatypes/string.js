/**
 * Strings
 *     Quotes
 *          Strings can be enclosed within either single quotes, double quotes or backticks:
 */
        let single = 'single-quoted';
        let double = "double-quoted";
        let backticks = `backticks`;

        function sum(a, b) {
            return a + b;
        }
        alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

        // Another advantage of using backticks is that they allow a string to span multiple lines:

            let guestList = `Guests:
            * John
            * Pete
            * Mary
            `;
            alert(guestList); // a list of guests, multiple lines

// NOTE---> 
        /** 
            Backticks also allow us to specify a “template function” before the first backtick. 
            The syntax is: func`string`. The function func is called automatically, receives the string and embedded expressions and can process them. 
            This feature is called “tagged templates”   
        */ 
            const person = "Mike";
            const age = 28;
            function myTag(strings, personExp, ageExp) {
            const str0 = strings[0]; // "That "
            const str1 = strings[1]; // " is a "
            const str2 = strings[2]; // "."
            const ageStr = ageExp > 99 ? "centenarian" : "youngster";
            // We can even return a string built using a template literal
            return `${str0}${personExp}${str1}${ageStr}${str2}`;
            }
            const output = myTag`That ${person} is a ${age}.`;
            console.log(output);
            // That Mike is a youngster.
/**
    \n	New line
    \r	In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
    \', \", \`	Quotes
    \\	Backslash
    \t	Tab
    \b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).
 */


alert( `The backslash: \\` ); // The backslash: \

/**
 *      String length
 *          The length property has the string length:
 * 
 */
            alert( `My\n`.length ); // 3

/**
 *      Accessing characters
 *          To get a character at position pos, use square brackets [pos] or call the method str.at(pos). The first character starts from the zero position:
 */
            let str = `Hello`;
            // the first character
            alert( str[0] ); // H
            alert( str.at(0) ); // H
            // the last character
            alert( str[str.length - 1] ); // o
            alert( str.at(-1) );

        // The square brackets always return undefined for negative indexes, for instance: 
            let str1 = `Hello`;
            alert( str1[-2] ); // undefined
            alert( str1.at(-2) ); // l

        // We can also iterate over characters using for..of:
            for (let char of "Hello") {
                alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
            }

/**
 *      Strings are immutable
 *          Strings can’t be changed in JavaScript. It is impossible to change a character.
 */

            let str2 = 'Hi';
            // str2[0] = 'h'; // error   // this is work for only modern JS ("use strict")
            alert( str2[0] ); // doesn't work

            let str3 = 'Hi';
            str3 = 'h' + str3[1]; // replace the string
            alert( str3 ); // hi

/**
 *      Changing the case
 */
            alert( 'Interface'.toUpperCase() ); // INTERFACE
            alert( 'Interface'.toLowerCase() ); // interface

            alert( 'Interface'[0].toLowerCase() ); // 'i'

/**
 *      Searching for a substring
 *          The first method is str.indexOf(substr, pos).
            It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.
 */
            let str4 = 'Widget with id';
            alert( str4.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
            alert( str4.indexOf('widget') ); // -1, not found, the search is case-sensitive

            alert( str4.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

        // NOTE--> The optional second parameter allows us to start searching from a given position.

        // For instance, the first occurrence of "id" is at position 1. To look for the next occurrence, let’s start the search from position 2:

            let str5 = 'Widget with id';
            alert( str5.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
            alert( str5.indexOf('widget') ); // -1, not found, the search is case-sensitive
            alert( str5.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

            let str6 = 'Widget with id';
            alert( str6.indexOf('id', 2) ) // 12


            let str7 = 'As sly as a fox, as strong as an ox';
            let target = 'as'; // let's look for it
            let pos = 0;
            while (true) {
                let foundPos = str7.indexOf(target, pos);
                if (foundPos == -1) break;
                alert( `Found at ${foundPos}` );
                pos = foundPos + 1; // continue the search from the next position
            }

            // 
                let str8 = "As sly as a fox, as strong as an ox";
                let target1 = "as";
                let pos2 = -1;
                while ((pos2 = str8.indexOf(target1, pos + 1)) != -1) {
                    alert( pos2 );
                }

/**
 *      includes, startsWith, endsWith
 *          The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.
 */
            alert( "Widget with id".includes("Widget") ); // true
            alert( "Hello".includes("Bye") ); // false

            alert( "Widget".includes("id") ); // true
            alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

            alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
            alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

/**
 *      Getting a substring
 *          There are 3 methods in JavaScript to get a substring: substring, substr and slice.
 *              str.slice(start [, end])
 *                  Returns the part of the string from start to (but not including) end.
 */
                    let str9 = "stringify";
                    alert( str9.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
                    alert( str9.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

                    alert( str9.slice(2) ); // 'ringify', from the 2nd position till the end

                    // start at the 4th position from the right, end at the 1st from the right
                    alert( str.slice(-4, -1) ); // 'gif'
                
            /**
             *  str.substring(start [, end])
             *      Returns the part of the string between start and end (not including end).
                    This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).
                    NOTE---> Negative arguments are (unlike slice) not supported, they are treated as 0.
             */

                    // these are same for substring
                    alert( str9.substring(2, 6) ); // "ring"
                    alert( str9.substring(6, 2) ); // "ring"

                    // ...but not for slice:
                    alert( str9.slice(2, 6) ); // "ring" (the same)
                    alert( str9.slice(6, 2) ); // "" (an empty string)

            /**
             *  str.substr(start [, length])
             *      Returns the part of the string from start, with the given length.
                    In contrast with the previous methods, this one allows us to specify the length instead of the ending position:
             */
                    let str10 = "stringify";
                    alert( str10.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
                    alert( str10.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters 

/**
 *      Comparing strings
 *          As we know from the chapter Comparisons, strings are compared character-by-character in alphabetical order.
 *          To understand what happens, we should be aware that strings in Javascript are encoded using UTF-16. That is: each character has a corresponding numeric code.
 *          
 *          1. str.codePointAt(pos)
 *              Returns a decimal number representing the code for the character at position pos:
 */
                // different case letters have different codes
                alert( "Z".codePointAt(0) ); // 90
                alert( "Z".codePointAt() ); // 90
                alert( "z".codePointAt(0) ); // 122
                alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)
                alert( "Z".codePointAt(1) ); // undefined
            
    /**
     *      2. String.fromCodePoint(code)
     *          Creates a character by its numeric code
     */
                alert( String.fromCodePoint(90) ); // Z
                alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)

                let str11 = '';
                for (let i = 65; i <= 220; i++) {
                  str11 += String.fromCodePoint(i);
                }
                alert( str11 );
                // Output:
                // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
                // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ


/**
 *      Correct comparisons
 *          The “right” algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.
 *  
 *          The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:
 *              1. Returns a negative number if str is less than str2.
 *              2. Returns a positive number if str is greater than str2.
 *              3. Returns 0 if they are equivalent.
 */
        alert( 'Österreich'.localeCompare('Zealand') ); // -1
