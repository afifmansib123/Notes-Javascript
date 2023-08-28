//expolore provate properties with this class

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

//this is the child class

class professor extends person{
    subject;
    #salary; //the slary here is a private property

    constructor(name,age,gender,subject,salary){
        super(name,age,gender)
        this.subject = subject
        this.#salary = salary  
    }

    introduceprofessor(){
        console.log(`I am ${this.name} who's a ${this.age} years old ${this.gender}. I teach ${this.subject} for ${this.salary}`)
    }

    printsalary(){
        console.log(`my salary is ${this.#salary}`)
    }
}

const teacher1 = new professor("zian", 28, "Male", "MAX", 298087123456)

teacher1.introduceprofessor()

//we're printing a public property
console.log(teacher1.name)

//now lets try the private property
console.log(teacher1.salary) //--> gereneated error as method outside the classs dont have access

//but the methods inside the class does.
teacher1.printsalary()