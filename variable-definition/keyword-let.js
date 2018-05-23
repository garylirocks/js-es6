/*
 *let keyword
 */
var x = 10;

console.log('outside, before if, x = ' + x);

if (x) {
	let x = 4; // let make this x block scoped, instead of function scoped
	console.log('inside if block, x = ' + x);
}

console.log('outside, after if, x = ' + x);
