// array destructuring assignment
var [first, ,third, ] = [1, 2, 3, 4]; // reference by position
console.log(`first: ${first}, third: ${third}`);

// object destructuring assignment
var people = {
    'name': 'Gary',
    'age': 21,
    'country': 'NZ',
};

var {age, name} = people;	// NOTE you need to use the keys on left hand side
console.log (`${name} is ${age}`);

// destructuring assignment for function arguments
var printPeople = function({name, age}) {
    console.log(`${name} is ${age}`);
};

printPeople(people);
