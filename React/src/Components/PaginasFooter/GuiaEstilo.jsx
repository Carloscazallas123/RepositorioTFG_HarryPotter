import React from 'react';
import { Link } from 'react-router-dom';
import './../../Style/FooterPagesCSS.css';

const GuiaEstilo = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-content-card">
        <Link to="/" className="back-btn-footer">← Volver al Gran Comedor</Link>
        
        <h2>Guía de Estilo ✒️</h2>
        <p>
          Las siguientes son las guías de estilos utilizadas en nuestro sitio web.
          Estas normas aseguran que nuestra web sea accesible, coherente y
          de fácil navegación para todos los usuarios.
        </p>

        <h3>Paleta de Colores</h3>
        <p>Utilizamos una combinación que evoca la elegancia y el misterio del mundo mágico:</p>
        <ul>
          <li><strong>Color principal:</strong> <span style={{color: '#d4af37',backgroundColor: '#100f0f'}}>#d4af37 (Dorado)</span></li>
          <li><strong>Color complementario:</strong> <span style={{color: '#650707',backgroundColor: '#100f0f'}}>#650707 (Granate)</span></li>
          <li><strong>Color de fondo:</strong><span style={{color: '#0a122c',backgroundColor: '#908686'}}> #0a122c (Azul oscuro)</span></li>
          <li><strong>Color de texto:</strong><span style={{color: '#f5e6c5', backgroundColor: '#100f0f'}}> #f5e6c5 (Durazno)</span></li>
        </ul>

        <h3>Tipografía</h3>
        <p>La legibilidad es clave para nuestras antiguas crónicas:</p>
        <ul>
          <li><strong>Fuente para Títulos:</strong> Georgia</li>
          <li><strong>Fuente primaria:</strong> Garamont</li>
          <li><strong>Fuente secundaria:</strong> Times New Roman</li>
        </ul>

        <h3>Espaciado y Márgenes</h3>
        <p>
          Mantenemos una apariencia limpia mediante un espaciado interno de <strong>20-30px</strong> 
          en elementos principales y márgenes de <strong>10px</strong> para separar bloques.
        </p>

        <h3>Botones y Enlaces</h3>
        <p>
          Los botones utilizan un fondo <strong>Granate oscuro</strong> con texto <strong>Dorado</strong> y bordes redondeados. 
          Los enlaces mantienen el tono dorado para ser claramente visibles.
        </p>

        <h3>Accesibilidad</h3>
        <p>
          Cumplimos con los estándares <strong>WCAG 2.1 nivel AA</strong>, asegurando contraste adecuado, 
          navegación clara y alternativas textuales para todos los medios.
        </p>
      </div>
    </div>
  );
};

export default GuiaEstilo;