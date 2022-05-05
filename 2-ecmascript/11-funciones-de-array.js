const array = [48, 11, 32, 3, 80, 55, 100];

const rebanada = array.slice(2, 5);
console.log(rebanada);

array.push(909);
array.unshift(99);

console.log(array);

array.pop();
console.log(array);

array.splice(2, 1);
console.log(array);


const array2 = [8, 10, 50, 40, 120, 10, 11, 44, 90, 40, 9, 10];
/*
const oneHundredTwenty = array2.find( (element) => { 
    return element === 120 
  } 
);
*/
const oneHundredTwenty = array2.find( (element) => element === 120 );
const oneHundredTwentyIndex = array2.findIndex( (element) => element === 120 );
console.log('oneHundredTwenty: ', oneHundredTwenty, oneHundredTwentyIndex);
// callback: pasarle una funcion como parametro a otra

const tenArray = array2.filter( (element) => element === 10 );
console.log('tenArray: ', tenArray);