// compartir metodos
const autoMethods = {
  arranca: function(aceleracion) {
    console.log('arranca...', aceleracion)
  },
  frena: function() {
    console.log('arranca...')
  }
}

// funcion constructora
function createAuto(name, price, noLlantas, dimensiones, millas) {
   this.name = name,
   this.price = price,
   this.noLlantas = noLlantas,
   this.dimensiones = dimensiones,
   this.millas = millas,
   this.arranca = autoMethods.arranca,
   this.frena = autoMethods.frena
}

const tsuru = new createAuto('tsuru', 200, 4, '20x120x80', 100);
const mazda = new createAuto('mazda', 400, 4, '30x130x90', 50);

mazda.darAire = function() {
  console.log('aire');
}

tsuru.reproduceCd = function() {
  console.log('reproduce cd');
}

console.log(tsuru.arranca(10));
console.log(mazda.arranca(100));
console.log(mazda.darAire());
console.log(tsuru.reproduceCd());