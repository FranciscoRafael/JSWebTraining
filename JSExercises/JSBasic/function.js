console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

{ 
    console.log('bloco')
}

function consoleSoma(a, b, c) { 
    console.log(a + b + c)
}

consoleSoma(1, 2, 3)
consoleSoma(1)
consoleSoma(2, 2, 5, 6, 6, 7)

function soma(a, b = 10) { 
    return a + b
}

console.log(soma(2))
console.log(soma(3, 50))


//normal
const consoleSoma1 = function (a, b) { 
    console.log(a + b)
}

consoleSoma1(1, 2)

//arrow

const consoleSoma2 = (a, b) => { 

    console.log(a + b) 
}

consoleSoma2(10, 30)

//arrow functin
const subtracao = (a,b) => a-b


console.log(subtracao(30,20))
