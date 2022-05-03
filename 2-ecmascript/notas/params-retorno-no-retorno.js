// function cookPizza(ingredients) {
// let pizza = "";
// // sentences for prepare it...
// pizza = "de pepperonni";
// return pizza;
// }

// function deliver(address) {
// // sentences
// console.log("Paquete entregado");
// }

// function arriveIsland() {
// // sentences
// let minutes = 0;
// while(minutes <= 10) {
//     console.log('pasando tiempo...', minutes)
//     minutes++;
// }
// // la persona llega a la isla
// }

// const pizza = cookPizza();
// console.log(pizza);
// const entrega = deliver();
// console.log('entrega: ' + entrega);
// arriveIsland();

/**
 * CON FLECHAS
 */

const cookPizza = (ingredients) => {
let pizza = "";
// sentences for prepare it...
pizza = "de pepperonni";
return pizza;
}

const deliver = (address) => {
// sentences
console.log("Paquete entregado");
}

const arriveIsland = () => {
// sentences
let minutes = 0;
while(minutes <= 10) {
    console.log('pasando tiempo...', minutes)
    minutes++;
}
// la persona llega a la isla
}

const pizza = cookPizza();
console.log(pizza);
const entrega = deliver();
console.log('entrega: ' + entrega);
arriveIsland();