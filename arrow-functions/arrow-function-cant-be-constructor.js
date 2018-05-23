// NOTE arrow functions can't be used as a constructor

'use strict';

let Foo = function() {
    console.log('inside a normal function');
};

let ArrowFoo = () => {
    console.log('inside a fat arrow function');
};

console.log(Foo.hasOwnProperty('prototype'));           // true
let b = new Foo();

// NOTE fat arrow functions do NOT have 'prototype', can't be used with `new` to create objects
console.log(ArrowFoo.hasOwnProperty('prototype'));      // false
let f = new ArrowFoo();                                 // Error: ArrowFoo is not a consturctor
