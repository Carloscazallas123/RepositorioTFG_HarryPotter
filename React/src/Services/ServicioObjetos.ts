import { UsuarioFullDTO } from './../Type/Usuario';
import { ObjetoInvDTO, ObjetTiendDTO } from './../Type/Objeto';
const API_URL = '/api/Objetos';

const ObjetoService = {
    getListaUsuario: async (): Promise<[ObjetoInvDTO]> => {
        const token = localStorage.getItem('usuario');
        if (!token) {
            throw new Error('Token de usuario no encontrado');
        }
        const usuario: UsuarioFullDTO = JSON.parse(token);
        const response = await fetch(`${API_URL}/Inventario`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`, // El token va aquí (Header)
            'Content-Type': 'application/json'  // Avisamos que enviamos JSON
            },
        // LA LISTA VA AQUÍ (Body)
        // Si pasas [1, 2, 3], JSON.stringify lo convierte en "[1,2,3]"
        body: JSON.stringify(usuario.objetos) 
        });
        console.log(response);
        if (!response.ok) {
        throw new Error('No se pudo validar el acceso al inventario');
        }

        return await response.json();
    },

    getTienda: async (): Promise<[ObjetTiendDTO]> => {
    try {
      const response = await fetch(`${API_URL}/Tienda`);
      if (!response.ok) throw new Error('Error al conectar con Hogwarts'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error en el servicio:", error);
      throw error;
    }
    },

    Comprar: async (id:number) => {
    try {
      const response = await fetch(`${API_URL}/Tienda`);
      if (!response.ok) throw new Error('Error al conectar con Hogwarts'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error en el servicio:", error);
      throw error;
    }
    }
};

export default ObjetoService;