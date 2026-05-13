import React from 'react';
import './../../Style/Banner/BannerTienda.css'

const BannerTienda = () => {
  return (
    <section className="heroSection">
      <div className="textContent">
        <h1 className="title">Tienda de Objetos</h1>
        <p className="description">
          Adentrate en al magina tienda de Hogwarts y compra objetos caracteristicos de la serie.
        </p>
        <span className="quote">- Albus Dumbledore</span>
      </div>
      <div className="visualContent">
        <img src="./../../../public/Imagenes/Buho Libros.png" className="characterImage" alt="Buho" />
      </div>
    </section>
  );
};

export default BannerTienda;