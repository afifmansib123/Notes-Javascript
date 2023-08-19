const stringarray1 = ["what", "in", "the", "world", "is", "going", "on"]

//we can seperately pass the words inside the array
const stringarray2 = stringarray1.map((words)=>{if(words === "is"){return "MATCH"} else{return "NOT MATCH"}})


//or we can create a function and pass the function to map.
function upperfunc(string){
    return string.toUpperCase()
}


const stringarray3 = stringarray1.map(upperfunc)

console.log(stringarray3)