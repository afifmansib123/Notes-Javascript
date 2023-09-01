const myarray = ["the", "new", "natural", "protein"]

for (x of myarray){
    const newarray = myarray.map((x,y)=>{
        return `${x} is at ${y}` 
    })
}

console.log(myarray)