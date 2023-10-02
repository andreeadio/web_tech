//js -> functional language
//returns undefined
/*
const sayHello = () => {
    console.log('hello')
}
*/
//with this => do this 
/*let sayHello = (name) => {
    return `hello ${name}!`
}
*/

let sayHello = (name) => `hello ${name}!`
//console.log(sayHello('Andreea'))

//sayHello = 5
if (process.argv.length > 2) {
    console.log(sayHello('Andreea'))
} else {
    console.log('mot enough params')
}

f
