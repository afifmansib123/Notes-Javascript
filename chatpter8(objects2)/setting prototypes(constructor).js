// using Object.create()

//define object prototype 

const prototype1 = {
    greeting(){
        console.log(`my name is ${this.name}`) //we dont have the name prototype here yet
    }
}


//now lets say to the previous function 
//i would like to use the name property
//this is done using constructors.


//we will create a constructor and set the name property
function setname(name){
    this.name = name
}

//use Object.assign() to assign prototypes to the newly created object
Object.assign(setname.prototype, prototype1)   // -> we set the prototype of the newly created constructor and gave it access the the prototypes defined, and it can acess the function

const person1 = new setname("zian") //we have to use the new keyword when creating constructors.
person1.greeting()

const person2 = new setname("Lala")
person2.greeting()



//normally its common to see
// ------->>> methods/function are defined on the prototype
// ------->>> data properties are defined on the constructor.