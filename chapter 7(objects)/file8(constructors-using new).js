function createperson(name){
    const obj = {}
    this.name = name
    this.function1 = function(){
        console.log(`i am ${this.name}`)
    }
}

const person1 = new createperson("steve")

const person2 = new createperson("jack")

person1.function1()
person2.function1()