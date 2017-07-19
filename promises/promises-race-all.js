// NOTE demo of Promise.race() and Promise.all()

function promiseBuilder(finalStatus, waitTime, id) {
    let desc = `Promise ${id} ${(finalStatus ? 'resolved' : 'rejected')} after ${waitTime} ms`;

    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (finalStatus) {
                resolve(desc);
            } else {
                reject(desc);
            }
        }, waitTime);
    });

    p.then(function(value){
        console.log(desc);
    }, function(reason) {
        console.log(desc);
    });

    return p;
}

let yesAction = function() {
    console.log('ok');
};

let noAction = function() {
    console.log('nope');
};

let pa = promiseBuilder(true, 1000, 'a');
let pb = promiseBuilder(false, 2000, 'b');

// NOTE an 'all' promise will terminate when one of its dependents rejected or all resolved
//          it will be rejected when any of its dependent got rejected
Promise.all([pa, pb]).then(yesAction, noAction);

// NOTE a 'race' promise will terminate when one of its dependents terminates and got its status
Promise.race([pa, pb]).then(yesAction, noAction);


let pc = promiseBuilder(false, 3000, 'c');
let pd = promiseBuilder(true, 4000, 'd');

Promise.all([pc, pd]).then(yesAction, noAction);
Promise.race([pc, pd]).then(yesAction, noAction);
