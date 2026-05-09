import React from 'react';
import { Link } from 'react-router-dom';
import './../../Style/FooterPagesCSS.css';

const PoliticaCookies = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-content-card">
        <Link to="/home" className="back-btn-footer">← Volver al Gran Comedor</Link>
        
        <h2>Política de Cookies 🍪</h2>
        
        <h3>¿Que son las Cookies?</h3>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en
          su dispositivo cuando visita una página web. Estas cookies permiten
          que el sitio web recuerde sus preferencias y acciones durante un periodo
          de tiempo, mejorando la experiencia del usuario.
        </p>

        <h3>¿Qué tipo de cookies utilizamos?</h3>
        <p>En este sitio web, utilizamos las siguientes cookies:</p>
        <ul>
          <li>
            <strong>Cookies necesarias:</strong> Son esenciales para el funcionamiento
            del sitio web y no pueden desactivarse.
          </li>
          <li>
            <strong>Cookies de rendimiento:</strong> Recogen información sobre cómo
            se utiliza el sitio web, como las páginas que se visitan y los
            errores que puedan ocurrir.
          </li>
          <li>
            <strong>Cookies funcionales:</strong> Permiten recordar las opciones que
            el usuario selecciona y mejorar la funcionalidad del sitio.
          </li>
          <li>
            <strong>Cookies de publicidad:</strong> Se utilizan para personalizar los
            anuncios mostrados a los usuarios según sus preferencias.
          </li>
        </ul>

        <h3>¿Cómo puedo controlar las cookies?</h3>
        <p>
          Puede configurar su navegador para rechazar o eliminar las cookies,
          pero algunas funcionalidades del sitio pueden no funcionar correctamente
          si lo hace. Para más información sobre cómo gestionar las cookies, consulte
          la configuración de su navegador o el sitio web del fabricante del navegador.
        </p>

        <h3>Aceptación de la política de cookies</h3>
        <p>
          Al continuar navegando en este sitio web, usted acepta el uso de cookies
          conforme a esta Política de Cookies. Si no está de acuerdo con el uso de
          cookies, debe dejar de utilizar el sitio o configurar su navegador para
          bloquearlas.
        </p>
      </div>
    </div>
  );
};

export default PoliticaCookies;