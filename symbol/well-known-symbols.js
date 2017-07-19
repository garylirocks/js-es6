
let Person = function () {

};

Person.prototype[Symbol.toStringTag] = 'Person Class';

let p = new Person();
console.log( p.toString() );
