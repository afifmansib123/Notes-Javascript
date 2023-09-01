// here is the modern replacement for the synchronous function
// we made using XMLHttpRequest API

const fetchdata = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

console.log(fetchdata)

fetchdata.then((res)=>{  //handler function, when the operation finishes, log the response data
    console.log(`${res.status}`)
})

console.log('started request') // see how this is printed in the middle
//as it took some time for the response to come.