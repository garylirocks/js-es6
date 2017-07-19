//NOTE the for..of loop in ES6

'use strict';

let characters = ['Jon', 'Sansa', 'Arya', 'Tyrion', 'Cercei'];

for (let c of characters) {
    console.log(c);
}
// Jon
// Sansa
// Arya
// Tyrion
// Cercei


// NOTE compare with the for..in loop
for (let c in characters) {
    console.log(c);
}
// 0
// 1
// 2
// 3
// 4
