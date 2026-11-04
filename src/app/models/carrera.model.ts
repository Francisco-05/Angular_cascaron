export interface Carrera {
    idCarrera: number;
    descripcion: string;
}

//Se usa para crear y actualizar (IdCarrera va en la ruta)
export interface CarreraDTO{
    descripcion: string;
}