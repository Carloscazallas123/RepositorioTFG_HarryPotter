import { UsuarioFullDTO, UsuarioPuntosDTO } from "../Type/Usuario";
const API_URL = '/api/Usuarios';

const MinijuegoService = {
  getUsuarioActualizado: async (puntaje: number): Promise<[UsuarioFullDTO]> => {
    console.log(puntaje);
    const token = localStorage.getItem('usuario');
    if (!token) {
        throw new Error('Token de usuario no encontrado');
    }
            const TokenUsuario: UsuarioFullDTO = JSON.parse(token);
            console.log(TokenUsuario);
            const usuario: UsuarioPuntosDTO ={
                usuario: TokenUsuario,
                puntaje: puntaje,
            }
            console.log(usuario)
            const response = await fetch(`${API_URL}/Puntaje`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, // El token va aquí (Header)
                'Content-Type': 'application/json'  // Avisamos que enviamos JSON
                },
            body: JSON.stringify(usuario) 
            });
            if (!response.ok) {
            throw new Error('No se pudo validar el acceso al inventario');
            }
            const data = await response.json();
            console.log(data);
            return data;
  },
};

export default MinijuegoService;