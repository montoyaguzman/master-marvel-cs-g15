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
    console.log('Hola' + name)  
}

let sayGoodBye = name => console.log('Hasta mañana ' + name);  

suma(5, 4);
resta(5, 4);
saluda('jose');
sayGoodBye('ruben');