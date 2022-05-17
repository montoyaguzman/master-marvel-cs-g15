// funcion constructora
function createAuto(name, price, noLlantas, dimensiones, millas, arranca) {
    const auto = {
      name: name,
      price: price,
      noLlantas: noLlantas,
      dimensiones: dimensiones,
      millas: millas,
      arranca: function(aceleracion) {
       console.log('estoy arrancando...', aceleracion);
      }
    }
    return auto;
  }
  
  const tsuru = createAuto('tsuru', 200, 4, '20x120x80', 100, null);
  const mazda = createAuto('mazda', 400, 4, '30x130x90', 50, null);
  
  console.log(tsuru);
  console.log(mazda);