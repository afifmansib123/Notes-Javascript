const array1 = ["the","whole","world"];
const array3 = [1,2,3,4,5,6]

const array2 = array1.map((x)=>x.toUpperCase())
const array4 = array3.map((x)=>{if(x%2 === 0){return "even"}else{return "odd"}})
console.log(array2)
console.log(array4)