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
console.log(object1["name"])
console.log(object1["name"]["fname"], object1["name"]["lname"])
console.log(object1["age"])
