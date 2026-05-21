export interface ComentarDTO {
    descripcion: string;
    valor: number;
    fecha?: Date;
    id: number;
};

export interface ComentarioMostDTO {
    id_comentario: number;
    descripcion: string;
    valor: number;
    fecha: Date;
    usuario: string;
};