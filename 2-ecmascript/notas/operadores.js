const operar = (operador, ...patitos) => {
    let result = 0;
    if (operador === "+") {
      for (let i=0; i<patitos.length; i++) {
        // result = result + patitos[i];
        result += patitos[i];
      }
    } else if (operador === "-") {
      console.log(result, patitos)
      for (let i=0; i<patitos.length; i++) {
        // result = result - patitos[i];
        result -= patitos[i];
      }
    }
    console.log("resultado: " + result)
}
 
operar('+', 50, 50, 50, 10);
operar('-', 50, 50, 50, 10);