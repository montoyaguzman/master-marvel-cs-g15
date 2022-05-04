/**
  Variables simples
  Se asigna o inicializan por valor
*/
let number = 10;
let number_two = number;
number_two = 20;
console.log('number: ', number);
console.log('number_two: ', number_two);

/**
  Variables complejas
  Funcionan por paso por referencia
*/
const student = { id: 1, name: 'jose', app: 'montoya' };
// const student2 = student;
const student2 = { ...student };
student2.name = "Ruben";
console.log("student: ", student);
console.log("student2: ", student2);


const array = [100, 90, 110, 101, 12, 70];
// const array2 = array;
/*
let array2 = [];
for (let i=0; i < array.length; i++) {
  array2.push(array[i]);
}
*/
const array2 = [ ...array ];
array2[0] = 99;
console.log("array: ", array);
console.log("array2: ", array2);