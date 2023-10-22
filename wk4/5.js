/*function initial(s) {
    return s[0].toUpperCase()
}
*/

String.prototype.initial = function () {
    return this[0].toUpperCase()
}
//console.log(initial('some string'))
const str = 'andreea'
//console.log(initial(str))

console.log(str.initial())
console.log('*************')
//number
//times method 
Number.prototype.times = function (f) {
    for (let i = 0; i < this; i++) {
        f()
    }
}

const n = new Number(5)

n.times(() => {
    console.log('called')
})
