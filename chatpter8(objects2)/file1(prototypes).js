// object prototype ??

const object1 = {
    name : "afif",
    printname : function(){
        console.log(`my name is ${this.name}`)
    }
}

object1.printname()

//every js object has a built in StylePropertyMap, the prototype
//other than printname, by default many properties are defined
//when called it looks at the prototype, doesnt find it goes deeper where
//theres another prottype, then deeper until undefined is returned.

//get the prototype : 

const x = Object.getPrototypeOf(object1)
console.log(x)


/* we can defined predefined properties by manipulating this feature */


const mydate = new Date(1823, 12, 2)
const seeyear = mydate.getFullYear()
console.log(seeyear)

//now i will overwrite this function in the object prototype,
//and it will print this first 

mydate.getFullYear = function (){
    console.log(' i changed it hahahah')
}

//now i can see the changed results.

mydate.getFullYear()