const array = [100, 90, 110, 101, 12, 70];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 110) {
    break;
  }
  console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {
  if (array[i] === 110) {
    continue;
  }
  console.log(array[i]);
}

/**
 * Complemento de break y continue en map (NO SE PUEDE USAR)
 */

console.log("Ciclo con break");
for (let i = 0; i < array.length; i++) {
  if (array[i] === 110) {
    break;
  }
  console.log(array[i]);
}

console.log("Ciclo con continue");
for (let i = 0; i < array.length; i++) {
  if (array[i] === 110) {
    continue;
  }
  console.log(array[i]);
}

console.log('==== con map ====');
const cicloMap = array.forEach((element, index) => {
  array.push(99);
  // array[0] = 100
  // array[1] = 90
  if (element === 110) {
    // break // continue; // no se puede utilizar
  }
});
console.log('fin map: ' + cicloMap);
console.log('array: ' + array);
