const button1 = document.getElementById("generate")
const button2 = document.getElementById("reload")

const output = document.getElementById("output")
let arrayx = []


function primefunc(n){
    let isprime = true
    for (i =2; i<n ; i++){
        if(n%i === 0) {
            isprime = false
            false
        }
    }
    return isprime
}

button1.addEventListener("click", async ()=>{
    const inputnumber = document.getElementById("quota").value
    for(let a = 0; a< inputnumber ; a++){
        if(primefunc(a)){
            arrayx.push(a)
        }
    }
    output.textContent = "the first prime numbers within this is " + arrayx
})




