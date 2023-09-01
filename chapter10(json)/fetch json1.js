
async function fetchdata () {
    const requrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    const request = new Request(requrl)
    const response = await fetch(request)
    const result = await response.json()

    console.log(result)
}

fetchdata()
