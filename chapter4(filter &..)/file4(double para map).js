const myarray = ["the", "new", "natural", "protein"]
let newarray

for (x of myarray){
    newarray = myarray.map((x,y)=>{
        return `${x} is at ${y}` 
    })
   
}

console.log(newarray)

