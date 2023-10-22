let a = [0, 1, 2, 3, 4, 5, 6]
console.log(a.slice(1, 4))
//console.log(a.slice(0, a.length))


//splice -> variatic function unknown nr of params
console.log(a.splice(1, 2, 'a', 'b'))


//Functions
//in js we cannot override functions but we have functions which can take more params than we declared
//look over regex

function f(a, b, c = 4) {
    return a + b + c
}

console.log(f('a', 2, 3, 5, 5))
console.log(f('a', 2))

let f2 = function (x) {
    return x * 2
}

//diff : hoisted 
//arrow functions

let f3 = (x) => {
    return x * 2
}
let f4 = x => x * 2
//a method  -a function which is bound to a particular object


//higher order functions





