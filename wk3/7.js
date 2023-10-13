function map(a, f) {
    const result = []
    for (const element of a) {
        result.push(f(element))
    }
    return result
}

console.log(map([1, 2, 3], x => x * 2))