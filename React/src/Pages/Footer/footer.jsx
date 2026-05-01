import React from 'react';
import './../../Style/footer.css';

const Footer = () => {
  return (
    <footer className="hp-footer-custom">
      <div className="footer-container">
        
        {/* COLUMNA 1: LOGO Y REDES */}
        <div className="footer-column brand-col">
          <div className="social-links">
            <span className="social-icon">f</span>
            <span className="social-icon">ig</span>
            <span className="social-icon">yt</span>
          </div>
        </div>

        {/* COLUMNA 2: CONTENIDO DE LA SAGA */}
        <div className="footer-column">
          <ul className="footer-list">
            <li><a href="#">Resumen de Películas</a></li>
            <li><a href="#">Curiosidades de la saga</a></li>
            <li><a href="#">Reddit de la comunidad</a></li>
            <li><a href="#">Harry Potter HBO</a></li>
            <li><a href="#">Acerca de nosotros</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: LEGAL Y GUÍAS */}
        <div className="footer-column divider-left">
          <ul className="footer-list mt-title">
            <li><a href="#">Accesibilidad</a></li>
            <li><a href="#">Propiedad intelectual</a></li>
            <li><a href="#">Mapa del sitio</a></li>
            <li><a href="#">Guía de Estilo</a></li>
            <li><a href="#">Política de Cookies</a></li>
          </ul>
        </div>

        {/* COLUMNA 4: CONTACTO */}
        <div className="footer-column contact-col">
          <div className="footer-magic-icons">⚡ 👓</div>
          <h4 className="contact-title">Correo Electrónico:</h4>
          <a href="mailto:Hogwartsweb@gmail.com" className="footer-email">
            Hogwartsweb@gmail.com
          </a>
          <div className="footer-line"></div>
          <p className="footer-copy">@2026 Proyecto | Carlos Chacón Cazallas</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;