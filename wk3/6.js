function formatString(s, params) {
    let modified = s
    for (const elem in params) {
        modified = modified.replace(`{${elem}}`, params[elem])
    }
    return modified
}

console.log(formatString("{name} has a {attribute} {pet}", { name: 'Mary', attribute: 'little', pet: 'lamb' }))