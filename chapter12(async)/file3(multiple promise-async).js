const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  //Promise.all is for all of them to be successful

  Promise.all([fetchPromise1,fetchPromise2,fetchPromise3])
  .then((res)=>{
    for(response of res){
        console.log(`${response.url} is ${response.status}`)
    }
  })
  .catch((error)=>{
    console.error(`failed to fetch ${error}`)
  })