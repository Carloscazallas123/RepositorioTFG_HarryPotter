import { UsuarioFullDTO, UsuarioPuntosDTO } from "../Type/Usuario";
// @ts-ignore
const API_URL = `${import.meta.env.VITE_API_URL}/Usuarios`;

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
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'  
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