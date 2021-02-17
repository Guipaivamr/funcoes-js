//function scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))


let soma = 45 + 56

function somaTotal(soma) {
    soma = 200
    return soma
}


console.log(soma)
console.log(somaTotal(soma))