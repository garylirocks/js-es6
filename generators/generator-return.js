
// NOTE you can use a 'return' statement on a generator object
function* langMaker() {
    yield 'C';
    yield 'JavaScript';
    yield 'PHP';
}

let iter = langMaker();

console.log(iter.next());

// NOTE this terminates the generator, and yield the provided value
console.log(iter.return('Enough, stop it here'));
console.log(iter.next());

// { value: 'C', done: false }
// { value: 'Enough, stop it here', done: true }
// { value: undefined, done: true }
