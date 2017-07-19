
var person = {
    'name': 'Gary',
    'hobbies': ['tennis', 'badminton', 'hiking'],

    // 'this' scope error, will be undefined
    'print': function(){
        console.log("// Wrong, \'this\' will be undefined.");
        this.hobbies.forEach(function(hobby){
            console.log(this.name + ' likes ' + hobby);
        });
    },

    // use '_this' to pass the correct context this in
    'print2': function(){
        var _this = this;
        console.log("// use '_this' to pass the correct context this in");
        this.hobbies.forEach(function(hobby){
            console.log(_this.name + ' likes ' + hobby);
        });
    },

    // use 'bind' to get the correct this
    'print3': function(){
        console.log("// use 'bind' to get the correct this");
        this.hobbies.forEach(function(hobby){
            console.log(this.name + ' likes ' + hobby);
        }.bind(this));
    },

    // NOTE use arrow function syntax, `this` always binds to the context of its definition 
    'print4': function(){
        console.log("// use arrow function syntax");
        this.hobbies.forEach(hobby => {
            console.log(this.name + ' likes ' + hobby);
        });
    }
}

person.print();
console.log('\n ========= \n');
person.print2();
console.log('\n ========= \n');
person.print3();
console.log('\n ========= \n');
person.print4();
