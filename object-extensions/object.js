
let obj1 = { a: 1, c: 3};
let obj2 = { a: 10, b: 20};

let target = {};

// NOTE combine objects together using 'Object.assign()'
target = Object.assign(target, obj1, obj2);
console.log(target);

let myObj = NaN;
console.log(myObj === myObj);           // false

// NOTE compare objects by using 'Object.is()' to make sure a variable is identical to itself
console.log(Object.is(myObj, myObj));   // true
