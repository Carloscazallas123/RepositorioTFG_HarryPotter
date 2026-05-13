export interface ComentarDTO {
    descripcion: String;
    valor: number;
    fecha?: Date;
    id: number;
};

export interface ComentarioMostDTO {
    id_comentario: number;
    descripcion: String;
    valor: number;
    fecha: Date;
    usuario: String;
};