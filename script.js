// VARIABLES
let recipiente="papel";

alert(recipiente)

// Tipos de variables

// El string se puede escribir de 3 maneras "" '' ``
string = "Cadena de texto"

// Los numeros van asi sin comillas ni nada 
number = 19

// Los valores booleanos son 0 o 1
Boolean = false

// Declarar una variable 

// Var tiene un alcance global, ella funciona en el contenedor de ella y en lo que hay afuera(no se usa)
var numero = 15

// Let tiene un alcance (Regional) no tiene un alcance global, ella solo es valida en su contenedor y lo que alla adentro 
let numero1 =15

// Constante siempre tiene que tener el mismo valor
const  nombre = "Diego"

// Declaracion de varias variable

let number1, number2, number3;

number1 = 23;
number2 = 25;
number3 = 27;

alert(number1)
alert(number2)
alert(number3)


// Variable Null

let name= null;

alert(number1+number2)

// Prueba prompt

let name1 = prompt("Cual es tu nombre");

alert("Hola "+ name1);

number3+= 10;

document.writeln(number3)

number2 --;

alert(number2)

// Concatenacion 

saludo = "Hola pedro"
Pregunta = "¿Ya vienes?"
// Apenas el string detecta una cadena de texto que es la comilla, se concatena mas no se suma
frase = `${saludo } ¿Como estas? ${ Pregunta }`;

document.writeln(frase);

// Operadores logicos y de comparacion

document.write(number1!=number2 || number3>number1);

// Condicionales

if (nombre == "Digo") {
    alert("Ingresaste")
}else if (name1 == "Pepe") {
    alert(`cambaiste de nombre por ${name1}`)
}else{
    alert(`No estas registrado`)
}



