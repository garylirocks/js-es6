import { getGoodPromise, getBadPromise } from './promises/promise-generator';

async function foo() {
    var x = await getGoodPromise();
    console.log(x);
}

foo();

// asynchronous iteration
const promises = [
    getGoodPromise(1),
    getGoodPromise(2),
    getGoodPromise(3),
];

const test1 = () => {
    for (const p of promises) {
        console.log(p);
    }
}

const test2 = async () => {
    for (const p of promises) {
        console.log(await p);
    }
}

test1();
test2();