// Array
let frutas = ["Banano" , "Manzana" , "Pera" , 4 , "anon"];

document.write(frutas[3] );

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


