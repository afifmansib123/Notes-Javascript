//we wrap the function with async

async function fetchfunstion(){

    try{
        const fetchdata = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")   //the first then
        if(!fetchdata.ok){
            throw new Error(`error : ${fetchdata.status}`)
        }
        const data = await fetchdata.json() //the second then
        console.log(data[0].name)
    }catch(err){
        console.error(`${err}`)
    }

}

fetchfunstion()