const object1 = {
    name : {
        fname : "afif",
        lname : "chow",
    },
    age : 23,
    function1: function(){
        console.log(`my name is ${this.name}`)
    },
    function2: function(){
        this.function1()
        console.log(`my name is also ${this.name.lname} and i am ${this.age} years old`)
    }
    }


    //we are changing values of the properties
    object1.age = 98
    object1.name.lname = "hagu"
    console.log(object1.age)
    console.log(object1.name.lname)

    //we can even create new objects 
    object1.bankbalance = 200021232
    console.log(object1.bankbalance)

    //or even create new functions.
    object1.function3 = function () {
        console.log(`my bank balance is ${this.bankbalance} dollars`)
    }

    object1.function3()