// NOTE Array, RegExp, Function, Promise can be subclassed in ES6
'use strict';

/** ====================
 *  myArray subclassing Array
 ** ==================== **/
class myArray extends Array {
    // NOTE adding new method to myArray, extending Array
    sum() {
        let total = 0;
        this.map(v => total += v);
        return total;
    }
}

let arr = myArray.from([1, 2, 3]);

console.log(arr instanceof myArray);
// true

console.log(arr instanceof Array);
// true

let arr2 = arr.reverse();
console.log(arr2);
// myArray [ 3, 2, 1 ]

console.log(arr2 instanceof myArray);   // <- NOTE arr2 is still a myArray
// true

console.log(arr2.sum());
// 6
