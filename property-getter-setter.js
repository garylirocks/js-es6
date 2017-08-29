// NOTE use 'get', 'set' keywords to define getter and setter functions

class Animal {
    constructor() {
        this._id = 88;
        this._colors = new Set([]);
    }

    get id() {
        return this._id;
    }

    set color(v) {
        this._colors.add(v);
    }
}

let panda = new Animal();
console.log(panda.id);
// 88

panda.color = 'white';
panda.color = 'black';

console.log(panda._colors);
// Set { 'white', 'black' }
