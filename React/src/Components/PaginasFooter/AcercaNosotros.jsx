import React from 'react';
import { Link } from 'react-router-dom';
import './../../Style/FooterPagesCSS.css';

const AcercaDeNosotros = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-content-card">
        <Link to="/" className="back-btn-footer">← Volver al Gran Comedor</Link>
        
        <h2>Sobre HogwartWeb 🏰</h2>
        <p>
          Bienvenido a <strong>HogwartWeb</strong>, el rincón digital diseñado
          para aquellos que aún esperan su carta de Hogwarts.
          No somos solo una tienda de reliquias; somos el campo
          de entrenamiento donde tu habilidad con la varita
          determina el destino de tu Casa.
        </p>
        
        <h3>Nuestra Misión</h3>
        <p>
          Nuestra plataforma nació con un propósito claro:
          premiar la destreza y el conocimiento mágico.
          Creemos que un verdadero mago no solo nace,
          sino que se hace a través de la práctica y la
          superación de desafíos. Aquí, cada clic cuenta
          y cada respuesta te acerca más a la gloria.
        </p>
        
        <h3>Compromiso de Calidad</h3>
        <p>
          En este espacio, la Privacidad y la Accesibilidad
          son nuestras prioridades (protegidas por los mejores
          encantamientos <em>Protego</em>). Queremos que todo mago
          o bruja, sin importar su origen, pueda disfrutar de
          una experiencia fluida, segura y, sobre todo, mágica.
        </p>
      </div>
    </div>
  );
};

export default AcercaDeNosotros;