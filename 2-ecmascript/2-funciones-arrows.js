// Funcion tradicional
function suma(num1, num2) {
    let result = num1 + num2;
    console.log('La suma es: ' + result);
}

// Funcion flecha (arrow)
let resta = (num1, num2) => {
    let result = num1 - num2;
    console.log('La resta es: ' + result)
}

let saluda = name => {
    console.log('Hola' + name);
}

let sayGoodBye = name => console.log('Hasta mañana ' + name);  

let eating = () => console.log('comiendo...')

suma(5, 4);
resta(5, 4);
saluda('jose');
sayGoodBye('ruben');
eating();

/** Syntaxis de las funciones flecha
// Funcion flecha ordinaria (con muchos parametros y cuerpo)
(param1, param2, paramN) => { //cuerpo de la funcion }

// Funcion flecha con 1 solo param (no requiere parentesis en los parametros)
param1 => { //cuerpo de la funcion }

// Funcion flecha con una sola linea como retorno (no tiene cuerpo {})
(param1, param2, paramN) => // result

// Funcion flecha con 1 solo param y una sola linea como retorno (no tiene ni parantesis ni cuerpo)
param1 => //result

// Funcion flecha sin parametros
() => //result

*/