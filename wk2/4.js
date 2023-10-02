function strDiff(s1, s2) {
    if (s1.length !== s2.length) {
        return -1
    }
    let diffCount = 0
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffCount++
        }
    }
    return diffCount
}

console.log(strDiff('cat', 'mat')) //1
console.log(strDiff('cat', 'one')) //3
console.log(strDiff('cat', 'cats')) //-1

//fac lucruri diferite
// ===
// ==