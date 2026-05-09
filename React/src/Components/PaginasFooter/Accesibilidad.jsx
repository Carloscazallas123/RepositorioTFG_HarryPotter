import React from 'react';
import { Link } from 'react-router-dom';
import './../../Style/FooterPagesCSS.css';

const Accesibilidad = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-content-card">
        <Link to="/" className="back-btn-footer">← Volver al Gran Comedor</Link>
        
        <h2>Declaración de Accesibilidad 👓</h2>
        
        <h3>Compromiso con la Accesibilidad</h3>
        <p>
          En HogwartsWeb, nos comprometemos a garantizar la accesibilidad total
          de nuestro sitio para todas las personas, incluidas aquellas con discapacidades.
          Trabajamos de acuerdo con las pautas del <strong>WCAG 2.1</strong> (Web Content Accessibility
          Guidelines) para asegurar que el contenido de nuestro sitio web sea accesible
          para todos los usuarios, independientemente de sus capacidades o dispositivos.
        </p>

        <h3>Compromiso con el Nivel AA</h3>
        <p>
          Nuestro objetivo es cumplir con los estándares de accesibilidad <strong>WCAG 2.1</strong> en el
          nivel <strong>AA</strong>, lo que significa que nuestro sitio debe ser accesible para la mayoría de
          las personas, incluidos los usuarios con discapacidades auditivas, visuales, motoras
          y cognitivas.
        </p>

        <h3>Herramientas para la Verificación</h3>
        <p>
          Para garantizar que nuestro sitio web cumpla con estos estándares, hemos utilizado
          varias herramientas y métodos para probar la accesibilidad:
        </p>
        <p>
          <strong>WAVE:</strong> Utilizamos la herramienta para analizar la accesibilidad visual de las páginas
          de nuestro sitio. Esta herramienta nos permite identificar problemas de accesibilidad
          visual como errores en contraste de colores, problemas de navegación y otros aspectos
          importantes para los usuarios con discapacidades visuales.
        </p>

        <h3>Objetivos de Accesibilidad</h3>
        <p>Nos esforzamos por cumplir con las siguientes pautas de accesibilidad:</p>
        <ul>
          <li>
            <strong>Perceptible:</strong> La información y los componentes de la interfaz de usuario deben
            presentarse de una manera que los usuarios puedan percibir, ya sea visualmente,
            auditivamente o táctilmente.
          </li>
          <li>
            <strong>Operable:</strong> Los componentes de la interfaz de usuario deben ser operables por
            los usuarios, incluso aquellos que no puedan usar un mouse o que utilicen
            tecnologías asistivas.
          </li>
          <li>
            <strong>Comprensible:</strong> La información debe ser clara y fácil de entender, y
            los componentes de la interfaz deben ser fáciles de operar.
          </li>
          <li>
            <strong>Robusto:</strong> El contenido debe ser lo suficientemente robusto como para ser
            interpretado por una amplia variedad de agentes de usuario, incluidas las
            tecnologías asistivas.
          </li>
        </ul>

        <h3>Proceso de Mejoras Continuas</h3>
        <p>
          Aunque hemos tomado medidas para garantizar que nuestro sitio web sea accesible,
          reconocemos que la accesibilidad web es un esfuerzo continuo. Estamos comprometidos
          en realizar mejoras periódicas y en mantener el cumplimiento con las normas de accesibilidad.
          Si encuentras algún problema de accesibilidad en nuestro sitio, por favor, no dudes en ponerte
          en contacto con nosotros para que podamos trabajar juntos para solucionarlo.
        </p>

        <h3>Contacta con Nosotros</h3>
        <p>
          Si tienes preguntas o comentarios sobre nuestra declaración de accesibilidad,
          o si necesitas asistencia adicional, por favor contáctanos a través de:
        </p>
        <p>
          <strong>Correo electrónico:</strong> Hogwartsweb@gmail.com <br />
          <strong>Teléfono:</strong> +34 920 64 60 57
        </p>
      </div>
    </div>
  );
};

export default Accesibilidad;