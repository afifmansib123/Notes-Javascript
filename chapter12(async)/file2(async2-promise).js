// now to actually see the data

const fetchreq = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

fetchreq.then((res)=>{
    const jsonresponse = res.json()
    console.log(jsonresponse) // this is the promise
    jsonresponse.then((data) => { //when the promise resturns an object and data is called
        //console.log(data)
        //console.log(data[2].name)
    })
})


// to avoid callback hell, we will rewrite the function above 

const fetchreq2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

fetchreq2
.then((res)=>res.json()) //promise returned
.then((data)=>{console.log(data[0].name)}) //data returned 

//finally we have to add another OK status as well.

const fetchreq3 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

fetchreq3
.then((res)=>{
    if(!res.ok){
        throw new Error(`${res.status}`)
    }else{
        return res.json()
    }
}) //promise returned
.then((data)=>{console.log(data[0].name)}) //data returned 
//finally we add catch error the last piece of the code.
.catch((error)=>{
    console.error(`${error}`)
})

/* promise returns as below :

pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.
fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called.

*/