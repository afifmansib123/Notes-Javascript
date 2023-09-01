const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  //now any of the promise's fulfil the criteria and we finish
  //any can finish

Promise.any([fetchPromise1,fetchPromise2,fetchPromise3])
.then((res)=>{
    console.log(`${res.url} gave ${res.status}`)
})
.catch((err)=>{
    console.error(`failed to fetch ${err}`)
})