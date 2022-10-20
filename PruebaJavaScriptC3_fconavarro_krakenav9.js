/* EVALUACIÓN JAVASCRIPT
Caso Práctico
José es el dueño de un minimarket de barrio, lleva más de 15 años administrando el
funcionamiento completo de su negocio, siempre lo ha hecho de manera análoga, lo cual en un
inicio no presentaba problemas, pero con el pasar de los años esto ha generado errores
humanos, pérdidas de registros, documentos estropeados por la antigüedad y una nula
posibilidad de poder estudiar el real crecimiento de su negocio año tras año.
José te contrata para generar un software para su negocio.
En esta segunda instancia tu tarea será generar funciones utilizando JavaScript
Funciones solicitadas:
obs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]
*/

console.log('---------------------------');
console.log('Ejercicio 1');
console.log('---------------------------');
//EJERCICIO 1
/*● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento. */

// const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

/*
const carritoCompras = [1000, 4000, 6000, 200, 700]

function comprar(diaString,carritoCompras) {
    var carritoCompras = precios, suma = 0; //esta parte no me funciona F
    precios.forEach (function(total){
        suma + = total
    });
    console.log(suma)
    if (diaString == Martes){
        console.log('Hoy es', diaString, ', por lo que tienes descuento. Total de Compra es ', suma)
    }
    if (diaString == Jueves){
        console.log('Hoy es', diaString, ', por lo que tienes descuento. Total de Compra es ', suma)
    }
    else{
        console.log('Total de tu compra es ', suma)
    }
}

function comprar(Martes,carritoCompras)
/*

//EJERCICIO 2
/*● Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento. */

//EJERCICIO 3
/*● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba. */

console.log('---------------------------');
console.log('Ejercicio 4');
console.log('---------------------------');
//EJERCICIO 4
/*● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso. */

var listaPrecios = [200, 5500, 900, 7000, 500, 300]

//CREAMOS UNA FUNCIÓN CON BUCLE QUE DETECTE PRECIO MAYOR
function precioMayor(array) { //funcion que toma como argumento un array X
    let precioMayor = array[0]; //variable que establece el primer numero del array como el numero mas grande
    for (var i = 0; i < array.length; i++) { //bucle for para recorrer cada elemento del array
        if (precioMayor < array[i]) { // compara el valor 200 con el primer índice, 200, ¿es menor? no, se repite el bucle. 200 es menor que 5500, sí, entonces se establece lo de abajo
            precioMayor = array[i]; // si el condicional if se cumple, se establece nuevo valor numeroMayor. 200 es menor que 5500, así que 5500 es nuevo número mayor, y se repite el bucle hasta el largo del array (i < array.length)
        }
    }
    console.log('El producto más costoso cuesta: ' + precioMayor); // muestra el precio mas grande
    return precioMayor; //aquí entiendo que el return guarda el valor en una variable precioMayor
}
precioMayor(listaPrecios);


//CREAMOS FUNCIÓN CON BUCLE QUE DETECTE PRECIO MENOR
//El mismo bucle pero cambiamos el signo de menor que, a mayor que.
function precioMenor(array) { 
    let precioMenor = array[0]; 
    for (var i = 0; i < array.length; i++) { 
        if (precioMenor > array[i]) {  //aquí damos vuelta el comparador
            precioMenor = array[i]; 
        }
    }
    console.log('El producto menos costoso cuesta: ' + precioMenor); 
    return precioMenor; 
}
precioMenor(listaPrecios);
console.log('---------------------------');