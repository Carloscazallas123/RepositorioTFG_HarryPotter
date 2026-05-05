// src/Services/AuthService.ts
import { alertaError } from '../Utils/Alertas';
import { SesionDTO } from './../Type/Usuario';

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
        console.log('Respuesta del servidor:', await response.json());
        if (!response.ok) {
             alertaError('Credenciales no encontradas en el Libro de Escolarización');
        }
    } catch (error) {
        console.error("Error de autenticación:", error);
        throw error;
    }
};