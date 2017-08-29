// NOTE demo new extensions to Array

'use strict';

/** ====================
 *  Array
 ** ==================== **/
let arr1 = Array(10);   // <- NOTE  creates an array of 10 elements
console.log(arr1);
// [ , , , , , , , , ,  ]


/** ====================
 *  Array.of
 ** ==================== **/
let arr2 = Array.of(1, 2, 3);   // <- NOTE actually use the paramenters as elements
console.log(arr2);
// [ 1, 2, 3 ]


/** ====================
 *  Array.from
 ** ==================== **/
// NOTE convert an iterable to an array, and a map function can be used at the
//          same time
let arr3 = Array.from([10, 20, 30], (e, i) => (e + i));
console.log(arr3);
// [ 10, 21, 32 ]


/** ====================
 *  Array.prototype.fill
 ** ==================== **/
let arr4 = [1, 2, 3, 4, 5];
arr4.fill('xxx', 1, 3);     // <- NOTE fills value to specified positions in an array
console.log(arr4);
// [ 1, 'xxx', 'xxx', 4, 5 ]


/** ====================
 *  Array.prototype.find
 *  Array.prototype.findIndex
 ** ==================== **/
let arr = [1, 2, 3, 4, 5];
console.log(arr.find(e => e > 3));
// 4                    <- NOTE only the first element is returned

console.log(arr.findIndex(e => e > 3));
// 3                    <- NOTE only the first index is returned


/** ====================
 *  Array.prototype.copyWithin
 ** ==================== **/
arr = ['a', 'b', 'c', 'd'];
arr.copyWithin(1, 2);     // <- NOTE copy the sequence starting from index 2 to the sequence starting from index 1
console.log(arr);
// [ 'a', 'c', 'd', 'd' ]
