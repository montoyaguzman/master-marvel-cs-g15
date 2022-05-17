class Auto {

    constructor(name, price, noLlantas, dimensiones, millas) {
        this.name = name;
        this.price = price;
        this.noLlantas = noLlantas;
        this.dimensiones = dimensiones;
        this.millas = millas;
    }

    arranca() {
        console.log('arranca');
    }

    frena() {
        console.log('frena');
    }
  
   aumentaMillas(incremento) {
     this.millas += incremento;
   }

}

class AutoDeportivo extends Auto {
    constructor(name, price, noLlantas, dimensiones, millas, aleron) {
        super(name, price, noLlantas, dimensiones, millas);
        this.aleron = aleron;
    }
    acelerarRapido() {
        console.log('acelera muy rapido');
    }
}

class AutoTodoTerreno extends Auto {
    constructor(name, price, noLlantas, dimensiones, millas, dobleTraccion) {
        super(name, price, noLlantas, dimensiones, millas);
        this.dobleTraccion = dobleTraccion;
    }
    escalar() {
        console.log('escalando...');
    }
}

const ford = new AutoTodoTerreno('ford focus', 400, 4, '20x20', 1000, true);
const mazda = new AutoDeportivo('mazda 3', 350, 4, '10x10', 1001, 'con aleron');

console.log(ford);
console.log(mazda);

ford.arranca();
ford.escalar();
// ford.acelerarRapido();


mazda.frena();
mazda.acelerarRapido();
// mazda.escalar();

console.log(mazda.millas);
mazda.aumentaMillas(100);
console.log(mazda.millas);