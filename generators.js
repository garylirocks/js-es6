// add a '*' to indicate this is a generator function
function* eachItem(arr) {
    for (var i=0; i < arr.length; i++) {
        yield arr[i];
    }
}

// letters is an object which has a 'next' property
var letters = eachItem([1, 2, 3]);

var timer = setInterval(function(){
    var letter = letters.next();    // this will return an object: {value: val, done: true|false}

    if (!letter.done) {
        console.log(letter.value);
    } else {
        clearInterval(timer);
        console.log('Done');
    }
}, 500);
