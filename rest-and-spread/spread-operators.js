var asiaCountries = ['China', 'Japan', 'Iran'];
var africaCountries = ['South Africa', 'Egypt', 'Congo'];

// the '...' operator unpacks an array, can be used to copy arrays
var allCountries = [...asiaCountries, ...africaCountries];

console.log(allCountries);
