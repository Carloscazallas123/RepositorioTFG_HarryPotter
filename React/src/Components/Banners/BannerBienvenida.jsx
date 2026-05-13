import React from 'react';
import './../../Style/Banner/BienvenidaCSS.css'; 

const Bienvenida = () => {
  return (
    <section className="heroSection">
      <div className="textContent">
        <h1 className="title">Bienvenido a HogwartWeb</h1>
        <p className="description">
          Sean bienvenidos a HogwartWeb, el portal definitivo para los amantes del mundo mágico de Harry Potter. Aquí encontrarás todo lo relacionado con la saga. ¡Únete a nosotros y sumérgete en el universo de Harry Potter como nunca antes!
        </p>
        <span className="quote">- Albus Dumbledore</span>
      </div>
      <div className="visualContent">
        <img src="./../../../public/Imagenes/HarryPotter_Caricatura.png" className="characterImage" alt="Harry" />
      </div>
    </section>
  );
};

export default Bienvenida;