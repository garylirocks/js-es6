// NOTE use 'Reflect' to make an object un-extensible

'use strict';

let obj = {
    id: 20
};

// an object is extensible by default
obj.name = 'boo';

console.log(Reflect.isExtensible(obj));
// true

// NOTE prevent new properties to be added to this object
Reflect.preventExtensions(obj);

console.log(Reflect.isExtensible(obj));
// false

obj.color = 'white';
// throws an error here
