
let person = {
    'name': 'Gary',
    [Symbol.for('age')]: 20
};

// NOTE accessing a symbol property
console.log(person[Symbol.for('age')]);

// NOTE only string-keyed properties are outputted
console.log(Object.getOwnPropertyNames(person));
/**
[ 'name' ]
**/

// NOTE only symbol-keyed properties are outputted
console.log(Object.getOwnPropertySymbols(person));
/**
[ Symbol(age) ]
**/
