/*
    Function() construtor

    *expressão new
    *criar um novo projeto
    *this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " Andando"
    }
}

const mayk = new Person("Mayk") //com o new agr essa função se tornou uma função construtora
const joao = new Person("João")
console.log(mayk.walk())
console.log(joao.walk())
