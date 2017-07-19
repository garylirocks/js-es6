
// NOTE some number-related global functions are added to the Number class as static methods:
// parseInt, parseFloat, isNaN, isFinite
// for some functions, the scoped version is different from the global version, always use the scoped version

console.log(parseInt === Number.parseInt);  // true
console.log(parseFloat === Number.parseFloat);  // true

// NOTE avoid the global isNaN() function
console.log(isNaN === Number.isNaN);
let s = 'NaN';

console.log(isNaN(s));          // true, the string got converted to NaN
console.log(Number.isNaN(s));   // false, no conversion

// NOTE a new method
let price = 29.9;
console.log(Number.isInteger(price));   // false
