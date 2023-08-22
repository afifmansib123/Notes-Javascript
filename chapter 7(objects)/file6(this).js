const person1 = {
    name : "afif",
    age : 24,

    function1 : function(){
        console.log(`${this.name} is ${this.age} yerars old`)
    }
}

const person2 = {
    firstname : "zian",
    hisage : 27,

    function1: function(){
        console.log(`${this.firstname} is ${this.hisage} years ol`)
    }
}

person1.function1()

person2.function1()