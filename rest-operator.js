// NOTE showcase the rest operator

'use strict';

// NOTE the rest parameter will be an empty array if no arguments passed in
function makeTea (tea, ...condiments) {
    console.log('arguments length: ' + condiments.length);
    console.log(condiments);
}

makeTea('green tea', 'sugar', 'milk');

makeTea('green tea');
