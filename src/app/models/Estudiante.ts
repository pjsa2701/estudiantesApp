export class Estudiante {
    cedula: string;
    nombre: string;
    apellido: string;
    asignatura: string;
    nota1: number;
    nota2: number;
    promedio: number;
    estado: string;

    constructor(cedula:string, nombre: string, apellido: string, asignatura: string, nota1: number, nota2: number) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.asignatura = asignatura;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.promedio = (nota1+nota2)/2
        this.estado = this.promedio >= 7 ? "Aprobado" : "Reprobado";
    }
}
