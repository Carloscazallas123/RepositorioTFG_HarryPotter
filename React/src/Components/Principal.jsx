import React from 'react';
import './Layout.css';

const MainContent = () => {
  return (
    <main className="hp-main-content">
      
      {/* SECCIÓN 1: BIENVENIDA (Hero Section) */}
      <section className="hp-hero">
        <div className="hero-text">
          <h1 className="hero-title">Bienvenido a HogwartWeb</h1>
          <p className="hero-description">
            Adéntrate a esta página web llena de magia y sumérgete en el maravilloso mundo de Hogwarts. 
            Descubre tu casa, supera los minijuegos y compra productos de la serie.
          </p>
          <span className="hero-quote">- Albus Dumbledore</span>
        </div>
        <div className="hero-image-container">
          {/* Aquí iría la imagen de Harry en escoba que tienes en el HTML */}
          <div className="magic-glow-effect"></div>
          <img src="./Imagenes/HarryPotter_Caricatura.png" alt="Harry Potter" className="harry-hero-img" />
        </div>
      </section>

      {/* SECCIÓN 2: MANUAL ORIENTATIVO (Tarjetas) */}
      <section className="hp-manual">
        <h2 className="section-title">Manual Orientativo</h2>
        <div className="cards-grid">
          
          {/* TARJETA 1: CUESTIONARIO */}
          <div className="hp-card">
            <div className="card-header">
              <img src="./Imagenes/Iconos/Libro_Icono.png" alt="Libro" className="card-mini-icon" />
            </div>
            <div className="card-body">
              <img src="./Imagenes/Sombrero Seleccionador.png" alt="Sombrero" className="card-main-img" />
              <a href="#" className="card-link">Cuestionario</a>
              <p className="card-text">
                Responde a las preguntas del cuestionario para evaluar tus conocimientos sobre el mundo mágico.
              </p>
              <img src="./Imagenes/Iconos/Sombrero_Icono.png" alt="Icono Sombrero" className="card-footer-icon" />
            </div>
          </div>

          {/* TARJETA 2: MINIJUEGOS */}
          <div className="hp-card">
            <div className="card-header">
              <img src="./Imagenes/Iconos/Libro_Icono.png" alt="Libro" className="card-mini-icon" />
            </div>
            <div className="card-body">
              <img src="./Imagenes/Minijuegos.png" alt="Minijuegos" className="card-main-img" />
              <a href="#" className="card-link">Minijuegos</a>
              <p className="card-text">
                Adéntrate a los distintos minijuegos para obtener la mayor cantidad de puntos posibles.
              </p>
              <img src="./Imagenes/Iconos/Snitch_Icono.png" alt="Snitch" className="card-footer-icon" />
            </div>
          </div>

          {/* TARJETA 3: TIENDA */}
          <div className="hp-card">
            <div className="card-header">
              <img src="./Imagenes/Iconos/Libro_Icono.png" alt="Libro" className="card-mini-icon" />
            </div>
            <div className="card-body">
              <img src="./Imagenes/Tienda.png" alt="Tienda" className="card-main-img" />
              <a href="#" className="card-link">Tienda</a>
              <p className="card-text">
                Compra productos exclusivos de la serie Harry Potter con los puntos obtenidos.
              </p>
              <img src="./Imagenes/Iconos/Buho_Icono.png" alt="Buho" className="card-footer-icon" />
            </div>
          </div>

        </div>
      </section>

    </main>
  );

};

export default MainContent;

