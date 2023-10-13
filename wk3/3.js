const squareDimentions = [3, 5, 12, 3, 5, 3]
const totalArea = squareDimentions.map(e => e * e).reduce((a, e) => a + e, 0)

//const result = getTotalArea(squareDimentions)
console.log("result: ", totalArea)

