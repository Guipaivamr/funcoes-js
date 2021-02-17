// function hoisting

//primeiro estou executando a função e depois criando a função
// é como se o js estivesse colocando a função primeiro e depois executando a função
sayMyName()

function sayMyName() {
    console.log('Guilherme')
}

// não posso criar uma const/var/let recebendo uma função
//exe a baixo.

/*let sayMyName = function() {
    console.log('guilherme')
}*/

