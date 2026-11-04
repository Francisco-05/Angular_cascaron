export interface Alumno {
    idAlumno: number;
    nombre: string;
    aPaterno: string;
    aMaterno: string;
    idCarrera: number;
    fecRegistro: string;
    carrera: string;
}


export interface AlumnoDTO{
    nombre: string;
    aPaterno: string;
    aMaterno: string;
    idCarrera: number;
}