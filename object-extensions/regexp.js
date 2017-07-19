
// NOTE 'u' flag: unicode matching
let pattern = /^. Player/;
let pattern2 = /^. Player/u;        // make sure to add the 'u' flag when you want to match a unicode character

let s = "\u{1F3BE} Player";

console.log(pattern.test(s));
console.log(pattern2.test(s));

// NOTE 'y' flag: matching at a specified index
let pattern3 = /li/y;               // only match at the point of lastIndex of this pattern
let s3 = 'gary li / donald li';

console.log(pattern3.lastIndex);    // 0        -> only match at the index 0
console.log(pattern3.test(s3));     // false    -> no match

pattern3.lastIndex = 5;             // change the lastIndex manually
console.log(pattern3.test(s3));     // true     -> matched here

console.log(pattern3.lastIndex);    // 7        -> lastIndex changes after a match
