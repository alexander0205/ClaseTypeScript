type Dni =Number;
interface Persona{
    altura?:number;
    edad:number;
    nombre: string;
    apellido:string;
    dni:Dni   
}


const persona: Persona = {

    edad:27,
    nombre: 'Alan',
    apellido:'Buscalino',
    dni:36601731 
}