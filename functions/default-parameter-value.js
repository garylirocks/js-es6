// NOTE default practice, the same as other languages
var nameBuilder = function(firstName="Garry", lastName="Doe") {
	console.log(firstName + " " + lastName);
};

nameBuilder();


// NOTE you can refer to other parameters in the default value
function foo(price = 20, tax = price * 0.1) {
	console.log("price: " + price);
	console.log("tax: " + tax);
}

foo();


// NOTE you can use a function as default value for a parameter as well
let taxRate = (price) => 0.2 * price;
function foo2(price = 20, tax = taxRate) {
	console.log("price: " + price);
	console.log("tax: " + tax(price));
}

foo2(100);


// NOTE create a dynamic function with the `Function` constructor
let foo3 = new Function("a = 2", "b = 3", "console.log(a * b);");
foo3(5);
