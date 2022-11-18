/**
 *      Object to primitive conversion
 *          JavaScript doesn’t allow you to customize how operators work on objects.
 *          In case of such operations, objects are auto-converted to primitives, and then the operation is carried out over these primitives and results in a primitive value.
 */

// NOTE----> That’s an important limitation: the result of obj1 + obj2 (or another math operation) can’t be another object!

/**
 *      Conversion rules
 *          1. There’s no conversion to boolean. All objects are true in a boolean context, as simple as that. There exist only numeric and string conversions.
 *          2. The numeric conversion happens when we subtract objects or apply mathematical functions. 
 *             For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
 *          3. As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts.
 */

/**
 *      Hints
 *          There are three variants of type conversion, that happen in various situations. They’re called “hints”, as described in the specification:
 */