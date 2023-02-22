// Array
let frutas = ["Banano" , "Manzana" , "Pera" , 4 , "anon"];

document.write(frutas[3]  );

// Array Asociativo
let pc1 ={
    nombre: "DiegoPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc1["nombre"];
let procesador = pc1 ["procesador"];
let ram = pc1 ["ram"];
let espacio = pc1 ["espacio"];

let frase = `El nombre de la pc es: <b> ${nombre}</b> <br>
            El procesador de la pc es: <b> ${procesador}</b> <br>
            La RAM de la pc es: <b> ${ram}</b> <br>
            El espacio de la pc es: <b> ${espacio}</b> <br>`;

document.write(frase)

// Bucles e interaciones

// WHILE 

document.write( "<br> WHILE <br>")

let numeroParaSumar=0;

while (numeroParaSumar<10) {
    numeroParaSumar++;

    document.write(" "+numeroParaSumar + "<br>");
 
}

document.write( "<br>  DO  WHILE <br>")

// DO WHILE
let numeroParaSumar1 = 0

do {
    numeroParaSumar1++;

    document.write(numeroParaSumar1);
} while (numeroParaSumar1<10);
  

document.write( "<br> WHILE CON BREAK <br>")

// WHILE CON UN BREAK

let numeroParaSumar2=0;

while (numeroParaSumar2<10) {
    numeroParaSumar2++;

    document.write(" "+numeroParaSumar2 + "<br>");

    if (numeroParaSumar2==8) {
        break
    }
 
}

// FOR 

document.write("<br> FOR <br>")


for (let numeroParaSumar3 = 0; numeroParaSumar3 < 10 ; numeroParaSumar3++) {

    document.write(numeroParaSumar3)
    
}

document.write("<br> FOR CON CONTINUE<br>")


for (let numeroParaSumar4 = 0; numeroParaSumar4 < 10 ; numeroParaSumar4++) {
    if (numeroParaSumar4 ==6) {
        continue
    }

    document.write(numeroParaSumar4)
    
}

document.write("<br> FOR IN<br>")

let animales = ["Gato" , "Perro" , "Vaca" , "Caballo"]

// El for in nos devuelve las posiciones de la Array
for (animal in animales) {
     document.write(animal) 
}

document.write("<br> FOR OF<br>")

// El for of nos muestra el valor que tenemos en dicha posicion 
for (animal of animales) {
    document.write(animal)  
}

document.write("<br> LABEL<br>")

let array1 = ["Alexandra" , "Diego"]
let array2 = ["Alejandro" , "Navarro" , array1]

for (array in array2) {
    if (array==2) {
        for (array in array1) {
            // Para saltar el nombre alexandra
            // if (array==0) {
            //     continue
            // }
            document.write(array1[array])
        }
    }else{
        document.write(array2[array])
    }
}
 
// Funciones

function saludar() {
    let respuesta = prompt("Hola Diego como te ah ido");

    if(respuesta == "bien"){
        alert("Me alegro")
    }else{
        alert("que mal")
    }
}

saludar();
saludar();

// Funcion return

function sumar() {
    let numero1 = 2;
    let numero2 = 3;

    let sumar=numero1+numero2;

    return sumar
    
}

document.write("<br> RETURNT <br>")

let suma = sumar();
document.write(suma);

// Funciones con parametros 



function resta(num3, num4) {
    let res = num3-num4;
    document.write(""+res+"<br>")
}

resta(10 , 6);

let num1=prompt("Dijite numero a");
let num2=prompt("Dijite numero b");

function multiplicar(num1, num2) {
    let mul= num1 * num2;
    return mul
}

let multi = multiplicar(num1,num2);

alert(multi);

// FUNCIONES FLECHAS

const salud= (nombre)=>{
    document.write(`Hola ${nombre} ¿como has estado?`)
}

salud("pedro")










