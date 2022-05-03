const matrizA = [
    [2, 0, 1],
    [3, 2, 0],
    [5, 4, 1]
];

const matrizB = [
    [4, 0, 3],
    [1, 2, 7],
    [4, 5, 0]
];

const matrizResultado = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const matrizResultado2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const matrizResultado3 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

console.log('matrizA => ', matrizA);
console.log('matrizB => ', matrizB);

// console.log(matrizB[0][0]);
// console.log(matrizB[0][1]);
// console.log(matrizB[0][2]);
// console.log(matrizB[1][0]);
// console.log(matrizB[1][1]);
// console.log(matriz[0][3]); // undefined

/**
 * SUMA
 */
for (var fila = 0; fila < matrizResultado.length; fila++) {
    for (var columna = 0; columna < matrizResultado.length; columna++) {
        // debugger
        // console.log(fila)
        // console.log(columna)
        matrizResultado[fila][columna] = matrizA[fila][columna] + matrizB[fila][columna]
    }
}

/**
 * RESTA
 */
for (var fila = 0; fila < 3; fila++) {
    for (var columna = 0; columna < 3; columna++) {
        matrizResultado2[fila][columna] = matrizA[fila][columna] - matrizB[fila][columna]
    }
}


const matrizA2 = [
    [1, 6, 0],
    [-1, 3, 1],
    [4, 6, 2]
];

const matrizB2 = [
    [0, 4, 0],
    [2, 3, 1],
    [1, -2, 1]
];
/** 
 * Reglas de la MULTIPLICACION de matrices
 * 1. matrizResultado[filasM1][columnasM2] 
 * 2. Solo se puede multiplicar M1 y M2 si columnasM1 === filasM2
*/
for (var fila = 0; fila < matrizResultado3.length; fila++) {
    for (var columna = 0; columna < matrizResultado3.length; columna++) {
        
        /**
         * Primer avance, tenia errores
         */
        // matrizResultado3[fila][columna] = matrizResultado3[fila][columna] + matrizA2[fila][columna] * matrizB2[fila][columna]
        // matrizResultado3[0][0] = matrizResultado3[0][0] + matrizA[0][0] * matrizB[0][0]
        // matrizResultado3[1][1] = matrizResultado3[1][1] + matrizA[1][1] * matrizB[1][1]

        /**
         * Pseudocodigo de correcion de errores
         */
        // matrizResultado3[0][0] = matrizResultado3[0][0] + matrizA[0][0] * matrizB[0][0]
        // matrizResultado3[0][0] = matrizResultado3[0][0] + matrizA[0][1] * matrizB[1][0]
        // matrizResultado3[0][0] = matrizResultado3[0][0] + matrizA[0][2] * matrizB[2][0]

        /** Solucion */
        for (var aux = 0; aux < matrizResultado3.length; aux++) {
            matrizResultado3[fila][columna] = matrizResultado3[fila][columna] + matrizA2[fila][aux] * matrizB2[aux][columna];
        }

    }   
}

console.log('matrizResultado (suma) => ', matrizResultado);
console.log('matrizResultado (resta) => ', matrizResultado2);

console.log('matrizA => ', matrizA2);
console.log('matrizB => ', matrizB2);
console.log('matrizResultado (multiplicacion) => ', matrizResultado3);
console.log(matrizA.length)

// < Menor
// > Mayor
// <= Menor igual
// >= Mayor igual