const a = 1.0
const a2 = Number('2.2')

console.log(a, a2)
console.log(Number.isInteger(a))
console.log(Number.isInteger(a2))

const av1 = 9.541
const av2 = 7.123

const total = av1 * a  + av2 * a2
const media = total / (a + a2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) // bin




//warning

console.log(10/0) // infinity (??????????????????????????)
console.log("10"/2) // (????????)
console.log("string" *2) // NAN

console.log(0.1 + 0.3)
console.log((10.12313).toFixed(2))


// MATH

const r = 9.5
const arr = Math.PI * Math.pow(r, 2)
console.log(arr)

console.log(typeof Math)