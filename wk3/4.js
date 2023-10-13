const listNumbers = [23, 24, 65, 30, 55, 5, 6]


const sumDivisible = (array, divisor) => {
    return array.filter(e => e % divisor === 0).reduce((a, e) => a + e, 0)
}

console.log(sumDivisible(listNumbers, 5))