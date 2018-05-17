const date = '2018-05-16';
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const result = re.exec(date);
console.log(result);
//[ '2018-05-16',
//  '2018',
//  '05',
//  '16',
//  index: 0,
//  input: '2018-05-16',
//  groups: { year: '2018', month: '05', day: '16' } ]

console.log(result.groups.year);       // get the value of a matched group
//2018
