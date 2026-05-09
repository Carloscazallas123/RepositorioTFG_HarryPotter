import React from 'react';
import { Link } from 'react-router-dom';
import './../../Style/FooterPagesCSS.css';

const MapaDelSitio = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-content-card">
        <Link to="/" className="back-btn-footer">← Volver al Gran Comedor</Link>
        
        <h2>Mapa del Sitio 🗺️</h2>
        <p>
          A continuación se presenta el mapa del sitio, donde podrás
          encontrar todos los enlaces disponibles para navegar por el sitio:
        </p>

        <h3>Secciones Principales</h3>
        <ul>
          <li><Link to="/">Pagina Principal</Link></li>
          <li><Link to="/cuestionario">Cuestionario</Link></li>
          <li><Link to="/minijuegos">Minijuegos</Link></li>
          <li><Link to="/tienda">Tienda</Link></li>
          <li><Link to="/personajes">Personajes</Link></li>
          <li><Link to="/inventario">Inventario</Link></li>
        </ul>

        <h3>Enlaces Adicionales</h3>
        <ul>
          <li><Link to="/accesibilidad">Accesibilidad</Link></li>
          <li><Link to="/cookies">Politica de Cookies</Link></li>
          <li><Link to="/guia-estilos">Guia de Estilos</Link></li>
          <li><Link to="/mapa-ruta">Mapa de la Ruta</Link></li>
          <li><Link to="/propiedad">Propiedad Intelectual</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default MapaDelSitio;