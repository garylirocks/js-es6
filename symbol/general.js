// ** the new Symbol type creates unique identifiers

let s = Symbol('gary');
let s2 = Symbol('gary');

console.log(s === s2);      // NOTE they are different
console.log(typeof s);
console.log(s.toString());
console.log(s2.toString());


// NOTE Symbol.for register symbols in the global registry, each call
//      to 'Symbol.for(key)' get exactly the same value as long as key is the same
let s3 = Symbol.for('gary');
let s4 = Symbol.for('gary');

console.log(typeof s3);
console.log(s3 === s4);     // NOTE these two are equal
console.log(Symbol.keyFor(s3));     // NOTE use '.keyFor' to retrieve the string used to construct the symbol
