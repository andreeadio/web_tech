function concatenate(a) {
    return a.join(' ')
}

let sampleArray = ['one', 'two', 'three']
console.log(concatenate(sampleArray))

let concatenateArray = (a) => {
    return a.join(' ')
}
console.log(concatenateArray(sampleArray))
