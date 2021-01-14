{
    {
        {
            {
                {
                    {
                        var var1 = 'teste'
                    }
                }
            }
        }
    }
}

console.log(var1)

function test() { 
    var local = 1234
    console.log(local)
}

console.log(test.local)
var n = 1
{ 
    var n = 2
    console.log('dentro = ', n)
}
console.log(n)


let n1 = 1

{ 
    let n1 = 2
    console.log(n1)
}

console.log(n1)