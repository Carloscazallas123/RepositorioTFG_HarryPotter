export interface RegistroDTO {
    nombre: string;
    email: string;
    contraseña: string;
    repcontraseña: string;
};

export interface SesionDTO {
    nombre: string;
    contraseña: string;
};

export interface UsuarioFullDTO {
    idusuario: number;
    nombre: string;
    email: string;
    casa: string;
    puntos: number;
    objetos: number[];
    personajes: number[];
};

export interface UsuarioPuntosDTO {
    usuario: UsuarioFullDTO;
    puntaje: number;
};

export interface UsuarioCasaDTO {
    usuario: UsuarioFullDTO;
    casa: string;
};