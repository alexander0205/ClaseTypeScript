class Persona{

    private nombre: string;
    private dni: string;    
}


class AlumnoextendsPersona{

    private matricula: string;
}


class DocenteextendsAlumno{

    private cedula: string;
}


let persona: Persona = new Persona();
let alumno: Alumno = new Alumno();
let docente: Docente = new Docente();


persona = alumno;
persona = docente;

alumno = persona; // Error: Property 'matricula' is missing in type 'Persona' but required in type 'Alumno'
alumno = docente;

docente = persona; // Error: Type 'Persona' is missing the following properties from type 'Docente': cedula, matricula
docente = alumno; // Error: Property 'cedula' is missing in type 'Alumno' but required in type 'Docente'.