const superhero = { id: 1, name: 'peter', app: 'parker', alias: 'spiderman' };

/** Object => Objeto o entidad (excepcion: si el objeto esta con mayusculas 
es porque es un metodo estatico)
 */
// entries => metodo o funciones

/** Nos devuelve un arreglo de arreglos de [key, value] de las propiedades de un objeto */ 
console.log(Object.entries(superhero));
console.log(Object.keys(superhero));
console.log(Object.values(superhero));

const superhero2 = Object.create(superhero);
superhero2.name = 'pedro';

console.log(superhero.name, superhero2.name);
