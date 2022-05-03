/**
 * ANTES DE ES6
 */
console.log(text);
var text = "Hola Devf";
console.log(text);

saludar(text, "montoya");

// metodo = funcion
function saludar(mensaje, name) {
  console.log(mensaje + " " + name)
}
text = "hola";
console.log(text);
saludar(text, "montoya");

/** Hoisting
/** 
 * Hipotéticamente la variable se eleva y pasa a declararse al comienzo 
 * de su contexto, en este caso la función que la contiene.
 */

/**
 * ES6 => let y const
 */
function main() {
    let age = 18;
    if (age >= 18) {
      var name = "jose";
      let app = "guzman";
     //   const app = "guzman";
     //   app = "montoya";
      const PI = 3.1416;
      const MXN = "mxn";
      const USD = "usd"
      console.log('Soy mayor de edad');
      console.log("en el if", app);
    } else {
      console.log(':(')
    }
    // console.log(app); => error, ya que app solo existe dentro del if
    console.log(age);
    console.log(name); // al ser global es accesible desde donde sea
}

main();
// console.log(age); => error porque age solo existe dentro de la funcion main
 console.log(name); // al ser global es accesible desde donde sea