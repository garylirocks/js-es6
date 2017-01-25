
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
    constructor(name, age) {
        super(name, age, 'Male');   // the 'super' keyword
    }
}

var gary = new Men('Gary', 30);
gary.introduce();
