// NOTE a general promise demo

function doAsync() {
    let p = new Promise(function (resolve, reject) {
        console.log('in promise code');

        setTimeout(function() {
            console.log('resolving ...');
            resolve('OK');
        }, 2000);
    });

    return p;
}

let promise = doAsync();

// NOTE when the 'then' actions are chained together, each of them becomes a
//          promise by itself, it resolves when the parent/previous promise resolves and
//          pass the return value to later actions
promise.then(function(value) { // <- chains to the main promise, and creates another promise object
    console.log('successfully done 1: ' + value);
    return 'Cool';
}).then(function(value) {   // <- this one actually chains to a new promise created by the previous 'then'
    console.log('successfully done 2: ' + value);
    return 'Well Done';
});

setTimeout(function() {
    promise.then(function(value) {
        console.log('a done action after resolving: ' + value);
    });
}, 3000);
