
// function expression
// function anonymous

//parametros (parameters)
const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
sum(2, 3) // arguments - argumentos / 2 e 3 argumentos na função

sum(number1, number2)

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

sum(5, 6)





//função liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')

console.log(copo)