// src/Services/ReseñaService.js
import { ComentarioMostDTO } from './../Type/Comentario';
const API_URL = '/api/Comentarios';

export const getComentarios = async (): Promise<[ComentarioMostDTO]> => {
  try {
    const response = await fetch(`${API_URL}/MostrarComentarios`);
    if (!response.ok) throw new Error('Error al conectar con Hogwarts'); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error en el servicio:", error);
    throw error;
  }
};