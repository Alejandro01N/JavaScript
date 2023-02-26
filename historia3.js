class iphone{
    constructor(color,peso,resolucion,camara,memoria){
        this.color = color;
        this.peso = peso;
        this.resolucion= resolucion;
        this.camara= camara;
        this.memoria= memoria;
        this.encender=false;
    }

    botonEncendido(){
        if (this.encender==false) {
            alert("Has encendido el celular")
            this.encender=true;
        }else{
            if(this.encender==true){
                alert("Has apagado el celular")
                this.encender=false;
            }
        }
    }

    reiniciar(){
        if(this.encender==true){
            alert("Reiniciando celular")
        }else{
            alert("Celular apagado")
        }
    }

    tomarFoto(){
        if (this.encender==true) {
            alert(`Has tomado foto con una resolucion de : ${this.camara}`) 
        }else{
            alert(`Celular apagado`)
        }  
    }

    Grabar(){
        if (this.encender==true) {
            alert("Grabando")
        }else{
            alert("Celular apagado")
        }
    }

    imprimir(){
        document.write("<br>"+`Este celular es de color ${this.color}, y tiene un peso de ${this.peso} y tiene una resolucion de pantalla de ${this.resolucion} y su resolucion de camara es de ${this.camara} con un espacio de memoria de ${this.memoria}`)
    }

}

const celular = new iphone("Rojo", "150g" , "5`", "Full HD", "2GB");
const celular2 = new iphone("Blanco", "140g" , "5`", "Full HD", "4GB")
const celular3 = new iphone("Negro", "150g" , "5`", "Full HD", "8GB")

celular.Grabar();
celular.botonEncendido();
celular.tomarFoto();
celular.Grabar();
celular.reiniciar();
celular.botonEncendido();
celular.tomarFoto();

celular.imprimir();
celular2.imprimir();
celular3.imprimir();

class iphoneAltaGama extends iphone{
    constructor(color,peso,resolucion,camara,memoria,extra){
        super(color,peso,resolucion,camara,memoria);
        this.extra = extra;
    }

    grabarCamaraLenta(){
        if (this.encender==true) {
            alert("Estas grabando en camara lenta")
        }else{
            alert("El celular esta apagado")
        }
    }

    reconocimiento(){
        if (this.encender==true) {
            alert("Has activado el reconocimiento facial")
        }else{
            alert("El celular esta apagado")
        }
    }

    camaraExtra(){
        if (this.encender==true) {
            alert("Has activado la camara extra")
        }else{
            alert("El celular esta apagado")
        }
    }

    infoAltaGama(){
        document.write("<br>"+`Este celular es de color ${this.color}, y tiene un peso de ${this.peso} y tiene una resolucion de pantalla de ${this.resolucion} y su resolucion de camara es de ${this.camara} con un espacio de memoria de ${this.memoria} y una camara extra de ${this.extra}`)
    }
    
}

const celular4 = new iphoneAltaGama("Rojo", "150g" , "5`", "Full HD", "2GB", "FULL 4K");
const celular5 = new iphoneAltaGama("Rojo", "150g" , "5`", "Full HD", "6GB", "FULL 4K")


celular4.reconocimiento();
celular4.botonEncendido();
celular4.reconocimiento();
celular4.grabarCamaraLenta();
celular4.botonEncendido();
celular4.grabarCamaraLenta();

celular4.infoAltaGama();
celular5.infoAltaGama();