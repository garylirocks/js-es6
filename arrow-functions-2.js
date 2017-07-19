// NOTE arrow functions can't be used as a constructor

'use strict';

let Foo = function() {
    console.log('inside a normal function');
};

let ArrowFoo = () => {
    console.log('inside a fat arrow function');
};


console.log(Foo.hasOwnProperty('prototype'));
let b = new Foo();

// NOTE fat arrow functions do NOT have 'prototype', can't be used with `new` to create objects
console.log(ArrowFoo.hasOwnProperty('prototype'));
let f = new ArrowFoo();
