import { UsuarioFullDTO } from './../Type/Usuario';
import { ObjetoInvDTO } from './../Type/Objeto';
const API_URL = '/api/Objetos';

const ObjetoService = {
    getListaUsuario: async (): Promise<[ObjetoInvDTO]> => {
        const token = localStorage.getItem('usuario');
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
    }
};

export default ObjetoService;