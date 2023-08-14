const stringarray1 = ["what", "in", "the", "world", "is", "going", "on"]

const stringarray2 = stringarray1.map((words)=>{if(words === "is"){return "MATCH"} else{return "NOT MATCH"}})

function upperfunc(string){
    return string.toUpperCase()
}
const stringarray3 = stringarray1.map(upperfunc)

console.log(stringarray3)