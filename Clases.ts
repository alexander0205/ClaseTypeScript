class Transporte{
    private velocidad: number;
    private formaDeMovilidad: string;

    constructor(velocidad:number,formaDeMovilidad:string){
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad;
    }

    getVelocidad(){
        return this.velocidad;
    }

    setVelocidad(velocidad:number){
        this.velocidad = velocidad
    }

    getFormaDeMovilidad(){
        return this.formaDeMovilidad;
    }

    setFormaDeMovilidad(formaDeMovilidad:string){
        this.formaDeMovilidad = formaDeMovilidad
    }


}


const transporte: Transporte = new Transporte(20,'suelo');
class Auto extends Transporte{
    private cantidadDePuertas: Number;

    constructor(velocidad:number,formaDeMovilidad:string,cantidadDePuertas:number){
        super(velocidad,formaDeMovilidad);
        this.cantidadDePuertas = cantidadDePuertas
    }

    getVelocidad(){
       // return 'mi velocidad es de un automovil  y es de :' + super.getVelocidad();
       return super.getVelocidad()
    }

    getCantidadDePuertas(){
        // return 'mi velocidad es de un automovil  y es de :' + super.getVelocidad();
        return this.cantidadDePuertas
     }

     setCantidadDePuertas(cantidadDePuertas:number){
        // return 'mi velocidad es de un automovil  y es de :' + super.getVelocidad();
         this.cantidadDePuertas = cantidadDePuertas
     }
}

const auto:Auto = new Auto(20,'suelo',4);