// a Promise object generator, resolve or reject depending on the parameter
export const getPromise = function getPromise(shouldResolve = true, value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            if (shouldResolve) {
                resolve('good: ' + value);
            } else {
                reject(new Error('bad promise: ' + value));      // <- usually pass an Error to reject
            }
        }, 100);
    });
}

export const getGoodPromise = (value = 1) => getPromise(true, value);
export const getBadPromise = (value = 1) => getPromise(false, value);

