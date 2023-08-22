function createperson (name, age) {
    //create an empty object
    const obj = {}

    //define properties
    obj.name = name
    obj.age = age

    obj.printingfunction = function(){
        console.log(`${this.name} is ${this.age} years old`)
    }
    // the whole function should have a return as well.
    return obj
}

const person1 = createperson ("jason", 24)
const person2 = createperson ("manus", 32)

person1.printingfunction()
person2.printingfunction()