const mycallbackfunc = (age , callback) => {
    console.log(callback(age))
}

const multuplyage = (x) => {
    return (x * 5)
}

mycallbackfunc(20 , multuplyage)