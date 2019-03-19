/**
 * See here: https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
 * 
 * NOTE:
 *  * Arrow functions are added to the object instance, not the prototype, so not available in super, but they are added to subclass's instances as well by the constructor;
 */

class A {
    constructor () {
        this.normalFooBound = this.normalFoo.bind(this);
    }

    normalFoo() {
        console.log('A.normalFoo');
    }

    arrowFoo = () => {                              // 'babel-plugin-transform-class-properties' is needed for this syntax
        console.log('A.arrowFoo');
    }
}

// B.prototype.__proto__ === A.prototype
class B extends A {
    constructor() {
        super();
        super.normalFoo();
        super.arrowFoo();                           // Error, arrowFoo is not in super (A.prototype)
    }
}

class C extends A {
    arrowFoo() {                                    // define arrowFoo as a normal method
        console.log('C.arrowFoo');
    }
}

const a = new A();

console.log(`typeof a: ${typeof a}`);
// object

console.log(`typeof A: ${typeof A}`);
// function                                         # A is a function

console.log(`a's own properties:`, Object.getOwnPropertyNames(a));
// ['arrowFoo', 'normalFooBound']                   # arrow function and bound function are attached to the object instance

console.log(`A's own properties:`, Object.getOwnPropertyNames(A));
// ['length', 'name', 'prototype']

console.log(`A.proptotype's own properties:`, Object.getOwnPropertyNames(A.prototype));
// ['constructor', 'normalFoo']                     # normalFoo is owned by the class prototype

console.log(`A.prototype.constructor === A:`, A.prototype.constructor === A);
// true

// const b = new B();
// Error

const c = new C();

console.log(`c's own properties:`, Object.getOwnPropertyNames(c));
// [ 'arrowFoo', 'normalFooBound' ]                 # the arrowFoo here is from A, c's arrowFoo get overridden

c.arrowFoo();
// A.arrowFoo                                       # A.arrowFoo get added to c
