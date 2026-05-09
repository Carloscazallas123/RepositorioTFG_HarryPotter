import React from 'react';
import { Link } from 'react-router-dom';
import './../Style/FooterCSS.css';

const Footer = () => {
  return (
      <div className="footer-container">
        
        {/* COLUMNA 1: LOGO Y REDES */}
        <div className="footer-column brand-col">
          <div className="social-links">
            <a href="https://www.facebook.com/harrypotter/" target='_blank'><img src="./../../../public/Iconos/Facebook_Icono.png" alt="Facebook" className='ImagenesIconos'/></a>
            <a href="https://www.instagram.com/harrypotterspain/?hl=es" target='_blank'><img src="./../../../public/Iconos/Instagram_Icono.png" alt="Instagram" className='ImagenesIconos'/></a>
            <a href="https://www.youtube.com/@harrypotter" target='_blank'><img src="./../../../public/Iconos/YouTube_Icono.png" alt="YouTube" className='ImagenesIconos'/></a>
          </div>
        </div>

        {/* COLUMNA 2: CONTENIDO DE LA SAGA */}
        <div className="footer-column">
          <ul className="footer-list">
            <li><a href="https://youtu.be/JahBsWRSfgw?si=k9beC0UQ5-6V6CVK" target='_blank'>Resumen de Películas</a></li>
            <li><a href="https://youtu.be/AcuP_gASZRc?si=rssVUMBKFM9IVDis" target='_blank'>Curiosidades de la saga</a></li>
            <li><a href="https://www.reddit.com/r/harrypotter/" target='_blank'>Reddit de la comunidad</a></li>
            <li><a href="https://youtu.be/OtxWSFyruO4?si=3Wu3lEJW1JnBZhpw" target='_blank'>Harry Potter HBO</a></li>
            <li> <Link to='/nosotros'>Acerca de Nosotros</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3: LEGAL Y GUÍAS */}
        <div className="footer-column divider-left">
          <ul className="footer-list mt-title">
            <li><Link to='/accesibilidad'>Accesibilidad</Link></li>
            <li><Link to='/intelectual'>Propiedad Intelectual</Link></li>
            <li><Link to='/mapa'>Mapa del Sitio</Link></li>
            <li><Link to='/estilo'>Guia de Estilo</Link></li>
            <li><Link to='/cookies'>Politica de Cookies</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4: CONTACTO */}
        <div className="footer-column contact-col">
          <div>
            <img src="./../../public/Iconos/Gafas_Icono.png" alt="GafasIcono" className='GafasIcono'/>
          </div>
          <h4 className="contact-title">Correo Electrónico:</h4>
          <a href="mailto:Hogwartsweb@gmail.com" className="footer-email">
            Hogwartsweb@gmail.com
          </a>
          <div className="footer-line"></div>
          <p className="footer-copy">@2026 Proyecto | Carlos Chacón Cazallas</p>
        </div>

      </div>
  );
};

export default Footer;