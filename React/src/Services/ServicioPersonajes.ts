import {PersonajeMostDTO} from './../Type/Personaje';
import { UsuarioFullDTO } from './../Type/Usuario';
const API_URL = '/api/Personajes'; 

const PersonajeService = {
    getListaPersonajes: async (): Promise<PersonajeMostDTO[]> => {
        const token = localStorage.getItem('usuario');
        if (!token) {
            throw new Error('Token de usuario no encontrado');
        }
        const usuario: UsuarioFullDTO = JSON.parse(token);
        console.log(usuario);
        const response = await fetch(`${API_URL}/ListaPersonajes`, {
            method: 'POST', // Si solo es lectura, GET está bien
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Enviamos el token para validar la sesión
            },
            body: JSON.stringify(usuario.personajes)
        });

        if (!response.ok) {
            // Manejo de errores (401, 403, 500, etc.)
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Error del servidor: ${response.status}`);
        }

        return await response.json();
    },
};

export default PersonajeService;