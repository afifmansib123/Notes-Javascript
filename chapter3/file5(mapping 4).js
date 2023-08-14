const myarray1 = []
for(i =0; i<10 ; i++){
    myarray1[i] = Math.random()
}
const myarray2 = myarray1.map((x)=>x<.5?"small":"big")
console.log(myarray1)
console.log(myarray2)