async function fetchdata (){
    try{
        const getpromise = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        if(!getpromise.ok){
            throw new Error(`the error is ${getpromise.status}`)
        }
        const data = await getpromise.json()
        console.log(data[0].name)
    }catch(error){
        console.log(`we got ${error}`)
    }
}

fetchdata()