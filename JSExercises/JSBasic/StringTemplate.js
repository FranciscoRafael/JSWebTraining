const nome = "Francisco"
const conc = "Meu nome"  + " " + nome + "!"

console.log(conc)

const con2 = `Meu nome ${nome}!`
console.log(con2)

const up = text => text.toUpperCase()

console.log(`Teste .... ${up(nome)}`)