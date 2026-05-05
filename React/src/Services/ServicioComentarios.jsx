// src/Services/ReseñaService.js

const API_URL = 'http://localhost:9090/api/Comentarios';

export const getReseñas = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al conectar con Hogwarts');
    return await response.json();
  } catch (error) {
    console.error("Error en el servicio:", error);
    return [];
  }
};