//anonymous function
const checkDivisibility = function (n, d) {
    //if(0) ->false
    if (n % d) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisibility(8, 2))