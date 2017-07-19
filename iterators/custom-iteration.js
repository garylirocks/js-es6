// NOTE you can define a custom iteration function for an object

'use strict';

// a custom id maker that generates ids from 100 to 105
let idMaker = {
    [Symbol.iterator]() {
        let currentId = 100;
        let maxId = 105;
        return {
            next() {
                return {
                    done: currentId > maxId,
                    value: currentId++,
                };
            }
        };
    }
};

for (let id of idMaker) {
    console.log(id);
}
// 100
// 101
// 102
// 103
// 104
// 105


// NOTE another way to iterate through the id maker object
let iter = idMaker[Symbol.iterator]();
let next = iter.next();

while (!next.done) {
    console.log(next.value);
    next = iter.next();
}
// 100
// 101
// 102
// 103
// 104
// 105
