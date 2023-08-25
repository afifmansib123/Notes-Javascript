// using Object.create()

//define object prototype 

const prototype1 = {
    function1 : function(){
        console.log('this is first function')
    },
    function2 : function(){
        console.log('this is second d=function')
    }
    
}

const object1 = Object.create(prototype1)
prototype1.function1()

//we can create other prototypes to this as well.
