let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

/*
Desafíos
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */

/*
# Resolución del desafío 4

Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.

**Sugestión de respuestas**

1. Crea una lista vacía con el nombre listaGenerica.
```javascript
let listaGenerica = [];
```
2. Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
```javascript
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
```
3. Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
```javascript
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
```
4. Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion por separado.
```javascript
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();
```
5. Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
```javascript
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();
```
6. Crea una función que calcule la media de los elementos en una lista de números.
```javascript
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);
```
7. Crea una función que muestre en la consola el número mayor y menor en una lista.
```javascript
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);
```
8. Crea una función que retorne la suma de todos los elementos en una lista.
```javascript
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);
```
9. Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.

   ```javascript
   function encontrarIndiceElemento(lista, elemento) {
     for (let i = 0; i < lista.length; i++) {
       if (lista[i] === elemento) {
         return i; // Retorna el índice del elemento encontrado
       }
     }
     return -1; // Retorna -1 si el elemento no se encuentra en la lista
   }
   ```



10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

    ```javascript
    function sumarListas(lista1, lista2) {
        return lista1.map((num, index) => num + lista2[index]);
    }

    const lista1 = [1, 2, 3];
    const lista2 = [4, 5, 6];
    const resultado = sumarListas(lista1, lista2);
    console.log(resultado);

    ```



11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

```javascript
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(resultado);

```
 */