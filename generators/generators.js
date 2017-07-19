// NOTE generators

'use strict';

// NOTE define an infinite generator, the '*' marks this function is a generator
let idMaker = function* () {
    let nextId = 100;

    while(true) {
        yield nextId++;
    }
};

// NOTE generator function returns an iterable
for (let id of idMaker()) {
    if (id > 105) {
        break;
    }
    console.log(id);
}
// 100
// 101
// 102
// 103
// 104
// 105


// NOTE yield another iterable in a generator
let myGenerator = function* () {
    yield 'start';
    yield* [1, 2, 3];       // <- yield into another iterable
    yield 'end';
};

for (let i of myGenerator()) {
    console.log(i);
}
// start
// 1
// 2
// 3
// end
