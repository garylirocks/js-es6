// NOTE use 'Reflect.apply()' to call a function

'use strict';

class Car {
    constructor() {
        this.make = 'Volkswagen';
        this.plate = 'ABC123';
    }

    show() {
        console.log(`${this.make}: ${this.plate}`);
    }
}

Reflect.apply(Car.prototype.show, {make: 'Audi', plate: 'XYZ987'}, []);
