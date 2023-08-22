
const person = {
    name: ["afif", "mansib"],
    age: 23,
    printname: function () {
        console.log(`hi i am ${this.name[0]} ${this.name[1]}`)
    },

    printidentity: function() {
        this.printname()
        console.log(`i am ${this.age} years old`)
    }
}
person.printidentity()
