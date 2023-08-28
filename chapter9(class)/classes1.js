class person{
    name;
    age;
    gender;

    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    printIdentity(){
        console.log(`this is ${this.name} who's a ${this.age} years old ${this.gender}`)
    }
}

const person1 = new person("Jack", 23, "male")
person1.printIdentity()

