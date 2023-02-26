// CONCEPTO BASICO DE POO
class animal{
    // Aca creamos el constructor donde ponemos los parametros
    constructor(especie,edad,color){
        // Creamos los atributos, o a un objeto (this.name) le damos un atributo (parametro)
        this.especie= especie;
        this.edad= edad;
        this.color= color;
        this.info=`Hola, soy un ${especie}, tengo una edad de ${edad} años, y soy de color ${color}`;
    }
    // Podemos crear una funcion para realizar procesos mas rapidos
    // No se permiten funciones flechas
    verInfo(){
        document.write(this.info + "<br>");
    }
}
// Instanciamos el objeto
const perro = new animal("perro",4,"blanco");
const gato = new animal("gato",6,"negro");
const pajaro= new animal("perico",8,"verde");

document.write(perro.color + "<br>");

document.write(perro.info + "<br>");
document.write(gato.info + "<br>");
document.write(pajaro.info + "<br>");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

// CARACTERISTICAS DE LA POO

// Abstraccion
// Modularidad
// Encapsulamiento
// Polimorfismo

// HERENCIA
class animal1{
    
    constructor(especie,edad,color){
        
        this.especie= especie;
        this.edad= edad;
        this.color= color;
        this.info=`Hola, soy un ${especie}, tengo una edad de ${edad} años, y soy de color ${color}`;
    }
    
    verInfo(){
        document.write(this.info + "<br>");
    }
    
}

class dog extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza=null;
    }

    static ladrar(){
        alert("waw")
    }

    // El set lo utilizamos para modificar un nombre
    set setRaza(newName){
        this.raza=newName;
    }

    get getRaza(){
        return this.raza;
    }
 
}

const perro1 = new dog("perro",2,"marron");

perro1.verInfo();

// Como vimos, heredamos del metodo verInfo

// Como llamar a un metodo statico, si le quitamos el static al metodo ladrar no me servira
dog.ladrar();

// Como se llena un set
perro1.setRaza = "doberman";
// Como se llama un get
document.write(perro1.getRaza)