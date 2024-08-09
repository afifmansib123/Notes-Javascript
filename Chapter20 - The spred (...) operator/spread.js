// use of ... operatore

// 1. copy array

const myarray1 = [1,2,3,4,5]

const copyarray = [...myarray1]

console.log(copyarray)

//2. combining arrays

const array1 = [1,2,3]

const array2 = [4,5,6]

const newarray = [...array1, ...array2]

console.log(newarray)

//3. copying object

const man1 = {
    "name" : "rahumab",
    age : 30,
}

const man2 = {...man1}

console.log(man2)

// merging objects

const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject);

// in function arguments 

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));

// Spreading a String

const string = "Hello";
const charArray = [...string];

console.log(charArray);

// the most prominent use -> Rest Parameters 

// example 1 :

const multiply = (multiplier , numbers) => {
    return numbers.map((x)=> x*multiplier)
}

console.log(multiply(2, [1,2,3,4,5]))


 // but use ----

 const multiply2 = (multiplier , ...numbers) => {
    return numbers.map((x)=> x*multiplier)
}

console.log(multiply2(2,1,2,3,4,5))

