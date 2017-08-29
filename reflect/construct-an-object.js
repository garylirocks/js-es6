// NOTE you can construct an object with Reflect, so this means another way for object building

'use strict';

class Animal {
    constructor (name, age) {
        console.log(`${name} is ${age} years old`);
    }
}

// NOTE 'Reflect' is an object
console.log(typeof Reflect);
// object

// NOTE construct an object using 'Reflect.construct'
let a = Reflect.construct(Animal, ['Boo', 10]);

console.log(a instanceof Animal);
// true
