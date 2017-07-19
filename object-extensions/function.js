
// NOTE Function.name, Function.length
function foo() {
    return 'foo';
}

let bar = function(x, y) {
    return 'bar';
}

let f1 = bar;

console.log(foo.name);      // foo
console.log(bar.name);      // bar
console.log(f1.name);       // bar      -> the name is still bar;

console.log(bar.length);    // 2        -> return the length of the arguments list


class App {
    run () {
        console.log('app is running');
    }
}

let a = new App();

console.log(typeof App);    // function     -> remember App is a function
console.log(App.name);      // App
console.log(a.run.name);    // run
