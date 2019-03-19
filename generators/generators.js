// NOTE generators
'use strict';

// NOTE define an infinite generator, the '*' marks this function is a generator
let idMaker = function*() {
  let nextId = 100;

  while (nextId <= 105) {
    yield nextId++;
  }
};

// NOTE generator function returns an iterable
for (let id of idMaker()) {
  console.log(id);
}
// 100
// 101
// 102
// 103
// 104
// 105

// NOTE use the iterable explicitly
const ids = idMaker();

const timer = setInterval(function() {
  // the next method returns an object: { value: val, done: true|false }
  let id = ids.next();

  if (!id.done) {
    console.log(id.value);
  } else {
    clearInterval(timer);
    console.log('Done');
  }
}, 500);

// NOTE yield another iterable in a generator
let myGenerator = function*() {
  yield 'start';
  yield* [1, 2, 3]; // <- yield into another iterable, notice the '*' here
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

// convert an array to a generator
function* eachItem(arr) {
  yield* arr;
}
let letters = eachItem([1, 2, 3]);

// use generator with setInterval
let timer = setInterval(function() {
  let letter = letters.next(); // this will return an object: {value: val, done: true|false}

  if (!letter.done) {
    console.log(letter.value);
  } else {
    clearInterval(timer);
    console.log('Done');
  }
}, 500);
