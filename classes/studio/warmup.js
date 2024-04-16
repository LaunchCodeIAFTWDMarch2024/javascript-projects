//attendance code: CodingClasses

class Vehicle {
    constructor(hasWheels, isPowered, capacity){
        this.hasWheels = hasWheels,
        this.isPowered = isPowered,
        this.capacity = capacity
    }
}

class Car extends Vehicle {
    constructor(numWheels) {
        super(true, true, 2),
        this.numWheels = numWheels
    }
}

let ferrari = new Car(4)
console.log(ferrari)