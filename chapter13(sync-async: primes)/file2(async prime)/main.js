const button1 = document.getElementById("generate")
const button2 = document.getElementById("reload")

const output = document.getElementById("output")
let arrayx = []


async function primefunc(n){
    try{
    let isprime = true
    for (i =2; i<n ; i++){
        if(n%i === 0) {
            isprime = false
            false
        }
    }
    return isprime
}catch(err){
    console.log(err)
}
}

button1.addEventListener("click", async ()=>{
    const inputnumber = document.getElementById("quota").value
    for(let a = 0; a< inputnumber ; a++){
        await new Promise(resolve => setTimeout(resolve, 0));
        if(await primefunc(a)){
            arrayx.push(a)
        }
    }
    output.textContent = "the first prime numbers within this is " + arrayx
})




