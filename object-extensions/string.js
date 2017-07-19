
let s = 'Gary Li rocks';

// NOTE new string methods: '.startsWith()', '.endsWith()', '.includes()', '.repeat()'
console.log(s.startsWith('Gary'));
console.log(s.endsWith('rocks'));
console.log(s.includes('Li ro'));

console.log('- | '.repeat(5));


// NOTE escaping Unicode characters
// use the following emoji characters an example here
// U+1F3BE  tennis
// U+1F3F8  badminton
// U+1F3D3  table tennis
let s2 = "\u{1F3BE}";
console.log(s2);
console.log(s2.length);  // 2, this is incorrect, it shows the bytes count ?

let s3 = "\u{1F3BE}\u{1F3F8}\u{1F3D3}";
let arr = Array.from(s3);
console.log(s3);
console.log(arr.length);    // 3, character count is correct here
