function primefunc(n){
    let isprime = true
    for (i =2; i<n ; i++){
        if(n%i === 0) {
            isprime = false
        }
    }
    return isprime
}

const array1 = [1,11,3,4,5,10,11,7,9]
array1.map((x)=>{
    if(!primefunc(x)){
        primes.push(x)
    }
})

console.log(primes)