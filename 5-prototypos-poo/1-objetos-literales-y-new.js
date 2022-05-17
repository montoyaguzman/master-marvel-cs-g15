// Objeto literal
const tsuru = {
    name: 'tsuru',
    price: 20,
    arranca: function(aceleracion) {
     console.log('estoy arrancando...', aceleracion);
    }
};
tsuru.noLlantas = 5;

console.log(tsuru);
tsuru.arranca(10);
console.log(tsuru.noLlantas);


// Sintaxis new Object
const mazda = new Object();
mazda.name = 'mazda';
mazda.price = 150;
mazda.noLlantas = 4;
console.log(mazda);