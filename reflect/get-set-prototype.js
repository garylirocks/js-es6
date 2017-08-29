// NOTE 'Reflect' can get and set prototype of an object
'use strict';

/** ====================
 *  Reflect.getPrototypeOf
 ** ==================== **/
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {

}

console.log(Reflect.getPrototypeOf(Dog));
// [Function: Animal]


/** ====================
 *  Reflect.setPrototypeOf
 ** ==================== **/
let basic = {
    show() {
        return 'a firework show';
    }
};

let obj = {};

Reflect.setPrototypeOf(obj, basic);
console.log(obj.show());
