import { UsuarioFullDTO, UsuarioCasaDTO } from "../Type/Usuario";

// @ts-ignore
const API_URL = '/api';

const CasaService = {
  getUsuarioActualizado: async (casa: string): Promise<[UsuarioFullDTO]> => {
    console.log(casa);
    const token = localStorage.getItem('usuario');
    if (!token) {
        throw new Error('Token de usuario no encontrado');
    }
            const TokenUsuario: UsuarioFullDTO = JSON.parse(token);
            console.log(TokenUsuario);
            const usuario: UsuarioCasaDTO ={
                usuario: TokenUsuario,
                casa: casa,
            }
            console.log(usuario)
            const response = await fetch(`${API_URL}/Casa`, {
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

export default CasaService;