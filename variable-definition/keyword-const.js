/*
 * const keyword
 */

function coldEnough(deg) {
	const freezingTemp = 0; // this constant is local to the function

	if(freezingTemp <= deg) {
		return deg + " is above freezing.";
	} else {
		return deg + " is below freezing.";
	}
}


console.log(coldEnough(10));
console.log(coldEnough(0));
console.log(coldEnough(-8));
