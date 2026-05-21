import { UsuarioFullDTO } from "./Usuario";

export interface ObjetoInvDTO {
    id: number;
    nombre: string;
    descripcion: string;
    costo: number;
    personaje: string;
};

export interface ObjetTiendDTO {
    id: number;
    nombre: string;
    descripcion: string;
    costo: number;
};

export interface CompraDTO {
    usuario: UsuarioFullDTO;
    idobjeto: number;
};