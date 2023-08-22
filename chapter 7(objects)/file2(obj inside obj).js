const object1 = {
    name : {
        fname : "afif",
        lname : "chow",
    },
    age : 23,
    function1: function(){
        console.log(`my name is ${this.name.fname}`)
    },
    function2: function(){
        this.function1()
        console.log(`my name is also ${this.name.lname} and i am ${this.age} years old`)
    }
}
object1.function2()