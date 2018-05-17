const re = /(?<firstName>[a-zA-Z]+) (?<lastName>[a-zA-Z]+)/u;

console.log('Arya Stark'.replace(re, '$<lastName>, $<firstName>'));     // Stark, Arya
