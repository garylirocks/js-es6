// NOTE a general promise demo

// a Promise object generator, resolve or reject depending on the parameter
let getPromise = function getPromise(shouldResolve = true) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            if (shouldResolve) {
                resolve('good');
            } else {
                reject(new Error('bad'));      // <- usually pass an Error to reject
            }
        }, 100);
    });
}

let getResolvedPromise = () => getPromise();
let getRejectedPromise = () => getPromise(false);

let resolvedCallback = function resolvedCallback(value) {
    console.log('resolvedCallback ' + value);
    return 'resolved';
};

let rejectedCallback = function rejectedCallback(error) {
    console.log('rejectedCallback ' + error);
    return 'rejected';
};

let throwCallback = function throwCallback(error) {
    console.log('throwCallback running');
    throw new Error('a thrown error');
}


/**
 * you can provide both resolved and rejected callbacks to then()
 * and it creates a new promise, the new promise is usually resolved, unless
 *  1. if no matching callback provided, then the new promise inherits the status of the previous promise;
 *  2. if the running callback (no matter resolved or rejected) throws an error, then new promise is rejected;
 */ 
getRejectedPromise()                                    //                      -> rejected
    .then(resolvedCallback, rejectedCallback)           // rejectedCallback run -> resolved
    .then(resolvedCallback, rejectedCallback);          // resolvedCallback run -> resolved

getRejectedPromise()                                    //                      -> rejected
    .then(resolvedCallback)                             // no matching, pass on -> rejected
    .then(resolvedCallback, rejectedCallback);          // rejectedCallback run -> resolved

getResolvedPromise()                                    //                      -> resolved
    .then(null, rejectedCallback)                       // no matching, pass on -> resolved 
    .then(resolvedCallback, rejectedCallback);          // resolvedCallback run -> resolved

getResolvedPromise()                                    //                      -> resolved
    .then(throwCallback)                                // throw an error       -> rejected
    .then(resolvedCallback, rejectedCallback)           // rejectedCallback run -> resolved
    .then(resolvedCallback, rejectedCallback);          // resolvedCallback run -> resolved

/**
 * it is recommended to only pass the resolved callback to .then(), 
 * and use .catch() to handle errors
 * 
 * .catch() is just a syntax sugar for .then(null, catchCallback)
 */
getResolvedPromise()               //                  -> resolved
    .catch(rejectedCallback)        // not run, pass    -> resolved
    .then(resolvedCallback)         // run              -> resolved
    .then(throwCallback)            // run, throw       -> rejected
    .then(resolvedCallback)         // not run, pass    -> rejected
    .catch(rejectedCallback);       // run              -> resolved