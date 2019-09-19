function log(target,key){
    console.log(key + 'se ha llamado');
}

class Persona{
    private name:string;
    constructor(name:string){
        this.name =name;
    }

    @log
    sayMyNmae(){
        console.log(this.name) 
    }
}


const persona:Persona = new Persona('Alan');
persona.sayMyNmae(); //Alan