/*Desafíos
Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

/*
Desafíos:
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */


function calcularPromedio(nota1, nota2, nota3, nota4){
    let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
    return promedio;
}

function verificarAprobacion(promedio){
    return promedio >= 5 ? "Aprobado" : "Reprobado";
}

/*Desafíos:
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
 */


