const re = /(?<fruit>apple|orange) == \k<fruit>/u;

console.log(
    re.test('apple == apple'),      // true
    re.test('orange == orange'),    // true
    re.test('apple == orange'),     // false
);