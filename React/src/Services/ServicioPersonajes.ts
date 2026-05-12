import {PersonajeMostDTO, PersonajeVistDTO} from './../Type/Personaje';
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

    getDetallePersonaje: async (id: number): Promise<PersonajeVistDTO> => {
        const token = localStorage.getItem('token');
        
        // Fíjate que aquí concatenamos el ID en la URL
        const response = await fetch(`${API_URL}/MostrarPersonaje/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const data= await response.json();
        console.log(data);
        if (!response.ok) {
            if (response.status === 404) throw new Error("El personaje no existe en los archivos");
            throw new Error("Error al obtener el expediente detallado");
        }

        return data;
    }
};

export default PersonajeService;