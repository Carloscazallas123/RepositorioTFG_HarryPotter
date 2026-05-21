import React from 'react';
import { Link } from 'react-router-dom';
import './../../Style/FooterPagesCSS.css';
import { useNavigate } from 'react-router-dom';
const MapaDelSitio = () => {
const navigate = useNavigate();

  return (
    <div className="footer-page-container">
      <div className="footer-content-card">
        <button onClick={() => navigate(-1)} className="back-btn-footer">
        <span className="wand-spark">←</span> Volver al Gran Comedor
        </button>
        
        <h2>Mapa del Sitio 🗺️</h2>
        <p>
          A continuación se presenta el mapa del sitio, donde podrás
          encontrar todos los enlaces disponibles para navegar por el sitio:
        </p>

        <h3>Secciones Principales</h3>
        <ul>
          <li><Link to="/home">Pagina Principal</Link></li>
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