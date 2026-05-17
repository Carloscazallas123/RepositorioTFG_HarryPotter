import React from 'react';
import './../../Style/Banner/BannerMinijuegos.CSS.css'

const BannerMinijuegos = () => {
  return (
    <section className="HeroSection">
      <div className="TextContenty">
        <h1 className="Title">Seccion de Minijuegos</h1>
        <p className="Description">
          Supera los desafíos mágicos para demostrar tus habilidades y reflejos
        </p>
        <span className="Quote">- Albus Dumbledore</span>
      </div>
      <div className="VisualContent">
        <img src="./../../../public/Imagenes/Harry con escoba.png" className="CharacterImage" alt="HarryEscoba" />
      </div>
    </section>
  );
};

export default BannerMinijuegos;