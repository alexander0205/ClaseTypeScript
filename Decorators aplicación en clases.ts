
function init(target){
    return class extends target{
        nombre = 'Alan';
        apellido = 'Buscaglia';

        sayMayName(){
            return `${this.nombre} ${this.apellido}`;
          }
    }
}
@init
class P{
    constructo(){
    }
    sayMyName(){
    }
}

const p:P= new P();
console.log(p.sayMyName()); //Alan buscaglia