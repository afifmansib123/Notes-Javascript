async function fetchingjsonobjects () {

    //we are writing this async function in form of a sync function - using await takes away then ned of then 

    try{  // try and catch for the first syntax

        const promisereturn = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        if(!promisereturn.ok){
            throw new Error(`${promisereturn.status}`)
        }

        //now get the data from the promise we got
        const data = await promisereturn.json()
        console.log(data[0].name)


    } catch (err) {
        console.log(`we encountered ${err}`)
    }
}

//finally lets call it
fetchingjsonobjects()