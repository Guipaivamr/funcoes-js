function Person(name){
    this.name = name
    this.walker = function() {
        return this.name + "andando"
    }
}

const joao = new Person("Joao")
console.log(joao.walker)