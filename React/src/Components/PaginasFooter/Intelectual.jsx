import React from 'react';
import { Link } from 'react-router-dom';
import './../../Style/FooterPagesCSS.css';

const PropiedadIntelectual = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-content-card">
        <Link to="/" className="back-btn-footer">← Volver al Gran Comedor</Link>
        
        <h2>Propiedad Intelectual ⚖️</h2>
        
        <h3>Derechos de Autor</h3>
        <p>
          Todo el contenido disponible en este sitio web, incluyendo pero no
          limitado a textos, imágenes, gráficos, logotipos, íconos, software
          y materiales, es propiedad de <strong>Carlos Chacon Cazallas</strong>, o se tiene
          el derecho de uso y distribución. El acceso a este sitio no implica
          que el usuario pueda disponer de los contenidos de forma gratuita
          o sin restricciones.
        </p>

        <h3>Licencia de Uso</h3>
        <p>
          El uso de cualquier material del sitio web está sujeto a las condiciones
          de uso definidas por la ley de propiedad intelectual y otras leyes aplicables.
          Los usuarios tienen derecho a visualizar el contenido del sitio para fines
          personales y no comerciales, pero está prohibido reproducir, distribuir o
          modificar dicho contenido sin el consentimiento expreso de los propietarios
          de los derechos.
        </p>

        <h3>Marcas Registradas</h3>
        <p>
          El nombre, logotipos y demás signos distintivos empleados en este sitio web
          son marcas registradas y propiedad de <strong>Carlos Chacon Cazallas</strong> o de terceros
          que han autorizado su uso. Queda prohibido su uso sin la debida autorización.
        </p>

        <h3>Responsabilidad</h3>
        <p>
          Nos reservamos el derecho de modificar o actualizar los contenidos
          del sitio web en cualquier momento. Sin embargo, no garantizamos
          que el contenido del sitio sea exacto, completo o esté libre de errores.
          El acceso y uso de los contenidos del sitio es bajo el propio riesgo del usuario.
        </p>

        <h3>Enlaces Externos</h3>
        <p>
          Este sitio puede contener enlaces a otros sitios web. Estos enlaces
          se proporcionan únicamente para conveniencia del usuario. No nos
          hacemos responsables de los contenidos o políticas de privacidad de esos sitios.
        </p>
      </div>
    </div>
  );
};

export default PropiedadIntelectual;