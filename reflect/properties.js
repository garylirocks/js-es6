// NOTE use 'Reflect' to manipulate properties of an object

class Animal {
    constructor() {
        this._id = 88;
    }

    get id() {
        return this._id;
    }
}

let boo = new Animal();
console.log(boo.id);

console.log(Reflect.get(boo, 'id', {_id: 11}));
// 11
