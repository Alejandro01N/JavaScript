// Seleccionamos un ID del HTML

let parrafo = document.getElementById("parrafo");

document.write("<br>" + parrafo + "<br>");

// Aca seleccionamos todos los elementos que elijamos y luego al imprimirlos lo podemos seleccionar con un indice
// como si fuera un array NOTA: NO SE RECOMIENDA

let h1 = document.getElementsByTagName("h1")

document.write(h1[1] + "<br>");

// Con este seleccionamos como en CSS ya sea una clase o un ID(Para el ID se recomienda el getElementsById)

let div = document.querySelector("#prueba2")

document.write(div + "<br>")

// Con este seleccionamos todos los elementos que tenga la misma clase y nombre, y se escoge por medio de un indice
// como un array

let div1 = document.querySelectorAll(".pruebaFinal")

document.write(div1[3] + "<br>");

// Modificar, obtener , Eliminar los atributos

// Aca vamos a modificar el valor de un atributo, primero lo selecionamos, luego lo modificamos, el primer 
// parametro es lo que queremos modificar, el segundo parametro a lo que queremos modificar

const mod = document.querySelector(".mod")
// El primer paramtro seleciono el atributo y en el segundo parametro modifico lo que quiero del atributo
mod.setAttribute("type" , "number")

// Aca vamos a obtener el valor del atributo, primero selecionamos, luego obtenemos

const obt = mod.getAttribute("type");

document.write(obt + "<br>")

// Aca vamos a eliminar un atributo , primero lo seleccionamos y luego lo eliminamos

const eli = mod.removeAttribute("type"); 

//  Atributos de los input

// ClasName: Nos muestra el nombre de la clase que le hemos puesto

const input = document.querySelector(".input-normal")

document.write(input.className + "<br>")

// Value: Nos muestra el valor que tiene el input 

document.write(input.value + "<br>")  

// Propiedades de style, podemos modificar alguna propiedad del css

const titulo = document.querySelector(".titulo");

titulo.style.color = "red";

// CLASSLIST

// Podemos agregar una clase, al selector que hemos seleccionado

input.classList.add("nueva");

// Podemos eliminar una clase, al selector que hemos seleccionado

input.classList.remove("nueva");

// Podemos elejir algunos de los valores que tiene es clase, con el indice, i nos guarda el valor que tiene

let valor = input.classList.item(0)

document.write(valor)

// Podemos verificar si una clase existe o no, este nos devuelve 2 valores, true y false

let verificar = input.classList.contains("input-normal");

document.write(verificar);

// Podemos agregar la clase que pongamos si no existe, si existe la elimina INVESTIGAR

let ver = input.classList.toggle("grande");

document.write(ver)

// Podemos remplazar una clase por otra

input.classList.replace("grande" , "chico");

input.classList.remove("chico")

// OBTENCION

const obtencion = document.querySelector(".obtencion")

// Nos permite obtener el parrafo, pero sin html, osea solo lo que se encuentra en dicho bloque

let obtener = obtencion.textContent;

alert( obtener); 

// Este nos muestra todo el contenido HTML, y tambien nos sirve para agregar parrafo

let obte = obtencion.innerHTML;

alert(obte)

// Nos devuelde todo el contenido hasta con su etiqueta padre 

let obten = obtencion.outerHTML;

alert(obten);

// Creación de elementos

const ele = document.querySelector(".contenedor")

// Creamos un elemento 

 const padre = document.createElement("LI") ;

//  Creamos un texto 
 
 const hijo = document.createTextNode("Hola, soy hijo del node li")

//  Con esta funcion podemos poner el texto dentro del elemento en el que ambos creamos,
//  ya que el texto es hijo del elemnto que seria el padre

 padre.appendChild(hijo)

//  Aca podemos agregar contenido al HTML como lo acabamos de ver

 ele.appendChild(padre)

 console.log(padre);

//  document.write(ele)

// Lo mismo de arriba pero sin consumir tanto recursos

const fragmento = document.createDocumentFragment();

for (let index = 0; index < 20; index++) {
    const fhater = document.createElement("Li")
    const chlids = document.createTextNode("Somos hujos del li")
    fhater.appendChild(chlids)
    fragmento.appendChild(fhater)    
}

// Nos muestra en pantalla
ele.appendChild(fragmento)

// Nos muestra en consola
console.log(fragmento)

const s = document.querySelector(".childes")
const brother = document.querySelector(".brother")

// Para estos selectores de hijos no se puede tener espacion intermedios ni con etiquetas

// Nos devuelve el primer hijo
 const primerHijo= s.firstChild;

 console.log(primerHijo);

//  Nos devuelve el ultimo hijo
 const ultimoHijo= s.lastChild;

 console.log(ultimoHijo);

 //  Nos devuelve todos los hijos
 const child = s.childNodes;

 console.log(child)

//  Nos devuelve el siguiente hermano
 console.log(brother.nextSibling) 

// Nos devuelve el hermano anterior
console.log(brother.previousSibling);

// Para estos selectores de hijo no importa si tienen espacios o no, ya que selecionan son las etiquetas

 const ss = document.querySelector(".childes")

 // Nos devuelve el primer hijo
 const firtsChildes = ss.firstElementChild;

 console.log(firtsChildes);

 
//  Nos devuelve el ultimo hijo
 const endChildes = ss.lastElementChild;

 console.log(endChildes)

//  Nos devuelve todos los hijos
const Childes = ss.children;

 console.log(Childes)


const contaider = document.querySelector(".propiedadesChilde")

//  Aca podemos ver como remplazamos lo que hay dentro de una etiqueta que sea hija
 const h2 = document.createElement("H2")
 h2.innerHTML="titulo";
 const h2Antiguo= document.querySelector(".h2")
 contaider.replaceChild(h2 , h2Antiguo)

//  Aca podemos ver como eliminamos lo que hay dentro de una etiqueta que sea hija 
 const p = document.querySelector(".p")
 contaider.removeChild(p)

//  Nos devuelve el hijo
 let rta = contaider.hasChildNodes();

 if(rta){
    document.write("<br> Este elemento tiene hijos")
 }else{
    document.write("<br> Este elemento no tiene hijo")
 }

//  Nos devuelve el padre
 console.log(h2.parentElement)

//  Nos devuelve el siguiente hermano
console.log(h2.nextElementSibling);

// Nos devuelve el hermano anterior
console.log(h2.previousElementSibling);

 
















