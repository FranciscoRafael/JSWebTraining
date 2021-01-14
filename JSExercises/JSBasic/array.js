const vet =  [10, 9.2, 8, 3, 4, 5]

console.log(vet[0], vet[4])

vet[4] = 10

console.log(vet)

console.log(vet.length)

vet.push(false, null, 'teste')
console.log(vet)

delete vet[0]
console.log(vet)

vet.pop()
console.log(vet)