// src/Services/ReseñaService.js
import { ComentarDTO, ComentarioMostDTO } from './../Type/Comentario';
import { UsuarioFullDTO } from './../Type/Usuario';
const API_URL = '/api/Comentarios';
const ComentarioService = {


  getComentarios: async (): Promise<[ComentarioMostDTO]> => {
    try {
      const response = await fetch(`${API_URL}/MostrarComentarios`);
      if (!response.ok) throw new Error('Error al conectar con Hogwarts'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error en el servicio:", error);
      throw error;
    }
  },

  Comentar: async (descripcion: String, valor: number): Promise<ComentarDTO> => {
    const token = localStorage.getItem('usuario');
    if (!token) { throw new Error('Token de usuario no encontrado'); }
    const usuario: UsuarioFullDTO = JSON.parse(token);
    const comentario: ComentarDTO ={
      descripcion: descripcion,
      valor: valor,
      id: usuario.idusuario
    }
    try {
      const response = await fetch(`${API_URL}/Comentar`, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`, // El token va aquí (Header)
              'Content-Type': 'application/json'  // Avisamos que enviamos JSON
              },
          body: JSON.stringify(comentario) 
          });
      if (!response.ok) throw new Error('Error al conectar con Hogwarts'); 
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error en el servicio:", error);
      throw error;
    }
  }
};

export default ComentarioService;