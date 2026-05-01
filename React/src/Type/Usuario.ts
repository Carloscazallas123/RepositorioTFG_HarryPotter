export interface RegistroDTO {
    nombre: String;
    email: number;
    contraseña: String;
    repcontraseña: String;
};

export interface SesionDTO {
    nombre: String;
    contraseña: String;
};

export interface UsuarioFullDTO {
    id: number;
    nombre: String;
    email: number;
    casa: String;
    puntos: number;
    objetos: number[];
    personajes: number[];
}