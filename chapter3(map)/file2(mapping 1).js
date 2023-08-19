//mapping is to map 1 array to another array 

/*------------ function1 -------------*/
//MAPPING WILL ALWAYS HAVE THIS FORMAT OF GETTING ONE ARRAY.MAP((X)=>FUNCTION(X))
//AND THE OUTPUT GOES TO ANOTHER ARRAY
//ALSO IT RETURNS ONLY ARRAY OF SAME SIZE

const lowercase = ['a','b','c','d','e','f','g','h']

function myfunc(string){
    return string.toUpperCase()
}

const uppercase = lowercase.map(myfunc) //the array to map and the function we will map

console.log(uppercase)



