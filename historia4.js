class operacionesMatematicas{
    constructor(num1,num2, raiz){
        this.num1 = num1;
        this.num2 = num2;
        this.raiz = raiz;
    }

    sumar(){
        let resultado = parseFloat(this.num1) + parseInt(this.num2) ;
        document.write(`Su suma ah sido resalizada con un valor de : ${resultado}`)
    }

     restar(){
        let resultado = parseFloat(this.num1) - parseInt(this.num2) ;
        document.write(`Su resta ah sido resalizada con un valor de : ${resultado}`)
    }

    multiplicar(){
        let resultado = parseFloat(this.num1) * parseInt(this.num2) ;
        document.write(`Su multiplicacion ah sido resalizada con un valor de : ${resultado}`)
    }

    dividir(){
        let resultado = parseFloat(this.num1) / parseInt(this.num2) ;
        document.write(`Su divison ah sido resalizada con un valor de : ${resultado}`)
    }

    potencia(){
        let resultado = this.num1**this.num2;
        document.write(`Su potencia ah sido resalizada con un valor de : ${resultado}`)
    }

    raizCuadrada(){
        let resultado = Math.sqrt(this.raiz)
        document.write(`Su raiz ah sido resalizada con un valor de : ${resultado}`)
    }

    raizCubica(){
        let resultado = Math.cbrt(this.raiz)
        document.write(`Su raiz ah sido resalizada con un valor de : ${resultado}`)
    }

}

let operacion = prompt(`Que operacion desea realizar: 
1: suma , 2: resta , 3: multiplicacion , 4: division , 5: Potencia , 6: Raiz cuadrada , 7: Raiz cubica`);

if(operacion >= 1 && operacion<=5){

    let var1= prompt(`Dijite la primera variable`);
    let var2= prompt(`Dijite la segunda variable`);


    const calculadora = new operacionesMatematicas(var1,var2,0);


    if(operacion==1){
        calculadora.sumar()
    }else if(operacion==2){
        calculadora.restar()
    }else if(operacion==3){
        calculadora.multiplicar()
    }else if(operacion==4){
        calculadora.dividir()
    }else if(operacion == 5){
        calculadora.potencia();
    }

}else if(operacion>=6 && operacion<=7){

    let raiz= prompt(`Dijite el numero a sacarle la raiz`);


    const calculadora = new operacionesMatematicas(0,0,raiz);


    if(operacion==6){
        calculadora.raizCuadrada()
    }else if(operacion==7){
        calculadora.raizCubica()
    }

}else {
    alert(`No has ingresado un valor correcto`)
}
