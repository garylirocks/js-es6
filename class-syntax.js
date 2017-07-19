
// class definition
class People {
    constructor(name, age, gender) { // constructor method
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}.`);
    }
}

class Men extends People {          // class inheritance
    // static let arms = 2;         // NOTE this is not allowed, you can not declare a static property

    static legs() {                 // NOTE a static method attached to the class directly
        return 2;
    }

    constructor(name, age) {
        super(name, age, 'Male');   // the 'super' keyword
    }
}

Men.arms = 2;                       // NOTE you can still add properties to classes in this way

var gary = new Men('Gary', 30);
gary.introduce();

console.log(Men.legs());
