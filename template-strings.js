/**
 * template strings
 */
function createEmail(firstName, purchasePrice) {
    var shipping = 10.0;

    // NOTE use ${} to surround variables or expressions in backticks
	//	in '$$', the first '$' here is for outputting a literal '$' character
    console.log(
        `Hi ${firstName}, Thanks for buying from us!
            Total: $${purchasePrice}
            Shipping: $${shipping}
            Grand Total: $${purchasePrice + shipping}
        `);
}

createEmail("Garry", 20);
