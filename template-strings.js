/**
 * template strings
 */
function createEmail(firstName, purchasePrice) {
    var shipping = 10.0;

    // use ${} to surround variables or expressions in backticks
    console.log(
        `Hi ${firstName}, Thanks for buying from us!
            Total: $${purchasePrice}
            Shipping: $${shipping}
            Grand Total: $${purchasePrice + shipping}
        `);
}

createEmail("Garry", 20);
