
//this is the PARENT class

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
    salary;

    constructor(name,age,gender,subject,salary){
        super(name,age,gender)
        this.subject = subject
        this.salary = salary
    }

    introduceprofessor(){
        console.log(`I am ${this.name} who's a ${this.age} years old ${this.gender}. I teach ${this.subject} for ${this.salary}`)
    }
}

const Teacher1 = new professor("dobri",50,"male","physics",25000)
//we're calling the function defined inside the child class
Teacher1.introduceprofessor()
//but we can call the function inside the parent class as well.
Teacher1.printIdentity()