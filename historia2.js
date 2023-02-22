 
// let free = false;

// const validarCliente = (time) =>{
//     let edad = prompt("Cual es tu edad")
//     if (edad>=18) {
//         if (time >=2 && time <=7 && free==false) {
//             alert(`Son las ${time} y eres la primera persona que pasas despeus de las 2`)
//             free = true;
//         }else{
//             alert(`Son las ${time} Tienes que pagar`)
//         }
//     }else{
//         alert("No puedes pasar, eres menor de edad")
//     }
// }

// validarCliente(20);
// validarCliente(21);
// validarCliente(22);
// validarCliente(23.5);
// validarCliente(0.5);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.1);




  // let cantidad = prompt("Escriba la cantidad de alumnos")
  // let alumnos = [];

  // for (let i = 0; i < cantidad; i++) {
  //   alumnos[i]= [ prompt("Escriba el nombre del alumno" +(i+1)),0]
  // }

  // const validarAsistencia = (nombre,a)=>{
  //   let presencia = prompt(nombre)
  //   if (presencia == "p" || presencia == "P") {
  //       alumnos[a][1]++;
  //   }
  // }

  // for(i=0; i<10; i++){
  //   for(alumno in alumnos){
  //       validarAsistencia(alumnos[alumno][0],alumno)
  //   }
  // }

  // for(alumno in alumnos){
  //   let resultado = `${alumnos[alumno][0]} : <br>
  //   ____________________ presentes: ${alumnos[alumno][1]} : <br>
  //   ____________________ Ausente: ${30 - alumnos[alumno][1] }<br>`;

  //   if(30- alumnos[alumno][1]>18){
  //       resultado+= "reprobado"
  //   }else{
  //       resultado = "<br><br>"
  //   }
  //   document.write(resultado)
  // }



  // document.write(alumno)



  const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2) ;
  }

  const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
  }

  const multiplicar= (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
  }

  const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
  }

  alert("Que operacion desea realizar");

 let operacion = prompt(`1: suma , 2: resta , 3: multiplicacion , 4: division`) 

 if (operacion==1) {
    let numero1 = prompt(`Dijite el numero 1`);
    let numero2 = prompt(`Dijite el numero 2`);
    let resultado = sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
 }else if (operacion==2) {
  let num1 = prompt(`Dijite el numero 1`)
  let num2 = prompt(`Dijite el numero 2`)
  let resultado = restar(num1,num2);
  alert(`Tu resultado es ${resultado}`)
}else if (operacion==3) {
  let num1 = prompt(`Dijite el numero 1`)
  let num2 = prompt(`Dijite el numero 2`)
  let resultado = multiplicar(num1,num2);
  alert(`Tu resultado es ${resultado}`)
}else if (operacion==4) {
  let num1 = prompt(`Dijite el numero 1`)
  let num2 = prompt(`Dijite el numero 2`)
  let resultado = dividir(num1,num2);
  alert(`Tu resultado es ${resultado}`)
}else{
  alert(`No se ah encontrado resultado`)
}
