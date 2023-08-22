//we wll be revising the concept of objects

const person1 = {
    name : "afif",
    age : 23,
    male : true,

    function1 : function(){
        console.log(`${this.name} is ${this.age} is fale is ${this.male} . he has a bank balance of ${this.bankbalane}`)
    },

    function2 : function(){
        console.log(`${this.name} is a ${this.muscles} man`)
    }
}

person1.bankbalane = 20114562

person1.function1()

const newproperty = "muscles"
const newvalue = "muscular"

person1[newproperty] = newvalue

person1.function2()

function createperson(name, age, gender, bankbalance, muscles){
    this.name = name
    this.age = age
    this.gender = gender
    this.bankbalance = bankbalance
    this.muscles = muscles

    this.printfunction =  function(){
        console.log(`${this.name} is ${this.age} years old of ${this.gender} with ${this.bankbalance} money and has ${this.muscles}`)
    }
}

const person2 = new createperson("Afif", 29, "male", 2012345162345, "mascular")
person2.printfunction()
