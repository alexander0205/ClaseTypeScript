function logParameter(target, propertyName, index){
    // identificamos cada parametro que tenemos
    const metadataKey = `log_${propertyName}_parameters`;
     // checkeamos si es o no un arreglo
    if(Array.isArray(target[metadataKey])){
        // agregamos nuestro index al array
        target[metadataKey].push(index);
    }else{
         // creamos un arreglo con index como único parametro
        target[metadataKey] = [index];
    }
}

class P{
    greet(@logParameter message:string): string{
        return message
    }
}


const p =new P();
p.greet("hola");