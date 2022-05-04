// El spread operator se puede para recibir un conjunto de parametros, con ello lo
// convierte a un array y en este se le llama rest operator
const operar = (operador, ...patitos) => {
    let result = 0;
    if (operador === "+") {
      // sentences suma
      /*for (let i=0; i<patitos.length; i++) {
        result = result + patitos[i];
      }*/
      result = patitos.reduce((previousValue, currentValue) => previousValue + currentValue);
    } else if (operador === "-") {
      // sentences resta
      result = patitos.reduce((previousValue, currentValue) => previousValue - currentValue);
    }
    console.log("resultado: " + result)
  }
 
operar('+', 50, 50, 50, 10);
operar('-', 50, 50, 50, 10);