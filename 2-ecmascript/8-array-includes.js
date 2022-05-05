const array = ['apple', 'banana', 'orange', 'tangerine'];

/*
let i = 0;
while (i < array.length) {
  if (array[i] === 'orange') {
    console.log('hay naranjas para comer');
  }
  i++;
}
*/

/*
if (array.includes('orange')) {
    console.log('hay naranjas para comer');
} else {
  console.log('naranjas jajaja xD');
}
*/

array.includes('orange') 
  ? console.log('hay naranjas para comer') 
  : console.log('naranjas jajaja xD')