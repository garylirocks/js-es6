// NOTE demo the general usage of a proxy object

function Employee() {
    this.name = 'Gary Li';
    this.salary = 0;
}

var e = new Employee();

// NOTE use a proxy to wrap around the original object
//          then you can intercept the get, set operations
var p = new Proxy(e, {
    get: function (target, prop, receiver) {
        if (prop === 'salary') {
            return 'You are DENIED to the ' + prop + ' property !!';
        }

        return Reflect.get(target, prop, receiver);
    }
});

console.log(p.salary);
// You are DENIED to the salary property !!

console.log(p.name);
// Gary Li
