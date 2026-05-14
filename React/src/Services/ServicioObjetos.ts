import { UsuarioFullDTO } from './../Type/Usuario';
import { CompraDTO, ObjetoInvDTO, ObjetTiendDTO } from './../Type/Objeto';
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
        body: JSON.stringify(usuario.objetos) 
        });
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

    Comprar: async (id:number): Promise<UsuarioFullDTO> => {
    const token = localStorage.getItem('usuario');
    if (!token) {
            throw new Error('Token de usuario no encontrado');
        }
    const usuario: UsuarioFullDTO = JSON.parse(token);
    const compra: CompraDTO = {
      usuario: usuario,
      idobjeto: id
    }
    try {
      const response = await fetch(`${API_URL}/Comprar`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`, // El token va aquí (Header)
            'Content-Type': 'application/json'  // Avisamos que enviamos JSON
            },
        body: JSON.stringify(compra) 
        });
      if (!response.ok) throw new Error('Error al conectar con Hogwarts'); 
      const data = await response.json();
      localStorage.setItem('usuario',JSON.stringify(data));
      return data;
    } catch (error) {
      console.log("Error en el servicio:", error);
      throw error;
    }
    }
};

export default ObjetoService;