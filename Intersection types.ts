interface Interface1{
    prop1:number;
}

interface Interface2{
    prop2:number;
    prop3:number;
}

type InterfaceMix = Interface1 & Interface2;


const interfaceMix : InterfaceMix={
    prop1:2,
    prop2:2,
    prop3:2,
    
}