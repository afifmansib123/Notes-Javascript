
async function fetchdata () {
    const requrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    const request = new Request(requrl)
    const response = await fetch(request) //this is promise
    const result = await response.json() //this is data

    console.log(result)
}

fetchdata()
