sampleYears = [1998, 2001, 2002, 2005, 2010, 1990, 2016]
const ages = sampleYears.map(e => 2023 - e).filter(e => e >= 18)
console.log(ages)

console.log(sampleYears.map(e => 2023 - e).filter(e => e >= 18))
