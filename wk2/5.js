function add(a, b, c) {
    return a + b + c
}

console.log(add(1, 2, 3))
console.log(add(1, 2))
console.log(add(1, 2, 3, 4))

let sampleArray = [1, 2, 3]
let [a, b, c] = sampleArray

function buildArray(source, ...args) {
    for (let element of args) {
        source.push(element)
    }
    return source
}
console.log(buildArray([1, 2, 3], 4, 5, 6))