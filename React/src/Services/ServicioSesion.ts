// src/Services/AuthService.ts
import { alertaError } from '../Utils/Alertas';
import { SesionDTO,RegistroDTO } from './../Type/Usuario';

const API_URL = '/api/Usuarios';

export const loginUsuario = async (datosSesion: SesionDTO) => {
    try {
        const response = await fetch(`${API_URL}/Sesion`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosSesion)
        });
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        localStorage.setItem('usuario', JSON.stringify(data));
        if (!response.ok) {
             alertaError('Credenciales no encontradas en el Libro de Escolarización');
        }
    } catch (error) {
        console.error("Error de autenticación:", error);
        throw error;
    }
};

export const registrarUsuario = async (nombre: String, email: String,contraseña:String,repcontraseña:String) => {
    const usuario: RegistroDTO={
    nombre: nombre,
    email:email,
    contraseña:contraseña,
    repcontraseña:repcontraseña
    }

    try {
        const response = await fetch(`${API_URL}/Registro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        localStorage.setItem('usuario', JSON.stringify(data));
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.mensaje || 'Error al escribir en el pergamino');
        }
    } catch (error) {
        console.error("Error en RegistroService:", error);
        throw error;
    }
};