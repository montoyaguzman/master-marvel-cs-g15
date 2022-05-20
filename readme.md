# Computer Science

### Introducción a la lógica

#### **Definición de Lógica**

Razonamiento en el que las ideas se manifiestan o  desarrollan de forma coherente y sin que haya contradicciones entre ellas.

#### **Fases del análisis de un problema**

1. Análisis (entradas, proceso, salidas).
2. Diseño de un algoritmo.
3. Transformación del algoritmo en código.
4. Ejecución y validación.
5. Pruebas de aceptación.

**Requerimientos funcionales**
Son aquellos requerimientos que tienen que ver con la solucion del usuario.

**Requerimientos no funcionales**
Son caracteristicas que un sistema necesita para funcionar adecuadamente pero que no aportan valor operativo al usuario.

#### Algoritmo

Un algoritmo es un conjunto de acciones que especifican la secuencia de operaciones realizar, en orden, para resolver un problema.

#### Partes de un algoritmo

* Entrada.
* Proceso.
* Salida.

#### Características de un algoritmo

* Exacto.
* Definido.
* Completo.
* Finito.
* Instrucciones entendibles.
* General

#### Representaciones de un algoritmo

* Lenguaje natural.
* Diagrama de flujo.
* Pseudocódigo.
* Código.
* Pruebas de escritorio.

#### Diagrama de flujo

Rrepresentación gráfica de un algorito utlizada para diseñar algoritmos, documentar funcionalidades (flujos) y comunicar procesos complejos en una representación clara y sencilla.

##### Símbologia

* Inicio.
* Entrada / Lectura.
* Proceso.
* Descisión.
* Documento / Impresión.
* FIn.
* Conectores.
* Flechas.

#### Pseudocódigo

Forma de expresar los pasos de un programa combinando paralabras entendibles para los humanos pero que son "comunes" en programación.

##### Convenciones de pseudocódigo

* "INICIO".
* “Leer”.
* “Si… entonces…”
* “Si no … entonces…”
* “Mientras…”
* “Si y sólo si --- entonces”
* “Imprimir”
* “FIN”

#### Plataformas para diseñar diagramas

* [Lucidchart](https://lucid.app/)
* [Draw.io](https://app.diagrams.net/)

#### Plataformas para prácticas lógica

* [Hacker rank.](https://www.hackerrank.com/)
* [Codewars.](https://www.codewars.com/)
* [CodePen.](https://codepen.io/)

### ECMAScript

Es el estándar que la empresa del mismo nombre definió para JavaScript en el año 2015 (ES6) y encarga de regir como debe ser interpretado y cómo debe funcionar el lenguaje JavaScript.

#### Lista de funcionalidades

* Let y const.
* Arrow functionts (short and long form).
* For in/ for of.
* Map.
* Classes
* Promises
* Default parameters.
* Spread / Rest operator.
* Object entries, keys y values.
* JS Modules.
* Literal templates.
* Map y Set (Estructura de datos).
* Exponentiation.
* Async
* Finally (Promises).
* RegExp.
* Métodos de arreglos (push, slice, splice, indexOf, includes, find, findIndex, map, filter, reduce, reverse, forEach).

#### Sintáxis de las funciones flecha

```
// Funcion flecha ordinaria (con muchos parametros y cuerpo)
(param1, param2, paramN) => { //cuerpo de la funcion }

// Funcion flecha con 1 solo param (no requiere parentesis en los parametros)
param1 => { //cuerpo de la funcion }

// Funcion flecha con una sola linea como retorno (no tiene cuerpo {})
(param1, param2, paramN) => // result

// Funcion flecha con 1 solo param y una sola linea como retorno (no tiene ni parantesis ni cuerpo)
param1 => //result
```


#### Bonus JS

* Tablas de verdad y tipos de operadores.
* Valor por defecto de una variable.
* Cortocircuito ?.
* Paso por referencia y valor.
* Diferencia entre map y forEach.
* Tipos de funciones en JS.

### POO

Es un paradigma de programación centrado en:

* Plantillas base (clases). => **Auto**
* Objetos, son elementos concretos de una clase.=> **mazda, tsuru**
* Atributos/Propiedades: Son las caracteristicas de los objetos. => **color, dimensiones, modelo**
* Métodos/Funciones: Son las acciones puede realizar un objeto. => arranca(), frena().

#### Formas de crear objetos en JS

##### Literal objects.

```
const pikachu = {
  name: 'pikachu',
  height: 90
  camina: function() {
    console.log('C-A-M-I-N-A-R');
  }
}
```

##### new Object.

```
const pikachu = new Object();
pikachu.name: 'pikachu',
pikachu.height: 90
```

##### Funcion constructora

```
function createPokemon(name, height) {  
  const auto = {  
    name: name,  
    height: height,  
  }
  return auto;  
}  
const pikachu = createPokemon('pikachu', 90);
```

##### Funcion constructora con new y this.

```
function createPokemon(name, height) {
    this.name: name,
    this.height: height,
}
const pikachu = new createPokemon('pikachu', 90);
```

##### Prototype (herencia).

```
function Pokemon(name, height) {
  const auto = {
    name: name,
    height: height,
  }
  return auto;
}
const pikachu = createPokemon('pikachu', 90);function Pokemon(name, height) {
    this.name = name;
    this.height = height;
}

const pikachu = new Pokemon('pikachu', 90);
console.log(pikachu.height);

Pokemon.prototype.camina = function() {
      console.log('C-A-M-I-N-A-R')
};
pikachu.camina();
```

##### Sugar Syntaxis.

```
class Poke {
    constructor(name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }
  
    attack(bonus) { 
        console.log(`${this.power}`, bonus);
    }

    alive(points) { 
        if (points > 1) {
            return true;
        }
        return false;
    }
}

class FlightPoke extends Poke {
    constructor(name, type, power, alas) {
        super(name, type, power);
        this.alas = alas;
    }
    flight() {
        console.log('yo vuelo');
    }
}

class WaterPoke extends Poke {
    constructor(name, type, power, aletas) {
        super(name, type, power);
        this.aletas = aletas;
    }
    swim() {
        console.log('yo nado');
    }
}

const squirtle = new WaterPoke('Squirtle', 'Water', 'pulse water', 'tengo 4 aletas');
const pidgey = new FlightPoke('Pidgey', 'Flight', 'aerial ace', 'tengo 2 alas');

console.log(squirtle)
squirtle.attack(99);
squirtle.swim();
pidgey.attack(10);
pidgey.flight();
// squirtle.flight();
// La linea anterior produce un error porque squirtle no tiene ese metodo
```

**Nota:** Recuerde la exitencia de Object.create y { ...props } para generar nuevos objetos a partir de otros sin mantener la referencia.

### Información adicional

#### **GIT con SSH ([más info aquí](https://git-scm.com/book/es/v2/Git-en-el-Servidor-Generando-tu-clave-p%C3%BAblica-SSH))**

1. Generar una llave ssh
   ssh-keygen
2. Obtener y copiar la llave que genere
   cat ~/.ssh/id_rsa.pub
3. Agregar la llave copiada en github

#### **Hacer un commit**

```
git add .
git commit -m "tipoCommit: mi mensaje"git push origin develop
```

#### **Subir y bajar cambios**

git push/pull aliasOrigen ramaNombre

```
# Ejemplo
git push origin main
git pull origin develop

```

#### **Markdown**

Es un [lenguaje de marcado ligero](https://es.wikipedia.org/wiki/Lenguajes_de_marcas_ligeros "Lenguajes de marcas ligeros") creado por [John Gruber](https://en.wikipedia.org/wiki/John_Gruber "en:John Gruber") y [Aaron Swartz](https://es.wikipedia.org/wiki/Aaron_Swartz "Aaron Swartz") que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, se inspira en convenciones existentes para marcar mensajes de correo electrónico usando texto plano.

#### **Áreas de estudio**

**Ingenieria de software** => Diagramas UML, Metodologías ágiles, estándares de software.

**Introducción a la lógica de programación** => Lenguaje natural, diagramas de flujo, pseudocodigo, pruebas de escritorio, etc.

**Matemáticas discretas y algebra boleana** => Condiciones y tablas de verdad.



#### **Redes sociales para estudiar**

##### Plataformas de aprendizaje

* [SoloLearn.](https://www.sololearn.com/)
* [TutorialesYa.](https://www.tutorialesprogramacionya.com/)
* [W3Schools.](https://www.w3schools.com/)
* [Mozilla Developer Network.](https://developer.mozilla.org/es/)

##### Youtube

* [Carlos Azaustre.](https://www.youtube.com/c/CarlosAzaustre)
* [Fazt.](https://www.youtube.com/c/FaztTech)
* [Absolute.](https://www.youtube.com/c/AbsoluteSite)
* [MidudeDev](https://www.youtube.com/c/midudev).
* [CodelyTV.](https://www.youtube.com/c/CodelyTv)

##### Redes sociales

* [Carlos Azaustre.](https://www.instagram.com/carlosazaustre/?hl=es)
* [EdTeam.](https://www.instagram.com/edteamlat/?hl=es)
* [Richwebdeveloper.](https://www.instagram.com/richwebdeveloper/?hl=es)
* [Vertechie](https://www.instagram.com/veritechie/?hl=es).
* [AnnCode](https://www.instagram.com/anncode/?hl=es).
* [Manz.](https://twitter.com/Manz)
