const myarray = ["what", "in", "the", "world", "is", "going", "on"]

const filteredarray1 = myarray.filter((x)=>(x.includes("on") || x.endsWith("ng")))

console.log(filteredarray1)