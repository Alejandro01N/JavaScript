//METODOS DE CADENA

// Para concatenar dos cadena de texto
let cadena = "Cadena de prueba prueba prueba";
let cadena2 = " prueba";

resultado = cadena.concat(cadena2);

// Si la cenada 1 empieza con el mismo caracter que la cadena 2 devuelve true sino false

resultado = cadena.startsWith(cadena2);

//si los ultimos caracteres concuerda cpn el inicio de la 2 cadena da true sino da flase

resultado = cadena.endsWith(cadena2);

// Busca cadena dentro de otra cadena, no importa si es al inicio o al final, si encuentra da true sino da false 

resultado = cadena.includes(cadena2);

// Lo mismo que el anterior pero nos devuelve un numero que es la posicion donde esta la primera letra

resultado = cadena.indexOf("prueba");

//Lo mismo que la anterior pero nos devuelve la ultima posicion que se encuentra la cadena

resultado = cadena.lastIndexOf("prueba");

//Rellena la caneda al principio con los valores deseados

resultado = cadena.padStart(100 , "1");

//Lo mismo que el anterior pero lo rellena al final 

resultado = cadena.padEnd(1000 , "1");

//Nos repite la oracion x cantidad de veces

resultado = cadena.repeat(3);

// nos permite dividir la cadena dependiendo lo que pongamos

resultado = cadena.split(" ");

// nos permite selecionar desde que posicion hasta que posicion nos aparezca el string

resultado = cadena.substring(2,5);

// convierte una cadena a miniscula

resultado = cadena.toLowerCase();

//convierte a mayuscula

resultado = cadena.toUpperCase();

// elimina los espacios 

document.write(resultado + "<br>");

// METODOS DE ARRAY

let nombre = ["Diego" , "Alejandro" , "Navarro" , "Quintero"]
let numero = [1,2,5,7,3,4,8]

// let nombre = [3 , 4 , 5];

document.write(nombre + "<br>")

// Elimina el ultimo elemento del array 
resultado = nombre.pop();

// Elimina el primer elemento del array 

resultado = nombre.shift();

// Se usa para agregar elementos al array

resultado = nombre.push("Stiveen")

// Se invierte los valores del array

resultado = nombre.reverse();

// Para agregar elemento al principio del array

resultado = nombre.unshift("Pedro");

// Me ordena de menor a mayor o de A a la Z

resultado = numero.sort();

// Elimina los elemntos que seleccionamos, le damos una posicion de inicio y una de final, podemos darle una funcionalidad de remplazar algo en el espacion en que borramos

resultado = nombre.splice(0,3,"Hola");

// Acesores: estos a diferencia de los anteriores no modifican la cadena 

// Nos combierte el array en una cadena de texto y podemos agregarle cosas  

resultado = nombre.join("-");

// Nos muestra los elemntos que le indiquemos

resultado = nombre.slice(0,1);

document.write(resultado + "<br>")

// REPETICIONES

let numero1 = ["Diego","Navarro","Alejandro","Quintero"];

// Como vemos creamos como tipo for donde recorre la cadena forEach

numero1.filter(orden => document.write(orden + "<br>"))

// MATH

// MUESTRA LA RAIZ CUADRADA DE UN NUMERO

let cuadrado = Math.sqrt(25)

document.write(cuadrado + "<br>");

// Raiz cubica de un numero

let cubico = Math.cbrt(8);

document.write(cubico + "<br>");

// Nos devuelve el numero mas grande

let max = Math.max(4,5,3,1,5,3,2,45,44)

document.write(max + "<br>");

// Nos devuelve el numero mas pequeño

let min = Math.min(4,5,3,1,5,3,2,45,44)

document.write(min + "<br>");

// Nos dan un numero aleatorio del 0 al 1

let aleatorio = Math.random();

document.write(aleatorio + "<br>");

// Nos redondea un numero

let papa = 2.63323241

let redondear = Math.round(papa)

document.write(redondear + "<br>")

// Nos devuelve el numero redondeado pero hacia abajo

let mama = 4.99999999;

let abajo = Math.floor(mama)

document.write(abajo + "<br>")

// Nos quita los decimales y nos deja la parte entera

let entero = Math.trunc(5.7);

document.write(entero);

