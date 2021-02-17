// callback function

function sayMyName(name) {
    name()
}

sayMyName( () => {
    console.log('Estou em uma callback')
}) //posso colocar qualquer tipo de dado ate função