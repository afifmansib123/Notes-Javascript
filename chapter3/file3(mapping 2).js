const array = [1,2,3,4,5,6,7,8]

const array1 = array.map((x)=> (x%2 == 0)) //return direct output of the function
const array2 = array.map((x)=>{if(x%2 == 0){ return x } else{ return 0}}) //return only that retured by function

console.log('first func: ')
console.log(array1)
console.log('second func: ')
console.log(array2)